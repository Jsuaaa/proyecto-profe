# Despliegue — webpage (SPA de Finca)

Guía para construir y publicar la web corporativa de **Alimentos Finca S.A.S.**
Es una **SPA estática** (Vite + React + React Router). No tiene backend, base de
datos, login ni pagos: el resultado del build es un directorio de archivos estáticos
que cualquier servidor/CDN puede servir. **No requiere variables de entorno ni
secretos.**

---

## 1. Requisitos

- **Node.js ≥ 20.19** (o 22 LTS) — lo exige Vite 8.
- **pnpm ≥ 10** (`corepack enable` o `npm i -g pnpm`).

## 2. Build

```bash
cd webpage
pnpm install --frozen-lockfile   # instala dependencias (usa pnpm-lock.yaml)
pnpm build                       # tsc -b + vite build  ->  dist/
```

El artefacto queda en **`webpage/dist/`**:

```
dist/
├─ index.html                 # punto de entrada de la SPA
├─ assets/                    # JS + CSS con hash (cache-busting)
├─ fonts/                     # Poppins auto-alojada (.woff2) — sin CDN
├─ images/                    # todas las imágenes locales (0 hotlinks)
└─ favicon.svg
```

Todo es self-contained: fuentes e imágenes se sirven desde el propio `dist/`, sin
depender de `fonts.googleapis.com` ni de `finca.co` en runtime.

## 3. Servir como estático — **SPA fallback obligatorio**

La app usa **`BrowserRouter`** (rutas con path limpio: `/nosotros`,
`/productos/porcicultura`, …). Al recargar o entrar directo a una ruta que no sea `/`,
el servidor debe devolver **`/index.html` con HTTP 200** (no 404 ni 301) para que
React Router resuelva la ruta en el cliente. Los archivos reales (`/assets/*`,
`/images/*`, `/fonts/*`, `/favicon.svg`) se sirven tal cual.

> Sin este *fallback*, `/productos/porcicultura` daría 404 al recargar. Las rutas a
> verificar tras desplegar: `/`, `/nosotros`, `/productos`, `/productos/porcicultura`,
> `/noticias`, `/contactanos`, `/encuentranos`.

### nginx

```nginx
server {
  listen 80;
  root /usr/share/nginx/html;      # aquí va el contenido de dist/
  index index.html;

  # Cache largo para assets con hash; el HTML nunca se cachea.
  location /assets/ { expires 1y; add_header Cache-Control "public, immutable"; }

  # SPA fallback: cualquier ruta desconocida -> index.html (200).
  location / { try_files $uri $uri/ /index.html; }
}
```

### Caddy

```caddy
:80 {
  root * /usr/share/nginx/html
  encode gzip
  try_files {path} /index.html
  file_server
}
```

### Hosts tipo Netlify / Cloudflare Pages

Añade un archivo `_redirects` en `dist/` (o en `public/` para que el build lo copie):

```
/*  /index.html  200
```

### Node (prueba rápida, no para producción)

```bash
pnpm preview            # sirve dist/ con fallback SPA en http://localhost:4173
# o: npx serve -s dist  ( -s = modo SPA )
```

## 4. Coolify (Dockerfile — recomendado)

El repo ya incluye un **Dockerfile multi-etapa** y su **`nginx.conf`** listos para
producción: build con pnpm y `nginx:alpine` que sirve `dist/` con el *fallback* SPA,
`gzip` y cache-headers. No dependen de toggles del panel ni de CDNs, y la imagen **no
lleva secretos**. Los tres archivos viven en `webpage/`:

| Archivo          | Rol |
|------------------|-----|
| `Dockerfile`     | build multi-stage: `node:22-alpine` (pnpm build) → `nginx:alpine` |
| `nginx.conf`     | server `:80` con `try_files … /index.html` (SPA), `gzip` y cache |
| `.dockerignore`  | excluye `node_modules`, `dist`, `.git`, logs y basura de macOS |

Prueba local del build (opcional, para reproducir lo que hará Coolify):

```bash
docker build -t finca-web -f webpage/Dockerfile webpage   # imagen ~108 MB
docker run --rm -p 8088:80 finca-web                       # http://localhost:8088
```

### Pasos en Coolify

1. **New Resource → Application**, origen = este repositorio Git (rama `main`).
2. **Build Pack: `Dockerfile`**.
3. **Base Directory: `/webpage`** (ahí están el `Dockerfile`, el código y `nginx.conf`).
   Si tu versión de Coolify pide *Dockerfile Location* en lugar de *Base Directory*,
   apunta a `/webpage/Dockerfile`.
4. **Ports Exposes: `80`** (el contenedor escucha en el puerto 80).
5. **Sin variables de entorno ni secretos**: la SPA es 100 % estática y
   self-contained (fuentes e imágenes auto-alojadas, cero CDNs en runtime).
6. Asigna el dominio y deja que Coolify gestione TLS (Let's Encrypt).
7. **Deploy**. El *fallback* SPA ya está embebido: recargar `/productos/porcicultura`
   devuelve `index.html` con **200** (no 404).

> **Nota de permisos:** si el checkout se sirve desde un volumen que fuerza modos
> `0700`, el `Dockerfile` normaliza la lectura con `COPY --chmod=755` para que el
> worker de nginx (usuario no-root) pueda servir fuentes e imágenes copiadas de
> `public/`. En el checkout git normal de Coolify (`0644`) es un no-op.

**Alternativa sin Dockerfile** (build pack estático/Nixpacks): _Build command_
`pnpm install --frozen-lockfile && pnpm build`, _Publish/Output directory_ `dist`, y
**activa la opción de SPA** (o configura `try_files … /index.html`) para el fallback.

> **Subruta:** si NO se sirve en la raíz del dominio (p. ej. `midominio.com/finca/`),
> hay que fijar `base: '/finca/'` en `vite.config.ts` y reconstruir. Por defecto se
> asume despliegue en la raíz (`/`).

## 5. Verificación post-deploy

- Las 7 rutas responden **200** (incluida `/productos/porcicultura` recargando).
- Sin errores en la consola del navegador.
- Sin scroll horizontal a 360px de ancho.
- El `<title>` y la meta `description` cambian por ruta; `<html lang="es">`.

---

## 6. Licencias y atribución de las imágenes  ⚠️

**Uso académico.** Este proyecto es un trabajo de una especialización en marketing
digital. Las imágenes bajo `webpage/public/images/` (fotos de líneas de producto,
fichas de catálogo de porcicultura, fotos de la sección Nosotros/sostenibilidad,
noticias) y los **logotipos de la marca Finca** se obtuvieron del sitio real
**finca.co** (`www.finca.co/wp-content/uploads/…`) y se descargaron a local para el
build (se eliminaron los *hotlinks*; ver `progress/impl_webpage_f3_assets.md`).

Son **propiedad de Alimentos Finca S.A.S. / Grupo Bios** y aquí se usan únicamente con
fines educativos, sin ánimo de lucro. La tipografía **Poppins** se sirve auto-alojada
bajo la **SIL Open Font License 1.1**.

**Antes de cualquier uso en producción o comercial** hay que **revisar y sustituir**
estos recursos por material con licencia/derechos propios (fotografía original o de
banco con licencia, y el logotipo oficial autorizado por el titular de la marca). Los
íconos de redes sociales y el placeholder son SVG propios y no tienen esta restricción.

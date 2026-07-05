# webpage — Frontend SPA de Finca

Web corporativa de **Alimentos Finca S.A.S.** (Grupo Bios): una **SPA estática** que
recrea el sitio de marca y aplica las estrategias de marketing digital del proyecto.
Es **vitrina** — muestra las líneas de producto por especie, blog/noticias, formulario
de contacto y localizador de sedes. **Sin pagos, sin login, sin backend.**

Portada desde el design system del cliente (`../design-system/`): tokens de marca,
componentes y los `ui_kits/website/*.html` de referencia.

## Stack

- **Vite 8** + **React 19** + **TypeScript**.
- **Tailwind CSS v4** con el plugin oficial `@tailwindcss/vite` (config CSS-first:
  `@import "tailwindcss";` + bloque `@theme { … }`, **sin** `tailwind.config.js`).
- **React Router v7** (`react-router-dom`, `BrowserRouter`).
- **ESLint** (flat config) + **Prettier** con `prettier-plugin-tailwindcss`.
- Alias `@` → `src`. Fuente **Poppins auto-alojada** (sin CDN). Gestor: **pnpm**.

## Comandos

```bash
pnpm install   # instala dependencias
pnpm dev       # servidor de desarrollo (Vite) en http://localhost:5173
pnpm build     # typecheck (tsc -b) + build de produccion (Vite) -> dist/
pnpm preview   # sirve dist/ con fallback SPA (revisar el build) en :4173
pnpm lint      # ESLint sobre el proyecto
pnpm format    # Prettier: formatea y ordena clases de Tailwind
```

## Rutas

| Ruta                    | Página             | Componente     |
| ----------------------- | ------------------ | -------------- |
| `/`                     | Inicio             | `HomePage`     |
| `/nosotros`             | Nosotros           | `AboutPage`    |
| `/productos`            | Productos (líneas) | `ProductsPage` |
| `/productos/:slug`      | Categoría-detalle  | `CategoryPage` |
| `/noticias`             | Noticias / blog    | `BlogPage`     |
| `/contactanos`          | Contáctanos        | `ContactPage`  |
| `/encuentranos`         | Encuéntranos       | `FindUsPage`   |
| `*`                     | 404                | `NotFoundPage` |

`:slug` ∈ `ganaderia · avicultura · porcicultura · acuacultura · equinos · otros`
(ver `src/lib/products.ts`). El chrome (Navbar sticky, Footer, FAB) vive en
`RootLayout` y es común a todas las rutas.

## SEO por ruta

Cada página fija su `document.title` y su `<meta name="description">` mediante el hook
[`src/lib/useDocumentMeta.ts`](./src/lib/useDocumentMeta.ts) (también sincroniza
`og:title`/`og:description`). El fallback estático para el primer paint y los motores
sin JS está en [`index.html`](./index.html) (`<html lang="es">`, favicon, meta base).

## Estructura

```
webpage/
├─ public/            # estaticos servidos tal cual (favicon, fonts/, images/)
├─ src/
│  ├─ assets/         # imagenes importadas por el bundler (logo)
│  ├─ components/     # core (Button/Input/Badge/FAB), navigation, content, home, icons
│  ├─ sections/       # secciones por pagina (nosotros, productos, categoria, …)
│  ├─ layouts/        # RootLayout (<Outlet/> + chrome)
│  ├─ lib/            # site.ts, products.ts, assets.ts, cn.ts, useDocumentMeta.ts
│  ├─ pages/          # una pagina por ruta
│  ├─ styles/         # theme.css: entrada Tailwind + tokens @theme
│  ├─ App.tsx         # definicion de rutas (BrowserRouter)
│  └─ main.tsx        # punto de entrada React
├─ DEPLOY.md          # build + servir estatico (SPA fallback) + Coolify + licencias
├─ eslint.config.js · vite.config.ts · tsconfig*.json
```

## Tokens de tema (design system)

Los tokens de color/tipografía viven en [`src/styles/theme.css`](./src/styles/theme.css)
dentro del bloque `@theme`, como **espejo** de `../design-system/tokens/*.css` (fuente
de verdad de la marca). Cada `--color-*` genera utilidades (`bg-*`, `text-*`, …).

## Despliegue

Ver **[`DEPLOY.md`](./DEPLOY.md)**: build a `dist/`, servir como estático con
**fallback SPA a `index.html`** (imprescindible para `BrowserRouter`), receta de
Coolify y la **nota de licencias** de las imágenes (uso académico, provienen de
finca.co y deben sustituirse para producción).

## Nota sobre el linter

La plantilla de Vite 8 ya no trae ESLint por defecto (incorpora oxlint). Siguiendo el
requisito del proyecto se usa la configuración canónica de ESLint (flat config con
`typescript-eslint`, `eslint-plugin-react-hooks` y `eslint-plugin-react-refresh`) en
`eslint.config.js`.

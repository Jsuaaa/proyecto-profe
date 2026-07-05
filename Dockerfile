# syntax=docker/dockerfile:1
# =============================================================================
# Finca · SPA (Vite + React + TS) — imagen multi-stage para Coolify
# -----------------------------------------------------------------------------
#   builder  -> node:22-alpine, pnpm (via corepack), genera dist/ estatico.
#   runtime  -> nginx:alpine, sirve dist/ con SPA fallback + cache de assets.
# No requiere variables de entorno ni secretos. El build es 100% self-contained
# (fuentes e imagenes ya estan auto-alojadas en el propio bundle).
# =============================================================================

# ---------- Stage 1: build ----------
FROM node:22-alpine AS builder
WORKDIR /app

# pnpm gestionado por corepack y fijado a una version reproducible (lockfile v9).
# Actualizamos corepack primero para evitar el fallo de firmas al bajar pnpm 10.x.
RUN npm install -g corepack@latest \
 && corepack enable \
 && corepack prepare pnpm@10.30.1 --activate

# 1) Solo los manifiestos primero -> cachea la capa de dependencias mientras
#    el codigo fuente no cambie (mejor reutilizacion de capas en rebuilds).
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# 2) Luego el resto del codigo y el build de produccion (tsc -b + vite build).
COPY . .
RUN pnpm build

# ---------- Stage 2: runtime ----------
FROM nginx:alpine AS runtime

# Artefacto estatico: el contenido de dist/ va a la raiz que sirve nginx.
# --chmod normaliza permisos en la MISMA capa (sin duplicar la carpeta): Vite
# copia public/ (favicon, fonts, images) preservando el modo de origen; si el
# checkout viene de un volumen que fuerza 0700, el worker nginx (user "nginx",
# no root) no podria leerlos -> 403. 755 = legible por todos y dirs transitables.
COPY --chmod=755 --from=builder /app/dist /usr/share/nginx/html

# Config de nginx: SPA fallback (try_files -> /index.html), gzip y cache-headers.
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# nginx en primer plano (proceso principal del contenedor).
CMD ["nginx", "-g", "daemon off;"]

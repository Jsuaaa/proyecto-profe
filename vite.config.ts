import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // `tailwindcss` es el plugin oficial de Tailwind v4 (config CSS-first).
  plugins: [react(), tailwindcss()],
  resolve: {
    // Vite 8 resuelve nativamente los `paths` de tsconfig,
    // habilitando el alias `@` -> `src` (definido en tsconfig.app.json).
    tsconfigPaths: true,
  },
})

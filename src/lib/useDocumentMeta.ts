import { useEffect } from 'react'

/* ============================================================
   useDocumentMeta — SEO por-ruta para la SPA (sin dependencias).
   ------------------------------------------------------------
   La app es 100% client-rendered (Vite + React Router), así que
   fijamos el <title> y la <meta name="description"> en un efecto
   al montar/actualizar cada página. Mantiene además las etiquetas
   Open Graph básicas (og:title / og:description) sincronizadas.

   Se prefiere un hook propio a una librería (react-helmet-async)
   por peso y por compatibilidad con React 19: son cuatro líneas
   de DOM idempotentes. El fallback estático (primer paint, motores
   sin JS) vive en index.html.
   ------------------------------------------------------------ */

export interface DocumentMeta {
  /** Texto completo del <title> de la pestaña. */
  title: string
  /** Meta description (~150-160 caracteres). */
  description: string
}

/** Crea o actualiza una <meta> del <head> por su clave. */
function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function useDocumentMeta({ title, description }: DocumentMeta) {
  useEffect(() => {
    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
  }, [title, description])
}

import { BlogHero } from '@/sections/noticias/BlogHero'
import { FeaturedPost } from '@/sections/noticias/FeaturedPost'
import { ArticleFilterGrid } from '@/sections/noticias/ArticleFilterGrid'
import { useDocumentMeta } from '@/lib/useDocumentMeta'

/* ============================================================
   BlogPage (F8) — recreación de la página Noticias (blog) de
   Finca con paridad visual respecto a
   design-system/ui_kits/website/noticias.html.
   Secciones, en orden:
     1. BlogHero          — banda intro con gradiente (.pagehero).
     2. FeaturedPost      — post destacado (imagen + cuerpo verde).
     3. ArticleFilterGrid — filtro por categoría (estado React) +
                            grilla de artículos con ArticleCard.
   FeaturedPost + ArticleFilterGrid comparten el mismo contenedor
   .wrap del ui_kit (padding 64px 32px 88px). El chrome
   (Navbar/Footer/FAB) lo aporta RootLayout.
   ------------------------------------------------------------ */
export function BlogPage() {
  useDocumentMeta({
    title: 'Noticias · Finca',
    description:
      'Consejos y noticias de nutrición animal por especie: avicultura, porcicultura, ganadería, acuacultura y equinos. Aprende a mejorar tu producción con Finca.',
  })
  return (
    <>
      <BlogHero />
      <section className="site-wrap pb-[5.5rem] pt-16">
        <FeaturedPost />
        <ArticleFilterGrid />
      </section>
    </>
  )
}

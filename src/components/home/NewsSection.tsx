import { ArticleCard } from '@/components/content/ArticleCard'
import { noticias } from '@/lib/assets'

/* ============================================================
   NewsSection — grilla "Conoce más sobre tu producción" con
   3 ArticleCard. Paridad con index.html (#artgrid): mismos
   títulos del ui_kit e imágenes locales de assets.ts. Cada
   tarjeta enlaza al listado de noticias.
   ------------------------------------------------------------ */

const ARTICLES = [
  {
    title: 'Guía para una correcta alimentación de caballos',
    image: noticias.caballosGuia,
  },
  {
    title: '¿Cuál es la correcta alimentación de los caballos?',
    image: noticias.caballosAlimentacion,
  },
  {
    title: 'Lo que nos dejó la 2da Jornada Maestra de Acuacultura 2025',
    image: noticias.jornadaAcuacultura2025,
  },
]

export function NewsSection() {
  return (
    <section className="site-wrap py-[5.5rem]">
      <h2 className="mb-11 font-display text-[clamp(2rem,5vw,2.75rem)] font-bold leading-heading text-finca-green-deep">
        Conoce más sobre tu producción
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ARTICLES.map((article) => (
          <ArticleCard
            key={article.title}
            title={article.title}
            image={article.image}
            to="/noticias"
          />
        ))}
      </div>
    </section>
  )
}

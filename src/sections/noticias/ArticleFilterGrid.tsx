import { useState } from 'react'
import { ArticleCard } from '@/components/content/ArticleCard'
import { cn } from '@/lib/cn'
import { noticias, productLines } from '@/lib/assets'

/* ============================================================
   ArticleFilterGrid (F8) — filtro por categoría + grilla de
   artículos de la página Noticias. Paridad con noticias.html
   (#cats + #grid): pills de categoría (.cat) y grilla .grid3 de
   tarjetas ArticleCard. El filtro del ui_kit era imperativo (JS
   que re-renderizaba el DOM); aquí es estado React (useState),
   como pide F8.

   Datos literales del ui_kit (POSTS/CATS). Imágenes locales
   (assets.ts, 0 hotlinks) según el mapeo de F3:
     - Guia-...-caballos-1024x328.png → noticias.caballosAlimentacion
     - Lo-que-nos-dejo-...-2025.png    → noticias.jornadaAcuacultura2025
     - interna-uno-1.png              → noticias.caballosGuia
     - avicola/porci/ganaderia.webp   → productLines.*

   Grilla responsive (1 col → sm 2 → lg 3) para 360px sin scroll
   horizontal; a 1280px resuelve a 3 columnas como el ui_kit.
   ------------------------------------------------------------ */

const CATEGORIES = [
  'Todas',
  'Avicultura',
  'Porcicultura',
  'Ganadería',
  'Acuacultura',
  'Equinos',
] as const

type Category = (typeof CATEGORIES)[number]

type Post = {
  title: string
  image: string
  category: Exclude<Category, 'Todas'>
}

const POSTS: Post[] = [
  {
    title: '¿Cuál es la correcta alimentación de los caballos?',
    image: noticias.caballosAlimentacion,
    category: 'Equinos',
  },
  {
    title: 'Lo que nos dejó la 2da Jornada Maestra de Acuacultura 2025',
    image: noticias.jornadaAcuacultura2025,
    category: 'Acuacultura',
  },
  {
    title: 'Guía para una correcta alimentación de caballos',
    image: noticias.caballosGuia,
    category: 'Equinos',
  },
  {
    title: 'Claves para mejorar la conversión en pollo de engorde',
    image: productLines.avicultura,
    category: 'Avicultura',
  },
  {
    title: 'Manejo nutricional de cerdas en gestación',
    image: productLines.porcicultura,
    category: 'Porcicultura',
  },
  {
    title: 'Suplementación estratégica en ganado de leche',
    image: productLines.ganaderia,
    category: 'Ganadería',
  },
]

export function ArticleFilterGrid() {
  const [active, setActive] = useState<Category>('Todas')
  const visible =
    active === 'Todas' ? POSTS : POSTS.filter((post) => post.category === active)

  return (
    <>
      <div className="mb-9 flex flex-wrap gap-2.5">
        {CATEGORIES.map((category) => {
          const isActive = category === active
          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(category)}
              className={cn(
                'cursor-pointer rounded-pill border-2 px-5 py-[9px] font-display text-[0.88rem] font-semibold transition-colors duration-200',
                isActive
                  ? 'border-finca-green bg-finca-green text-white'
                  : 'border-finca-gray-300 bg-white text-finca-gray-700 hover:border-finca-green hover:text-finca-green-deep',
              )}
            >
              {category}
            </button>
          )
        })}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((post) => (
          <ArticleCard
            key={post.title}
            title={post.title}
            image={post.image}
            category={post.category}
            href="#"
          />
        ))}
      </div>
    </>
  )
}

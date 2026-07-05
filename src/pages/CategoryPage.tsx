import { useParams } from 'react-router-dom'
import { Button } from '@/components/core/Button'
import { getSpeciesCatalog } from '@/lib/products'
import { useDocumentMeta } from '@/lib/useDocumentMeta'
import { CategoryHero } from '@/sections/categoria/CategoryHero'
import { CategoryCatalog } from '@/sections/categoria/CategoryCatalog'
import { CategoryCta } from '@/sections/categoria/CategoryCta'

/* ============================================================
   CategoryPage (F7) — template de categoría-detalle
   "/productos/:slug" con paridad visual respecto a
   design-system/ui_kits/website/porcicultura.html.
   Data-driven por slug (src/lib/products.ts): mismo template para
   las 6 especies. Orden de secciones:
     1. CategoryHero    — pagehero de la especie (foto + degradado).
     2. CategoryCatalog — pestañas de gama + grilla (estado React).
     3. CategoryCta     — cotizar por WhatsApp / contacto.
   El chrome (Navbar/Footer/FAB) lo aporta RootLayout.
   ------------------------------------------------------------ */
export function CategoryPage() {
  const { slug } = useParams()
  const species = getSpeciesCatalog(slug)

  // El hook va antes del early-return: se ejecuta en ambas ramas.
  useDocumentMeta({
    title: species
      ? `${species.label} · Productos · Finca`
      : 'Línea no encontrada · Finca',
    description: species
      ? species.subtitle
      : 'La especie que buscas no está en nuestro catálogo. Explora todas las líneas de alimento balanceado Finca.',
  })

  if (!species) {
    return (
      <section className="site-wrap section-y text-center">
        <h1 className="font-display text-h2 font-bold leading-heading text-finca-green-deep">
          Línea no encontrada
        </h1>
        <p className="mx-auto mt-3 max-w-[46ch] text-finca-gray-600">
          La especie que buscas no está en nuestro catálogo. Explora todas
          nuestras líneas de producto.
        </p>
        <div className="mt-6 flex justify-center">
          <Button to="/productos" variant="outlineDark">
            Ver todas las líneas
          </Button>
        </div>
      </section>
    )
  }

  return (
    <>
      <CategoryHero
        label={species.label}
        subtitle={species.subtitle}
        image={species.heroImage}
      />
      {/* key=slug: reinicia la pestaña activa al cambiar de especie. */}
      <CategoryCatalog key={species.slug} species={species} />
      <CategoryCta species={species} />
    </>
  )
}

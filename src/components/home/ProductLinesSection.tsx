import { ProductCard } from '@/components/content/ProductCard'
import { productLines as productImages } from '@/lib/assets'
import { productLines as productSpecies } from '@/lib/site'

/* ============================================================
   ProductLinesSection — banda verde-tint con la grilla de las
   6 líneas de producto (ProductCard). Paridad con index.html
   (.lineas). Las especies y sus rutas salen de site.ts (fuente
   de verdad del catálogo); las fotos, de assets.ts (locales).
   "Otros" reutiliza la foto de cuyes, igual que el ui_kit
   (site.js mapea 'Otros' → FincaCuyes.webp).
   ------------------------------------------------------------ */

const IMAGE_BY_SLUG: Record<string, string> = {
  ganaderia: productImages.ganaderia,
  avicultura: productImages.avicultura,
  porcicultura: productImages.porcicultura,
  acuacultura: productImages.acuacultura,
  equinos: productImages.equinos,
  otros: productImages.cuyes,
}

export function ProductLinesSection() {
  return (
    <section className="bg-finca-green-tint">
      <div className="site-wrap py-[5.5rem]">
        <h2 className="mb-11 text-center font-display text-[clamp(2rem,5vw,2.75rem)] font-bold leading-heading text-finca-green-deep">
          Nuestras Líneas de Productos
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productSpecies.map((species) => (
            <ProductCard
              key={species.slug}
              title={species.label}
              image={IMAGE_BY_SLUG[species.slug] ?? productImages.ganaderia}
              to={`/productos/${species.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

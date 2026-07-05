import { ProductCard } from '@/components/content/ProductCard'
import { productLines as productImages } from '@/lib/assets'
import { productLines as productSpecies } from '@/lib/site'

/* ============================================================
   ProductLinesGrid (F6) — grilla de las líneas de producto de
   la página Productos. Paridad con
   design-system/ui_kits/website/productos.html: sección .wrap
   (1200px, padding 72px 32px) sobre fondo blanco con .grid3
   (3 columnas) de tarjetas ProductCard.

   Las especies y sus rutas (/productos/:slug) salen de site.ts
   (fuente de verdad del catálogo); las fotos, de assets.ts
   (locales, 0 hotlinks). "Otros" reutiliza la foto de cuyes,
   igual que el ui_kit (site.js mapea 'Otros' → FincaCuyes.webp).
   Se replica el mapeo de la Home (ProductLinesSection, F4
   aprobado) para mantener coherencia. La grilla es responsive
   (1 col → sm 2 col → lg 3 col) para 360px sin scroll horizontal;
   a 1280px resuelve a 3 columnas como el ui_kit.
   ------------------------------------------------------------ */

const IMAGE_BY_SLUG: Record<string, string> = {
  ganaderia: productImages.ganaderia,
  avicultura: productImages.avicultura,
  porcicultura: productImages.porcicultura,
  acuacultura: productImages.acuacultura,
  equinos: productImages.equinos,
  otros: productImages.cuyes,
}

export function ProductLinesGrid() {
  return (
    <section className="site-wrap py-[72px]">
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
    </section>
  )
}

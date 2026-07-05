import { useState } from 'react'
import { cn } from '@/lib/cn'
import { whatsappQuoteUrl, type SpeciesCatalog } from '@/lib/products'
import { ProductTile } from '@/sections/categoria/ProductTile'

/* ============================================================
   CategoryCatalog — pestañas Industrial/Tecnificado/Estándar +
   grilla de productos. Paridad con porcicultura.html (.tabs +
   .pgrid), pero con estado React: al pulsar una pestaña cambia
   la gama visible. Data-driven desde src/lib/products.ts, así el
   mismo componente sirve a las 6 especies. Las especies con
   `placeholder` muestran un aviso de portafolio de referencia.
   ------------------------------------------------------------ */

export interface CategoryCatalogProps {
  species: SpeciesCatalog
}

const tabBase =
  'cursor-pointer rounded-pill border-2 border-finca-green px-[26px] py-[11px] font-display text-[0.95rem] font-bold transition-colors duration-200'

export function CategoryCatalog({ species }: CategoryCatalogProps) {
  const [active, setActive] = useState(0)
  const tiers = species.tiers
  const current = tiers[active] ?? tiers[0]
  const panelId = `catalogo-${species.slug}`

  return (
    <section className="site-wrap py-16">
      {species.placeholder && (
        <p className="mx-auto mb-8 max-w-[64ch] rounded-card border border-finca-green-tint-2 bg-finca-green-tint px-5 py-3 text-center text-sm text-finca-green-deep">
          Portafolio de referencia · las fichas definitivas de {species.label} se
          publicarán próximamente.
        </p>
      )}

      {/* Pestañas por gama (estado React). */}
      <div
        role="tablist"
        aria-label={`Líneas de ${species.label}`}
        className="mb-11 flex flex-wrap justify-center gap-2.5"
      >
        {tiers.map((tier, i) => {
          const on = i === active
          return (
            <button
              key={tier.name}
              type="button"
              role="tab"
              aria-selected={on}
              aria-controls={panelId}
              onClick={() => setActive(i)}
              className={cn(
                tabBase,
                on
                  ? 'bg-finca-green text-white'
                  : 'bg-white text-finca-green-deep hover:bg-finca-green-tint',
              )}
            >
              {tier.name}
            </button>
          )
        })}
      </div>

      {/* Grilla de productos de la gama activa. */}
      <div
        id={panelId}
        role="tabpanel"
        aria-label={`Productos ${current.name} de ${species.label}`}
        className="grid grid-cols-2 gap-4 sm:gap-[22px] md:grid-cols-3 lg:grid-cols-4"
      >
        {current.products.map((product) => (
          <ProductTile
            key={product.name}
            name={product.name}
            image={product.image}
            href={whatsappQuoteUrl(product.name, species.label)}
          />
        ))}
      </div>

      <p className="mt-10 text-center text-[0.9rem] text-finca-gray-400">
        Portafolio de referencia con fines académicos · todas las especies usan esta
        misma plantilla (Industrial · Tecnificado · Estándar).
      </p>
    </section>
  )
}

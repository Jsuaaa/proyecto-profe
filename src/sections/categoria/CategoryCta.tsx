import { Button } from '@/components/core/Button'
import { whatsappSpeciesUrl, type SpeciesCatalog } from '@/lib/products'

/* ============================================================
   CategoryCta — cierre de la categoría-detalle con la conversión
   de modo vitrina: cotizar por WhatsApp o ir a Contáctanos. Banda
   verde de marca (utilidad .band) contenida, para separarla del
   footer verde bosque. El copy se personaliza por especie.
   ------------------------------------------------------------ */

export interface CategoryCtaProps {
  species: SpeciesCatalog
}

export function CategoryCta({ species }: CategoryCtaProps) {
  return (
    <section className="site-wrap pb-16">
      <div className="band px-8 py-12 text-center sm:px-12 sm:py-14">
        <h2 className="m-0 mb-3 font-display text-[clamp(1.6rem,4vw,2.25rem)] font-bold text-white">
          ¿Listo para potenciar tu {species.label.toLowerCase()}?
        </h2>
        <p className="mx-auto mb-7 max-w-[52ch] text-[1.0625rem] leading-[1.7] text-white/90">
          Cuéntanos sobre tu producción y un experto Finca te asesora con la línea y
          la etapa ideal para tus animales. Sin compromiso.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            href={whatsappSpeciesUrl(species.label)}
            target="_blank"
            rel="noopener noreferrer"
            variant="yellow"
            size="lg"
          >
            Cotizar por WhatsApp
          </Button>
          <Button to="/contactanos" variant="outline" size="lg">
            Contáctanos
          </Button>
        </div>
      </div>
    </section>
  )
}

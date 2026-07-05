import { Button } from '@/components/core/Button'
import { productLines } from '@/lib/assets'

/* ============================================================
   FindWorkSection — fila "Dónde encontrarnos" / "Trabaja con
   nosotros". Paridad con index.html (.findgrid): tarjeta ancha
   con foto (acuacultura) + degradado verde y CTA a ubicaciones;
   a la derecha, tarjeta verde-tint con CTA de empleo. El
   degradado usa color-mix sobre los tokens de marca (no hex
   sueltos).
   ------------------------------------------------------------ */

const findGradient =
  'linear-gradient(120deg, color-mix(in srgb, var(--finca-green-forest) 85%, transparent), color-mix(in srgb, var(--finca-green-vivid) 40%, transparent))'

export function FindWorkSection() {
  return (
    <section className="site-wrap grid gap-6 py-[5.5rem] lg:grid-cols-[1.4fr_1fr]">
      {/* Dónde encontrarnos */}
      <div
        className="relative min-h-[280px] overflow-hidden rounded-card bg-cover bg-center"
        style={{
          backgroundImage: `${findGradient}, url(${productLines.acuacultura})`,
        }}
      >
        <div className="flex h-full flex-col justify-center p-8 text-white sm:p-11">
          <h2 className="m-0 mb-3 font-display text-[clamp(1.75rem,4vw,2.25rem)] font-bold">
            Dónde encontrarnos
          </h2>
          <p className="m-0 mb-[22px] max-w-[40ch] text-[1.0625rem] leading-[1.7] opacity-95">
            Encuentra el lugar más cercano para comprar nuestras líneas de
            productos. ¡Para que a ellos, Finca se les note!
          </p>
          <div>
            <Button to="/encuentranos" variant="primary">
              Ver ubicaciones
            </Button>
          </div>
        </div>
      </div>

      {/* Trabaja con nosotros */}
      <div className="flex flex-col justify-center rounded-card bg-finca-green-tint p-8 sm:p-11">
        <h3 className="m-0 mb-2.5 font-display text-[clamp(1.5rem,3.5vw,1.75rem)] font-bold text-finca-green-deep">
          Trabaja con nosotros
        </h3>
        <p className="m-0 mb-[22px] leading-[1.6]">Haz parte de Finca.</p>
        <div>
          <Button href="#" variant="deep">
            Aplica aquí
          </Button>
        </div>
      </div>
    </section>
  )
}

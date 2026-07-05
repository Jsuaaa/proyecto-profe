import { Button } from '@/components/core/Button'
import { nosotros } from '@/lib/assets'

/* ============================================================
   SustainabilitySection — banda oscura a sangre (forest green).
   Paridad con index.html (.sost): eyebrow amarillo, título
   display, copy sobre certificaciones BAP / Global G.A.P. y CTA
   amarillo. A la derecha, caja blanca con los logos de
   certificación (imagen local de assets.ts).
   ------------------------------------------------------------ */

export function SustainabilitySection() {
  return (
    <section className="bg-finca-green-forest text-white">
      <div className="site-wrap grid items-center gap-10 py-[80px] lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="eyebrow text-finca-yellow">Somos maestros en</p>
          <h2 className="m-0 mb-[18px] mt-3 font-display text-[clamp(1.9rem,5vw,2.5rem)] font-bold">
            Sostenibilidad
          </h2>
          <p className="m-0 mb-[26px] max-w-[46ch] text-[1.0625rem] leading-[1.7] opacity-90">
            Aseguramos la calidad y la sostenibilidad en toda nuestra cadena de
            producción. Contamos con las certificaciones BAP y Global G.A.P.,
            que garantizan el bienestar animal, la seguridad alimentaria y la
            trazabilidad.
          </p>
          <Button to="/nosotros" variant="yellow">
            Conoce las certificaciones
          </Button>
        </div>

        <div className="rounded-card bg-white p-7 text-center">
          <img
            src={nosotros.certificacionesLogos}
            alt="Certificaciones BAP y Global G.A.P."
            className="mx-auto h-auto max-w-full"
          />
        </div>
      </div>
    </section>
  )
}

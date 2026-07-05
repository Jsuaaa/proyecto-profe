import { Button } from '@/components/core/Button'
import { nosotros } from '@/lib/assets'

/* ============================================================
   TraceabilitySection — Trazabilidad (split sobre verde-tint).
   Paridad con nosotros.html: foto a la izquierda y, a la
   derecha, eyebrow + titular + párrafo sobre el sistema de
   trazabilidad (BPM / SGC / número de lote) y CTA outline.
   Imagen local de assets.ts (sin hotlink).
   ------------------------------------------------------------ */
export function TraceabilitySection() {
  return (
    <section className="bg-finca-green-tint">
      <div className="site-wrap grid items-center gap-10 py-[5.5rem] lg:grid-cols-2 lg:gap-14">
        <img
          src={nosotros.trazabilidad}
          alt="Trazabilidad del alimento balanceado de Finca, del origen al producto"
          className="aspect-[4/3] w-full rounded-card object-cover shadow-card"
        />
        <div>
          <p className="eyebrow mb-3">Trazabilidad</p>
          <h2 className="m-0 mb-5 font-display text-[clamp(2rem,5vw,2.75rem)] font-bold leading-heading text-finca-green-deep">
            Control en cada lote, del origen al producto
          </h2>
          <p className="m-0 mb-[22px] text-[1.0625rem] leading-[1.7]">
            La producción se lleva a cabo bajo un estricto sistema de trazabilidad
            basado en las Buenas Prácticas de Manufactura. La recepción de materias
            primas pasa por un riguroso proceso de aprobación bajo el Sistema de
            Gestión de Calidad, asignando un número de lote que garantiza la
            trazabilidad completa en el sistema.
          </p>
          <Button href="#" variant="outlineDark">
            Descargar plegable
          </Button>
        </div>
      </div>
    </section>
  )
}

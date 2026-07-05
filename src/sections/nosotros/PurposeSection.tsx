import { nosotros } from '@/lib/assets'

/* ============================================================
   PurposeSection — Propósito superior (split).
   Paridad con nosotros.html (.split): eyebrow + titular +
   dos párrafos con la propuesta de valor ABA en negrita, y la
   foto a la derecha (4/3, redondeada, con sombra). Imagen local
   de assets.ts (sin hotlink a finca.co).
   ------------------------------------------------------------ */
export function PurposeSection() {
  return (
    <section className="site-wrap grid items-center gap-10 py-[5.5rem] lg:grid-cols-2 lg:gap-14">
      <div>
        <p className="eyebrow mb-3">Propósito superior</p>
        <h2 className="m-0 mb-5 font-display text-[clamp(2rem,5vw,2.75rem)] font-bold leading-heading text-finca-green-deep">
          Nutrimos a todos desarrollando el campo colombiano
        </h2>
        <p className="m-0 mb-4 text-[1.0625rem] leading-[1.7]">
          En Finca llevamos más de 70 años en el mercado, produciendo alimento
          balanceado para animales. La nutrición animal es nuestra prioridad, por
          eso basamos nuestro trabajo en la propuesta de valor <strong>ABA</strong>:
          calidad, precio justo, consultoría integral, oportunidad en la entrega y
          calidad en la relación comercial.
        </p>
        <p className="m-0 text-[1.0625rem] leading-[1.7]">
          Ofrecemos productos orientados hacia la eficiencia, estabilidad y
          trazabilidad, con la mejor relación costo-beneficio, asegurando
          disponibilidad gracias a nuestras cinco plantas de producción y dos CEDIS
          ubicados en lugares estratégicos del país.
        </p>
      </div>
      <img
        src={nosotros.propositoSuperior}
        alt="Propósito superior de Finca: nutrición animal y desarrollo del campo colombiano"
        className="aspect-[4/3] w-full rounded-card object-cover shadow-card"
      />
    </section>
  )
}

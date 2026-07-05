/* ============================================================
   ValuePropositionSection — Propuesta de valor ABA (.valuegrid).
   Paridad con nosotros.html: titular centrado y cinco tarjetas
   numeradas (01–05). En escritorio las cinco caben en una fila;
   en móvil colapsa a 2/3 columnas sin scroll horizontal.
   ------------------------------------------------------------ */

const VALUES = [
  { n: '01', t: 'Calidad' },
  { n: '02', t: 'Precio justo' },
  { n: '03', t: 'Consultoría integral' },
  { n: '04', t: 'Oportunidad en la entrega' },
  { n: '05', t: 'Relación comercial' },
]

export function ValuePropositionSection() {
  return (
    <section className="site-wrap py-[5.5rem]">
      <h2 className="mb-11 text-center font-display text-[clamp(2rem,5vw,2.75rem)] font-bold leading-heading text-finca-green-deep">
        Propuesta de valor ABA
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {VALUES.map((value) => (
          <div
            key={value.n}
            className="rounded-[var(--radius-md)] border border-finca-gray-200 bg-white px-[18px] py-[22px] text-center [box-shadow:var(--shadow-sm)]"
          >
            <div className="font-display text-[1.6rem] font-extrabold text-finca-green">
              {value.n}
            </div>
            <div className="mt-1.5 font-display text-[0.95rem] font-bold text-finca-ink">
              {value.t}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

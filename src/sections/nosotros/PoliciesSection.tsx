/* ============================================================
   PoliciesSection — Nuestras políticas (.policies).
   Paridad con nosotros.html: titular centrado y cuatro tarjetas
   blancas con borde superior verde (2 columnas en escritorio,
   1 en móvil). Copy real de las cuatro políticas de la compañía.
   Full-bleed sobre superficie clara (surface-subtle).
   ------------------------------------------------------------ */

const POLICIES = [
  {
    title: 'Política de Calidad',
    body: 'Producir alimentos concentrados que cumplan los requisitos establecidos y legales, apoyados por asistencia técnica y entrega oportuna que permitan la satisfacción de nuestros clientes y la mejora continua de productos y procesos.',
  },
  {
    title: 'Política de Inocuidad de los Alimentos',
    body: 'Reconocemos la importancia de brindar alimentos seguros para su consumo, garantizando el cumplimiento de los requisitos legales y los acordados con los clientes, mediante la mejora continua del Sistema de Gestión de Inocuidad Alimentaria (SGIA).',
  },
  {
    title: 'Abastecimiento Responsable de Insumos Clave',
    body: 'Nos esforzamos por reducir la dependencia de las pesquerías silvestres y obtener harinas, aceites marinos, soya y aceite de palma de fuentes sostenibles y certificadas, promoviendo la agricultura responsable.',
  },
  {
    title: 'Cadenas de Suministro Libres de Deforestación',
    body: 'Declaramos nuestro compromiso de avanzar hacia cadenas de suministro libres de pesca ilegal, deforestación y conversión de ingredientes vegetales y marinos, con la meta de alcanzarlo en su totalidad para el año 2035.',
  },
]

export function PoliciesSection() {
  return (
    <section className="bg-surface-subtle">
      <div className="site-wrap py-[5.5rem]">
        <h2 className="mb-11 text-center font-display text-[clamp(2rem,5vw,2.75rem)] font-bold leading-heading text-finca-green-deep">
          Nuestras políticas
        </h2>
        <div className="grid gap-[22px] md:grid-cols-2">
          {POLICIES.map((policy) => (
            <article
              key={policy.title}
              className="rounded-card border-t-4 border-finca-green bg-white p-[30px] shadow-card"
            >
              <h3 className="m-0 mb-3 font-display text-[1.25rem] font-bold text-finca-green-deep">
                {policy.title}
              </h3>
              <p className="m-0 text-[0.97rem] leading-[1.65]">{policy.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

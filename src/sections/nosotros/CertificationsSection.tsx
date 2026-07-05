import { nosotros } from '@/lib/assets'

/* ============================================================
   CertificationsSection — Certificaciones (split).
   Paridad con nosotros.html: eyebrow + titular + párrafo sobre
   la certificación BAP (2022, plantas de Buga, Ciénaga y Neiva)
   y una fila de "pills" de certificación; foto a la derecha
   (16/10). El check de cada pill es un SVG inline (sin emoji);
   imagen local de assets.ts (sin hotlink).
   ------------------------------------------------------------ */

const CERTS = ['BAP Buga', 'BAP Ciénaga', 'BAP Neiva', 'Global G.A.P.']

/** Check lineal (currentColor) para las pills de certificación. */
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M4 10.5 8 14.5 16 5.5" />
    </svg>
  )
}

export function CertificationsSection() {
  return (
    <section className="site-wrap grid items-center gap-10 py-[5.5rem] lg:grid-cols-2 lg:gap-14">
      <div>
        <p className="eyebrow mb-3">Nuestras certificaciones</p>
        <h2 className="m-0 mb-5 font-display text-[clamp(2rem,5vw,2.75rem)] font-bold leading-heading text-finca-green-deep">
          Reconocimiento al compromiso con el campo
        </h2>
        <p className="m-0 mb-6 text-[1.0625rem] leading-[1.7]">
          Recibimos, en 2022, la certificación{' '}
          <strong>BAP (Best Aquaculture Practices)</strong>, la más confiable para
          peces y mariscos de origen acuícola, en las plantas de Buga, Ciénaga y
          Neiva. ¡Seguimos trabajando para aportar al desarrollo y bienestar del
          campo!
        </p>
        <ul className="m-0 flex list-none flex-wrap gap-4 p-0">
          {CERTS.map((cert) => (
            <li
              key={cert}
              className="inline-flex items-center gap-2 rounded-pill border-2 border-finca-green bg-finca-green-tint px-[22px] py-2.5 font-display text-[0.9rem] font-bold text-finca-green-deep"
            >
              <CheckIcon className="h-3.5 w-3.5" />
              {cert}
            </li>
          ))}
        </ul>
      </div>
      <img
        src={nosotros.certificacionesFinca}
        alt="Certificaciones de calidad e inocuidad de Finca"
        className="aspect-[16/10] w-full rounded-card object-cover shadow-card"
      />
    </section>
  )
}

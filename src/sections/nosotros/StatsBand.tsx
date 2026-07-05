/* ============================================================
   StatsBand — banda de cifras a sangre (forest green).
   Paridad con nosotros.html (.stat): tres cifras en amarillo
   (display Black) con su etiqueta debajo. Full-bleed; grilla de
   3 columnas que se mantiene también en móvil (cifras cortas).
   ------------------------------------------------------------ */

const STATS = [
  { num: '+70', label: 'años en el mercado' },
  { num: '5', label: 'plantas de producción' },
  { num: '2', label: 'centros de distribución (CEDIS)' },
]

export function StatsBand() {
  return (
    <section className="bg-finca-green-forest text-white">
      <div className="site-wrap grid grid-cols-3 gap-6 py-[64px]">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-display text-[clamp(2.25rem,8vw,3.4rem)] font-black leading-none text-finca-yellow">
              {stat.num}
            </div>
            <div className="mt-2 text-[0.9rem] leading-snug opacity-[0.92] sm:text-base">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

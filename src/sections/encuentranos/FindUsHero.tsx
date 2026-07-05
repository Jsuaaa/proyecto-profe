/* ============================================================
   FindUsHero (F10) — banda intro con gradiente de la página
   Encuéntranos. Paridad visual con
   design-system/ui_kits/website/encuentranos.html (.pagehero):
   gradiente 120deg forest→green a sangre, kick amarillo, titular
   display en mayúsculas y subtítulo (copy literal del ui_kit).
   Mismo patrón que ProductsHero para homogeneidad entre páginas.
   ------------------------------------------------------------ */

export function FindUsHero() {
  return (
    <section className="py-[72px] text-white [background:linear-gradient(120deg,var(--finca-green-forest),var(--finca-green))]">
      <div className="site-wrap">
        <p className="mb-3 font-display text-[0.8rem] font-bold uppercase tracking-eyebrow text-finca-yellow">
          Encuéntranos
        </p>
        <h1 className="mb-4 font-display text-[clamp(2.25rem,6vw,3.5rem)] font-extrabold uppercase leading-heading tracking-display">
          Dónde encontrarnos
        </h1>
        <p className="m-0 max-w-[60ch] text-[1.125rem] leading-[1.6] opacity-95">
          Encuentra el lugar más cercano a tu ubicación para comprar nuestras
          líneas de productos. ¡Para que a ellos, Finca se les note!
        </p>
      </div>
    </section>
  )
}

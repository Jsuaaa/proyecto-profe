/* ============================================================
   BlogHero (F8) — banda intro con gradiente de la página
   Noticias. Paridad visual con
   design-system/ui_kits/website/noticias.html (.pagehero):
   gradiente 120deg forest→green a sangre, kick amarillo,
   titular display en mayúsculas y subtítulo (copy literal del
   ui_kit). El titular usa clamp para no desbordar en 360px y
   resolver a 3.5rem en escritorio (paridad a 1280px), igual que
   ProductsHero (F6, aprobado).
   ------------------------------------------------------------ */

export function BlogHero() {
  return (
    <section className="py-[72px] text-white [background:linear-gradient(120deg,var(--finca-green-forest),var(--finca-green))]">
      <div className="site-wrap">
        <p className="mb-3 font-display text-[0.8rem] font-bold uppercase tracking-eyebrow text-finca-yellow">
          Noticias
        </p>
        <h1 className="mb-4 font-display text-[clamp(2.25rem,6vw,3.5rem)] font-extrabold uppercase leading-heading tracking-display">
          Conoce más sobre tu producción
        </h1>
        <p className="m-0 max-w-[60ch] text-[1.125rem] leading-[1.6] opacity-95">
          Guías, eventos y conocimiento técnico para llevar tu granja al
          siguiente nivel, del equipo de maestros de Finca.
        </p>
      </div>
    </section>
  )
}

/* ============================================================
   ProductsHero (F6) — banda intro con gradiente de la página
   Productos. Paridad visual con
   design-system/ui_kits/website/productos.html (.pagehero):
   gradiente 120deg forest→green a sangre, kick amarillo,
   titular display en mayúsculas y subtítulo (copy literal del
   ui_kit). El titular usa clamp para no desbordar en 360px y
   resolver a 3.5rem en escritorio (paridad a 1280px).
   ------------------------------------------------------------ */

export function ProductsHero() {
  return (
    <section className="py-[72px] text-white [background:linear-gradient(120deg,var(--finca-green-forest),var(--finca-green))]">
      <div className="site-wrap">
        <p className="mb-3 font-display text-[0.8rem] font-bold uppercase tracking-eyebrow text-finca-yellow">
          Nuestras líneas
        </p>
        <h1 className="mb-4 font-display text-[clamp(2.25rem,6vw,3.5rem)] font-extrabold uppercase leading-heading tracking-display">
          Productos
        </h1>
        <p className="m-0 max-w-[60ch] text-[1.125rem] leading-[1.6] opacity-95">
          Nutrición especializada para cada especie, formulada con el respaldo
          de más de 70 años de maestría en el campo colombiano. Elige tu línea
          para conocer el portafolio completo.
        </p>
      </div>
    </section>
  )
}

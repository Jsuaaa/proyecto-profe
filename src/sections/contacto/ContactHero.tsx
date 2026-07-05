/* ============================================================
   ContactHero — banda superior de la página Contáctanos.
   Paridad con contactanos.html (.pagehero): degradado de marca
   (forest → green), kicker amarillo "Contáctanos", título display
   UPPERCASE "Hablemos" y subtítulo. Full-bleed a sangre; el
   contenido se constriñe a .site-wrap (1200px). El degradado usa
   los tokens de marca (sin hex sueltos), igual que AboutHero.
   ------------------------------------------------------------ */
export function ContactHero() {
  return (
    <section className="[background:linear-gradient(120deg,var(--finca-green-forest),var(--finca-green))] text-white">
      <div className="site-wrap py-[72px]">
        <p className="eyebrow mb-3 text-finca-yellow">Contáctanos</p>
        <h1 className="m-0 mb-4 font-display text-[clamp(2.25rem,7vw,3.5rem)] font-extrabold uppercase leading-[1.1] tracking-display">
          Hablemos
        </h1>
        <p className="m-0 max-w-[60ch] text-[1.125rem] leading-[1.6] opacity-95">
          ¿Tienes preguntas sobre nuestros productos o necesitas asesoría
          técnica? Escríbenos y nuestro equipo de maestros te acompañará.
        </p>
      </div>
    </section>
  )
}

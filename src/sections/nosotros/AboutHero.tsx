/* ============================================================
   AboutHero — banda superior de la página Nosotros.
   Paridad con nosotros.html (.pagehero): degradado de marca
   (forest → green), kicker amarillo, título display UPPERCASE
   "Somos Finca" y subtítulo. Full-bleed a sangre; el contenido
   se constriñe a .site-wrap (1200px). El degradado usa los
   tokens de marca (sin hex sueltos).
   ------------------------------------------------------------ */
export function AboutHero() {
  return (
    <section className="[background:linear-gradient(120deg,var(--finca-green-forest),var(--finca-green))] text-white">
      <div className="site-wrap py-[72px]">
        <p className="eyebrow mb-3 text-finca-yellow">Nosotros</p>
        <h1 className="m-0 mb-4 font-display text-[clamp(2.25rem,7vw,3.5rem)] font-extrabold uppercase leading-[1.1] tracking-display">
          Somos Finca
        </h1>
        <p className="m-0 max-w-[60ch] text-[1.125rem] leading-[1.6] opacity-95">
          Conoce más sobre nuestra empresa y nuestra contribución al desarrollo
          del campo colombiano.
        </p>
      </div>
    </section>
  )
}

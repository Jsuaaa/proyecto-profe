import { Link } from 'react-router-dom'

/* ============================================================
   CategoryHero — pagehero de la categoría-detalle. Paridad con
   .pagehero de porcicultura.html: banda con degradado verde
   sobre la foto de la especie, miga de pan amarilla (Productos ·
   Especie), H1 display en mayúsculas y subtítulo. El degradado
   usa color-mix sobre tokens de marca (sin hex sueltos) y la
   foto es local (assets.ts), nunca un hotlink.
   ------------------------------------------------------------ */

const heroGradient =
  'linear-gradient(120deg, color-mix(in srgb, var(--finca-green-forest) 90%, transparent), color-mix(in srgb, var(--finca-green-vivid) 45%, transparent))'

export interface CategoryHeroProps {
  label: string
  subtitle: string
  /** Foto de fondo local (assets.ts). */
  image: string
}

export function CategoryHero({ label, subtitle, image }: CategoryHeroProps) {
  return (
    <section
      className="bg-cover bg-center py-[72px] text-white"
      style={{ backgroundImage: `${heroGradient}, url(${image})` }}
    >
      <div className="site-wrap">
        <p className="m-0 mb-3 font-display text-[0.8rem] font-bold uppercase tracking-[0.14em] text-finca-yellow">
          <Link to="/productos" className="text-finca-yellow hover:underline">
            Productos
          </Link>{' '}
          · {label}
        </p>
        <h1 className="m-0 mb-4 font-display text-[clamp(1.9rem,7vw,3.5rem)] font-extrabold uppercase leading-[1.1] tracking-[-0.01em]">
          {label}
        </h1>
        <p className="m-0 max-w-[60ch] text-[1.125rem] leading-[1.6] opacity-95">
          {subtitle}
        </p>
      </div>
    </section>
  )
}

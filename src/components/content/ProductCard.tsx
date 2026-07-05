import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

/* ============================================================
   ProductCard — mosaico de imagen para la grilla de líneas de
   producto. Imagen a sangre, título sobre scrim y pill "Ver".
   Portado de design-system/components/content/ProductCard.jsx.
   ------------------------------------------------------------ */

export interface ProductCardProps {
  title: string
  /** URL de imagen (rellena el mosaico, object-cover). */
  image: string
  to?: string
  href?: string
  cta?: string
  className?: string
}

export function ProductCard({
  title,
  image,
  to,
  href,
  cta = 'Ver',
  className,
}: ProductCardProps) {
  const classes = cn(
    'group relative block aspect-[3/4] overflow-hidden rounded-card no-underline shadow-card transition-[transform,box-shadow] duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-card-hover',
    className,
  )

  const inner = (
    <>
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 [background:var(--scrim-bottom)]" />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-5">
        <span className="font-display text-h4 font-bold text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.4)]">
          {title}
        </span>
        <span className="flex-shrink-0 rounded-pill border-2 border-white bg-white/[0.18] px-5 py-2 font-display text-sm font-bold text-white backdrop-blur-[2px] transition-colors duration-[240ms] group-hover:bg-finca-green">
          {cta}
        </span>
      </div>
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes}>
        {inner}
      </a>
    )
  }
  return (
    <Link to={to ?? '#'} className={classes}>
      {inner}
    </Link>
  )
}

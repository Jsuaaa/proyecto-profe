import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'
import { ArrowRightIcon } from '@/components/icons'

/* ============================================================
   ArticleCard — tarjeta de noticia/blog. Tarjeta blanca con
   imagen arriba, título verde y enlace "Leer Más" con flecha.
   Portado de design-system/components/content/ArticleCard.jsx.
   `category` (opcional) añade un eyebrow sobre el título.
   ------------------------------------------------------------ */

export interface ArticleCardProps {
  title: string
  image: string
  to?: string
  href?: string
  cta?: string
  category?: string
  className?: string
}

export function ArticleCard({
  title,
  image,
  to,
  href,
  cta = 'Leer Más',
  category,
  className,
}: ArticleCardProps) {
  const classes = cn(
    'group flex h-full flex-col overflow-hidden rounded-card bg-white no-underline shadow-card transition-[transform,box-shadow] duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-card-hover',
    className,
  )

  const inner = (
    <>
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3.5 px-6 pb-[26px] pt-[22px]">
        {category && <span className="eyebrow">{category}</span>}
        <h3 className="font-display text-h4 font-bold leading-heading text-finca-green-deep">
          {title}
        </h3>
        <span className="mt-auto inline-flex items-center gap-2 font-display text-sm font-bold text-finca-green">
          {cta}
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-[240ms] group-hover:translate-x-1" />
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

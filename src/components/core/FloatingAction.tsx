import type { MouseEvent, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

/* ============================================================
   FloatingAction — botón circular flotante (ayuda / contacto).
   Portado de design-system/components/core/FloatingAction.jsx.
   Render polimórfico: <Link> (to), <a> (href) o <button>.
   El posicionamiento (fixed) lo aporta el consumidor vía className.
   ------------------------------------------------------------ */

export type FloatingActionTone = 'green' | 'yellow' | 'white'

export interface FloatingActionProps {
  children: ReactNode
  /** Etiqueta accesible obligatoria (aria-label). */
  label: string
  tone?: FloatingActionTone
  to?: string
  href?: string
  target?: string
  rel?: string
  className?: string
  onClick?: (e: MouseEvent) => void
}

const tones: Record<FloatingActionTone, string> = {
  green: 'bg-finca-green-deep text-white',
  yellow: 'bg-finca-yellow text-finca-ink',
  white: 'bg-white text-finca-green-deep',
}

const base =
  'inline-flex h-16 w-16 items-center justify-center rounded-full border-0 cursor-pointer shadow-float transition-transform duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.06] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-finca-green/40'

export function FloatingAction({
  children,
  label,
  tone = 'yellow',
  to,
  href,
  target,
  rel,
  className,
  onClick,
}: FloatingActionProps) {
  const classes = cn(base, tones[tone], className)

  if (to) {
    return (
      <Link
        to={to}
        aria-label={label}
        className={classes}
        onClick={onClick}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        aria-label={label}
        className={classes}
        onClick={onClick}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" aria-label={label} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}

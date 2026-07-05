import type { MouseEvent, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

/* ============================================================
   Button — pill de marca (forma interactiva principal de Finca).
   Portado de design-system/components/core/Button.jsx a TS+Tailwind.
   Variantes: primary / deep / outline / outlineDark / yellow.
   Render polimórfico: <Link> (to), <a> (href) o <button>.
   ------------------------------------------------------------ */

export type ButtonVariant =
  | 'primary'
  | 'deep'
  | 'outline'
  | 'outlineDark'
  | 'yellow'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  /** Enlace interno (React Router). */
  to?: string
  /** Enlace externo (ancla nativa). */
  href?: string
  iconLeft?: ReactNode
  iconRight?: ReactNode
  disabled?: boolean
  fullWidth?: boolean
  type?: 'button' | 'submit' | 'reset'
  target?: string
  rel?: string
  className?: string
  'aria-label'?: string
  onClick?: (e: MouseEvent) => void
}

const base =
  'inline-flex items-center justify-center gap-2.5 rounded-pill font-display font-bold leading-none no-underline cursor-pointer transition-[transform,filter,box-shadow] duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:brightness-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-finca-green/30'

const sizes: Record<ButtonSize, string> = {
  sm: 'px-[18px] py-2 text-[0.8125rem]',
  md: 'px-[30px] py-[13px] text-[0.9375rem]',
  lg: 'px-10 py-[17px] text-[1.0625rem]',
}

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-finca-green text-white border-2 border-finca-green shadow-btn',
  deep: 'bg-finca-green-deep text-white border-2 border-finca-green-deep shadow-btn',
  outline: 'bg-transparent text-white border-2 border-finca-green-vivid',
  outlineDark: 'bg-transparent text-finca-green-deep border-2 border-finca-green',
  yellow: 'bg-finca-yellow text-finca-ink border-2 border-finca-yellow',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  iconLeft,
  iconRight,
  disabled = false,
  fullWidth = false,
  type = 'button',
  target,
  rel,
  className,
  'aria-label': ariaLabel,
  onClick,
}: ButtonProps) {
  const classes = cn(
    base,
    sizes[size],
    variants[variant],
    fullWidth && 'flex w-full',
    disabled &&
      'opacity-50 cursor-not-allowed pointer-events-none hover:translate-y-0 hover:brightness-100',
    className,
  )

  const content = (
    <>
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </>
  )

  if (!disabled && to) {
    return (
      <Link
        to={to}
        className={classes}
        onClick={onClick}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
      >
        {content}
      </Link>
    )
  }

  if (!disabled && href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  )
}

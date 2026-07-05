import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

/* ============================================================
   Badge — eyebrow (kicker MAYUSCULAS tracked) o pill (chip).
   Portado de design-system/components/core/Badge.jsx.
   ------------------------------------------------------------ */

export type BadgeVariant = 'eyebrow' | 'pill'
export type BadgeTone = 'green' | 'tint' | 'yellow' | 'red' | 'white'

export interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
  tone?: BadgeTone
  className?: string
}

const pillTones: Record<BadgeTone, string> = {
  green: 'bg-finca-green text-white',
  tint: 'bg-finca-green-tint text-finca-green-deep',
  yellow: 'bg-finca-yellow text-finca-ink',
  red: 'bg-finca-red text-white',
  white: 'bg-white text-finca-green-deep',
}

export function Badge({
  children,
  variant = 'eyebrow',
  tone = 'green',
  className,
}: BadgeProps) {
  if (variant === 'eyebrow') {
    return (
      <span
        className={cn(
          'font-display text-xs font-bold uppercase tracking-eyebrow',
          tone === 'white' ? 'text-white' : 'text-finca-green',
          className,
        )}
      >
        {children}
      </span>
    )
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-pill px-3.5 py-[5px] font-body text-xs font-semibold uppercase tracking-[0.02em]',
        pillTones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}

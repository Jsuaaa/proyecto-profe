import type { ChangeEvent } from 'react'
import { cn } from '@/lib/cn'

/* ============================================================
   Input — campo de texto o textarea con anillo de foco verde.
   Portado de design-system/components/core/Input.jsx.
   El foco se resuelve con utilidades `focus:` (sin estado JS).
   ------------------------------------------------------------ */

export interface InputProps {
  label?: string
  id?: string
  name?: string
  type?: string
  placeholder?: string
  value?: string
  defaultValue?: string
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  /** Renderiza un textarea (esquinas suaves) en vez de input pill. */
  multiline?: boolean
  rows?: number
  required?: boolean
  error?: string
  className?: string
}

export function Input({
  label,
  id,
  name,
  type = 'text',
  placeholder,
  value,
  defaultValue,
  onChange,
  multiline = false,
  rows = 4,
  required = false,
  error,
  className,
}: InputProps) {
  const field = cn(
    'w-full box-border bg-white font-body text-base text-finca-ink outline-none border-2 transition-[border-color,box-shadow] duration-[240ms] placeholder:text-finca-gray-400',
    multiline
      ? 'rounded-md px-[18px] py-3.5 resize-y'
      : 'rounded-pill px-5 py-3',
    error
      ? 'border-finca-red focus:border-finca-red focus:shadow-[0_0_0_4px_rgba(221,32,38,0.15)]'
      : 'border-finca-gray-300 focus:border-finca-green focus:shadow-[0_0_0_4px_rgba(31,153,80,0.15)]',
    className,
  )

  return (
    <div className="flex flex-col gap-[7px]">
      {label && (
        <label
          htmlFor={id}
          className="font-display text-sm font-semibold text-finca-gray-700"
        >
          {label}
          {required && <span className="text-finca-red"> *</span>}
        </label>
      )}
      {multiline ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          rows={rows}
          required={required}
          aria-invalid={error ? true : undefined}
          className={field}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          required={required}
          aria-invalid={error ? true : undefined}
          className={field}
        />
      )}
      {error && <span className="text-xs text-finca-red">{error}</span>}
    </div>
  )
}

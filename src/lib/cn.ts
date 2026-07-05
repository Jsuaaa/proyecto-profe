import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Une clases condicionales (clsx) y resuelve conflictos de Tailwind
 * (tailwind-merge) para que un `className` de consumidor pueda sobrescribir
 * las clases internas de un componente sin duplicados.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

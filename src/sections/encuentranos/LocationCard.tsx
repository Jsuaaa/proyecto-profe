import { cn } from '@/lib/cn'
import type { FincaLocation } from '@/sections/encuentranos/locations'

/* ============================================================
   LocationCard — fila de sede del panel (buscador). Paridad con
   .loc de encuentranos.html: eyebrow de tipo (Planta/CEDIS) en
   verde, título del punto y descripción; fondo verde-tint al
   pasar el cursor o cuando está seleccionada. Es un <button>
   (accesible por teclado) con `aria-pressed` para el estado.
   Sobre el ui_kit se añade una barra-acento verde a la izquierda
   de la sede activa (borde transparente en reposo, sin desplazar
   el contenido) para que la selección sea claramente visible.
   ------------------------------------------------------------ */

export interface LocationCardProps {
  location: FincaLocation
  active: boolean
  onSelect: () => void
}

export function LocationCard({ location, active, onSelect }: LocationCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className={cn(
        'block w-full cursor-pointer border-b border-l-[3px] border-b-finca-gray-200 px-6 py-5 text-left transition-colors duration-150',
        active
          ? 'border-l-finca-green bg-finca-green-tint'
          : 'border-l-transparent bg-white hover:bg-finca-green-tint',
      )}
    >
      <span className="font-display text-[0.72rem] font-bold uppercase tracking-[0.1em] text-finca-green">
        {location.type}
      </span>
      <h3 className="mb-1.5 mt-1 font-display text-[1.1rem] font-bold text-finca-ink">
        {location.name}
      </h3>
      <p className="m-0 text-[0.9rem] leading-[1.5] text-finca-gray-600">
        {location.description}
      </p>
    </button>
  )
}

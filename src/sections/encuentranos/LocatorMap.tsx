import { cn } from '@/lib/cn'
import type { FincaLocation } from '@/sections/encuentranos/locations'

/* ============================================================
   LocatorMap — mapa ILUSTRATIVO (no georreferenciado, sin API ni
   claves) con pines. Paridad con .map de encuentranos.html: fondo
   con retícula (repeating-linear-gradient) y lavado verde, pines
   en gota roja con punto blanco y una etiqueta-pill flotante.
   Mejora sobre el ui_kit estático: los pines son <button> que
   seleccionan su planta y la planta activa resalta (halo + escala
   desde la punta), reflejando la selección de la lista.
   ------------------------------------------------------------ */

/* Retícula + lavado del ui_kit. El verde va con color-mix sobre el
   token de marca; #e9efe9/#f4f7f3 son neutros del patrón decorativo
   (no forman parte de la paleta, se replican del ui_kit para paridad). */
const MAP_BACKGROUND = [
  'linear-gradient(color-mix(in srgb, var(--finca-green) 6%, transparent), color-mix(in srgb, var(--finca-green) 6%, transparent))',
  'repeating-linear-gradient(0deg, #e9efe9 0 1px, transparent 1px 44px)',
  'repeating-linear-gradient(90deg, #e9efe9 0 1px, transparent 1px 44px)',
  '#f4f7f3',
].join(',')

export interface LocatorMapProps {
  /** Sedes con pin (las 5 plantas). */
  locations: FincaLocation[]
  activeId: string | null
  onSelect: (id: string) => void
  label: string
}

export function LocatorMap({
  locations,
  activeId,
  onSelect,
  label,
}: LocatorMapProps) {
  return (
    <div
      className="relative h-[300px] lg:h-auto"
      style={{ background: MAP_BACKGROUND }}
    >
      {locations.map((loc) => {
        if (!loc.pin) return null
        const active = loc.id === activeId
        return (
          <button
            key={loc.id}
            type="button"
            onClick={() => onSelect(loc.id)}
            aria-label={`Ver ${loc.name} en el mapa`}
            aria-pressed={active}
            style={{ left: loc.pin.left, top: loc.pin.top }}
            className={cn(
              'absolute h-[30px] w-[30px] origin-bottom -translate-x-1/2 -translate-y-full cursor-pointer transition-transform duration-200',
              active ? 'z-10 scale-125' : 'hover:scale-110',
            )}
          >
            {/* Halo verde de la planta activa. */}
            {active && (
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-1 h-6 w-6 -translate-x-1/2 rounded-full bg-finca-green/25 blur-[3px]"
              />
            )}
            {/* Gota roja (::before del ui_kit). */}
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-0 h-[26px] w-[26px] -translate-x-1/2 rotate-45 rounded-[50%_50%_50%_0] bg-finca-red shadow-[var(--shadow-sm)]"
            />
            {/* Punto blanco (::after del ui_kit). */}
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-white"
            />
          </button>
        )
      })}

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-pill bg-white px-[22px] py-2.5 font-display text-[0.85rem] font-bold text-finca-green-deep shadow-card">
        {label}
      </div>
    </div>
  )
}

import { useMemo, useState } from 'react'
import { cn } from '@/lib/cn'
import {
  ALL_DEPARTMENTS,
  MAP_LABEL,
  departments,
  locations,
} from '@/sections/encuentranos/locations'
import { LocationCard } from '@/sections/encuentranos/LocationCard'
import { LocatorMap } from '@/sections/encuentranos/LocatorMap'

/* ============================================================
   StoreLocator (F10) — buscador + filtro por departamento (estado
   React) + lista scrollable de sedes + mapa ilustrativo con pines.
   Paridad con .locator de encuentranos.html: panel blanco 380px a
   la izquierda (buscador + resultados) y mapa a la derecha; en
   móvil se apilan. El texto y la selección filtran la lista sin
   recargar; seleccionar una sede la resalta (tarjeta + pin).
   ------------------------------------------------------------ */

/* Anillo de foco verde igual que el core Input (tokens de marca). */
const FIELD =
  'w-full box-border rounded-pill border-2 border-finca-gray-300 bg-white font-body text-base text-finca-ink outline-none transition-[border-color,box-shadow] duration-[240ms] placeholder:text-finca-gray-400 focus:border-finca-green focus:shadow-[0_0_0_4px_rgba(31,153,80,0.15)]'

/** Normaliza para búsqueda insensible a mayúsculas y tildes. */
function normalize(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
}

/** Lupa (SVG local, sin emoji ni hotlink) para el campo de búsqueda. */
function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-[18px] w-[18px]"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  )
}

export function StoreLocator() {
  const [query, setQuery] = useState('')
  const [dept, setDept] = useState(ALL_DEPARTMENTS)
  const [selectedId, setSelectedId] = useState<string | null>(
    locations[0]?.id ?? null,
  )

  const filtered = useMemo(() => {
    const q = normalize(query)
    return locations.filter((loc) => {
      const matchesDept = dept === ALL_DEPARTMENTS || loc.department === dept
      const haystack = normalize(`${loc.name} ${loc.description} ${loc.type}`)
      const matchesQuery = q === '' || haystack.includes(q)
      return matchesDept && matchesQuery
    })
  }, [query, dept])

  // Selección efectiva derivada en render (sin efecto): si el filtro deja fuera
  // la sede elegida, resalta la primera visible (o ninguna si la lista queda vacía).
  const activeId =
    selectedId && filtered.some((loc) => loc.id === selectedId)
      ? selectedId
      : (filtered[0]?.id ?? null)

  const pinned = locations.filter((loc) => loc.pin)

  return (
    <section className="site-wrap pb-[88px] pt-14">
      <div className="grid overflow-hidden rounded-card shadow-card lg:h-[560px] lg:grid-cols-[380px_1fr] lg:grid-rows-[560px]">
        {/* Panel: buscador + resultados */}
        <div className="flex min-h-0 flex-col bg-white">
          <div className="border-b border-finca-gray-200 p-6">
            <div className="relative mb-3">
              <span className="pointer-events-none absolute left-[18px] top-1/2 -translate-y-1/2 text-finca-gray-400">
                <SearchIcon />
              </span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar ciudad o punto de venta"
                aria-label="Buscar ciudad o punto de venta"
                className={cn(FIELD, 'py-3 pl-12 pr-[18px]')}
              />
            </div>
            <select
              value={dept}
              onChange={(e) => setDept(e.target.value)}
              aria-label="Filtrar por departamento"
              className={cn(FIELD, 'cursor-pointer px-[18px] py-3')}
            >
              {departments.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          {filtered.length === 0 ? (
            <p className="flex-1 px-6 py-10 text-center text-[0.9rem] text-finca-gray-600">
              No encontramos puntos para tu búsqueda. Prueba con otra ciudad o
              departamento.
            </p>
          ) : (
            <ul className="m-0 list-none p-0 lg:min-h-0 lg:flex-1 lg:overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-finca-gray-300 [&::-webkit-scrollbar]:w-2">
              {filtered.map((loc) => (
                <li key={loc.id}>
                  <LocationCard
                    location={loc}
                    active={loc.id === activeId}
                    onSelect={() => setSelectedId(loc.id)}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Mapa ilustrativo con pines */}
        <LocatorMap
          locations={pinned}
          activeId={activeId}
          onSelect={setSelectedId}
          label={MAP_LABEL}
        />
      </div>
    </section>
  )
}

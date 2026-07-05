/* ============================================================
   Datos de sedes de Finca (store locator, F10). Fuente literal:
   design-system/ui_kits/website/encuentranos.html — 5 plantas +
   2 CEDIS y el conteo "5 plantas · 2 CEDIS a nivel nacional".
   Las coordenadas de los pines son las mismas del ui_kit (mapa
   ilustrativo, no georreferenciado); cada una se asigna a la
   planta cuya ubicación en Colombia encaja mejor (Ciénaga al
   norte, Buga/Neiva al sur, etc.), sin alterar el dibujo.
   ------------------------------------------------------------ */

export type LocationType = 'Planta' | 'CEDIS'

export interface FincaLocation {
  id: string
  type: LocationType
  name: string
  /** Departamento para el filtro; '' en CEDIS (cobertura regional). */
  department: string
  /** Descripción tal cual el ui_kit: "Depto · Detalle" o cobertura. */
  description: string
  /** Posición del pin en el mapa ilustrativo (solo plantas). */
  pin?: { left: string; top: string }
}

export const ALL_DEPARTMENTS = 'Todos los departamentos'

/** Etiqueta estática del mapa (espejo del ui_kit). */
export const MAP_LABEL = '5 plantas · 2 CEDIS a nivel nacional'

export const locations: FincaLocation[] = [
  {
    id: 'buga',
    type: 'Planta',
    name: 'Planta Buga',
    department: 'Valle del Cauca',
    description: 'Valle del Cauca · Certificación BAP',
    pin: { left: '30%', top: '64%' },
  },
  {
    id: 'cienaga',
    type: 'Planta',
    name: 'Planta Ciénaga',
    department: 'Magdalena',
    description: 'Magdalena · Certificación BAP',
    pin: { left: '44%', top: '24%' },
  },
  {
    id: 'neiva',
    type: 'Planta',
    name: 'Planta Neiva',
    department: 'Huila',
    description: 'Huila · Certificación BAP',
    pin: { left: '38%', top: '52%' },
  },
  {
    id: 'bogota',
    type: 'Planta',
    name: 'Planta Bogotá',
    department: 'Cundinamarca',
    description: 'Cundinamarca · Producción y despacho',
    pin: { left: '50%', top: '40%' },
  },
  {
    id: 'medellin',
    type: 'Planta',
    name: 'Planta Medellín',
    department: 'Antioquia',
    description: 'Antioquia · Producción y despacho',
    pin: { left: '34%', top: '34%' },
  },
  {
    id: 'cedis-norte',
    type: 'CEDIS',
    name: 'Centro de Distribución Norte',
    department: '',
    description: 'Cobertura región Caribe',
  },
  {
    id: 'cedis-centro',
    type: 'CEDIS',
    name: 'Centro de Distribución Centro',
    department: '',
    description: 'Cobertura región Andina',
  },
]

/** Opciones del filtro por departamento (espejo del <select> del ui_kit). */
export const departments: string[] = [
  ALL_DEPARTMENTS,
  'Valle del Cauca',
  'Magdalena',
  'Huila',
  'Cundinamarca',
  'Antioquia',
]

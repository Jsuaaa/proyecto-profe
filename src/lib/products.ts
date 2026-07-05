/* ============================================================
   Catálogo por especie — fuente de verdad del template de
   categoría-detalle (/productos/:slug, ver src/pages/CategoryPage).
   ------------------------------------------------------------
   Datos tipados y data-driven: cada slug renderiza su hero + sus
   gamas (Industrial / Tecnificado / Estándar) con su portafolio.

   - `porcicultura` trae el catálogo REAL recreado del ui_kit
     (design-system/ui_kits/website/porcicultura.html), con sus
     fichas locales de assets.ts (porciculturaCatalog).
   - Las otras 5 especies (ganaderia, avicultura, acuacultura,
     equinos, otros) usan el MISMO template con un portafolio
     PLACEHOLDER coherente (`placeholder: true`, se marca en la
     UI) hasta tener las fichas reales. Sus imágenes son la foto
     local de la especie (assets.ts productLines) — 0 hotlinks.

   Modo vitrina: sin precio ni carrito; la conversión es "Cotizar
   por WhatsApp" (docs/brand.md) o la página de contacto.
   ------------------------------------------------------------ */

import { porciculturaCatalog, productLines } from '@/lib/assets'

/** WhatsApp de ventas de Finca (docs/brand.md: +57 320 304 5842). */
const WHATSAPP_NUMBER = '573203045842'

/** Referencia individual del portafolio. */
export type CatalogProduct = {
  /** Nombre comercial de la referencia. */
  name: string
  /** Ruta de imagen local (assets.ts). Nunca un hotlink. */
  image: string
}

/** Gama comercial de una especie con su portafolio. */
export type ProductTier = {
  /** Industrial | Tecnificado | Estándar. */
  name: string
  products: CatalogProduct[]
}

/** Contenido completo de una página de categoría-detalle. */
export type SpeciesCatalog = {
  slug: string
  label: string
  /** Foto de fondo del pagehero (local). */
  heroImage: string
  /** Copy de apoyo bajo el H1 del hero. */
  subtitle: string
  /** Gamas con su portafolio (una pestaña por gama). */
  tiers: ProductTier[]
  /**
   * true → portafolio de relleno, pendiente de fichas reales; se
   * marca visualmente. Solo `porcicultura` es catálogo real (false).
   */
  placeholder?: boolean
}

/** URL de WhatsApp para cotizar una referencia concreta (modo vitrina). */
export function whatsappQuoteUrl(product: string, species: string): string {
  const text = `Hola Finca, quiero cotizar ${product} de la línea ${species}.`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

/** URL de WhatsApp para pedir información/cotización de una especie. */
export function whatsappSpeciesUrl(species: string): string {
  const text = `Hola Finca, quiero información y cotización de la línea ${species}.`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

/** Azúcar para portafolios placeholder que comparten una sola foto. */
function fill(image: string, ...names: string[]): CatalogProduct[] {
  return names.map((name) => ({ name, image }))
}

/* ------------------------------------------------------------
   PORCICULTURA — catálogo real (paridad con porcicultura.html).
   ------------------------------------------------------------ */
const porcicultura: SpeciesCatalog = {
  slug: 'porcicultura',
  label: 'Porcicultura',
  heroImage: productLines.porcicultura,
  subtitle:
    'Alimento balanceado para tus cerdos, en líneas Industrial, Tecnificado y Estándar para cada etapa productiva.',
  tiers: [
    {
      name: 'Industrial',
      products: [
        { name: 'Cerdas Gestación A.G', image: porciculturaCatalog.cerdasGestacionAg },
        { name: 'Cerdas Primerizas A.G', image: porciculturaCatalog.cerdasPrimerizasAg },
        {
          name: 'Cerdas Primerizas Lactancia A.G',
          image: porciculturaCatalog.cerdasPrimerizasLactanciaAg,
        },
        { name: 'Finca Preiniciación A.G-1', image: porciculturaCatalog.preiniciacionAg1 },
        { name: 'Finca Cerdas Lactancia A.G', image: porciculturaCatalog.cerdasLactanciaAg },
        {
          name: 'Finca Cerdos Desarrollo A.G-3',
          image: porciculturaCatalog.cerdosDesarrolloAg3,
        },
        { name: 'Finca Crece Cerdos A.G-4', image: porciculturaCatalog.creceCerdosAg4 },
        { name: 'Finca Final Cerdos A.G-5', image: porciculturaCatalog.finalCerdosAg5 },
        { name: 'Finca Lechón Desteto A.G-0', image: porciculturaCatalog.lechonDestetoAg0 },
        { name: 'Finca Precebos A.G-2', image: porciculturaCatalog.precebosAg2 },
      ],
    },
    {
      name: 'Tecnificado',
      products: [
        { name: 'Finca Cerdas Gestación', image: porciculturaCatalog.cerdasGestacion },
        { name: 'Finca Cerdo Iniciación', image: porciculturaCatalog.cerdoIniciacion },
        { name: 'Finca Cerdos Engorde', image: porciculturaCatalog.cerdosEngorde },
        {
          name: 'Finca Cerdos Engorde Finalizador',
          image: porciculturaCatalog.cerdosEngordeFinalizador,
        },
        { name: 'Finca Cerdos Levante', image: porciculturaCatalog.cerdosLevante },
      ],
    },
    {
      name: 'Estándar',
      products: [
        { name: 'Finca Cerdos Engorde 65-75', image: porciculturaCatalog.cerdosEngorde6575 },
        { name: 'Finca Cerdos Levante 25-30', image: porciculturaCatalog.cerdosLevante2530 },
      ],
    },
  ],
}

/* ------------------------------------------------------------
   PLACEHOLDERS — mismas gamas, portafolio coherente de relleno.
   Imágenes = foto local de la especie (assets.ts). placeholder:true.
   ------------------------------------------------------------ */
const ganaderia: SpeciesCatalog = {
  slug: 'ganaderia',
  label: 'Ganadería',
  heroImage: productLines.ganaderia,
  subtitle:
    'Nutrición para bovinos de leche y carne, en líneas Industrial, Tecnificado y Estándar para cada etapa del hato.',
  placeholder: true,
  tiers: [
    {
      name: 'Industrial',
      products: fill(
        productLines.ganaderia,
        'Finca Ganado Leche Alta Producción',
        'Finca Ganado Doble Propósito',
        'Finca Ganado Ceba Intensiva',
        'Finca Novillas de Levante',
        'Finca Ternero Preiniciación',
      ),
    },
    {
      name: 'Tecnificado',
      products: fill(
        productLines.ganaderia,
        'Finca Lechero Tecnificado',
        'Finca Ceba Tecnificado',
        'Finca Vaca Seca y Transición',
      ),
    },
    {
      name: 'Estándar',
      products: fill(
        productLines.ganaderia,
        'Finca Ganado Sostenimiento',
        'Finca Sal Mineralizada',
      ),
    },
  ],
}

const avicultura: SpeciesCatalog = {
  slug: 'avicultura',
  label: 'Avicultura',
  heroImage: productLines.avicultura,
  subtitle:
    'Alimento para pollo de engorde y ponedoras, en líneas Industrial, Tecnificado y Estándar para cada fase productiva.',
  placeholder: true,
  tiers: [
    {
      name: 'Industrial',
      products: fill(
        productLines.avicultura,
        'Finca Pollo Preiniciación',
        'Finca Pollo Iniciación',
        'Finca Pollo Engorde',
        'Finca Pollo Finalizador',
        'Finca Ponedora Levante',
        'Finca Ponedora Postura',
      ),
    },
    {
      name: 'Tecnificado',
      products: fill(
        productLines.avicultura,
        'Finca Broiler Alto Rendimiento',
        'Finca Ponedora Pico de Postura',
      ),
    },
    {
      name: 'Estándar',
      products: fill(
        productLines.avicultura,
        'Finca Aves de Traspatio',
        'Finca Ponedora Estándar',
      ),
    },
  ],
}

const acuacultura: SpeciesCatalog = {
  slug: 'acuacultura',
  label: 'Acuacultura',
  heroImage: productLines.acuacultura,
  subtitle:
    'Alimento extruido para tilapia, cachama y trucha con respaldo BAP, en líneas Industrial, Tecnificado y Estándar.',
  placeholder: true,
  tiers: [
    {
      name: 'Industrial',
      products: fill(
        productLines.acuacultura,
        'Finca Tilapia Alevino',
        'Finca Tilapia Levante',
        'Finca Tilapia Engorde',
        'Finca Cachama Levante',
        'Finca Trucha Engorde',
      ),
    },
    {
      name: 'Tecnificado',
      products: fill(
        productLines.acuacultura,
        'Finca Tilapia Extruido 32%',
        'Finca Trucha Extruido 45%',
      ),
    },
    {
      name: 'Estándar',
      products: fill(productLines.acuacultura, 'Finca Peces Mantenimiento'),
    },
  ],
}

const equinos: SpeciesCatalog = {
  slug: 'equinos',
  label: 'Equinos',
  heroImage: productLines.equinos,
  subtitle:
    'Nutrición equina para mantenimiento, trabajo y reproducción, en líneas Industrial, Tecnificado y Estándar.',
  placeholder: true,
  tiers: [
    {
      name: 'Industrial',
      products: fill(
        productLines.equinos,
        'Finca Equino Mantenimiento',
        'Finca Equino Trabajo',
        'Finca Yegua Gestación y Lactancia',
        'Finca Potro en Crecimiento',
      ),
    },
    {
      name: 'Tecnificado',
      products: fill(
        productLines.equinos,
        'Finca Equino Alto Rendimiento',
        'Finca Equino Deporte',
      ),
    },
    {
      name: 'Estándar',
      products: fill(productLines.equinos, 'Finca Equino Sostenimiento'),
    },
  ],
}

const otros: SpeciesCatalog = {
  slug: 'otros',
  label: 'Otros',
  heroImage: productLines.cuyes,
  subtitle:
    'Alimento para especies menores —cuyes y conejos—, en líneas Industrial, Tecnificado y Estándar.',
  placeholder: true,
  tiers: [
    {
      name: 'Industrial',
      products: [
        ...fill(productLines.cuyes, 'Finca Cuy Crecimiento', 'Finca Cuy Engorde'),
        ...fill(productLines.conejos, 'Finca Conejo Levante', 'Finca Conejo Engorde'),
      ],
    },
    {
      name: 'Tecnificado',
      products: [
        ...fill(productLines.cuyes, 'Finca Cuy Reproductoras'),
        ...fill(productLines.conejos, 'Finca Conejo Reproductoras'),
      ],
    },
    {
      name: 'Estándar',
      products: fill(productLines.cuyes, 'Finca Especies Menores Sostenimiento'),
    },
  ],
}

/** Todas las especies, en el orden del catálogo (site.ts productLines). */
export const speciesCatalogs: SpeciesCatalog[] = [
  ganaderia,
  avicultura,
  porcicultura,
  acuacultura,
  equinos,
  otros,
]

/** Devuelve el catálogo de una especie por slug (o undefined si no existe). */
export function getSpeciesCatalog(slug: string | undefined): SpeciesCatalog | undefined {
  return speciesCatalogs.find((s) => s.slug === slug)
}

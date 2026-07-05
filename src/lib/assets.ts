/**
 * Manifiesto de assets de imagen (build self-contained).
 *
 * Todas las rutas apuntan a archivos locales bajo `webpage/public/images/`,
 * servidos desde la raiz por Vite (p. ej. '/images/...'). Ninguna imagen se
 * hotlinkea desde finca.co: F3 las descargo a local. El origen de cada archivo
 * y las notas de licencia estan en `progress/impl_webpage_f3_assets.md`.
 *
 * Las paginas F4-F10 deben consumir estas constantes en lugar de escribir
 * rutas a mano, para que un rename de archivo se propague desde un solo sitio.
 */

/**
 * Placeholder neutro con la paleta de marca. Usar como fallback en `onError`
 * de un <img> cuando una imagen no cargue. En F3 ningun asset lo necesito
 * (todas las descargas fueron 200), pero queda disponible para F4-F10.
 */
export const placeholderImage = '/images/placeholder.svg'

/** Logotipos de marca. `logo` es el color; `logoFooter` la variante blanca. */
export const brand = {
  logo: '/images/brand/logo-finca.png',
  logoFooter: '/images/brand/logo-finca-footer.png',
} as const

/** Glifos de redes sociales (SVG monocromo, tintable via CSS `filter`). */
export const social = {
  instagram: '/images/social/instagram.svg',
  facebook: '/images/social/facebook.svg',
  youtube: '/images/social/youtube.svg',
  linkedin: '/images/social/linkedin.svg',
  spotify: '/images/social/spotify.svg',
} as const

/** Fotos de cada linea de producto (una por especie). */
export const productLines = {
  avicultura: '/images/productos/avicultura.webp',
  porcicultura: '/images/productos/porcicultura.webp',
  ganaderia: '/images/productos/ganaderia.webp',
  acuacultura: '/images/productos/acuacultura.webp',
  equinos: '/images/productos/equinos.webp',
  cuyes: '/images/productos/cuyes.webp',
  conejos: '/images/productos/conejos.webp',
} as const

/**
 * Fondos del hero / secciones de portada. En el ui_kit el mismo archivo sirve
 * a la vez como slide del hero y como tile de producto, asi que estos alias
 * apuntan a `productLines`: se mantiene un unico archivo fisico por foto para
 * evitar duplicados que puedan divergir.
 */
export const hero = {
  porcicultura: productLines.porcicultura,
  avicultura: productLines.avicultura,
  ganaderia: productLines.ganaderia,
  acuacultura: productLines.acuacultura,
} as const

/** Imagenes de la pagina Nosotros y del bloque de sostenibilidad. */
export const nosotros = {
  propositoSuperior: '/images/nosotros/proposito-superior.jpg',
  trazabilidad: '/images/nosotros/trazabilidad.jpg',
  certificacionesFinca: '/images/nosotros/certificaciones-finca.webp',
  certificacionesLogos: '/images/nosotros/certificaciones-logos.png',
} as const

/** Imagenes del blog / noticias. */
export const noticias = {
  caballosGuia: '/images/noticias/caballos-guia.png',
  caballosAlimentacion: '/images/noticias/caballos-alimentacion.png',
  jornadaAcuacultura2025: '/images/noticias/jornada-acuacultura-2025.png',
} as const

/**
 * Catalogo de referencia de la linea Porcicultura (fichas 300x300),
 * agrupado por gama tal como aparece en el ui_kit.
 */
export const porciculturaCatalog = {
  // Industrial (A.G)
  cerdasGestacionAg: '/images/productos/porcicultura/cerdas-gestacion-ag.jpg',
  cerdasPrimerizasAg: '/images/productos/porcicultura/cerdas-primerizas-ag.jpg',
  cerdasPrimerizasLactanciaAg:
    '/images/productos/porcicultura/cerdas-primerizas-lactancia-ag.jpg',
  preiniciacionAg1: '/images/productos/porcicultura/preiniciacion-ag1.jpg',
  cerdasLactanciaAg: '/images/productos/porcicultura/cerdas-lactancia-ag.jpg',
  cerdosDesarrolloAg3: '/images/productos/porcicultura/cerdos-desarrollo-ag3.jpg',
  creceCerdosAg4: '/images/productos/porcicultura/crece-cerdos-ag4.jpg',
  finalCerdosAg5: '/images/productos/porcicultura/final-cerdos-ag5.jpg',
  lechonDestetoAg0: '/images/productos/porcicultura/lechon-desteto-ag0.jpg',
  precebosAg2: '/images/productos/porcicultura/precebos-ag2.jpg',
  // Tecnificado
  cerdasGestacion: '/images/productos/porcicultura/cerdas-gestacion.jpg',
  cerdoIniciacion: '/images/productos/porcicultura/cerdo-iniciacion.jpg',
  cerdosEngorde: '/images/productos/porcicultura/cerdos-engorde.jpg',
  cerdosEngordeFinalizador:
    '/images/productos/porcicultura/cerdos-engorde-finalizador.jpg',
  cerdosLevante: '/images/productos/porcicultura/cerdos-levante.jpg',
  // Estandar
  cerdosEngorde6575: '/images/productos/porcicultura/cerdos-engorde-65-75.jpg',
  cerdosLevante2530: '/images/productos/porcicultura/cerdos-levante-25-30.jpg',
} as const

/** Agregado de todos los grupos, por si una pagina prefiere un unico import. */
export const assets = {
  brand,
  social,
  productLines,
  hero,
  nosotros,
  noticias,
  porciculturaCatalog,
  placeholder: placeholderImage,
} as const

/** Union de todas las rutas de imagen conocidas por el manifiesto. */
export type AssetPath =
  | (typeof brand)[keyof typeof brand]
  | (typeof social)[keyof typeof social]
  | (typeof productLines)[keyof typeof productLines]
  | (typeof hero)[keyof typeof hero]
  | (typeof nosotros)[keyof typeof nosotros]
  | (typeof noticias)[keyof typeof noticias]
  | (typeof porciculturaCatalog)[keyof typeof porciculturaCatalog]
  | typeof placeholderImage

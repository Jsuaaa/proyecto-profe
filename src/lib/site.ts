/* ============================================================
   Datos del sitio — fuente de verdad de ENLACES y contacto.
   Los enlaces de navegación replican design-system/ui_kits/website/
   site.js (window.FINCA/NAV); el contacto/redes sale de docs/brand.md.
   Los .html del ui_kit se mapean a rutas de la SPA.
   ------------------------------------------------------------ */

export type NavItem = {
  label: string
  to: string
  /** true = enlace externo (ancla nativa), no ruta interna. */
  external?: boolean
}

export const siteConfig = {
  name: 'Finca',
  legalName: 'Alimentos Finca S.A.S.',
  group: 'Grupo Bios',
  tagline: 'Maestría en el campo colombiano',
  phone: '01 8000 51 31 01',
  phoneHref: 'tel:018000513101',
  email: 'dptoserviciocliente@finca.co',
  hours:
    'Horario de atención: Lunes a viernes de 7:00 A.M. a 12:30 P.M. y 1:30 P.M. a 5:00 P.M.',
} as const

/** Navegación principal (espejo de site.js NAV, mapeado a rutas SPA). */
export const navItems: NavItem[] = [
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Productos', to: '/productos' },
  { label: 'Encuéntranos', to: '/encuentranos' },
  { label: 'Noticias', to: '/noticias' },
  { label: 'Portal Clientes', to: '#', external: true },
]

/** Bloque CTA verde del header ("¡Ingresa a MIC aquí!"). */
export const headerCta = { label: '¡Ingresa a MIC aquí!', href: '#' } as const

export type FooterLink =
  | { label: string; to: string }
  | { label: string; href: string }

export const footerNav: {
  contacto: FooterLink[]
  informacion: FooterLink[]
} = {
  contacto: [
    { label: 'Contáctanos', to: '/contactanos' },
    { label: 'Trabaja con nosotros', href: '#' },
  ],
  informacion: [
    { label: 'Política y tratamiento de datos', href: '#' },
    { label: 'Aviso de privacidad', href: '#' },
    { label: 'Términos y condiciones', href: '#' },
    { label: 'Noticias', to: '/noticias' },
    { label: 'Línea de transparencia', href: '#' },
  ],
}

export type SocialName =
  | 'instagram'
  | 'facebook'
  | 'youtube'
  | 'linkedin'
  | 'spotify'

export type SocialLink = { name: SocialName; href: string; label: string }

/** Redes reales (handles de docs/brand.md). */
export const socialLinks: SocialLink[] = [
  { name: 'instagram', href: 'https://www.instagram.com/finca.col', label: 'Instagram' },
  { name: 'facebook', href: 'https://www.facebook.com/FincaOficial', label: 'Facebook' },
  { name: 'youtube', href: 'https://www.youtube.com/@FincaColombia', label: 'YouTube' },
  { name: 'linkedin', href: 'https://www.linkedin.com/company/finca-co', label: 'LinkedIn' },
  { name: 'spotify', href: '#', label: 'Spotify' },
]

/** Especies del catálogo (slugs de docs/brand.md) — para /productos/:slug. */
export const productLines: { slug: string; label: string }[] = [
  { slug: 'ganaderia', label: 'Ganadería' },
  { slug: 'avicultura', label: 'Avicultura' },
  { slug: 'porcicultura', label: 'Porcicultura' },
  { slug: 'acuacultura', label: 'Acuacultura' },
  { slug: 'equinos', label: 'Equinos' },
  { slug: 'otros', label: 'Otros' },
]

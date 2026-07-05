import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

/* ============================================================
   ContactChannels — columna derecha de la página Contáctanos.
   Paridad con contactanos.html: tres tarjetas de canal (WhatsApp,
   línea de atención, correo) y el bloque verde de horario.
   Mejora funcional sobre el ui_kit estático: cada tarjeta es un
   enlace real (wa.me / tel: / mailto:). Íconos SVG locales inline
   (sin emoji, sin hotlinks); heredan `currentColor` (blanco sobre
   el círculo de color). Datos de contacto de docs/brand.md.
   ------------------------------------------------------------ */

// WhatsApp de ventas de Finca (docs/brand.md: +57 320 304 5842).
const WHATSAPP_URL = 'https://wa.me/573203045842'
const WHATSAPP_LABEL = '+57 320 304 5842'
const PHONE_LABEL = '01 8000 51 31 01'
const PHONE_HREF = 'tel:018000513101'
const EMAIL = 'dptoserviciocliente@finca.co'

function WhatsappGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.04 3.5c-4.7 0-8.52 3.82-8.52 8.52 0 1.5.39 2.96 1.14 4.25L3.5 20.5l4.35-1.14a8.49 8.49 0 0 0 4.19 1.07h.01c4.7 0 8.52-3.82 8.52-8.52 0-2.28-.89-4.42-2.5-6.03a8.46 8.46 0 0 0-6.03-2.48z" />
    </svg>
  )
}

function PhoneGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MailGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

type Channel = {
  key: string
  title: string
  value: string
  href: string
  external?: boolean
  bg: string
  icon: ReactNode
}

const CHANNELS: Channel[] = [
  {
    key: 'whatsapp',
    title: 'WhatsApp',
    value: WHATSAPP_LABEL,
    href: WHATSAPP_URL,
    external: true,
    bg: 'bg-[#25D366]',
    icon: <WhatsappGlyph />,
  },
  {
    key: 'phone',
    title: 'Línea de atención',
    value: PHONE_LABEL,
    href: PHONE_HREF,
    bg: 'bg-finca-green',
    icon: <PhoneGlyph />,
  },
  {
    key: 'mail',
    title: 'Correo',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    bg: 'bg-finca-green-deep',
    icon: <MailGlyph />,
  },
]

export function ContactChannels() {
  return (
    <div>
      <div className="flex flex-col gap-4">
        {CHANNELS.map(({ key, title, value, href, external, bg, icon }) => (
          <a
            key={key}
            href={href}
            {...(external
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
            className="flex items-center gap-4 rounded-card border border-finca-gray-200 bg-white px-[22px] py-5 shadow-[0_1px_3px_rgba(38,38,35,0.08)] transition-[transform,box-shadow] duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-card"
          >
            <span
              className={cn(
                'flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full text-white',
                bg,
              )}
              aria-hidden="true"
            >
              {icon}
            </span>
            <span className="min-w-0">
              <span className="block font-display text-[1.05rem] font-bold leading-tight text-finca-ink">
                {title}
              </span>
              <span className="block break-words text-[0.92rem] text-finca-gray-600">
                {value}
              </span>
            </span>
          </a>
        ))}
      </div>

      <div className="mt-1 rounded-card bg-finca-green-tint p-6">
        <h3 className="m-0 mb-2 font-display text-base font-bold text-finca-green-deep">
          Horario de atención
        </h3>
        <p className="m-0 text-[0.95rem] leading-[1.6] text-finca-gray-700">
          Lunes a viernes
          <br />
          7:00 A.M. – 12:30 P.M.
          <br />
          1:30 P.M. – 5:00 P.M.
        </p>
      </div>
    </div>
  )
}

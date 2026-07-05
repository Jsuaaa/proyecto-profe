import type { ComponentType } from 'react'
import { Link } from 'react-router-dom'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  SpotifyIcon,
  YoutubeIcon,
  type IconProps,
} from '@/components/icons'
import {
  footerNav,
  siteConfig,
  socialLinks,
  type SocialName,
} from '@/lib/site'
import logoFinca from '@/assets/logo-finca.png'

/** Mapa nombre→glifo social (SVG inline local, sin hotlinks). */
const socialIcons: Record<SocialName, ComponentType<IconProps>> = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  youtube: YoutubeIcon,
  linkedin: LinkedinIcon,
  spotify: SpotifyIcon,
}

/* ============================================================
   Footer — banda verde bosque con logo, columnas de contacto e
   información, y redes sociales. Datos reales de docs/brand.md.
   Portado de design-system/components/navigation/Footer.jsx.
   ------------------------------------------------------------ */

const linkCls =
  'block text-sm leading-[1.9] text-white/90 no-underline transition-opacity hover:text-white hover:opacity-100'
const headCls =
  'mb-3 font-display text-xs font-bold uppercase tracking-eyebrow text-finca-yellow'

export function Footer() {
  return (
    <footer className="bg-finca-green-forest text-white">
      <div className="site-wrap grid grid-cols-1 gap-10 pb-8 pt-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          {/* Logo en silueta blanca (invert) para leer sobre verde bosque. */}
          <img
            src={logoFinca}
            alt="Finca"
            className="h-16 w-auto brightness-0 invert"
          />
          <p className="mt-3 max-w-[32ch] text-sm leading-[1.9] text-white/90">
            {siteConfig.hours}
          </p>
        </div>

        <div>
          <h4 className={headCls}>Contacto</h4>
          {footerNav.contacto.map((item) =>
            'to' in item ? (
              <Link key={item.label} to={item.to} className={linkCls}>
                {item.label}
              </Link>
            ) : (
              <a key={item.label} href={item.href} className={linkCls}>
                {item.label}
              </a>
            ),
          )}
          <a href={siteConfig.phoneHref} className={linkCls}>
            {siteConfig.phone}
          </a>
          <a href={`mailto:${siteConfig.email}`} className={linkCls}>
            {siteConfig.email}
          </a>
        </div>

        <div>
          <h4 className={headCls}>Información</h4>
          {footerNav.informacion.map((item) =>
            'to' in item ? (
              <Link key={item.label} to={item.to} className={linkCls}>
                {item.label}
              </Link>
            ) : (
              <a key={item.label} href={item.href} className={linkCls}>
                {item.label}
              </a>
            ),
          )}
        </div>
      </div>

      <div className="site-wrap flex flex-wrap items-center justify-between gap-4 border-t border-white/20 pb-2 pt-6">
        <span className="text-xs text-white/70">
          © {new Date().getFullYear()} {siteConfig.legalName} · {siteConfig.group}
        </span>
        <div className="flex gap-3">
          {socialLinks.map((s) => {
            const Icon = socialIcons[s.name]
            return (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <Icon className="h-4 w-4" />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

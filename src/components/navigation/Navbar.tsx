import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { cn } from '@/lib/cn'
import { CloseIcon, MenuIcon } from '@/components/icons'
import { headerCta, navItems } from '@/lib/site'
import logoFinca from '@/assets/logo-finca.png'

/* ============================================================
   Navbar — header sticky de Finca. Barra clara, logo a la izq.,
   enlaces verdes y bloque CTA verde a tope derecho. En < xl se
   colapsa en un menú hamburguesa desplegable y accesible.
   Portado de design-system/components/navigation/Navbar.jsx.
   ------------------------------------------------------------ */

const linkBase =
  'font-display text-[0.95rem] font-semibold whitespace-nowrap transition-colors duration-[240ms]'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  // Cierra con la tecla Escape.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-finca-gray-200 bg-finca-gray-100 font-display">
      <div className="flex h-[var(--header-h)] items-stretch">
        <Link
          to="/"
          className="flex items-center px-6 sm:px-7"
          aria-label="Finca — inicio"
        >
          <img src={logoFinca} alt="Finca" className="h-11 w-auto sm:h-[52px]" />
        </Link>

        {/* Navegación de escritorio */}
        <nav className="ml-auto hidden items-center gap-[26px] px-[34px] xl:flex xl:gap-[34px]">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.to}
                className={cn(
                  linkBase,
                  'text-finca-green-deep hover:text-finca-green-vivid',
                )}
              >
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    linkBase,
                    isActive
                      ? 'text-finca-green-vivid'
                      : 'text-finca-green-deep hover:text-finca-green-vivid',
                  )
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        {/* Bloque CTA verde (escritorio) */}
        <a
          href={headerCta.href}
          className="hidden items-center whitespace-nowrap bg-finca-green-deep px-[34px] font-display text-[0.95rem] font-bold text-white transition-colors duration-[240ms] hover:bg-finca-green-forest xl:flex"
        >
          {headerCta.label}
        </a>

        {/* Botón hamburguesa (móvil / tablet) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          className="ml-auto inline-flex items-center justify-center px-6 text-finca-green-deep transition-colors hover:text-finca-green-vivid xl:hidden"
        >
          {open ? (
            <CloseIcon className="h-7 w-7" />
          ) : (
            <MenuIcon className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Panel desplegable (móvil / tablet) */}
      <div
        id="menu-movil"
        className={cn(
          'absolute inset-x-0 top-full border-b border-finca-gray-200 bg-finca-gray-100 shadow-card xl:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <nav className="flex flex-col py-2">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.to}
                onClick={close}
                className="border-t border-finca-gray-200 px-6 py-3.5 font-display font-semibold text-finca-green-deep"
              >
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.to === '/'}
                onClick={close}
                className={({ isActive }) =>
                  cn(
                    'border-t border-finca-gray-200 px-6 py-3.5 font-display font-semibold',
                    isActive
                      ? 'text-finca-green-vivid'
                      : 'text-finca-green-deep',
                  )
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
          <a
            href={headerCta.href}
            onClick={close}
            className="mt-2 bg-finca-green-deep px-6 py-4 text-center font-display font-bold text-white"
          >
            {headerCta.label}
          </a>
        </nav>
      </div>
    </header>
  )
}

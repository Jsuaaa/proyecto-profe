import { FindUsHero } from '@/sections/encuentranos/FindUsHero'
import { StoreLocator } from '@/sections/encuentranos/StoreLocator'
import { useDocumentMeta } from '@/lib/useDocumentMeta'

/* ============================================================
   FindUsPage (F10) — store locator de Finca con paridad visual
   respecto a design-system/ui_kits/website/encuentranos.html.
   Secciones, en orden:
     1. FindUsHero    — pagehero con degradado verde (copy del ui_kit).
     2. StoreLocator  — buscador + filtro por departamento (estado
        React) + lista scrollable de sedes (5 plantas + 2 CEDIS) +
        mapa ilustrativo con pines. Seleccionar una sede la resalta
        (tarjeta + pin de la planta); no usa Google Maps ni claves.
   El chrome (Navbar/Footer/FAB) lo aporta RootLayout.
   ------------------------------------------------------------ */
export function FindUsPage() {
  useDocumentMeta({
    title: 'Encuéntranos · Finca',
    description:
      'Dónde encontrarnos: 5 plantas y 2 CEDIS a nivel nacional. Ubica tu punto Finca más cercano y comunícate con nuestro equipo comercial.',
  })
  return (
    <>
      <FindUsHero />
      <StoreLocator />
    </>
  )
}

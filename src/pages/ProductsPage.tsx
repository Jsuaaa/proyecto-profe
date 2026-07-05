import { ProductsHero } from '@/sections/productos/ProductsHero'
import { ProductLinesGrid } from '@/sections/productos/ProductLinesGrid'
import { useDocumentMeta } from '@/lib/useDocumentMeta'

/* ============================================================
   ProductsPage (F6) — landing de categorías de producto, con
   paridad visual respecto a
   design-system/ui_kits/website/productos.html.
   Secciones, en orden:
     1. ProductsHero      — banda intro con gradiente (.pagehero).
     2. ProductLinesGrid  — grilla de las 6 líneas de producto,
                            cada una enlaza a /productos/:slug.
   El chrome (Navbar/Footer/FAB) lo aporta RootLayout.
   ------------------------------------------------------------ */
export function ProductsPage() {
  useDocumentMeta({
    title: 'Productos · Finca',
    description:
      'Líneas de alimento balanceado Finca por especie: ganadería, avicultura, porcicultura, acuacultura, equinos y especies menores, para cada etapa productiva.',
  })
  return (
    <>
      <ProductsHero />
      <ProductLinesGrid />
    </>
  )
}

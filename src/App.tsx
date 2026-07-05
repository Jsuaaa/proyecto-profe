import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RootLayout } from '@/layouts/RootLayout'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { ProductsPage } from '@/pages/ProductsPage'
import { CategoryPage } from '@/pages/CategoryPage'
import { BlogPage } from '@/pages/BlogPage'
import { FindUsPage } from '@/pages/FindUsPage'
import { ContactPage } from '@/pages/ContactPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

/* ============================================================
   Router — 7 páginas del ui_kit + 404. Rutas y labels según el
   Design System (site.js): Inicio, Nosotros, Productos,
   categoría-detalle (/productos/:slug), Noticias, Encuéntranos,
   Contáctanos. El chrome vive en RootLayout (todas las rutas).
   ------------------------------------------------------------ */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="nosotros" element={<AboutPage />} />
          <Route path="productos" element={<ProductsPage />} />
          <Route path="productos/:slug" element={<CategoryPage />} />
          <Route path="noticias" element={<BlogPage />} />
          <Route path="encuentranos" element={<FindUsPage />} />
          <Route path="contactanos" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

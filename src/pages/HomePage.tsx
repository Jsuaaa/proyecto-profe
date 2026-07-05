import { HeroCarousel } from '@/components/home/HeroCarousel'
import { MasterySection } from '@/components/home/MasterySection'
import { ProductLinesSection } from '@/components/home/ProductLinesSection'
import { NewsSection } from '@/components/home/NewsSection'
import { SustainabilitySection } from '@/components/home/SustainabilitySection'
import { FindWorkSection } from '@/components/home/FindWorkSection'
import { useDocumentMeta } from '@/lib/useDocumentMeta'

/* ============================================================
   HomePage (F4) — recreación de la Home de Finca con paridad
   visual respecto a design-system/ui_kits/website/index.html.
   Secciones, en orden:
     1. HeroCarousel        — hero a sangre, auto-rotativo.
     2. MasterySection      — split "Maestría en el campo" + video.
     3. ProductLinesSection — grilla de las 6 líneas de producto.
     4. NewsSection         — grilla de noticias.
     5. SustainabilitySection — banda oscura de sostenibilidad.
     6. FindWorkSection     — encuéntranos / trabaja con nosotros.
   El chrome (Navbar/Footer/FAB) lo aporta RootLayout.
   ------------------------------------------------------------ */
export function HomePage() {
  useDocumentMeta({
    title: 'Finca · Maestría en el campo colombiano',
    description:
      'Alimento balanceado y nutrición animal para ganadería, avicultura, porcicultura, acuacultura y equinos. Más de 70 años de maestría en el campo — Grupo Bios.',
  })
  return (
    <>
      <HeroCarousel />
      <MasterySection />
      <ProductLinesSection />
      <NewsSection />
      <SustainabilitySection />
      <FindWorkSection />
    </>
  )
}

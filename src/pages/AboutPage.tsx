import { AboutHero } from '@/sections/nosotros/AboutHero'
import { PurposeSection } from '@/sections/nosotros/PurposeSection'
import { StatsBand } from '@/sections/nosotros/StatsBand'
import { ValuePropositionSection } from '@/sections/nosotros/ValuePropositionSection'
import { TraceabilitySection } from '@/sections/nosotros/TraceabilitySection'
import { CertificationsSection } from '@/sections/nosotros/CertificationsSection'
import { PoliciesSection } from '@/sections/nosotros/PoliciesSection'
import { useDocumentMeta } from '@/lib/useDocumentMeta'

/* ============================================================
   AboutPage (F5) — recreación de la página Nosotros de Finca
   con paridad visual respecto a
   design-system/ui_kits/website/nosotros.html.
   Secciones, en orden:
     1. AboutHero               — banda de marca "Somos Finca".
     2. PurposeSection          — Propósito superior (ABA) + foto.
     3. StatsBand               — +70 años / 5 plantas / 2 CEDIS.
     4. ValuePropositionSection — tarjetas 01–05 de la propuesta ABA.
     5. TraceabilitySection     — trazabilidad (del origen al producto).
     6. CertificationsSection   — BAP Buga/Ciénaga/Neiva + Global G.A.P.
     7. PoliciesSection         — las 4 políticas de la compañía.
   El chrome (Navbar/Footer/FAB) lo aporta RootLayout.
   ------------------------------------------------------------ */
export function AboutPage() {
  useDocumentMeta({
    title: 'Nosotros · Finca',
    description:
      'Somos Finca (Grupo Bios): más de 70 años produciendo alimento balanceado con 5 plantas y 2 CEDIS, calidad ABA y certificaciones BAP y Global G.A.P.',
  })
  return (
    <>
      <AboutHero />
      <PurposeSection />
      <StatsBand />
      <ValuePropositionSection />
      <TraceabilitySection />
      <CertificationsSection />
      <PoliciesSection />
    </>
  )
}

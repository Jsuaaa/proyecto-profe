import { ContactHero } from '@/sections/contacto/ContactHero'
import { ContactSection } from '@/sections/contacto/ContactSection'
import { useDocumentMeta } from '@/lib/useDocumentMeta'

/* ============================================================
   ContactPage (F9) — recreación de la página Contáctanos de Finca
   con paridad visual respecto a
   design-system/ui_kits/website/contactanos.html.
   Secciones, en orden:
     1. ContactHero    — banda de marca "Hablemos".
     2. ContactSection — formulario (validación client-side) +
        canales (WhatsApp / teléfono / correo) y horario.
   El chrome (Navbar/Footer/FAB) lo aporta RootLayout.
   ------------------------------------------------------------ */
export function ContactPage() {
  useDocumentMeta({
    title: 'Contáctanos · Finca',
    description:
      'Hablemos: escríbenos o contáctanos por WhatsApp, teléfono (01 8000 51 31 01) y correo. Nuestro equipo de maestros te asesora en nutrición animal.',
  })
  return (
    <>
      <ContactHero />
      <ContactSection />
    </>
  )
}

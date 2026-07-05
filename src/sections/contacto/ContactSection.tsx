import { ContactForm } from '@/sections/contacto/ContactForm'
import { ContactChannels } from '@/sections/contacto/ContactChannels'

/* ============================================================
   ContactSection — rejilla de dos columnas de la página
   Contáctanos. Paridad con contactanos.html (.cwrap): formulario
   (1.1fr) a la izquierda y canales + horario (0.9fr) a la derecha,
   con gap de 48px y alineados al inicio. En < lg colapsa a una
   sola columna (el formulario encima) para no romper en 360px.
   Ritmo vertical del ui_kit: 64px arriba / 88px abajo.
   ------------------------------------------------------------ */
export function ContactSection() {
  return (
    <section className="site-wrap grid grid-cols-1 gap-12 pb-[88px] pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
      <ContactForm />
      <ContactChannels />
    </section>
  )
}

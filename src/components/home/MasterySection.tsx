import { hero } from '@/lib/assets'
import { socialLinks } from '@/lib/site'

/* ============================================================
   MasterySection — split "Maestría en el campo colombiano".
   Paridad con index.html (.split): copy de +70 años a la
   izquierda y tarjeta de video (thumbnail 16/10 con botón play
   rojo) a la derecha. El play abre el canal de YouTube de Finca
   (thumbnail con botón play, sin hotlink de imagen: usa el
   fondo local de ganadería).
   ------------------------------------------------------------ */

const youtubeHref =
  socialLinks.find((s) => s.name === 'youtube')?.href ??
  'https://www.youtube.com/@FincaColombia'

export function MasterySection() {
  return (
    <section className="site-wrap grid items-center gap-10 py-[5.5rem] lg:grid-cols-2 lg:gap-14">
      <div>
        <h2 className="m-0 mb-5 font-display text-[clamp(2rem,5vw,3rem)] font-bold leading-heading text-finca-green-deep">
          Maestría en el campo colombiano
        </h2>
        <p className="m-0 mb-4 text-[1.0625rem] leading-[1.7]">
          Durante más de 70 años hemos perfeccionado cada aspecto de nuestro
          trabajo, porque entendimos que ser expertos no es suficiente.
          Aprendimos que la verdadera excelencia está en conocer a profundidad
          al productor pecuario.
        </p>
        <p className="m-0 text-[1.0625rem] font-semibold leading-[1.7] text-finca-gray-700">
          Somos más que expertos; somos maestros en el reto de impulsar el
          progreso en cada granja y en cada pradera.
        </p>
      </div>

      <a
        href={youtubeHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver el video de presentación de Finca en YouTube"
        className="group relative block aspect-[16/10] overflow-hidden rounded-card bg-cover bg-center shadow-card"
        style={{ backgroundImage: `url(${hero.ganaderia})` }}
      >
        <span className="absolute inset-0 flex items-center justify-center bg-black/[0.28] transition-colors duration-[240ms] group-hover:bg-black/40">
          <span className="flex h-[74px] w-[74px] items-center justify-center rounded-full bg-finca-red shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-transform duration-[240ms] group-hover:scale-105">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="ml-1 h-7 w-7 fill-white"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </span>
      </a>
    </section>
  )
}

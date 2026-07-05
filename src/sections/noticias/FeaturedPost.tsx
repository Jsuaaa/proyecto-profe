import { Button } from '@/components/core/Button'
import { noticias } from '@/lib/assets'

/* ============================================================
   FeaturedPost (F8) — post destacado de la página Noticias.
   Paridad con .featured de noticias.html: grid 1.3fr/1fr con
   imagen a sangre (izq) y cuerpo verde bosque (der) con tag
   amarilla, titular display, entradilla y CTA amarillo. Copy e
   imagen literales del ui_kit; la foto es local (assets.ts →
   caballosGuia = interna-uno-1.png), nunca un hotlink.

   Responsive: a <768px apila a 1 columna (imagen arriba, cuerpo
   abajo) para 360px sin scroll horizontal; a ≥768px recupera el
   split 1.3fr/1fr del ui_kit (paridad a 1280px).
   ------------------------------------------------------------ */

export function FeaturedPost() {
  return (
    <article className="mb-14 grid grid-cols-1 overflow-hidden rounded-card shadow-card md:grid-cols-[1.3fr_1fr]">
      <div
        role="img"
        aria-label="Guía para una correcta alimentación de caballos"
        className="min-h-[240px] bg-cover bg-center md:min-h-[340px]"
        style={{ backgroundImage: `url(${noticias.caballosGuia})` }}
      />
      <div className="flex flex-col justify-center bg-finca-green-forest p-8 text-white md:p-12">
        <span className="mb-[18px] self-start rounded-pill bg-finca-yellow px-4 py-1.5 font-display text-[0.72rem] font-bold uppercase tracking-[0.08em] text-finca-ink">
          Destacado · Equinos
        </span>
        <h2 className="mb-4 font-display text-[2rem] font-extrabold leading-heading">
          Guía para una correcta alimentación de caballos
        </h2>
        <p className="mb-[26px] leading-[1.6] opacity-[0.92]">
          Todo lo que necesitas saber para diseñar una dieta equilibrada según
          la etapa, actividad y condición de tus caballos.
        </p>
        <Button variant="yellow" href="#" fullWidth className="justify-start">
          Leer artículo
        </Button>
      </div>
    </article>
  )
}

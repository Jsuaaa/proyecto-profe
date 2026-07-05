import { useEffect, useState } from 'react'
import { Button } from '@/components/core/Button'
import { cn } from '@/lib/cn'
import { productLines } from '@/lib/assets'

/* ============================================================
   HeroCarousel — hero a sangre con carrusel auto-rotativo.
   Paridad con design-system/ui_kits/website/index.html (#hero):
   cross-fade de fondos (~800ms), auto-rotate 6s, scrim
   izquierda→derecha, kicker amarillo, título display UPPERCASE
   verde vivo, subtítulo, botón pill outline y "cola" en itálica.
   Indicadores (dots) accesibles como <button>. Respeta
   prefers-reduced-motion (sin auto-rotación) y pausa al hover.
   ------------------------------------------------------------ */

type Slide = {
  image: string
  kicker: string
  title: string
  sub: string
  tail: string
}

const SLIDES: Slide[] = [
  {
    image: productLines.porcicultura,
    kicker: '¿Quieres mejorar la',
    title: 'Eficiencia',
    sub: 'En tu porcicultura con pesos finales altos?',
    tail: 'y descubre cómo hacerlo',
  },
  {
    image: productLines.avicultura,
    kicker: 'Genética y nutrición para tu',
    title: 'Avicultura',
    sub: 'Más conversión, mejor uniformidad en cada lote.',
    tail: 'conoce nuestras líneas',
  },
  {
    image: productLines.ganaderia,
    kicker: 'Productividad para tu',
    title: 'Ganadería',
    sub: 'Leche y carne con el respaldo de 70 años.',
    tail: 'habla con un experto',
  },
]

const ROTATE_MS = 6000

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    // Sin auto-rotación si el usuario pidió menos movimiento o hay hover.
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || paused) return
    const id = window.setInterval(
      () => setCurrent((c) => (c + 1) % SLIDES.length),
      ROTATE_MS,
    )
    return () => window.clearInterval(id)
  }, [paused])

  const active = SLIDES[current]

  return (
    <section
      className="relative h-[560px] overflow-hidden sm:h-[600px] lg:h-[620px]"
      aria-roledescription="carrusel"
      aria-label="Destacados de Finca"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Fondos: cross-fade por opacidad (~800ms). */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.title}
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            backgroundImage: `url(${slide.image})`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}

      {/* Scrim izquierda→derecha para legibilidad del texto. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 [background:var(--scrim-hero)]"
      />

      {/* Contenido (constreñido al contenedor de 1200px). */}
      <div className="site-wrap relative flex h-full flex-col justify-center">
        <div className="max-w-[640px]">
          <p className="m-0 mb-0.5 font-display text-[clamp(1rem,4vw,1.4rem)] font-bold uppercase leading-tight text-finca-yellow">
            {active.kicker}
          </p>
          <h1 className="m-0 mb-1.5 font-display text-[clamp(2.5rem,10vw,5rem)] font-black uppercase leading-[0.98] tracking-[-0.01em] text-finca-green-vivid">
            {active.title}
          </h1>
          <p className="m-0 mb-6 max-w-[34ch] font-display text-[clamp(1.1rem,4vw,1.7rem)] font-extrabold uppercase leading-[1.1] text-white">
            {active.sub}
          </p>
          <Button to="/noticias" variant="outline" size="lg">
            Visita nuestro blog
          </Button>
          <p className="mt-[18px] font-display text-[clamp(1.1rem,3.5vw,1.5rem)] italic text-white">
            {active.tail}
          </p>
        </div>
      </div>

      {/* Indicadores accesibles. */}
      <div className="absolute inset-x-0 bottom-[22px] flex justify-center gap-2.5">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Ir a la diapositiva ${i + 1}: ${slide.title}`}
            aria-current={i === current ? 'true' : undefined}
            className={cn(
              'h-2.5 cursor-pointer rounded-pill border-0 p-0 transition-all duration-300',
              i === current
                ? 'w-[26px] bg-finca-yellow'
                : 'w-2.5 bg-white/60 hover:bg-white/80',
            )}
          />
        ))}
      </div>

      {/* Anuncio para lectores de pantalla. */}
      <p className="sr-only" aria-live="polite">
        Diapositiva {current + 1} de {SLIDES.length}: {active.title}
      </p>
    </section>
  )
}

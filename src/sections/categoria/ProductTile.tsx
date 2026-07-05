/* ============================================================
   ProductTile — ficha de producto del catálogo de categoría.
   Paridad con .pcard de porcicultura.html: tarjeta blanca con
   imagen cuadrada sobre verde-tint, título verde profundo y un
   enlace de acción abajo. En modo vitrina (sin precio ni carrito)
   la acción es "Cotizar" por WhatsApp con mensaje prellenado.
   ------------------------------------------------------------ */

export interface ProductTileProps {
  name: string
  /** Imagen local (assets.ts) — nunca un hotlink. */
  image: string
  /** Destino de la acción (WhatsApp de cotización). */
  href: string
}

export function ProductTile({ name, image, href }: ProductTileProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Cotizar ${name} por WhatsApp`}
      className="group flex flex-col overflow-hidden rounded-card border border-finca-gray-200 bg-white no-underline shadow-card transition-[transform,box-shadow] duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-card-hover"
    >
      <div className="flex aspect-square items-center justify-center overflow-hidden bg-finca-green-tint">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2.5 px-[18px] pb-5 pt-[18px]">
        <h3 className="font-display text-[1rem] font-bold leading-[1.25] text-finca-green-deep">
          {name}
        </h3>
        <span className="mt-auto inline-flex items-center gap-1.5 font-display text-[0.82rem] font-bold text-finca-green">
          Cotizar
          <span
            aria-hidden="true"
            className="transition-transform duration-[240ms] group-hover:translate-x-1"
          >
            ›
          </span>
        </span>
      </div>
    </a>
  )
}

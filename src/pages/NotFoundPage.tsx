import { Badge } from '@/components/core/Badge'
import { Button } from '@/components/core/Button'
import { useDocumentMeta } from '@/lib/useDocumentMeta'

/** Página 404. */
export function NotFoundPage() {
  useDocumentMeta({
    title: 'Página no encontrada · Finca',
    description:
      'La página que buscas no existe o cambió de dirección. Vuelve al inicio de Finca para explorar nuestras líneas de alimento balanceado.',
  })
  return (
    <section className="site-wrap section-y">
      <div className="max-w-2xl space-y-4">
        <Badge tone="red" variant="pill">
          Error 404
        </Badge>
        <h1 className="font-display text-h1 font-bold leading-heading text-finca-green-deep">
          Página no encontrada
        </h1>
        <p className="text-lead leading-snug text-finca-gray-600">
          La página que buscas no existe o cambió de dirección.
        </p>
        <Button to="/" variant="primary">
          Volver al inicio
        </Button>
      </div>
    </section>
  )
}

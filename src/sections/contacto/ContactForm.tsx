import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Input } from '@/components/core/Input'
import { Button } from '@/components/core/Button'
import { cn } from '@/lib/cn'

/* ============================================================
   ContactForm — tarjeta blanca del formulario "Escríbenos".
   Paridad con contactanos.html (.form): card redondeada con
   sombra, título verde profundo, dos filas de 2 campos, un
   selector de línea de interés, el mensaje y el botón primario
   a ancho completo. Los campos usan el <Input> del DS (anillo de
   foco verde); el <select> se recrea con el mismo lenguaje visual.

   Validación 100% client-side (demo, sin backend):
     - requeridos: nombre, apellido, correo, línea de interés, mensaje;
     - correo con formato válido;
     - el teléfono es opcional.
   Al enviar sin errores se muestra el estado "enviado" (role=status).
   El <form> lleva noValidate para que la validación de React sea la
   autoridad (evita los globos nativos del navegador).
   Accesibilidad: cada campo tiene label asociado (htmlFor) y
   aria-invalid; el select añade aria-describedby a su error.
   ------------------------------------------------------------ */

type FieldName =
  | 'nombre'
  | 'apellido'
  | 'correo'
  | 'telefono'
  | 'interes'
  | 'mensaje'

type FormValues = Record<FieldName, string>
type FormErrors = Partial<Record<FieldName, string>>
type FieldChange = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>

const EMPTY: FormValues = {
  nombre: '',
  apellido: '',
  correo: '',
  telefono: '',
  interes: '',
  mensaje: '',
}

/** Líneas de negocio de Finca (mismas opciones del ui_kit). */
const INTERESES = [
  'Avicultura',
  'Porcicultura',
  'Ganadería',
  'Acuacultura',
  'Equinos',
  'Otros',
] as const

/** Formato de correo laxo pero suficiente para una demo de marketing. */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(v: FormValues): FormErrors {
  const e: FormErrors = {}
  if (!v.nombre.trim()) e.nombre = 'Ingresa tu nombre.'
  if (!v.apellido.trim()) e.apellido = 'Ingresa tu apellido.'
  if (!v.correo.trim()) e.correo = 'Ingresa tu correo electrónico.'
  else if (!EMAIL_RE.test(v.correo.trim()))
    e.correo = 'Ingresa un correo electrónico válido.'
  if (!v.interes) e.interes = 'Selecciona una línea de interés.'
  if (!v.mensaje.trim()) e.mensaje = 'Cuéntanos en qué podemos ayudarte.'
  return e
}

/* ---------- Selector de línea de interés ----------
   Recrea el <select> del ui_kit con el mismo lenguaje visual del
   <Input> del DS (borde de 2px, pill, anillo de foco verde), ya que
   el componente Input del DS solo cubre input/textarea. */
function SelectField({
  id,
  label,
  value,
  onChange,
  error,
  options,
}: {
  id: string
  label: string
  value: string
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  error?: string
  options: readonly string[]
}) {
  const cls = cn(
    'w-full box-border cursor-pointer bg-white font-body text-base outline-none border-2 rounded-pill px-5 py-3 transition-[border-color,box-shadow] duration-[240ms]',
    value === '' ? 'text-finca-gray-400' : 'text-finca-ink',
    error
      ? 'border-finca-red focus:border-finca-red focus:shadow-[0_0_0_4px_rgba(221,32,38,0.15)]'
      : 'border-finca-gray-300 focus:border-finca-green focus:shadow-[0_0_0_4px_rgba(31,153,80,0.15)]',
  )
  return (
    <div className="flex flex-col gap-[7px]">
      <label
        htmlFor={id}
        className="font-display text-sm font-semibold text-finca-gray-700"
      >
        {label}
        <span className="text-finca-red"> *</span>
      </label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cls}
      >
        <option value="">Selecciona una opción</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error && (
        <span id={`${id}-error`} className="text-xs text-finca-red">
          {error}
        </span>
      )}
    </div>
  )
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(EMPTY)
  const [errors, setErrors] = useState<FormErrors>({})
  const [sent, setSent] = useState(false)

  /** Actualiza un campo y limpia su error en cuanto el usuario corrige. */
  function update(name: FieldName) {
    return (e: FieldChange) => {
      const { value } = e.target
      setValues((prev) => ({ ...prev, [name]: value }))
      setErrors((prev) => {
        if (!prev[name]) return prev
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length === 0) setSent(true)
  }

  function reset() {
    setValues(EMPTY)
    setErrors({})
    setSent(false)
  }

  /* ---------- Estado "enviado" (demo, sin backend) ---------- */
  if (sent) {
    return (
      <div className="rounded-card bg-white p-6 shadow-card sm:p-10">
        <div
          role="status"
          aria-live="polite"
          className="flex flex-col items-center gap-4 rounded-md bg-finca-green-tint px-6 py-12 text-center"
        >
          <span
            className="flex h-14 w-14 items-center justify-center rounded-full bg-finca-green text-white"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-7 w-7"
            >
              <path d="m5 12 4.5 4.5L19 7" />
            </svg>
          </span>
          <h2 className="m-0 font-display text-[1.5rem] font-bold text-finca-green-deep">
            ¡Mensaje enviado!
          </h2>
          <p className="m-0 max-w-[44ch] leading-[1.7] text-finca-gray-700">
            Gracias por escribirnos{values.nombre ? `, ${values.nombre}` : ''}.
            Nuestro equipo de maestros te responderá muy pronto. Esta es una
            demostración: no se envió información a ningún servidor.
          </p>
          <Button
            type="button"
            variant="outlineDark"
            size="md"
            onClick={reset}
          >
            Enviar otro mensaje
          </Button>
        </div>
      </div>
    )
  }

  /* ---------- Formulario ---------- */
  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      aria-label="Formulario de contacto"
      className="rounded-card bg-white p-6 shadow-card sm:p-10"
    >
      <h2 className="m-0 mb-[26px] font-display text-[1.9rem] font-bold leading-heading text-finca-green-deep">
        Escríbenos
      </h2>

      <div className="flex flex-col gap-[18px]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Input
            id="nombre"
            name="nombre"
            label="Nombre"
            placeholder="Tu nombre"
            value={values.nombre}
            onChange={update('nombre')}
            required
            error={errors.nombre}
          />
          <Input
            id="apellido"
            name="apellido"
            label="Apellido"
            placeholder="Tu apellido"
            value={values.apellido}
            onChange={update('apellido')}
            required
            error={errors.apellido}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Input
            id="correo"
            name="correo"
            type="email"
            label="Correo electrónico"
            placeholder="tucorreo@ejemplo.com"
            value={values.correo}
            onChange={update('correo')}
            required
            error={errors.correo}
          />
          <Input
            id="telefono"
            name="telefono"
            type="tel"
            label="Teléfono"
            placeholder="300 000 0000"
            value={values.telefono}
            onChange={update('telefono')}
          />
        </div>

        <SelectField
          id="interes"
          label="Línea de interés"
          value={values.interes}
          onChange={update('interes')}
          error={errors.interes}
          options={INTERESES}
        />

        <Input
          id="mensaje"
          name="mensaje"
          label="Mensaje"
          placeholder="Cuéntanos en qué podemos ayudarte"
          value={values.mensaje}
          onChange={update('mensaje')}
          required
          multiline
          rows={5}
          error={errors.mensaje}
        />

        <Button type="submit" variant="primary" size="lg" fullWidth>
          Enviar mensaje
        </Button>
      </div>
    </form>
  )
}

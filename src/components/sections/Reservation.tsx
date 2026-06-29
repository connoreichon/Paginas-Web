import { useState, type FormEvent } from 'react'
import type { SiteConfig } from '@/types/config.types'
import type { Lang } from '@/App'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface ReservationProps {
  config: SiteConfig
  lang?:  Lang
}

interface FormState {
  nombre:    string
  fecha:     string
  hora:      string
  personas:  string
  notas:     string
}

const EMPTY: FormState = { nombre: '', fecha: '', hora: '', personas: '', notas: '' }

function buildContactUrl(config: SiteConfig, form: FormState, lang: Lang): string {
  const { business } = config
  const isEn = lang === 'en'
  const lines = [
    `🍽️ ${isEn ? 'Booking request' : 'Solicitud de reserva'} — ${business.name}`,
    `${isEn ? 'Name' : 'Nombre'}: ${form.nombre}`,
    `${isEn ? 'Date' : 'Fecha'}: ${form.fecha}`,
    `${isEn ? 'Time' : 'Hora'}: ${form.hora}`,
    `${isEn ? 'Guests' : 'Comensales'}: ${form.personas}`,
    form.notas ? `${isEn ? 'Notes' : 'Notas'}: ${form.notas}` : '',
  ].filter(Boolean).join('\n')

  if (business.whatsapp && business.whatsapp !== 'PENDIENTE_DE_CONFIRMAR') {
    const phone = business.whatsapp.replace(/\D/g, '')
    return `https://wa.me/${phone}?text=${encodeURIComponent(lines)}`
  }
  if (business.email && business.email !== 'PENDIENTE_DE_CONFIRMAR') {
    const subject = `Reserva — ${form.fecha} ${form.hora} (${form.personas} personas)`
    return `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`
  }
  return `#contacto`
}

export default function Reservation({ config, lang = 'es' }: ReservationProps) {
  const { content, business } = config
  const ref = useScrollAnimation<HTMLElement>()
  const [form, setForm] = useState<FormState>(EMPTY)
  const [sent, setSent] = useState(false)

  const reservation = content.reservation
  if (!reservation?.enabled) return null

  const isEn = lang === 'en'
  const t = {
    name:          isEn ? 'Full name'          : 'Nombre completo',
    namePh:        isEn ? 'Your name'          : 'Tu nombre y apellidos',
    date:          isEn ? 'Date'               : 'Fecha',
    time:          isEn ? 'Time'               : 'Hora',
    timePh:        isEn ? 'Select time'        : 'Selecciona hora',
    guests:        isEn ? 'Guests'             : 'Número de personas',
    guestsPh:      isEn ? 'How many guests?'   : '¿Cuántas personas sois?',
    notes:         isEn ? 'Special notes'      : 'Notas especiales',
    optional:      isEn ? '(optional)'         : '(opcional)',
    notesPh:       isEn ? 'Allergies, special occasion, table preference…' : 'Alergias, celebración especial, petición de mesa…',
    submit:        isEn ? 'Send booking request via WhatsApp' : 'Enviar solicitud por WhatsApp',
    submitEmail:   isEn ? 'Send booking request'             : 'Enviar solicitud de reserva',
    sent:          isEn ? 'Request sent! We\'ll confirm soon' : '¡Solicitud enviada! Te confirmamos pronto',
    person:        isEn ? 'person'  : 'persona',
    people:        isEn ? 'people'  : 'personas',
  }

  const today = new Date().toISOString().split('T')[0]

  const set = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }))

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const url = buildContactUrl(config, form, lang)
    if (url === '#contacto') {
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
      return
    }
    window.open(url, '_blank', 'noopener,noreferrer')
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  const viaWhatsApp = business.whatsapp && business.whatsapp !== 'PENDIENTE_DE_CONFIRMAR'

  return (
    <section
      id="reservar"
      ref={ref}
      className="reveal relative py-20 lg:py-28 overflow-hidden"
      style={{ background: '#1E3A2F' }}
      aria-labelledby="reservar-heading"
    >
      {/* Patrón botánico de fondo */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.045]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ mixBlendMode: 'screen' }}
      >
        <defs>
          <pattern id="botanical-res" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M45 100 Q72 42 100 55 Q78 90 45 100Z" fill="#C8A96A" opacity="0.7"/>
            <path d="M45 100 Q60 110 100 55" stroke="#C8A96A" strokeWidth="0.8" fill="none" opacity="0.5"/>
            <path d="M155 30 Q178 78 158 98 Q136 70 155 30Z" fill="#C8A96A" opacity="0.5"/>
            <circle cx="18" cy="175" r="2" fill="#C8A96A" opacity="0.4"/>
            <circle cx="110" cy="168" r="1.2" fill="#C8A96A" opacity="0.3"/>
            <circle cx="190" cy="140" r="2" fill="#C8A96A" opacity="0.35"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#botanical-res)"/>
      </svg>

      {/* Glow sutil derecha */}
      <div
        className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(200,169,106,0.1) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-body text-[11px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: 'rgba(200,169,106,0.7)' }}>
            {business.name}
          </p>
          <div className="flex items-center justify-center gap-4 mb-5" aria-hidden="true">
            <div className="h-px w-12" style={{ background: 'linear-gradient(to right, transparent, rgba(200,169,106,0.5))' }}/>
            <svg width="12" height="12" viewBox="0 0 12 12">
              <circle cx="6" cy="6" r="2.5" fill="#C8A96A" opacity="0.8"/>
              <circle cx="6" cy="6" r="5.5" stroke="#C8A96A" strokeWidth="0.7" opacity="0.3" fill="none"/>
            </svg>
            <div className="h-px w-12" style={{ background: 'linear-gradient(to left, transparent, rgba(200,169,106,0.5))' }}/>
          </div>
          <h2
            id="reservar-heading"
            className="font-heading font-semibold text-white leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}
          >
            {reservation.headline}
          </h2>
          {reservation.subheadline && (
            <p className="font-body text-sm mt-3 max-w-md mx-auto leading-relaxed" style={{ color: 'rgba(244,239,230,0.55)' }}>
              {reservation.subheadline}
            </p>
          )}
        </div>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-2xl p-8 md:p-10 space-y-5"
          style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(200,169,106,0.2)', backdropFilter: 'blur(4px)' }}
          aria-label="Formulario de reserva"
        >

          {/* Nombre */}
          <div>
            <label htmlFor="res-nombre" className="block font-body text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#C8A96A' }}>
              {t.name} <span aria-hidden="true" style={{ color: 'rgba(200,169,106,0.6)' }}>*</span>
            </label>
            <input
              id="res-nombre"
              type="text"
              required
              autoComplete="name"
              placeholder={t.namePh}
              value={form.nombre}
              onChange={set('nombre')}
              className="w-full font-body text-sm px-4 py-3.5 rounded-lg outline-none transition-colors placeholder:opacity-30"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.14)',
                color: '#F4EFE6',
              }}
              onFocus={e => { e.target.style.borderColor = 'rgba(200,169,106,0.55)' }}
              onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.14)' }}
            />
          </div>

          {/* Fecha + Hora */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="res-fecha" className="block font-body text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#C8A96A' }}>
                {t.date} <span aria-hidden="true" style={{ color: 'rgba(200,169,106,0.6)' }}>*</span>
              </label>
              <input
                id="res-fecha"
                type="date"
                required
                min={today}
                value={form.fecha}
                onChange={set('fecha')}
                className="w-full font-body text-sm px-4 py-3.5 rounded-lg outline-none transition-colors"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  color: form.fecha ? '#F4EFE6' : 'rgba(244,239,230,0.3)',
                  colorScheme: 'dark',
                }}
                onFocus={e => { e.target.style.borderColor = 'rgba(200,169,106,0.55)' }}
                onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.14)' }}
              />
            </div>
            <div>
              <label htmlFor="res-hora" className="block font-body text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#C8A96A' }}>
                {t.time} <span aria-hidden="true" style={{ color: 'rgba(200,169,106,0.6)' }}>*</span>
              </label>
              <select
                id="res-hora"
                required
                value={form.hora}
                onChange={set('hora')}
                className="w-full font-body text-sm px-4 py-3.5 rounded-lg outline-none transition-colors appearance-none cursor-pointer"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  color: form.hora ? '#F4EFE6' : 'rgba(244,239,230,0.3)',
                }}
                onFocus={e => { e.target.style.borderColor = 'rgba(200,169,106,0.55)' }}
                onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.14)' }}
              >
                <option value="" disabled>{t.timePh}</option>
                {reservation.timeSlots.map(t => (
                  <option key={t} value={t} style={{ background: '#1E3A2F', color: '#F4EFE6' }}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Número de personas */}
          <div>
            <label htmlFor="res-personas" className="block font-body text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#C8A96A' }}>
              {t.guests} <span aria-hidden="true" style={{ color: 'rgba(200,169,106,0.6)' }}>*</span>
            </label>
            <select
              id="res-personas"
              required
              value={form.personas}
              onChange={set('personas')}
              className="w-full font-body text-sm px-4 py-3.5 rounded-lg outline-none transition-colors appearance-none cursor-pointer"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.14)',
                color: form.personas ? '#F4EFE6' : 'rgba(244,239,230,0.3)',
              }}
              onFocus={e => { e.target.style.borderColor = 'rgba(200,169,106,0.55)' }}
              onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.14)' }}
            >
              <option value="" disabled>{t.guestsPh}</option>
              {Array.from({ length: reservation.maxPartySize }, (_, i) => i + 1).map(n => (
                <option key={n} value={String(n)} style={{ background: '#1E3A2F', color: '#F4EFE6' }}>
                  {n === 1 ? `1 ${t.person}` : `${n} ${t.people}`}
                </option>
              ))}
            </select>
          </div>

          {/* Notas */}
          <div>
            <label htmlFor="res-notas" className="block font-body text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(200,169,106,0.6)' }}>
              {t.notes} <span className="font-normal normal-case tracking-normal ml-1 text-[11px]" style={{ color: 'rgba(244,239,230,0.3)' }}>{t.optional}</span>
            </label>
            <textarea
              id="res-notas"
              rows={3}
              placeholder={t.notesPh}
              value={form.notas}
              onChange={set('notas')}
              className="w-full font-body text-sm px-4 py-3.5 rounded-lg outline-none transition-colors resize-none placeholder:opacity-30"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.14)',
                color: '#F4EFE6',
              }}
              onFocus={e => { e.target.style.borderColor = 'rgba(200,169,106,0.55)' }}
              onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.14)' }}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2.5 font-body font-semibold text-sm px-8 py-4 rounded-lg transition-all duration-200 hover:opacity-90 active:scale-[0.98] min-h-[52px] touch-action-manipulation mt-2"
            style={{ background: '#C8A96A', color: '#0d1f17', boxShadow: '0 4px 24px rgba(200,169,106,0.3)' }}
          >
            {sent ? (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
                {t.sent}
              </>
            ) : viaWhatsApp ? (
              <>
                <WhatsAppIcon />
                {t.submit}
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                {t.submitEmail}
              </>
            )}
          </button>

          {/* Nota de confirmación */}
          {reservation.confirmationNote && (
            <p className="font-body text-xs text-center leading-relaxed pt-1" style={{ color: 'rgba(244,239,230,0.35)' }}>
              {reservation.confirmationNote}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

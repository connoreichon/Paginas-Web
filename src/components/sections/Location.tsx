import type { ReactNode } from 'react'
import type { SiteConfig } from '@/types/config.types'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { getIcon } from '@/utils/icons'

interface LocationProps { config: SiteConfig }

export default function Location({ config }: LocationProps) {
  const { business } = config
  const ref = useScrollAnimation<HTMLElement>()

  return (
    <section id="contacto" ref={ref} className="reveal py-20 lg:py-28" style={{ background: '#F4EFE6' }}>

      {/* Línea decorativa superior */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-px h-10"
        style={{ background: 'linear-gradient(to bottom, #1E3A2F, transparent)', marginTop: '-2.5rem' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-body text-[11px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: '#1E3A2F' }}>
            Dónde estamos
          </p>
          <div className="flex items-center justify-center gap-4 mb-4" aria-hidden="true">
            <div className="h-px w-10" style={{ background: 'linear-gradient(to right, transparent, #C8A96A)' }}/>
            <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="2" fill="#C8A96A"/></svg>
            <div className="h-px w-10" style={{ background: 'linear-gradient(to left, transparent, #C8A96A)' }}/>
          </div>
          <h2 className="font-heading font-semibold text-[#1C1C1A]" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            Encuéntranos
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-start">

          {/* Panel de información */}
          <div className="lg:col-span-2 space-y-4">

            {/* Dirección */}
            <InfoCard icon={getIcon('MapPin')} label="Dirección">
              <p className="font-body text-sm leading-relaxed" style={{ color: '#5C5550' }}>{business.address}</p>
              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-body text-xs font-semibold mt-2 transition-opacity hover:opacity-70"
                style={{ color: '#1E3A2F' }}
              >
                Ver en Google Maps
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </InfoCard>

            {/* Horarios */}
            <InfoCard icon={getIcon('Clock')} label="Horarios">
              <ul className="space-y-2">
                {business.openingHours.map((h, i) => (
                  <li key={i} className="flex justify-between gap-4 font-body text-sm">
                    <span style={{ color: '#8A7F79' }}>{h.days}</span>
                    <span
                      className="font-medium text-right"
                      style={{ color: h.hours.toLowerCase().includes('cerrado') ? '#B0A89E' : '#1C1C1A' }}
                    >
                      {h.hours}
                    </span>
                  </li>
                ))}
              </ul>
              {business.openingHours.some(h => h.note) && (
                <p className="font-body text-xs italic mt-3" style={{ color: '#B0A89E' }}>
                  {business.openingHours.find(h => h.note)?.note}
                </p>
              )}
            </InfoCard>

            {/* Teléfono */}
            {business.phone !== 'PENDIENTE_DE_CONFIRMAR' && (
              <InfoCard icon={getIcon('Phone')} label="Teléfono">
                <a
                  href={`tel:${business.phone}`}
                  className="font-body text-sm font-medium transition-opacity hover:opacity-70"
                  style={{ color: '#1C1C1A' }}
                >
                  {business.phone}
                </a>
              </InfoCard>
            )}

            {/* Email */}
            {business.email !== 'PENDIENTE_DE_CONFIRMAR' && (
              <InfoCard icon={getIcon('Mail')} label="Email">
                <a
                  href={`mailto:${business.email}`}
                  className="font-body text-sm transition-opacity hover:opacity-70"
                  style={{ color: '#1C1C1A' }}
                >
                  {business.email}
                </a>
              </InfoCard>
            )}

          </div>

          {/* Mapa */}
          <div
            className="lg:col-span-3 rounded-xl overflow-hidden shadow-2xl aspect-[4/3]"
            style={{ border: '1px solid rgba(30,58,47,0.15)' }}
          >
            {business.googleMapsEmbed && business.googleMapsEmbed !== '' ? (
              <iframe
                src={business.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Mapa de ${business.name}`}
                className="w-full h-full"
              />
            ) : (
              <div
                className="w-full h-full flex flex-col items-center justify-center gap-4"
                style={{ background: 'linear-gradient(135deg, #1a3a2f 0%, #0d1f17 100%)' }}
              >
                <div style={{ color: '#C8A96A', opacity: 0.6 }}>{getIcon('MapPin')}</div>
                <div className="text-center">
                  <p className="font-heading text-base font-semibold" style={{ color: 'rgba(244,239,230,0.9)' }}>{business.name}</p>
                  <p className="font-body text-sm mt-1" style={{ color: 'rgba(244,239,230,0.5)' }}>{business.address}</p>
                </div>
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-xs font-semibold px-4 py-2.5 rounded-sm transition-opacity hover:opacity-80"
                  style={{ background: '#C8A96A', color: '#0d1f17' }}
                >
                  Abrir en Google Maps →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <div
      className="flex gap-4 p-5 rounded-xl"
      style={{ background: '#FAFAF5', border: '1px solid rgba(30,58,47,0.1)' }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: 'rgba(30,58,47,0.08)', color: '#1E3A2F' }}
        aria-hidden="true"
      >
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] mb-1.5" style={{ color: '#1E3A2F' }}>
          {label}
        </p>
        {children}
      </div>
    </div>
  )
}

import type { ReactNode } from 'react'
import type { SiteConfig } from '@/types/config.types'
import SectionTitle from '@/components/ui/SectionTitle'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { getIcon } from '@/utils/icons'

interface LocationProps { config: SiteConfig }

export default function Location({ config }: LocationProps) {
  const { business } = config
  const ref = useScrollAnimation<HTMLElement>()

  return (
    <section id="contacto" ref={ref} className="reveal py-20 lg:py-28 bg-[var(--color-surface-muted)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Dónde estamos"
          title="Encuéntranos"
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

          {/* Info panel */}
          <div className="lg:col-span-2 space-y-6">

            {/* Address */}
            <InfoCard
              icon={getIcon('MapPin')}
              label="Dirección"
            >
              <p className="font-body text-sm text-[var(--color-ink-muted)]">{business.address}</p>
              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-body text-xs text-[var(--color-primary)] hover:underline mt-1 font-medium"
              >
                Ver en Google Maps {getIcon('ExternalLink')}
              </a>
            </InfoCard>

            {/* Hours */}
            <InfoCard icon={getIcon('Clock')} label="Horarios">
              <ul className="space-y-1.5">
                {business.openingHours.map((h, i) => (
                  <li key={i} className="flex justify-between gap-4 font-body text-sm">
                    <span className="text-[var(--color-ink-muted)]">{h.days}</span>
                    <span className={`font-medium text-right ${h.hours.toLowerCase().includes('cerrado') ? 'text-[var(--color-ink-muted)]/50' : 'text-[var(--color-ink)]'}`}>
                      {h.hours}
                    </span>
                  </li>
                ))}
              </ul>
              {business.openingHours.some(h => h.note) && (
                <p className="font-body text-xs text-[var(--color-ink-muted)]/60 mt-2 italic">
                  {business.openingHours.find(h => h.note)?.note}
                </p>
              )}
            </InfoCard>

            {/* Phone */}
            {business.phone !== 'PENDIENTE_DE_CONFIRMAR' && (
              <InfoCard icon={getIcon('Phone')} label="Teléfono">
                <a
                  href={`tel:${business.phone}`}
                  className="font-body text-sm text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors font-medium"
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
                  className="font-body text-sm text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors"
                >
                  {business.email}
                </a>
              </InfoCard>
            )}
          </div>

          {/* Map */}
          <div className="lg:col-span-3 rounded-lg overflow-hidden shadow-xl border border-[var(--color-border)] aspect-[4/3]">
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
              <div className="w-full h-full img-placeholder flex flex-col items-center justify-center gap-3 text-[var(--color-ink-muted)]">
                {getIcon('MapPin')}
                <div className="text-center">
                  <p className="font-body text-sm font-medium text-[var(--color-ink)]">{business.name}</p>
                  <p className="font-body text-xs text-[var(--color-ink-muted)]">{business.address}</p>
                </div>
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs text-[var(--color-primary)] hover:underline font-medium"
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
    <div className="flex gap-4">
      <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/8 flex items-center justify-center flex-shrink-0 text-[var(--color-primary)]" aria-hidden="true">
        {icon}
      </div>
      <div>
        <p className="font-body text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)] mb-1">{label}</p>
        {children}
      </div>
    </div>
  )
}

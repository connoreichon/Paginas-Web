import type { ReactNode } from 'react'
import type { SiteConfig } from '@/types/config.types'

interface FooterProps {
  config: SiteConfig
  navLinks: { href: string; label: string }[]
}

export default function Footer({ config, navLinks }: FooterProps) {
  const { business, seo } = config
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-surface-dark)] text-[var(--color-ink-inv)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-2xl font-semibold text-[var(--color-ink-inv)] mb-2">
              {business.name}
            </h3>
            <p className="font-body text-xs tracking-[0.18em] uppercase text-[var(--color-secondary)] mb-4">
              {business.tagline}
            </p>
            <p className="font-body text-sm text-[var(--color-ink-inv)]/65 leading-relaxed max-w-xs">
              {business.shortDescription}
            </p>
            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {business.social.instagram && (
                <SocialIcon href={business.social.instagram} label="Instagram">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </SocialIcon>
              )}
              {business.social.facebook && (
                <SocialIcon href={business.social.facebook} label="Facebook">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </SocialIcon>
              )}
              {business.social.tripadvisor && (
                <SocialIcon href={business.social.tripadvisor} label="TripAdvisor">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.03 8.617a4.35 4.35 0 014.35 4.35 4.35 4.35 0 01-4.35 4.35 4.35 4.35 0 01-4.35-4.35 4.35 4.35 0 014.35-4.35zm-10.06 0a4.35 4.35 0 014.35 4.35 4.35 4.35 0 01-4.35 4.35A4.35 4.35 0 012.62 12.97a4.35 4.35 0 014.35-4.353zM12 8.617l-1.78 2.12H7.94l2.46 2.297-.94 2.908L12 14.44l2.54 1.5-.94-2.908 2.46-2.297h-2.28z"/>
                  </svg>
                </SocialIcon>
              )}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-secondary)] mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-[var(--color-ink-inv)]/65 hover:text-[var(--color-ink-inv)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-secondary)] mb-4">
              Contacto
            </h4>
            <address className="not-italic space-y-2.5">
              <p className="font-body text-sm text-[var(--color-ink-inv)]/65">{business.address}</p>
              {business.phone !== 'PENDIENTE_DE_CONFIRMAR' && (
                <a href={`tel:${business.phone}`} className="block font-body text-sm text-[var(--color-ink-inv)]/65 hover:text-[var(--color-ink-inv)] transition-colors">
                  {business.phone}
                </a>
              )}
              {business.email !== 'PENDIENTE_DE_CONFIRMAR' && (
                <a href={`mailto:${business.email}`} className="block font-body text-sm text-[var(--color-ink-inv)]/65 hover:text-[var(--color-ink-inv)] transition-colors">
                  {business.email}
                </a>
              )}
              {business.openingHours.slice(0, 2).map((h, i) => (
                <p key={i} className="font-body text-xs text-[var(--color-ink-inv)]/50">
                  {h.days}: {h.hours}
                </p>
              ))}
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-body text-xs text-[var(--color-ink-inv)]/40">
            © {year} {business.name}. Todos los derechos reservados.
          </p>
          <p className="font-body text-xs text-[var(--color-ink-inv)]/30">
            {business.city} · {seo.locale.replace('_', '-')}
          </p>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-[var(--color-ink-inv)]/60 hover:text-[var(--color-ink-inv)] hover:border-white/30 transition-all"
    >
      {children}
    </a>
  )
}

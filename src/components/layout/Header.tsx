import { useState, useEffect } from 'react'
import type { SiteConfig } from '@/types/config.types'
import Button from '@/components/ui/Button'

interface HeaderProps {
  config: SiteConfig
  navLinks: { href: string; label: string }[]
}

export default function Header({ config, navLinks }: HeaderProps) {
  const { business, content } = config
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on nav click
  const handleNav = () => setOpen(false)

  const ctaHref = business.reservationUrl
    ? business.reservationUrl
    : business.whatsapp !== 'PENDIENTE_DE_CONFIRMAR'
    ? `https://wa.me/${business.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(business.whatsappMessage)}`
    : '#contacto'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--color-surface)]/95 backdrop-blur-md shadow-sm border-b border-[var(--color-border)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo / Brand name */}
          <a href="#" className="flex items-center gap-3 group" aria-label={business.name}>
            {business.logo ? (
              <img src={business.logo} alt={business.name} className="h-10 w-auto" />
            ) : (
              <div className="flex flex-col leading-none">
                <span
                  className={`font-heading text-xl lg:text-2xl font-semibold transition-colors ${
                    scrolled ? 'text-[var(--color-primary)]' : 'text-white'
                  }`}
                >
                  {business.name}
                </span>
                <span
                  className={`font-body text-[10px] tracking-[0.2em] uppercase transition-colors ${
                    scrolled ? 'text-[var(--color-ink-muted)]' : 'text-white/70'
                  }`}
                >
                  {business.tagline}
                </span>
              </div>
            )}
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación principal">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`font-body text-sm font-medium transition-colors hover:text-[var(--color-secondary)] ${
                  scrolled ? 'text-[var(--color-ink-muted)]' : 'text-white/85'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              href={ctaHref}
              variant={scrolled ? 'primary' : 'dark'}
              size="sm"
              external={!!business.reservationUrl}
            >
              {content.hero.ctaPrimary}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`lg:hidden p-2 rounded-md transition-colors ${scrolled ? 'text-[var(--color-ink)]' : 'text-white'}`}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Abrir menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } bg-[var(--color-surface)]/98 backdrop-blur-md border-b border-[var(--color-border)]`}
      >
        <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1" aria-label="Menú móvil">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNav}
              className="font-body text-base font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] py-3 border-b border-[var(--color-border)] last:border-0 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 pb-2">
            <Button href={ctaHref} variant="primary" size="md" className="w-full justify-center" external={!!business.reservationUrl}>
              {content.hero.ctaPrimary}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

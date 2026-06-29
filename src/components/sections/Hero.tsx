import { useEffect, useRef } from 'react'
import type { SiteConfig } from '@/types/config.types'
import Button from '@/components/ui/Button'

interface HeroProps { config: SiteConfig }

export default function Hero({ config }: HeroProps) {
  const { business, content: { hero } } = config
  const titleRef = useRef<HTMLHeadingElement>(null)

  const ctaReservaHref = business.reservationUrl
    ? business.reservationUrl
    : business.whatsapp !== 'PENDIENTE_DE_CONFIRMAR'
    ? `https://wa.me/${business.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(business.whatsappMessage)}`
    : '#contacto'

  // Animate title words on mount
  useEffect(() => {
    const el = titleRef.current
    if (!el) return
    setTimeout(() => el.classList.add('in-view'), 100)
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-dvh flex flex-col justify-end pb-16 md:pb-20 lg:pb-24"
      aria-label="Sección principal"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero.image}
          alt={hero.imageAlt}
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          onError={e => {
            const el = e.currentTarget
            el.style.display = 'none'
            el.parentElement!.classList.add('img-placeholder')
          }}
        />
        <div className="hero-overlay absolute inset-0" aria-hidden="true" />
      </div>

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[var(--color-secondary)]" aria-hidden="true" />
            <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-secondary)]">
              {business.name} · {business.city}
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={titleRef}
            className="reveal font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-[1.08] mb-6"
            style={{ whiteSpace: 'pre-line' }}
          >
            {hero.headline}
          </h1>

          {/* Subheadline */}
          <p className="reveal font-body text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-xl" style={{ transitionDelay: '0.1s' }}>
            {hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="reveal flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10" style={{ transitionDelay: '0.2s' }}>
            <Button href={ctaReservaHref} variant="dark" size="lg" external={!!business.reservationUrl}>
              {hero.ctaPrimary}
            </Button>
            <Button href="#carta" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10 hover:text-white hover:border-white/60">
              {hero.ctaSecondary}
            </Button>
          </div>

          {/* Trust badges */}
          <div className="reveal flex flex-wrap gap-6" style={{ transitionDelay: '0.3s' }}>
            {hero.trustBadges.map((badge, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-heading text-xl font-semibold text-[var(--color-secondary)]">{badge.value}</span>
                <span className="font-body text-xs text-white/60 uppercase tracking-wider">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block" aria-hidden="true">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="font-body text-[10px] tracking-widest uppercase text-white/40">Scroll</span>
          <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}

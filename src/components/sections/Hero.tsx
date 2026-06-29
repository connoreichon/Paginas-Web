import { useEffect, useRef } from 'react'
import type { SiteConfig } from '@/types/config.types'

interface HeroProps { config: SiteConfig }

export default function Hero({ config }: HeroProps) {
  const { business, content: { hero } } = config
  const titleRef = useRef<HTMLHeadingElement>(null)

  const ctaReservaHref = '#reservar'

  useEffect(() => {
    const el = titleRef.current
    if (!el) return
    setTimeout(() => el.classList.add('in-view'), 120)
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-dvh flex flex-col justify-end overflow-hidden"
      aria-label="Sección principal"
    >
      {/* ── Atmospheric CSS background (no photo needed) ── */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 70% 90%, rgba(139,99,71,0.35) 0%, transparent 55%),
              radial-gradient(ellipse 60% 50% at 20% 10%, rgba(200,169,106,0.12) 0%, transparent 55%),
              radial-gradient(ellipse 100% 80% at 50% 100%, rgba(30,58,47,0.9) 0%, transparent 70%),
              linear-gradient(160deg, #080f0b 0%, #0f2318 30%, #1a3a2f 60%, #0d1f17 100%)
            `,
          }}
        />

        {/* Botanical SVG pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.055]"
          xmlns="http://www.w3.org/2000/svg"
          style={{ mixBlendMode: 'screen' }}
        >
          <defs>
            <pattern id="botanical" x="0" y="0" width="180" height="180" patternUnits="userSpaceOnUse">
              {/* Leaf 1 */}
              <path d="M40 90 Q60 40 90 50 Q70 80 40 90Z" fill="#C8A96A" opacity="0.6"/>
              <path d="M40 90 Q55 100 90 50" stroke="#C8A96A" strokeWidth="0.8" fill="none" opacity="0.5"/>
              {/* Leaf 2 */}
              <path d="M140 30 Q160 70 140 90 Q120 65 140 30Z" fill="#C8A96A" opacity="0.4"/>
              <path d="M140 30 Q135 60 140 90" stroke="#C8A96A" strokeWidth="0.8" fill="none" opacity="0.4"/>
              {/* Small dots */}
              <circle cx="20" cy="160" r="1.5" fill="#C8A96A" opacity="0.5"/>
              <circle cx="100" cy="150" r="1" fill="#C8A96A" opacity="0.4"/>
              <circle cx="165" cy="120" r="1.5" fill="#C8A96A" opacity="0.3"/>
              {/* Branch */}
              <path d="M0 120 Q30 100 60 110 Q50 90 80 85" stroke="#C8A96A" strokeWidth="0.6" fill="none" opacity="0.35"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#botanical)"/>
        </svg>

        {/* Warm vignette bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-3/4"
          style={{
            background: 'linear-gradient(to top, rgba(8,15,11,0.95) 0%, rgba(8,15,11,0.6) 40%, transparent 100%)',
          }}
        />

        {/* If real image exists, show it over everything */}
        <img
          src={hero.image}
          alt={hero.imageAlt}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000"
          loading="eager"
          decoding="async"
          onLoad={e => { e.currentTarget.style.opacity = '1' }}
          onError={e => { e.currentTarget.style.display = 'none' }}
        />
        {/* Overlay sobre la foto real */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(8,15,11,0.3) 0%, rgba(8,15,11,0.25) 40%, rgba(8,15,11,0.75) 100%)',
          }}
        />
      </div>

      {/* ── Decorative top line ── */}
      <div className="absolute top-0 left-0 right-0 h-[2px] z-10" style={{ background: 'linear-gradient(to right, transparent, #C8A96A44, #C8A96A, #C8A96A44, transparent)' }} aria-hidden="true"/>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20 md:pb-28 lg:pb-32 pt-32">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-7">
            <div className="flex gap-1" aria-hidden="true">
              <span className="w-4 h-px bg-[#C8A96A]"/>
              <span className="w-2 h-px bg-[#C8A96A]/50"/>
            </div>
            <span className="font-body text-[11px] font-semibold tracking-[0.22em] uppercase" style={{ color: '#C8A96A' }}>
              {business.city} · {business.tagline}
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={titleRef}
            className="reveal font-heading font-semibold text-white leading-[1.06] mb-6"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', whiteSpace: 'pre-line', textShadow: '0 2px 32px rgba(0,0,0,0.5)' }}
          >
            {hero.headline}
          </h1>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6" aria-hidden="true">
            <div className="h-px w-12" style={{ background: '#C8A96A' }}/>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="2" fill="#C8A96A"/>
              <circle cx="8" cy="8" r="5" stroke="#C8A96A" strokeWidth="0.8" opacity="0.5"/>
            </svg>
            <div className="h-px w-12" style={{ background: '#C8A96A' }}/>
          </div>

          {/* Subheadline */}
          <p
            className="reveal font-body text-white/75 leading-relaxed mb-9"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', transitionDelay: '0.1s', maxWidth: '38ch' }}
          >
            {hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="reveal flex flex-col sm:flex-row gap-3 mb-12" style={{ transitionDelay: '0.2s' }}>
            <a
              href={ctaReservaHref}
              className="inline-flex items-center justify-center gap-2.5 font-body font-semibold text-sm px-8 py-4 rounded-sm transition-all duration-200 hover:brightness-110 active:scale-[0.98] min-h-[52px]"
              style={{
                background: '#2D5A40',
                color: '#F4EFE6',
                border: '1px solid rgba(200,169,106,0.35)',
                boxShadow: '0 4px 24px rgba(30,58,47,0.5), inset 0 1px 0 rgba(200,169,106,0.15)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              {hero.ctaPrimary}
            </a>
            <a
              href="#carta"
              className="inline-flex items-center justify-center gap-2 font-body font-medium text-sm px-8 py-4 rounded-sm border border-white/30 text-white hover:bg-white/8 hover:border-white/50 transition-all duration-200 min-h-[52px]"
            >
              {hero.ctaSecondary}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </a>
          </div>

          {/* Trust badges */}
          <div className="reveal flex flex-wrap gap-6 sm:gap-8" style={{ transitionDelay: '0.3s' }}>
            {hero.trustBadges.map((badge, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-px h-8 bg-white/15" aria-hidden="true"/>
                <div>
                  <div className="font-heading font-semibold text-xl leading-none" style={{ color: '#C8A96A' }}>{badge.value}</div>
                  <div className="font-body text-[10px] text-white/50 uppercase tracking-wider mt-0.5">{badge.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll arrow */}
      <div className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-2" aria-hidden="true">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/20"/>
        <svg className="w-4 h-4 text-white/30 animate-bounce" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </section>
  )
}

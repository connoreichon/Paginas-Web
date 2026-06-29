import type { SiteConfig } from '@/types/config.types'
import SectionTitle from '@/components/ui/SectionTitle'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface AboutProps { config: SiteConfig }

export default function About({ config }: AboutProps) {
  const { content: { about } } = config
  const imgRef  = useScrollAnimation<HTMLDivElement>()
  const textRef = useScrollAnimation<HTMLDivElement>()

  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-[var(--color-surface-muted)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <div ref={imgRef} className="reveal-left relative">
            <div className="relative aspect-[4/3] lg:aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
              <img
                src={about.image}
                alt={about.imageAlt}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                onError={e => {
                  const el = e.currentTarget
                  el.parentElement!.classList.add('img-placeholder')
                  el.style.display = 'none'
                  const ph = document.createElement('div')
                  ph.className = 'w-full h-full flex items-center justify-center text-[var(--color-border)]'
                  ph.innerHTML = `<svg class="w-16 h-16" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path stroke-linecap="round" d="M21 15l-5-5L5 21"/></svg>`
                  el.parentElement!.appendChild(ph)
                }}
              />
            </div>
            {/* Decorative accent */}
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 rounded-lg bg-[var(--color-secondary)]/20 -z-10"
              aria-hidden="true"
            />
            <div
              className="absolute -top-4 -left-4 w-16 h-16 rounded-lg bg-[var(--color-primary)]/10 -z-10"
              aria-hidden="true"
            />
          </div>

          {/* Text */}
          <div ref={textRef} className="reveal-right">
            <SectionTitle
              eyebrow="Nuestra historia"
              title={about.headline}
              align="left"
            />

            <div className="space-y-4 mb-8">
              {about.body.map((para, i) => (
                <p key={i} className="font-body text-base text-[var(--color-ink-muted)] leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Highlights */}
            <ul className="grid grid-cols-2 gap-3" aria-label="Características destacadas">
              {about.highlights.map(h => (
                <li key={h} className="flex items-center gap-2.5 font-body text-sm text-[var(--color-ink)]">
                  <span
                    className="w-4 h-4 rounded-full border-2 border-[var(--color-secondary)] flex items-center justify-center flex-shrink-0"
                    aria-hidden="true"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

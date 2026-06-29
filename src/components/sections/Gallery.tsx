import type { SiteConfig } from '@/types/config.types'
import SectionTitle from '@/components/ui/SectionTitle'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface GalleryProps { config: SiteConfig }

export default function Gallery({ config }: GalleryProps) {
  const { gallery } = config
  const ref = useScrollAnimation<HTMLElement>()

  if (gallery.images.length === 0) return null

  // Distribute: first image is large, rest fill grid
  const [hero, ...rest] = gallery.images

  return (
    <section id="galeria" ref={ref} className="reveal py-20 lg:py-28 bg-[var(--color-surface-muted)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Galería"
          title="Imágenes que hablan"
          subtitle="Un vistazo a lo que te espera."
          align="center"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
          {/* Hero image — spans 2 cols on md+ */}
          <div className="gallery-item col-span-2 md:col-span-1 md:row-span-2 aspect-square md:aspect-auto">
            <GalleryImg src={hero.src} alt={hero.alt} caption={hero.caption} priority />
          </div>

          {/* Rest */}
          {rest.map(img => (
            <div key={img.src} className="gallery-item aspect-square">
              <GalleryImg src={img.src} alt={img.alt} caption={img.caption} />
            </div>
          ))}
        </div>

        <p className="text-center font-body text-xs text-[var(--color-ink-muted)] mt-6">
          Síguenos en{' '}
          {config.business.social.instagram && (
            <a
              href={config.business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] font-medium hover:underline"
            >
              Instagram
            </a>
          )}
          {' '}para ver más.
        </p>
      </div>
    </section>
  )
}

function GalleryImg({ src, alt, caption, priority }: { src: string; alt: string; caption?: string; priority?: boolean }) {
  return (
    <>
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className="w-full h-full object-cover"
        onError={e => {
          const img = e.currentTarget
          img.style.display = 'none'
          const ph = img.parentElement!
          ph.classList.add('img-placeholder')
          ph.style.minHeight = '200px'
          const inner = document.createElement('div')
          inner.className = 'flex flex-col items-center justify-center gap-2 text-[var(--color-border)] p-4'
          inner.innerHTML = `
            <svg class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="1.2" viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <path stroke-linecap="round" d="M21 15l-5-5L5 21"/>
            </svg>
            <span class="text-xs font-body">${alt}</span>
          `
          ph.appendChild(inner)
        }}
      />
      {caption && (
        <div className="gallery-caption">
          <span className="font-body text-xs tracking-wide">{caption}</span>
        </div>
      )}
    </>
  )
}

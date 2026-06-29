import type { SiteConfig } from '@/types/config.types'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface GalleryProps { config: SiteConfig }

// Gradientes de placeholder que evocan comida/restaurante
const placeholderGradients = [
  'linear-gradient(135deg, #1a3a2f 0%, #2d5a40 50%, #1a3a2f 100%)',
  'linear-gradient(135deg, #2a1f0f 0%, #5c3d1e 50%, #3a2810 100%)',
  'linear-gradient(135deg, #0d1f17 0%, #1a3a2f 40%, #2d4a38 100%)',
  'linear-gradient(135deg, #3a2a10 0%, #7a5520 50%, #4a3418 100%)',
  'linear-gradient(135deg, #1a2a20 0%, #3a5a45 50%, #1a2a20 100%)',
  'linear-gradient(135deg, #250e0e 0%, #6b3a1f 50%, #3a1a10 100%)',
]

const foodIcons = [
  // Plato con tapa
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 opacity-40">
    <ellipse cx="32" cy="44" rx="24" ry="6" stroke="#C8A96A" strokeWidth="1.5"/>
    <path d="M8 44 Q8 32 32 32 Q56 32 56 44" stroke="#C8A96A" strokeWidth="1.5" fill="none"/>
    <path d="M20 32 Q20 20 32 18 Q44 20 44 32" stroke="#C8A96A" strokeWidth="1" fill="none" opacity="0.6"/>
    <circle cx="32" cy="16" r="3" stroke="#C8A96A" strokeWidth="1.2" fill="none"/>
  </svg>,
  // Copa de vino
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 opacity-40">
    <path d="M20 10 Q18 26 32 34 Q46 26 44 10Z" stroke="#C8A96A" strokeWidth="1.5" fill="none"/>
    <line x1="32" y1="34" x2="32" y2="50" stroke="#C8A96A" strokeWidth="1.5"/>
    <line x1="22" y1="50" x2="42" y2="50" stroke="#C8A96A" strokeWidth="1.5"/>
    <path d="M22 20 Q28 24 32 22" stroke="#C8A96A" strokeWidth="0.8" opacity="0.5"/>
  </svg>,
  // Tenedor y cuchillo
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 opacity-40">
    <line x1="24" y1="10" x2="24" y2="54" stroke="#C8A96A" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20 10 L20 22 Q24 26 24 26 Q24 26 28 22 L28 10" stroke="#C8A96A" strokeWidth="1.2" fill="none"/>
    <path d="M38 10 Q44 14 44 24 Q44 30 40 32 L40 54" stroke="#C8A96A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  </svg>,
  // Hoja/Planta
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 opacity-40">
    <path d="M32 52 Q32 30 50 16 Q50 38 32 52Z" stroke="#C8A96A" strokeWidth="1.2" fill="rgba(200,169,106,0.08)"/>
    <path d="M32 52 Q32 34 14 20 Q14 42 32 52Z" stroke="#C8A96A" strokeWidth="1.2" fill="rgba(200,169,106,0.08)"/>
    <line x1="32" y1="52" x2="32" y2="20" stroke="#C8A96A" strokeWidth="0.8" opacity="0.5"/>
    <path d="M32 40 Q40 36 46 30" stroke="#C8A96A" strokeWidth="0.6" opacity="0.4"/>
    <path d="M32 44 Q24 40 18 34" stroke="#C8A96A" strokeWidth="0.6" opacity="0.4"/>
  </svg>,
  // Interior/Mesa
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 opacity-40">
    <rect x="12" y="28" width="40" height="4" rx="2" stroke="#C8A96A" strokeWidth="1.5" fill="none"/>
    <line x1="20" y1="32" x2="16" y2="52" stroke="#C8A96A" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="44" y1="32" x2="48" y2="52" stroke="#C8A96A" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="28" cy="20" r="5" stroke="#C8A96A" strokeWidth="1" fill="none"/>
    <path d="M26 20 Q28 17 30 20" stroke="#C8A96A" strokeWidth="0.8" fill="none" opacity="0.6"/>
    <circle cx="28" cy="20" r="2" fill="#C8A96A" opacity="0.2"/>
  </svg>,
  // Botella de vino
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 opacity-40">
    <path d="M26 10 L26 18 Q20 24 20 34 L20 50 Q20 54 32 54 Q44 54 44 50 L44 34 Q44 24 38 18 L38 10Z" stroke="#C8A96A" strokeWidth="1.5" fill="none"/>
    <line x1="26" y1="10" x2="38" y2="10" stroke="#C8A96A" strokeWidth="1.5"/>
    <line x1="28" y1="12" x2="36" y2="12" stroke="#C8A96A" strokeWidth="2" strokeLinecap="round" style={{ stroke: 'rgba(200,169,106,0.5)' }}/>
    <path d="M20 38 Q32 36 44 38" stroke="#C8A96A" strokeWidth="0.8" opacity="0.4"/>
  </svg>,
]

export default function Gallery({ config }: GalleryProps) {
  const { gallery, business } = config
  const ref = useScrollAnimation<HTMLElement>()

  if (gallery.images.length === 0) return null

  const [first, second, third, ...rest] = gallery.images

  return (
    <section id="galeria" ref={ref} className="reveal py-20 lg:py-28" style={{ background: '#F4EFE6' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-body text-[11px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: '#1E3A2F' }}>
            Galería
          </p>
          <div className="flex items-center justify-center gap-4 mb-4" aria-hidden="true">
            <div className="h-px w-10" style={{ background: 'linear-gradient(to right, transparent, #C8A96A)' }}/>
            <svg width="10" height="10" viewBox="0 0 10 10"><circle cx="5" cy="5" r="2" fill="#C8A96A"/></svg>
            <div className="h-px w-10" style={{ background: 'linear-gradient(to left, transparent, #C8A96A)' }}/>
          </div>
          <h2 className="font-heading font-semibold text-[#1C1C1A]" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            Una mirada al interior
          </h2>
          <p className="font-body text-sm mt-2" style={{ color: '#5C5550' }}>
            Ambiente, platos y momentos de La Puerta Verde
          </p>
        </div>

        {/* Grid asimétrico premium */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">

          {/* Imagen grande izquierda */}
          <div className="col-span-2 md:col-span-1 md:row-span-2">
            <GalleryCard img={first} gradientIndex={0} iconIndex={0} tall />
          </div>

          {/* Fila derecha arriba */}
          <div className="col-span-1">
            <GalleryCard img={second} gradientIndex={1} iconIndex={1} />
          </div>
          <div className="col-span-1">
            <GalleryCard img={third} gradientIndex={2} iconIndex={2} />
          </div>

          {/* Fila inferior */}
          {rest.map((img, i) => (
            <div key={img.src} className="col-span-1">
              <GalleryCard img={img} gradientIndex={i + 3} iconIndex={i + 3} />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        {business.social.instagram && (
          <div className="text-center mt-10">
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 font-body text-sm font-medium transition-colors"
              style={{ color: '#1E3A2F' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              Síguenos en Instagram para ver más
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

interface GalleryCardProps {
  img: { src: string; alt: string; caption?: string }
  gradientIndex: number
  iconIndex: number
  tall?: boolean
}

function GalleryCard({ img, gradientIndex, iconIndex, tall }: GalleryCardProps) {
  const gradient = placeholderGradients[gradientIndex % placeholderGradients.length]
  const icon = foodIcons[iconIndex % foodIcons.length]
  const aspectClass = tall ? 'aspect-[3/4] md:h-full md:aspect-auto min-h-[300px]' : 'aspect-square'

  return (
    <div className={`gallery-item relative rounded-lg overflow-hidden ${aspectClass}`} style={{ background: gradient }}>
      {/* Placeholder always visible (beneath real image) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 pointer-events-none">
        {icon}
        {img.caption && (
          <span className="font-body text-xs tracking-widest uppercase" style={{ color: 'rgba(200,169,106,0.5)' }}>
            {img.caption}
          </span>
        )}
      </div>

      {/* Real image — renders on top when it loads */}
      <img
        src={img.src}
        alt={img.alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700"
        onLoad={e => { e.currentTarget.style.opacity = '1' }}
        onError={e => { e.currentTarget.style.display = 'none' }}
      />

      {/* Hover caption overlay */}
      {img.caption && (
        <div className="gallery-caption absolute bottom-0 left-0 right-0">
          <span className="font-body text-xs tracking-wide text-white">{img.caption}</span>
        </div>
      )}
    </div>
  )
}

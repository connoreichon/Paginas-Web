import type { SiteConfig } from '@/types/config.types'
import { useStaggerAnimation } from '@/hooks/useScrollAnimation'

interface ReviewsProps { config: SiteConfig }

export default function Reviews({ config }: ReviewsProps) {
  const { reviews } = config
  const ref = useStaggerAnimation<HTMLDivElement>(reviews.reviews.length)

  return (
    <section id="opiniones" className="py-20 lg:py-28 relative overflow-hidden" style={{ background: '#0d1a11' }}>

      {/* Glows de fondo */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div style={{ position: 'absolute', top: '-15%', right: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(30,58,47,0.5) 0%, transparent 70%)' }}/>
        <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,169,106,0.05) 0%, transparent 70%)' }}/>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-body text-[11px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: '#C8A96A' }}>
            Opiniones
          </p>
          <div className="flex items-center justify-center gap-4 mb-4" aria-hidden="true">
            <div className="h-px w-12" style={{ background: 'linear-gradient(to right, transparent, #C8A96A)' }}/>
            <svg width="12" height="12" viewBox="0 0 12 12"><circle cx="6" cy="6" r="2" fill="#C8A96A"/><circle cx="6" cy="6" r="5" stroke="#C8A96A" strokeWidth="0.8" opacity="0.4" fill="none"/></svg>
            <div className="h-px w-12" style={{ background: 'linear-gradient(to left, transparent, #C8A96A)' }}/>
          </div>
          <h2 className="font-heading font-semibold text-white leading-tight" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            Lo que dicen nuestros clientes
          </h2>
        </div>

        {/* Puntuación global */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-14">
          <div className="text-center">
            <div className="font-heading font-semibold leading-none mb-2" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', color: '#C8A96A' }}>
              {reviews.averageRating}
            </div>
            <div className="flex items-center justify-center gap-1 mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    fill={i < Math.round(reviews.averageRating) ? '#C8A96A' : 'rgba(200,169,106,0.2)'}
                  />
                </svg>
              ))}
            </div>
            <p className="font-body text-xs" style={{ color: 'rgba(244,239,230,0.35)' }}>
              Basado en {reviews.totalReviews} opiniones
            </p>
          </div>

          <div className="hidden sm:block w-px h-16" style={{ background: 'rgba(255,255,255,0.1)' }} aria-hidden="true"/>

          <div className="flex gap-4 flex-wrap justify-center">
            {config.business.social.google && (
              <PlatformBadge name="Google" rating={reviews.averageRating} />
            )}
            {config.business.social.tripadvisor && (
              <PlatformBadge name="TripAdvisor" rating={reviews.averageRating} />
            )}
          </div>
        </div>

        {/* Cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.reviews.map(review => (
            <article
              key={review.id}
              className="reveal relative flex flex-col p-6 rounded-xl transition-transform duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {/* Comilla decorativa */}
              <span
                className="absolute top-4 right-5 font-heading text-5xl leading-none pointer-events-none"
                style={{ color: 'rgba(200,169,106,0.12)' }}
                aria-hidden="true"
              >
                "
              </span>

              {/* Estrellas */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      fill={i < review.rating ? '#C8A96A' : 'rgba(200,169,106,0.2)'}
                    />
                  </svg>
                ))}
              </div>

              {/* Texto */}
              <blockquote className="flex-1 mb-5">
                <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(244,239,230,0.65)' }}>
                  "{review.text}"
                </p>
              </blockquote>

              {/* Separador */}
              <div className="w-full h-px mb-4" style={{ background: 'rgba(255,255,255,0.07)' }} aria-hidden="true"/>

              {/* Autor */}
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(30,58,47,0.6)', border: '1px solid rgba(200,169,106,0.2)' }}
                  aria-hidden="true"
                >
                  <span className="font-heading text-sm font-semibold" style={{ color: '#C8A96A' }}>
                    {review.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-body text-sm font-medium leading-none" style={{ color: 'rgba(244,239,230,0.85)' }}>
                    {review.author}
                  </p>
                  {review.date && (
                    <p className="font-body text-xs mt-0.5" style={{ color: 'rgba(244,239,230,0.3)' }}>
                      {review.date}
                    </p>
                  )}
                </div>
                {review.platform && (
                  <span
                    className="ml-auto font-body text-[10px] px-2 py-0.5 rounded"
                    style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(244,239,230,0.35)' }}
                  >
                    {review.platform === 'google' ? 'G' : review.platform === 'tripadvisor' ? 'TA' : review.platform}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* CTA a opiniones */}
        {config.business.social.tripadvisor && (
          <div className="text-center mt-10">
            <a
              href={config.business.social.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm font-medium transition-colors"
              style={{ color: 'rgba(200,169,106,0.7)' }}
            >
              Ver todas las opiniones en TripAdvisor
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

function PlatformBadge({ name, rating }: { name: string; rating: number }) {
  return (
    <div
      className="flex flex-col items-center px-5 py-3 rounded-lg min-w-[90px]"
      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
    >
      <span className="font-body text-xs mb-0.5" style={{ color: 'rgba(244,239,230,0.4)' }}>{name}</span>
      <span className="font-heading text-xl font-semibold" style={{ color: '#C8A96A' }}>{rating}★</span>
    </div>
  )
}

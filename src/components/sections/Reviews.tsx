import type { SiteConfig } from '@/types/config.types'
import SectionTitle from '@/components/ui/SectionTitle'
import StarRating from '@/components/ui/StarRating'
import { useStaggerAnimation } from '@/hooks/useScrollAnimation'

interface ReviewsProps { config: SiteConfig }

const platformLabels: Record<string, string> = {
  google: 'Google',
  tripadvisor: 'TripAdvisor',
  facebook: 'Facebook',
  directo: 'Opinión directa',
}

export default function Reviews({ config }: ReviewsProps) {
  const { reviews } = config
  const ref = useStaggerAnimation<HTMLDivElement>(reviews.reviews.length)

  return (
    <section id="opiniones" className="py-20 lg:py-28 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Opiniones"
          title="Lo que dicen nuestros clientes"
          align="center"
        />

        {/* Summary bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-14">
          <div className="text-center">
            <div className="font-heading text-6xl font-semibold text-[var(--color-primary)] leading-none mb-1">
              {reviews.averageRating}
            </div>
            <StarRating rating={reviews.averageRating} size="md" />
            <p className="font-body text-xs text-[var(--color-ink-muted)] mt-1">
              Basado en {reviews.totalReviews} opiniones
            </p>
          </div>
          <div className="hidden sm:block w-px h-16 bg-[var(--color-border)]" aria-hidden="true" />
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
              className="reveal p-6 rounded-lg bg-[var(--color-surface-muted)] border border-[var(--color-border)] flex flex-col card-lift"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                {/* Avatar */}
                <div
                  className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <span className="font-heading text-base font-semibold text-[var(--color-ink-inv)]">
                    {review.author.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-body text-sm font-semibold text-[var(--color-ink)] truncate">{review.author}</p>
                  {review.date && (
                    <p className="font-body text-xs text-[var(--color-ink-muted)]">{review.date}</p>
                  )}
                </div>
                {/* Platform icon */}
                {review.platform && (
                  <span className="font-body text-[10px] text-[var(--color-ink-muted)] bg-[var(--color-border)] px-1.5 py-0.5 rounded flex-shrink-0">
                    {platformLabels[review.platform] ?? review.platform}
                  </span>
                )}
              </div>

              <StarRating rating={review.rating} size="sm" />

              <blockquote className="mt-3 flex-1">
                <p className="font-body text-sm text-[var(--color-ink-muted)] leading-relaxed italic">
                  "{review.text}"
                </p>
              </blockquote>
            </article>
          ))}
        </div>

        {/* CTA to review */}
        {config.business.social.tripadvisor && (
          <div className="text-center mt-10">
            <a
              href={config.business.social.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] font-medium transition-colors"
            >
              Ver todas las opiniones en TripAdvisor
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
    <div className="flex flex-col items-center p-4 rounded-lg bg-[var(--color-surface-muted)] border border-[var(--color-border)] min-w-[100px]">
      <span className="font-body text-xs text-[var(--color-ink-muted)] mb-1">{name}</span>
      <span className="font-heading text-xl font-semibold text-[var(--color-primary)]">{rating}★</span>
    </div>
  )
}

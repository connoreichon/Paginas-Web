import type { SiteConfig } from '@/types/config.types'
import SectionTitle from '@/components/ui/SectionTitle'
import { useStaggerAnimation } from '@/hooks/useScrollAnimation'
import { getIcon } from '@/utils/icons'

interface ValuePropsProps { config: SiteConfig }

export default function ValueProps({ config }: ValuePropsProps) {
  const { content } = config
  const ref = useStaggerAnimation<HTMLDivElement>(content.valueProps.length)

  return (
    <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Por qué elegirnos"
          title="Lo que nos hace únicos"
          align="center"
        />
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {content.valueProps.map((vp) => (
            <div
              key={vp.title}
              className="reveal group p-8 rounded-lg bg-[var(--color-surface-muted)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/20 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)]/8 flex items-center justify-center mb-5 group-hover:bg-[var(--color-primary)]/15 transition-colors">
                <span className="text-[var(--color-primary)]" aria-hidden="true">
                  {getIcon(vp.icon)}
                </span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-[var(--color-ink)] mb-2">
                {vp.title}
              </h3>
              <p className="font-body text-sm text-[var(--color-ink-muted)] leading-relaxed">
                {vp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

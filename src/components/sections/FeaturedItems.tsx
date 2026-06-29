import { useState } from 'react'
import type { SiteConfig, CatalogCategory } from '@/types/config.types'
import SectionTitle from '@/components/ui/SectionTitle'
import Badge from '@/components/ui/Badge'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface FeaturedItemsProps { config: SiteConfig }

export default function FeaturedItems({ config }: FeaturedItemsProps) {
  const { content, items } = config
  const [activeCategory, setActiveCategory] = useState(items.categories[0]?.id ?? '')
  const sectionRef = useScrollAnimation<HTMLElement>()

  const current = items.categories.find(c => c.id === activeCategory) ?? items.categories[0]

  return (
    <section id="carta" ref={sectionRef} className="reveal py-20 lg:py-28 bg-[var(--color-surface-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={config.business.type === 'restaurant' ? 'Nuestra propuesta' : 'Nuestros productos'}
          title={content.itemsTitle}
          subtitle={content.itemsSubtitle}
          align="center"
          inverted
        />

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" role="tablist" aria-label="Categorías">
          {items.categories.map(cat => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`font-body text-sm font-medium px-5 py-2.5 rounded-sm transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[var(--color-secondary)] touch-action-manipulation min-h-[44px] ${
                activeCategory === cat.id
                  ? 'bg-[var(--color-secondary)] text-[var(--color-surface-dark)] shadow-sm'
                  : 'bg-white/8 text-[var(--color-ink-inv)]/70 border border-white/10 hover:bg-white/12 hover:text-[var(--color-ink-inv)]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Category description */}
        {current?.description && (
          <p className="font-body text-sm text-[var(--color-ink-inv)]/50 text-center mb-8 italic">
            {current.description}
          </p>
        )}

        {/* Items grid */}
        {current && <CategoryItems category={current} />}

        {/* Note */}
        <p className="text-center font-body text-xs text-[var(--color-ink-inv)]/30 mt-12 italic">
          Los precios incluyen IVA. La carta puede variar según disponibilidad del producto.
        </p>
      </div>
    </section>
  )
}

function CategoryItems({ category }: { category: CatalogCategory }) {
  const isMenus = category.items.some(i => i.tags?.includes('Por persona'))

  if (isMenus) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {category.items.map(item => (
          <div
            key={item.id}
            className={`relative rounded-lg p-8 text-center border transition-all duration-300 card-lift ${
              item.highlight
                ? 'bg-[var(--color-secondary)]/15 border-[var(--color-secondary)]/40 shadow-lg'
                : 'bg-white/5 border-white/10 hover:border-white/20'
            }`}
          >
            {item.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge label={item.badge} variant="gold" />
              </div>
            )}
            <h3 className="font-heading text-2xl font-semibold text-[var(--color-ink-inv)] mb-3">{item.name}</h3>
            {item.description && (
              <p className="font-body text-sm text-[var(--color-ink-inv)]/55 mb-6">{item.description}</p>
            )}
            <div className="text-3xl font-heading font-semibold text-[var(--color-secondary)] mb-3">
              {item.price}
            </div>
            {item.tags?.map(tag => (
              <span key={tag} className="font-body text-xs text-[var(--color-ink-inv)]/35">{tag}</span>
            ))}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-lg overflow-hidden border border-white/8">
      {category.items.map((item) => (
        <div
          key={item.id}
          className={`group flex items-start justify-between gap-4 p-6 transition-colors duration-200 hover:bg-white/5 ${
            item.highlight ? 'bg-[var(--color-secondary)]/8' : 'bg-[var(--color-surface-dark)]'
          }`}
        >
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h3 className={`font-body text-base font-medium leading-snug ${item.highlight ? 'text-[var(--color-ink-inv)]' : 'text-[var(--color-ink-inv)]/85'}`}>
                {item.name}
              </h3>
              {item.badge && <Badge label={item.badge} variant="gold" />}
            </div>
            {item.description && (
              <p className="font-body text-xs text-[var(--color-ink-inv)]/40 leading-relaxed">
                {item.description}
              </p>
            )}
            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {item.tags.map(tag => (
                  <Badge key={tag} label={tag} variant="muted" />
                ))}
              </div>
            )}
          </div>
          {item.price && (
            <span className="font-heading text-base font-semibold text-[var(--color-secondary)] flex-shrink-0 mt-0.5">
              {item.price}
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

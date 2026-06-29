import { useState } from 'react'
import type { SiteConfig, CatalogCategory, CatalogItem } from '@/types/config.types'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface FeaturedItemsProps { config: SiteConfig }

export default function FeaturedItems({ config }: FeaturedItemsProps) {
  const { content, items } = config
  const [activeCategory, setActiveCategory] = useState(items.categories[0]?.id ?? '')
  const ref = useScrollAnimation<HTMLElement>()

  const current = items.categories.find(c => c.id === activeCategory) ?? items.categories[0]

  return (
    <section id="carta" ref={ref} className="reveal py-20 lg:py-28 relative overflow-hidden" style={{ background: '#080f0b' }}>

      {/* Fondo decorativo */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,169,106,0.06) 0%, transparent 70%)' }}/>
        <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(30,58,47,0.4) 0%, transparent 70%)' }}/>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-body text-[11px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: '#C8A96A' }}>
            {config.business.type === 'restaurant' ? 'Nuestra propuesta' : 'Catálogo'}
          </p>
          <div className="flex items-center justify-center gap-4 mb-4" aria-hidden="true">
            <div className="h-px w-12" style={{ background: 'linear-gradient(to right, transparent, #C8A96A)' }}/>
            <svg width="12" height="12" viewBox="0 0 12 12"><circle cx="6" cy="6" r="2" fill="#C8A96A"/><circle cx="6" cy="6" r="5" stroke="#C8A96A" strokeWidth="0.8" opacity="0.4" fill="none"/></svg>
            <div className="h-px w-12" style={{ background: 'linear-gradient(to left, transparent, #C8A96A)' }}/>
          </div>
          <h2 className="font-heading font-semibold text-white leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            {content.itemsTitle}
          </h2>
          {content.itemsSubtitle && (
            <p className="font-body mt-3 max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(244,239,230,0.55)', fontSize: '0.95rem' }}>
              {content.itemsSubtitle}
            </p>
          )}
        </div>

        {/* Tabs de categoría */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" role="tablist">
          {items.categories.map(cat => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="font-body font-medium text-sm px-6 py-2.5 rounded-full transition-all duration-200 min-h-[44px] touch-action-manipulation"
              style={activeCategory === cat.id
                ? { background: '#C8A96A', color: '#080f0b', fontWeight: 600 }
                : { background: 'rgba(255,255,255,0.06)', color: 'rgba(244,239,230,0.6)', border: '1px solid rgba(255,255,255,0.1)' }
              }
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Descripción de categoría */}
        {current?.description && (
          <p className="text-center font-body text-sm italic mb-8" style={{ color: 'rgba(200,169,106,0.6)' }}>
            — {current.description} —
          </p>
        )}

        {/* Items */}
        {current && <CategoryDisplay category={current} />}

        {/* Pie */}
        <p className="text-center font-body text-xs mt-14" style={{ color: 'rgba(244,239,230,0.2)' }}>
          Precios con IVA incluido · La carta varía según temporada y disponibilidad
        </p>
      </div>
    </section>
  )
}

function CategoryDisplay({ category }: { category: CatalogCategory }) {
  const isMenus = category.items.some(i => i.tags?.includes('Por persona'))

  if (isMenus) return <MenusDegustacion items={category.items} />
  return <TapasGrid items={category.items} />
}

function TapasGrid({ items }: { items: CatalogItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/8 rounded-xl overflow-hidden">
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="group flex items-start justify-between gap-4 px-6 py-5 transition-colors duration-200"
          style={{
            background: item.highlight ? 'rgba(200,169,106,0.07)' : idx % 2 === 0 ? 'rgba(255,255,255,0.025)' : 'transparent',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              {item.highlight && (
                <span className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#C8A96A' }} aria-hidden="true"/>
              )}
              <span
                className="font-body font-medium leading-snug"
                style={{ color: item.highlight ? '#F4EFE6' : 'rgba(244,239,230,0.8)', fontSize: '0.95rem' }}
              >
                {item.name}
              </span>
              {item.badge && <ItemBadge label={item.badge} />}
            </div>
            {item.description && (
              <p className="font-body text-xs mt-0.5 leading-relaxed" style={{ color: 'rgba(244,239,230,0.35)' }}>
                {item.description}
              </p>
            )}
            {item.tags && item.tags.length > 0 && (
              <div className="flex gap-1.5 mt-1.5">
                {item.tags.map(t => (
                  <span key={t} className="font-body text-[10px] px-2 py-0.5 rounded" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(244,239,230,0.4)' }}>{t}</span>
                ))}
              </div>
            )}
          </div>
          {item.price && (
            <span className="font-heading font-semibold flex-shrink-0 mt-0.5 text-base" style={{ color: '#C8A96A' }}>
              {item.price}
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

function MenusDegustacion({ items }: { items: CatalogItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
      {items.map((item, i) => (
        <div
          key={item.id}
          className="relative rounded-xl p-8 text-center flex flex-col items-center transition-transform duration-300 hover:-translate-y-1"
          style={{
            background: item.highlight
              ? 'linear-gradient(145deg, rgba(200,169,106,0.18) 0%, rgba(139,99,71,0.12) 100%)'
              : 'rgba(255,255,255,0.04)',
            border: item.highlight ? '1px solid rgba(200,169,106,0.4)' : '1px solid rgba(255,255,255,0.08)',
            boxShadow: item.highlight ? '0 8px 40px rgba(200,169,106,0.15)' : 'none',
          }}
        >
          {/* Número del menú */}
          <div
            className="font-heading text-6xl font-semibold leading-none mb-4"
            style={{ color: item.highlight ? '#C8A96A' : 'rgba(200,169,106,0.3)', fontStyle: 'italic' }}
          >
            {i + 3}
          </div>

          {item.badge && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="font-body text-[10px] font-semibold px-3 py-1 rounded-full" style={{ background: '#C8A96A', color: '#080f0b' }}>
                {item.badge}
              </span>
            </div>
          )}

          <h3 className="font-heading text-xl font-semibold text-white mb-2">{item.name}</h3>
          {item.description && (
            <p className="font-body text-sm mb-5 leading-relaxed" style={{ color: 'rgba(244,239,230,0.45)' }}>{item.description}</p>
          )}

          <div className="font-heading font-semibold text-3xl" style={{ color: '#C8A96A' }}>
            {item.price}
          </div>
          {item.tags?.map(t => (
            <span key={t} className="font-body text-[10px] mt-1" style={{ color: 'rgba(244,239,230,0.3)' }}>{t}</span>
          ))}
        </div>
      ))}
    </div>
  )
}

function ItemBadge({ label }: { label: string }) {
  return (
    <span
      className="font-body text-[10px] font-semibold px-2 py-0.5 rounded-full"
      style={{ background: 'rgba(200,169,106,0.15)', color: '#C8A96A', border: '1px solid rgba(200,169,106,0.25)' }}
    >
      {label}
    </span>
  )
}

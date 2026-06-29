import type { SiteConfig } from '@/types/config.types'
import { useStaggerAnimation } from '@/hooks/useScrollAnimation'
import { getIcon } from '@/utils/icons'

interface ValuePropsProps { config: SiteConfig }

export default function ValueProps({ config }: ValuePropsProps) {
  const { content } = config
  const ref = useStaggerAnimation<HTMLDivElement>(content.valueProps.length)

  return (
    <section className="py-20 lg:py-24 relative" style={{ background: '#F4EFE6' }}>

      {/* Línea decorativa superior */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12"
        style={{ background: 'linear-gradient(to bottom, #1E3A2F, transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header mínimo */}
        <div className="text-center mb-14">
          <p className="font-body text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: '#1E3A2F' }}>
            Por qué visitarnos
          </p>
          <h2 className="font-heading font-semibold text-[#1C1C1A]" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            Lo que nos hace únicos
          </h2>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {content.valueProps.map((vp, i) => (
            <div
              key={vp.title}
              className="reveal group relative p-8 rounded-xl transition-all duration-300 hover:shadow-xl"
              style={{ background: '#FAFAF5', border: '1px solid #E0D8CC' }}
            >
              {/* Número de fondo decorativo */}
              <span
                className="absolute top-4 right-5 font-heading font-semibold text-6xl leading-none pointer-events-none select-none"
                style={{ color: 'rgba(30,58,47,0.05)' }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Icono */}
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 transition-colors duration-300 group-hover:scale-110"
                style={{ background: 'rgba(30,58,47,0.08)', color: '#1E3A2F', transition: 'transform 0.3s ease' }}
              >
                {getIcon(vp.icon)}
              </div>

              {/* Línea dorada */}
              <div className="w-8 h-0.5 mb-4" style={{ background: '#C8A96A' }} aria-hidden="true"/>

              <h3 className="font-heading text-lg font-semibold mb-2" style={{ color: '#1C1C1A' }}>
                {vp.title}
              </h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: '#5C5550' }}>
                {vp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

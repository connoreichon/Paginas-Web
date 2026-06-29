import type { SiteConfig } from '@/types/config.types'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface AboutProps { config: SiteConfig }

export default function About({ config }: AboutProps) {
  const { content: { about } } = config
  const imgRef  = useScrollAnimation<HTMLDivElement>()
  const textRef = useScrollAnimation<HTMLDivElement>()

  return (
    <section id="nosotros" className="py-20 lg:py-28 relative overflow-hidden" style={{ background: '#FAFAF5' }}>

      {/* Línea decorativa horizontal de fondo */}
      <div
        className="absolute top-1/2 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, rgba(200,169,106,0.12), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Columna imagen */}
          <div ref={imgRef} className="reveal-left relative">

            {/* Marco decorativo de fondo */}
            <div
              className="absolute -bottom-6 -right-6 w-full h-full rounded-xl pointer-events-none"
              style={{ border: '1px solid rgba(200,169,106,0.25)' }}
              aria-hidden="true"
            />

            {/* Imagen o placeholder */}
            <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: '3/4' }}>

              {/* Placeholder premium — visible siempre hasta que cargue la foto */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{
                  background: `
                    radial-gradient(ellipse 70% 60% at 30% 80%, rgba(139,99,71,0.3) 0%, transparent 60%),
                    radial-gradient(ellipse 60% 50% at 70% 20%, rgba(200,169,106,0.12) 0%, transparent 55%),
                    linear-gradient(160deg, #0d1f17 0%, #1a3a2f 40%, #0f2318 100%)
                  `,
                }}
                aria-hidden="true"
              >
                {/* SVG ilustración del local */}
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-30">
                  {/* Fachada restaurante */}
                  <rect x="20" y="55" width="80" height="55" stroke="#C8A96A" strokeWidth="1.5" fill="none"/>
                  <path d="M10 55 L60 15 L110 55" stroke="#C8A96A" strokeWidth="1.5" fill="none"/>
                  {/* Puerta */}
                  <rect x="48" y="75" width="24" height="35" rx="12" stroke="#C8A96A" strokeWidth="1.2" fill="none"/>
                  <circle cx="66" cy="93" r="1.5" fill="#C8A96A" opacity="0.6"/>
                  {/* Ventana izq */}
                  <rect x="26" y="65" width="22" height="18" rx="3" stroke="#C8A96A" strokeWidth="1" fill="none" opacity="0.6"/>
                  <line x1="37" y1="65" x2="37" y2="83" stroke="#C8A96A" strokeWidth="0.7" opacity="0.4"/>
                  <line x1="26" y1="74" x2="48" y2="74" stroke="#C8A96A" strokeWidth="0.7" opacity="0.4"/>
                  {/* Ventana dcha */}
                  <rect x="72" y="65" width="22" height="18" rx="3" stroke="#C8A96A" strokeWidth="1" fill="none" opacity="0.6"/>
                  <line x1="83" y1="65" x2="83" y2="83" stroke="#C8A96A" strokeWidth="0.7" opacity="0.4"/>
                  <line x1="72" y1="74" x2="94" y2="74" stroke="#C8A96A" strokeWidth="0.7" opacity="0.4"/>
                  {/* Letrero */}
                  <rect x="35" y="40" width="50" height="12" rx="2" stroke="#C8A96A" strokeWidth="0.8" fill="rgba(200,169,106,0.06)"/>
                </svg>
                <p className="font-body text-xs tracking-[0.18em] uppercase mt-4" style={{ color: 'rgba(200,169,106,0.4)' }}>
                  La Puerta Verde
                </p>
              </div>

              <img
                src={about.image}
                alt={about.imageAlt}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700"
                loading="lazy"
                decoding="async"
                onLoad={e => { e.currentTarget.style.opacity = '1' }}
                onError={e => { e.currentTarget.style.display = 'none' }}
              />
            </div>

            {/* Tarjeta flotante de dato clave */}
            <div
              className="absolute -bottom-4 -right-4 px-5 py-4 rounded-lg shadow-xl"
              style={{ background: '#1E3A2F', border: '1px solid rgba(200,169,106,0.3)' }}
            >
              <div className="font-heading text-3xl font-semibold leading-none" style={{ color: '#C8A96A' }}>
                2019
              </div>
              <div className="font-body text-xs uppercase tracking-wider mt-0.5" style={{ color: 'rgba(244,239,230,0.6)' }}>
                Desde
              </div>
            </div>
          </div>

          {/* Columna texto */}
          <div ref={textRef} className="reveal-right">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex gap-1" aria-hidden="true">
                <span className="w-4 h-px" style={{ background: '#C8A96A' }}/>
                <span className="w-2 h-px" style={{ background: 'rgba(200,169,106,0.4)' }}/>
              </div>
              <span className="font-body text-[11px] font-semibold tracking-[0.22em] uppercase" style={{ color: '#1E3A2F' }}>
                Nuestra historia
              </span>
            </div>

            <h2 className="font-heading font-semibold leading-tight mb-6" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#1C1C1A' }}>
              {about.headline}
            </h2>

            {/* Línea dorada */}
            <div className="flex items-center gap-3 mb-7" aria-hidden="true">
              <div className="h-px w-10" style={{ background: '#C8A96A' }}/>
              <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="2" fill="#C8A96A"/></svg>
            </div>

            <div className="space-y-4 mb-9">
              {about.body.map((para, i) => (
                <p key={i} className="font-body text-base leading-relaxed" style={{ color: '#5C5550' }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Highlights */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {about.highlights.map(h => (
                <li key={h} className="flex items-center gap-3 font-body text-sm" style={{ color: '#1C1C1A' }}>
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(30,58,47,0.1)' }}
                    aria-hidden="true"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10">
                      <path d="M2 5l2.5 2.5L8 3" stroke="#1E3A2F" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
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

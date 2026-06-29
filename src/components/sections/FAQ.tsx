import { useState } from 'react'
import type { SiteConfig } from '@/types/config.types'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface FAQProps { config: SiteConfig }

export default function FAQ({ config }: FAQProps) {
  const { content } = config
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ref = useScrollAnimation<HTMLElement>()

  if (content.faq.length === 0) return null

  const toggle = (i: number) => setOpenIndex(prev => prev === i ? null : i)

  return (
    <section ref={ref} className="reveal py-20 lg:py-28" style={{ background: '#FAFAF5' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-body text-[11px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: '#1E3A2F' }}>
            FAQ
          </p>
          <div className="flex items-center justify-center gap-4 mb-4" aria-hidden="true">
            <div className="h-px w-10" style={{ background: 'linear-gradient(to right, transparent, #C8A96A)' }}/>
            <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="2" fill="#C8A96A"/></svg>
            <div className="h-px w-10" style={{ background: 'linear-gradient(to left, transparent, #C8A96A)' }}/>
          </div>
          <h2 className="font-heading font-semibold text-[#1C1C1A]" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            Preguntas frecuentes
          </h2>
        </div>

        <dl className="space-y-2">
          {content.faq.map((item, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl transition-all duration-200"
              style={{
                background: openIndex === i ? '#FAFAF5' : '#FAFAF5',
                border: openIndex === i ? '1px solid rgba(30,58,47,0.25)' : '1px solid rgba(30,58,47,0.1)',
              }}
            >
              <dt>
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors min-h-[56px] touch-action-manipulation"
                  style={{ background: 'transparent' }}
                >
                  <span className="font-body text-sm font-medium" style={{ color: '#1C1C1A' }}>
                    {item.question}
                  </span>
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      background: openIndex === i ? '#1E3A2F' : 'rgba(30,58,47,0.1)',
                      transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                    aria-hidden="true"
                  >
                    <svg
                      width="12"
                      height="12"
                      fill="none"
                      stroke={openIndex === i ? '#C8A96A' : '#1E3A2F'}
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
              </dt>
              <dd className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
                <p className="font-body text-sm leading-relaxed px-6 pb-5 pt-0" style={{ color: '#5C5550' }}>
                  {item.answer}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

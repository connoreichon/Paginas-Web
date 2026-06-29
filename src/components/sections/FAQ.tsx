import { useState } from 'react'
import type { SiteConfig } from '@/types/config.types'
import SectionTitle from '@/components/ui/SectionTitle'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface FAQProps { config: SiteConfig }

export default function FAQ({ config }: FAQProps) {
  const { content } = config
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ref = useScrollAnimation<HTMLElement>()

  if (content.faq.length === 0) return null

  const toggle = (i: number) => setOpenIndex(prev => prev === i ? null : i)

  return (
    <section ref={ref} className="reveal py-20 lg:py-28 bg-[var(--color-surface)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="FAQ"
          title="Preguntas frecuentes"
          align="center"
        />

        <dl className="space-y-3">
          {content.faq.map((item, i) => (
            <div
              key={i}
              className="border border-[var(--color-border)] rounded-lg overflow-hidden"
            >
              <dt>
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-body text-base font-medium text-[var(--color-ink)] hover:bg-[var(--color-surface-muted)] transition-colors min-h-[56px] touch-action-manipulation"
                >
                  <span>{item.question}</span>
                  <svg
                    className={`w-5 h-5 flex-shrink-0 text-[var(--color-primary)] transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </dt>
              <dd className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
                <p className="font-body text-sm text-[var(--color-ink-muted)] leading-relaxed px-6 pb-5 pt-0">
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

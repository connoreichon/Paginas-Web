interface SectionTitleProps {
  eyebrow?: string
  title:    string
  subtitle?: string
  align?: 'left' | 'center'
  inverted?: boolean
}

export default function SectionTitle({
  eyebrow, title, subtitle, align = 'center', inverted = false,
}: SectionTitleProps) {
  const textAlign = align === 'center' ? 'text-center' : 'text-left'
  const divAlign  = align === 'center' ? 'mx-auto' : ''
  const ink       = inverted ? 'text-[var(--color-ink-inv)]' : 'text-[var(--color-ink)]'
  const inkMuted  = inverted ? 'text-[var(--color-ink-inv)]/70' : 'text-[var(--color-ink-muted)]'

  return (
    <div className={`${textAlign} mb-10 md:mb-14`}>
      {eyebrow && (
        <p className={`font-body text-xs font-semibold uppercase tracking-[0.18em] ${inverted ? 'text-[var(--color-secondary)]' : 'text-[var(--color-primary)]'} mb-3`}>
          {eyebrow}
        </p>
      )}
      <div className={`w-10 h-0.5 bg-[var(--color-secondary)] mb-4 ${divAlign}`} aria-hidden="true" />
      <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-semibold ${ink} leading-tight`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg ${inkMuted} max-w-2xl ${align === 'center' ? 'mx-auto' : ''} leading-relaxed`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

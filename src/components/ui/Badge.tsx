interface BadgeProps {
  label:    string
  variant?: 'primary' | 'gold' | 'muted' | 'dark'
}

export default function Badge({ label, variant = 'primary' }: BadgeProps) {
  const variants = {
    primary: 'bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20',
    gold:    'bg-[var(--color-secondary)]/15 text-[var(--color-accent)] border border-[var(--color-secondary)]/30',
    muted:   'bg-[var(--color-surface-muted)] text-[var(--color-ink-muted)] border border-[var(--color-border)]',
    dark:    'bg-[var(--color-surface-dark)] text-[var(--color-ink-inv)] border border-white/10',
  }

  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-sm text-xs font-body font-semibold tracking-wide ${variants[variant]}`}>
      {label}
    </span>
  )
}

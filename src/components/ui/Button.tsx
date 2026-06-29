import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  external?: boolean
  icon?: ReactNode
}

export default function Button({
  children, variant = 'primary', size = 'md',
  href, onClick, className = '', external, icon,
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 font-body font-medium rounded-sm cursor-pointer transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 whitespace-nowrap touch-action-manipulation'

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-base tracking-wide',
  }

  const variants = {
    primary: 'bg-[var(--color-primary)] text-[var(--color-ink-inv)] hover:bg-[var(--color-primary-dark)] shadow-sm hover:shadow-md active:scale-[0.98]',
    outline: 'border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-ink-inv)] active:scale-[0.98]',
    ghost:   'text-[var(--color-primary)] hover:bg-[var(--color-surface-muted)] active:scale-[0.98]',
    dark:    'bg-[var(--color-ink-inv)] text-[var(--color-primary)] hover:bg-[var(--color-surface-muted)] shadow-sm hover:shadow-md active:scale-[0.98]',
  }

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {icon && <span aria-hidden="true">{icon}</span>}
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={cls}>
      {icon && <span aria-hidden="true">{icon}</span>}
      {children}
    </button>
  )
}

import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary:      'var(--color-primary)',
          'primary-d':  'var(--color-primary-dark)',
          'primary-l':  'var(--color-primary-light)',
          secondary:    'var(--color-secondary)',
          accent:       'var(--color-accent)',
        },
        surface: {
          DEFAULT:  'var(--color-surface)',
          muted:    'var(--color-surface-muted)',
          dark:     'var(--color-surface-dark)',
        },
        ink: {
          DEFAULT:  'var(--color-ink)',
          muted:    'var(--color-ink-muted)',
          inv:      'var(--color-ink-inv)',
        },
        line: 'var(--color-border)',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Georgia', 'serif'],
        body:    ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease-out forwards',
        'fade-in':    'fadeIn 0.5s ease-out forwards',
        'slide-left': 'slideLeft 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%':   { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

export default config

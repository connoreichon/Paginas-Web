import { useState, useEffect } from 'react'
import type { SiteConfig } from '@/types/config.types'
import type { Lang } from '@/App'

interface HeaderProps {
  config:   SiteConfig
  navLinks: { href: string; label: string }[]
  lang:     Lang
  setLang:  (l: Lang) => void
}

export default function Header({ config, navLinks, lang, setLang }: HeaderProps) {
  const { business, content } = config
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = () => setOpen(false)

  // Separar el link de reservar del resto para tratarlo diferente
  const mainLinks   = navLinks.filter(l => l.href !== '#reservar')
  const reserveLink = navLinks.find(l => l.href === '#reservar')

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'shadow-lg'
          : 'bg-transparent'
      }`}
      style={scrolled ? { background: 'rgba(10,22,15,0.97)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(200,169,106,0.15)' } : undefined}
    >
      {/* Línea dorada top — solo cuando no está scrolled */}
      {!scrolled && (
        <div
          className="absolute top-0 left-0 right-0 h-[1px]"
          style={{ background: 'linear-gradient(to right, transparent, rgba(200,169,106,0.4), transparent)' }}
          aria-hidden="true"
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <a href="#" className="flex flex-col leading-none group" aria-label={`${business.name} — inicio`}>
            <span
              className="font-heading text-xl lg:text-2xl font-semibold transition-colors duration-300"
              style={{ color: scrolled ? '#C8A96A' : '#FFFFFF' }}
            >
              {business.name}
            </span>
            <span
              className="font-body text-[9px] tracking-[0.22em] uppercase transition-colors duration-300 mt-0.5"
              style={{ color: scrolled ? 'rgba(200,169,106,0.6)' : 'rgba(255,255,255,0.55)' }}
            >
              {business.tagline}
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Navegación principal">
            {mainLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium transition-colors duration-200 hover:opacity-100"
                style={{ color: scrolled ? 'rgba(244,239,230,0.65)' : 'rgba(255,255,255,0.75)' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#C8A96A' }}
                onMouseLeave={e => { e.currentTarget.style.color = scrolled ? 'rgba(244,239,230,0.65)' : 'rgba(255,255,255,0.75)' }}
              >
                {link.label}
              </a>
            ))}

            {/* Selector de idioma */}
            <LangToggle lang={lang} setLang={setLang} scrolled={scrolled} />

            {/* Botón Reservar — siempre destacado */}
            {reserveLink && (
              <a
                href={reserveLink.href}
                className="font-body text-sm font-semibold px-5 py-2.5 rounded-sm transition-all duration-200 hover:brightness-110 active:scale-[0.97] min-h-[40px] inline-flex items-center"
                style={{
                  background: '#2D5A40',
                  color: '#F4EFE6',
                  border: '1px solid rgba(200,169,106,0.3)',
                  boxShadow: '0 2px 12px rgba(30,58,47,0.4)',
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1.5" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                {reserveLink.label}
              </a>
            )}
          </nav>

          {/* Mobile: idioma + reservar + hamburguesa */}
          <div className="lg:hidden flex items-center gap-2">
            <LangToggle lang={lang} setLang={setLang} scrolled={scrolled} />
            {reserveLink && (
              <a
                href={reserveLink.href}
                className="font-body text-xs font-semibold px-3.5 py-2 rounded-sm inline-flex items-center gap-1"
                style={{ background: '#2D5A40', color: '#F4EFE6', border: '1px solid rgba(200,169,106,0.3)' }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                {reserveLink.label}
              </a>
            )}
            <button
              type="button"
              className="p-2 rounded-md transition-colors"
              style={{ color: scrolled ? 'rgba(244,239,230,0.8)' : 'white' }}
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                {open
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-screen' : 'max-h-0'}`}
        style={{ background: 'rgba(10,22,15,0.98)', borderBottom: open ? '1px solid rgba(200,169,106,0.15)' : 'none' }}
      >
        <nav className="max-w-7xl mx-auto px-4 py-5 flex flex-col gap-1" aria-label="Menú móvil">
          {mainLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNav}
              className="font-body text-base font-medium py-3.5 border-b transition-colors"
              style={{ color: 'rgba(244,239,230,0.7)', borderColor: 'rgba(255,255,255,0.07)' }}
            >
              {link.label}
            </a>
          ))}
          {reserveLink && (
            <div className="pt-5 pb-2">
              <a
                href={reserveLink.href}
                onClick={handleNav}
                className="w-full inline-flex items-center justify-center gap-2 font-body font-semibold text-sm py-4 rounded-sm min-h-[52px]"
                style={{ background: '#2D5A40', color: '#F4EFE6', border: '1px solid rgba(200,169,106,0.3)', boxShadow: '0 4px 20px rgba(30,58,47,0.4)' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                {content.hero.ctaPrimary}
              </a>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

// ─── Language toggle ──────────────────────────────────────────────────────────

interface LangToggleProps {
  lang:     Lang
  setLang:  (l: Lang) => void
  scrolled: boolean
}

function LangToggle({ lang, setLang, scrolled }: LangToggleProps) {
  return (
    <div
      className="flex items-center rounded-full overflow-hidden text-[11px] font-semibold tracking-wider uppercase select-none"
      style={{
        border: scrolled
          ? '1px solid rgba(200,169,106,0.35)'
          : '1px solid rgba(255,255,255,0.25)',
      }}
      role="group"
      aria-label="Idioma / Language"
    >
      {(['es', 'en'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          aria-label={l === 'es' ? 'Español' : 'English'}
          className="px-3 py-1.5 transition-all duration-200 leading-none"
          style={
            lang === l
              ? {
                  background: '#C8A96A',
                  color: '#0d1f17',
                }
              : {
                  background: 'transparent',
                  color: scrolled ? 'rgba(244,239,230,0.5)' : 'rgba(255,255,255,0.5)',
                }
          }
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

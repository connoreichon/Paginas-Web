import { useEffect, useState, useMemo } from 'react'
import { siteConfig } from '@/config/active.config'
import { applySEO } from '@/utils/seo'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import ValueProps from '@/components/sections/ValueProps'
import About from '@/components/sections/About'
import FeaturedItems from '@/components/sections/FeaturedItems'
import Gallery from '@/components/sections/Gallery'
import Reviews from '@/components/sections/Reviews'
import CTASection from '@/components/sections/CTASection'
import Location from '@/components/sections/Location'
import FAQ from '@/components/sections/FAQ'
import Reservation from '@/components/sections/Reservation'
import FloatingWhatsApp from '@/components/sections/FloatingWhatsApp'

export type Lang = 'es' | 'en'

export default function App() {
  const { theme } = siteConfig
  const [lang, setLang] = useState<Lang>('es')

  // Swap content block when locale changes; everything else stays the same
  const activeConfig = useMemo(() => {
    if (lang === 'en' && siteConfig.locales?.en) {
      return { ...siteConfig, content: siteConfig.locales.en }
    }
    return siteConfig
  }, [lang])

  // Apply theme CSS variables from config
  useEffect(() => {
    const root = document.documentElement
    const c = theme.colors
    root.style.setProperty('--color-primary',       c.primary)
    root.style.setProperty('--color-primary-dark',  c.primaryDark)
    root.style.setProperty('--color-primary-light', c.primaryLight)
    root.style.setProperty('--color-secondary',     c.secondary)
    root.style.setProperty('--color-accent',        c.accent)
    root.style.setProperty('--color-surface',       c.surface)
    root.style.setProperty('--color-surface-muted', c.surfaceMuted)
    root.style.setProperty('--color-surface-dark',  c.surfaceDark)
    root.style.setProperty('--color-ink',           c.ink)
    root.style.setProperty('--color-ink-muted',     c.inkMuted)
    root.style.setProperty('--color-ink-inv',       c.inkInv)
    root.style.setProperty('--color-border',        c.border)
    root.style.setProperty('--font-heading',        theme.fontHeading)
    root.style.setProperty('--font-body',           theme.fontBody)

    applySEO(siteConfig)
  }, [theme])

  const navLinks = lang === 'es'
    ? [
        { href: '#nosotros',  label: 'Nosotros' },
        { href: '#carta',     label: siteConfig.business.type === 'restaurant' ? 'Carta' : 'Productos' },
        { href: '#galeria',   label: 'Galería' },
        { href: '#opiniones', label: 'Opiniones' },
        { href: '#reservar',  label: 'Reservar' },
        { href: '#contacto',  label: 'Contacto' },
      ]
    : [
        { href: '#nosotros',  label: 'About' },
        { href: '#carta',     label: siteConfig.business.type === 'restaurant' ? 'Menu' : 'Products' },
        { href: '#galeria',   label: 'Gallery' },
        { href: '#opiniones', label: 'Reviews' },
        { href: '#reservar',  label: 'Book' },
        { href: '#contacto',  label: 'Contact' },
      ]

  return (
    <>
      <Header config={activeConfig} navLinks={navLinks} lang={lang} setLang={setLang} />
      <main>
        <Hero        config={activeConfig} />
        <ValueProps  config={activeConfig} />
        <About       config={activeConfig} />
        <FeaturedItems config={activeConfig} />
        <Gallery     config={activeConfig} />
        <Reviews     config={activeConfig} />
        <Reservation config={activeConfig} lang={lang} />
        <CTASection  config={activeConfig} />
        <Location    config={activeConfig} />
        <FAQ         config={activeConfig} />
      </main>
      <Footer config={activeConfig} navLinks={navLinks} />
      <FloatingWhatsApp config={activeConfig} />
    </>
  )
}

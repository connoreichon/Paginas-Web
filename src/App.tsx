import { useEffect } from 'react'
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

export default function App() {
  const { theme, business } = siteConfig

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

  const navLinks = [
    { href: '#nosotros',  label: 'Nosotros' },
    { href: '#carta',     label: business.type === 'restaurant' ? 'Carta' : 'Productos' },
    { href: '#galeria',   label: 'Galería' },
    { href: '#opiniones', label: 'Opiniones' },
    { href: '#reservar',  label: 'Reservar' },
    { href: '#contacto',  label: 'Contacto' },
  ]

  return (
    <>
      <Header config={siteConfig} navLinks={navLinks} />
      <main>
        <Hero     config={siteConfig} />
        <ValueProps config={siteConfig} />
        <About    config={siteConfig} />
        <FeaturedItems config={siteConfig} />
        <Gallery  config={siteConfig} />
        <Reviews  config={siteConfig} />
        <Reservation config={siteConfig} />
        <CTASection config={siteConfig} />
        <Location config={siteConfig} />
        <FAQ      config={siteConfig} />
      </main>
      <Footer   config={siteConfig} navLinks={navLinks} />
      <FloatingWhatsApp config={siteConfig} />
    </>
  )
}

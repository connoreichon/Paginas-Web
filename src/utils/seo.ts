import type { SiteConfig } from '@/types/config.types'

export function applySEO(config: SiteConfig): void {
  const { seo, business } = config

  document.title = seo.title

  setMeta('description', seo.description)
  setMeta('keywords', seo.keywords.join(', '))

  // Open Graph
  setMeta('og:type',        business.type === 'restaurant' ? 'restaurant' : 'website', 'property')
  setMeta('og:title',       seo.title,       'property')
  setMeta('og:description', seo.description, 'property')
  setMeta('og:locale',      seo.locale,      'property')
  setMeta('og:url',         seo.siteUrl,     'property')
  if (seo.ogImage) setMeta('og:image', seo.siteUrl + seo.ogImage, 'property')

  // Schema.org JSON-LD
  const schemaType = business.type === 'restaurant'
    ? 'Restaurant'
    : business.type === 'retail'
    ? 'Store'
    : 'LocalBusiness'

  const schema = {
    '@context': 'https://schema.org',
    '@type':    schemaType,
    name:       business.name,
    description: business.shortDescription,
    url:        seo.siteUrl,
    telephone:  business.phone,
    email:      business.email,
    address: {
      '@type':          'PostalAddress',
      streetAddress:    business.address,
      addressLocality:  business.city,
      addressCountry:   'ES',
    },
    openingHoursSpecification: business.openingHours
      .filter(h => !h.hours.toLowerCase().includes('cerrado'))
      .map(h => ({ '@type': 'OpeningHoursSpecification', description: `${h.days}: ${h.hours}` })),
    ...(seo.ogImage && { image: seo.siteUrl + seo.ogImage }),
    ...(business.social.instagram && { sameAs: [business.social.instagram] }),
  }

  let ldScript = document.getElementById('ld-json') as HTMLScriptElement | null
  if (!ldScript) {
    ldScript = document.createElement('script')
    ldScript.id   = 'ld-json'
    ldScript.type = 'application/ld+json'
    document.head.appendChild(ldScript)
  }
  ldScript.textContent = JSON.stringify(schema)
}

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name'): void {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

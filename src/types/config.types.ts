// ─── Business Type ────────────────────────────────────────────────────────────

export type BusinessType = 'restaurant' | 'retail' | 'services'

// ─── Theme ────────────────────────────────────────────────────────────────────

export interface ThemeColors {
  primary:      string
  primaryDark:  string
  primaryLight: string
  secondary:    string
  accent:       string
  surface:      string
  surfaceMuted: string
  surfaceDark:  string
  ink:          string
  inkMuted:     string
  inkInv:       string
  border:       string
}

export interface ThemeConfig {
  colors: ThemeColors
  fontHeading: string
  fontBody:    string
}

// ─── Business ─────────────────────────────────────────────────────────────────

export interface OpeningDay {
  days:   string
  hours:  string
  note?:  string
}

export interface SocialLinks {
  instagram?: string
  facebook?:  string
  tripadvisor?: string
  google?:    string
  twitter?:   string
}

export interface BusinessConfig {
  type:             BusinessType
  name:             string
  tagline:          string
  shortDescription: string
  phone:            string
  whatsapp:         string
  whatsappMessage:  string
  email:            string
  address:          string
  city:             string
  googleMapsUrl:    string
  googleMapsEmbed:  string
  openingHours:     OpeningDay[]
  social:           SocialLinks
  logo?:            string
  reservationUrl?:  string
}

// ─── Content ──────────────────────────────────────────────────────────────────

export interface TrustBadge {
  label: string
  value: string
}

export interface HeroContent {
  headline:    string
  subheadline: string
  ctaPrimary:  string
  ctaSecondary: string
  image:       string
  imageAlt:    string
  trustBadges: TrustBadge[]
}

export interface ValueProp {
  icon:        string
  title:       string
  description: string
}

export interface AboutContent {
  headline:    string
  body:        string[]
  image:       string
  imageAlt:    string
  highlights:  string[]
}

export interface CTAContent {
  headline:    string
  subheadline: string
  ctaWhatsapp: string
  ctaCall:     string
  ctaMaps:     string
}

export interface FAQItem {
  question: string
  answer:   string
}

export interface ReservationConfig {
  enabled:           boolean
  headline:          string
  subheadline?:      string
  confirmationNote?: string
  timeSlots:         string[]
  maxPartySize:      number
}

export interface ContentConfig {
  hero:         HeroContent
  valueProps:   ValueProp[]
  about:        AboutContent
  cta:          CTAContent
  faq:          FAQItem[]
  itemsTitle:    string
  itemsSubtitle: string
  reservation?:  ReservationConfig
}

// ─── Items (menu / products / services) ──────────────────────────────────────

export interface CatalogItem {
  id:          string
  name:        string
  description?: string
  price?:      string
  tags?:       string[]
  badge?:      string
  image?:      string
  highlight?:  boolean
}

export interface CatalogCategory {
  id:          string
  name:        string
  description?: string
  items:       CatalogItem[]
}

export interface ItemsConfig {
  categories: CatalogCategory[]
}

// ─── Gallery ──────────────────────────────────────────────────────────────────

export interface GalleryImage {
  src:    string
  alt:    string
  caption?: string
}

export interface GalleryConfig {
  images: GalleryImage[]
}

// ─── Reviews ──────────────────────────────────────────────────────────────────

export interface Review {
  id:        string
  author:    string
  rating:    number
  text:      string
  date?:     string
  platform?: 'google' | 'tripadvisor' | 'facebook' | 'directo'
  avatar?:   string
}

export interface ReviewsConfig {
  averageRating: number
  totalReviews:  number
  reviews:       Review[]
}

// ─── SEO ──────────────────────────────────────────────────────────────────────

export interface SEOConfig {
  title:       string
  description: string
  keywords:    string[]
  ogImage?:    string
  locale:      string
  siteUrl:     string
}

// ─── Root config ──────────────────────────────────────────────────────────────

export interface SiteConfig {
  business: BusinessConfig
  theme:    ThemeConfig
  content:  ContentConfig
  items:    ItemsConfig
  gallery:  GalleryConfig
  reviews:  ReviewsConfig
  seo:      SEOConfig
  locales?: {
    en?: ContentConfig
  }
}

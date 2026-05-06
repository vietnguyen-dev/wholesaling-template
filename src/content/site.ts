import { testTemplate } from '@keith-chen/lead-gen-content'

type TemplateKey = keyof typeof testTemplate

const DEFAULT_DOMAIN = 'portlandpropertybuyers.com'

const siteMetaByTemplate: Record<TemplateKey, { brandName: string; market: string }> = {
  buymyhousepdx: {
    brandName: 'Buy My House PDX',
    market: 'Portland, Oregon',
  },
  portlandpropertybuyers: {
    brandName: 'Portland Property Buyers',
    market: 'Portland, Oregon',
  },
}

function normalizeDomainToTemplateKey(domain: string): TemplateKey | null {
  const normalized = domain
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .split('/')[0]
    .replace(/\.[a-z0-9-]+$/, '')
    .replace(/[^a-z0-9]/g, '')

  return normalized in testTemplate ? (normalized as TemplateKey) : null
}

const rawDomain = import.meta.env.VITE_SITE_DOMAIN || DEFAULT_DOMAIN
const templateKey = normalizeDomainToTemplateKey(rawDomain)

if (!templateKey) {
  throw new Error(
    `Unsupported VITE_SITE_DOMAIN "${rawDomain}". Supported domains: ${Object.keys(siteMetaByTemplate)
      .map((key) => `${key}.com`)
      .join(', ')}`,
  )
}

const site = testTemplate[templateKey]

export const siteMeta = siteMetaByTemplate[templateKey]

export const homeContent = site.home
export const aboutContent = site.about
export const contactContent = site.contact
export const faqContent = site.faq
export const getOfferContent = site.getOffer

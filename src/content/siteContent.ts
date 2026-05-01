import { testTemplate, type iHome } from '@keith-chen/lead-gen-content'

const site = testTemplate.portlandpropertybuyers

export const siteContent = {
  brandName: 'Portland Property Buyers',
  market: 'Portland, Oregon',
  home: site.home satisfies iHome,
  about: site.about,
  contact: site.contact,
}

export type SiteContent = typeof siteContent

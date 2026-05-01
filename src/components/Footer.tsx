import { siteContent } from '../content/siteContent'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 border-t border-[var(--line)] px-4 pb-14 pt-10 text-[var(--sea-ink-soft)]">
      <div className="page-wrap flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="m-0 text-sm">
          &copy; {year} {siteContent.brandName}. All rights reserved.
        </p>
        <p className="island-kicker m-0">{siteContent.market} Home Buyer Lead Page</p>
      </div>
      <div className="mt-4 flex justify-center gap-4 text-sm sm:justify-start">
        <a
          href="tel:5035550182"
          className="rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-4 py-2 text-[var(--sea-ink-soft)] no-underline transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
        >
          (503) 555-0182
        </a>
        <a
          href="mailto:info@portlandpropertybuyers.com"
          className="rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-4 py-2 text-[var(--sea-ink-soft)] no-underline transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
        >
          info@portlandpropertybuyers.com
        </a>
      </div>
    </footer>
  )
}

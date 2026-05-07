import { Link } from '@tanstack/react-router'
import { siteMeta } from '../content/site'

export default function Footer() {
  const year = new Date().getFullYear()
  const footerLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact', to: '/contact' },
    { label: 'Get Offer', to: '/get-offer' },
  ] as const

  return (
    <footer className="border-t border-[var(--line)] px-4 pb-14 pt-12 text-[var(--sea-ink-soft)]">
      <div className="page-wrap grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-start">
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-sm text-black no-underline"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-[0.9rem] border border-[rgba(255,255,255,0.18)] bg-[var(--hero-a)] text-white">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-none stroke-current stroke-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 10.5 12 3.75l8.25 6.75v9a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75V15a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1-.75-.75v-9Z"
                />
              </svg>
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[1.1rem] font-extrabold tracking-tight">
                {siteMeta.brandName}
              </span>
            </span>
          </Link>
          <p className="mt-3 max-w-xl text-sm leading-7">
            {siteMeta.market}
          </p>
          <p className="mt-4 text-sm">&copy; {year} {siteMeta.brandName}. All rights reserved.</p>
        </div>

        <div>
          <h2 className="m-0 text-sm font-extrabold uppercase tracking-[0.08em] text-black">
            Pages
          </h2>
          <ul className="mt-4 flex flex-col gap-3 p-0 text-sm sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-3">
            {footerLinks.map((link) => (
              <li key={link.to} className="list-none">
                <Link to={link.to} className="text-[var(--sea-ink-soft)] no-underline hover:text-black">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

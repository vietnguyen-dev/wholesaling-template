import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { siteMeta } from '../content/site'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] px-4 backdrop-blur">
      <nav
        className="page-wrap relative py-3 sm:py-4 lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-8"
        aria-label="Primary"
      >
        <div className="flex items-center justify-between gap-4 lg:contents">
          <h2 className="m-0 flex-shrink-0 text-base font-semibold tracking-tight">
            <Link
              to="/"
              onClick={closeMenu}
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
          </h2>

          <button
            type="button"
            className="relative z-30 inline-flex h-12 w-12 items-center justify-center rounded-none border border-[var(--line)] bg-white text-black shadow-[0_12px_30px_rgba(15,23,42,0.12)] lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative h-5 w-5">
              <span
                className={`absolute top-0 left-0 h-0.5 w-5 rounded-full bg-current transition ${
                  isMenuOpen ? 'translate-y-[9px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute top-[9px] left-0 h-0.5 w-5 rounded-full bg-current transition ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`absolute top-[18px] left-0 h-0.5 w-5 rounded-full bg-current transition ${
                  isMenuOpen ? '-translate-y-[9px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>

        <div className="hidden lg:flex lg:items-center lg:justify-center">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[0.98rem] font-semibold text-black">
            <Link to="/" className="nav-link" activeProps={{ className: 'nav-link is-active' }}>
              Home
            </Link>
            <Link
              to="/about"
              className="nav-link"
              activeProps={{ className: 'nav-link is-active' }}
            >
              About
            </Link>
            <Link to="/faq" className="nav-link" activeProps={{ className: 'nav-link is-active' }}>
              FAQ
            </Link>
            <Link
              to="/contact"
              className="nav-link"
              activeProps={{ className: 'nav-link is-active' }}
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex lg:justify-end">
          <Link
            to="/get-offer"
            className="inline-flex min-h-14 min-w-[11rem] items-center justify-center rounded-md bg-[#16a34a] px-8 py-4 text-[1rem] font-extrabold uppercase tracking-[0.03em] !text-white no-underline transition hover:bg-[#15803d] hover:!text-white"
            activeProps={{
              className:
                'inline-flex min-h-14 min-w-[11rem] items-center justify-center rounded-md bg-[#16a34a] px-8 py-4 text-[1rem] font-extrabold uppercase tracking-[0.03em] !text-white no-underline transition hover:bg-[#15803d] hover:!text-white',
            }}
          >
            Get Offer
          </Link>
        </div>

        {isMenuOpen ? (
          <div
            id="mobile-nav-menu"
            className="absolute top-full right-0 left-0 z-20 mt-2 rounded-none bg-[var(--hero-b)] p-3 text-white shadow-[0_18px_40px_rgba(15,23,42,0.24)] lg:hidden"
          >
            <div className="space-y-2 text-[1rem] font-semibold">
              <Link
                to="/"
                onClick={closeMenu}
                className="nav-link-mobile"
                activeProps={{ className: 'nav-link-mobile is-active' }}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={closeMenu}
                className="nav-link-mobile"
                activeProps={{ className: 'nav-link-mobile is-active' }}
              >
                About
              </Link>
              <Link
                to="/faq"
                onClick={closeMenu}
                className="nav-link-mobile"
                activeProps={{ className: 'nav-link-mobile is-active' }}
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="nav-link-mobile"
                activeProps={{ className: 'nav-link-mobile is-active' }}
              >
                Contact
              </Link>
            </div>

            <Link
              to="/get-offer"
              onClick={closeMenu}
              className="mt-3 inline-flex min-h-14 w-full items-center justify-center rounded-md bg-[#16a34a] px-8 py-4 text-[1rem] font-extrabold uppercase tracking-[0.03em] !text-white no-underline transition hover:bg-[#15803d] hover:!text-white"
              activeProps={{
                className:
                  'mt-3 inline-flex min-h-14 w-full items-center justify-center rounded-md bg-[#16a34a] px-8 py-4 text-[1rem] font-extrabold uppercase tracking-[0.03em] !text-white no-underline transition hover:bg-[#15803d] hover:!text-white',
              }}
            >
              Get Offer
            </Link>
          </div>
        ) : null}
      </nav>
    </header>
  )
}

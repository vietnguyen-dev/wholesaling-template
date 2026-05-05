import { Link } from '@tanstack/react-router'
import { siteMeta } from '../content/site'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-white/95 px-4 backdrop-blur">
      <nav className="page-wrap flex flex-col gap-4 py-3 sm:py-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
        <h2 className="m-0 flex-shrink-0 text-base font-semibold tracking-tight">
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-sm text-black no-underline"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-[0.9rem] border border-[var(--chip-line)] bg-[#eff6ff] text-[0.95rem] font-extrabold text-[var(--lagoon-deep)]">
              PP
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[1.1rem] font-extrabold tracking-tight">
                {siteMeta.brandName}
              </span>
              <span className="mt-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[var(--kicker)]">
                Property Buyers
              </span>
            </span>
          </Link>
        </h2>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
          <div className="order-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.98rem] font-semibold text-black lg:order-1 lg:justify-center">
            <Link
              to="/"
              className="nav-link"
              activeProps={{ className: 'nav-link is-active' }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="nav-link"
              activeProps={{ className: 'nav-link is-active' }}
            >
              About
            </Link>
            <Link
              to="/faq"
              className="nav-link"
              activeProps={{ className: 'nav-link is-active' }}
            >
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

          <Link
            to="/get-offer"
            className="order-1 inline-flex items-center justify-center rounded-[0.8rem] bg-[#1d4ed8] px-5 py-3 text-[0.92rem] font-extrabold uppercase tracking-[0.03em] !text-white no-underline transition hover:bg-[#1e40af] hover:!text-white lg:order-2"
            activeProps={{
              className:
                'order-1 inline-flex items-center justify-center rounded-[0.8rem] bg-[#1d4ed8] px-5 py-3 text-[0.92rem] font-extrabold uppercase tracking-[0.03em] !text-white no-underline transition hover:bg-[#1e40af] hover:!text-white lg:order-2',
            }}
          >
            Get Offer
          </Link>
        </div>
      </nav>
    </header>
  )
}

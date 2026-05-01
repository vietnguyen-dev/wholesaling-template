import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarClock,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  HandCoins,
  House,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react'
import { siteContent } from '../content/siteContent'

const { home, contact, brandName, market } = siteContent

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      {
        title: home.seoTitle,
      },
      {
        name: 'description',
        content: home.seoDescription,
      },
    ],
  }),
  component: App,
})

function App() {
  const pageWrap = 'mx-auto w-[min(1080px,calc(100%-2rem))]'
  const serifTitle = `font-['Fraunces']`
  const eyebrow =
    'mb-4 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[var(--kicker)]'
  const glassPanel =
    'rounded-md border border-[var(--line)] bg-white shadow-[0_1px_0_var(--inset-glint)_inset,0_14px_30px_rgba(20,62,117,0.05),0_4px_10px_rgba(15,37,63,0.04)]'
  const softPanel =
    'rounded-md border border-[var(--line)] bg-white shadow-[0_1px_0_var(--inset-glint)_inset,0_12px_24px_rgba(20,62,117,0.05),0_4px_10px_rgba(15,37,63,0.04)]'
  const chipClass =
    'inline-flex items-center gap-2 rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-4 py-3 text-[0.92rem] font-semibold text-black'
  const primaryCta =
    'inline-flex items-center gap-[0.55rem] rounded-full border border-[rgba(28,91,189,0.22)] bg-[linear-gradient(135deg,#1d4ed8,#2563eb)] px-6 py-4 text-[0.98rem] leading-none font-extrabold !text-white no-underline shadow-[0_16px_30px_rgba(37,99,235,0.22)] transition hover:-translate-y-0.5 hover:!text-white'
  const secondaryCta =
    'inline-flex items-center gap-[0.55rem] rounded-full border border-[rgba(29,78,216,0.18)] bg-white px-6 py-4 text-[0.98rem] leading-none font-bold text-black no-underline transition hover:-translate-y-0.5 hover:text-black'
  const iconPill =
    'inline-flex h-10 w-10 items-center justify-center rounded-md border border-[rgba(29,78,216,0.14)] bg-[rgba(37,99,235,0.08)] text-[var(--lagoon-deep)]'
  const fieldClass =
    'w-full rounded-sm border border-[color-mix(in_oklab,var(--line)_100%,white_0%)] bg-white px-4 py-4 text-black outline-none transition placeholder:text-[color-mix(in_oklab,var(--sea-ink-soft)_82%,white_18%)] focus:border-[rgba(37,99,235,0.45)] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.12)]'
  const rowCard =
    'flex items-start gap-4 rounded-sm border border-[var(--line)] bg-white px-5 py-4'

  const trustPoints = [
    {
      icon: House,
      label: 'Sell the property as it sits',
      detail:
        'You can request an offer before spending money on repairs, paint, cleanup, or showings.',
    },
    {
      icon: Clock3,
      label: 'Get a clear answer quickly',
      detail:
        'Share the address and timeline, and a local buyer team can review whether the home is a fit.',
    },
    {
      icon: CalendarClock,
      label: 'Pick a closing timeline that works',
      detail:
        'This is useful if you are moving, handling probate, managing tenants, or trying to avoid a long listing process.',
    },
  ]

  const situationTags = [
    'Inherited Property',
    'Major Repairs',
    'Landlord Fatigue',
    'Vacant House',
    'Probate',
    'Foreclosure Pressure',
    'Relocation',
    'Problem Tenants',
  ]

  const contactDetailMap = {
    Phone,
    Email: Mail,
    'Service Area': MapPin,
  } as const

  return (
    <main className={`${pageWrap} px-4 pb-20 pt-12 sm:pt-16`}>
      <section className="relative overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-[0_1px_0_var(--inset-glint)_inset,0_16px_32px_rgba(20,62,117,0.06),0_4px_12px_rgba(15,37,63,0.04)]">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08),transparent_58%)] lg:block" />
        <div className="grid gap-10 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,1.1fr)_420px] lg:gap-12 lg:px-12 lg:py-14">
          <div className="relative z-10">
            <p className={eyebrow}>{market} Cash Buyer Network</p>
            <h1 className={`${serifTitle} max-w-3xl text-4xl leading-[0.98] font-bold tracking-tight text-black sm:text-6xl`}>
              {home.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-black">
              {home.hero.subTitle}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-black">
              If you need a practical way to sell a house without fixing it up
              or putting it on the market, this page is built for that. You
              share the basics, we review the property, and you decide whether a
              direct cash offer is worth pursuing.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {home.hero.badges.map((badge) => (
                <span key={badge} className={chipClass}>
                  <BadgeCheck size={16} />
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#offer-form" className={primaryCta}>
                {home.hero.primaryCTA}
                <ArrowRight size={18} />
              </a>
              <a href="#how-it-works" className={secondaryCta}>
                See How It Works
              </a>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {trustPoints.map(({ icon: Icon, label, detail }) => (
                <article key={label} className={`${softPanel} p-5`}>
                  <span className={iconPill}>
                    <Icon size={18} />
                  </span>
                  <h2 className="mt-4 text-base font-semibold text-black">
                    {label}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-black">
                    {detail}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside
            id="offer-form"
            className="relative self-start rounded-md border border-[var(--line)] bg-white p-6 shadow-[0_1px_0_var(--inset-glint)_inset,0_14px_28px_rgba(20,62,117,0.06),0_4px_10px_rgba(15,37,63,0.04)] sm:p-7"
          >
            <p className={eyebrow}>No-Obligation Property Review</p>
            <h2 className="text-2xl font-bold tracking-tight text-black">
              {home.hero.formHeading}
            </h2>
            <p className="mt-3 text-base leading-7 text-black">
              Share the address, your timeline, and the best way to contact you.
              There is no commitment. This simply starts the review.
            </p>

            <form className="mt-6 space-y-4">
              <label className="grid gap-2">
                <span className="text-[0.84rem] font-bold text-black">
                  Property address
                </span>
                <input
                  type="text"
                  placeholder="1234 SE Example St, Portland, OR"
                  className={fieldClass}
                />
              </label>
              <label className="grid gap-2">
                <span className="text-[0.84rem] font-bold text-black">
                  Property condition
                </span>
                <select defaultValue="" className={fieldClass}>
                  <option value="" disabled>
                    Select condition
                  </option>
                  <option>Move-in ready</option>
                  <option>Needs light updates</option>
                  <option>Needs major repairs</option>
                  <option>Vacant or distressed</option>
                </select>
              </label>
              <label className="grid gap-2">
                <span className="text-[0.84rem] font-bold text-black">
                  When do you want to sell?
                </span>
                <select defaultValue="" className={fieldClass}>
                  <option value="" disabled>
                    Select timeline
                  </option>
                  <option>ASAP</option>
                  <option>Within 30 days</option>
                  <option>1-3 months</option>
                  <option>Just exploring options</option>
                </select>
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-[0.84rem] font-bold text-black">
                    Your name
                  </span>
                  <input type="text" placeholder="Full name" className={fieldClass} />
                </label>
                <label className="grid gap-2">
                  <span className="text-[0.84rem] font-bold text-black">
                    Phone number
                  </span>
                  <input
                    type="tel"
                    placeholder="(503) 555-0182"
                    className={fieldClass}
                  />
                </label>
              </div>
              <label className="grid gap-2">
                <span className="text-[0.84rem] font-bold text-black">
                  Email address
                </span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className={fieldClass}
                />
              </label>

              <button
                type="submit"
                className={`${primaryCta} w-full justify-center border-0`}
              >
                {home.hero.formButton}
              </button>
            </form>

            <div className="mt-5 space-y-3 text-sm leading-6 text-black">
              <p className="m-0 flex items-center gap-2">
                <ShieldCheck size={16} className="text-[var(--palm)]" />
                Your information stays private and only starts a conversation.
              </p>
              <p className="m-0 flex items-center gap-2">
                <Phone size={16} className="text-[var(--palm)]" />
                Prefer to talk now? {contact.details.details[0]?.value}
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {situationTags.map((tag, index) => (
          <article
            key={tag}
            className={`${glassPanel} rounded-sm px-5 py-4 hover:-translate-y-0.5`}
            style={{ animationDelay: `${index * 60 + 140}ms` }}
          >
            <p className="m-0 text-sm font-semibold text-black">{tag}</p>
          </article>
        ))}
      </section>

      <section
        id="how-it-works"
        className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
      >
        <div className={`${glassPanel} p-6 sm:p-8`}>
          <p className={eyebrow}>How It Works</p>
          <h2 className={`${serifTitle} text-3xl leading-tight font-bold text-black sm:text-4xl`}>
            {home.steps.title}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-black">
            The process is straightforward. You submit the property details,
            review whether there is real buyer interest, and then choose if you
            want to move forward.
          </p>
          <a href="#offer-form" className={`${secondaryCta} mt-6`}>
            {home.steps.formButton}
          </a>
        </div>

        <div className="grid gap-4">
          {home.steps.steps.map((step, index) => (
            <article
              key={step.stepTitle}
              className={`${softPanel} p-6 sm:p-7`}
              style={{ animationDelay: `${index * 90 + 180}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-full border border-[color-mix(in_oklab,var(--lagoon-deep)_24%,var(--line))] bg-[color-mix(in_oklab,var(--lagoon)_14%,white_86%)] text-base font-extrabold text-[var(--palm)]">
                  {index + 1}
                </div>
                <div>
                  <h3 className="m-0 text-lg font-semibold text-black">
                    {step.stepTitle}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-black">
                    {step.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <article className={`${glassPanel} p-6 sm:p-8`}>
          <p className={eyebrow}>Why Sellers Reach Out</p>
          <h2 className={`${serifTitle} text-3xl leading-tight font-bold text-black sm:text-4xl`}>
            {home.reasons.title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-black">
            {home.reasons.description}
          </p>

          <div className="mt-8 grid gap-4">
            {home.reasons.reasons.map((reason) => (
              <div key={reason} className={rowCard}>
                <CheckCircle2 size={18} className="mt-1 flex-none text-[var(--palm)]" />
                <p className="m-0 text-base leading-7 text-black">{reason}</p>
              </div>
            ))}
          </div>

          <a href="#offer-form" className={`${primaryCta} mt-6`}>
            {home.reasons.formButton}
          </a>
        </article>

        <article className={`${glassPanel} p-6 sm:p-8`}>
          <p className={eyebrow}>What Makes This Useful</p>
          <h2 className="text-2xl font-bold tracking-tight text-black">
            A direct sale can be the better option when speed and simplicity matter.
          </h2>

          <div className="mt-8 grid gap-4">
            {[
              {
                icon: CircleDollarSign,
                title: 'You can avoid upfront listing work',
                detail:
                  'Many sellers want to know whether a direct buyer exists before paying for repairs, cleaning, or prep.',
              },
              {
                icon: HandCoins,
                title: 'The process stays simple',
                detail:
                  'You share the property information once, then review whether an investor offer makes sense for your situation.',
              },
              {
                icon: Building2,
                title: 'It is built for local homeowners',
                detail: `The page speaks to real sellers in ${market} who want a practical next step instead of generic real estate language.`,
              },
            ].map(({ icon: Icon, title, detail }) => (
              <div key={title} className={rowCard}>
                <span className={iconPill}>
                  <Icon size={18} />
                </span>
                <div>
                  <h3 className="m-0 text-base font-semibold text-black">
                    {title}
                  </h3>
                  <p className="mt-1 text-base leading-7 text-black">
                    {detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className={`${glassPanel} p-6 sm:p-8`}>
          <p className={eyebrow}>Frequently Asked Questions</p>
          {home.FAQ.map((group) => (
            <div key={group.title}>
              <h2 className={`${serifTitle} text-3xl leading-tight font-bold text-black sm:text-4xl`}>
                {group.title}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-black">
                {group.description}
              </p>
              <div className="mt-8 grid gap-4">
                {group.faq.map((item) => (
                  <article
                    key={item.question}
                    className="rounded-sm border border-[var(--line)] bg-white p-6"
                  >
                    <h3 className="m-0 text-base font-semibold text-black">
                      {item.question}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black">
                      {item.answer}
                    </p>
                  </article>
                ))}
              </div>
              <a href="#offer-form" className={`${secondaryCta} mt-6`}>
                {group.formButton}
              </a>
            </div>
          ))}
        </div>

        <aside className={`${glassPanel} p-6 sm:p-8`}>
          <p className={eyebrow}>Reach Our Team</p>
          <h2 className="text-2xl font-bold tracking-tight text-black">
            Talk with {brandName}
          </h2>
          <p className="mt-4 text-base leading-7 text-black">
            {contact.details.description}
          </p>

          <div className="mt-7 grid gap-4">
            {contact.details.details.map((item) => {
              const Icon =
                contactDetailMap[item.label as keyof typeof contactDetailMap] ?? MapPin

              return (
                <div key={item.label} className={rowCard}>
                  <span className={iconPill}>
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="m-0 text-xs font-semibold tracking-[0.14em] text-[var(--kicker)] uppercase">
                      {item.label}
                    </p>
                    <p className="mt-1 text-base leading-7 text-black">
                      {item.value}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </aside>
      </section>

      <section className="mt-16 rounded-md border border-[var(--line)] bg-white px-6 py-10 shadow-[0_14px_28px_rgba(20,62,117,0.06),0_4px_10px_rgba(15,37,63,0.04)] sm:px-8 sm:py-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className={eyebrow}>Ready To Take The Next Step?</p>
            <h2 className={`${serifTitle} text-3xl leading-tight font-bold text-black sm:text-5xl`}>
              {home.CTA.heading}
            </h2>
            <p className="mt-5 text-lg leading-8 text-black">
              If you want to see whether a direct buyer is a realistic option,
              send the property details and start there.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#offer-form"
              className="inline-flex items-center gap-[0.55rem] rounded-full border border-[rgba(28,91,189,0.22)] bg-[linear-gradient(135deg,#1d4ed8,#2563eb)] px-5 py-[0.95rem] text-[0.95rem] leading-none font-extrabold !text-white no-underline transition hover:-translate-y-0.5 hover:!text-white"
            >
              {home.CTA.primaryCta}
              <ArrowRight size={18} />
            </a>
            <a
              href="tel:5035550182"
              className="inline-flex items-center gap-[0.55rem] rounded-full border border-[rgba(29,78,216,0.18)] bg-white px-5 py-[0.95rem] text-[0.95rem] leading-none font-extrabold text-black no-underline transition hover:-translate-y-0.5 hover:text-black"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

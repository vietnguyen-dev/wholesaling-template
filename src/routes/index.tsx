import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { contactContent, homeContent } from '../content/site'

const home = homeContent
const contact = contactContent

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
  const pageWrap =
    'mx-auto w-[min(1100px,calc(100%-1.5rem))] sm:w-[min(1100px,calc(100%-2rem))]'
  const serifTitle = `font-['Fraunces']`
  const eyebrow =
    'mb-3 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[var(--kicker)]'
  const primaryCta =
    'inline-flex items-center justify-center gap-2 rounded-md bg-[#2563eb] px-6 py-3 text-[0.92rem] font-bold text-white no-underline transition hover:bg-[#1d4ed8] hover:text-white'
  const secondaryCta =
    'inline-flex items-center justify-center rounded-md border border-[var(--line)] bg-white px-6 py-3 text-[0.92rem] font-semibold text-black no-underline transition hover:bg-[#f8fbff] hover:text-black'
  const fieldClass =
    'w-full rounded-md border border-[var(--line)] bg-white px-4 py-3 text-black outline-none transition focus:border-[rgba(37,99,235,0.45)] focus:shadow-[0_0_0_3px_rgba(37,99,235,0.10)]'
  const sectionShell = `${pageWrap} px-2 py-12 sm:px-4 sm:py-14 lg:py-16`
  const sectionTitle = `${serifTitle} text-[1.9rem] leading-tight font-bold text-black sm:text-[2.2rem]`

  return (
    <main className="pb-24 pt-6 sm:pt-8 lg:pb-28 lg:pt-12">
      <section className="bg-white">
        <div className={sectionShell}>
          <div className="max-w-3xl">
            <p className={eyebrow}>{home.CTA.formHeading}</p>
            <h1
              className={`${serifTitle} text-[2.2rem] leading-[1.02] font-bold text-black sm:text-[3rem] lg:text-[3.8rem]`}
            >
              {home.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-[1rem] leading-8 text-black">
              {home.hero.subTitle}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#offer-form" className={primaryCta}>
                {home.hero.primaryCTA}
                <ArrowRight size={18} />
              </a>
              <a href="#how-it-works" className={secondaryCta}>
                {home.steps.formButton}
              </a>
            </div>
          </div>

          <div
            id="offer-form"
            className="mt-12 max-w-[34rem] rounded-md bg-[#f7f9fc] p-6 sm:p-8"
          >
            <p className={eyebrow}>{home.CTA.formHeading}</p>
            <h2 className="text-[1.5rem] font-bold text-black sm:text-[1.7rem]">
              {home.hero.formHeading}
            </h2>
            <p className="mt-4 text-[0.98rem] leading-7 text-black">
              {home.hero.formSubHeading}
            </p>

            <form className="mt-7 space-y-4">
              <input
                type="text"
                className={fieldClass}
                aria-label="Property address"
              />
              <input
                type="text"
                className={fieldClass}
                aria-label="Property details"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <input type="text" className={fieldClass} aria-label="Name" />
                <input type="tel" className={fieldClass} aria-label="Phone" />
              </div>
              <input type="email" className={fieldClass} aria-label="Email" />

              <button type="submit" className={`${primaryCta} w-full border-0`}>
                {home.hero.formButton}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-[#eef5ff]">
        <div className={sectionShell}>
          <div className="max-w-2xl">
            <p className={eyebrow}>{home.offerButton}</p>
            <h2 className={sectionTitle}>{home.reasons.title}</h2>
            <p className="mt-6 text-[1rem] leading-8 text-black">
              {home.reasons.description}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {home.reasons.reasons.map((reason) => (
              <div key={reason} className="rounded-md bg-white p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-1 flex-none text-[var(--palm)]"
                  />
                  <p className="m-0 text-[0.98rem] leading-7 text-black">
                    {reason}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a href="#offer-form" className={`${primaryCta} mt-10`}>
            {home.reasons.formButton}
          </a>
        </div>
      </section>

      <section id="how-it-works" className="bg-white">
        <div className={sectionShell}>
          <div className="max-w-2xl">
            <p className={eyebrow}>{home.offerButton}</p>
            <h2 className={sectionTitle}>{home.steps.title}</h2>
            <p className="mt-6 text-[1rem] leading-8 text-black">
              {home.reasons.description}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {home.steps.steps.map((step, index) => (
              <article
                key={step.stepTitle}
                className="rounded-md bg-[#f7f9fc] p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#dbeafe] text-[0.95rem] font-bold text-[var(--palm)]">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="m-0 text-[1rem] font-semibold text-black">
                      {step.stepTitle}
                    </h3>
                    <p className="mt-3 text-[0.98rem] leading-7 text-black">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <a href="#offer-form" className={`${secondaryCta} mt-10`}>
            {home.steps.formButton}
          </a>
        </div>
      </section>

      <section className="bg-[#eef5ff]">
        <div className={sectionShell}>
          {home.FAQ.map((group) => (
            <article key={group.title} className="max-w-3xl">
              <p className={eyebrow}>{group.title}</p>
              <h2 className={sectionTitle}>{group.title}</h2>
              <p className="mt-6 text-[1rem] leading-8 text-black">
                {group.description}
              </p>

              <div className="mt-10 space-y-4">
                {group.faq.map((item) => (
                  <article
                    key={item.question}
                    className="rounded-md bg-white p-5"
                  >
                    <h3 className="m-0 text-[1rem] font-semibold text-black">
                      {item.question}
                    </h3>
                    <p className="mt-3 text-[0.98rem] leading-7 text-black">
                      {item.answer}
                    </p>
                  </article>
                ))}
              </div>

              <a href="#offer-form" className={`${secondaryCta} mt-10`}>
                {group.formButton}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className={sectionShell}>
          <div className="max-w-2xl">
            <p className={eyebrow}>{home.CTA.formHeading}</p>
            <h2 className={sectionTitle}>{home.CTA.heading}</h2>
            <p className="mt-6 text-[1rem] leading-8 text-black">
              {home.CTA.subHeading}
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <a href="#offer-form" className={primaryCta}>
                {home.CTA.primaryCta}
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef5ff]">
        <div className={sectionShell}>
          <div className="max-w-2xl">
            <p className={eyebrow}>{contact.details.title}</p>
            <h2 className={sectionTitle}>{contact.hero.title}</h2>
            <p className="mt-6 text-[0.98rem] leading-8 text-black">
              {contact.details.description}
            </p>
          </div>

          <div className="mt-10 max-w-[34rem] rounded-md bg-white p-6 sm:p-8">
            <p className={eyebrow}>{home.CTA.formHeading}</p>
            <h2
              className={`${serifTitle} text-[1.9rem] leading-tight font-bold text-black sm:text-[2.1rem]`}
            >
              {home.CTA.heading}
            </h2>
            <p className="mt-5 text-[0.98rem] leading-7 text-black">
              {home.CTA.subHeading}
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <a href="#offer-form" className={primaryCta}>
                {home.CTA.primaryCta}
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

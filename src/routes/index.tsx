import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import LeadForm from '../components/LeadForm'
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
    'mx-auto w-[min(1200px,calc(100%-1.5rem))] sm:w-[min(1200px,calc(100%-2rem))]'
  const serifTitle = `font-['Fraunces']`
  const eyebrow =
    'mb-3 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[var(--kicker)]'
  const primaryCta =
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#1d4ed8] px-6 py-3.5 text-[0.92rem] font-bold !text-white no-underline transition hover:bg-[#1e40af] hover:!text-white'
  const secondaryCta =
    'inline-flex min-h-12 items-center justify-center rounded-md border border-[var(--line)] bg-white px-6 py-3.5 text-[0.92rem] font-semibold text-black no-underline transition hover:bg-[#f8fbff] hover:text-black'
  const sectionShell = `${pageWrap} px-2 py-14 sm:px-4 sm:py-16`
  const sectionTitle = `${serifTitle} text-[2rem] leading-tight font-bold text-black sm:text-[2.5rem]`
  const cardClass = 'rounded-2xl border border-[var(--line)] bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.04)]'

  return (
    <main className="pb-20 pt-4 sm:pt-6">
      <section className="bg-[var(--hero-a)]">
        <div className={`${sectionShell} pt-8 sm:pt-10`}>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,26rem)] lg:items-start">
            <div className="max-w-3xl">
              <p className={eyebrow}>{home.CTA.formHeading}</p>
              <h1
                className={`${serifTitle} max-w-4xl text-[2.4rem] leading-[1.02] font-bold text-black sm:text-[3.4rem] lg:text-[4.35rem]`}
              >
                {home.hero.title}
              </h1>
              <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-[var(--sea-ink-soft)] sm:text-[1.05rem]">
                {home.hero.subTitle}
              </p>

              <div className="mt-8">
                <a href="#offer-form" className={primaryCta}>
                  {home.hero.primaryCTA}
                  <ArrowRight size={18} />
                </a>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {home.reasons.reasons.slice(0, 3).map((reason) => (
                  <article key={reason} className="rounded-2xl border border-[var(--line)] bg-white p-5">
                    <CheckCircle2 size={18} className="text-[var(--palm)]" />
                    <p className="mt-3 text-[0.96rem] leading-7 text-black">{reason}</p>
                  </article>
                ))}
              </div>
            </div>

            <LeadForm
              id="offer-form"
              eyebrow={home.CTA.formHeading}
              heading={home.hero.formHeading}
              description={home.hero.formSubHeading}
              buttonText={home.hero.formButton}
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className={sectionShell}>
          <div className="max-w-2xl">
            <p className={eyebrow}>{home.offerButton}</p>
            <h2 className={sectionTitle}>{home.reasons.title}</h2>
            <p className="mt-5 text-[1rem] leading-8 text-[var(--sea-ink-soft)]">
              {home.reasons.description}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {home.reasons.reasons.map((reason) => (
              <article key={reason} className={cardClass}>
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-1 flex-none text-[var(--palm)]"
                  />
                  <p className="m-0 text-[0.98rem] leading-7 text-black">
                    {reason}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-[var(--sand)]">
        <div className={sectionShell}>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-start">
            <div className="max-w-2xl">
              <p className={eyebrow}>{home.offerButton}</p>
              <h2 className={sectionTitle}>{home.steps.title}</h2>
              <p className="mt-5 text-[1rem] leading-8 text-[var(--sea-ink-soft)]">
                {home.reasons.description}
              </p>
              <div className="mt-8">
                <a href="#offer-form" className={secondaryCta}>
                  {home.steps.formButton}
                </a>
              </div>
            </div>

            <div className="space-y-4">
              {home.steps.steps.map((step, index) => (
                <article
                  key={step.stepTitle}
                  className="rounded-2xl border border-[var(--line)] bg-white p-5 sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-full bg-[#dbeafe] text-[0.95rem] font-bold text-[var(--palm)]">
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
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className={sectionShell}>
          <div className="space-y-12">
            {home.FAQ.map((group) => (
              <article key={group.title} className="mx-auto max-w-5xl">
                <div className="max-w-2xl">
                  <p className={eyebrow}>{group.title}</p>
                  <h2 className={sectionTitle}>{group.title}</h2>
                  <p className="mt-5 text-[1rem] leading-8 text-[var(--sea-ink-soft)]">
                    {group.description}
                  </p>
                </div>

                <div className="mt-8 space-y-4">
                  {group.faq.map((item) => (
                    <article
                      key={item.question}
                      className="rounded-2xl border border-[var(--line)] bg-[var(--sand)] p-5 sm:p-6"
                    >
                      <h3 className="m-0 text-[1rem] font-semibold text-black">
                        {item.question}
                      </h3>
                      <p className="mt-3 text-[0.98rem] leading-7 text-[var(--sea-ink-soft)]">
                        {item.answer}
                      </p>
                    </article>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--sand)]">
        <div className={sectionShell}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <article className="rounded-2xl border border-[var(--line)] bg-white p-6 sm:p-8">
              <p className={eyebrow}>{contact.details.title}</p>
              <h2 className={sectionTitle}>{contact.hero.title}</h2>
              <p className="mt-5 text-[0.98rem] leading-8 text-[var(--sea-ink-soft)]">
                {contact.details.description}
              </p>
            </article>

            <article className="rounded-2xl border border-[var(--line)] bg-white p-6 sm:p-8">
              <p className={eyebrow}>{home.CTA.formHeading}</p>
              <h2
                className={`${serifTitle} max-w-2xl text-[2rem] leading-tight font-bold text-black sm:text-[2.4rem]`}
              >
                {home.CTA.heading}
              </h2>
              <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-[var(--sea-ink-soft)]">
                {home.CTA.subHeading}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className={sectionShell}>
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--hero-a)] px-6 py-10 sm:px-8 sm:py-12">
            <div className="max-w-2xl">
              <p className={eyebrow}>{home.CTA.formHeading}</p>
              <h2 className={sectionTitle}>{home.CTA.heading}</h2>
              <p className="mt-5 text-[1rem] leading-8 text-[var(--sea-ink-soft)]">
                {home.CTA.subHeading}
              </p>
              <div className="mt-8">
                <a href="#offer-form" className={primaryCta}>
                  {home.CTA.primaryCta}
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

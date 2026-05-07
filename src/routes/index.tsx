import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import FaqItem from '../components/FaqItem'
import LeadForm from '../components/LeadForm'
import { homeContent } from '../content/site'
import homeHeroImage from '../img/home2.jpg'
import neighborhoodImage from '../img/neighborhood2.png'

const home = homeContent

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
  const primaryCta =
    'inline-flex min-h-14 min-w-[11rem] items-center justify-center gap-2 rounded-md bg-[#16a34a] px-8 py-4 text-[1rem] leading-none font-bold uppercase !text-white no-underline transition hover:bg-[#15803d] hover:!text-white'
  const sectionShell = `${pageWrap} px-2 py-14 sm:px-4 sm:py-16`
  const sectionTitle = `${serifTitle} text-[2rem] leading-tight font-bold text-black sm:text-[2.5rem]`
  const cardClass =
    'rounded-2xl border border-[var(--line)] bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.04)]'

  return (
    <main>
      <section
        className="bg-[var(--hero-a)] bg-cover bg-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 63, 153, 0.74), rgba(15, 79, 191, 0.74)), url(${homeHeroImage})`,
        }}
      >
        <div className={`${sectionShell} pt-10 pb-18 sm:pt-12 sm:pb-20`}>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,26rem)] lg:items-center">
            <div className="max-w-3xl">
              <h1
                className={`${serifTitle} max-w-4xl text-[2.4rem] leading-[1.02] font-bold text-white sm:text-[3.4rem] lg:text-[4.35rem]`}
              >
                {home.hero.title}
              </h1>
              <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-[var(--hero-copy)] sm:text-[1.05rem]">
                {home.hero.subTitle}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {home.hero.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[0.8rem] font-bold uppercase tracking-[0.08em] text-white"
                  >
                    {badge}
                  </span>
                ))}
              </div>

            </div>

            <LeadForm
              id="offer-form"
              eyebrow={home.CTA.formHeading}
              heading={home.hero.formHeading}
              description={home.hero.formSubHeading}
              buttonText={home.hero.formButton}
              buttonHref="/get-offer"
            />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-[var(--sand)]">
        <div className={sectionShell}>
          <div className="mx-auto max-w-2xl text-center">
            <div>
              <h2 className={sectionTitle}>{home.steps.title}</h2>
              <p className="mt-5 text-[1rem] leading-8 text-[var(--sea-ink-soft)]">
                {home.steps.description}
              </p>
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl gap-4 md:grid-cols-3">
            {home.steps.steps.map((step, index) => (
              <article
                key={step.stepTitle}
                className="rounded-2xl border border-[var(--line)] bg-white p-5 sm:p-6"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-full bg-[var(--hero-a)] text-[0.95rem] font-bold text-white">
                    {index + 1}
                  </div>
                  <div className="mt-4">
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

          <div className="mt-8 flex justify-center">
            <Link to="/get-offer" className={primaryCta}>
              {home.steps.formButton}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className={sectionShell}>
          <div className="mx-auto max-w-2xl text-center">
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

          <div className="mt-8">
            <Link to="/get-offer" className={primaryCta}>
              {home.reasons.formButton}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--sand)]">
        <div className={sectionShell}>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className={sectionTitle}>{home.prosAndCons.title}</h2>
            <p className="mt-5 text-[1rem] leading-8 text-[var(--sea-ink-soft)]">
              {home.prosAndCons.description}
            </p>
          </div>

          <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-6 lg:flex-row lg:items-start lg:justify-center lg:gap-0">
            <article className="relative z-10 w-full rounded-2xl border border-[var(--line)] bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.04)] sm:p-8 lg:w-fit lg:min-w-[30rem] lg:self-start lg:p-10">
              <h3 className={`${serifTitle} m-0 text-[1.6rem] font-bold text-black`}>
                {home.prosAndCons.prosTitle}
              </h3>
              <div className="mt-6 space-y-4">
                {home.prosAndCons.pros.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-1 flex-none text-[var(--palm)]" />
                    <p className="m-0 text-[0.98rem] leading-7 text-black">{item}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="w-full rounded-2xl border border-[var(--line)] bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.04)] sm:p-8 lg:-ml-12 lg:mt-4 lg:max-w-[30rem] lg:self-start lg:pl-14">
              <h3 className={`${serifTitle} m-0 text-[1.6rem] font-bold text-black`}>
                {home.prosAndCons.consTitle}
              </h3>
              <div className="mt-6 space-y-4">
                {home.prosAndCons.cons.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-1 flex-none text-[var(--palm)]" />
                    <p className="m-0 text-[0.98rem] leading-7 text-black">{item}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="mt-8 flex justify-center">
            <Link to="/get-offer" className={primaryCta}>
              {home.prosAndCons.formButton}
            </Link>
          </div>
        </div>
      </section>

      <section
        className="bg-[var(--hero-a)] bg-cover bg-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 63, 153, 0.88), rgba(15, 79, 191, 0.88)), url(${neighborhoodImage})`,
        }}
      >
        <div className={sectionShell}>
          <div className="mx-auto flex max-w-5xl flex-col gap-8 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div className="max-w-2xl">
              <h2 className={`${sectionTitle} text-white`}>{home.quickContact.title}</h2>
              <p className="mt-5 text-[1rem] leading-8 text-[var(--hero-copy)]">
                {home.quickContact.subHeading}
              </p>
            </div>
            <div className="flex justify-center md:flex-none md:justify-end">
              <Link to="/contact" className={primaryCta}>
                {home.quickContact.button}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className={sectionShell}>
          <div className="space-y-12">
            {home.FAQ.map((group) => (
              <article key={group.title} className="mx-auto max-w-5xl">
                <div className="mx-auto max-w-2xl text-center">
                  <h2 className={sectionTitle}>{group.title}</h2>
                  <p className="mt-5 text-[1rem] leading-8 text-[var(--sea-ink-soft)]">
                    {group.description}
                  </p>
                </div>

                <div className="mt-8 space-y-4">
                  {group.faq.map((item) => (
                    <FaqItem
                      key={item.question}
                      question={item.question}
                      answer={item.answer}
                    />
                  ))}
                </div>
                <div className="mt-8 flex justify-center">
                  <Link to="/get-offer" className={primaryCta}>
                    {group.formButton}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-[var(--hero-a)] bg-cover bg-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 63, 153, 0.9), rgba(15, 79, 191, 0.9)), url(${neighborhoodImage})`,
        }}
      >
        <div className={sectionShell}>
          <div className="px-6 py-10 sm:px-8 sm:py-12">
            <div className="mx-auto max-w-2xl text-center">
              <h2
                className={`${serifTitle} text-[2rem] leading-tight font-bold text-white sm:text-[2.5rem]`}
              >
                {home.CTA.heading}
              </h2>
              <p className="mt-5 text-[1rem] leading-8 text-[var(--hero-copy)]">
                {home.CTA.subHeading}
              </p>
              <div className="mt-8 flex justify-center">
                <Link to="/get-offer" className={primaryCta}>
                  {home.CTA.primaryCta}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

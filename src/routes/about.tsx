import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import LeadForm from '../components/LeadForm'
import { aboutContent } from '../content/site'
import neighborhoodImage from '../img/neighborhood2.png'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      {
        title: aboutContent.seoTitle,
      },
      {
        name: 'description',
        content: aboutContent.seoDescription,
      },
    ],
  }),
  component: AboutPage,
})

function AboutPage() {
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
          backgroundImage: `linear-gradient(rgba(11, 63, 153, 0.74), rgba(15, 79, 191, 0.74)), url(${neighborhoodImage})`,
        }}
      >
        <div className={`${sectionShell} pt-10 pb-18 sm:pt-12 sm:pb-20`}>
          <article className="max-w-3xl">
            <h1
              className={`${serifTitle} max-w-4xl text-[2.4rem] leading-[1.02] font-bold text-white sm:text-[3.4rem] lg:text-[4.1rem]`}
            >
              {aboutContent.hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-[var(--hero-copy)] sm:text-[1.05rem]">
              {aboutContent.hero.subTitle}
            </p>
            <p className="mt-4 max-w-2xl text-[1rem] leading-8 text-[var(--hero-copy)]">
              {aboutContent.hero.description}
            </p>
          </article>
        </div>
      </section>

      <section className="bg-white">
        <div className={sectionShell}>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className={sectionTitle}>
              {aboutContent.about.heading}
            </h2>
            <p className="mt-5 text-[1rem] leading-8 text-[var(--sea-ink-soft)]">
              {aboutContent.about.description}
            </p>
            <div className="mt-8 flex justify-center">
              <Link to="/get-offer" className={primaryCta}>
                Get Offer
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--sand)]">
        <div className={sectionShell}>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className={sectionTitle}>
              {aboutContent.howWeWork.heading}
            </h2>
            <p className="mt-5 max-w-3xl text-[1rem] leading-8 text-[var(--sea-ink-soft)]">
              {aboutContent.howWeWork.subHeading}
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-6xl gap-4 md:grid-cols-3">
            {aboutContent.howWeWork.steps.map((step, index) => (
              <article key={step.id} className={cardClass}>
                <div className="flex flex-col items-center text-center">
                  <div className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-full bg-[var(--hero-a)] text-[0.95rem] font-bold text-white">
                    {index + 1}
                  </div>
                  <div className="mt-4">
                    <h3 className="m-0 text-[1rem] font-semibold text-black">{step.title}</h3>
                    <p className="mt-3 text-[0.98rem] leading-7 text-[var(--sea-ink-soft)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link to="/get-offer" className={primaryCta}>
              Get Offer
              <ArrowRight size={18} />
            </Link>
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
              <h2 className={`${serifTitle} text-[2rem] leading-tight font-bold text-white sm:text-[2.5rem]`}>
                {aboutContent.CTA.heading}
              </h2>
              <p className="mt-5 text-[1rem] leading-8 text-[var(--hero-copy)]">
                {aboutContent.CTA.formSubHeading}
              </p>
              <div className="mt-8 flex justify-center">
                <Link to="/get-offer" className={primaryCta}>
                  {aboutContent.CTA.formButton}
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

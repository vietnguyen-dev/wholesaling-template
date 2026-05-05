import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import LeadForm from '../components/LeadForm'
import { aboutContent } from '../content/site'

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
  return (
    <main className="pb-20 pt-4 sm:pt-6">
      <section className="bg-[var(--hero-a)] px-4">
        <div className="page-wrap py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,26rem)] lg:items-start">
            <article className="max-w-3xl">
              <p className="island-kicker mb-3">About</p>
              <h1 className="display-title m-0 text-[2.4rem] leading-[1.02] font-bold text-[var(--sea-ink)] sm:text-[3.4rem]">
                {aboutContent.hero.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--sea-ink-soft)]">
                {aboutContent.hero.subTitle}
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--sea-ink-soft)]">
                {aboutContent.hero.description}
              </p>
              <div className="mt-8">
                <a
                  href="#about-offer-form"
                  className="inline-flex min-h-12 items-center gap-2 rounded-md bg-[#1d4ed8] px-6 py-3.5 font-bold !text-white no-underline transition hover:bg-[#1e40af] hover:!text-white"
                >
                  {aboutContent.about.formButton}
                  <ArrowRight size={18} />
                </a>
              </div>
            </article>

            <LeadForm
              id="about-offer-form"
              eyebrow={aboutContent.CTA.formHeading}
              heading={aboutContent.CTA.heading}
              description={aboutContent.CTA.formSubHeading}
              buttonText={aboutContent.CTA.formButton}
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-4">
        <div className="page-wrap py-12 sm:py-16">
          <div className="max-w-3xl">
            <p className="island-kicker mb-3">What We Focus On</p>
            <h2 className="display-title m-0 text-[2rem] leading-tight font-bold text-[var(--sea-ink)] sm:text-[2.4rem]">
              {aboutContent.about.heading}
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--sea-ink-soft)]">
              {aboutContent.about.description}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--sand)] px-4">
        <div className="page-wrap py-12 sm:py-16">
          <div className="max-w-3xl">
            <p className="island-kicker mb-3">How We Help</p>
            <h2 className="display-title m-0 text-[2rem] leading-tight font-bold text-[var(--sea-ink)] sm:text-[2.4rem]">
              {aboutContent.howWeWork.heading}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--sea-ink-soft)]">
              {aboutContent.howWeWork.subHeading}
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {aboutContent.howWeWork.steps.map((step) => (
              <article key={step.id} className="feature-card rounded-2xl p-5">
                <p className="island-kicker mb-3">Step {step.id}</p>
                <h3 className="m-0 text-lg font-semibold text-[var(--sea-ink)]">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-[var(--sea-ink-soft)]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4">
        <div className="page-wrap py-12 sm:py-16">
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--hero-a)] px-6 py-10 sm:px-8 sm:py-12">
            <div className="max-w-2xl">
              <p className="island-kicker mb-3">{aboutContent.CTA.formHeading}</p>
              <h2 className="display-title m-0 text-[2rem] leading-tight font-bold text-[var(--sea-ink)] sm:text-[2.4rem]">
                {aboutContent.CTA.heading}
              </h2>
              <p className="mt-5 text-base leading-8 text-[var(--sea-ink-soft)]">
                {aboutContent.CTA.formSubHeading}
              </p>
              <div className="mt-8">
                <a
                  href="#about-offer-form"
                  className="inline-flex min-h-12 items-center gap-2 rounded-md bg-[#1d4ed8] px-6 py-3.5 font-bold !text-white no-underline transition hover:bg-[#1e40af] hover:!text-white"
                >
                  {aboutContent.CTA.formButton}
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

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
    <main className="page-wrap px-4 py-12">
      <section className="island-shell rounded-[2rem] p-6 sm:p-8">
        <p className="island-kicker mb-3">About</p>
        <h1 className="display-title m-0 text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">
          {aboutContent.hero.title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--sea-ink-soft)]">
          {aboutContent.hero.subTitle}
        </p>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--sea-ink-soft)]">
          {aboutContent.hero.description}
        </p>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <article className="island-shell rounded-[2rem] p-6 sm:p-8">
          <p className="island-kicker mb-3">What We Focus On</p>
          <h2 className="display-title m-0 text-3xl font-bold text-[var(--sea-ink)]">
            {aboutContent.about.heading}
          </h2>
          <p className="mt-4 text-base leading-8 text-[var(--sea-ink-soft)]">
            {aboutContent.about.description}
          </p>
          <a
            href="#about-offer-form"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[rgba(28,91,189,0.22)] bg-[linear-gradient(135deg,#1d4ed8,#2563eb)] px-5 py-3 font-bold !text-white no-underline"
          >
            {aboutContent.about.formButton}
            <ArrowRight size={18} />
          </a>
        </article>

        <LeadForm
          id="about-offer-form"
          eyebrow={aboutContent.CTA.formHeading}
          heading={aboutContent.CTA.heading}
          description={aboutContent.CTA.formSubHeading}
          buttonText={aboutContent.CTA.formButton}
        />
      </section>

      <section className="mt-8 island-shell rounded-[2rem] p-6 sm:p-8">
        <p className="island-kicker mb-3">How We Help</p>
        <h2 className="display-title m-0 text-3xl font-bold text-[var(--sea-ink)]">
          {aboutContent.howWeWork.heading}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--sea-ink-soft)]">
          {aboutContent.howWeWork.subHeading}
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {aboutContent.howWeWork.steps.map((step) => (
            <article key={step.id} className="feature-card rounded-[1.5rem] border border-[var(--line)] p-5">
              <p className="island-kicker mb-3">Step {step.id}</p>
              <h3 className="m-0 text-lg font-semibold text-[var(--sea-ink)]">{step.title}</h3>
              <p className="mt-3 text-base leading-7 text-[var(--sea-ink-soft)]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

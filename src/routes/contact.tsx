import { Link, createFileRoute } from '@tanstack/react-router'
import LeadForm from '../components/LeadForm'
import { contactContent } from '../content/site'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      {
        title: contactContent.seoTitle,
      },
      {
        name: 'description',
        content: contactContent.seoDescription,
      },
    ],
  }),
  component: ContactPage,
})

function ContactPage() {
  return (
    <main className="page-wrap px-4 py-12">
      <section className="island-shell rounded-[2rem] p-6 sm:p-8">
        <p className="island-kicker mb-3">Contact</p>
        <h1 className="display-title m-0 text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">
          {contactContent.hero.title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--sea-ink-soft)]">
          {contactContent.hero.subTitle}
        </p>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--sea-ink-soft)]">
          {contactContent.hero.description}
        </p>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <article className="island-shell rounded-[2rem] p-6 sm:p-8">
          <p className="island-kicker mb-3">{contactContent.details.title}</p>
          <h2 className="display-title m-0 text-3xl font-bold text-[var(--sea-ink)]">
            {contactContent.hero.title}
          </h2>
          <p className="mt-4 text-base leading-8 text-[var(--sea-ink-soft)]">
            {contactContent.details.description}
          </p>
        </article>

        <LeadForm
          eyebrow={contactContent.form.heading}
          heading={contactContent.form.heading}
          description={contactContent.form.subHeading}
          buttonText={contactContent.form.buttonText}
        />
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <article className="island-shell rounded-[2rem] p-6 sm:p-8">
          <p className="island-kicker mb-3">{contactContent.FAQ.title}</p>
          <h2 className="display-title m-0 text-3xl font-bold text-[var(--sea-ink)]">
            Before You Contact Us
          </h2>
          <p className="mt-4 text-base leading-8 text-[var(--sea-ink-soft)]">
            {contactContent.FAQ.description}
          </p>
          <div className="mt-8 grid gap-4">
            {contactContent.FAQ.faq.map((item) => (
              <article
                key={item.question}
                className="feature-card rounded-[1.5rem] border border-[var(--line)] p-5"
              >
                <h3 className="m-0 text-lg font-semibold text-[var(--sea-ink)]">
                  {item.question}
                </h3>
                <p className="mt-3 text-base leading-7 text-[var(--sea-ink-soft)]">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </article>

        <article className="island-shell rounded-[2rem] p-6 sm:p-8">
          <p className="island-kicker mb-3">Need To Move Quickly?</p>
          <h2 className="display-title m-0 text-3xl font-bold text-[var(--sea-ink)]">
            {contactContent.CTA.heading}
          </h2>
          <p className="mt-4 text-base leading-8 text-[var(--sea-ink-soft)]">
            {contactContent.CTA.subHeading}
          </p>
          <Link
            to="/get-offer"
            className="mt-6 inline-flex rounded-full border border-[rgba(28,91,189,0.22)] bg-[linear-gradient(135deg,#1d4ed8,#2563eb)] px-5 py-3 font-bold !text-white no-underline"
          >
            {contactContent.CTA.primaryCTA}
          </Link>
        </article>
      </section>
    </main>
  )
}

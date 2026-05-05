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
    <main className="pb-20 pt-4 sm:pt-6">
      <section className="bg-[var(--hero-a)] px-4">
        <div className="page-wrap py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,26rem)] lg:items-start">
            <article className="max-w-3xl">
              <p className="island-kicker mb-3">Contact</p>
              <h1 className="display-title m-0 text-[2.4rem] leading-[1.02] font-bold text-[var(--sea-ink)] sm:text-[3.4rem]">
                {contactContent.hero.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--sea-ink-soft)]">
                {contactContent.hero.subTitle}
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--sea-ink-soft)]">
                {contactContent.hero.description}
              </p>
            </article>

            <LeadForm
              eyebrow={contactContent.form.heading}
              heading={contactContent.form.heading}
              description={contactContent.form.subHeading}
              buttonText={contactContent.form.buttonText}
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-4">
        <div className="page-wrap py-12 sm:py-16">
          <div className="max-w-3xl">
            <p className="island-kicker mb-3">{contactContent.details.title}</p>
            <h2 className="display-title m-0 text-[2rem] leading-tight font-bold text-[var(--sea-ink)] sm:text-[2.4rem]">
              {contactContent.hero.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--sea-ink-soft)]">
              {contactContent.details.description}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--sand)] px-4">
        <div className="page-wrap py-12 sm:py-16">
          <div className="max-w-3xl">
            <p className="island-kicker mb-3">{contactContent.FAQ.title}</p>
            <h2 className="display-title m-0 text-[2rem] leading-tight font-bold text-[var(--sea-ink)] sm:text-[2.4rem]">
              Before You Contact Us
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--sea-ink-soft)]">
              {contactContent.FAQ.description}
            </p>
          </div>
          <div className="mt-8 grid gap-4">
            {contactContent.FAQ.faq.map((item) => (
              <article
                key={item.question}
                className="feature-card rounded-2xl p-5"
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
        </div>
      </section>

      <section className="bg-white px-4">
        <div className="page-wrap py-12 sm:py-16">
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--hero-a)] px-6 py-10 sm:px-8 sm:py-12">
            <div className="max-w-2xl">
              <p className="island-kicker mb-3">Need To Move Quickly?</p>
              <h2 className="display-title m-0 text-[2rem] leading-tight font-bold text-[var(--sea-ink)] sm:text-[2.4rem]">
                {contactContent.CTA.heading}
              </h2>
              <p className="mt-5 text-base leading-8 text-[var(--sea-ink-soft)]">
                {contactContent.CTA.subHeading}
              </p>
              <div className="mt-8">
                <Link
                  to="/get-offer"
                  className="inline-flex min-h-12 items-center rounded-md bg-[#1d4ed8] px-6 py-3.5 font-bold !text-white no-underline transition hover:bg-[#1e40af] hover:!text-white"
                >
                  {contactContent.CTA.primaryCTA}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

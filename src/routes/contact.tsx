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
    <main className="pb-20">
      <section className="bg-[var(--hero-a)] px-4 text-white">
        <div className="page-wrap py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,26rem)] lg:items-start">
            <article className="max-w-3xl">
              <h1 className="display-title m-0 text-[2.4rem] leading-[1.02] font-bold text-white sm:text-[3.4rem]">
                {contactContent.hero.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--hero-copy)]">
                {contactContent.hero.subTitle}
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--hero-copy)]">
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
            <h2 className="display-title m-0 text-[2rem] leading-tight font-bold text-[var(--sea-ink)] sm:text-[2.4rem]">
              {contactContent.hero.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--sea-ink-soft)]">
              {contactContent.details.description}
            </p>
            <div className="mt-8">
              <Link
                to="/get-offer"
                className="inline-flex min-h-14 min-w-[11rem] items-center justify-center rounded-md bg-[#16a34a] px-8 py-4 text-[1rem] leading-none font-bold uppercase !text-white no-underline transition hover:bg-[#15803d] hover:!text-white"
              >
                Get Offer
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--sand)] px-4">
        <div className="page-wrap py-12 sm:py-16">
          <div className="max-w-3xl">
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
          <div className="mt-8">
            <Link
              to="/get-offer"
              className="inline-flex min-h-14 min-w-[11rem] items-center justify-center rounded-md bg-[#16a34a] px-8 py-4 text-[1rem] leading-none font-bold uppercase !text-white no-underline transition hover:bg-[#15803d] hover:!text-white"
            >
              Get Offer
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--hero-a)] px-4 text-white">
        <div className="page-wrap py-12 sm:py-16">
          <div className="px-6 py-10 sm:px-8 sm:py-12">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="display-title m-0 text-[2rem] leading-tight font-bold text-white sm:text-[2.4rem]">
                {contactContent.CTA.heading}
              </h2>
              <p className="mt-5 text-base leading-8 text-[var(--hero-copy)]">
                {contactContent.CTA.subHeading}
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  to="/get-offer"
                  className="inline-flex min-h-14 min-w-[11rem] items-center justify-center rounded-md bg-[#16a34a] px-8 py-4 text-[1rem] leading-none font-bold uppercase !text-white no-underline transition hover:bg-[#15803d] hover:!text-white"
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

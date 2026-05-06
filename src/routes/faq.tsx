import { createFileRoute, Link } from '@tanstack/react-router'
import { faqContent } from '../content/site'

export const Route = createFileRoute('/faq')({
  head: () => ({
    meta: [
      {
        title: faqContent.seoTitle,
      },
      {
        name: 'description',
        content: faqContent.seoDescription,
      },
    ],
  }),
  component: FaqPage,
})

function FaqPage() {
  return (
    <main className="pb-20">
      <section className="bg-[var(--hero-a)] px-4 text-white">
        <div className="page-wrap py-12 sm:py-16">
          <div className="max-w-3xl">
            <h1 className="display-title m-0 text-[2.4rem] leading-[1.02] font-bold text-white sm:text-[3.4rem]">
              {faqContent.heading}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--hero-copy)]">
              {faqContent.subHeading}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--hero-copy)]">
              {faqContent.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4">
        <div className="page-wrap py-12 sm:py-16">
          <div className="space-y-10">
            {faqContent.categories.map((category) => (
              <article key={category.title}>
                <div className="max-w-3xl">
                  <h2 className="display-title m-0 text-[2rem] leading-tight font-bold text-[var(--sea-ink)] sm:text-[2.4rem]">
                    {category.title}
                  </h2>
                  {category.description ? (
                    <p className="mt-5 text-base leading-8 text-[var(--sea-ink-soft)]">
                      {category.description}
                    </p>
                  ) : null}
                </div>
                <div className="mt-8 grid gap-4">
                  {category.items.map((item) => (
                    <article key={item.question} className="feature-card rounded-2xl p-5">
                      <h3 className="m-0 text-lg font-semibold text-[var(--sea-ink)]">{item.question}</h3>
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--sand)] px-4">
        <div className="page-wrap py-12 sm:py-16">
          <div className="rounded-2xl border border-[var(--line)] bg-white px-6 py-10 sm:px-8 sm:py-12">
            <div className="max-w-2xl">
              <h2 className="display-title m-0 text-[2rem] leading-tight font-bold text-[var(--sea-ink)] sm:text-[2.4rem]">
                {faqContent.contactCtaHeading}
              </h2>
              <p className="mt-5 text-base leading-8 text-[var(--sea-ink-soft)]">
                {faqContent.contactCtaSubHeading}
              </p>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex min-h-12 items-center rounded-md bg-[#16a34a] px-6 py-3.5 font-bold !text-white no-underline transition hover:bg-[#15803d] hover:!text-white"
                >
                  {faqContent.contactCtaButton}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

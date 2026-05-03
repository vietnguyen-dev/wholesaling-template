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
    <main className="page-wrap px-4 py-12">
      <section className="island-shell rounded-[2rem] p-6 sm:p-8">
        <p className="island-kicker mb-3">FAQ</p>
        <h1 className="display-title m-0 text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">
          {faqContent.heading}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--sea-ink-soft)]">
          {faqContent.subHeading}
        </p>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--sea-ink-soft)]">
          {faqContent.intro}
        </p>
      </section>

      <section className="mt-8 grid gap-6">
        {faqContent.categories.map((category) => (
          <article key={category.title} className="island-shell rounded-[2rem] p-6 sm:p-8">
            <p className="island-kicker mb-3">{category.title}</p>
            <h2 className="display-title m-0 text-3xl font-bold text-[var(--sea-ink)]">
              {category.title}
            </h2>
            {category.description ? (
              <p className="mt-4 text-base leading-8 text-[var(--sea-ink-soft)]">
                {category.description}
              </p>
            ) : null}
            <div className="mt-8 grid gap-4">
              {category.items.map((item) => (
                <article key={item.question} className="feature-card rounded-[1.5rem] border border-[var(--line)] p-5">
                  <h3 className="m-0 text-lg font-semibold text-[var(--sea-ink)]">{item.question}</h3>
                  <p className="mt-3 text-base leading-7 text-[var(--sea-ink-soft)]">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="mt-8 island-shell rounded-[2rem] p-6 sm:p-8">
        <p className="island-kicker mb-3">Next Step</p>
        <h2 className="display-title m-0 text-3xl font-bold text-[var(--sea-ink)]">
          {faqContent.contactCtaHeading}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--sea-ink-soft)]">
          {faqContent.contactCtaSubHeading}
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-flex rounded-full border border-[rgba(28,91,189,0.22)] bg-[linear-gradient(135deg,#1d4ed8,#2563eb)] px-5 py-3 font-bold !text-white no-underline"
        >
          {faqContent.contactCtaButton}
        </Link>
      </section>
    </main>
  )
}

import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
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
      <section className="bg-[var(--hero-a)] text-white">
        <div className={`${sectionShell} pt-10 pb-18 sm:pt-12 sm:pb-20`}>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,26rem)] lg:items-start">
            <article className="max-w-3xl">
              <h1
                className={`${serifTitle} max-w-4xl text-[2.4rem] leading-[1.02] font-bold text-white sm:text-[3.4rem] lg:text-[4.1rem]`}
              >
                {contactContent.hero.title}
              </h1>
              <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-[var(--hero-copy)] sm:text-[1.05rem]">
                {contactContent.hero.subTitle}
              </p>
              <p className="mt-4 max-w-2xl text-[1rem] leading-8 text-[var(--hero-copy)]">
                {contactContent.hero.description}
              </p>
              <div className="mt-8">
                <Link to="/get-offer" className={primaryCta}>
                  {contactContent.CTA.primaryCTA}
                  <ArrowRight size={18} />
                </Link>
              </div>
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

      <section className="bg-white">
        <div className={sectionShell}>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className={sectionTitle}>
              {contactContent.hero.title}
            </h2>
            <p className="mt-5 text-[1rem] leading-8 text-[var(--sea-ink-soft)]">
              {contactContent.details.description}
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
              Before You Contact Us
            </h2>
            <p className="mt-5 text-[1rem] leading-8 text-[var(--sea-ink-soft)]">
              {contactContent.FAQ.description}
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-4">
            {contactContent.FAQ.faq.map((item) => (
              <article key={item.question} className={cardClass}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-1 flex-none text-[var(--palm)]" />
                  <div>
                    <h3 className="m-0 text-[1rem] font-semibold text-black">{item.question}</h3>
                    <p className="mt-3 text-[0.98rem] leading-7 text-[var(--sea-ink-soft)]">
                      {item.answer}
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

      <section className="bg-[var(--hero-a)] text-white">
        <div className={sectionShell}>
          <div className="px-6 py-10 sm:px-8 sm:py-12">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className={`${serifTitle} text-[2rem] leading-tight font-bold text-white sm:text-[2.5rem]`}>
                {contactContent.CTA.heading}
              </h2>
              <p className="mt-5 text-[1rem] leading-8 text-[var(--hero-copy)]">
                {contactContent.CTA.subHeading}
              </p>
              <div className="mt-8 flex justify-center">
                <Link to="/get-offer" className={primaryCta}>
                  {contactContent.CTA.primaryCTA}
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

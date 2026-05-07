import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import FaqItem from '../components/FaqItem'
import LeadForm from '../components/LeadForm'
import { contactContent } from '../content/site'
import neighborhoodAltImage from '../img/neighborhood2.png'

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

  return (
    <main>
      <section
        className="bg-[var(--hero-a)] bg-cover bg-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 63, 153, 0.82), rgba(15, 79, 191, 0.82)), url(${neighborhoodAltImage})`,
        }}
      >
        <div className={`${sectionShell} pt-10 pb-18 sm:pt-12 sm:pb-20`}>
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
          </article>
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
              <FaqItem key={item.question} question={item.question} answer={item.answer} />
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
          backgroundImage: `linear-gradient(rgba(11, 63, 153, 0.9), rgba(15, 79, 191, 0.9)), url(${neighborhoodAltImage})`,
        }}
      >
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

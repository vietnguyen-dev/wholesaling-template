import { ArrowRight } from 'lucide-react'
import { createFileRoute } from '@tanstack/react-router'
import LeadForm from '../components/LeadForm'
import { getOfferContent } from '../content/site'

export const Route = createFileRoute('/get-offer')({
  head: () => ({
    meta: [
      {
        title: getOfferContent.title,
      },
      {
        name: 'description',
        content: getOfferContent.description,
      },
    ],
  }),
  component: GetOfferPage,
})

function GetOfferPage() {
  const pageWrap =
    'mx-auto w-[min(1200px,calc(100%-1.5rem))] sm:w-[min(1200px,calc(100%-2rem))]'
  const serifTitle = `font-['Fraunces']`
  const primaryCta =
    'inline-flex min-h-14 min-w-[11rem] items-center justify-center gap-2 rounded-md bg-[#16a34a] px-8 py-4 text-[1rem] leading-none font-bold uppercase !text-white no-underline transition hover:bg-[#15803d] hover:!text-white'
  const sectionShell = `${pageWrap} px-2 py-14 sm:px-4 sm:py-16`
  const sectionTitle = `${serifTitle} text-[2rem] leading-tight font-bold text-black sm:text-[2.5rem]`

  return (
    <main>
      <section className="bg-[var(--hero-a)] text-white">
        <div className={`${sectionShell} pt-10 pb-18 sm:pt-12 sm:pb-20`}>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,26rem)] lg:items-start">
            <article className="max-w-3xl">
              <h1
                className={`${serifTitle} max-w-4xl text-[2.4rem] leading-[1.02] font-bold text-white sm:text-[3.4rem] lg:text-[4.1rem]`}
              >
                {getOfferContent.title}
              </h1>
              <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-[var(--hero-copy)] sm:text-[1.05rem]">
                {getOfferContent.description}
              </p>
              <div className="mt-8">
                <a href="#offer-form" className={primaryCta}>
                  Request My Offer
                  <ArrowRight size={18} />
                </a>
              </div>
            </article>

            <LeadForm
              id="offer-form"
              eyebrow="Property Review"
              heading={getOfferContent.title}
              description={getOfferContent.description}
              buttonText="Request My Offer"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

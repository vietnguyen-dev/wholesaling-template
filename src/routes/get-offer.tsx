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
  return (
    <main className="pb-20">
      <section className="bg-[var(--hero-a)] px-4 text-white">
        <div className="page-wrap py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,26rem)] lg:items-start">
            <article className="max-w-3xl">
              <h1 className="display-title m-0 text-[2.4rem] leading-[1.02] font-bold text-white sm:text-[3.4rem]">
                {getOfferContent.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--hero-copy)]">
                {getOfferContent.description}
              </p>
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

      <section className="bg-white px-4">
        <div className="page-wrap py-12 sm:py-16">
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--sand)] px-6 py-10 sm:px-8 sm:py-12">
            <div className="max-w-2xl">
              <h2 className="display-title m-0 text-[2rem] leading-tight font-bold text-[var(--sea-ink)] sm:text-[2.4rem]">
                {getOfferContent.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-[var(--sea-ink-soft)]">
                {getOfferContent.description}
              </p>
              <div className="mt-8">
                <a
                  href="#offer-form"
                  className="inline-flex min-h-14 min-w-[11rem] items-center justify-center rounded-md bg-[#16a34a] px-8 py-4 text-[1rem] leading-none font-bold uppercase !text-white no-underline transition hover:bg-[#15803d] hover:!text-white"
                >
                  Get Offer
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

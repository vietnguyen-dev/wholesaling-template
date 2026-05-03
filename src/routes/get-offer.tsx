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
    <main className="page-wrap px-4 py-12">
      <section className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <article className="island-shell rounded-[2rem] p-6 sm:p-8">
          <p className="island-kicker mb-3">Get Offer</p>
          <h1 className="display-title m-0 text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">
            {getOfferContent.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-[var(--sea-ink-soft)]">
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
      </section>
    </main>
  )
}

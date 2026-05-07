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
  const sectionShell = `${pageWrap} px-2 py-14 sm:px-4 sm:py-18`

  return (
    <main>
      <section className="bg-[var(--sand)]">
        <div className={sectionShell}>
          <div className="mx-auto max-w-3xl">
            <article className="text-center">
              <h1
                className={`${serifTitle} text-[2.6rem] leading-[1.02] font-bold text-black sm:text-[3.5rem]`}
              >
                {getOfferContent.title}
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-[1rem] leading-8 text-[var(--sea-ink-soft)] sm:text-[1.05rem]">
                {getOfferContent.description}
              </p>
            </article>

            <div className="mx-auto mt-8 max-w-xl sm:mt-10">
              <LeadForm
                id="offer-form"
                heading={getOfferContent.title}
                description={getOfferContent.description}
                buttonText="Request My Offer"
                includeNameField
                includePhoneField
                showIntroCopy={false}
                className="p-0"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

type LeadFormProps = {
  eyebrow?: string
  heading: string
  description: string
  buttonText: string
  id?: string
}

export default function LeadForm({
  eyebrow,
  heading,
  description,
  buttonText,
  id,
}: LeadFormProps) {
  const primaryCta =
    'inline-flex min-h-14 items-center justify-center rounded-md bg-[#16a34a] px-8 py-4 text-[1.05rem] leading-none font-extrabold uppercase !text-white no-underline transition hover:bg-[#15803d] hover:!text-white'
  const fieldClass =
    'w-full rounded-md border border-[var(--line)] bg-white px-4 py-4 text-black outline-none transition placeholder:text-[color-mix(in_oklab,var(--sea-ink-soft)_82%,white_18%)] focus:border-[rgba(37,99,235,0.45)] focus:shadow-[0_0_0_3px_rgba(37,99,235,0.10)]'

  return (
    <section
      id={id}
      className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-[0_16px_36px_rgba(15,23,42,0.06)] sm:p-8"
    >
      <h2 className="m-0 text-[1.85rem] leading-tight font-bold tracking-tight text-black">
        {heading}
      </h2>
      <p className="mt-3 max-w-xl text-base leading-7 text-[var(--sea-ink-soft)]">{description}</p>

      <form className="mt-6 space-y-4">
        <input
          type="text"
          className={fieldClass}
          aria-label="Property address"
          placeholder="Property address"
        />
        <input
          type="tel"
          className={fieldClass}
          aria-label="Phone number"
          placeholder="Phone #"
        />

        <button type="submit" className={`${primaryCta} w-full border-0`}>
          {buttonText}
        </button>
      </form>
    </section>
  )
}

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
    'inline-flex items-center justify-center gap-[0.55rem] rounded-full border border-[rgba(28,91,189,0.22)] bg-[linear-gradient(135deg,#1d4ed8,#2563eb)] px-6 py-4 text-[0.98rem] leading-none font-extrabold !text-white no-underline shadow-[0_16px_30px_rgba(37,99,235,0.22)] transition hover:-translate-y-0.5 hover:!text-white'
  const fieldClass =
    'w-full rounded-2xl border border-[color-mix(in_oklab,var(--line)_100%,white_0%)] bg-white px-4 py-4 text-black outline-none transition placeholder:text-[color-mix(in_oklab,var(--sea-ink-soft)_82%,white_18%)] focus:border-[rgba(37,99,235,0.45)] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.12)]'

  return (
    <section
      id={id}
      className="rounded-[1.75rem] border border-[var(--line)] bg-white p-5 shadow-[0_1px_0_var(--inset-glint)_inset,0_18px_40px_rgba(20,62,117,0.06),0_6px_18px_rgba(15,37,63,0.05)] sm:p-7"
    >
      {eyebrow ? <p className="island-kicker mb-3">{eyebrow}</p> : null}
      <h2 className="m-0 text-2xl font-bold tracking-tight text-black">{heading}</h2>
      <p className="mt-3 text-base leading-7 text-black">{description}</p>

      <form className="mt-6 space-y-4">
        <input
          type="text"
          className={fieldClass}
          aria-label="Property address"
          placeholder="Property address"
        />
        <input
          type="text"
          className={fieldClass}
          aria-label="Property details"
          placeholder="Property details"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <input type="text" className={fieldClass} aria-label="Name" placeholder="Name" />
          <input type="tel" className={fieldClass} aria-label="Phone" placeholder="Phone" />
        </div>
        <input type="email" className={fieldClass} aria-label="Email" placeholder="Email" />

        <button type="submit" className={`${primaryCta} w-full border-0`}>
          {buttonText}
        </button>
      </form>
    </section>
  )
}

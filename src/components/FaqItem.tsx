type FaqItemProps = {
  question: string
  answer: string
  className?: string
}

export default function FaqItem({ question, answer, className = '' }: FaqItemProps) {
  return (
    <details
      className={`group rounded-2xl border border-[var(--line)] bg-[var(--sand)] p-5 sm:p-6 ${className}`.trim()}
    >
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[1rem] font-semibold text-black marker:hidden">
        <span>{question}</span>
        <span className="mt-0.5 text-[1.25rem] leading-none text-[var(--palm)] transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="mt-3 text-[0.98rem] leading-7 text-[var(--sea-ink-soft)]">{answer}</p>
    </details>
  )
}

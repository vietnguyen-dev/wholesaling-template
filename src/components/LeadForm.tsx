import { useEffect, useRef, useState } from 'react'

type LeadFormProps = {
  eyebrow?: string
  heading: string
  description: string
  buttonText: string
  id?: string
}

type AwsAutocompleteResult = {
  Title?: string
  Address?: {
    Label?: string
  }
}

type AwsAutocompleteResponse = {
  ResultItems?: AwsAutocompleteResult[]
}

export default function LeadForm({
  eyebrow,
  heading,
  description,
  buttonText,
  id,
}: LeadFormProps) {
  const [address, setAddress] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [lookupError, setLookupError] = useState('')
  const [isLookingUp, setIsLookingUp] = useState(false)
  const [isSuggestionListOpen, setIsSuggestionListOpen] = useState(false)
  const [isAddressFocused, setIsAddressFocused] = useState(false)
  const fieldRef = useRef<HTMLInputElement>(null)
  const awsLocationKey = import.meta.env.VITE_AWS_LOCATION?.trim()
  const awsLocationRegion =
    import.meta.env.VITE_AWS_LOCATION_REGION?.trim() || 'us-west-2'
  const primaryCta =
    'inline-flex min-h-14 items-center justify-center rounded-md bg-[#16a34a] px-8 py-4 text-[1.05rem] leading-none font-extrabold uppercase !text-white no-underline transition hover:bg-[#15803d] hover:!text-white'
  const fieldClass =
    'w-full rounded-md border border-[var(--line)] bg-white px-4 py-4 text-black outline-none transition placeholder:text-[color-mix(in_oklab,var(--sea-ink-soft)_82%,white_18%)] focus:border-[rgba(37,99,235,0.45)] focus:shadow-[0_0_0_3px_rgba(37,99,235,0.10)]'
  const helperTextClass = 'text-sm text-[var(--sea-ink-soft)]'

  useEffect(() => {
    const query = address.trim()

    if (!awsLocationKey || query.length === 0) {
      setSuggestions([])
      setLookupError('')
      setIsLookingUp(false)
      setIsSuggestionListOpen(false)
      return
    }

    const controller = new AbortController()
    const timeoutId = window.setTimeout(async () => {
      try {
        setIsLookingUp(true)
        const response = await fetch(
          `https://places.geo.${awsLocationRegion}.api.aws/v2/autocomplete?key=${encodeURIComponent(awsLocationKey)}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              QueryText: query,
              MaxResults: 5,
              Filter: {
                IncludeCountries: ['USA'],
              },
            }),
            signal: controller.signal,
          },
        )

        if (!response.ok) {
          throw new Error(`AWS Location lookup failed with ${response.status}`)
        }

        const data = (await response.json()) as AwsAutocompleteResponse
        const nextSuggestions =
          data.ResultItems?.map((item) => item.Address?.Label || item.Title)
            .filter((value): value is string => Boolean(value))
            .filter(
              (value, index, values) => values.indexOf(value) === index,
            ) || []

        setSuggestions(nextSuggestions)
        setLookupError('')
        setIsSuggestionListOpen(nextSuggestions.length > 0)
      } catch (error) {
        if (controller.signal.aborted) {
          return
        }

        setSuggestions([])
        setLookupError('Address lookup is temporarily unavailable.')
        setIsSuggestionListOpen(false)
        console.error(error)
      } finally {
        if (!controller.signal.aborted) {
          setIsLookingUp(false)
        }
      }
    }, 250)

    return () => {
      controller.abort()
      window.clearTimeout(timeoutId)
    }
  }, [address, awsLocationKey, awsLocationRegion])

  const handleAddressChange = (value: string) => {
    setAddress(value)
    setLookupError('')
    setIsSuggestionListOpen(value.trim().length > 0)
  }

  const handleSuggestionSelect = (suggestion: string) => {
    setAddress(suggestion)
    setSuggestions([])
    setIsSuggestionListOpen(false)
    setLookupError('')
    fieldRef.current?.focus()
  }

  const showSuggestions =
    isSuggestionListOpen && suggestions.length > 0 && isAddressFocused

  const showLookupHint = Boolean(
    lookupError ||
    (!awsLocationKey && address.trim().length > 0) ||
    isLookingUp,
  )
  const lookupMessage = lookupError
    ? lookupError
    : !awsLocationKey && address.trim().length > 0
      ? 'Address lookup is not configured yet.'
      : isLookingUp
        ? 'Looking up addresses...'
        : ''

  return (
    <section
      id={id}
      className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-[0_16px_36px_rgba(15,23,42,0.06)] sm:p-8"
    >
      <h2 className="m-0 text-[1.85rem] leading-tight font-bold tracking-tight text-black">
        {heading}
      </h2>
      <p className="mt-3 max-w-xl text-base leading-7 text-[var(--sea-ink-soft)]">
        {description}
      </p>

      <form className="mt-6 space-y-4">
        <div className="relative">
          <input
            ref={fieldRef}
            type="text"
            value={address}
            onChange={(event) => handleAddressChange(event.target.value)}
            onFocus={() => {
              setIsAddressFocused(true)
              if (suggestions.length > 0) {
                setIsSuggestionListOpen(true)
              }
            }}
            onBlur={() => {
              setIsAddressFocused(false)
              window.setTimeout(() => setIsSuggestionListOpen(false), 120)
            }}
            className={`${fieldClass} ${
              showSuggestions
                ? 'rounded-b-none border-b-transparent shadow-[0_0_0_3px_rgba(37,99,235,0.10)]'
                : ''
            }`}
            aria-label="Property address"
            aria-autocomplete="list"
            aria-expanded={showSuggestions}
            aria-haspopup="listbox"
            placeholder="Property address"
            autoComplete="street-address"
          />
          {showSuggestions ? (
            <ul
              className="absolute top-full right-0 left-0 z-20 max-h-72 w-full overflow-auto rounded-b-md border border-[var(--line)] border-t-0 bg-white py-2 shadow-[0_12px_30px_rgba(15,23,42,0.14)]"
              role="listbox"
              aria-label="Address suggestions"
            >
              {suggestions.map((suggestion) => (
                <li key={suggestion}>
                  <button
                    type="button"
                    className="block w-full px-4 py-3 text-left text-sm text-black transition hover:bg-slate-100"
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => handleSuggestionSelect(suggestion)}
                  >
                    {suggestion}
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <input
          type="tel"
          className={fieldClass}
          aria-label="Phone number"
          placeholder="Phone #"
        />
        {showLookupHint ? (
          <p className={helperTextClass}>{lookupMessage}</p>
        ) : null}

        <button type="submit" className={`${primaryCta} w-full border-0`}>
          {buttonText}
        </button>
      </form>
    </section>
  )
}

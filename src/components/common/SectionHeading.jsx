import { useI18n } from '../../hooks/useI18n.js'

export default function SectionHeading({ kicker, title, body, align = 'left', light = false }) {
  const { text } = useI18n()
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {kicker ? (
        <p className="text-xs font-medium tracking-[0.28em] text-caramel uppercase">
          {text(kicker)}
        </p>
      ) : null}
      <h2
        className={`mt-3 text-4xl leading-tight sm:text-5xl ${light ? 'text-white' : 'text-ink'}`}
      >
        {text(title)}
      </h2>
      {body ? (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${light ? 'text-white/80' : 'text-muted'}`}>
          {text(body)}
        </p>
      ) : null}
    </div>
  )
}

import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-ink text-paper hover:bg-espresso',
  light:
    'border border-white/50 bg-white/10 text-white backdrop-blur hover:bg-white/20',
  ghost:
    'border border-line bg-transparent text-ink hover:border-caramel',
  caramel:
    'bg-caramel text-white hover:bg-espresso',
}

export default function ButtonLink({
  to,
  href,
  variant = 'primary',
  className = '',
  children,
}) {
  const classNames = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel ${variants[variant]} ${className}`

  if (href) {
    const external = href.startsWith('http')
    return (
      <a
        href={href}
        className={classNames}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <Link to={to} className={classNames}>
      {children}
    </Link>
  )
}

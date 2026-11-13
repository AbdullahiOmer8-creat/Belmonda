import { Link } from 'react-router-dom'
import Container from '../components/common/Container.jsx'
import { useI18n } from '../hooks/useI18n.js'

export default function NotFoundPage() {
  const { t } = useI18n()

  return (
    <Container className="py-28">
      <p className="text-xs font-medium tracking-[0.28em] text-caramel uppercase">404</p>
      <h1 className="mt-3 text-5xl">{t('pages.notFound.title')}</h1>
      <p className="mt-4 max-w-lg text-muted">{t('pages.notFound.message')}</p>
      <Link to="/" className="mt-8 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper">
        {t('pages.notFound.home')}
      </Link>
    </Container>
  )
}

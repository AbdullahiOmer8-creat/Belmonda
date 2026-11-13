import { useI18n } from '../../hooks/useI18n.js'

export default function Photo({
  image,
  className = '',
  priority = false,
  decorative = false,
}) {
  const { text } = useI18n()

  return (
    <img
      src={image.src}
      alt={decorative ? '' : text(image.alt)}
      width={image.width}
      height={image.height}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
    />
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  /** Use "light" on dark backgrounds (e.g. hero, FAQ on gradient). Use "dark" on light backgrounds (e.g. inside cards). */
  variant?: 'light' | 'dark'
  className?: string
}

export default function SectionHeader({ title, subtitle, variant = 'dark', className = '' }: SectionHeaderProps) {
  const isLight = variant === 'light'
  const titleClass = isLight
    ? 'text-3xl md:text-4xl font-bold text-white mb-4'
    : 'text-3xl md:text-4xl font-bold text-primary-900 mb-4'
  const subtitleClass = isLight
    ? 'text-white/90 text-lg'
    : 'text-primary-700'

  return (
    <div className={`text-center ${className}`}>
      <h2 className={titleClass}>{title}</h2>
      {subtitle && <p className={subtitleClass}>{subtitle}</p>}
    </div>
  )
}

export default function AuthorityBadge() {
  return (
    <div className="inline-flex items-center gap-3 bg-primary-50 border-2 border-primary-200 rounded-full px-5 py-2.5 animate-fade-in hover:border-primary-300 transition-colors duration-300">
      <span className="text-primary-900 text-lg">📊</span>
      <p className="text-sm text-primary-700 font-medium">
        Basado en análisis real de herramientas líderes del mercado
      </p>
    </div>
  )
}

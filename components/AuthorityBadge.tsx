import { BarChart2 } from 'lucide-react'

export default function AuthorityBadge() {
  return (
    <div className="inline-flex items-center gap-3 bg-primary-50 border-2 border-primary-200 rounded-full px-5 py-2.5 animate-fade-in hover:border-primary-300 transition-colors duration-300">
      <BarChart2 className="w-5 h-5 text-primary-900 shrink-0" aria-hidden />
      <p className="text-sm text-primary-700 font-medium">
        Basado en análisis real de herramientas líderes del mercado
      </p>
    </div>
  )
}

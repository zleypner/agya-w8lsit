import { Zap } from 'lucide-react'

export default function ScarcityBadge() {
  return (
    <div className="inline-flex items-center gap-3 bg-accent-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg shadow-accent-500/30 animate-pulse-slow hover:scale-105 transition-transform duration-300">
      <Zap className="w-5 h-5 animate-bounce-slow" aria-hidden />
      <span>Cupos limitados para el lanzamiento inicial</span>
    </div>
  )
}

export default function ScarcityBadge() {
  return (
    <div className="inline-flex items-center gap-3 bg-accent-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg shadow-accent-500/30 animate-pulse-slow hover:scale-105 transition-transform duration-300">
      <span className="text-lg animate-bounce-slow">⚡</span>
      <span>Cupos limitados para el lanzamiento inicial</span>
    </div>
  )
}

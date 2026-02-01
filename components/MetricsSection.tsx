const metrics = [
  {
    value: '-40%',
    label: 'menos ausencias',
    description: 'con recordatorios automáticos',
  },
  {
    value: '+20%',
    label: 'más reservas',
    description: 'con agenda online 24/7',
  },
  {
    value: '3h',
    label: 'ahorradas por semana',
    description: 'en tareas administrativas',
  },
]

export default function MetricsSection() {
  return (
    <section className="py-16 md:py-24 bg-primary-900 rounded-3xl mx-4 md:mx-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Resultados esperables
          </h2>
          <p className="text-primary-200 max-w-xl mx-auto">
            Basado en patrones de negocios de citas. Los resultados varían según tu operación.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Value */}
              <div className="text-5xl md:text-6xl font-bold text-accent-400 mb-2">
                {metric.value}
              </div>

              {/* Label */}
              <div className="text-xl font-semibold text-white mb-1">
                {metric.label}
              </div>

              {/* Description */}
              <div className="text-primary-300 text-sm">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-primary-400 text-xs mt-10">
          * Estimaciones basadas en patrones de negocios de citas (varía según operación).
        </p>
      </div>
    </section>
  )
}

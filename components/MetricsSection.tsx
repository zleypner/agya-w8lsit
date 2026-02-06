'use client'

import { useEffect, useState } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface AnimatedCounterProps {
  value: string
  isInView: boolean
}

function AnimatedCounter({ value, isInView }: AnimatedCounterProps) {
  // Initialize with 0 in the correct format
  const getInitialValue = () => {
    const match = value.match(/^([+-]?)(\d+)(.*)$/)
    if (!match) return value
    const prefix = match[1] || ''
    const suffix = match[3] || ''
    return `${prefix}0${suffix}`
  }

  const [displayValue, setDisplayValue] = useState(getInitialValue)

  useEffect(() => {
    if (!isInView) return

    const matchResult = value.match(/^([+-]?)(\d+)(.*)$/)
    if (!matchResult) return

    const prefix = matchResult[1] || ''
    const targetNumber = parseInt(matchResult[2], 10)
    const suffix = matchResult[3] || ''

    const duration = 1000
    const steps = 30
    const increment = targetNumber / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= targetNumber) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(`${prefix}${Math.floor(current)}${suffix}`)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  return <span>{displayValue}</span>
}

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
  const { ref, isInView } = useIntersectionObserver({ threshold: 0.3 })

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 bg-primary-900 rounded-3xl mx-4 md:mx-8 transition-all duration-700
        ${isInView ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? 'animate-fade-in-down' : 'opacity-0'}`}>
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
              className={`text-center transition-all duration-700
                ${isInView ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Value with animated counter */}
              <div className="text-5xl md:text-6xl font-bold text-accent-400 mb-2">
                <AnimatedCounter value={metric.value} isInView={isInView} />
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
        <p className={`text-center text-primary-400 text-xs mt-10 transition-all duration-700 delay-500
          ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          * Estimaciones basadas en patrones de negocios de citas (varía según operación).
        </p>
      </div>
    </section>
  )
}

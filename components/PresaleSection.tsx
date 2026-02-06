'use client'

import { useState } from 'react'
import { Zap, Check } from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface PresaleSectionProps {
  niche: string
}

export default function PresaleSection({ niche }: PresaleSectionProps) {
  const [selectedPlan, setSelectedPlan] = useState<'early' | 'standard'>('early')
  const { ref, isInView } = useIntersectionObserver({ threshold: 0.1 })

  const plans = {
    early: {
      name: 'Acceso Anticipado',
      price: '$29',
      originalPrice: '$49',
      period: 'mes',
      badge: 'Oferta Especial',
      features: [
        'Acceso de por vida al precio especial',
        'Todas las funcionalidades incluidas',
        'Soporte prioritario',
        'Actualizaciones gratuitas',
        'Sin límite de usuarios',
      ],
      popular: true,
    },
    standard: {
      name: 'Plan Estándar',
      price: '$49',
      originalPrice: undefined as string | undefined,
      period: 'mes',
      badge: 'Precio Regular',
      features: [
        'Todas las funcionalidades',
        'Soporte estándar',
        'Actualizaciones incluidas',
        'Hasta 5 usuarios',
      ],
      popular: false,
    },
  }

  const currentPlan = plans[selectedPlan]

  return (
    <div
      ref={ref}
      className={`relative py-16 px-4 rounded-3xl bg-primary-50 transition-all duration-700
        ${isInView ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <div className={`text-center mb-12 transition-all duration-700
          ${isInView ? 'animate-fade-in-down' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-accent-500 text-white px-6 py-2.5 rounded-full text-sm font-bold mb-6 shadow-lg shadow-accent-500/30 animate-pulse-slow">
            <Zap className="w-4 h-4" />
            <span>PREVENTA - Oferta Limitada</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            Aprovechá el Acceso Anticipado
          </h2>
          <p className="text-xl text-primary-600 max-w-2xl mx-auto">
            Unite ahora y obtené un descuento exclusivo de por vida
          </p>
        </div>

        {/* Plan Selector */}
        <div className={`flex justify-center gap-4 mb-8 transition-all duration-700
          ${isInView ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}>
          <button
            onClick={() => setSelectedPlan('early')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              selectedPlan === 'early'
                ? 'bg-primary-900 text-white shadow-lg shadow-primary-900/30 scale-105'
                : 'bg-white text-primary-700 hover:bg-primary-100 border-2 border-primary-200 hover:scale-105'
            }`}
          >
            Acceso Anticipado
          </button>
          <button
            onClick={() => setSelectedPlan('standard')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              selectedPlan === 'standard'
                ? 'bg-primary-900 text-white shadow-lg shadow-primary-900/30 scale-105'
                : 'bg-white text-primary-700 hover:bg-primary-100 border-2 border-primary-200 hover:scale-105'
            }`}
          >
            Plan Estándar
          </button>
        </div>

        {/* Pricing Card */}
        <div className={`bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-primary-100
          hover:shadow-2xl transition-all duration-500
          ${isInView ? 'animate-scale-in' : 'opacity-0 scale-95'}`}
          style={{ animationDelay: '0.3s' }}>
          {currentPlan.popular && (
            <div className="bg-accent-500 text-white text-center py-3 font-bold">
              {currentPlan.badge}
            </div>
          )}

          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-primary-900 mb-2">
                {currentPlan.name}
              </h3>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-5xl font-bold text-primary-900">
                  {currentPlan.price}
                </span>
                {currentPlan.originalPrice && (
                  <>
                    <span className="text-2xl text-primary-300 line-through">
                      {currentPlan.originalPrice}
                    </span>
                    <span className="bg-accent-100 text-accent-600 px-3 py-1 rounded-full text-sm font-bold">
                      -41%
                    </span>
                  </>
                )}
                <span className="text-primary-500">/{currentPlan.period}</span>
              </div>
              {!currentPlan.originalPrice && (
                <p className="text-primary-500">{currentPlan.badge}</p>
              )}
            </div>

            <ul className="space-y-4 mb-8">
              {currentPlan.features.map((feature, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-500
                    ${isInView ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-4'}`}
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <Check className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-700">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg shadow-accent-500/30 hover:shadow-xl hover:shadow-accent-500/40 btn-interactive">
              Reservar mi Acceso Anticipado
            </button>

            <p className="text-center text-sm text-primary-500 mt-4 flex items-center justify-center gap-4 flex-wrap">
              <span className="inline-flex items-center gap-1"><Check className="w-4 h-4" /> Sin compromiso</span>
              <span className="inline-flex items-center gap-1"><Check className="w-4 h-4" /> Cancelás cuando quieras</span>
              <span className="inline-flex items-center gap-1"><Check className="w-4 h-4" /> Garantía de 30 días</span>
            </p>
          </div>
        </div>

        {/* Countdown or urgency */}
        <div className={`mt-8 text-center transition-all duration-700 delay-500
          ${isInView ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
          <p className="text-primary-700 mb-3">
            <span className="font-bold text-accent-600">Solo quedan 47 cupos</span> para el acceso anticipado
          </p>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-2.5 h-2.5 bg-accent-500 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

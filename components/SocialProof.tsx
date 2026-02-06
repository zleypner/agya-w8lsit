'use client'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function SocialProof() {
  const { ref, isInView } = useIntersectionObserver({ threshold: 0.5 })

  return (
    <div
      ref={ref}
      className={`bg-white border-2 border-primary-100 rounded-2xl p-6 text-center shadow-md
        hover:shadow-lg hover:border-primary-200 transition-all duration-300 card-lift
        ${isInView ? 'animate-fade-in opacity-100' : 'opacity-0 scale-95'}`}
    >
      <p className="text-base text-primary-800">
        <span className="font-bold text-primary-900">Profesionales de este sector</span>{' '}
        <span className="text-primary-600">ya están en lista de acceso</span>
      </p>
      <div className="flex justify-center gap-2 mt-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`w-10 h-10 rounded-full bg-primary-900 border-3 border-white shadow-md
              transition-all duration-500
              ${isInView
                ? 'animate-scale-in opacity-100'
                : 'opacity-0 scale-0'}`}
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
        <div
          className={`w-10 h-10 rounded-full bg-accent-500 border-3 border-white shadow-md
            transition-all duration-500
            ${isInView
              ? 'animate-scale-in opacity-100'
              : 'opacity-0 scale-0'}`}
          style={{ animationDelay: '0.6s' }}
        />
      </div>
    </div>
  )
}

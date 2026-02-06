'use client'

import { ReactNode } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  index?: number
}

export default function FeatureCard({ icon, title, description, index = 0 }: FeatureCardProps) {
  const { ref, isInView } = useIntersectionObserver({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl border-2 border-primary-100 p-6 md:p-8 shadow-md
        hover:shadow-xl hover:border-primary-200 hover:-translate-y-2
        transition-all duration-300 card-lift group
        ${isInView ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Icon with hover effect */}
      <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 mb-4
        group-hover:scale-110 group-hover:bg-primary-100 transition-all duration-300">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-primary-900 mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-primary-600 leading-relaxed">
        {description}
      </p>
    </div>
  )
}

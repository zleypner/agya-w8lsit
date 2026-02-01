import { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  index?: number
}

export default function FeatureCard({ icon, title, description, index = 0 }: FeatureCardProps) {
  return (
    <div
      className="bg-white rounded-2xl border-2 border-primary-100 p-6 md:p-8 shadow-md hover:shadow-lg hover:border-primary-200 transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 mb-4">
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

'use client'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: 'fade-in-up' | 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'scale-in'
  delay?: number
  threshold?: number
}

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, isInView } = useIntersectionObserver({ threshold })

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ${
        isInView
          ? `animate-${animation} opacity-100`
          : 'opacity-0 translate-y-8'
      }`}
      style={{
        animationDelay: `${delay}s`,
        animationFillMode: 'forwards'
      }}
    >
      {children}
    </div>
  )
}

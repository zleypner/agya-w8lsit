'use client'

import Image from 'next/image'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import client1 from '@/assets/clients/client (1).png'
import client2 from '@/assets/clients/client (2).png'
import client3 from '@/assets/clients/client (3).png'
import client4 from '@/assets/clients/client (4).png'
import client5 from '@/assets/clients/client (5).png'
import client6 from '@/assets/clients/client (6).png'

const clientImages = [client1, client2, client3, client4, client5, client6]

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
      <div className="flex justify-center items-center gap-2 mt-4">
        {clientImages.map((src, i) => (
          <div
            key={i}
            className={`relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0
              transition-all duration-500
              ${isInView
                ? 'animate-scale-in opacity-100'
                : 'opacity-0 scale-0'}`}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <Image
              src={src}
              alt={`Profesional en lista ${i + 1}`}
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

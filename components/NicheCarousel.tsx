'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Apple, Palette, Dumbbell, Brain, Scissors, HeartPulse, LucideIcon } from 'lucide-react'

interface Niche {
  slug: string
  name: string
  tagline: string
  Icon: LucideIcon
  image: string
}

const niches: Niche[] = [
  {
    slug: 'nutricionistas',
    name: 'Nutricionistas',
    tagline: 'Planes, seguimiento y recordatorios para pacientes recurrentes.',
    Icon: Apple,
    image: '/niches/nutricionistas.jpg',
  },
  {
    slug: 'tatuadores',
    name: 'Tatuadores',
    tagline: 'Sesiones múltiples, portfolios y aprobaciones de diseños.',
    Icon: Palette,
    image: '/niches/tatuadores.jpg',
  },
  {
    slug: 'fisioterapia',
    name: 'Fisioterapia',
    tagline: 'Evolución de pacientes, planes de rehabilitación y ejercicios.',
    Icon: Dumbbell,
    image: '/niches/fisioterapia.jpg',
  },
  {
    slug: 'psicologos',
    name: 'Psicólogos',
    tagline: 'Historiales seguros, privacidad y sesiones confidenciales.',
    Icon: Brain,
    image: '/niches/psicologos.jpg',
  },
  {
    slug: 'estilistas',
    name: 'Estilistas',
    tagline: 'Inventario, preferencias de clientes y servicios combinados.',
    Icon: Scissors,
    image: '/niches/estilistas.jpg',
  },
  {
    slug: 'entrenadores',
    name: 'Entrenadores Personales',
    tagline: 'Rutinas personalizadas, seguimiento de progreso y planes de entrenamiento.',
    Icon: HeartPulse,
    image: '/niches/entrenadores.jpg',
  },
]

export default function NicheCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            AgendaYaa se adapta a tu negocio
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Elegí tu rubro y entrá a la lista de acceso anticipado.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative px-16">
          {/* Navigation Arrows - Desktop */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-primary-900 hover:bg-primary-50 transition-colors"
            aria-label="Anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-primary-900 hover:bg-primary-50 transition-colors"
            aria-label="Siguiente"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4 md:mx-0 md:px-0"
          >
            {niches.map((niche) => (
              <Link
                key={niche.slug}
                href={`/${niche.slug}`}
                className="flex-shrink-0 w-[280px] md:w-[300px] snap-start"
              >
                <div className="bg-white rounded-2xl border-2 border-primary-100 overflow-hidden h-full shadow-md hover:shadow-xl hover:border-primary-300 hover:-translate-y-2 transition-all duration-300 group">
                  {/* Image */}
                  <div className="relative w-full h-40 overflow-hidden">
                    <Image
                      src={niche.image}
                      alt={niche.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Icon overlay */}
                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                      <niche.Icon className="w-5 h-5 text-primary-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-primary-900 mb-2">
                      {niche.name}
                    </h3>

                    {/* Tagline */}
                    <p className="text-primary-600 text-sm mb-4 leading-relaxed">
                      {niche.tagline}
                    </p>

                    {/* CTA */}
                    <span className="inline-flex items-center text-accent-600 font-semibold text-sm group-hover:text-accent-700 transition-colors">
                      Ver página
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Pagination Dots - Mobile */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {niches.map((niche, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-primary-300"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

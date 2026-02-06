import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import WaitlistForm from '@/components/WaitlistForm'
import SocialProof from '@/components/SocialProof'
import AuthorityBadge from '@/components/AuthorityBadge'
import FeatureCard from '@/components/FeatureCard'
import FAQ from '@/components/FAQ'
import { Calendar, Users, Megaphone, Check } from 'lucide-react'
import { MetricsSkeleton, CarouselSkeleton } from '@/components/ui/Skeleton'

// Lazy load below-fold components for better initial load performance
const NicheCarousel = dynamic(() => import('@/components/NicheCarousel'), {
  loading: () => <CarouselSkeleton />,
})

const MetricsSection = dynamic(() => import('@/components/MetricsSection'), {
  loading: () => <MetricsSkeleton />,
})

const features = [
  {
    icon: <Calendar className="w-7 h-7" />,
    title: 'Gestión de citas',
    description: 'Reservas online 24/7, calendario inteligente y confirmaciones automáticas por WhatsApp.',
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: 'Gestión de clientes',
    description: 'Historial, notas, preferencias y seguimiento para que vuelvan una y otra vez.',
  },
  {
    icon: <Megaphone className="w-7 h-7" />,
    title: 'Marketing y fidelización',
    description: 'Mensajes, promociones y recordatorios que reducen ausencias y aumentan reservas.',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Background Blobs - Subtle on dark background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] blob-blue"></div>
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] blob-orange"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] blob-light"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* ========== HERO SECTION ========== */}
        <section className="pt-12 md:pt-20 pb-16 md:pb-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
              {/* Headline */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up leading-tight">
                Tu agenda, cobros y clientes
                <br />
                <span className="text-gradient-accent">en un solo lugar</span>
              </h1>

              {/* Hero Video */}
              <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="relative max-w-3xl mx-auto">
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/20 hover:ring-white/30 transition-all duration-300">
                    <video
                      src="/hero/hero-video.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Hecho para profesionales que viven de sus citas. Reservas online, recordatorios por WhatsApp y pagos sin fricción.
              </p>

              {/* Authority Badge */}
              <div className="mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <AuthorityBadge />
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <Link
                  href="#waitlist"
                  className="inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-[0.98] shadow-lg shadow-accent-500/30 btn-interactive"
                >
                  Unirme a la lista
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="#niches"
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full border-2 border-white/30 hover:border-white/50 transition-all duration-300 backdrop-blur-sm hover:scale-105 active:scale-[0.98]"
                >
                  Ver rubros
                </Link>
              </div>

              {/* Quick Proof */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <span className="flex items-center gap-2 hover:text-white transition-colors">
                  <Check className="w-4 h-4 text-accent-400" />
                  Acceso anticipado
                </span>
                <span className="flex items-center gap-2 hover:text-white transition-colors">
                  <Check className="w-4 h-4 text-accent-400" />
                  Cupos limitados
                </span>
                <span className="flex items-center gap-2 hover:text-white transition-colors">
                  <Check className="w-4 h-4 text-accent-400" />
                  Soporte personal
                </span>
              </div>

              {/* Hero Image */}
              <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <div className="relative max-w-4xl mx-auto">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/20 hover:ring-white/40 hover:scale-[1.02] transition-all duration-300">
                      <Image
                        src="/hero/hero-1.jpg"
                        alt="Profesional de belleza"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/20 hover:ring-white/40 hover:scale-[1.02] transition-all duration-300">
                      <Image
                        src="/hero/hero-2.jpg"
                        alt="Estudio de tatuajes"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/20 hover:ring-white/40 hover:scale-[1.02] transition-all duration-300">
                      <Image
                        src="/hero/hero-3.jpg"
                        alt="Fisioterapia"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== FEATURES SECTION ========== */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ¿Qué resolvés con AgendaYaa?
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Todo lo que necesitás para gestionar tu negocio de citas, sin complicaciones.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ========== NICHES CAROUSEL ========== */}
        <div id="niches">
          <NicheCarousel />
        </div>

        {/* ========== METRICS SECTION ========== */}
        <MetricsSection />

        {/* ========== SOCIAL PROOF ========== */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4">
            <SocialProof />
          </div>
        </section>

        {/* ========== WAITLIST SECTION ========== */}
        <section id="waitlist" className="py-16 md:py-24">
          <div className="max-w-2xl mx-auto px-4">
            <div className="card-friendly p-8 md:p-10 hover:shadow-2xl transition-shadow duration-300">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                  Entrás primero. Pagás menos. Crecés más.
                </h2>
                <p className="text-primary-600 leading-relaxed">
                  Sumate a la lista y te avisamos cuando abramos tu rubro. Si entrás temprano, asegurás precio fundador.
                </p>
              </div>

              {/* Form */}
              <WaitlistForm niche="general" />
            </div>
          </div>
        </section>

        {/* ========== FAQ SECTION ========== */}
        <FAQ />

        {/* ========== FOOTER ========== */}
        <footer className="py-12 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Logo */}
              <div className="text-2xl font-bold text-white">
                AgendaYaa
              </div>

              {/* Links */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
                <Link href="/nutricionistas" className="hover:text-white transition-colors">
                  Nutricionistas
                </Link>
                <Link href="/tatuadores" className="hover:text-white transition-colors">
                  Tatuadores
                </Link>
                <Link href="/fisioterapia" className="hover:text-white transition-colors">
                  Fisioterapia
                </Link>
                <Link href="/psicologos" className="hover:text-white transition-colors">
                  Psicólogos
                </Link>
                <Link href="/estilistas" className="hover:text-white transition-colors">
                  Estilistas
                </Link>
                <Link href="/entrenadores" className="hover:text-white transition-colors">
                  Entrenadores
                </Link>
              </div>

              {/* Copyright */}
              <div className="text-sm text-white/40">
                © {new Date().getFullYear()} AgendaYaa
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

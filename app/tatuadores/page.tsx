import WaitlistForm from '@/components/WaitlistForm'
import PainPoint from '@/components/PainPoint'
import SocialProof from '@/components/SocialProof'
import AuthorityBadge from '@/components/AuthorityBadge'
import PresaleSection from '@/components/PresaleSection'

export const metadata = {
  title: 'AgendaYaa para Tatuadores - Lista de Espera',
  description: 'Plataforma especializada para tatuadores que maneja citas complejas, portfolios, diseños personalizados y seguimiento de sesiones.',
}

export default function TatuadoresPage() {
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
        {/* Hero Section */}
        <section className="pt-12 md:pt-20 pb-16 md:pb-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
              {/* Headline */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up leading-tight">
                Gestioná tu estudio de tatuajes
                <br />
                <span className="text-gradient-accent">con la complejidad que necesitás</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Los sistemas genéricos no entienden tu trabajo: sesiones múltiples, diseños personalizados, portfolios y seguimiento de cicatrización. AgendaYaa está construido para tatuadores profesionales.
              </p>

              {/* Authority Badge */}
              <div className="mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <AuthorityBadge />
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="card-friendly p-8 md:p-10 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-primary-900 mb-8">
                ¿Te identificás con estos problemas?
              </h2>
              <ul className="space-y-4">
                <PainPoint index={0}>
                  Las herramientas estándar no manejan bien tatuajes que requieren múltiples sesiones con seguimiento entre cada una
                </PainPoint>
                <PainPoint index={1}>
                  No hay forma eficiente de gestionar portfolios de diseños, aprobaciones de clientes y modificaciones en tiempo real
                </PainPoint>
                <PainPoint index={2}>
                  La gestión de citas se complica cuando necesitás coordinar consultas previas, sesiones de trabajo y seguimientos post-tatuaje
                </PainPoint>
                <PainPoint index={3}>
                  Perdés información valiosa sobre preferencias de clientes, historial de trabajos y referencias para futuros diseños
                </PainPoint>
              </ul>
            </div>
          </div>
        </section>

        {/* Value Promise */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="card-friendly p-8 md:p-10 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-primary-900 mb-4">
                AgendaYaa está diseñado para tatuadores
              </h2>
              <p className="text-primary-700 leading-relaxed text-lg">
                Una plataforma que entiende la complejidad de tu trabajo: sesiones múltiples, gestión de diseños, portfolios, seguimiento de cicatrización y comunicación con clientes. Todo adaptado a tu flujo de trabajo real.
              </p>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4">
            <SocialProof />
          </div>
        </section>

        {/* Presale Section */}
        <PresaleSection niche="tatuadores" />

        {/* Waitlist Form */}
        <section className="py-16 md:py-24">
          <div className="max-w-2xl mx-auto px-4">
            <div className="card-friendly p-8 md:p-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                  Unite a la lista de espera
                </h2>
                <p className="text-primary-600 leading-relaxed">
                  Sumate y te avisamos cuando abramos acceso para tatuadores. Entrás temprano, asegurás precio fundador.
                </p>
              </div>
              <WaitlistForm niche="tatuadores" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

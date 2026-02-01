import WaitlistForm from '@/components/WaitlistForm'
import PainPoint from '@/components/PainPoint'
import SocialProof from '@/components/SocialProof'
import AuthorityBadge from '@/components/AuthorityBadge'
import PresaleSection from '@/components/PresaleSection'

export const metadata = {
  title: 'AgendaYaa para Entrenadores Personales - Lista de Espera',
  description: 'Plataforma especializada para entrenadores personales que gestiona rutinas, seguimiento de progreso y planes de entrenamiento personalizados.',
}

export default function EntrenadoresPage() {
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
                Gestioná tus clientes y entrenamientos
                <br />
                <span className="text-gradient-accent">como un profesional</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Las herramientas genéricas no entienden tu flujo de trabajo. AgendaYaa está diseñado para entrenadores personales que necesitan gestionar rutinas, seguimiento de progreso y comunicación efectiva con sus clientes.
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
                  Las herramientas estándar no permiten crear y compartir rutinas de entrenamiento personalizadas fácilmente
                </PainPoint>
                <PainPoint index={1}>
                  Es difícil hacer seguimiento del progreso de cada cliente: peso, medidas, rendimiento y objetivos
                </PainPoint>
                <PainPoint index={2}>
                  No hay una forma eficiente de gestionar horarios flexibles y sesiones que cambian según disponibilidad
                </PainPoint>
                <PainPoint index={3}>
                  Perdés tiempo coordinando citas por WhatsApp y recordando manualmente a cada cliente
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
                AgendaYaa está diseñado para entrenadores personales
              </h2>
              <p className="text-primary-700 leading-relaxed text-lg">
                Una plataforma que entiende tu negocio: gestión de rutinas personalizadas, seguimiento de progreso, comunicación con clientes y agenda flexible. Todo para que puedas enfocarte en entrenar, no en administrar.
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
        <PresaleSection niche="entrenadores" />

        {/* Waitlist Form */}
        <section className="py-16 md:py-24">
          <div className="max-w-2xl mx-auto px-4">
            <div className="card-friendly p-8 md:p-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                  Unite a la lista de espera
                </h2>
                <p className="text-primary-600 leading-relaxed">
                  Sumate y te avisamos cuando abramos acceso para entrenadores personales. Entrás temprano, asegurás precio fundador.
                </p>
              </div>
              <WaitlistForm niche="entrenadores" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

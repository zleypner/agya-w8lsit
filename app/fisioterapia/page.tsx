import WaitlistForm from '@/components/WaitlistForm'
import PainPoint from '@/components/PainPoint'
import SocialProof from '@/components/SocialProof'
import AuthorityBadge from '@/components/AuthorityBadge'
import PresaleSection from '@/components/PresaleSection'

export const metadata = {
  title: 'AgendaYaa para Fisioterapeutas - Lista de Espera',
  description: 'Sistema especializado para fisioterapeutas que gestiona sesiones de tratamiento, seguimiento de evolución y planes de rehabilitación.',
}

export default function FisioterapiaPage() {
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
                Optimizá tu práctica de fisioterapia
                <br />
                <span className="text-gradient-accent">con seguimiento especializado</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Los sistemas genéricos no capturan la evolución de tus pacientes ni facilitan el seguimiento entre sesiones. AgendaYaa está pensado para fisioterapeutas que necesitan rastrear progreso y mantener comunicación efectiva.
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
                  Las herramientas estándar no permiten un seguimiento detallado de la evolución del paciente entre sesiones
                </PainPoint>
                <PainPoint index={1}>
                  Es difícil mantener comunicación efectiva con pacientes sobre ejercicios en casa y progreso fuera de la consulta
                </PainPoint>
                <PainPoint index={2}>
                  No hay una forma clara de gestionar planes de tratamiento que requieren múltiples sesiones con objetivos específicos
                </PainPoint>
                <PainPoint index={3}>
                  La coordinación de citas se complica cuando necesitás ajustar frecuencia según la evolución de cada paciente
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
                AgendaYaa está diseñado para fisioterapeutas
              </h2>
              <p className="text-primary-700 leading-relaxed text-lg">
                Una plataforma que entiende tu práctica: seguimiento de evolución, planes de rehabilitación, comunicación con pacientes y gestión de sesiones adaptadas al progreso. Todo enfocado en mejorar los resultados de tus tratamientos.
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
        <PresaleSection niche="fisioterapia" />

        {/* Waitlist Form */}
        <section className="py-16 md:py-24">
          <div className="max-w-2xl mx-auto px-4">
            <div className="card-friendly p-8 md:p-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                  Unite a la lista de espera
                </h2>
                <p className="text-primary-600 leading-relaxed">
                  Sumate y te avisamos cuando abramos acceso para fisioterapeutas. Entrás temprano, asegurás precio fundador.
                </p>
              </div>
              <WaitlistForm niche="fisioterapia" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

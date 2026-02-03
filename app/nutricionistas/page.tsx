import PainPoint from '@/components/PainPoint'
import SocialProof from '@/components/SocialProof'
import AuthorityBadge from '@/components/AuthorityBadge'
import PresaleSection from '@/components/PresaleSection'
import SectionHeader from '@/components/SectionHeader'
import WaitlistSection from '@/components/WaitlistSection'

export const metadata = {
  title: 'AgendaYaa para Nutricionistas - Lista de Espera',
  description: 'Herramienta especializada para nutricionistas que simplifica la gestión de consultas, seguimiento de pacientes y planes nutricionales.',
}

export default function NutricionistasPage() {
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
                Gestioná tus consultas nutricionales
                <br />
                <span className="text-gradient-accent">sin perder tiempo</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Las herramientas genéricas no entienden tu flujo de trabajo. AgendaYaa está diseñado específicamente para nutricionistas que necesitan seguimiento recurrente, historiales de pacientes y planes personalizados.
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
              <div className="mb-8">
                <SectionHeader title="¿Te identificás con estos problemas?" variant="dark" />
              </div>
              <ul className="space-y-4">
                <PainPoint index={0}>
                  Las herramientas genéricas no manejan bien el seguimiento recurrente de pacientes que necesitan múltiples consultas
                </PainPoint>
                <PainPoint index={1}>
                  Perdés tiempo registrando manualmente historiales nutricionales y evolución de cada paciente
                </PainPoint>
                <PainPoint index={2}>
                  No hay una forma eficiente de crear y compartir planes nutricionales personalizados con tus pacientes
                </PainPoint>
                <PainPoint index={3}>
                  La gestión de pagos y sesiones se vuelve complicada cuando trabajás con planes de tratamiento a largo plazo
                </PainPoint>
              </ul>
            </div>
          </div>
        </section>

        {/* Value Promise */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="card-friendly p-8 md:p-10 animate-fade-in-up">
              <SectionHeader
                title="AgendaYaa está diseñado para nutricionistas"
                subtitle="Una plataforma que entiende tu flujo de trabajo: seguimiento de pacientes, historiales nutricionales, planes personalizados y gestión de consultas recurrentes. Todo en un solo lugar, sin complicaciones."
                variant="dark"
              />
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
        <PresaleSection niche="nutricionistas" />

        <WaitlistSection
          title="Unite a la lista de espera"
          subtitle="Sumate y te avisamos cuando abramos acceso para nutricionistas. Entrás temprano, asegurás precio fundador."
          niche="nutricionistas"
        />
      </div>
    </div>
  )
}

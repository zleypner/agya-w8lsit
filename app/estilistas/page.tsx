import PainPoint from '@/components/PainPoint'
import SocialProof from '@/components/SocialProof'
import AuthorityBadge from '@/components/AuthorityBadge'
import PresaleSection from '@/components/PresaleSection'
import SectionHeader from '@/components/SectionHeader'
import WaitlistSection from '@/components/WaitlistSection'

export const metadata = {
  title: 'AgendaYaa para Estilistas - Lista de Espera',
  description: 'Plataforma especializada para estilistas y salones de belleza que gestiona citas, inventario de productos y preferencias de clientes.',
}

export default function EstilistasPage() {
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
                Gestioná tu salón enfocándote
                <br />
                <span className="text-gradient-accent">en lo que importa: tus clientes</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Los sistemas genéricos no entienden la complejidad de gestionar productos, preferencias de clientes y servicios personalizados. AgendaYaa está hecho para estilistas profesionales.
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
                  La gestión de inventario de productos (tintes, mascarillas, accesorios) se vuelve caótica y genera pérdidas por productos caducados
                </PainPoint>
                <PainPoint index={1}>
                  No hay una forma eficiente de recordar preferencias de clientes, historial de servicios y recomendaciones personalizadas
                </PainPoint>
                <PainPoint index={2}>
                  Las herramientas estándar no manejan bien la complejidad de servicios que combinan múltiples tratamientos en una sola cita
                </PainPoint>
                <PainPoint index={3}>
                  Perdés oportunidades de fidelización porque no tenés un sistema claro para recordar cuándo los clientes necesitan retoques o mantenimiento
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
                title="AgendaYaa está diseñado para estilistas"
                subtitle="Una plataforma que entiende tu negocio: gestión de inventario especializada, historial de clientes, preferencias personalizadas y recordatorios inteligentes. Todo para que puedas enfocarte en crear, no en administrar."
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
        <PresaleSection niche="estilistas" />

        <WaitlistSection
          title="Unite a la lista de espera"
          subtitle="Sumate y te avisamos cuando abramos acceso para estilistas. Entrás temprano, asegurás precio fundador."
          niche="estilistas"
        />
      </div>
    </div>
  )
}

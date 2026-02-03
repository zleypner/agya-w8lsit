'use client'

import { useState } from 'react'
import SectionHeader from './SectionHeader'

const faqs = [
  {
    question: '¿Qué es AgendaYaa?',
    answer: 'AgendaYaa es una plataforma de gestión de citas diseñada específicamente para profesionales de servicios. Incluye agenda online, recordatorios por WhatsApp, gestión de clientes y cobros — todo en un solo lugar.',
  },
  {
    question: '¿Cuándo lanzan?',
    answer: 'Estamos en fase de preventa. Los primeros rubros (nutricionistas, tatuadores, fisioterapeutas, psicólogos y estilistas) se van a ir habilitando gradualmente. Si te sumás a la lista, te avisamos cuando tu rubro esté listo.',
  },
  {
    question: '¿Cómo funciona la lista de espera?',
    answer: 'Al registrarte, entrás a nuestra lista de acceso anticipado. Cuando lancemos tu rubro, te contactamos con una oferta exclusiva de precio fundador. No tiene costo unirte y no hay compromiso.',
  },
  {
    question: '¿Voy a poder cobrar online?',
    answer: 'Sí. AgendaYaa va a incluir integración con pasarelas de pago para que puedas cobrar señas, sesiones completas o paquetes directamente desde la plataforma.',
  },
  {
    question: '¿Sirve si trabajo solo/a o con equipo?',
    answer: 'Sirve para ambos casos. Si trabajás solo/a, vas a tener todo lo que necesitás para gestionar tu agenda. Si tenés equipo, vas a poder agregar colaboradores y gestionar múltiples agendas.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header - light variant for contrast on dark background */}
        <div className="mb-12">
          <SectionHeader
            title="Preguntas frecuentes"
            subtitle="Todo lo que necesitás saber sobre AgendaYaa."
            variant="light"
          />
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border-2 border-primary-100 overflow-hidden shadow-sm hover:border-primary-200 transition-colors"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-primary-900 pr-4">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-primary-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-5 md:px-6 pb-5 md:pb-6 text-primary-700 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

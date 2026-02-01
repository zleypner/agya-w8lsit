'use client'

import { useState } from 'react'
import { PartyPopper, Loader2, Check } from 'lucide-react'

interface WaitlistFormProps {
  niche: string
}

export default function WaitlistForm({ niche }: WaitlistFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          niche,
        }),
      })

      if (!response.ok) {
        throw new Error('Error al enviar el formulario')
      }

      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', email: '', whatsapp: '' })
      }, 3000)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Hubo un error. Por favor intentá de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (isSubmitted) {
    return (
      <div className="bg-success-50 border-2 border-success-200 rounded-2xl p-8 text-center animate-scale-in shadow-lg">
        <div className="flex justify-center mb-4 animate-bounce-slow">
          <PartyPopper className="w-12 h-12 text-success-600" />
        </div>
        <div className="text-success-700 font-bold text-xl mb-2">
          ¡Te has unido exitosamente!
        </div>
        <p className="text-sm text-success-600">
          Te notificaremos cuando tengas acceso anticipado.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in">
      <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <label htmlFor="name" className="block text-sm font-semibold text-primary-800 mb-2">
          Nombre completo
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3.5 border-2 border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 hover:border-primary-300 bg-white"
          placeholder="Tu nombre"
        />
      </div>

      <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <label htmlFor="email" className="block text-sm font-semibold text-primary-800 mb-2">
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3.5 border-2 border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 hover:border-primary-300 bg-white"
          placeholder="tu@email.com"
        />
      </div>

      <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <label htmlFor="whatsapp" className="block text-sm font-semibold text-primary-800 mb-2">
          WhatsApp <span className="text-primary-400 font-normal">(opcional)</span>
        </label>
        <input
          type="tel"
          id="whatsapp"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
          className="w-full px-4 py-3.5 border-2 border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 hover:border-primary-300 bg-white"
          placeholder="+506 8888 8888"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary-900 hover:bg-primary-800 text-white font-bold py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg shadow-primary-900/30 hover:shadow-xl hover:shadow-primary-900/40 animate-fade-in-up"
        style={{ animationDelay: '0.4s' }}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="w-5 h-5 animate-spin" />
            Uniéndote...
          </span>
        ) : (
          'Unirme a la lista de espera'
        )}
      </button>

      <div className="text-sm text-primary-600 text-center space-y-2 pt-3 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <div className="flex items-center justify-center gap-2">
          <Check className="w-4 h-4 text-accent-500" />
          <span>Acceso anticipado</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Check className="w-4 h-4 text-accent-500" />
          <span>Sin spam</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Check className="w-4 h-4 text-accent-500" />
          <span>Cancelás cuando quieras</span>
        </div>
      </div>
    </form>
  )
}

import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, whatsapp, niche } = body

    if (!name || !email || !niche) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    const supabase = createServerSupabase()

    const { error } = await supabase.from('waitlist').insert({
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      whatsapp: whatsapp ? String(whatsapp).trim() : null,
      niche: String(niche).trim(),
    })

    if (error) {
      console.error('Supabase waitlist insert error:', error)
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'Este correo ya está en la lista de espera' },
          { status: 409 }
        )
      }
      return NextResponse.json(
        { error: 'Error al procesar tu solicitud' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Te has unido exitosamente a la lista de espera',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing waitlist signup:', error)
    return NextResponse.json(
      { error: 'Error al procesar tu solicitud' },
      { status: 500 }
    )
  }
}

import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, whatsapp, niche } = body

    // Validate required fields
    if (!name || !email || !niche) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // TODO: Implement actual storage
    // Examples:
    // - Save to database (Prisma, Supabase, etc.)
    // - Send to email service (SendGrid, Mailchimp, etc.)
    // - Save to Google Sheets via API
    // - Send to CRM (HubSpot, Salesforce, etc.)

    console.log('New waitlist signup:', {
      name,
      email,
      whatsapp,
      niche,
      timestamp: new Date().toISOString(),
    })

    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 500))

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

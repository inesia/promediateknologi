import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const res = await fetch('https://www.promediateknologi.id/mitra/v2?date=1770872034', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`)
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (error: any) {
    console.error('Error fetching mitra data:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

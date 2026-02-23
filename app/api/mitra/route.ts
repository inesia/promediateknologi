import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const search = searchParams.get('search') || ''
  const category = searchParams.get('category') || ''
  const region = searchParams.get('region') || ''
  const page = searchParams.get('page') || '1'
  const limit = searchParams.get('limit') || '100'

  try {
    let params = `?page=${page}&limit=${limit}`
    if (search) {
      params += '&pencarian=' + encodeURIComponent(search);
    }

    if (category && category !== 'all') {
      params += '&tipe=' + encodeURIComponent(category);
    }

    if (region && region !== 'all') {
      params += '&daerah=' + encodeURIComponent(region);
    }

    const source = await fetch(`${process.env.NEXT_API_URL}/clients${params}`)

    if (!source.ok) {
      throw new Error(`Failed to fetch data: ${source.status} ${source.statusText}`)
    }

    const data = await source.json()
    return NextResponse.json(data)
  } catch (error: any) {
    console.error("getClients error:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

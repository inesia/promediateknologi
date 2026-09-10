import { NextRequest, NextResponse } from 'next/server'
import { getClients, getInfluencerClient } from '@/controllers/base.controller'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl
    const type = searchParams.get('type') || 'media'
    const kategori = searchParams.get('kategori') || searchParams.get('category') || 'all'
    const daerah = searchParams.get('daerah') || searchParams.get('provinsi') || 'all'
    const page = Number(searchParams.get('page') || '1')
    const pencarian = searchParams.get('pencarian') || searchParams.get('q') || ''

    let clientsRes
    if (type === 'influencer') {
      clientsRes = await getInfluencerClient({
        search: pencarian,
        page,
        limit: 24,
      })
    } else {
      clientsRes = await getClients({
        category: kategori,
        region: daerah,
        search: pencarian,
        page,
        limit: 24,
      })
    }

    const rawList = clientsRes?.data || []
    const data = rawList.map((client: any) => ({
      id: client.code || client.id,
      name: client.name,
      logo: client.path,
      url: client.url,
      region: client.region,
      type: client.type,
    }))

    const lastPage = clientsRes?.meta?.last_page || 1
    const hasMore = page < lastPage

    return NextResponse.json({
      data,
      hasMore,
      page,
      total: clientsRes?.meta?.total ?? data.length,
    })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    console.error('Error fetching mitra data:', error)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

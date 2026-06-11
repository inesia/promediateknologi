import { NextRequest, NextResponse } from 'next/server'
import { parseMitraFromHtml, parseMitraHasMore } from '@/lib/parseMitraHtml'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl
    const kategori = searchParams.get('kategori') || searchParams.get('category') || 'all'
    const daerah = searchParams.get('daerah') || searchParams.get('provinsi') || 'all'
    const page = searchParams.get('page') || '1'
    const pencarian = searchParams.get('pencarian') || searchParams.get('q') || ''

    const url = new URL('https://www.promediateknologi.id/mitra')
    url.searchParams.set('kategori', kategori)
    url.searchParams.set('daerah', daerah)
    if (page !== '1') url.searchParams.set('page', page)
    if (pencarian.trim()) url.searchParams.set('pencarian', pencarian.trim())

    const res = await fetch(url.toString(), {
      headers: {
        'User-Agent': 'PromediaWeb/1.0',
      },
      next: { revalidate: 3600 },
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`)
    }

    const html = await res.text()
    const data = parseMitraFromHtml(html)
    const pageNumber = Number(page)
    const hasMore = parseMitraHasMore(html, pageNumber)

    return NextResponse.json({
      data,
      hasMore,
      page: pageNumber,
      total: data.length,
    })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    console.error('Error fetching mitra data:', error)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

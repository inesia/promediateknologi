import clients from "@/lib/json/client.json"
import { fetchWithPromediaAuth } from "@/lib/promedia-auth"

export async function getDataHome() {
    try {
        const source = await fetch(`${process.env.NEXT_API_URL}/home`, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
                "Accept": "application/json, text/plain, */*",
                "Accept-Language": "en-US,en;q=0.9",
                "Cache-Control": "no-cache",
                "Pragma": "no-cache",
                "Referer": "https://www.ayoindonesia.com/",
            }
        })

        if (!source.ok) {
            console.warn(`getDataHome failed: ${source.status} ${source.statusText}. Using fallback data.`)
            return {
                data: {
                    id: 1,
                    title: "Promedia Group",
                    description: "Promedia Group - Mavericks & Ahead",
                    slug: "home"
                },
                meta: { code: 200, message: "Fallback data used" }
            }
        }

        const contentType = source.headers.get("content-type")
        if (!contentType || !contentType.includes("application/json")) {
            console.warn(`getDataHome returned non-JSON response. Using fallback data.`)
            return {
                data: {
                    id: 1,
                    title: "Promedia Group",
                    description: "Promedia Group - Mavericks & Ahead",
                    slug: "home"
                },
                meta: { code: 200, message: "Fallback data used" }
            }
        }

        const data = await source.json()
        return data
    } catch (error) {
        console.error("getDataHome error:", error)
        return null
    }
}

export async function getPageHome() {
    try {
        const source = await fetch(`${process.env.NEXT_API_URL}/page/home`, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
                "Accept": "application/json, text/plain, */*",
                "Accept-Language": "en-US,en;q=0.9",
                "Cache-Control": "no-cache",
                "Pragma": "no-cache",
                "Referer": "https://www.ayoindonesia.com/",
            }
        })

        if (!source.ok) {
            console.warn(`getPageHome failed: ${source.status} ${source.statusText}. Using fallback data.`)
            return {
                data: {
                    id: 1,
                    title: "Promedia Group",
                    description: "Promedia Group - Mavericks & Ahead | Ekosistem media digital terintegrasi pertama di Indonesia",
                    slug: "home"
                },
                meta: { code: 200, message: "Fallback data used" }
            }
        }

        const contentType = source.headers.get("content-type")
        if (!contentType || !contentType.includes("application/json")) {
            console.warn(`getPageHome returned non-JSON response. Using fallback data.`)
            return {
                data: {
                    id: 1,
                    title: "Promedia Group",
                    description: "Promedia Group - Mavericks & Ahead | Ekosistem media digital terintegrasi pertama di Indonesia",
                    slug: "home"
                },
                meta: { code: 200, message: "Fallback data used" }
            }
        }

        const data = await source.json()
        return data
    } catch (error) {
        console.error("getPageHome error:", error)
        return null
    }
}

export async function getInfluencerClient({ search, page = 1, limit = 24 }: { search?: string; page?: number; limit?: number } = {}) {
    try {
        const queryParams = new URLSearchParams()
        queryParams.set('template', 'Influencer')
        if (page) queryParams.set('page', String(page))
        if (limit) queryParams.set('limit', String(limit))
        if (search && search.trim()) queryParams.set('pencarian', search.trim())

        const queryString = queryParams.toString() ? `?${queryParams.toString()}` : ''
        const source = await fetch(`${process.env.NEXT_API_URL}/clients${queryString}`, {
            next: { revalidate: 3600 }
        })

        const data = await source.json()
        return data
    } catch (error) {
        console.error("getInfluencerClient error:", error)
        return null
    }
}

export async function getClients({
    category,
    region,
    search,
    page = 1,
    limit = 24,
}: {
    category?: string
    region?: string
    search?: string
    page?: number
    limit?: number
} = {}) {
    try {
        const queryParams = new URLSearchParams()
        if (page) queryParams.set('page', String(page))
        if (limit) queryParams.set('limit', String(limit))
        if (search && search.trim()) queryParams.set('pencarian', search.trim())
        if (region && region !== 'all') queryParams.set('daerah', region)
        if (category && category !== 'all') queryParams.set('tipe', category)

        const queryString = queryParams.toString() ? `?${queryParams.toString()}` : ''
        const source = await fetch(`${process.env.NEXT_API_URL}/clients${queryString}`, {
            next: { revalidate: 3600 }
        })

        const data = await source.json()
        return data
    } catch (error) {
        console.error("getClients error:", error)
        return null
    }
}

export async function getRegions() {
    try {
        const source = await fetch(`${process.env.NEXT_API_URL}/regions`, {
            next: { revalidate: 86400 }
        })
        const data = await source.json()
        return data
    } catch (error) {
        console.error("getRegions error:", error)
        return { data: [] }
    }
}

export async function getCategoriesSite() {
    try {
        const source = await fetch(`${process.env.NEXT_API_URL}/types`, {
            next: { revalidate: 86400 }
        })
        const data = await source.json()
        return data
    } catch (error) {
        console.error("getCategoriesSite error:", error)
        return { data: [] }
    }
}

export async function getRecentNews() {
    try {
        const source = await fetch(`${process.env.NEXT_API_NEWS_URL}/article/latest/?page=1&site_id=143`, {
            method: "GET",
            headers: {
                "Accept": "application/vnd.promedia+json; version=1.0",
                "Authorization": `Bearer ${process.env.NEXT_KEY_NEWS_URL}`,
            },
        })
        if (!source.ok) {
            console.warn(`getRecentNews failed: ${source.status} ${source.statusText}. Using fallback data.`)
            return { "meta": { "code": 404, "status": false, "message": "Data tidak ditemukan" }, "data": [] } // Empty hits or mock data
        }

        const data = await source.json()
        return data
    } catch (error) {
        console.error("getRecentNews error:", error)
        return { "meta": { "code": 404, "status": false, "message": "Data tidak ditemukan" }, "data": [] }
    }
}

export async function getClient() {
    return clients
}

export async function getNetworkLivePulse() {
    try {
        const source = await fetchWithPromediaAuth(`${process.env.NEXT_BASE_URL_GO24}/article/latest/?page=1`, {
            method: "GET",
            headers: {
                "Accept": "application/vnd.promedia+json; version=1.0",
                "Content-Type": "application/json",
            }
        })
        if (!source.ok) {
            console.warn(`getRecentNewsWithAuth failed: ${source.status} ${source.statusText}. Using fallback data.`)
            return { "meta": { "code": 404, "status": false, "message": "Data tidak ditemukan" }, "data": [] }
        }

        const data = await source.json()
        return data
    } catch (error) {
        console.error("getRecentNewsWithAuth error:", error)
        return { "meta": { "code": 404, "status": false, "message": "Data tidak ditemukan" }, "data": [] }
    }
}
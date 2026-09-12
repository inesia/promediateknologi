import { getNetworkLivePulse } from '@/controllers/base.controller'
import LatestNews from './LatestNews'

export default async function LatestNewsServer() {
  try {
    const news = await getNetworkLivePulse()
    return <LatestNews news={news} />
  } catch (error) {
    console.error("Latest News API error:", error)
    return <LatestNews news={{ data: { list: { latest: [] } } }} />
  }
}

import type { LucideIcon } from 'lucide-react'
import {
  Globe,
  Users,
  MapPin,
  Share2,
  Tv,
  Eye,
  MousePointerClick,
  Search,
} from 'lucide-react'
import { formatCompactStat } from '@/lib/formatNumber'

export interface ScaleMetric {
  value: number
  suffix?: string
  prefix?: string
  label: string
  sublabel?: string
  icon: LucideIcon
  decimals?: number
  /** Tampilan statistik ringkas (override AnimatedCounter) */
  display?: string
}
export const ecosystemScaleMetrics: ScaleMetric[] = [
  {
    value: 1200,
    display: formatCompactStat(1200),
    label: 'Jaringan Media Digital',
    sublabel: 'Portal & publisher di ekosistem Promedia',
    icon: Globe,
  },
  {
    value: 40000,
    display: formatCompactStat(40000),
    label: 'Kreator Konten & Jurnalis Profesional',
    sublabel: 'Tenaga kreatif dan editorial terdaftar',
    icon: Users,
  },
  {
    value: 240,
    display: formatCompactStat(240),
    label: 'Sebaran Media di Kota & Kabupaten',
    sublabel: 'Tersebar di 36 provinsi',
    icon: MapPin,
  },
  {
    value: 3000,
    display: formatCompactStat(3000),
    label: 'Akun Media Sosial Multi-Platform',
    sublabel: 'Distribusi konten lintas channel',
    icon: Share2,
  },
  {
    value: 800,
    display: formatCompactStat(800),
    label: 'Jaringan Media Pro TV',
    sublabel: 'Televisi digital berjejaring',
    icon: Tv,
  },
]

export const trafficMetrics: ScaleMetric[] = [
  {
    value: 500,
    display: '500 Million+',
    label: 'Unique Users Sepanjang Tahun',
    sublabel: 'Jangkauan audiens unik tahunan',
    icon: Eye,
  },
  {
    value: 1.5,
    display: '1.5 Billion+',
    label: 'Pageviews Sepanjang Tahun',
    sublabel: 'Volume tayangan halaman tahunan',
    icon: MousePointerClick,
    decimals: 1,
  },
  {
    value: 98,
    suffix: '%',
    label: 'Publikasi Terindeks di Halaman Utama Google Search',
    sublabel: 'High SEO authority — visibilitas organik maksimal',
    icon: Search,
  },
]
export const genderSplit = [
  { label: 'Laki-laki', percent: 48.8, color: 'bg-[#2D74B3]' },
  { label: 'Perempuan', percent: 51.2, color: 'bg-[#00AEEF]' },
]

export const ageDistribution = [
  { range: '45–54', percent: 26, highlight: true },
  { range: '25–34', percent: 22, highlight: true },
  { range: '35–44', percent: 21, highlight: true },
  { range: '55–64', percent: 14, highlight: false },
  { range: '18–24', percent: 11, highlight: false },
]

export interface InfluencerTier {
  count: number
  suffix: string
  tier: string
  description: string
}

export interface SocialPlatformStat {
  platform: string
  accounts: number
  followers: number
  views: number | null
}

export const socialPlatformStats: SocialPlatformStat[] = [
  { platform: 'TikTok', accounts: 306, followers: 50_612_594, views: 2_700_612_594 },
  { platform: 'Instagram', accounts: 158, followers: 12_361_412, views: 600_860_805 },
  { platform: 'YouTube', accounts: 576, followers: 5_723_665, views: null },
  { platform: 'Facebook', accounts: 573, followers: 3_827_753, views: null },
  { platform: 'X (Twitter)', accounts: 783, followers: 558_329, views: null },
]
export const voxproTiers: InfluencerTier[] = [
  { count: 10, suffix: '+', tier: 'Mega Influencers', description: 'Jangkauan masif & celebrity-grade impact' },
  { count: 25, suffix: '+', tier: 'Macro Influencers', description: 'Audiens luas dengan engagement kuat' },
  { count: 100, suffix: '+', tier: 'Middle Influencers', description: 'Niche authority & konversi terukur' },
  { count: 150, suffix: '+', tier: 'Micro Influencers', description: 'Komunitas loyal & cost-efficiency' },
  { count: 300, suffix: '+', tier: 'Nano Influencers', description: 'Hyper-local & authentic storytelling' },
  { count: 500, suffix: '+', tier: 'Pico Influencers', description: 'Volume tinggi untuk aktivasi skala' },
]

export const VOXPRO_TOTAL_DISPLAY = formatCompactStat(1500)
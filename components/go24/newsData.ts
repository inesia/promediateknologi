// Mock data for GO24 News Hub - replace with API later

export const CATEGORY_COLORS: Record<string, string> = {
  politik: 'bg-pink-100 text-pink-800',
  ekonomi: 'bg-emerald-100 text-emerald-800',
  olahraga: 'bg-amber-100 text-amber-800',
  hiburan: 'bg-violet-100 text-violet-800',
  otomotif: 'bg-sky-100 text-sky-800',
  tekno: 'bg-cyan-100 text-cyan-800',
}

export interface NewsItem {
  id: string
  title: string
  excerpt?: string
  media: string
  mediaLogo?: string
  category: string
  timeAgo: string
  thumbnail: string
  url?: string
}

export const MOCK_NEWS: NewsItem[] = [
  { id: '1', title: 'Pemkot Surabaya Resmikan Taman Inovasi Digital di Kawasan Darmo', media: 'JatimNetwork.com', category: 'tekno', timeAgo: 'Just Now', thumbnail: '/images/logo.webp' },
  { id: '2', title: 'DKI Gelar Festival Kuliner Nusantara di Monas', media: 'BeritaJakarta.id', category: 'hiburan', timeAgo: '2m ago', thumbnail: '/images/logo.webp' },
  { id: '3', title: 'Timnas Indonesia Siap Hadapi Laga Kualifikasi Piala Dunia', media: 'AyoBandung', category: 'olahraga', timeAgo: '5m ago', thumbnail: '/images/logo.webp' },
  { id: '4', title: 'BI Pertahankan Suku Bunga Acuan di Level 6%', media: 'SumutDaily.co', category: 'ekonomi', timeAgo: '12m ago', thumbnail: '/images/logo.webp' },
  { id: '5', title: 'Medan Kembangkan Kawasan Wisata Bahari Terintegrasi', media: 'SumutDaily.co', category: 'hiburan', timeAgo: '18m ago', thumbnail: '/images/logo.webp' },
  { id: '6', title: 'Pemprov Jabar Luncurkan Program Smart City di 27 Kabupaten', media: 'AyoBandung', category: 'tekno', timeAgo: '25m ago', thumbnail: '/images/logo.webp' },
  { id: '7', title: 'Kaltim Percepat Transisi Energi Bersih dengan Investasi PLTS', media: 'KalimantanPost.com', category: 'ekonomi', timeAgo: '32m ago', thumbnail: '/images/logo.webp' },
  { id: '8', title: 'GIIAS 2024: Daihatsu Pamerkan Mobil Listrik Terbaru', media: 'OtomotifNusantara', category: 'otomotif', timeAgo: '45m ago', thumbnail: '/images/logo.webp' },
  { id: '9', title: 'Kementan Amplifikasi Isu Pangan Nasional ke 500 Media', media: 'BeritaJakarta.id', category: 'politik', timeAgo: '1h ago', thumbnail: '/images/logo.webp' },
  { id: '10', title: 'Startup Teknologi Pendidikan Raih Pendanaan Seri B', media: 'TeknoIndonesia', category: 'tekno', timeAgo: '1h ago', thumbnail: '/images/logo.webp' },
  { id: '11', title: 'Laga Persib vs Bali United Berakhir Imbang 1-1', media: 'AyoBandung', category: 'olahraga', timeAgo: '2h ago', thumbnail: '/images/logo.webp' },
  { id: '12', title: 'Konser Musik Nusantara Digelar di Gelora Bung Karno', media: 'BeritaJakarta.id', category: 'hiburan', timeAgo: '2h ago', thumbnail: '/images/logo.webp' },
  { id: '13', title: 'Pemerintah Dorong Digitalisasi UMKM di 100 Kabupaten', media: 'SumutDaily.co', category: 'ekonomi', timeAgo: '3h ago', thumbnail: '/images/logo.webp' },
  { id: '14', title: 'Pengembang Properti Luncurkan Hunian Ramah Lingkungan', media: 'AyoBandung', category: 'ekonomi', timeAgo: '3h ago', thumbnail: '/images/logo.webp' },
  { id: '15', title: 'Ekspor Komoditas Pertanian Naik 15% pada Kuartal Ini', media: 'KalimantanPost.com', category: 'ekonomi', timeAgo: '4h ago', thumbnail: '/images/logo.webp' },
  { id: '16', title: 'Film Dokumenter Indonesia Raih Penghargaan Internasional', media: 'BeritaJakarta.id', category: 'hiburan', timeAgo: '4h ago', thumbnail: '/images/logo.webp' },
  { id: '17', title: 'Tes Drive Mobil Listrik Terbaru di IIMS 2024', media: 'OtomotifNusantara', category: 'otomotif', timeAgo: '5h ago', thumbnail: '/images/logo.webp' },
  { id: '18', title: 'Konferensi AI dan Masa Depan Teknologi Digelar di Bali', media: 'TeknoIndonesia', category: 'tekno', timeAgo: '5h ago', thumbnail: '/images/logo.webp' },
]

export const TRENDING_ITEMS = [
  { rank: 1, title: 'Pemkot Surabaya Resmikan Taman Inovasi Digital', media: 'JatimNetwork.com' },
  { rank: 2, title: 'Timnas Indonesia Siap Hadapi Kualifikasi Piala Dunia', media: 'AyoBandung' },
  { rank: 3, title: 'BI Pertahankan Suku Bunga Acuan di Level 6%', media: 'SumutDaily.co' },
  { rank: 4, title: 'GIIAS 2024: Daihatsu Pamerkan Mobil Listrik Terbaru', media: 'OtomotifNusantara' },
  { rank: 5, title: 'Kementan Amplifikasi Isu Pangan Nasional', media: 'BeritaJakarta.id' },
]

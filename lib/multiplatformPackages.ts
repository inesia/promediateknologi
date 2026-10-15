export interface MediaItem {
  name: string
  domain?: string
  isHighlight?: boolean
}

export interface PackageSubOption {
  id: 'A' | 'B' | 'C' | 'D'
  title: string
  mediaList: MediaItem[]
}

export interface PackageTier {
  id: 'starter' | 'growth'
  badge: string
  name: string
  tagline: string
  price: number
  priceFormatted: string
  mediaCount: number
  platforms: string[]
  features: string[]
  subOptions: PackageSubOption[]
}

export const MULTIPLATFORM_PACKAGES: PackageTier[] = [
  {
    id: 'starter',
    badge: 'Paling Populer untuk UMKM & Brand Baru',
    name: 'Paket Starter',
    tagline: 'Solusi hemat & berdampak tinggi untuk mulai membangun reputasi digital di 4 media terpercaya.',
    price: 1200000,
    priceFormatted: 'Rp 1.200.000',
    mediaCount: 4,
    platforms: ['Website', 'Instagram', 'TikTok'],
    features: [
      'Publikasi artikel di 4 portal media online',
      'Publikasi di feed/story Instagram 4 media',
      'Publikasi konten di TikTok 4 media',
      'Web SEO friendly & terindeks Google',
      'Tayang selamanya (Permanen, no renewal fee)',
      'Meningkatkan Trust & Brand Awareness instan',
      'Laporan bukti tayang (link & screenshot)',
    ],
    subOptions: [
      {
        id: 'A',
        title: 'Paket A (4 Media)',
        mediaList: [
          { name: 'KILAT.COM', domain: 'kilat.com', isHighlight: true },
          { name: 'KORAN GALA', domain: 'korangala.id', isHighlight: true },
          { name: 'METROJAMBI.COM', domain: 'metrojambi.com' },
          { name: 'Penabicara.com', domain: 'penabicara.com' },
        ],
      },
      {
        id: 'B',
        title: 'Paket B (4 Media)',
        mediaList: [
          { name: 'METROPOLITAN.id', domain: 'metropolitan.id', isHighlight: true },
          { name: 'Info Indonesia', domain: 'infoindonesia.id', isHighlight: true },
          { name: 'ABOUTMALANG.COM', domain: 'aboutmalang.com' },
          { name: 'Metro Bogor', domain: 'metrobogor.com' },
        ],
      },
      {
        id: 'C',
        title: 'Paket C (4 Media)',
        mediaList: [
          { name: 'Radar Cianjur', domain: 'radarcianjur.com', isHighlight: true },
          { name: 'KRJogja.com', domain: 'krjogja.com', isHighlight: true },
          { name: 'BantenHay.com', domain: 'bantenhay.com' },
          { name: 'ZONA Jakarta', domain: 'zonajakarta.com' },
        ],
      },
      {
        id: 'D',
        title: 'Paket D (4 Media)',
        mediaList: [
          { name: 'HARIAN TERBIT', domain: 'harianterbit.com', isHighlight: true },
          { name: 'JatimNetwork.com', domain: 'jatimnetwork.com', isHighlight: true },
          { name: 'TIME NEWS', domain: 'timenews.co.id' },
          { name: 'MELINTAS.ID', domain: 'melintas.id' },
        ],
      },
    ],
  },
  {
    id: 'growth',
    badge: 'Jangkauan Luas untuk Brand Growing & Korporasi',
    name: 'Paket Growth',
    tagline: 'Dominasi pencarian Google dan perkuat persepsi publik dengan eksposur serentak di 18 media nasional & regional.',
    price: 5000000,
    priceFormatted: 'Mulai Rp 5.000.000',
    mediaCount: 18,
    platforms: ['Website', 'Instagram', 'TikTok'],
    features: [
      'Publikasi serentak di 18 portal media online',
      'Publikasi di feed/story Instagram 18 media',
      'Publikasi konten di TikTok 18 media',
      'Kombinasi media nasional tier-1 & regional kuat',
      'Dominasi kata kunci pencarian (SEO Google Rank)',
      'Tayang selamanya (Permanen, no renewal fee)',
      'Meningkatkan konversi & kredibilitas profil brand',
      'Laporan komprehensif link publikasi & performa',
    ],
    subOptions: [
      {
        id: 'A',
        title: 'Paket A (18 Media)',
        mediaList: [
          { name: 'SuaraMerdeka.com', domain: 'suaramerdeka.com', isHighlight: true },
          { name: 'METROJAMBI.COM', domain: 'metrojambi.com' },
          { name: 'KILAT.COM', domain: 'kilat.com', isHighlight: true },
          { name: 'KORAN GALA', domain: 'korangala.id' },
          { name: 'strategi.id', domain: 'strategi.id' },
          { name: 'POROS JAKARTA', domain: 'porosjakarta.com' },
          { name: 'Pojokbaca.id', domain: 'pojokbaca.id' },
          { name: 'SKETSA Nusantara', domain: 'sketsanusantara.id' },
          { name: 'RUANGHARIAN.COM', domain: 'ruangharian.com' },
          { name: 'info1.id', domain: 'info1.id' },
          { name: 'NusaHits.com', domain: 'nusahits.com' },
          { name: 'erabaru MEDIA', domain: 'erabaru.net' },
          { name: 'gertak.id', domain: 'gertak.id' },
          { name: 'beritanusa.com', domain: 'beritanusa.com' },
          { name: 'KABAR megapolitan.ID', domain: 'kabarmegapolitan.com' },
          { name: 'iBenews.id', domain: 'ibenews.id' },
          { name: 'ARAHPENA', domain: 'arahpena.com' },
          { name: 'dkliknews.com', domain: 'dkliknews.com' },
        ],
      },
      {
        id: 'B',
        title: 'Paket B (18 Media)',
        mediaList: [
          { name: 'SuaraMerdeka.com', domain: 'suaramerdeka.com', isHighlight: true },
          { name: 'METROPOLITAN.id', domain: 'metropolitan.id' },
          { name: 'Info Indonesia', domain: 'infoindonesia.id' },
          { name: 'ARGUMEN', domain: 'argumen.id' },
          { name: 'ABOUTMALANG.COM', domain: 'aboutmalang.com' },
          { name: 'HARIAN9.COM', domain: 'harian9.com' },
          { name: 'WOW BABEL.COM', domain: 'wowbabel.com' },
          { name: 'mengerti.id', domain: 'mengerti.id' },
          { name: 'GORAJUARA.COM', domain: 'gorajuara.com' },
          { name: 'Nyataonline.com', domain: 'nyataonline.com' },
          { name: 'ALONESIA', domain: 'alonesia.com' },
          { name: 'GEMAPOS', domain: 'gemapos.id' },
          { name: 'CAKRA KRISNA', domain: 'cakrakrisna.com' },
          { name: 'konteks.co.id', domain: 'konteks.co.id' },
          { name: 'PojokSemarang.com', domain: 'pojoksemarang.com' },
          { name: 'Pantura Post', domain: 'panturapost.com' },
          { name: 'BINTANG TENGGARA', domain: 'bintangtenggara.com' },
        ],
      },
      {
        id: 'C',
        title: 'Paket C (18 Media)',
        mediaList: [
          { name: 'Radar Cianjur', domain: 'radarcianjur.com', isHighlight: true },
          { name: 'JakartaTerkini.id', domain: 'jakartaterkini.id', isHighlight: true },
          { name: 'KRJogja.com', domain: 'krjogja.com' },
          { name: 'DMITV', domain: 'dmitv.id' },
          { name: 'Radar Jabar', domain: 'radarjabar.com' },
          { name: 'KLIK ANGGARAN.COM', domain: 'klikanggaran.com' },
          { name: 'CAKRAWALA.CO', domain: 'cakrawala.co' },
          { name: 'BALIKPAPAN POS', domain: 'balikpapanpos.id' },
          { name: 'RUBIC NEWS', domain: 'rubicnews.com' },
          { name: 'GARUDA 24 JAM', domain: 'garuda24.com' },
          { name: 'Penabicara.com', domain: 'penabicara.com' },
          { name: 'KELUMAJANG.COM', domain: 'kelumajang.com' },
          { name: 'Detik SumseL', domain: 'detiksumsel.com' },
          { name: 'GEMAPOS', domain: 'gemapos.id' },
          { name: 'edisi', domain: 'edisi.co.id' },
          { name: 'MELINTAS.ID', domain: 'melintas.id' },
          { name: 'SINAR HARAPAN.CO', domain: 'sinarharapan.co' },
          { name: 'ZONA Jakarta', domain: 'zonajakarta.com' },
        ],
      },
      {
        id: 'D',
        title: 'Paket D (18 Media)',
        mediaList: [
          { name: 'HARIAN TERBIT', domain: 'harianterbit.com', isHighlight: true },
          { name: 'KRJogja.com', domain: 'krjogja.com', isHighlight: true },
          { name: 'JatimNetwork.com', domain: 'jatimnetwork.com' },
          { name: 'Pojokbogor', domain: 'pojokbogor.com' },
          { name: 'Hallo!id', domain: 'hallo.id' },
          { name: 'SuaraMerdeka KEDU', domain: 'suaramerdeka.com' },
          { name: 'aDatah.com', domain: 'adatah.com' },
          { name: 'suarakarya.id', domain: 'suarakarya.id' },
          { name: 'HARIAN MASSA.ID', domain: 'harianmassa.id' },
          { name: 'VictoryNews', domain: 'victorynews.id' },
          { name: 'insiden24', domain: 'insiden24.com' },
          { name: 'TIME NEWS', domain: 'timenews.co.id' },
          { name: 'infosumsel.id', domain: 'infosumsel.id' },
          { name: 'klikaktual', domain: 'klikaktual.com' },
          { name: 'DIO-TV.COM', domain: 'dio-tv.com' },
          { name: 'Kabarindo.com', domain: 'kabarindo.com' },
          { name: 'REALITAS online.id', domain: 'realitas.id' },
          { name: 'LIPUTAN7.ID', domain: 'liputan7.id' },
        ],
      },
    ],
  },
]

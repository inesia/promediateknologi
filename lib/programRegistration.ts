/** Nama tampilan program (slug tetap mediapreneur) */
export const PUBLISHER_MEDIA_NETWORK = 'Publisher Media Network'

/** Formulir resmi Publisher Media Network */
export const MEDIAPRENEUR_FORM_URL = 'https://go.promediateknologi.id/DaftarMitraMedia'

/** @deprecated Gunakan getPartnerFormUrl(slug) */
export const PARTNER_FORM_URL = MEDIAPRENEUR_FORM_URL

export type ProgramSlug = 'mediapreneur' | 'contentpreneur' | 'socmedpreneur'

/** URL formulir pendaftaran per program */
export const PROGRAM_FORM_URLS: Record<ProgramSlug, string> = {
  mediapreneur: MEDIAPRENEUR_FORM_URL,
  contentpreneur:
    'https://docs.google.com/forms/d/e/1FAIpQLSd7kWx6HPRvujy8noEPaVaQE6IV6SoQBwpYUUStlt_scTX9bQ/viewform',
  socmedpreneur: 'https://go.promediateknologi.id/VoxProCreators',
}

export interface ProgramRegistration {
  slug: ProgramSlug
  title: string
  menuLabel: string
  tagline: string
  description: string
  programHref: string
  ctaLabel: string
  forWho: string
  beforeApply: string[]
  applyNote?: string
}

export const PROGRAMS: ProgramRegistration[] = [
  {
    slug: 'mediapreneur',
    title: PUBLISHER_MEDIA_NETWORK,
    menuLabel: PUBLISHER_MEDIA_NETWORK,
    tagline: 'Bangun dan monetisasi portal media Anda sendiri',
    description:
      'Untuk pemilik dan pengelola media online yang sudah berjalan hingga jurnalis & kreator yang ingin memulai bisnis media independennya sendiri. Dapatkan dukungan IT, Marketing, hingga pendampingan, gratis.',
    programHref: '/program/publishermedianetwork',
    ctaLabel: 'Daftar Publisher Media Network',
    forWho: 'Pemilik media, pemimpin redaksi, dan tim editorial (min. 3 orang)',
    beforeApply: [
      'Siapkan CV/portofolio tim inti dalam PDF (maks. 10 MB) per anggota.',
      'Setiap anggota minimal 1 tahun pengalaman menulis atau jurnalisme.',
      'Ikuti @promediaecosystem di Instagram untuk pengumuman resmi.',
      'Instal aplikasi Go24 (Google Play / App Store) sebelum onboarding.',
    ],
    applyNote:
      'Pendaftaran kemitraan gratis. Laporkan permintaan biaya ke WhatsApp 0811 2007 667 (text only).',
  },
  {
    slug: 'socmedpreneur',
    title: 'Influencer Media Network',
    menuLabel: 'Influencer Media Network',
    tagline: 'Tidak hanya jadi kreator, tapi pemengaruh',
    description:
      'Untuk seluruh kreator yang ingin naik level, profesional atau yang baru memulai karier di medsos. Kami bantu buat web profesional, support IT & Marketing, Gratis',
    programHref: '/program/influencermedianetwork',
    ctaLabel: 'Daftar Influencer Media Network',
    forWho: 'Content Creator dan seluruh orang yang ingin mencoba memulai karier lewat konten di medsos.',
    beforeApply: [
      'Siapkan contoh konten sosial dengan performa terbaik.',
      'Siap menjelaskan platform yang dikelola dan niche audiens.',
      'Ikuti @promediaecosystem untuk pengumuman program.',
    ],
  },
  {
    slug: 'contentpreneur',
    title: 'Contentpreneur',
    menuLabel: 'Content Creator For Publisher',
    tagline: 'Ubah kata-kata menjadi penghasilan profesional',
    description:
      'Untuk jurnalis, penulis lepas, dan kreator konten yang ingin karyanya dihargai di jaringan media mitra Promedia.',
    programHref: '/program/contentpreneur',
    ctaLabel: 'Daftar Contentpreneur',
    forWho: 'Penulis, jurnalis, atau siapapun yang ingin memulai karier lewat menulis di media online.',
    beforeApply: [
      'Pelajari dua jalur di halaman program: lowongan mitra media atau intake Promedia Group.',
      'Untuk jalur Promedia Group, lengkapi formulir pendaftaran resmi di bawah.',
      'Hadiri briefing program online (Zoom) saat diundang.',
      'Ikuti pelatihan terpusat sebelum penempatan ke media mitra yang direkomendasikan.',
    ],
    applyNote:
      'Pelamar jalur media mengikuti halaman karir masing-masing mitra. Untuk jalur Promedia Group, gunakan formulir pendaftaran resmi.',
  },
]

export const PROGRAMS_BY_SLUG = Object.fromEntries(
  PROGRAMS.map((p) => [p.slug, p])
) as Record<ProgramSlug, ProgramRegistration>

const SLUG_ALIASES: Record<string, ProgramSlug> = {
  mediapreneur: 'mediapreneur',
  publishermedianetwork: 'mediapreneur',
  contentpreneur: 'contentpreneur',
  socmedpreneur: 'socmedpreneur',
  influencermedianetwork: 'socmedpreneur',
  'influencer-media-network': 'socmedpreneur',
}

export function normalizeProgramSlug(
  value: string | null | undefined
): ProgramSlug | null {
  if (!value) return null
  const key = value.toLowerCase().trim()
  return SLUG_ALIASES[key] ?? null
}

export function getApplyPageUrl(slug: ProgramSlug): string {
  return `/register/apply?program=${slug}`
}

export function getPartnerFormUrl(slug?: ProgramSlug): string {
  if (!slug) return MEDIAPRENEUR_FORM_URL
  return PROGRAM_FORM_URLS[slug]
}

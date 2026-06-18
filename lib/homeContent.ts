/**
 * Copy & layout homepage — teks verbatim mockup klien.
 * Visual/styling mengikuti design system Promedia (#00AEEF, btn-shimmer, dll.), bukan warna mockup.
 */

export const homeHero = {
  badge: 'MAVERICKS & AHEAD',
  headlineLine1: 'Ekosistem Media Digital',
  headlineLine2: 'Terintegrasi',
  subheadline:
    'Tempat media dan kreator tumbuh bersama, secara setara dan berkelanjutan.',
  primaryCta: 'Daftar Program',
  secondaryCta: 'Pelajari Lebih Lanjut',
  primaryCtaHref: '/register',
  secondaryCtaHref: '/about-us',
}

export const homeHeader = {
  registerCta: 'Daftar',
  registerHref: '/register',
}

export const homePrograms = {
  badge: 'Layanan & Ekosistem',
  title: 'Solusi Lengkap untuk',
  titleHighlight: 'Media Digital',
  items: [
    {
      slug: 'mediapreneur' as const,
      title: 'Publisher Media Network',
      description:
        'Bangun media digital Anda sendiri dengan teknologi terkini, didampingi praktisi berpengalaman, dan dukungan monetisasi terintegrasi — tanpa dipungut biaya.',
      linkHref: '/program/publishermedianetwork',
      linkLabel: 'Pelajari Selengkapnya',
      reverse: false,
    },
    {
      slug: 'socmedpreneur' as const,
      title: 'Influencer Media Network',
      description:
        'Ruang kreator membangun dampak di media sosial sambil terhubung dengan brand, didukung tools, analitik, dan monetisasi terintegrasi.',
      linkHref: '/program/influencermedianetwork',
      linkLabel: 'Pelajari Selengkapnya',
      reverse: true,
    },
    {
      slug: 'contentpreneur' as const,
      title: 'Contentpreneur',
      description:
        'Ubah tulisan jadi pendapatan. Ruang bagi jurnalis dan kreator untuk berkarya, berkembang, dan terhubung dengan ekosistem media digital.',
      linkHref: '/program/contentpreneur',
      linkLabel: 'Pelajari Selengkapnya',
      reverse: false,
    },
  ],
}

/** Section gabungan scale + Promedia dalam Angka (homepage) — copy verbatim mockup klien */
export const homeDalamAngka = {
  badge: 'MEDIA PROFILE - DATA TERVERIFIKASI',
  title: 'Promedia Dalam Angka',
  titleAccent: 'Dalam',
  description:
    'Ribuan media, miliaran views. Demografi audiens hingga jaringan influencer dalam satu halaman untuk campaign Anda',
  primaryStats: {
    mediaLabel: 'JUMLAH MEDIA',
    mediaCount: 1154,
    mediaSuffix: 'Publisher',
    viewsLabel: 'TOTAL VIEWS',
    viewsCount: 1_366_125_327,
    viewsFootnote: '*1.3 Billion+ views (Last 12 Month)',
  },
  cta: 'Jelajahi Data Lengkap',
  ctaHref: '/dalam-angka',
  ctaFootnote: 'Gratis diakses - untuk brand, agency, dan pengiklan korporat',
}

/** Section ajakan bergabung (homepage, FinalCTA) */
export const homeJoinBanner = {
  title: 'Ready to join the universe?',
  description:
    'Bergabunglah dengan ekosistem Promedia Teknologi dan jadilah bagian dari revolusi media digital Indonesia.',
  cta: 'Daftar Sekarang',
  ctaHref: '/register',
}

/** Section Program Kemitraan Promedia (legacy — register hub) */
export const homePartnershipCta = {
  badge: 'Program Kemitraan Promedia',
  titlePrefix: 'Pilih',
  titleHighlight: 'Program',
  titleSuffix: 'yang Tepat untuk Anda',
  subtitle:
    'Tiga jalur berbeda — publisher, influencer, atau penulis. Pelajari program kami dan lanjut pendaftaran.',
  programDescriptions: {
    mediapreneur:
      'Ciptakan brand mediamu, bangun tim redaksimu. Full support tim IT & marketing profesional, gratis.',
    contentpreneur:
      'Jadi penulis untuk publisher media. Ubah kata-katamu jadi penghasilan tambahan.',
    socmedpreneur:
      'Kembangkan aset digitalmu, dari medsos hingga web profesionalmu sendiri. Perlebar peluang ke brand bersama Voxpro by Promedia Group.',
  },
  unsureTitle: 'Belum yakin program mana?',
  unsureDescription:
    'Buka halaman pilih program untuk membandingkan ketiga jalur, lalu daftar saat Anda sudah siap.',
  steps: [
    'Pilih program yang sesuai',
    'Pelajari detail & persyaratan',
    'Daftar lewat formulir resmi',
  ],
  cta: 'Lihat Semua Program',
  footnote:
    'Pendaftaran tidak dipungut biaya. Setiap program memiliki formulir dan alur onboarding sendiri.',
}

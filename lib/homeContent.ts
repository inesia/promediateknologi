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
      linkHref: '/program/mediapreneur',
      linkLabel: 'Pelajari Selengkapnya',
      reverse: false,
    },
    {
      slug: 'contentpreneur' as const,
      title: 'Contentpreneur',
      description:
        'Ubah tulisan jadi pendapatan. Ruang bagi jurnalis dan kreator untuk berkarya, berkembang, dan terhubung dengan ekosistem media digital.',
      linkHref: '/program/contentpreneur',
      linkLabel: 'Pelajari Selengkapnya',
      reverse: true,
    },
    {
      slug: 'socmedpreneur' as const,
      title: 'Influencer Media Network',
      description:
        'Ruang kreator membangun dampak di media sosial sambil terhubung dengan brand, didukung tools, analitik, dan monetisasi terintegrasi.',
      linkHref: '/program/socmedpreneur',
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
    mediaValue: '1.154',
    mediaSuffix: 'Publisher',
    viewsLabel: 'TOTAL VIEWS',
    viewsValue: '1',
    viewsSuffix: 'Billion+',
    viewsFootnote: '*1.366.125.327 views (Last 12 Month)',
  },
  cta: 'Jelajahi Data Lengkap',
  ctaHref: '/dalam-angka',
  ctaFootnote: 'Gratis diakses - untuk brand, agency, dan pengiklan korporat',
}

/** Section Program Kemitraan Promedia (homepage, FinalCTA) */
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

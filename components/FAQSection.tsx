'use client'

import { useState } from 'react'
import { Plus, Minus, Search } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqCategories = [
  {
    id: 'promedia',
    label: 'Tentang Promedia',
    items: [
      {
        question: 'Apa itu Promedia Group?',
        answer: 'Promedia Group adalah ekosistem media digital terintegrasi yang menghubungkan media, jurnalis, dan kreator dalam satu jaringan kolaboratif. Promedia berperan sebagai fasilitator ekosistem, menyediakan infrastruktur, pendampingan, dan konektivitas untuk mendukung pertumbuhan yang setara dan berkelanjutan.',
      },
      {
        question: 'Apakah Promedia Group adalah perusahaan media?',
        answer: 'Promedia Group bukan perusahaan media yang memproduksi konten editorial untuk publik. Promedia sejatinya adalah perusahaan teknologi yang membangun dan mengelola ekosistem yang mendukung media dan kreator, tanpa mengambil alih peran redaksi atau kebijakan editorial.',
      },
      {
        question: 'Apa perbedaan Promedia Group dengan jaringan media lainnya?',
        answer: 'Promedia Group lahir atas semangat untuk mendukung entitas-entitas media di daerah, baik yang baru maupun yang sudah berusia panjang. Pendekatan Promedia adalah membangun ekosistem kolaboratif yang memberikan akses setara terhadap teknologi, pendampingan, dan peluang monetisasi, sambil tetap menjaga kemandirian masing-masing mitra.',
      },
      {
        question: 'Apa peran Promedia Group dalam operasional media partner?',
        answer: 'Promedia Group mendukung media partner melalui infrastruktur teknologi, pendampingan strategis, dan konektivitas ekosistem. Promedia tidak mengatur konten editorial, struktur redaksi, atau arah pemberitaan media partner.',
      },
      {
        question: 'Apakah Promedia Group mengintervensi kebijakan editorial media mitra?',
        answer: 'Tidak. Promedia Group menjunjung tinggi independensi editorial. Setiap media mitra memiliki kendali penuh atas kebijakan redaksi dan kontennya masing-masing. Namun, melalui konsultan media yang disiapkan, Promedia Group memberikan rekomendasi dan saran yang bisa dipetimbangkan mitra untuk mengambil langkah strategis ke depan.',
      },
      {
        question: 'Apakah Promedia Group hanya berfokus pada media nasional?',
        answer: 'Tidak. Promedia Group membangun jaringan media dari berbagai daerah di Indonesia, dengan semangat inklusivitas dan kolaborasi lintas wilayah serta segmen liputan. Kami menargetkan bisa ikut mendukung media-media lokal di 500+ kabupaten/kota di Indonesia.',
      },
      {
        question: 'Apa visi jangka panjang Promedia Group?',
        answer: 'Visi Promedia Group adalah membangun ekosistem media digital Indonesia yang sehat, inklusif, dan berkelanjutan, di mana media, jurnalis, dan kreator dapat tumbuh bersama secara setara dalam jangka panjang.',
      },
    ]
  },
  {
    id: 'mediapreneur',
    label: 'Publisher Media Network',
    items: [
      {
        question: 'Apa itu program Publisher Media Network Promedia?',
        answer: 'Publisher Media Network adalah program kemitraan bagi pemilik atau pengelola media digital untuk membangun dan mengembangkan media mereka dalam ekosistem Promedia. Program ini menyediakan dukungan teknologi, pendampingan strategis, dan konektivitas ekosistem tanpa mengambil alih kepemilikan maupun kebijakan editorial media.',
      },
      {
        question: 'Siapa saja yang dapat bergabung sebagai media partner Promedia?',
        answer: 'Program Publisher Media Network terbuka bagi media digital yang sudah dikelola secara profesional maupun jurnalis/kreator yang ingin memulai bisnis media digitalnya sendiri.',
      },
      {
        question: 'Apakah media partner tetap memiliki kendali penuh atas medianya?',
        answer: 'Ya. Media partner tetap memiliki kepemilikan dan kendali penuh atas media, termasuk kebijakan editorial, struktur redaksi, dan arah pengembangan konten. Promedia tidak mengintervensi keputusan redaksional.',
      },
      {
        question: 'Apakah ada biaya untuk bergabung sebagai mitra Publisher Media Network?',
        answer: 'Promedia tidak mengenakan biaya pendaftaran untuk program Publisher Media Network. Namun, kemitraan ini bersifat selektif dan dijalankan berdasarkan kesepakatan serta komitmen bersama.',
      },
      {
        question: 'Dukungan apa saja yang diberikan Promedia kepada media partner?',
        answer: 'Promedia memberikan dukungan berupa infrastruktur teknologi, pendampingan pengembangan media, akses ke ekosistem Promedia Group, serta peluang monetisasi.',
      },
      {
        question: 'Apakah Promedia akan mengelola iklan di media partner?',
        answer: 'Pengelolaan iklan dijalankan bisa dijalankan oleh Promedia dan mitra media sekaligus dan dilakukan secara transparan.',
      },
      {
        question: 'Bagaimana proses seleksi media partner Promedia?',
        answer: 'Setiap pengajuan kemitraan akan melalui proses evaluasi untuk memastikan keselarasan nilai, kesiapan operasional, dan komitmen terhadap pengembangan media jangka panjang.',
      },
      {
        question: 'Apakah media partner wajib mengikuti seluruh program Promedia?',
        answer: 'Tidak. Media partner dapat mengikuti program dan inisiatif Promedia sesuai kebutuhan dan kesepakatan, selama tetap berada dalam kerangka kerja sama yang disepakati bersama.',
      },
      {
        question: 'Bagaimana jika media partner ingin mengakhiri kerja sama?',
        answer: 'Kerja sama dapat diakhiri sesuai ketentuan yang tertuang dalam perjanjian kemitraan. Promedia menjunjung prinsip transparansi dan profesionalisme dalam setiap bentuk kerja sama.',
      },
      {
        question: 'Apakah domain dan seluruh konten tetap dimiliki media atau menjadi milik Promedia?',
        answer: 'Domain dan seluruh konten yang dikelola dalam kemitraan sepenuhnya tetap menjadi milik media mitra, baik selama masa kerja sama maupun setelah kerja sama berakhir. Sebagai bagian dari mekanisme operasional dan perlindungan bersama, Promedia Group memfasilitasi pengelolaan domain pada tahun pertama kemitraan. Kebijakan ini diterapkan untuk memastikan kesiapan operasional dan komitmen kerja sama di tahap awal. Setelah periode tersebut, pengelolaan domain dapat dialihkan sepenuhnya kepada media mitra sesuai kesepakatan.',
      },
    ]
  },
  {
    id: 'contentpreneur',
    label: 'Contentpreneur',
    items: [
      {
        question: 'Apa itu Program Contentpreneur Promedia?',
        answer: 'Contentpreneur adalah program bagi jurnalis dan kreator untuk mengembangkan karya tulis dalam ekosistem media Promedia. Program ini memberikan ruang publikasi, pendampingan, serta peluang pendapatan bagi kreator yang ingin bertumbuh secara profesional dan berkelanjutan.',
      },
      {
        question: 'Siapa saja yang dapat bergabung sebagai Contentpreneur?',
        answer: 'Program Contentpreneur terbuka bagi jurnalis dan kreator dengan minat kuat pada membaca, menulis, dan pengembangan konten. Latar belakang pendidikan atau pengalaman formal bukan syarat utama, selama memiliki komitmen untuk berkarya secara konsisten dan bertanggung jawab.',
      },
      {
        question: 'Apakah Contentpreneur harus berlatar belakang jurnalis?',
        answer: 'Tidak. Program ini terbuka bagi siapa pun yang ingin mengembangkan kemampuan menulis dan menghasilkan karya berkualitas. Namun, setiap karya tetap diharapkan mengikuti prinsip dasar penulisan yang bertanggung jawab dan etis.',
      },
      {
        question: 'Bagaimana sistem publikasi karya Contentpreneur?',
        answer: 'Karya Contentpreneur akan melalui proses kurasi sebelum dipublikasikan oleh mitra media. Tidak semua karya akan langsung dimuat. Proses ini dilakukan untuk menjaga kualitas dan relevansi konten bagi pembaca.',
      },
      {
        question: 'Apakah Contentpreneur bebas menentukan topik tulisan?',
        answer: 'Contentpreneur dapat mengusulkan topik tulisan sesuai minat dan keahliannya. Namun, publikasi tetap mempertimbangkan kebutuhan redaksional, relevansi isu, dan kebijakan masing-masing media dalam jaringan Promedia.',
      },
      {
        question: 'Apakah setiap tulisan Contentpreneur akan dimonetisasi?',
        answer: 'Tidak semua karya secara otomatis menghasilkan pendapatan. Peluang pendapatan dipengaruhi oleh performa konten, kebutuhan media, dan skema monetisasi yang berlaku.',
      },
      {
        question: 'Bagaimana sistem pendapatan bagi Contentpreneur?',
        answer: 'Pendapatan Contentpreneur diperoleh melalui skema yang ditetapkan berdasarkan performa karya dan kerja sama yang berjalan. Promedia tidak menjanjikan pendapatan tetap atau instan, tetapi menyediakan ekosistem yang memungkinkan karya bernilai secara profesional.',
      },
      {
        question: 'Apakah Ikut Program Contentpreneur Harus Bayar?',
        answer: 'Tidak. Program Contentpreneur tidak memungut biaya pendaftaran. Namun, partisipasi dalam program ini menuntut komitmen untuk mengikuti proses kurasi, pengembangan, dan etika berkarya yang berlaku.',
      },
      {
        question: 'Apakah Contentpreneur bisa berhenti kapan saja?',
        answer: 'Ya. Contentpreneur dapat menghentikan partisipasi sesuai ketentuan yang berlaku. Promedia menjunjung profesionalisme dan komunikasi terbuka dalam setiap bentuk kerja sama.',
      },
    ]
  }
]

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState('promedia')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const activeFaqs = faqCategories.find(c => c.id === activeCategory)?.items || []

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-black text-[#001A2C] mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-slate-600">Pertanyaan umum seputar layanan kami</p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id)
                setOpenIndex(null)
              }}
              className={`px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#00AEEF] text-white shadow-lg shadow-blue-500/30'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {activeFaqs.map((faq, index) => (
                <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                    aria-expanded={openIndex === index}
                  >
                    <span className="text-lg font-bold text-[#001A2C] pr-8">{faq.question}</span>
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-[#00AEEF] flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

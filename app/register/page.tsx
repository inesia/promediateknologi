'use client'

import { motion } from 'framer-motion'
import { 
  Newspaper, 
  PenTool, 
  Share2,
  ExternalLink
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RegistrationPage() {
  const categories = [
    {
      title: 'Mediapreneur',
      description: 'Untuk pemilik portal berita / pebisnis media online yang ingin berkembang bersama jaringan Promedia.',
      icon: Newspaper,
      color: 'bg-[#00AEEF]/10 text-[#00AEEF] border-[#00AEEF]/20'
    },
    {
      title: 'Contentpreneur',
      description: 'Untuk penulis, jurnalis mandiri, dan pembuat konten berita yang ingin karyanya dihargai secara profesional.',
      icon: PenTool,
      color: 'bg-[#2D74B3]/10 text-[#2D74B3] border-[#2D74B3]/20'
    },
    {
      title: 'Influencer Media Network',
      description: 'Untuk konten kreator media sosial (TikTok, Instagram, YouTube) yang ingin memonetisasi jangkauannya.',
      icon: Share2,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)] pt-20">
        {/* Left Side - Requirements (45% Desktop) */}
        <div className="w-full lg:w-[45%] relative bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-50 border-r border-slate-100 flex flex-col justify-center py-12 px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-xl mx-auto">
            <div className="mb-8">
              <span className="px-3 py-1 bg-[#00AEEF]/10 border border-[#00AEEF]/20 rounded-full text-xs font-bold text-[#00AEEF] uppercase tracking-wide">
                Persyaratan Bergabung
              </span>
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-black text-[#001A2C] mb-6 uppercase leading-tight">
              Kemitraan Promedia Group
            </h2>
            
            <ul className="space-y-4 text-sm text-slate-700 mb-8 list-disc pl-5 marker:text-[#00AEEF]">
              <li>Bercita-cita menjadi seorang pengusaha media online profesional.</li>
              <li>Memiliki minimal 3 orang dalam tim yang terdiri dari 1 orang Pemimpin Redaksi dan 2 orang Editor.</li>
              <li>Memiliki profil singkat terbaru atau Curriculum Vitae (CV) untuk setiap orang dalam tim yang dibuat dalam format PDF beserta dengan portofolionya dibuat jadi 1 file maksimal ukuran 10mb.</li>
              <li>Setiap orang dalam tim wajib memiliki pengalaman minimal 1 tahun dibidang tulis-menulis atau jurnalisme (media digital/konvensional).</li>
              <li>Mengikuti akun media sosial <Link href="https://instagram.com/promediaecosystem" target="_blank" className="text-[#00AEEF] font-semibold hover:underline">@promediaecosystem</Link> untuk mengetahui informasi dan pengumuman terbaru terkait kemitraan dan hal lainnya.</li>
              <li><strong>SELURUH PENDAFTARAN TIDAK DIPUNGUT BIAYA APAPUN.</strong> Jika ada yang memungut biaya kemitraan laporkan melalui Whatsapp kami di nomor: <strong>0811 2007 667 (text only)</strong>.</li>
              <li>Unduh aplikasi Go24 di Google Play Store atau App Store. Aplikasi ini merupakan platform baca berita dan distribusi konten resmi bagi seluruh mitra Promedia Group.</li>
              <li>Kirimkan melalui tombol pendaftaran. Setelah anda mengirimkan lamaran tunggu undangan zoom meeting dari kami yang akan dikirimkan melalui email terdaftar, pastikan tidak ada kesalahan dalam input email.</li>
            </ul>

            <div className="bg-[#00AEEF]/5 border border-[#00AEEF]/20 rounded-2xl p-5 mb-8">
              <p className="text-xs text-slate-600 leading-relaxed">
                Setiap pengumuman resmi dan update kemitraan akan kami sampaikan lewat akun Instagram, Linkedin dan Facebook kami <Link href="https://instagram.com/promediateknologi" target="_blank" className="text-[#00AEEF] font-semibold hover:underline">@promediateknologi</Link>
              </p>
            </div>

            <p className="text-[#00AEEF] font-bold text-base lg:text-lg italic border-l-4 border-[#00AEEF] pl-4">
              &ldquo;Kami bantu anda mewujudkan mimpi untuk memiliki media daring sendiri secara mandiri dan
              profesional.&rdquo;
            </p>
          </div>
        </div>

        {/* Right Side - Action / Form link (55% Desktop) */}
        <div className="w-full lg:w-[55%] bg-white flex items-center justify-center py-16 px-6 sm:px-8 lg:px-16 xl:px-20">
          <div className="w-full max-w-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl lg:text-4xl font-black text-[#001A2C] mb-4">
                Pilih Kategori & Daftar
              </h1>
              <p className="text-slate-600 mb-10 text-base">
                Silakan pilih salah satu dari 3 kategori kemitraan berikut ini di dalam formulir pendaftaran kami:
              </p>

              {/* Categories Display */}
              <div className="space-y-4 mb-10">
                {categories.map((cat, idx) => {
                  const Icon = cat.icon
                  return (
                    <div 
                      key={idx} 
                      className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4 hover:border-slate-200 hover:shadow-md transition-all duration-300"
                    >
                      <div className={`p-3 rounded-xl border ${cat.color} flex-shrink-0`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-[#001A2C] mb-1">{cat.title}</h3>
                        <p className="text-xs text-slate-500 leading-relaxed">{cat.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Huge High-Converting CTA Button */}
              <a 
                href="https://forms.fillout.com/t/18DvaYMThNus" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  className="w-full py-5 px-8 bg-gradient-to-r from-[#00AEEF] to-[#2D74B3] hover:from-[#2D74B3] hover:to-[#00AEEF] text-white font-bold rounded-2xl shadow-xl shadow-[#00AEEF]/20 hover:shadow-[#00AEEF]/45 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Mulai Pendaftaran Online
                  <ExternalLink className="w-5 h-5" />
                </motion.div>
              </a>

              <p className="mt-6 text-center text-xs text-slate-400">
                Formulir pendaftaran resmi disediakan menggunakan platform terverifikasi Fillout.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

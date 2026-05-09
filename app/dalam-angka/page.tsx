'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import EcosystemStats from '@/components/EcosystemStats'
import { motion } from 'framer-motion'
import { CheckCircle2, TrendingUp, Users, Zap, Globe } from 'lucide-react'
import Image from 'next/image'

export default function DalamAngkaPage() {
  const highlights = [
    {
      title: 'Jaringan Luas',
      value: '37 Provinsi',
      description: 'Menjangkau seluruh Indonesia dari Aceh hingga Papua.',
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: 'Kreator Konten',
      value: '10.000+',
      description: 'Jurnalis dan kreator yang memproduksi ribuan konten setiap hari.',
      icon: <PenToolIcon />,
    },
    {
      title: 'Engagement Tinggi',
      value: '1.3B+ Views',
      description: 'Total impresi tahunan di seluruh jaringan media partner.',
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#001A2C]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00AEEF] blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2D74B3] blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                Promedia <span className="text-[#00AEEF]">dalam Angka</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto">
                Melihat lebih dekat ekosistem media digital terintegrasi terbesar di Indonesia melalui data dan fakta.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Stats */}
      <EcosystemStats />

      {/* Map Placeholder / Provinces */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-black text-[#001A2C] mb-6">
                Jangkauan Nasional di <span className="text-[#00AEEF]">37 Provinsi</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Promedia telah hadir dan memberdayakan media lokal di hampir seluruh provinsi di Indonesia, menciptakan kemandirian ekonomi melalui jurnalisme digital.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {highlights.map((item, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-12 h-12 rounded-xl bg-[#00AEEF]/10 flex items-center justify-center text-[#00AEEF] mb-4">
                      {item.icon}
                    </div>
                    <h4 className="text-2xl font-black text-[#001A2C] mb-1">{item.value}</h4>
                    <p className="text-sm font-bold text-slate-500 mb-2">{item.title}</p>
                    <p className="text-xs text-slate-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative aspect-square md:aspect-video lg:aspect-square bg-slate-100 rounded-3xl overflow-hidden border-4 border-slate-50 shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
               {/* Map Placeholder Graphic */}
               <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                 <div className="text-center">
                   <Globe className="w-32 h-32 mx-auto mb-4 opacity-20" />
                   <p className="font-bold">Peta Interaktif 37 Provinsi</p>
                   <p className="text-xs">(Asset Visual Sedang Disiapkan)</p>
                 </div>
               </div>
               
               {/* Ambient Glows on Map */}
               <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-[#00AEEF] rounded-full blur-sm animate-pulse" />
               <div className="absolute top-1/2 left-2/3 w-3 h-3 bg-[#00AEEF] rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }} />
               <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-[#00AEEF] rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.5s' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ecosystem Services for Sales */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-[#001A2C] mb-16">
            Ekosistem yang <span className="text-[#00AEEF]">Terintegrasi</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Teknologi Roweb', desc: 'Infrastruktur cloud berbasis AWS & Cloudflare yang menjamin uptime dan keamanan.', icon: <Zap className="w-6 h-6" /> },
              { title: 'Sistem Monetisasi', desc: 'Integrasi iklan otomatis yang adil bagi seluruh mitra dalam jaringan.', icon: <TrendingUp className="w-6 h-6" /> },
              { title: 'Pelatihan Konten', desc: 'Workshop berkala untuk menjaga kualitas dan standar jurnalisme digital.', icon: <Users className="w-6 h-6" /> },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00AEEF] to-[#2D74B3] flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-blue-200">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#001A2C] mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#00AEEF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
            Tertarik Menjadi Bagian dari Kami?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <button className="px-10 py-4 bg-[#001A2C] text-white font-bold rounded-2xl shadow-xl hover:bg-black transition-all">
                Daftar Sekarang
             </button>
             <button className="px-10 py-4 bg-white text-[#001A2C] font-bold rounded-2xl shadow-xl hover:bg-slate-50 transition-all">
                Hubungi Sales
             </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function PenToolIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l1.5 1.5" />
      <path d="M13 18l5 5" />
    </svg>
  )
}

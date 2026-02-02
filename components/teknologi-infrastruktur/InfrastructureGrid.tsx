'use client'

import { motion } from 'framer-motion'
import { Database, ShieldCheck, Zap, Activity } from 'lucide-react'

const DARK_NAVY = '#000F1A'
const PRIMARY = '#00AEEF'

const cards = [
  {
    icon: Database,
    title: 'Unlimited Resource',
    description: 'Menggunakan server <strong>AWS</strong> Amazon EC2. Sumber daya tidak terbatas untuk traffic tinggi.',
  },
  {
    icon: ShieldCheck,
    title: 'Cyber Security Shield',
    description: 'Proteksi <strong>Cloudflare</strong> Web Application Firewall (WAF) dari serangan DDoS dan siber.',
  },
  {
    icon: Zap,
    title: 'Fast Loading CDN',
    description: 'Akselerasi konten super cepat dengan <strong>Cloudflare</strong> Content Delivery Network.',
  },
  {
    icon: Activity,
    title: 'Realtime Maintenance',
    description: 'Dukungan teknis 24/7 untuk memastikan performa website maksimal.',
  },
]

export default function InfrastructureGrid() {
  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ backgroundColor: DARK_NAVY }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Infrastructure Grid
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Berdasarkan data Media Profile. Fondasi teknologi yang mendukung 1,200+ media.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-[#00AEEF]/30 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#00AEEF]/10 text-[#00AEEF] mb-6 group-hover:bg-[#00AEEF]/20 transition-colors">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p
                  className="text-slate-400 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: card.description }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

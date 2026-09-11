'use client'

import { motion } from 'framer-motion'

export default function PortfolioSlider() {
  const campaigns = [
    { id: 1, title: 'Campaign 1', image: '/images/portfolios/campaign1.webp' },
    { id: 2, title: 'Campaign 2', image: '/images/portfolios/campaign2.webp' },
    { id: 3, title: 'Campaign 3', image: '/images/portfolios/campaign3.webp' },
    { id: 4, title: 'Campaign 4', image: '/images/portfolios/campaign4.webp' },
    { id: 5, title: 'Campaign 5', image: '/images/portfolios/campaign5.webp' },
  ]

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#001A2C] mb-6">
            Portofolio Kampanye & Publikasi
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Berbagai kampanye dan publikasi yang telah dijalankan bersama brand dan mitra melalui jaringan media Promedia Group.
          </p>
        </motion.div>
      </div>

      {/* Marquee Slider */}
      <div className="relative w-full overflow-hidden marquee-container group">
        {/* Gradients for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 sm:gap-8 w-max">
          {/* First Loop */}
          <div className="flex gap-6 sm:gap-8 animate-marquee group-hover:[animation-play-state:paused]">
            {campaigns.map((campaign, index) => (
              <div
                key={`${campaign.id}-${index}`}
                className="relative w-[280px] h-[180px] sm:w-[400px] sm:h-[260px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg bg-slate-200 group/card hover:shadow-xl transition-all duration-300"
              >
                {/* Placeholder visual */}
                <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                   <span className="text-slate-400 font-bold text-lg">{campaign.title}</span>
                </div>
                <div className="absolute inset-0 bg-black/10 group-hover/card:bg-black/0 transition-colors duration-300" />
              </div>
            ))}
          </div>
          
          {/* Second Loop (Duplicate) */}
          <div className="flex gap-6 sm:gap-8 animate-marquee group-hover:[animation-play-state:paused]" aria-hidden="true">
            {campaigns.map((campaign, index) => (
              <div
                key={`${campaign.id}-${index}-dup`}
                className="relative w-[280px] h-[180px] sm:w-[400px] sm:h-[260px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg bg-slate-200 group/card hover:shadow-xl transition-all duration-300"
              >
                 {/* Placeholder visual */}
                <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                   <span className="text-slate-400 font-bold text-lg">{campaign.title}</span>
                </div>
                 <div className="absolute inset-0 bg-black/10 group-hover/card:bg-black/0 transition-colors duration-300" />
              </div>
            ))}
          </div>

           {/* Third Loop (Triplicate for safety on wide screens) */}
           <div className="flex gap-6 sm:gap-8 animate-marquee group-hover:[animation-play-state:paused]" aria-hidden="true">
            {campaigns.map((campaign, index) => (
              <div
                key={`${campaign.id}-${index}-dup2`}
                className="relative w-[280px] h-[180px] sm:w-[400px] sm:h-[260px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg bg-slate-200 group/card hover:shadow-xl transition-all duration-300"
              >
                 {/* Placeholder visual */}
                <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                   <span className="text-slate-400 font-bold text-lg">{campaign.title}</span>
                </div>
                 <div className="absolute inset-0 bg-black/10 group-hover/card:bg-black/0 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
      `}</style>
    </section>
  )
}

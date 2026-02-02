'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#001A2C] mb-4">
            Ready to Upgrade Your Media Tech?
          </h2>
          <p className="text-slate-600 text-lg mb-10">
            Bergabung dengan program Mediapreneur dan akses infrastruktur Roweb untuk media Anda.
          </p>
          <Link href="/program/mediapreneur">
            <motion.span
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl bg-[#00AEEF] hover:bg-[#009ad6] shadow-lg shadow-[#00AEEF]/30 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Pelajari Program Mediapreneur
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

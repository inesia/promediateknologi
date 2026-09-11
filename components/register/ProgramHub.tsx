'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Newspaper, PenTool, Share2, MousePointerClick, BookOpen, UserPlus } from 'lucide-react'
import { PROGRAMS, getPartnerFormUrl } from '@/lib/programRegistration'
import type { ProgramSlug } from '@/lib/programRegistration'

const iconBySlug: Record<ProgramSlug, typeof Newspaper> = {
  mediapreneur: Newspaper,
  socmedpreneur: Share2,
}

const colorBySlug: Record<ProgramSlug, string> = {
  mediapreneur: 'bg-[#00AEEF]/10 text-[#00AEEF] border-[#00AEEF]/20',
  socmedpreneur: 'bg-emerald-50 text-emerald-600 border-emerald-100',
}

const registrationSteps = [
  {
    icon: MousePointerClick,
    title: 'Pilih program',
    description: 'Tentukan jalur yang sesuai dengan profil Anda',
  },
  {
    icon: BookOpen,
    title: 'Pelajari persyaratan',
    description: 'Baca detail program dan ketentuan pendaftaran',
  },
  {
    icon: UserPlus,
    title: 'Daftar resmi',
    description: 'Lanjut lewat tombol Daftar di kartu program',
  },
]

function RegistrationSteps() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
      className="mt-14 lg:mt-16"
    >
      <p className="text-center text-xs font-bold text-[#00AEEF] uppercase tracking-widest mb-6">
        Alur Pendaftaran
      </p>

      <div className="relative max-w-4xl mx-auto">
        <div
          className="hidden md:block absolute top-7 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-[#00AEEF]/20 via-[#00AEEF]/40 to-[#00AEEF]/20"
          aria-hidden
        />

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {registrationSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <li
                key={step.title}
                className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-0 md:text-center rounded-2xl md:rounded-none bg-white md:bg-transparent border border-slate-200 md:border-0 shadow-sm md:shadow-none p-5 md:p-0"
              >
                <div className="relative shrink-0 md:mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00AEEF] to-[#2D74B3] flex items-center justify-center shadow-lg shadow-[#00AEEF]/20">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#001A2C] text-white text-xs font-black flex items-center justify-center ring-2 ring-white">
                    {index + 1}
                  </span>
                </div>

                <div className="min-w-0 flex-1 md:flex-none">
                  <h3 className="text-sm font-black text-[#001A2C] mb-1">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </motion.div>
  )
}

export default function ProgramHub() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 bg-[#001A2C] overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 174, 239, 0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 174, 239, 0.06) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold text-[#00AEEF] uppercase tracking-wide mb-4">
              Jadi Bagian dari Promedia Group
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
              Pilih Program Anda
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Belum yakin? Pelajari tiap program terlebih dahulu, lalu daftar saat Anda siap. Setiap
              jalur memiliki persyaratan dan alur onboarding yang berbeda.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {PROGRAMS.map((program, index) => {
              const Icon = iconBySlug[program.slug]
              return (
                <motion.article
                  key={program.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="flex flex-col rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden hover:shadow-md hover:border-[#00AEEF]/25 transition-all"
                >
                  <div className="p-6 flex flex-col flex-1">
                    <div
                      className={`inline-flex w-12 h-12 items-center justify-center rounded-xl border mb-4 ${colorBySlug[program.slug]}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <p className="text-[10px] font-bold text-[#00AEEF] uppercase tracking-wide mb-1">
                      {program.menuLabel}
                    </p>
                    <h2 className="text-xl font-black text-[#001A2C] mb-2">{program.title}</h2>
                    <p className="text-sm font-medium text-slate-700 mb-3">{program.tagline}</p>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
                      {program.description}
                    </p>
                    <p className="text-xs text-slate-400 mb-6">
                      <span className="font-semibold text-slate-600">Cocok untuk:</span>{' '}
                      {program.forWho}
                    </p>
                    <Link
                      href={program.programHref}
                      className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 bg-[#00AEEF] text-white text-sm font-bold rounded-xl hover:bg-[#0099d6] transition-colors"
                    >
                      Pelajari Program
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href={getPartnerFormUrl(program.slug)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 mt-2 bg-white text-[#00AEEF] border-2 border-[#00AEEF] text-sm font-bold rounded-xl hover:bg-[#00AEEF]/5 transition-colors"
                    >
                      {program.ctaLabel}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.article>
              )
            })}
          </div>

          <RegistrationSteps />
        </div>
      </section>
    </div>
  )
}

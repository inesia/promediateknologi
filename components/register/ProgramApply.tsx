'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react'
import {
  getPartnerFormUrl,
  normalizeProgramSlug,
  PROGRAMS_BY_SLUG,
  type ProgramSlug,
} from '@/lib/programRegistration'

export default function ProgramApply() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const raw = searchParams.get('program') ?? searchParams.get('role')
  const slug = normalizeProgramSlug(raw)

  useEffect(() => {
    if (raw && !slug) {
      router.replace('/register')
    }
  }, [raw, slug, router])

  if (!slug) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <p className="text-slate-500">Mengalihkan…</p>
      </div>
    )
  }

  const program = PROGRAMS_BY_SLUG[slug as ProgramSlug]

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-28 pb-12 lg:pt-32 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Link
            href={program.programHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#00AEEF] hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke halaman program {program.title}
          </Link>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs font-semibold text-[#00AEEF] uppercase tracking-wide mb-2">
              Langkah terakhir
            </p>
            <h1 className="text-3xl sm:text-4xl font-black text-[#001A2C] mb-3">
              {program.ctaLabel}
            </h1>
            <p className="text-slate-600 leading-relaxed">{program.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm mb-8">
            <h2 className="text-lg font-black text-[#001A2C] mb-4">Sebelum mengirim lamaran</h2>
            <ul className="space-y-3">
              {program.beforeApply.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-[#00AEEF] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {program.applyNote && (
              <p className="mt-5 text-xs text-slate-500 bg-slate-50 rounded-lg p-4 border border-slate-100">
                {program.applyNote}
              </p>
            )}
          </div>

          {slug === 'mediapreneur' && (
            <div className="rounded-2xl border border-[#00AEEF]/20 bg-[#00AEEF]/5 p-6 sm:p-8 mb-8">
              <h2 className="text-base font-black text-[#001A2C] mb-4 uppercase">
                Persyaratan kemitraan
              </h2>
              <ul className="space-y-3 text-sm text-slate-700 list-disc pl-5 marker:text-[#00AEEF]">
                <li>
                  Bercita-cita menjadi pengusaha media daring profesional dengan tim editorial yang
                  komitmen.
                </li>
                <li>Minimal 3 orang: 1 Pemimpin Redaksi dan 2 Editor.</li>
                <li>
                  CV/profil terbaru per anggota tim (termasuk portofolio) dalam PDF, maks. 10 MB per
                  file.
                </li>
                <li>Minimal 1 tahun pengalaman menulis atau jurnalisme per anggota tim.</li>
                <li>
                  <strong>Seluruh pendaftaran gratis.</strong> Laporkan permintaan biaya ke WhatsApp{' '}
                  <strong>0811 2007 667</strong> (text only).
                </li>
                <li>
                  Setelah mengirim, tunggu undangan Zoom via email terdaftar—pastikan alamat email
                  benar.
                </li>
              </ul>
            </div>
          )}

          <a
            href={getPartnerFormUrl(slug)}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div
              className="w-full py-5 px-8 bg-gradient-to-r from-[#00AEEF] to-[#2D74B3] text-white font-bold rounded-2xl shadow-xl shadow-[#00AEEF]/20 hover:shadow-[#00AEEF]/40 transition-all flex items-center justify-center gap-3 text-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Buka Formulir Pendaftaran Resmi
              <ExternalLink className="w-5 h-5" />
            </motion.div>
          </a>

          <p className="mt-4 text-center text-xs text-slate-400">
            Disediakan via Fillout
            {slug !== 'mediapreneur' && (
              <> · sementara menggunakan formulir Publisher Media Network hingga URL program ini tersedia</>
            )}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center text-center">
            <Link
              href="/register"
              className="text-sm font-semibold text-slate-500 hover:text-[#00AEEF]"
            >
              Bandingkan program lain
            </Link>
            <span className="hidden sm:inline text-slate-300">·</span>
            <Link
              href={program.programHref}
              className="text-sm font-semibold text-slate-500 hover:text-[#00AEEF]"
            >
              Baca ulang detail program
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

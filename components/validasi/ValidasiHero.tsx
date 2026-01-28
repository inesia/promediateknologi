'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Search, Loader2, RotateCcw } from 'lucide-react'
import ValidResultCard from './ValidResultCard'

type ValidationState = 'idle' | 'loading' | 'valid' | 'invalid'

export default function ValidasiHero() {
  const [cardId, setCardId] = useState('')
  const [validationState, setValidationState] = useState<ValidationState>('idle')
  const [hasGlow, setHasGlow] = useState(false)

  const handleValidation = () => {
    if (!cardId.trim()) return

    setValidationState('loading')

    // Mock validation - simulate API call
    setTimeout(() => {
      setValidationState('valid')
    }, 1500)
  }

  const handleReset = () => {
    setCardId('')
    setValidationState('idle')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20 pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00AEEF]/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#001A2C] mb-4 leading-tight">
              Verify Membership Status.
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Pastikan validitas kartu pers dan status keanggotaan jaringan Promedia Teknologi.
            </p>
          </motion.div>

          {/* Input Component */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative">
              {/* Input Field */}
              <div className="relative">
                <input
                  type="text"
                  value={cardId}
                  onChange={(e) => {
                    setCardId(e.target.value)
                    setHasGlow(e.target.value.length > 0)
                  }}
                  onFocus={() => setHasGlow(true)}
                  onBlur={() => setHasGlow(cardId.length > 0)}
                  placeholder="Masukkan Nomor ID Kartu Pers (Cth: PM-2024-X88)"
                  className={`w-full px-6 py-4 pr-14 text-lg border-2 rounded-full transition-all duration-300 ${
                    hasGlow
                      ? 'border-[#00AEEF] shadow-lg shadow-[#00AEEF]/20 bg-white'
                      : 'border-slate-200 bg-slate-50'
                  } focus:outline-none focus:ring-0`}
                  disabled={validationState === 'loading'}
                />

                {/* Search Icon */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <Search className={`w-6 h-6 ${hasGlow ? 'text-[#00AEEF]' : 'text-slate-400'}`} />
                </div>
              </div>

              {/* Glow Effect */}
              {hasGlow && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-[#00AEEF]/10 blur-xl -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}

              {/* Scanning Line (Loading State) */}
              <AnimatePresence>
                {validationState === 'loading' && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    exit={{ opacity: 0, scaleX: 0 }}
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00AEEF] to-transparent"
                  >
                    <motion.div
                      className="h-full w-32 bg-[#00AEEF]"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Check Status Button */}
            <motion.button
              onClick={handleValidation}
              disabled={!cardId.trim() || validationState === 'loading'}
              className={`mt-6 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                cardId.trim() && validationState !== 'loading'
                  ? 'bg-[#00AEEF] text-white shadow-lg shadow-[#00AEEF]/25 hover:shadow-[#00AEEF]/40 hover:scale-105'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
              whileHover={
                cardId.trim() && validationState !== 'loading'
                  ? { scale: 1.05 }
                  : {}
              }
              whileTap={
                cardId.trim() && validationState !== 'loading'
                  ? { scale: 0.95 }
                  : {}
              }
            >
              {validationState === 'loading' ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Checking...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Check Status
                </span>
              )}
            </motion.button>
          </motion.div>

          {/* Valid Result Card */}
          <AnimatePresence>
            {validationState === 'valid' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 20,
                }}
                className="mt-12"
              >
                <ValidResultCard cardId={cardId} />
                
                {/* Reset Button */}
                <motion.button
                  onClick={handleReset}
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 text-slate-600 border border-slate-300 rounded-full hover:bg-slate-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Reset / Cek ID Lain</span>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

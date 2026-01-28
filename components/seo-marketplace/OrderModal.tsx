'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X, Upload, FileText } from 'lucide-react'

interface OrderModalProps {
  media: {
    id: string
    name: string
    price: number
  }
  onClose: () => void
  onSubmit: (data: {
    anchorText: string
    targetUrl: string
    articleOption: 'upload' | 'request'
  }) => void
}

export default function OrderModal({ media, onClose, onSubmit }: OrderModalProps) {
  const [anchorText, setAnchorText] = useState('')
  const [targetUrl, setTargetUrl] = useState('')
  const [articleOption, setArticleOption] = useState<'upload' | 'request'>('upload')
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (anchorText && targetUrl) {
      onSubmit({
        anchorText,
        targetUrl,
        articleOption,
      })
    }
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5 text-slate-600" />
          </button>

          {/* Header */}
          <h2 className="text-2xl font-black text-[#001A2C] mb-2">
            Order Backlink
          </h2>
          <p className="text-slate-600 mb-6">
            Media: <span className="font-semibold">{media.name}</span> •{' '}
            <span className="font-semibold text-[#00AEEF]">{formatCurrency(media.price)}</span>
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Anchor Text */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Anchor Text <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={anchorText}
                onChange={(e) => setAnchorText(e.target.value)}
                placeholder="Kata kunci yang mau dilink"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00AEEF]/20 focus:border-[#00AEEF] transition-all"
              />
              <p className="text-xs text-slate-500 mt-1">
                Kata kunci yang akan menjadi teks link di artikel
              </p>
            </div>

            {/* Target URL */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Target URL <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                value={targetUrl}
                onChange={(e) => setTargetUrl(e.target.value)}
                placeholder="https://example.com"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00AEEF]/20 focus:border-[#00AEEF] transition-all"
              />
              <p className="text-xs text-slate-500 mt-1">
                URL tujuan yang akan di-link
              </p>
            </div>

            {/* Article Option */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Artikel
              </label>
              <div className="space-y-3">
                {/* Upload Option */}
                <label className="flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
                  <input
                    type="radio"
                    name="articleOption"
                    value="upload"
                    checked={articleOption === 'upload'}
                    onChange={() => setArticleOption('upload')}
                    className="mt-1 w-4 h-4 text-[#00AEEF] border-slate-300 focus:ring-[#00AEEF]"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Upload className="w-5 h-5 text-[#00AEEF]" />
                      <span className="font-semibold text-slate-700">Upload Artikel Siap Tayang</span>
                    </div>
                    <p className="text-sm text-slate-500">
                      Upload artikel yang sudah siap untuk ditayangkan
                    </p>
                    {articleOption === 'upload' && (
                      <div className="mt-3">
                        <input
                          type="file"
                          accept=".doc,.docx,.pdf"
                          onChange={(e) => setUploadedFile(e.target.files?.[0] || null)}
                          className="text-sm"
                        />
                      </div>
                    )}
                  </div>
                </label>

                {/* Request Option */}
                <label className="flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
                  <input
                    type="radio"
                    name="articleOption"
                    value="request"
                    checked={articleOption === 'request'}
                    onChange={() => setArticleOption('request')}
                    className="mt-1 w-4 h-4 text-[#00AEEF] border-slate-300 focus:ring-[#00AEEF]"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <FileText className="w-5 h-5 text-[#00AEEF]" />
                      <span className="font-semibold text-slate-700">
                        Request Artikel dari Redaksi
                      </span>
                      <span className="px-2 py-1 bg-[#00AEEF]/10 text-[#00AEEF] rounded text-xs font-semibold">
                        +Rp 500.000
                      </span>
                    </div>
                    <p className="text-sm text-slate-500">
                      Tim redaksi akan membuat artikel untuk Anda
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
              >
                Batal
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-[#00AEEF] text-white rounded-lg font-semibold hover:bg-[#2D74B3] transition-colors"
              >
                Submit Order
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

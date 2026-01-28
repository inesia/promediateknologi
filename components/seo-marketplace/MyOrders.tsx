'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Clock, ExternalLink } from 'lucide-react'

interface Order {
  mediaId: string
  mediaName: string
  price: number
  anchorText: string
  targetUrl: string
  articleOption: 'upload' | 'request'
}

interface MyOrdersProps {
  orders: Order[]
}

const orderStatuses = ['Processing', 'Published', 'Live Link']

export default function MyOrders({ orders }: MyOrdersProps) {
  const getStatusIndex = (order: Order) => {
    // Dummy logic - in real app, this would come from backend
    return Math.min(Math.floor(Math.random() * 3), 2)
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
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-[#001A2C] mb-8">
            My Orders
          </h2>

          {orders.length > 0 ? (
            <div className="space-y-6">
              {orders.map((order, index) => {
                const statusIndex = getStatusIndex(order)
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* Order Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-black text-[#001A2C] mb-1">
                          {order.mediaName}
                        </h3>
                        <p className="text-sm text-slate-600">
                          Anchor: <span className="font-semibold">{order.anchorText}</span>
                        </p>
                        <p className="text-sm text-slate-600">
                          Target: <span className="font-mono text-xs">{order.targetUrl}</span>
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-[#00AEEF] mb-1">
                          {formatCurrency(order.price)}
                        </div>
                        <div className="text-xs text-slate-500">
                          {order.articleOption === 'request' && '+ Artikel'}
                        </div>
                      </div>
                    </div>

                    {/* Status Steps */}
                    <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                      {orderStatuses.map((status, idx) => {
                        const isCompleted = idx <= statusIndex
                        const isCurrent = idx === statusIndex
                        const Icon = isCompleted ? CheckCircle : Clock

                        return (
                          <div key={idx} className="flex items-center gap-2 flex-1">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                isCompleted
                                  ? 'bg-[#00AEEF] text-white'
                                  : 'bg-slate-200 text-slate-400'
                              }`}
                            >
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                              <div
                                className={`text-xs font-semibold ${
                                  isCurrent ? 'text-[#00AEEF]' : 'text-slate-500'
                                }`}
                              >
                                {status}
                              </div>
                              {isCurrent && status === 'Live Link' && (
                                <a
                                  href={order.targetUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-xs text-[#00AEEF] hover:text-[#2D74B3] mt-1"
                                >
                                  Lihat hasil
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              )}
                            </div>
                            {idx < orderStatuses.length - 1 && (
                              <div
                                className={`h-0.5 flex-1 ${
                                  idx < statusIndex ? 'bg-[#00AEEF]' : 'bg-slate-200'
                                }`}
                              />
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-xl border border-slate-200">
              <p className="text-slate-500 mb-4">Belum ada order</p>
              <p className="text-sm text-slate-400">
                Pilih media dari Marketplace untuk memulai
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

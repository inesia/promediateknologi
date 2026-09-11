'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { 
  Newspaper, 
  PenTool, 
  Sparkles, 
  Network,
  TrendingUp,
  Users,
  MapPin,
  Zap,
  Clock,
  Code,
  BookOpen,
  BarChart3,
  CheckCircle2
} from 'lucide-react'

// Simple Placeholder Image Component
function PlaceholderImage({ className = '' }: { className?: string }) {
  return (
    <div className={`rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center ${className}`}>
      <div className="w-16 h-16 rounded-full bg-white/50 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full bg-[#00AEEF]/20" />
      </div>
    </div>
  )
}

interface BentoCardProps {
  title: string
  description: string
  icon: React.ReactNode
  className?: string
  index: number
  visual?: 'main' | 'image' | 'wide-image' | 'uptime' | 'none'
  parallaxOffset?: number
  isMainCard?: boolean
  badge?: string
  metric?: string
}

function BentoCard({ title, description, icon, className = '', index, visual, parallaxOffset = 0, isMainCard = false, badge, metric }: BentoCardProps) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })
  
  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [parallaxOffset, -parallaxOffset])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      style={{ y }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={`group relative rounded-3xl bg-white/80 backdrop-blur-sm border border-slate-100 hover:border-[#00AEEF]/30 transition-all duration-300 overflow-hidden ${className}`}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 20px 40px -12px rgba(0, 174, 239, 0.15)',
        transition: { duration: 0.3 }
      }}
    >
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/3 via-transparent to-[#2D74B3]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {/* Placeholder Images based on visual type */}
      {visual === 'main' && (
        <div className="absolute bottom-0 right-0 w-48 h-48 opacity-30">
          <PlaceholderImage className="w-full h-full" />
        </div>
      )}
      {visual === 'image' && (
        <div className="absolute bottom-4 right-4 w-32 h-32 opacity-30">
          <PlaceholderImage className="w-full h-full" />
        </div>
      )}
      {visual === 'wide-image' && (
        <div className="absolute bottom-4 right-4 left-4 h-24 opacity-30">
          <PlaceholderImage className="w-full h-full" />
        </div>
      )}
      {visual === 'uptime' && (
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center justify-between text-xs text-[#00AEEF]/60 mb-2">
            <span>Uptime</span>
            <span className="font-semibold">99.9%</span>
          </div>
          <div className="h-2 bg-[#00AEEF]/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-[#00AEEF] to-[#2D74B3]"
              initial={{ width: 0 }}
              animate={{ width: '99.9%' }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </div>
        </div>
      )}

      {/* 3D Glass Card (Main Card Only) */}
      {isMainCard && (
        <motion.div 
          className="absolute top-8 right-8 w-32 h-40 lg:w-40 lg:h-48 rounded-2xl bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-md border border-white/30 shadow-2xl"
          style={{
            transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)',
            transformStyle: 'preserve-3d'
          }}
          animate={{
            y: [0, -10, 0],
            rotateY: [-15, -12, -15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <div className="absolute inset-4 rounded-xl bg-gradient-to-br from-[#00AEEF]/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="h-2 bg-[#00AEEF]/30 rounded-full mb-2" />
            <div className="h-2 bg-[#00AEEF]/20 rounded-full w-2/3" />
          </div>
        </motion.div>
      )}

      {/* Badge */}
      {badge && (
        <motion.div 
          className="absolute top-4 right-4 px-3 py-1 bg-[#00AEEF]/10 border border-[#00AEEF]/30 rounded-full z-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-[0.65rem] font-semibold text-[#00AEEF] uppercase tracking-wide">
            {badge}
          </span>
        </motion.div>
      )}

      {/* Content */}
      <div className="relative p-5 lg:p-6 h-full flex flex-col z-10">
        {/* Icon */}
        <motion.div 
          className="flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#00AEEF]/10 to-[#2D74B3]/10 mb-4 lg:mb-6 text-[#00AEEF] group-hover:scale-110 transition-transform duration-300"
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-xl lg:text-2xl font-bold text-[#001A2C] mb-3 lg:mb-4 group-hover:text-[#00AEEF] transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm lg:text-base text-slate-600 leading-relaxed flex-grow">
          {description}
        </p>

        {/* Metric (for stat cards) */}
        {metric && (
          <div className="mt-4 pt-4 border-t border-[#00AEEF]/10">
            <p className="text-xs text-slate-500">{metric}</p>
          </div>
        )}

        {/* Hover Arrow */}
        <motion.div 
          className="mt-4 text-[#00AEEF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          <span className="text-sm font-semibold flex items-center gap-2">
            Pelajari Lebih Lanjut
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </span>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function BentoGrid() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  // Spotlight cursor effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = (sectionRef.current as HTMLElement).getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    const section = sectionRef.current as HTMLElement | null
    if (section) {
      section.addEventListener('mousemove', handleMouseMove)
      section.addEventListener('mouseenter', () => setIsHovering(true))
      section.addEventListener('mouseleave', () => setIsHovering(false))

      return () => {
        section.removeEventListener('mousemove', handleMouseMove)
        section.removeEventListener('mouseenter', () => setIsHovering(true))
        section.removeEventListener('mouseleave', () => setIsHovering(false))
      }
    }
  }, [])

  // Scroll reveal animation for heading
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"]
  })
  
  const headingY = useTransform(scrollYProgress, [0, 1], [100, 0])
  const headingOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1])

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 lg:py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 10%, rgba(248,250,252,0.3) 50%, rgba(255,255,255,0.5) 90%, rgba(255,255,255,0) 100%)'
      }}
    >
      {/* Continuous Wave Background from Hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -top-40">
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00AEEF" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#2D74B3" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#00AEEF" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path 
            d="M0,400 C320,300 420,500 720,400 C1020,300 1120,500 1440,400 L1440,800 L0,800 Z"
            fill="url(#wave-gradient)"
          />
        </svg>
      </div>

      {/* Sticky Ambient Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-[#00AEEF]/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-40 w-[500px] h-[500px] bg-[#2D74B3]/3 rounded-full blur-3xl" />
      </div>

      {/* Cursor Spotlight Effect */}
      {isHovering && (
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(0,174,239,0.08) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
            zIndex: 1
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          className="text-center mb-12 lg:mb-16 relative overflow-hidden"
          style={{ y: headingY, opacity: headingOpacity }}
        >
          <motion.div
            className="inline-flex items-center justify-center mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="px-4 py-2 bg-[#00AEEF]/5 border border-[#00AEEF]/20 rounded-full backdrop-blur-sm">
              <span className="text-xs font-semibold text-[#00AEEF] tracking-wide uppercase">
                Ekosistem Terintegrasi
              </span>
            </div>
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#001A2C] mb-4 relative"
            style={{ letterSpacing: '-0.02em' }}
          >
            <span className="relative inline-block">
              Layanan & Ekosistem
              {/* Reveal mask effect */}
              <motion.span
                className="absolute inset-0 bg-white"
                initial={{ scaleY: 1 }}
                animate={isInView ? { scaleY: 0 } : { scaleY: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
                style={{ transformOrigin: 'bottom' }}
              />
            </span>
          </motion.h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Solusi lengkap untuk membangun dan mengembangkan bisnis media digital Anda
          </p>
        </motion.div>

        {/* Bento Grid Layout - More Dense */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {/* Card 1 - Mediapreneur Ecosystem (Large - Top Left) */}
          <BentoCard
            index={0}
            title="Publisher Media Network"
            description="Platform all-in-one untuk membangun dan mengelola portal media digital. Dari CMS hingga monetisasi, semua terintegrasi dalam satu ekosistem yang powerful."
            icon={<Newspaper className="w-6 h-6 lg:w-7 lg:h-7" />}
            className="md:col-span-2 lg:row-span-2 min-h-[300px] lg:min-h-[380px]"
            visual="main"
            parallaxOffset={50}
            isMainCard={true}
            badge="Updated Daily"
          />



          {/* Card 2 - 1,000+ Partners */}
          <BentoCard
            index={1}
            title="1,000+"
            description="Media partners bergabung dalam ekosistem Promedia"
            icon={<Users className="w-6 h-6 lg:w-7 lg:h-7" />}
            className="min-h-[260px]"
            visual="image"
            parallaxOffset={20}
            metric="Dari Sabang sampai Merauke"
          />

          {/* Card 3 - 24/7 Support (Small with Uptime) */}
          <BentoCard
            index={2}
            title="24/7 Support"
            description="Dukungan teknis tersedia kapan saja untuk memastikan operasional lancar."
            icon={<Clock className="w-6 h-6 lg:w-7 lg:h-7" />}
            className="min-h-[260px]"
            visual="uptime"
            parallaxOffset={15}
          />

          {/* Card 4 - Networking & Infrastructure (Wide - Bottom) */}
          <BentoCard
            index={3}
            title="Networking & Infrastructure"
            description="Jangkauan ribuan mitra media di seluruh Indonesia dengan infrastruktur teknologi yang handal dan skalabel."
            icon={<Network className="w-6 h-6 lg:w-7 lg:h-7" />}
            className="md:col-span-2 lg:col-span-2 min-h-[260px]"
            visual="wide-image"
            parallaxOffset={35}
          />
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            href="https://bit.ly/promediamitra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-[#001A2C] bg-transparent border-2 border-[#00AEEF]/30 rounded-xl hover:border-[#00AEEF] hover:bg-[#00AEEF]/5 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Jelajahi Semua Layanan
            <Zap className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

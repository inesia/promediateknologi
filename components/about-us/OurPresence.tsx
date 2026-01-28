'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { MapPin, ExternalLink } from 'lucide-react'

interface Office {
  id: string
  name: string
  city: string
  address: string
  badge: string
  mapUrl: string
  // Coordinates for map (normalized 0-100)
  x: number
  y: number
}

const offices: Office[] = [
  {
    id: 'bandung',
    name: 'Headquarter',
    city: 'Bandung',
    address: 'Jl. Terusan Halimun No.52, Lkr. Sel., Kec. Lengkong, Kota Bandung',
    badge: 'Pusat Inovasi',
    mapUrl: 'https://maps.google.com/?q=Jl.+Terusan+Halimun+No.52,+Lkr.+Sel.,+Kec.+Lengkong,+Kota+Bandung',
    x: 45, // Approximate position on Indonesia map
    y: 65,
  },
  {
    id: 'jakarta',
    name: 'Branch Office',
    city: 'Jakarta',
    address: 'Jl. Tebet Barat Dalam I No.37B, Tebet Barat, Jakarta Selatan',
    badge: 'Hub Strategis',
    mapUrl: 'https://maps.google.com/?q=Jl.+Tebet+Barat+Dalam+I+No.37B,+Tebet+Barat,+Jakarta+Selatan',
    x: 48,
    y: 70,
  },
]

// Simplified Indonesia outline coordinates (normalized)
const indonesiaOutline = [
  { x: 20, y: 30 }, // Sumatra start
  { x: 25, y: 35 },
  { x: 30, y: 40 },
  { x: 35, y: 45 },
  { x: 40, y: 50 },
  { x: 45, y: 55 }, // Java
  { x: 50, y: 60 },
  { x: 55, y: 65 },
  { x: 60, y: 70 },
  { x: 65, y: 75 }, // Kalimantan
  { x: 70, y: 70 },
  { x: 75, y: 65 },
  { x: 80, y: 60 }, // Sulawesi
  { x: 85, y: 55 },
  { x: 90, y: 50 },
  { x: 85, y: 45 },
  { x: 80, y: 40 },
  { x: 75, y: 35 },
  { x: 70, y: 30 },
  { x: 65, y: 25 },
  { x: 60, y: 30 },
  { x: 55, y: 35 },
  { x: 50, y: 40 },
  { x: 45, y: 45 },
  { x: 40, y: 50 },
  { x: 35, y: 45 },
  { x: 30, y: 40 },
  { x: 25, y: 35 },
  { x: 20, y: 30 },
]

export default function OurPresence() {
  const [hoveredOffice, setHoveredOffice] = useState<string | null>(null)
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  return (
    <section 
      id="lokasi"
      className="relative py-32 lg:py-40 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#001A2C] mb-6">
            Our Presence
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Kami hadir di kota-kota strategis untuk melayani ekosistem media digital Indonesia
          </p>
        </motion.div>

        {/* Map Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[500px] lg:h-[600px] mb-20"
        >
          {/* Map Container */}
          <div className="relative w-full h-full bg-white rounded-2xl border border-slate-200 shadow-xl overflow-visible">
            {/* SVG Map */}
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {/* Indonesia outline dots */}
              {indonesiaOutline.map((point, index) => (
                <circle
                  key={index}
                  cx={point.x}
                  cy={point.y}
                  r="0.3"
                  fill="#00AEEF"
                  opacity="0.2"
                />
              ))}

              {/* Connection lines */}
              {indonesiaOutline.map((point, index) => {
                const nextPoint = indonesiaOutline[(index + 1) % indonesiaOutline.length]
                return (
                  <line
                    key={`line-${index}`}
                    x1={point.x}
                    y1={point.y}
                    x2={nextPoint.x}
                    y2={nextPoint.y}
                    stroke="#00AEEF"
                    strokeWidth="0.1"
                    opacity="0.1"
                  />
                )
              })}

              {/* Office Hotspots */}
              {offices.map((office) => (
                <g key={office.id}>
                  {/* Pulsing circles */}
                  {[...Array(3)].map((_, i) => (
                    <motion.circle
                      key={`pulse-${i}`}
                      cx={office.x}
                      cy={office.y}
                      r={2 + i * 1.5}
                      fill="none"
                      stroke="#00AEEF"
                      strokeWidth="0.2"
                      opacity={0.3 - i * 0.1}
                      initial={{ scale: 0, opacity: 0.3 }}
                      animate={{
                        scale: [0, 1.5, 2],
                        opacity: [0.3, 0.1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: 'easeOut',
                      }}
                    />
                  ))}

                  {/* Main hotspot */}
                  <motion.circle
                    cx={office.x}
                    cy={office.y}
                    r="1.5"
                    fill="#00AEEF"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{ scale: 1.5 }}
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={() => setHoveredOffice(office.id)}
                    onMouseLeave={() => setHoveredOffice(null)}
                  />
                </g>
              ))}
            </svg>

            {/* Glassmorphism Cards on Hover - positioned absolutely */}
            {offices.map((office) => (
              hoveredOffice === office.id && (
                <motion.div
                  key={`card-${office.id}`}
                  initial={{ opacity: 0, y: -10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.9 }}
                  className="absolute bg-white/95 backdrop-blur-xl rounded-lg border border-white/50 shadow-2xl p-4 pointer-events-none z-20 whitespace-nowrap"
                  style={{
                    left: `${office.x}%`,
                    top: `${office.y - 8}%`,
                    transform: 'translate(-50%, -100%)',
                  }}
                >
                  <div className="text-sm font-semibold text-[#001A2C] mb-1">
                    {office.city}
                  </div>
                  <div className="text-xs text-slate-500">
                    {office.name}
                  </div>
                </motion.div>
              )
            ))}
          </div>
        </motion.div>

        {/* Office Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {offices.map((office, index) => (
            <OfficeCard key={office.id} office={office} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface OfficeCardProps {
  office: Office
  index: number
}

function OfficeCard({ office, index }: OfficeCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 200 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY
    
    // Magnetic effect: stronger when closer
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)
    const maxDistance = 200
    const strength = Math.max(0, 1 - distance / maxDistance)
    
    x.set(distanceX * strength * 0.1)
    y.set(distanceY * strength * 0.1)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: xSpring,
        y: ySpring,
      }}
      className="group relative"
    >
      <div className="relative h-full p-8 lg:p-10 bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00AEEF]/10 rounded-full mb-6">
          <span className="text-sm font-semibold text-[#00AEEF]">
            {office.badge}
          </span>
        </div>

        {/* Office Type */}
        <div className="text-sm font-semibold text-[#00AEEF] mb-2 uppercase tracking-wide">
          {office.name}
        </div>

        {/* City */}
        <h3 className="text-3xl lg:text-4xl font-black text-[#001A2C] mb-6">
          {office.city}
        </h3>

        {/* Address with micro-interaction */}
        <div className="flex items-start gap-3 mb-8">
          <MapPin className="w-5 h-5 text-[#00AEEF] mt-1 flex-shrink-0" />
          <AddressText address={office.address} />
        </div>

        {/* Google Maps Button */}
        <motion.a
          href={office.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn inline-flex items-center gap-2 px-6 py-3 border-2 border-[#00AEEF]/30 text-[#00AEEF] font-semibold rounded-lg hover:border-[#00AEEF] hover:bg-[#00AEEF]/5 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Buka di Google Maps</span>
          <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </motion.a>

        {/* Decorative accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#00AEEF]/10 to-transparent rounded-bl-full" />
      </div>
    </motion.div>
  )
}

function AddressText({ address }: { address: string }) {
  const [isHovered, setIsHovered] = useState(false)
  const words = address.split(' ')

  return (
    <p
      className="leading-relaxed font-light"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-1"
          animate={{
            color: isHovered ? '#001A2C' : '#64748b',
          }}
          transition={{
            duration: 0.3,
            delay: index * 0.02,
          }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  )
}

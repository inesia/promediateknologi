'use client'

import { useState, useEffect, Suspense } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import { 
  Newspaper, 
  PenTool, 
  Megaphone, 
  ChevronRight,
  Eye,
  EyeOff,
  CheckCircle2,
  Share2,
  Video
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Role types
type RoleType = 'mediapreneur' | 'contentpreneur' | 'advertiser' | 'socmedpreneur' | 'videopreneur' | null

// Testimonials data
const testimonials = [
  {
    text: "Promedia membantu saya membangun media digital yang profesional dan terpercaya.",
    author: "Media Partner",
    role: "Mediapreneur"
  },
  {
    text: "Ekosistem Promedia memberikan platform yang tepat untuk mengembangkan karier sebagai content creator.",
    author: "Content Creator",
    role: "Contentpreneur"
  },
  {
    text: "Expanding Universe - Bergabunglah dengan revolusi media digital Indonesia.",
    author: "Promedia Team",
    role: "Vision"
  }
]

// Role options
const roleOptions = [
  {
    id: 'mediapreneur' as RoleType,
    title: 'Mediapreneur',
    description: 'Untuk pemilik media/bisnis',
    icon: Newspaper,
    gradient: 'from-[#00AEEF] to-[#2D74B3]'
  },
  {
    id: 'contentpreneur' as RoleType,
    title: 'Contentpreneur',
    description: 'Untuk penulis/kreator',
    icon: PenTool,
    gradient: 'from-[#2D74B3] to-[#00AEEF]'
  },
  {
    id: 'socmedpreneur' as RoleType,
    title: 'Influencer Media Network',
    description: 'Untuk specialist media sosial',
    icon: Share2,
    gradient: 'from-[#00AEEF] to-[#2D74B3]'
  },
  /* {
    id: 'videopreneur' as RoleType,
    title: 'Videopreneur',
    description: 'Untuk kreator video',
    icon: Video,
    gradient: 'from-[#2D74B3] to-[#00AEEF]'
  },
  {
    id: 'advertiser' as RoleType,
    title: 'Advertiser',
    description: 'Untuk pengiklan',
    icon: Megaphone,
    gradient: 'from-[#00AEEF] to-[#2D74B3]'
  } */
]

// Form schema based on role
const createSchema = (role: RoleType) => {
  const baseSchema = z.object({
    fullName: z.string().min(3, 'Nama lengkap minimal 3 karakter'),
    email: z.string().email('Format email tidak valid'),
    whatsapp: z.string().min(10, 'Nomor WhatsApp minimal 10 digit').regex(/^[0-9]+$/, 'Nomor WhatsApp harus berupa angka'),
    password: z.string().min(8, 'Password minimal 8 karakter').regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password harus mengandung huruf besar, huruf kecil, dan angka'),
  })

  if (role === 'mediapreneur') {
    return baseSchema.extend({
      mediaName: z.string().min(2, 'Nama media minimal 2 karakter'),
      websiteLink: z.union([
        z.string().url('Format URL tidak valid'),
        z.string().length(0),
        z.undefined()
      ]).optional()
    })
  } else if (role === 'contentpreneur') {
    return baseSchema.extend({
      portfolioLink: z.string().url('Format URL tidak valid')
    })
  } else if (role === 'socmedpreneur') {
    return baseSchema.extend({
      portfolioLink: z.string().url('Format URL tidak valid')
    })
  } else if (role === 'videopreneur') {
    return baseSchema.extend({
      portfolioLink: z.string().url('Format URL tidak valid')
    })
  } else if (role === 'advertiser') {
    return baseSchema.extend({
      companyName: z.string().min(2, 'Nama perusahaan minimal 2 karakter')
    })
  }

  return baseSchema
}

// Password strength checker
const getPasswordStrength = (password: string): { strength: number; label: string; color: string; textColor: string } => {
  if (!password) return { strength: 0, label: '', color: '', textColor: '' }
  
  let strength = 0
  if (password.length >= 8) strength++
  if (/[a-z]/.test(password)) strength++
  if (/[A-Z]/.test(password)) strength++
  if (/\d/.test(password)) strength++
  if (/[^a-zA-Z\d]/.test(password)) strength++

  const levels = [
    { strength: 1, label: 'Sangat Lemah', color: 'bg-red-500', textColor: 'text-red-500' },
    { strength: 2, label: 'Lemah', color: 'bg-orange-500', textColor: 'text-orange-500' },
    { strength: 3, label: 'Sedang', color: 'bg-yellow-500', textColor: 'text-yellow-500' },
    { strength: 4, label: 'Kuat', color: 'bg-blue-500', textColor: 'text-blue-500' },
    { strength: 5, label: 'Sangat Kuat', color: 'bg-green-500', textColor: 'text-green-500' }
  ]

  return levels[Math.min(strength - 1, 4)] || levels[0]
}

function RegistrationForm() {
  const searchParams = useSearchParams()
  const roleParam = searchParams.get('role') as RoleType
  
  const [selectedRole, setSelectedRole] = useState<RoleType>(null)
  const [currentStep, setCurrentStep] = useState<1 | 2>(1)
  const [showPassword, setShowPassword] = useState(false)
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  // Auto-select role from query params
  useEffect(() => {
    if (roleParam && roleOptions.some(r => r.id === roleParam)) {
      setSelectedRole(roleParam)
      setCurrentStep(2) // Skip to form step
    }
  }, [roleParam])

  const schema = createSchema(selectedRole)
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<any>({
    resolver: zodResolver(schema),
    mode: 'onChange'
  })

  // Reset form when role changes
  useEffect(() => {
    if (selectedRole) {
      reset()
    }
  }, [selectedRole, reset])

  const password = watch('password', '')
  const passwordStrength = getPasswordStrength(password)

  // Testimonial carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleRoleSelect = (role: RoleType) => {
    setSelectedRole(role)
  }

  const handleContinue = () => {
    if (selectedRole) {
      setCurrentStep(2)
    }
  }

  const handleBack = () => {
    setCurrentStep(1)
    reset() // Reset form when going back
  }

  const onSubmit = async (data: any) => {
    console.log('Form submitted:', data)
    // Handle form submission here
    alert('Pendaftaran berhasil! Data Anda sedang diproses.')
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)] pt-20">
        {/* Left Side - Branding Area (40% Desktop) */}
        <motion.div
          className="hidden lg:flex lg:w-[40%] relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Subtle Pattern Background */}
          <div className="absolute inset-0 opacity-5">
            <motion.div
              className="absolute inset-0"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'linear'
              }}
              style={{
                backgroundImage: `radial-gradient(circle at 30% 50%, rgba(0,174,239,0.1) 0%, transparent 50%),
                                 radial-gradient(circle at 70% 50%, rgba(45,116,179,0.08) 0%, transparent 50%)`,
                backgroundSize: '200% 200%',
              }}
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00AEEF]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2D74B3]/5 rounded-full blur-3xl"></div>

          {/* Logo */}
          <div className="absolute top-8 left-8 z-10">
            <Image
              src="/images/logo.png"
              alt="Promedia Teknologi"
              width={200}
              height={67}
              className="h-12 lg:h-16 w-auto object-contain"
            />
          </div>

          {/* Testimonial Carousel */}
          <div className="relative z-10 flex items-center justify-center h-full px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-md"
              >
                <motion.p
                  className="text-2xl font-semibold mb-6 leading-relaxed text-[#001A2C]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  &ldquo;{testimonials[testimonialIndex].text}&rdquo;
                </motion.p>
                <motion.p
                  className="text-lg text-slate-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  — {testimonials[testimonialIndex].author}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setTestimonialIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === testimonialIndex ? 'bg-[#00AEEF] w-8' : 'bg-slate-300 w-2'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Right Side - Form Area (60% Desktop, 100% Mobile) */}
        <div className="w-full lg:w-[60%] bg-white flex items-center justify-center p-6 lg:p-12 py-12">
          <div className="w-full max-w-md">
            <AnimatePresence mode="wait">
              {currentStep === 1 ? (
                // Step 1: Role Selection
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  <h1 className="text-3xl lg:text-4xl font-bold text-[#001A2C] mb-3">
                    Bagaimana Anda ingin berkontribusi?
                  </h1>
                  <p className="text-slate-600 mb-8">
                    Pilih peran Anda dalam ekosistem Promedia
                  </p>

                  <div className="space-y-3 mb-8">
                    {roleOptions.map((role) => {
                      const Icon = role.icon
                      const isSelected = selectedRole === role.id
                      
                      return (
                        <motion.button
                          key={role.id}
                          onClick={() => handleRoleSelect(role.id)}
                          className={`w-full p-5 rounded-xl border-2 transition-all text-left ${
                            isSelected
                              ? 'border-[#00AEEF] bg-[#00AEEF]/5 shadow-lg ring-2 ring-[#00AEEF]/20'
                              : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50'
                          }`}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                        >
                          <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-lg bg-gradient-to-br ${role.gradient} ${
                              isSelected ? 'ring-2 ring-[#00AEEF] ring-offset-2' : ''
                            }`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-[#001A2C] mb-1">
                                {role.title}
                              </h3>
                              <p className="text-sm text-slate-600">
                                {role.description}
                              </p>
                            </div>
                            {isSelected && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="text-[#00AEEF]"
                              >
                                <CheckCircle2 className="w-6 h-6" />
                              </motion.div>
                            )}
                          </div>
                        </motion.button>
                      )
                    })}
                  </div>

                  {selectedRole && (
                    <motion.button
                      onClick={handleContinue}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="w-full py-3.5 px-6 bg-gradient-to-r from-[#00AEEF] to-[#2D74B3] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Lanjut
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  )}
                </motion.div>
              ) : (
                // Step 2: Registration Form
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  <div className="mb-6">
                    <button
                      onClick={handleBack}
                      className="text-slate-600 hover:text-[#00AEEF] transition-colors mb-4 flex items-center gap-2"
                    >
                      <ChevronRight className="w-4 h-4 rotate-180" />
                      Kembali
                    </button>
                    <h1 className="text-3xl lg:text-4xl font-bold text-[#001A2C] mb-2">
                      Buat Akun Ekosistem
                    </h1>
                    {selectedRole && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00AEEF]/10 rounded-full mb-3">
                        <span className="text-sm font-semibold text-[#00AEEF]">
                          {roleOptions.find(r => r.id === selectedRole)?.title}
                        </span>
                      </div>
                    )}
                    <p className="text-slate-600">
                      Lengkapi data Anda untuk bergabung dengan Promedia
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Full Name */}
                    <div className="relative">
                      <input
                        {...register('fullName')}
                        type="text"
                        id="fullName"
                        className={`peer w-full px-4 pt-6 pb-2 border-2 rounded-lg outline-none transition-all ${
                          errors.fullName
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-slate-200 focus:border-[#00AEEF]'
                        }`}
                        placeholder=" "
                      />
                      <label
                        htmlFor="fullName"
                        className="absolute left-4 top-2 text-sm text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#00AEEF]"
                      >
                        Nama Lengkap
                      </label>
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.fullName.message as string}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <input
                        {...register('email')}
                        type="email"
                        id="email"
                        className={`peer w-full px-4 pt-6 pb-2 border-2 rounded-lg outline-none transition-all ${
                          errors.email
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-slate-200 focus:border-[#00AEEF]'
                        }`}
                        placeholder=" "
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-4 top-2 text-sm text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#00AEEF]"
                      >
                        Email
                      </label>
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.email.message as string}
                        </p>
                      )}
                    </div>

                    {/* WhatsApp */}
                    <div className="relative">
                      <input
                        {...register('whatsapp')}
                        type="tel"
                        id="whatsapp"
                        className={`peer w-full px-4 pt-6 pb-2 border-2 rounded-lg outline-none transition-all ${
                          errors.whatsapp
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-slate-200 focus:border-[#00AEEF]'
                        }`}
                        placeholder=" "
                      />
                      <label
                        htmlFor="whatsapp"
                        className="absolute left-4 top-2 text-sm text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#00AEEF]"
                      >
                        No. WhatsApp
                      </label>
                      {errors.whatsapp && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.whatsapp.message as string}
                        </p>
                      )}
                    </div>

                    {/* Password */}
                    <div className="relative">
                      <input
                        {...register('password')}
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        className={`peer w-full px-4 pt-6 pb-2 pr-12 border-2 rounded-lg outline-none transition-all ${
                          errors.password
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-slate-200 focus:border-[#00AEEF]'
                        }`}
                        placeholder=" "
                      />
                      <label
                        htmlFor="password"
                        className="absolute left-4 top-2 text-sm text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#00AEEF]"
                      >
                        Password
                      </label>
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                      
                      {/* Password Strength Meter */}
                      {password && (
                        <div className="mt-2">
                          <div className="flex gap-1 mb-1">
                            {[1, 2, 3, 4, 5].map((level) => (
                              <div
                                key={level}
                                className={`h-1 flex-1 rounded-full transition-all ${
                                  level <= passwordStrength.strength
                                    ? passwordStrength.color
                                    : 'bg-slate-200'
                                }`}
                              />
                            ))}
                          </div>
                          <p className={`text-xs ${passwordStrength.textColor || passwordStrength.color.replace('bg-', 'text-')}`}>
                            {passwordStrength.label}
                          </p>
                        </div>
                      )}
                      
                      {errors.password && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.password.message as string}
                        </p>
                      )}
                    </div>

                    {/* Conditional Fields */}
                    {selectedRole === 'mediapreneur' && (
                      <>
                        <div className="relative">
                          <input
                            {...register('mediaName')}
                            type="text"
                            id="mediaName"
                            className={`peer w-full px-4 pt-6 pb-2 border-2 rounded-lg outline-none transition-all ${
                              errors.mediaName
                                ? 'border-red-500 focus:border-red-500'
                                : 'border-slate-200 focus:border-[#00AEEF]'
                            }`}
                            placeholder=" "
                          />
                          <label
                            htmlFor="mediaName"
                            className="absolute left-4 top-2 text-sm text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#00AEEF]"
                          >
                            Nama Media
                          </label>
                          {errors.mediaName && (
                            <p className="mt-1 text-sm text-red-500">
                              {errors.mediaName.message as string}
                            </p>
                          )}
                        </div>

                        <div className="relative">
                          <input
                            {...register('websiteLink')}
                            type="url"
                            id="websiteLink"
                            className={`peer w-full px-4 pt-6 pb-2 border-2 rounded-lg outline-none transition-all ${
                              errors.websiteLink
                                ? 'border-red-500 focus:border-red-500'
                                : 'border-slate-200 focus:border-[#00AEEF]'
                            }`}
                            placeholder=" "
                          />
                          <label
                            htmlFor="websiteLink"
                            className="absolute left-4 top-2 text-sm text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#00AEEF]"
                          >
                            Link Website <span className="text-xs">(Opsional)</span>
                          </label>
                          {errors.websiteLink && (
                            <p className="mt-1 text-sm text-red-500">
                              {errors.websiteLink.message as string}
                            </p>
                          )}
                        </div>
                      </>
                    )}

                    {selectedRole === 'contentpreneur' && (
                      <div className="relative">
                        <input
                          {...register('portfolioLink')}
                          type="url"
                          id="portfolioLink"
                          className={`peer w-full px-4 pt-6 pb-2 border-2 rounded-lg outline-none transition-all ${
                            errors.portfolioLink
                              ? 'border-red-500 focus:border-red-500'
                              : 'border-slate-200 focus:border-[#00AEEF]'
                          }`}
                          placeholder=" "
                        />
                        <label
                          htmlFor="portfolioLink"
                          className="absolute left-4 top-2 text-sm text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#00AEEF]"
                        >
                          Link Portfolio/CV
                        </label>
                        {errors.portfolioLink && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.portfolioLink.message as string}
                          </p>
                        )}
                      </div>
                    )}

                    {(selectedRole === 'socmedpreneur' || selectedRole === 'videopreneur') && (
                      <div className="relative">
                        <input
                          {...register('portfolioLink')}
                          type="url"
                          id="portfolioLink"
                          className={`peer w-full px-4 pt-6 pb-2 border-2 rounded-lg outline-none transition-all ${
                            errors.portfolioLink
                              ? 'border-red-500 focus:border-red-500'
                              : 'border-slate-200 focus:border-[#00AEEF]'
                          }`}
                          placeholder=" "
                        />
                        <label
                          htmlFor="portfolioLink"
                          className="absolute left-4 top-2 text-sm text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#00AEEF]"
                        >
                          Link Portfolio/CV
                        </label>
                        {errors.portfolioLink && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.portfolioLink.message as string}
                          </p>
                        )}
                      </div>
                    )}

                    {selectedRole === 'advertiser' && (
                      <div className="relative">
                        <input
                          {...register('companyName')}
                          type="text"
                          id="companyName"
                          className={`peer w-full px-4 pt-6 pb-2 border-2 rounded-lg outline-none transition-all ${
                            errors.companyName
                              ? 'border-red-500 focus:border-red-500'
                              : 'border-slate-200 focus:border-[#00AEEF]'
                          }`}
                          placeholder=" "
                        />
                        <label
                          htmlFor="companyName"
                          className="absolute left-4 top-2 text-sm text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#00AEEF]"
                        >
                          Nama Perusahaan
                        </label>
                        {errors.companyName && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.companyName.message as string}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 bg-gradient-to-r from-[#00AEEF] to-[#2D74B3] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Memproses...' : 'Buat Akun Ekosistem'}
                    </button>

                    {/* Login Link */}
                    <p className="text-center text-sm text-slate-600">
                      Sudah punya akun?{' '}
                      <Link
                        href="/login"
                        className="text-[#00AEEF] hover:text-[#2D74B3] font-semibold transition-colors"
                      >
                        Masuk di sini
                      </Link>
                    </p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile Branding Section */}
      {currentStep === 1 && (
        <div className="lg:hidden relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 py-12 px-6">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#00AEEF]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#2D74B3]/5 rounded-full blur-3xl"></div>
          <div className="relative z-10 text-center">
            <Image
              src="/images/logo.png"
              alt="Promedia Teknologi"
              width={180}
              height={60}
              className="h-12 w-auto object-contain mx-auto mb-6"
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg font-semibold mb-2 text-[#001A2C]">
                  &ldquo;{testimonials[testimonialIndex].text}&rdquo;
                </p>
                <p className="text-sm text-slate-600">
                  — {testimonials[testimonialIndex].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default function RegistrationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#00AEEF] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Memuat halaman...</p>
        </div>
      </div>
    }>
      <RegistrationForm />
    </Suspense>
  )
}

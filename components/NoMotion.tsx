'use client'

import { MotionConfig } from 'framer-motion'

export default function NoMotion({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="always">{children}</MotionConfig>
}

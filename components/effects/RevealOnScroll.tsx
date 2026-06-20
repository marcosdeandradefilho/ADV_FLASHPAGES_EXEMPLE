'use client'
import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { Variants } from 'framer-motion'

interface Props {
  children: React.ReactNode
  className?: string
  variants?: Variants
  delay?: number
  once?: boolean
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export function RevealOnScroll({ children, className, variants = defaultVariants, delay = 0, once = true }: Props) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, margin: '-80px 0px' })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else if (!once) {
      controls.start('hidden')
    }
  }, [inView, controls, once])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

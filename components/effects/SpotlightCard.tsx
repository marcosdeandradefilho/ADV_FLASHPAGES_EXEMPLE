'use client'
import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface Props {
  children: React.ReactNode
  className?: string
}

export function SpotlightCard({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [s, setS] = useState({ x: 0, y: 0, o: 0 })

  return (
    <div
      ref={ref}
      className={cn('relative overflow-hidden', className)}
      onMouseMove={(e) => {
        const rect = ref.current!.getBoundingClientRect()
        setS({ x: e.clientX - rect.left, y: e.clientY - rect.top, o: 1 })
      }}
      onMouseLeave={() => setS((v) => ({ ...v, o: 0 }))}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: s.o,
          background: `radial-gradient(420px circle at ${s.x}px ${s.y}px, rgba(201,162,39,0.09), transparent 65%)`,
        }}
      />
      {children}
    </div>
  )
}

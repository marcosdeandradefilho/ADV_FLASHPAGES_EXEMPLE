'use client'
import { cn } from '@/lib/utils'
import { type VariantProps, cva } from 'class-variance-authority'
import { type ButtonHTMLAttributes, forwardRef } from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-[var(--radius)] font-body font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] disabled:pointer-events-none disabled:opacity-50 select-none tracking-wide',
  {
    variants: {
      variant: {
        gold: 'bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--accent-light)] shimmer-btn shadow-lg shadow-[var(--accent)]/20 hover:shadow-[var(--accent)]/40',
        outline: 'border border-[var(--accent)]/40 text-[var(--accent)] hover:bg-[var(--accent)]/10 hover:border-[var(--accent)]',
        ghost: 'text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-white/5',
        surface: 'glass text-[var(--text)] hover:border-[var(--accent)]/30',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-sm',
        lg: 'h-13 px-8 text-base',
        xl: 'h-14 px-10 text-base',
      },
    },
    defaultVariants: { variant: 'gold', size: 'lg' },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
  )
)
Button.displayName = 'Button'

export { Button, buttonVariants }

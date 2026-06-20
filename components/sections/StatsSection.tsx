import { AnimatedCounter } from '@/components/effects/AnimatedCounter'
import { RevealOnScroll } from '@/components/effects/RevealOnScroll'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { motion } from 'framer-motion'

const metrics = [
  { value: 1200, suffix: '+', label: 'Clientes Atendidos', description: 'Pessoas e empresas assessoradas' },
  { value: 16, suffix: '+', label: 'Anos de Atuação', description: 'Tradição e experiência consolidada' },
  { value: 94, suffix: '%', label: 'Índice de Satisfação', description: 'Pesquisa interna anual de 2024' },
  { value: 6, suffix: '', label: 'Áreas de Prática', description: 'Cobertura jurídica completa' },
]

// Note: 'use client' needed for AnimatedCounter
export { StatsSection }

function StatsSection() {
  return (
    <section className="relative py-20 border-y border-[var(--line)]" aria-labelledby="stats-heading">
      <div className="absolute inset-0 bg-[var(--surface)]/40 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <RevealOnScroll className="text-center mb-12">
          <h2 id="stats-heading" className="font-display text-2xl font-semibold text-[var(--text-muted)] tracking-wide uppercase text-sm mb-2">
            Números que traduzem confiança
          </h2>
          <div className="w-16 h-px bg-[var(--accent)] mx-auto" />
        </RevealOnScroll>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--line)]">
          {metrics.map(({ value, suffix, label, description }, i) => (
            <RevealOnScroll
              key={label}
              delay={i * 0.1}
              className="bg-[var(--bg)] px-6 py-8 text-center group hover:bg-[var(--surface)] transition-colors duration-300"
            >
              <p className="font-display font-bold text-5xl xl:text-6xl text-[var(--accent)] mb-2 tabular-nums">
                <AnimatedCounter target={value} suffix={suffix} />
              </p>
              <p className="font-semibold text-[var(--text)] text-base mb-1">{label}</p>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">{description}</p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

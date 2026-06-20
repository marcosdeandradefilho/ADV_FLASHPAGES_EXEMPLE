'use client'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { MagneticButton } from '@/components/effects/MagneticButton'
import { SITE } from '@/lib/utils'
import { staggerContainer, wordReveal } from '@/lib/animations'

const headline = ['Segurança', 'jurídica', 'para o que', 'importa.']

const badges = [
  '⚖️ OAB/CE Registrado',
  '🏛️ Desde 2008',
  '⭐ 94% de satisfação',
]

export function HeroSection() {
  function openWhatsApp() {
    window.open(
      `https://wa.me/${SITE.whatsapp}?text=Olá! Gostaria de agendar uma consulta jurídica.`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <section
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Aurora orbs */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[var(--brand-500)]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/6 w-[400px] h-[400px] rounded-full bg-[var(--accent)]/6 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[var(--brand-600)]/8 blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Left column */}
          <div>
            {/* Badge strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {badges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center px-3 py-1 rounded-full glass text-[var(--text-muted)] text-xs font-medium border border-[var(--accent)]/20"
                >
                  {b}
                </span>
              ))}
            </motion.div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="font-display text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6"
            >
              <motion.span
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="block"
              >
                {headline.map((word, i) => (
                  <motion.span
                    key={i}
                    variants={wordReveal}
                    className={`inline-block mr-[0.25em] ${
                      i === headline.length - 1 ? 'gradient-gold' : 'text-[var(--text)]'
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-[var(--text-muted)] text-lg leading-relaxed mb-10 max-w-lg"
            >
              Para empresas e pessoas que precisam de uma orientação jurídica precisa, estratégica
              e humana — estamos há mais de 16 anos protegendo o que mais importa aos nossos clientes.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <MagneticButton>
                <Button
                  variant="gold"
                  size="xl"
                  onClick={openWhatsApp}
                  className="group"
                  aria-label="Agendar consulta via WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  Agendar Consulta
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button
                  variant="outline"
                  size="xl"
                  onClick={() => document.getElementById('areas')?.scrollIntoView({ behavior: 'smooth' })}
                  aria-label="Ver áreas de atuação"
                >
                  Ver Áreas de Atuação
                </Button>
              </MagneticButton>
            </motion.div>

            {/* Trust strip */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-6 text-[var(--text-muted)] text-sm"
            >
              Primeira consulta sem compromisso.{' '}
              <span className="text-[var(--accent)] font-medium">Atendemos em Fortaleza e online.</span>
            </motion.p>
          </div>

          {/* Right column — floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:block relative"
            aria-hidden="true"
          >
            {/* Main card */}
            <div className="glass rounded-2xl p-8 glow-gold relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[var(--accent)]/20 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <div>
                  <p className="text-[var(--text)] font-semibold text-sm">Atendimento Premium</p>
                  <p className="text-[var(--text-muted)] text-xs">Resposta em até 24 horas</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  { label: 'Direito Civil & Contratos', pct: 95 },
                  { label: 'Direito Empresarial', pct: 90 },
                  { label: 'Direito Trabalhista', pct: 88 },
                  { label: 'Tributário & Compliance', pct: 92 },
                ].map(({ label, pct }) => (
                  <div key={label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[var(--text-muted)]">{label}</span>
                      <span className="text-[var(--accent)] font-medium">{pct}%</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-[var(--brand-500)] to-[var(--accent)]"
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 1.2, delay: 0.8 + Math.random() * 0.4, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="gold-line mb-4" />
              <p className="text-[var(--text-muted)] text-xs leading-relaxed">
                Índice de satisfação baseado em pesquisa interna com clientes ativos — 2024.
              </p>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 glass rounded-xl p-4 shadow-xl"
            >
              <p className="text-[var(--accent)] font-display font-bold text-2xl">+1.200</p>
              <p className="text-[var(--text-muted)] text-xs">clientes atendidos</p>
            </motion.div>

            {/* Floating bottom card */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -left-8 glass rounded-xl p-4 shadow-xl flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              </div>
              <div>
                <p className="text-[var(--text)] text-xs font-semibold">Online agora</p>
                <p className="text-[var(--text-muted)] text-xs">WhatsApp disponível</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-[var(--text-muted)] text-xs tracking-widest uppercase">Role para ver</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-[var(--accent)] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}

'use client'
import { motion } from 'framer-motion'
import { MessageCircle, Phone, ArrowRight, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { MagneticButton } from '@/components/effects/MagneticButton'
import { RevealOnScroll } from '@/components/effects/RevealOnScroll'
import { SITE } from '@/lib/utils'

export function CTASection() {
  return (
    <section className="relative py-28 overflow-hidden" aria-labelledby="cta-heading">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--surface)] via-[var(--bg)] to-[var(--surface)]" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--brand-500)]/12 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[var(--accent)]/8 blur-[80px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <RevealOnScroll>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-[var(--accent)] text-xs font-medium tracking-widest uppercase mb-8">
            <Calendar className="w-3 h-3" aria-hidden="true" />
            Primeira consulta sem compromisso
          </span>

          <h2
            id="cta-heading"
            className="font-display text-4xl md:text-6xl font-bold text-[var(--text)] mb-6 leading-tight"
          >
            Sua segurança jurídica começa{' '}
            <span className="gradient-gold">com uma conversa.</span>
          </h2>

          <p className="text-[var(--text-muted)] text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Entre em contato hoje. Nossa equipe avalia sua situação com atenção, clareza e ética —
            sem pressão, sem jargão, sem compromisso.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <MagneticButton>
              <Button
                variant="gold"
                size="xl"
                onClick={() =>
                  window.open(
                    `https://wa.me/${SITE.whatsapp}?text=Olá! Gostaria de agendar uma consulta jurídica.`,
                    '_blank',
                    'noopener,noreferrer'
                  )
                }
                className="group text-base"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Falar pelo WhatsApp
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button
                variant="outline"
                size="xl"
                onClick={() => (window.location.href = '/contato')}
                className="text-base"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Ou ligue para nós
              </Button>
            </MagneticButton>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[var(--text-muted)] text-sm">
            {[
              '⚖️ OAB/CE Registrado',
              '🔒 Sigilo absoluto',
              '📍 Fortaleza + Atendimento online',
              '⏱️ Resposta em até 24h',
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

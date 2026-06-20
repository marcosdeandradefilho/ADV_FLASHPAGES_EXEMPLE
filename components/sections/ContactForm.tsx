'use client'
import { useState, useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

const areas = [
  'Direito Civil',
  'Direito Empresarial',
  'Direito Trabalhista',
  'Direito Tributário',
  'Direito Imobiliário',
  'Sucessão & Patrimônio',
  'Outro assunto',
]

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // Honeypot check
    if (data.get('_hp_field')) return

    setStatus('loading')

    // Simulate form submission (replace with your API endpoint)
    await new Promise((res) => setTimeout(res, 1200))

    // In production: POST to /api/contact or Netlify Forms / Formspree
    setStatus('success')
    formRef.current?.reset()
  }

  const fieldClass = cn(
    'w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--line)]',
    'text-[var(--text)] placeholder:text-[var(--text-muted)] text-sm',
    'focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]/30',
    'transition-all duration-200'
  )

  if (status === 'success') {
    return (
      <div className="glass rounded-2xl p-10 text-center" role="alert" aria-live="polite">
        <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" aria-hidden="true" />
        <h3 className="font-display text-2xl font-bold text-[var(--text)] mb-2">Mensagem enviada!</h3>
        <p className="text-[var(--text-muted)] leading-relaxed">
          Recebemos sua mensagem e retornaremos em até 24 horas úteis.
          Fique à vontade também para nos contatar pelo WhatsApp para um retorno mais rápido.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-[var(--accent)] text-sm hover:underline"
        >
          Enviar outra mensagem
        </button>
      </div>
    )
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="glass rounded-2xl p-8 space-y-5"
      aria-label="Formulário de contato"
      noValidate
    >
      {/* Honeypot — hidden from humans, visible to bots */}
      <input
        name="_hp_field"
        type="text"
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-[var(--text)] mb-1.5">
            Nome completo <span className="text-[var(--accent)]" aria-label="obrigatório">*</span>
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            maxLength={120}
            autoComplete="name"
            placeholder="Seu nome"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[var(--text)] mb-1.5">
            E-mail <span className="text-[var(--accent)]" aria-label="obrigatório">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            placeholder="seu@email.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="telefone" className="block text-sm font-medium text-[var(--text)] mb-1.5">
            Telefone / WhatsApp
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            maxLength={20}
            autoComplete="tel"
            placeholder="(85) 99000-0000"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="area" className="block text-sm font-medium text-[var(--text)] mb-1.5">
            Área de interesse
          </label>
          <select
            id="area"
            name="area"
            className={cn(fieldClass, 'cursor-pointer')}
            aria-label="Selecione a área jurídica de interesse"
          >
            <option value="">Selecione a área</option>
            {areas.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="assunto" className="block text-sm font-medium text-[var(--text)] mb-1.5">
          Assunto <span className="text-[var(--accent)]" aria-label="obrigatório">*</span>
        </label>
        <input
          id="assunto"
          name="assunto"
          type="text"
          required
          maxLength={200}
          placeholder="Resuma brevemente o motivo do contato"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="mensagem" className="block text-sm font-medium text-[var(--text)] mb-1.5">
          Mensagem <span className="text-[var(--accent)]" aria-label="obrigatório">*</span>
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={5}
          maxLength={2000}
          placeholder="Descreva brevemente sua situação. Não compartilhe dados sensíveis aqui."
          className={cn(fieldClass, 'resize-none')}
        />
      </div>

      {/* LGPD consent */}
      <div className="flex items-start gap-3">
        <input
          id="lgpd"
          name="lgpd"
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 rounded border-[var(--line)] accent-[var(--accent)] cursor-pointer"
          aria-describedby="lgpd-desc"
        />
        <label htmlFor="lgpd" id="lgpd-desc" className="text-[var(--text-muted)] text-xs leading-relaxed cursor-pointer">
          Concordo com o uso das minhas informações para resposta a esta solicitação, conforme a{' '}
          <span className="text-[var(--accent)]">Política de Privacidade</span> e a Lei n.º 13.709/2018 (LGPD).
          Não compartilhamos seus dados com terceiros.
        </label>
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-400 text-sm" role="alert">
          <AlertCircle className="w-4 h-4 shrink-0" />
          Erro ao enviar. Tente pelo WhatsApp ou e-mail.
        </div>
      )}

      <Button
        type="submit"
        variant="gold"
        size="lg"
        className="w-full group"
        disabled={status === 'loading'}
        aria-busy={status === 'loading'}
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
            Enviando…
          </>
        ) : (
          <>
            <Send className="w-5 h-5" aria-hidden="true" />
            Enviar Mensagem
          </>
        )}
      </Button>

      <p className="text-[var(--text-muted)] text-xs text-center">
        🔒 Suas informações são tratadas com absoluto sigilo.
      </p>
    </form>
  )
}

'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { RevealOnScroll } from '@/components/effects/RevealOnScroll'
import { cn } from '@/lib/utils'

export const faqItems = [
  {
    question: 'Como funciona a primeira consulta?',
    answer: 'A primeira consulta é um momento de diagnóstico — você apresenta sua situação e nossos advogados avaliam o cenário, explicam as opções disponíveis e indicam os próximos passos. Pode ser realizada presencialmente em nosso escritório em Fortaleza ou por videochamada. Entre em contato para verificar disponibilidade.',
  },
  {
    question: 'O escritório atende clientes de outros estados?',
    answer: 'Sim. Atuamos em causas que tramitam em todo o Brasil, com base em Fortaleza. Para questões que demandam presença física em outras comarcas, contamos com uma rede de correspondentes jurídicos de confiança. Consultas e acompanhamento de processos são realizados online.',
  },
  {
    question: 'Como são definidos os honorários advocatícios?',
    answer: 'Os honorários são estabelecidos conforme a Tabela de Honorários da OAB/CE, considerando a complexidade do caso, a natureza da atuação (consultivo ou contencioso) e o tempo estimado de dedicação. Após a consulta inicial, apresentamos uma proposta clara e detalhada, sem surpresas.',
  },
  {
    question: 'Em quais áreas do direito o escritório atua?',
    answer: 'Atuamos em seis grandes áreas: Direito Civil (contratos, família, responsabilidade civil), Direito Empresarial (societário, M&A, compliance), Direito Trabalhista, Direito Tributário, Direito Imobiliário e Planejamento Patrimonial & Sucessório. Para casos em outras áreas, podemos indicar profissionais especializados.',
  },
  {
    question: 'Como posso agendar um atendimento?',
    answer: 'Você pode entrar em contato pelo WhatsApp, pelo formulário neste site ou por telefone. Respondemos em até 24 horas úteis. Após o primeiro contato, agendamos um horário que melhor se encaixe na sua rotina.',
  },
  {
    question: 'O escritório oferece assessoria jurídica para empresas?',
    answer: 'Sim. Oferecemos consultoria preventiva, revisão e elaboração de contratos, assessoria em compliance, suporte trabalhista para empregadores e planejamento tributário. Para empresas com demanda contínua, dispomos de planos de assessoria jurídica mensal.',
  },
  {
    question: 'Qual é o prazo para retorno após o contato?',
    answer: 'Nosso compromisso é responder a todo contato em até 24 horas úteis. Para situações urgentes, informe no primeiro contato e nossa equipe priorizará seu atendimento.',
  },
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 border-t border-[var(--line)]" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-6">
        <RevealOnScroll className="text-center mb-14">
          <p className="text-[var(--accent)] font-medium text-sm tracking-widest uppercase mb-3">Tire suas dúvidas</p>
          <h2 id="faq-heading" className="font-display text-4xl md:text-5xl font-bold text-[var(--text)] mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-[var(--text-muted)] text-lg">
            As respostas para as dúvidas mais comuns de quem nos contata pela primeira vez.
          </p>
        </RevealOnScroll>

        <div className="space-y-2" role="list">
          {faqItems.map(({ question, answer }, i) => {
            const isOpen = open === i
            return (
              <RevealOnScroll key={question} delay={i * 0.04}>
                <div
                  className={cn(
                    'glass rounded-xl overflow-hidden transition-all duration-300',
                    isOpen ? 'border-[var(--accent)]/30 border' : 'border border-transparent'
                  )}
                  role="listitem"
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span
                      className={cn(
                        'font-semibold text-base transition-colors',
                        isOpen ? 'text-[var(--accent)]' : 'text-[var(--text)] group-hover:text-[var(--accent)]'
                      )}
                    >
                      {question}
                    </span>
                    <span className={cn(
                      'shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors',
                      isOpen ? 'bg-[var(--accent)]/20 text-[var(--accent)]' : 'bg-white/5 text-[var(--text-muted)]'
                    )}>
                      {isOpen
                        ? <Minus className="w-3.5 h-3.5" aria-hidden="true" />
                        : <Plus className="w-3.5 h-3.5" aria-hidden="true" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                      >
                        <div className="px-6 pb-6">
                          <div className="gold-line mb-4" />
                          <p className="text-[var(--text-muted)] leading-relaxed">{answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </RevealOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}

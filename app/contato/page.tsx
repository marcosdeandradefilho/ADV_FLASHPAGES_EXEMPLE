import type { Metadata } from 'next'
import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { RevealOnScroll } from '@/components/effects/RevealOnScroll'
import { ContactForm } from '@/components/sections/ContactForm'
import { SITE } from '@/lib/utils'
import { Phone, Mail, MapPin, Clock, MessageCircle, Linkedin, Instagram } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com o escritório Bastos, Melo & Associados. WhatsApp, telefone, email ou formulário. Atendemos em Fortaleza e online.',
  alternates: { canonical: `${SITE.url}/contato` },
}

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contato — ' + SITE.name,
  url: `${SITE.url}/contato`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: SITE.phone,
    email: SITE.email,
    contactType: 'customer service',
    areaServed: 'BR',
    availableLanguage: 'pt-BR',
  },
}

const channels = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '(85) 99000-1200',
    sub: 'Resposta prioritária',
    href: `https://wa.me/${SITE.whatsapp}?text=Olá! Gostaria de agendar uma consulta.`,
    external: true,
    cta: 'Iniciar conversa',
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: SITE.phone,
    sub: 'Seg a Sex, 8h–18h',
    href: `tel:${SITE.phone}`,
    external: false,
    cta: 'Ligar agora',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: SITE.email,
    sub: 'Resposta em até 24h úteis',
    href: `mailto:${SITE.email}`,
    external: false,
    cta: 'Enviar e-mail',
  },
]

export default function ContatoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <Header />
      <main id="main-content" className="pt-24">
        {/* Page hero */}
        <section className="relative py-20 border-b border-[var(--line)]" aria-labelledby="contato-heading">
          <div className="absolute inset-0 bg-[var(--surface)]/30 pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-6">
            <RevealOnScroll>
              <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex items-center gap-2 text-sm text-[var(--text-muted)]" role="list">
                  <li><a href="/" className="hover:text-[var(--accent)] transition-colors">Início</a></li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="text-[var(--text)]">Contato</li>
                </ol>
              </nav>
              <p className="text-[var(--accent)] font-medium text-sm tracking-widest uppercase mb-3">Fale conosco</p>
              <h1 id="contato-heading" className="font-display text-4xl md:text-5xl font-bold text-[var(--text)] mb-6 leading-tight max-w-3xl">
                Estamos prontos para ouvir você.
              </h1>
              <p className="text-[var(--text-muted)] text-xl leading-relaxed max-w-2xl">
                Escolha o canal que preferir. Nossa equipe responde em até 24 horas úteis —
                e urgências têm tratamento prioritário.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        {/* Contact grid */}
        <section className="py-20" aria-label="Canais de contato">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left — channels + info */}
              <div>
                <RevealOnScroll>
                  <h2 className="font-display text-2xl font-bold text-[var(--text)] mb-8">Canais de Atendimento</h2>
                </RevealOnScroll>
                <div className="space-y-4 mb-10">
                  {channels.map(({ icon: Icon, label, value, sub, href, external, cta }, i) => (
                    <RevealOnScroll key={label} delay={i * 0.08}>
                      <div className="glass rounded-xl p-5 card-hover flex items-center gap-5">
                        <div className="w-11 h-11 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-[var(--accent)]" aria-hidden="true" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[var(--text-muted)] text-xs font-medium uppercase tracking-wider mb-0.5">{label}</p>
                          <p className="text-[var(--text)] font-semibold truncate">{value}</p>
                          <p className="text-[var(--text-muted)] text-xs">{sub}</p>
                        </div>
                        <a
                          href={href}
                          target={external ? '_blank' : undefined}
                          rel={external ? 'noopener noreferrer' : undefined}
                          className="shrink-0 px-4 py-2 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-medium hover:bg-[var(--accent)]/20 transition-colors"
                          aria-label={`${cta} — ${label}`}
                        >
                          {cta}
                        </a>
                      </div>
                    </RevealOnScroll>
                  ))}
                </div>

                {/* Location & hours */}
                <RevealOnScroll delay={0.3}>
                  <div className="glass rounded-xl p-6 space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg bg-[var(--brand-500)]/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-[var(--text)] font-semibold text-sm mb-1">Endereço</p>
                        <address className="not-italic text-[var(--text-muted)] text-sm leading-relaxed">
                          {SITE.address}<br />
                          {SITE.city} — {SITE.state}, CEP {SITE.cep}
                        </address>
                        <p className="text-[var(--text-muted)] text-xs mt-1">Edifício Premium Center — Fácil acesso ao estacionamento</p>
                      </div>
                    </div>
                    <div className="gold-line" role="separator" />
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg bg-[var(--brand-500)]/10 flex items-center justify-center shrink-0">
                        <Clock className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-[var(--text)] font-semibold text-sm mb-2">Horário de Atendimento</p>
                        <table className="text-sm w-full" aria-label="Horário de funcionamento">
                          <tbody className="text-[var(--text-muted)] space-y-1">
                            <tr>
                              <td className="py-0.5 pr-4 font-medium text-[var(--text)]">Segunda a Sexta</td>
                              <td>8h00 às 18h00</td>
                            </tr>
                            <tr>
                              <td className="py-0.5 pr-4 font-medium text-[var(--text)]">Sábado</td>
                              <td>8h00 às 12h00</td>
                            </tr>
                            <tr>
                              <td className="py-0.5 pr-4 font-medium text-[var(--text)]">Atendimento online</td>
                              <td>Mediante agendamento</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>

                {/* Social */}
                <RevealOnScroll delay={0.4} className="mt-6 flex items-center gap-4">
                  <p className="text-[var(--text-muted)] text-sm">Nos siga:</p>
                  <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors" aria-label="LinkedIn">
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                  <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors" aria-label="Instagram">
                    <Instagram className="w-4 h-4" /> Instagram
                  </a>
                </RevealOnScroll>
              </div>

              {/* Right — Form */}
              <div>
                <RevealOnScroll delay={0.1}>
                  <h2 className="font-display text-2xl font-bold text-[var(--text)] mb-8">Envie uma mensagem</h2>
                  <ContactForm />
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

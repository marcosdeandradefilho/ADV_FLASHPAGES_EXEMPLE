import type { Metadata } from 'next'
import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { CTASection } from '@/components/sections/CTASection'
import { RevealOnScroll } from '@/components/effects/RevealOnScroll'
import { SpotlightCard } from '@/components/effects/SpotlightCard'
import { SITE } from '@/lib/utils'
import { Scale, Target, Eye, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sobre o Escritório',
  description: 'Conheça a história, missão e valores do escritório Bastos, Melo & Associados — advocacia premium em Fortaleza desde 2008.',
  alternates: { canonical: `${SITE.url}/sobre` },
}

const valores = [
  { icon: Scale, title: 'Ética', text: 'Toda decisão e orientação é pautada no Estatuto da OAB e na deontologia jurídica. Ética não é diferencial — é fundação.' },
  { icon: Target, title: 'Excelência Técnica', text: 'Investimento contínuo em atualização jurídica e aprimoramento dos nossos profissionais. Direito que não se atualiza não protege.' },
  { icon: Eye, title: 'Transparência', text: 'Comunicação clara sobre honorários, prazos e expectativas. Nenhuma surpresa no decorrer do processo.' },
  { icon: Heart, title: 'Humanidade', text: 'Por trás de cada caso há uma pessoa com uma história. Tratamos cada cliente com a atenção que sua situação merece.' },
]

const timeline = [
  { year: '2008', event: 'Fundação do escritório por Dr. Ricardo Bastos e Dra. Ana Melo, especializados em Direito Civil e Empresarial.' },
  { year: '2012', event: 'Expansão para as áreas Trabalhista e Tributária, com a incorporação de novos sócios e especialistas.' },
  { year: '2016', event: 'Alcance de 500 clientes atendidos e abertura de programa de assessoria jurídica preventiva para empresas.' },
  { year: '2020', event: 'Implementação de atendimento digital e expansão do alcance para clientes em todo o Brasil.' },
  { year: '2024', event: 'Mais de 1.200 clientes atendidos e reconhecimento entre os escritórios de referência no Ceará.' },
]

export default function SobrePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-24">
        {/* Page hero */}
        <section className="relative py-20 border-b border-[var(--line)]" aria-labelledby="sobre-heading">
          <div className="absolute inset-0 bg-[var(--surface)]/30 pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-6">
            <RevealOnScroll>
              <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex items-center gap-2 text-sm text-[var(--text-muted)]" role="list">
                  <li><a href="/" className="hover:text-[var(--accent)] transition-colors">Início</a></li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="text-[var(--text)]">Sobre</li>
                </ol>
              </nav>
              <p className="text-[var(--accent)] font-medium text-sm tracking-widest uppercase mb-3">Nossa história</p>
              <h1 id="sobre-heading" className="font-display text-4xl md:text-5xl font-bold text-[var(--text)] mb-6 leading-tight max-w-3xl">
                Mais de 16 anos construindo relações de confiança.
              </h1>
              <p className="text-[var(--text-muted)] text-xl leading-relaxed max-w-2xl">
                Fundado em 2008 em Fortaleza, o escritório Bastos, Melo & Associados nasceu da convicção
                de que advocacia de excelência é aquela que combina rigor técnico com atenção humana.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        {/* Story */}
        <section className="py-20" aria-labelledby="historia-heading">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <RevealOnScroll>
                <h2 id="historia-heading" className="font-display text-3xl font-bold text-[var(--text)] mb-6">Nossa Trajetória</h2>
                <div className="space-y-4 text-[var(--text-muted)] leading-relaxed">
                  <p>
                    Iniciamos nossas atividades em 2008, com foco em Direito Civil e Empresarial.
                    Ao longo dos anos, expandimos nossa atuação para atender a demanda crescente de
                    clientes que buscavam assessoria jurídica integrada e estratégica.
                  </p>
                  <p>
                    Hoje, somos um escritório boutique de advocacia — pequeno o suficiente para
                    oferecer atenção personalizada, robusto o suficiente para lidar com casos de
                    alta complexidade.
                  </p>
                  <p>
                    Nossa equipe é formada por advogados com pós-graduações nas melhores
                    instituições do Brasil, experiência em escritórios nacionais e visão multidisciplinar
                    sobre os desafios jurídicos contemporâneos.
                  </p>
                </div>
              </RevealOnScroll>

              {/* Timeline */}
              <RevealOnScroll delay={0.2}>
                <h3 className="font-display text-xl font-semibold text-[var(--text)] mb-6">Linha do Tempo</h3>
                <ol className="relative pl-6 border-l border-[var(--line)]" role="list">
                  {timeline.map(({ year, event }, i) => (
                    <li key={year} className={`relative pb-8 last:pb-0 ${i < timeline.length - 1 ? '' : ''}`}>
                      <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-[var(--accent)] border-2 border-[var(--bg)] top-0.5" aria-hidden="true" />
                      <time className="block font-display text-[var(--accent)] font-bold text-xl mb-1" dateTime={year}>{year}</time>
                      <p className="text-[var(--text-muted)] text-sm leading-relaxed">{event}</p>
                    </li>
                  ))}
                </ol>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-20 border-y border-[var(--line)] bg-[var(--surface)]/20" aria-labelledby="valores-heading">
          <div className="max-w-7xl mx-auto px-6">
            <RevealOnScroll className="text-center mb-14">
              <p className="text-[var(--accent)] font-medium text-sm tracking-widest uppercase mb-3">O que nos guia</p>
              <h2 id="valores-heading" className="font-display text-4xl font-bold text-[var(--text)] mb-4">Nossos Valores</h2>
              <p className="text-[var(--text-muted)] text-lg max-w-xl mx-auto">
                Os princípios que definem cada decisão, cada orientação e cada relação que construímos.
              </p>
            </RevealOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {valores.map(({ icon: Icon, title, text }, i) => (
                <RevealOnScroll key={title} delay={i * 0.1}>
                  <SpotlightCard className="glass rounded-2xl p-7 card-hover text-center h-full">
                    <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-[var(--accent)]" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-[var(--text)] mb-3">{title}</h3>
                    <p className="text-[var(--text-muted)] text-sm leading-relaxed">{text}</p>
                  </SpotlightCard>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* OAB compliance statement */}
        <section className="py-12" aria-label="Conformidade OAB">
          <div className="max-w-4xl mx-auto px-6">
            <RevealOnScroll>
              <div className="glass rounded-2xl p-8 border border-[var(--accent)]/15">
                <div className="flex items-start gap-4">
                  <Scale className="w-8 h-8 text-[var(--accent)] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[var(--text)] mb-2">Conformidade OAB</h3>
                    <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                      Todos os nossos advogados estão regularmente inscritos na Ordem dos Advogados do Brasil —
                      Subseção Ceará (OAB/CE). Nossa comunicação institucional observa rigorosamente o
                      Provimento n.º 205/2021 do Conselho Federal da OAB e a Resolução n.º 02/2012 do CFOAB,
                      que regulamentam a publicidade na advocacia. As informações aqui disponibilizadas têm
                      finalidade exclusivamente informativa e não representam promessa ou garantia de resultado
                      em qualquer situação jurídica.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}

import type { Metadata } from 'next'
import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { CTASection } from '@/components/sections/CTASection'
import { RevealOnScroll } from '@/components/effects/RevealOnScroll'
import { SpotlightCard } from '@/components/effects/SpotlightCard'
import { SITE } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Áreas de Atuação',
  description: 'Direito Civil, Empresarial, Trabalhista, Tributário, Imobiliário e Sucessório. Conheça as especialidades do escritório Bastos, Melo & Associados em Fortaleza.',
  alternates: { canonical: `${SITE.url}/areas-de-atuacao` },
}

const areas = [
  {
    id: 'civil',
    icon: '⚖️',
    title: 'Direito Civil',
    subtitle: 'Contratos e Relações Pessoais',
    description: 'Assessoria completa nas relações jurídicas entre pessoas — contratos, família e patrimônio.',
    topics: [
      { heading: 'Contratos', body: 'Elaboração, revisão e análise de contratos civis e comerciais. Identificação de cláusulas abusivas. Negociação e resolução de impasses contratuais.' },
      { heading: 'Direito de Família', body: 'Divórcio consensual e litigioso, guarda de filhos, alimentos, reconhecimento de paternidade e união estável.' },
      { heading: 'Responsabilidade Civil', body: 'Indenizações por danos materiais e morais, acidentes, má prestação de serviços, erros médicos e defeitos de produtos.' },
      { heading: 'Sucessões', body: 'Testamentos, inventários, partilha de bens e planejamento sucessório preventivo.' },
    ],
  },
  {
    id: 'empresarial',
    icon: '🏢',
    title: 'Direito Empresarial',
    subtitle: 'Societário e Corporativo',
    description: 'Estruturação jurídica e proteção estratégica para negócios de todos os portes.',
    topics: [
      { heading: 'Constituição e Reorganização Societária', body: 'Abertura de empresas, alterações de contrato social, cisão, fusão e incorporação. Holding familiar e estruturação patrimonial.' },
      { heading: 'Contratos Empresariais', body: 'Contratos de fornecimento, prestação de serviços, distribuição, parceria e licenciamento. Proteção de interesses em negociações B2B.' },
      { heading: 'Recuperação Judicial e Falência', body: 'Assessoria a empresas em crise e a credores. Planos de reestruturação, negociação com credores e acompanhamento processual.' },
      { heading: 'Compliance e Governança', body: 'Implementação de programas de integridade, revisão de políticas internas e adequação à LGPD e demais normas regulatórias.' },
    ],
  },
  {
    id: 'trabalhista',
    icon: '👥',
    title: 'Direito Trabalhista',
    subtitle: 'Relações de Trabalho',
    description: 'Defesa de empregadores e trabalhadores com estratégia, prevenção e solidez técnica.',
    topics: [
      { heading: 'Contencioso Trabalhista', body: 'Defesa em reclamações trabalhistas, cálculo de verbas rescisórias, acompanhamento em audiências e recursos nas instâncias superiores.' },
      { heading: 'Assessoria a Empregadores', body: 'Elaboração de contratos de trabalho, regulamentos internos, políticas de home office e gestão de desligamentos.' },
      { heading: 'Auditoria Trabalhista', body: 'Diagnóstico do passivo trabalhista, identificação de riscos ocultos e estratégias de mitigação antes de processos de venda ou fusão.' },
      { heading: 'Direitos do Trabalhador', body: 'Orientação e defesa de empregados em casos de rescisão indevida, assédio moral, acidentes de trabalho e descumprimento de direitos.' },
    ],
  },
  {
    id: 'tributario',
    icon: '📋',
    title: 'Direito Tributário',
    subtitle: 'Planejamento e Contencioso Fiscal',
    description: 'Estratégia tributária legal para reduzir a carga fiscal e defender interesses perante o Fisco.',
    topics: [
      { heading: 'Planejamento Tributário', body: 'Análise do regime tributário mais adequado (Simples, Lucro Presumido, Real), aproveitamento de incentivos fiscais e estruturação de operações.' },
      { heading: 'Contencioso Administrativo', body: 'Defesa em autos de infração, impugnações ao CARF e aos tribunais administrativos estaduais e municipais.' },
      { heading: 'Contencioso Judicial', body: 'Mandados de segurança, ações anulatórias, discussão de créditos e execuções fiscais nas esferas federal, estadual e municipal.' },
      { heading: 'Recuperação de Créditos', body: 'Identificação de pagamentos indevidos ou a maior, pedidos de restituição e compensação de créditos tributários.' },
    ],
  },
  {
    id: 'imobiliario',
    icon: '🏠',
    title: 'Direito Imobiliário',
    subtitle: 'Compra, Venda e Locação',
    description: 'Segurança jurídica em todas as etapas de transações e empreendimentos imobiliários.',
    topics: [
      { heading: 'Compra e Venda de Imóveis', body: 'Due diligence imobiliária, análise de documentação, elaboração de contratos de promessa de compra e venda e acompanhamento de escritura.' },
      { heading: 'Locação Residencial e Comercial', body: 'Contratos de locação, renovatória, revisional e despejo. Assessoria a proprietários e inquilinos.' },
      { heading: 'Regularização Fundiária', body: 'Regularização de imóveis sem documentação adequada, usucapião e processos de registro imobiliário.' },
      { heading: 'Empreendimentos e Loteamentos', body: 'Assessoria em incorporações imobiliárias, registros de loteamentos e condomínios edilícios.' },
    ],
  },
  {
    id: 'sucessao',
    icon: '💎',
    title: 'Sucessão & Patrimônio',
    subtitle: 'Proteção Intergeracional',
    description: 'Proteção e transferência consciente do patrimônio familiar para as próximas gerações.',
    topics: [
      { heading: 'Planejamento Sucessório', body: 'Estruturação da transmissão patrimonial ainda em vida, com economia tributária legal e manutenção do controle familiar.' },
      { heading: 'Testamentos', body: 'Elaboração e registro de testamentos públicos e cerrados. Orientação sobre quotas disponíveis e legítima.' },
      { heading: 'Inventário e Partilha', body: 'Inventário extrajudicial (cartório) e judicial. Partilha de bens, cálculo e recolhimento de ITCMD.' },
      { heading: 'Holding Familiar', body: 'Criação de holding patrimonial para proteção de ativos, planejamento fiscal e facilitação da sucessão empresarial.' },
    ],
  },
]

export default function AreasPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-24">
        {/* Page hero */}
        <section className="relative py-20 border-b border-[var(--line)]" aria-labelledby="areas-heading">
          <div className="absolute inset-0 bg-[var(--surface)]/30 pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-6">
            <RevealOnScroll>
              <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex items-center gap-2 text-sm text-[var(--text-muted)]" role="list">
                  <li><a href="/" className="hover:text-[var(--accent)] transition-colors">Início</a></li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="text-[var(--text)]">Áreas de Atuação</li>
                </ol>
              </nav>
              <p className="text-[var(--accent)] font-medium text-sm tracking-widest uppercase mb-3">Expertise jurídica</p>
              <h1 id="areas-heading" className="font-display text-4xl md:text-5xl font-bold text-[var(--text)] mb-6 leading-tight max-w-3xl">
                Seis áreas de atuação. Uma única missão: proteger o que importa.
              </h1>
              <p className="text-[var(--text-muted)] text-xl leading-relaxed max-w-2xl">
                Nossa equipe reúne especialistas em diferentes ramos do direito para oferecer
                assessoria jurídica completa, sem que você precise buscar múltiplos escritórios.
              </p>
            </RevealOnScroll>

            {/* Quick nav */}
            <RevealOnScroll delay={0.2} className="mt-10">
              <nav aria-label="Navegação por área" className="flex flex-wrap gap-2">
                {areas.map(({ id, title, icon }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="flex items-center gap-2 px-4 py-2 rounded-full glass text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/30 text-sm transition-all"
                  >
                    <span aria-hidden="true">{icon}</span>
                    {title}
                  </a>
                ))}
              </nav>
            </RevealOnScroll>
          </div>
        </section>

        {/* Areas detail */}
        <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
          {areas.map((area, i) => (
            <section key={area.id} id={area.id} className="scroll-mt-24" aria-labelledby={`area-${area.id}`}>
              <RevealOnScroll>
                <div className="grid lg:grid-cols-3 gap-10">
                  {/* Left — title */}
                  <div className="lg:col-span-1">
                    <div className="sticky top-28">
                      <span className="text-4xl mb-4 block" role="img" aria-hidden="true">{area.icon}</span>
                      <h2 id={`area-${area.id}`} className="font-display text-3xl font-bold text-[var(--text)] mb-2">{area.title}</h2>
                      <p className="text-[var(--accent)] font-medium mb-4">{area.subtitle}</p>
                      <p className="text-[var(--text-muted)] leading-relaxed mb-6">{area.description}</p>
                      <a
                        href={`https://wa.me/${SITE.whatsapp}?text=Olá! Tenho interesse em ${area.title}. Poderia agendar uma consulta?`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[var(--accent)] text-sm font-medium hover:text-[var(--accent-light)] transition-colors"
                        aria-label={`Agendar consulta para ${area.title}`}
                      >
                        Consultar sobre esta área
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  {/* Right — topics */}
                  <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
                    {area.topics.map(({ heading, body }) => (
                      <SpotlightCard key={heading} className="glass rounded-xl p-6 card-hover h-full">
                        <h3 className="font-semibold text-[var(--text)] mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" aria-hidden="true" />
                          {heading}
                        </h3>
                        <p className="text-[var(--text-muted)] text-sm leading-relaxed">{body}</p>
                      </SpotlightCard>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
              {i < areas.length - 1 && <div className="gold-line mt-16" role="separator" />}
            </section>
          ))}
        </div>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}

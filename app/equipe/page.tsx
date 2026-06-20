import type { Metadata } from 'next'
import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { CTASection } from '@/components/sections/CTASection'
import { RevealOnScroll } from '@/components/effects/RevealOnScroll'
import { SpotlightCard } from '@/components/effects/SpotlightCard'
import { SITE } from '@/lib/utils'
import { Linkedin, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Equipe',
  description: 'Conheça os advogados do escritório Bastos, Melo & Associados — sócios e associados especializados em Fortaleza, CE.',
  alternates: { canonical: `${SITE.url}/equipe` },
}

const socios = [
  {
    name: 'Dr. Ricardo Augusto Bastos',
    oab: 'OAB/CE 12.450',
    role: 'Sócio-Fundador',
    areas: ['Direito Civil', 'Direito Empresarial', 'Planejamento Patrimonial'],
    bio: 'Fundador do escritório e especialista em Direito Civil e Empresarial, com mais de 18 anos de experiência em assessoria a empresas e pessoas em questões contratuais, societárias e patrimoniais. Mestre em Direito Empresarial pela Universidade de Fortaleza (UNIFOR). Membro do Instituto Brasileiro de Direito de Família (IBDFAM) e da Associação Brasileira de Direito e Negócios.',
    graduation: 'Mestre em Direito Empresarial — UNIFOR',
    initial: 'RB',
    color: 'from-[var(--brand-600)] to-[var(--brand-500)]',
  },
  {
    name: 'Dra. Ana Carolina Melo',
    oab: 'OAB/CE 14.892',
    role: 'Sócia-Fundadora',
    areas: ['Direito Trabalhista', 'Direito Tributário', 'Compliance'],
    bio: 'Co-fundadora e especialista em Direito do Trabalho e Tributário, com atuação destacada em contencioso trabalhista e planejamento fiscal. Pós-graduada em Direito Tributário pelo IBET e em Direito do Trabalho pela FGV Direito SP. Professora convidada em cursos de pós-graduação no Ceará.',
    graduation: 'Especialista em Direito Tributário — IBET',
    initial: 'AC',
    color: 'from-[var(--accent)] to-[#a07d15]',
  },
]

const associados = [
  {
    name: 'Dr. Paulo Henrique Carvalho',
    oab: 'OAB/CE 28.340',
    role: 'Advogado Associado',
    areas: ['Direito Imobiliário', 'Regularização Fundiária'],
    bio: 'Especialista em Direito Imobiliário com foco em due diligence, incorporações e regularização. Pós-graduado em Direito Imobiliário pela PUC-SP.',
    initial: 'PC',
  },
  {
    name: 'Dra. Camila Rocha Ferreira',
    oab: 'OAB/CE 31.102',
    role: 'Advogada Associada',
    areas: ['Sucessão & Patrimônio', 'Direito de Família'],
    bio: 'Especialista em planejamento sucessório e holding familiar. Pós-graduada em Direito das Famílias e das Sucessões pela UNIFOR.',
    initial: 'CF',
  },
  {
    name: 'Dr. Matheus Lima Costa',
    oab: 'OAB/CE 36.777',
    role: 'Advogado Associado',
    areas: ['Direito Empresarial', 'Contratos Comerciais'],
    bio: 'Atuação em M&A, contratos empresariais e compliance. MBA em Direito dos Negócios pela FGV.',
    initial: 'ML',
  },
  {
    name: 'Dra. Isabella Torres Sousa',
    oab: 'OAB/CE 40.215',
    role: 'Advogada Associada',
    areas: ['Direito Civil', 'Responsabilidade Civil'],
    bio: 'Especialista em responsabilidade civil e contratos. Pós-graduada em Direito Civil pela ESMEC.',
    initial: 'IS',
  },
]

const teamSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [...socios, ...associados].map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Person',
      name: p.name,
      jobTitle: p.role,
      worksFor: { '@type': 'Organization', name: SITE.name },
    },
  })),
}

export default function EquipePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }} />
      <Header />
      <main id="main-content" className="pt-24">
        {/* Page hero */}
        <section className="relative py-20 border-b border-[var(--line)]" aria-labelledby="equipe-heading">
          <div className="absolute inset-0 bg-[var(--surface)]/30 pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-6">
            <RevealOnScroll>
              <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex items-center gap-2 text-sm text-[var(--text-muted)]" role="list">
                  <li><a href="/" className="hover:text-[var(--accent)] transition-colors">Início</a></li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="text-[var(--text)]">Equipe</li>
                </ol>
              </nav>
              <p className="text-[var(--accent)] font-medium text-sm tracking-widest uppercase mb-3">Conheça quem vai cuidar do seu caso</p>
              <h1 id="equipe-heading" className="font-display text-4xl md:text-5xl font-bold text-[var(--text)] mb-6 leading-tight max-w-3xl">
                Especialistas dedicados ao seu caso.
              </h1>
              <p className="text-[var(--text-muted)] text-xl leading-relaxed max-w-2xl">
                Nossa equipe reúne profissionais com formação de ponta e vocação para o serviço jurídico
                humano e estratégico.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        {/* Sócios */}
        <section className="py-20" aria-labelledby="socios-heading">
          <div className="max-w-7xl mx-auto px-6">
            <RevealOnScroll className="mb-12">
              <h2 id="socios-heading" className="font-display text-3xl font-bold text-[var(--text)]">Sócios Fundadores</h2>
            </RevealOnScroll>
            <div className="grid md:grid-cols-2 gap-8">
              {socios.map(({ name, oab, role, areas, bio, graduation, initial, color }, i) => (
                <RevealOnScroll key={name} delay={i * 0.1}>
                  <SpotlightCard className="glass rounded-2xl p-8 card-hover h-full" aria-label={`Perfil de ${name}`}>
                    <div className="flex items-start gap-5 mb-6">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shrink-0`}>
                        <span className="font-display text-white font-bold text-xl" aria-hidden="true">{initial}</span>
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-[var(--text)] mb-0.5">{name}</h3>
                        <p className="text-[var(--accent)] text-sm font-medium mb-1">{role}</p>
                        <p className="text-[var(--text-muted)] text-xs">{oab}</p>
                      </div>
                    </div>
                    <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-5">{bio}</p>
                    <div className="mb-5">
                      <p className="text-[var(--text-muted)] text-xs mb-2 uppercase tracking-wider font-medium">Formação</p>
                      <p className="text-[var(--text)] text-sm font-medium">{graduation}</p>
                    </div>
                    <div className="mb-5">
                      <p className="text-[var(--text-muted)] text-xs mb-2 uppercase tracking-wider font-medium">Áreas de Especialidade</p>
                      <div className="flex flex-wrap gap-1.5">
                        {areas.map((a) => (
                          <span key={a} className="px-2.5 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-medium">{a}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3 pt-4 border-t border-[var(--line)]">
                      <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                        aria-label={`LinkedIn de ${name}`}>
                        <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                      </a>
                      <a href={`mailto:${SITE.email}`}
                        className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                        aria-label={`Email para ${name}`}>
                        <Mail className="w-3.5 h-3.5" /> Contato
                      </a>
                    </div>
                  </SpotlightCard>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Associados */}
        <section className="py-20 border-t border-[var(--line)] bg-[var(--surface)]/20" aria-labelledby="associados-heading">
          <div className="max-w-7xl mx-auto px-6">
            <RevealOnScroll className="mb-12">
              <h2 id="associados-heading" className="font-display text-3xl font-bold text-[var(--text)]">Advogados Associados</h2>
            </RevealOnScroll>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {associados.map(({ name, oab, role, areas, bio, initial }, i) => (
                <RevealOnScroll key={name} delay={i * 0.08}>
                  <SpotlightCard className="glass rounded-xl p-6 card-hover h-full" aria-label={`Perfil de ${name}`}>
                    <div className="w-12 h-12 rounded-xl bg-[var(--brand-500)]/20 flex items-center justify-center mb-4">
                      <span className="font-display text-[var(--accent)] font-bold" aria-hidden="true">{initial}</span>
                    </div>
                    <h3 className="font-display text-base font-bold text-[var(--text)] mb-0.5">{name}</h3>
                    <p className="text-[var(--accent)] text-xs font-medium mb-1">{role}</p>
                    <p className="text-[var(--text-muted)] text-xs mb-3">{oab}</p>
                    <p className="text-[var(--text-muted)] text-xs leading-relaxed mb-4">{bio}</p>
                    <div className="flex flex-wrap gap-1">
                      {areas.map((a) => (
                        <span key={a} className="px-2 py-0.5 rounded-full bg-[var(--surface-2)]/60 text-[var(--text-muted)] text-xs">{a}</span>
                      ))}
                    </div>
                  </SpotlightCard>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}

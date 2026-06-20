import { SpotlightCard } from '@/components/effects/SpotlightCard'
import { RevealOnScroll } from '@/components/effects/RevealOnScroll'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'

const areas = [
  {
    id: 'civil',
    icon: '⚖️',
    title: 'Direito Civil',
    subtitle: 'Contratos e Relações Pessoais',
    description:
      'Assessoria completa em contratos, responsabilidade civil, direito de família, sucessões e questões patrimoniais entre pessoas físicas e jurídicas.',
    tags: ['Contratos', 'Família', 'Responsabilidade Civil', 'Danos'],
  },
  {
    id: 'empresarial',
    icon: '🏢',
    title: 'Direito Empresarial',
    subtitle: 'Societário e Corporativo',
    description:
      'Estruturação de empresas, contratos comerciais, fusões e aquisições, compliance, recuperação judicial e assessoria estratégica para negócios.',
    tags: ['Societário', 'M&A', 'Compliance', 'Recuperação Judicial'],
  },
  {
    id: 'trabalhista',
    icon: '👥',
    title: 'Direito Trabalhista',
    subtitle: 'Relações de Trabalho',
    description:
      'Defesa de empresas e empregados em ações trabalhistas, elaboração de contratos, consultoria preventiva e gestão de passivo trabalhista.',
    tags: ['Ações Trabalhistas', 'Contratos CLT', 'Auditoria', 'Negociação'],
  },
  {
    id: 'tributario',
    icon: '📋',
    title: 'Direito Tributário',
    subtitle: 'Planejamento e Contencioso',
    description:
      'Planejamento tributário estratégico, discussão de créditos fiscais, defesa em autos de infração e consultoria em regimes especiais de tributação.',
    tags: ['Planejamento Fiscal', 'CARF', 'Incentivos', 'Créditos Tributários'],
  },
  {
    id: 'imobiliario',
    icon: '🏠',
    title: 'Direito Imobiliário',
    subtitle: 'Compra, Venda e Locação',
    description:
      'Análise e elaboração de contratos imobiliários, due diligence de imóveis, regularização fundiária, loteamentos e assessoria em empreendimentos.',
    tags: ['Contratos Imobiliários', 'Due Diligence', 'Loteamentos', 'Locação'],
  },
  {
    id: 'sucessao',
    icon: '💎',
    title: 'Sucessão & Patrimônio',
    subtitle: 'Planejamento Patrimonial',
    description:
      'Elaboração de testamentos, inventários judiciais e extrajudiciais, holding familiar, planejamento sucessório e proteção do patrimônio familiar.',
    tags: ['Testamentos', 'Inventário', 'Holding Familiar', 'ITCMD'],
  },
]

export function PracticeAreasSection() {
  return (
    <section id="areas" className="py-24" aria-labelledby="areas-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <RevealOnScroll className="text-center mb-16">
          <p className="text-[var(--accent)] font-medium text-sm tracking-widest uppercase mb-3">
            Expertise Jurídica
          </p>
          <h2
            id="areas-heading"
            className="font-display text-4xl md:text-5xl font-bold text-[var(--text)] mb-4"
          >
            Áreas de Atuação
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto leading-relaxed">
            Cobertura jurídica completa para proteger seu patrimônio, seus negócios e seus direitos.
          </p>
        </RevealOnScroll>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {areas.map((area, i) => (
            <RevealOnScroll key={area.id} delay={i * 0.08}>
              <Link href={`/areas-de-atuacao#${area.id}`} className="block h-full" aria-label={`Ver detalhes: ${area.title}`}>
                <SpotlightCard className="glass rounded-2xl p-7 h-full card-hover cursor-pointer group">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl" role="img" aria-hidden="true">{area.icon}</span>
                    <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-all group-hover:translate-x-1" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[var(--text)] mb-1">
                    {area.title}
                  </h3>
                  <p className="text-[var(--accent)] text-xs font-medium mb-3 tracking-wide">
                    {area.subtitle}
                  </p>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-5">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full bg-[var(--brand-500)]/10 text-[var(--brand-400)] text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </Link>
            </RevealOnScroll>
          ))}
        </div>

        {/* CTA */}
        <RevealOnScroll className="text-center">
          <Link href="/areas-de-atuacao">
            <Button variant="outline" size="lg" className="group">
              Ver Todas as Áreas em Detalhe
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  )
}

import Link from 'next/link'
import { Scale, Phone, Mail, MapPin, Linkedin, Instagram } from 'lucide-react'
import { SITE } from '@/lib/utils'

const areas = [
  { label: 'Direito Civil', href: '/areas-de-atuacao#civil' },
  { label: 'Direito Empresarial', href: '/areas-de-atuacao#empresarial' },
  { label: 'Direito Trabalhista', href: '/areas-de-atuacao#trabalhista' },
  { label: 'Direito Tributário', href: '/areas-de-atuacao#tributario' },
  { label: 'Direito Imobiliário', href: '/areas-de-atuacao#imobiliario' },
  { label: 'Sucessão & Patrimônio', href: '/areas-de-atuacao#sucessao' },
]

const quick = [
  { label: 'Início', href: '/' },
  { label: 'Sobre o Escritório', href: '/sobre' },
  { label: 'Áreas de Atuação', href: '/areas-de-atuacao' },
  { label: 'Equipe', href: '/equipe' },
  { label: 'Contato', href: '/contato' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--line)]" role="contentinfo">
      <div className="absolute inset-0 bg-[var(--surface)]/60 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center">
                <Scale className="w-5 h-5 text-[var(--accent)]" />
              </div>
              <div>
                <span className="font-display font-semibold text-[var(--text)] text-sm block">Bastos, Melo</span>
                <span className="text-[var(--text-muted)] text-xs tracking-wider uppercase">& Associados</span>
              </div>
            </div>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-5">
              Advocacia e consultoria jurídica de excelência em Fortaleza, com atuação em todo o Ceará.
            </p>
            <div className="flex gap-3">
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/30 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/30 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-sm font-semibold text-[var(--text)] mb-4 tracking-wide">
              Navegação
            </h3>
            <ul className="space-y-2" role="list">
              {quick.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-display text-sm font-semibold text-[var(--text)] mb-4 tracking-wide">
              Áreas de Atuação
            </h3>
            <ul className="space-y-2" role="list">
              {areas.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold text-[var(--text)] mb-4 tracking-wide">
              Contato
            </h3>
            <ul className="space-y-3" role="list">
              <li>
                <a href={`tel:${SITE.phone}`} className="flex items-start gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors group">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 group-hover:text-[var(--accent)]" />
                  <span>{SITE.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-start gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors group">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 group-hover:text-[var(--accent)]" />
                  <span>{SITE.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <address className="not-italic leading-relaxed">
                    {SITE.address}<br />{SITE.city} — {SITE.state}
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="gold-line mb-6" role="separator" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
          </p>
          <p className="max-w-2xl leading-relaxed">
            A publicidade jurídica desta página está de acordo com as disposições do Provimento n.º 205/2021 do CFB e
            da Resolução n.º 02/2012 do CFOAB. As informações aqui veiculadas têm caráter meramente informativo e não
            representam promessa ou garantia de resultados. {SITE.oab}.
          </p>
        </div>
      </div>
    </footer>
  )
}

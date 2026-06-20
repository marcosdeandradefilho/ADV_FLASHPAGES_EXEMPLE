'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Scale, Phone } from 'lucide-react'
import { cn, SITE } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/areas-de-atuacao', label: 'Áreas de Atuação' },
  { href: '/equipe', label: 'Equipe' },
  { href: '/contato', label: 'Contato' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled ? 'glass-strong shadow-2xl shadow-black/40 py-3' : 'py-5'
        )}
        role="banner"
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between" aria-label="Navegação principal">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label={`${SITE.name} — Página inicial`}>
            <div className="w-9 h-9 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--accent)]/20">
              <Scale className="w-5 h-5 text-[var(--accent)]" />
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-semibold text-[var(--text)] text-sm leading-tight block">
                Bastos, Melo
              </span>
              <span className="text-[var(--text-muted)] text-xs tracking-wider uppercase">& Associados</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      'relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                      active
                        ? 'text-[var(--accent)]'
                        : 'text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-white/5'
                    )}
                    aria-current={active ? 'page' : undefined}
                  >
                    {label}
                    {active && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-4 right-4 h-px bg-[var(--accent)]"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent)] text-sm transition-colors"
              aria-label={`Ligar para ${SITE.phone}`}
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">{SITE.phone}</span>
            </a>
            <Button
              variant="gold"
              size="sm"
              onClick={() => window.open(`https://wa.me/${SITE.whatsapp}?text=Olá! Gostaria de agendar uma consulta.`, '_blank', 'noopener,noreferrer')}
              aria-label="Agendar consulta via WhatsApp"
            >
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 rounded-lg glass text-[var(--text)] hover:text-[var(--accent)] transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] z-40 glass-strong border-t border-[var(--line)] shadow-2xl lg:hidden"
          >
            <nav className="max-w-7xl mx-auto px-6 py-6">
              <ul className="space-y-1 mb-6" role="list">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className={cn(
                        'block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                        pathname === href
                          ? 'bg-[var(--accent)]/10 text-[var(--accent)]'
                          : 'text-[var(--text-muted)] hover:bg-white/5 hover:text-[var(--text)]'
                      )}
                      aria-current={pathname === href ? 'page' : undefined}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="border-t border-[var(--line)] pt-4 space-y-3">
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent)] text-sm transition-colors px-4"
                >
                  <Phone className="w-4 h-4" />
                  {SITE.phone}
                </a>
                <Button
                  className="w-full"
                  onClick={() => window.open(`https://wa.me/${SITE.whatsapp}?text=Olá! Gostaria de agendar uma consulta.`, '_blank', 'noopener,noreferrer')}
                >
                  Agendar Consulta via WhatsApp
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

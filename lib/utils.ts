import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value: number, currency = 'BRL') {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency }).format(value)
}

export function formatPhone(phone: string) {
  return phone.replace(/\D/g, '').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
}

export const SITE = {
  name: 'Bastos, Melo & Associados',
  shortName: 'Bastos Melo',
  tagline: 'Segurança jurídica para o que importa.',
  description: 'Escritório de advocacia premium em Fortaleza especializado em Direito Civil, Empresarial, Trabalhista, Tributário, Imobiliário e Sucessório.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bastosmeloadv.com.br',
  email: 'contato@bastosmeloadv.com.br',
  phone: '(85) 3000-1200',
  whatsapp: '5585990001200',
  address: 'Av. Dom Luís, 500 — Sala 1201, Aldeota',
  city: 'Fortaleza',
  state: 'CE',
  cep: '60160-230',
  oab: 'OAB/CE',
  founded: '2008',
  social: {
    linkedin: 'https://linkedin.com/company/bastos-melo-adv',
    instagram: 'https://instagram.com/bastosmeloadv',
  },
} as const

import type { Metadata } from 'next'
import { Playfair_Display, Hanken_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import { SITE } from '@/lib/utils'

const display = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
})

const body = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: SITE.name,
  alternateName: SITE.shortName,
  description: SITE.description,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  foundingDate: SITE.founded,
  priceRange: '$$$$',
  areaServed: 'Brasil',
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address,
    addressLocality: SITE.city,
    addressRegion: SITE.state,
    postalCode: SITE.cep,
    addressCountry: 'BR',
  },
  sameAs: [SITE.social.linkedin, SITE.social.instagram],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'Licença OAB/CE',
  },
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.description,
  keywords: [
    'escritório de advocacia Fortaleza',
    'advogado Fortaleza CE',
    'direito civil Fortaleza',
    'direito empresarial Ceará',
    'advogado trabalhista Fortaleza',
    'direito tributário CE',
    'advocacia premium Fortaleza',
    'Bastos Melo Advogados',
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${SITE.name} — Advocacia Premium em Fortaleza` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: ['/og-image.png'],
  },
  alternates: { canonical: SITE.url },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="grain-overlay mesh-bg font-body antialiased text-[var(--text)]">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

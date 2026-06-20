# Bastos, Melo & Associados — Site Premium de Advocacia

> **Template FlashPages VIP Black Diamond** — Next.js 14 + TypeScript + Tailwind  
> Pronto para deploy no GitHub + Vercel em minutos.

---

## ✦ Visão Geral

Site institucional premium para escritório de advocacia brasileiro, construído sobre a stack mais moderna disponível. Trust Navy × Gold — design de autoridade silenciosa, sem excessos.

**5 páginas completas:**
- `/` — Home (Hero + Stats + Áreas + Diferenciais + Depoimentos + FAQ + CTA)
- `/sobre` — História, timeline, valores e compliance OAB
- `/areas-de-atuacao` — 6 áreas detalhadas com anchors
- `/equipe` — Sócios em destaque + associados em grid
- `/contato` — Canais, formulário e localização

---

## ⚡ Quick Start (5 minutos)

### 1. Instalar dependências
```bash
npm install
```

### 2. Configurar variáveis de ambiente
```bash
cp .env.example .env.local
```
Edite `.env.local` com os dados reais do escritório.

### 3. Rodar localmente
```bash
npm run dev
# → http://localhost:3000
```

### 4. Build de produção
```bash
npm run build
npm start
```

---

## 🚀 Deploy no Vercel (recomendado)

### Via GitHub (método ideal)

```bash
# 1. Inicializar repositório
git init
git add .
git commit -m "feat: Bastos Melo Advocacia — site premium"
git branch -M main

# 2. Criar repo no GitHub e conectar
git remote add origin https://github.com/SEU-USUARIO/bastos-melo-advocacia.git
git push -u origin main
```

### 3. Importar no Vercel
1. Acesse [vercel.com/new](https://vercel.com/new)
2. Clique em **"Import Git Repository"**
3. Selecione o repositório criado
4. Vercel detecta Next.js automaticamente
5. Adicione as variáveis de ambiente (copie do `.env.example`)
6. Clique em **Deploy** ✓

**Domain customizado:** em Project Settings → Domains, adicione o domínio do escritório.

---

## 🎨 Personalização

### Dados do escritório
Edite **`lib/utils.ts`** — arquivo `SITE` contém todos os dados centralizados:

```typescript
export const SITE = {
  name: 'Bastos, Melo & Associados',
  tagline: 'Segurança jurídica para o que importa.',
  phone: '(85) 3000-1200',
  whatsapp: '5585990001200',
  email: 'contato@bastosmeloadv.com.br',
  address: { ... },
  // ... etc
}
```

### Cores
Edite as variáveis CSS em **`app/globals.css`**:

```css
:root {
  --bg:        #07091f;   /* fundo principal */
  --accent:    #c9a227;   /* ouro — cor de destaque */
  --brand-500: #1a52a0;   /* azul navy */
  /* ... */
}
```

### Tipografia
Edite **`app/layout.tsx`** — troque `Playfair_Display` e `Hanken_Grotesk` por qualquer fonte do Google Fonts.

### Conteúdo por página
Cada página em `app/[rota]/page.tsx` contém os textos diretamente. Edite inline.

### Áreas de atuação
Em `app/areas-de-atuacao/page.tsx`, o array `practiceAreas` contém todas as 6 áreas com subtópicos — edite conforme a especialização real do escritório.

### Equipe
Em `app/equipe/page.tsx`, edite os arrays `partners` e `associates`.

---

## 📁 Estrutura do Projeto

```
bastos-melo-advocacia/
├── app/
│   ├── globals.css              # Tokens de design, glassmorphism, keyframes
│   ├── layout.tsx               # Root layout + metadata global + JSON-LD
│   ├── page.tsx                 # Home page
│   ├── sitemap.ts               # Sitemap automático
│   ├── robots.ts                # robots.txt
│   ├── sobre/
│   │   └── page.tsx             # Página Sobre
│   ├── areas-de-atuacao/
│   │   └── page.tsx             # Áreas de Atuação
│   ├── equipe/
│   │   └── page.tsx             # Equipe
│   └── contato/
│       └── page.tsx             # Contato + formulário
│
├── components/
│   ├── ui/
│   │   └── Button.tsx           # Botão com variantes (gold, outline, ghost)
│   ├── effects/
│   │   ├── MagneticButton.tsx   # Efeito magnético no hover
│   │   ├── SpotlightCard.tsx    # Spotlight dourado no hover
│   │   ├── RevealOnScroll.tsx   # Reveal com IntersectionObserver
│   │   └── AnimatedCounter.tsx  # Contador animado
│   └── sections/
│       ├── Header.tsx           # Navbar glassmorphism + mobile menu
│       ├── Footer.tsx           # Rodapé completo + disclaimer OAB
│       ├── HeroSection.tsx      # Hero com word-reveal + orbs
│       ├── StatsSection.tsx     # 4 métricas com animação
│       ├── PracticeAreasSection.tsx  # 6 áreas em SpotlightCards
│       ├── DifferentialsSection.tsx  # Diferenciais + citação
│       ├── TestimonialsSection.tsx   # 6 depoimentos + disclaimer
│       ├── FAQSection.tsx       # Accordion FAQ
│       ├── CTASection.tsx       # CTA final
│       └── ContactForm.tsx      # Formulário com honeypot + LGPD
│
├── lib/
│   ├── utils.ts                 # cn(), SITE constant, formatCurrency()
│   └── animations.ts            # Variantes Framer Motion reutilizáveis
│
├── public/
│   └── .well-known/
│       └── security.txt         # Security disclosure
│
├── .env.example                 # Template de variáveis
├── .gitignore
├── next.config.ts               # Security headers + otimizações
├── tailwind.config.ts           # Design tokens + animações custom
├── tsconfig.json
├── vercel.json                  # Headers extras + framework config
└── package.json
```

---

## 🔒 SEO & Segurança

### SEO implementado
- ✅ Metadata única por página (title, description, keywords)
- ✅ Open Graph + Twitter Card
- ✅ Canonical URL por página
- ✅ `lang="pt-BR"` no HTML
- ✅ JSON-LD: `LegalService`, `Organization`, `FAQPage`, `ItemList`, `ContactPage`, `BreadcrumbList`
- ✅ Sitemap automático com 5 URLs
- ✅ robots.txt
- ✅ HTML semântico (main, section, article, address, cite, time)
- ✅ H1 único por página

### Imagem OG (pendente manual)
Crie `public/og-image.png` com 1200×630px. Use Canva ou qualquer editor — coloque o logotipo do escritório sobre fundo `#07091f`.

### Segurança
- ✅ HSTS, X-XSS-Protection, X-Content-Type-Options, X-Frame-Options
- ✅ Referrer-Policy, Permissions-Policy
- ✅ `poweredByHeader: false`
- ✅ Honeypot anti-bot no formulário de contato
- ✅ LGPD consent obrigatório no formulário
- ✅ `rel="noopener noreferrer"` em links externos
- ✅ Segredos apenas em `.env.local` (nunca commitado)

---

## ⚖️ Compliance OAB

Este template foi construído em conformidade com:

- **Provimento 205/2021 do CFOAB** — publicidade advocatícia
- **Provimento 94/2000** — regras de captação
- **Resolução 02/2012 do CFOAB** — código de ética

**O que NÃO está neste template** (por design):
- ❌ Promessas de resultado ("ganharemos seu caso")
- ❌ Captação de clientela irregular
- ❌ Preços ou honorários divulgados
- ❌ Comparações com concorrentes

Consulte sempre o Código de Ética da OAB antes de personalizar conteúdos.

---

## 📦 Stack

| Tecnologia | Versão | Uso |
|-----------|--------|-----|
| Next.js | 14.2.18 | Framework React |
| React | 18.3.1 | UI |
| TypeScript | 5.6.3 | Type safety |
| Tailwind CSS | 3.4.15 | Estilização |
| Framer Motion | 11.11.17 | Animações |
| Lucide React | 0.460.0 | Ícones |
| @vercel/analytics | 1.4.1 | Analytics |

---

## 🛠️ Scripts disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm start        # Servidor de produção (após build)
npm run lint     # ESLint
```

---

## 📋 Checklist de personalização antes de publicar

- [ ] Editar `lib/utils.ts` → dados reais do escritório (nome, telefone, WhatsApp, email, endereço)
- [ ] Editar `app/layout.tsx` → URL do site real em `metadataBase` e `canonical`
- [ ] Editar `.env.local` → variáveis reais
- [ ] Criar `public/og-image.png` (1200×630px)
- [ ] Criar `public/logo.svg` ou `.png` e referenciar no Header/Footer
- [ ] Atualizar fotos da equipe em `app/equipe/page.tsx` (URLs de imagem reais)
- [ ] Personalizar textos de cada página
- [ ] Atualizar áreas de atuação conforme especialização real
- [ ] Adicionar domínio customizado no Vercel
- [ ] Configurar reCAPTCHA v3 ou similar no ContactForm (backend)
- [ ] Implementar endpoint real de envio de formulário (ex: Resend, SendGrid)
- [ ] Testar em mobile (responsividade) e modo claro do sistema
- [ ] Verificar Google Search Console após indexação

---

## 📄 Licença

Template criado pelo ecossistema **FlashPages** — FGBN Soluções Avançadas Ltda.  
Uso restrito ao licenciado. Proibida redistribuição sem autorização expressa.

---

*"Segurança jurídica para o que importa."*

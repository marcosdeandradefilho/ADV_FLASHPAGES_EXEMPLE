import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        text: { DEFAULT: 'var(--text)', muted: 'var(--text-muted)' },
        brand: {
          400: 'var(--brand-400)',
          500: 'var(--brand-500)',
          600: 'var(--brand-600)',
        },
        accent: { DEFAULT: 'var(--accent)', light: 'var(--accent-light)' },
      },
      borderRadius: { DEFAULT: 'var(--radius)' },
      animation: {
        aurora: 'aurora 15s ease infinite',
        shimmer: 'shimmer 2.8s linear infinite',
        float: 'float 7s ease-in-out infinite',
        grain: 'grain 0.6s steps(1) infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
        pulse: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        aurora: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        grain: {
          '0%,100%': { transform: 'translate(0,0)' },
          '20%': { transform: 'translate(2%,2%)' },
          '40%': { transform: 'translate(-2%,2%)' },
          '60%': { transform: 'translate(2%,-2%)' },
          '80%': { transform: 'translate(-1%,1%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundSize: { '200%': '200%', '300%': '300%' },
    },
  },
  plugins: [],
}

export default config

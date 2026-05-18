import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-montserrat)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      fontSize: {
        display: ['clamp(40px, 6vw, 72px)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        h1: ['clamp(28px, 4vw, 48px)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        h2: ['clamp(22px, 3vw, 32px)', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        h3: ['18px', { lineHeight: '1.4' }],
        body: ['16px', { lineHeight: '1.7' }],
        small: ['13px', { lineHeight: '1.5' }],
        mono: ['13px', { lineHeight: '1.6' }],
      },
      colors: {
        bg: '#080808',
        surface: '#101010',
        border: '#1C1C1C',
        'text-primary': '#F0F0F0',
        'text-secondary': '#707070',
        'text-tertiary': '#3A3A3A',
        accent: '#00E5A0',
        'accent-dim': 'rgba(0,229,160,0.08)',
        'code-bg': '#0D0D0D',
      },
      maxWidth: {
        content: '720px',
        layout: '1100px',
      },
    },
  },
  plugins: [],
}

export default config

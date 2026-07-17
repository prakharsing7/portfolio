import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'var(--font-geist)', 'sans-serif'],
        body: ['var(--font-geist)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
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
        bg: '#171D26',
        surface: '#202834',
        border: '#2D3846',
        'text-primary': '#F0F0F0',
        'text-secondary': '#8B95A1',
        'text-tertiary': '#3D4A56',
        accent: '#00E5A0',
        'accent-dim': 'rgba(0,229,160,0.08)',
        'code-bg': '#10151C',
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

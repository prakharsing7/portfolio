import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Uses',
  description: 'Tools, stack, and hardware.',
  robots: { index: false, follow: false },
}

const SECTIONS = [
  {
    heading: 'Tools & Stack',
    items: [
      ['Editor', 'VS Code'],
      ['Terminal', 'iTerm2 / Zsh'],
      ['Version control', 'Git / GitHub'],
      ['Primary lang', 'TypeScript / PHP'],
      ['Framework', 'Next.js / Symfony'],
      ['Styling', 'Tailwind CSS'],
      ['Database', 'PostgreSQL / MongoDB'],
      ['Deployment', 'Vercel'],
      ['AI', 'Claude (Anthropic)'],
    ],
  },
  {
    heading: 'Hardware',
    items: [
      ['Machine', 'MacBook Pro'],
      ['Chargers tested', 'KEBA · Rolec · NexBlue\nEnSmart · EN+ · Vestel\nHeliox · and counting'],
    ],
  },
]

export default function Uses() {
  return (
    <div className="px-6 pt-32 pb-20 max-w-content mx-auto font-mono">
      <p className="text-small text-text-tertiary tracking-widest uppercase mb-12">/uses</p>
      {SECTIONS.map((section) => (
        <div key={section.heading} className="mb-12">
          <p className="text-small text-text-secondary tracking-widest uppercase mb-4">
            {section.heading}
          </p>
          <div className="border-t border-border">
            {section.items.map(([key, value]) => (
              <div key={key} className="flex gap-6 py-3 border-b border-border">
                <span className="text-small text-text-tertiary w-40 shrink-0">{key}</span>
                <span className="text-small text-text-secondary whitespace-pre-line">{value}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      <p className="text-small text-text-tertiary italic mt-8 pt-8 border-t border-border">
        This page is not linked in the nav. You found it.
      </p>
    </div>
  )
}

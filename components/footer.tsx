'use client'
import Link from 'next/link'
import { Keyboard } from 'lucide-react'

const footerLinks = [
  { href: '/work', label: 'Work' },
  { href: '/blog', label: 'Blog' },
  { href: '/photos', label: 'Photos' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border mt-32 py-12 px-6">
      <div className="max-w-layout mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <span className="font-mono text-small text-text-tertiary">
          © {new Date().getFullYear()} Prakhar Singh
        </span>
        <div className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-small text-text-tertiary hover:text-text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-command-palette'))}
            className="text-text-tertiary hover:text-accent transition-colors duration-200 p-2 -m-2"
            aria-label="Open command palette (Cmd+K)"
          >
            <Keyboard size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}

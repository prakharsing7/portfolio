'use client'
import { Keyboard } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border mt-32 py-12 px-6">
      <div className="max-w-layout mx-auto flex items-center justify-between">
        <span className="font-mono text-small text-text-tertiary">
          © {new Date().getFullYear()} Prakhar Singh
        </span>
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('open-command-palette'))}
          className="text-text-tertiary hover:text-text-secondary transition-colors"
          aria-label="Open command palette (Cmd+K)"
        >
          <Keyboard size={14} />
        </button>
      </div>
    </footer>
  )
}

'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/blog', label: 'Blog' },
  { href: '/photos', label: 'Photos' },
]

// lucide-react@1.16.0 has no Github icon; inline the mark.
function GithubMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
    </svg>
  )
}

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav aria-label="Main" className="fixed top-0 left-0 right-0 z-40 w-full bg-bg">
      <div className="max-w-layout mx-auto px-6 py-5 flex items-center justify-between">
        {/* Home mark: gradient orb, matches the favicon */}
        <Link href="/" aria-label="Home" className="py-3 -my-3 transition-opacity hover:opacity-80">
          <svg width="20" height="20" viewBox="0 0 32 32" aria-hidden="true">
            <defs>
              <radialGradient id="navOrb" cx="34%" cy="28%" r="82%">
                <stop offset="0%" stopColor="#7CF7D6" />
                <stop offset="42%" stopColor="#00E5A0" />
                <stop offset="100%" stopColor="#0A3A32" />
              </radialGradient>
            </defs>
            <circle cx="16" cy="16" r="15.5" fill="url(#navOrb)" />
          </svg>
        </Link>

        <div className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname.startsWith(link.href) ? 'page' : undefined}
              className={`font-mono text-small relative group transition-colors ${
                pathname.startsWith(link.href)
                  ? 'text-text-primary'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-[width] duration-200 ${
                  pathname.startsWith(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}

          {/* Hairline divider: internal pages | external link */}
          <span className="h-4 w-px bg-border" aria-hidden="true" />

          <a
            href="https://github.com/prakharsing7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-secondary hover:text-text-primary transition-colors py-3 -my-3"
          >
            <GithubMark />
          </a>
        </div>
      </div>
    </nav>
  )
}

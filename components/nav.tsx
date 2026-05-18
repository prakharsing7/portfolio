'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/work',  label: 'Work'  },
  { href: '/blog',  label: 'Blog'  },
  { href: '/about', label: 'About' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 w-full">
      <div className="max-w-layout mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-small text-text-primary hover:opacity-70 transition-opacity"
        >
          PS
        </Link>
        <div className="flex gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-mono text-small relative group transition-colors ${
                pathname.startsWith(link.href)
                  ? 'text-text-primary'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-200 ${
                  pathname.startsWith(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

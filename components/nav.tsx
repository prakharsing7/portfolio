'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/experience', label: 'Experience' },
  { href: '/work',       label: 'Work'       },
  { href: '/blog',       label: 'Blog'       },
  { href: '/about',      label: 'About'      },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav aria-label="Main" className="fixed top-0 left-0 right-0 z-40 w-full bg-bg">
      <div className="max-w-layout mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-small text-text-primary hover:text-accent transition-colors relative group py-3 -my-3"
        >
          PS
          <div className="absolute inset-0 bg-accent blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10" />
        </Link>
        <div className="flex gap-8">
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
        </div>
      </div>
    </nav>
  )
}

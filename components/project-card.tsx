import Link from 'next/link'

type ProjectCardProps = {
  number: string
  title: string
  description: string
  year: string
  stack: string[]
  href: string
}

export function ProjectCard({ number, title, description, year, stack, href }: ProjectCardProps) {
  return (
    <div className="border-b border-border py-10 group transition-[colors,transform] duration-300 hover:-translate-y-1">
      <Link href={href} className="block">
        <div className="flex items-start gap-6">
          <span className="font-mono text-small text-accent w-8 shrink-0 mt-1 relative">
            {number}
            <div className="absolute inset-0 bg-accent blur-lg opacity-20 -z-10 group-hover:opacity-40 transition-opacity duration-300" />
          </span>
          <div className="flex-1">
            <h2 className="font-display text-h2 text-text-primary relative inline-block group-hover:text-accent transition-colors duration-200">
              {title}
              <span className="absolute -bottom-0.5 left-0 h-px bg-accent w-0 group-hover:w-full transition-all duration-200 ease-linear" />
            </h2>
            <p className="mt-3 text-body text-text-secondary max-w-prose">{description}</p>
            <div className="mt-4 flex items-center gap-3 flex-wrap">
              <span className="font-mono text-small text-text-tertiary">{year}</span>
              {stack.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-small text-text-secondary border border-border px-2 py-0.5 group-hover:border-accent/50 transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
              <span className="font-mono text-small text-text-tertiary group-hover:text-accent ml-auto transition-colors duration-200">
                View →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

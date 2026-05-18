import type { Metadata } from 'next'
import { EXPERIENCE } from '@/lib/experience'

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Career history — AI & Platform Engineer specialising in EV infrastructure.',
}

export default function Experience() {
  return (
    <div className="px-6 pt-32 pb-20 max-w-layout mx-auto">
      <p className="font-mono text-small text-text-tertiary tracking-widest uppercase mb-12">Experience</p>

      <div>
        {EXPERIENCE.map((role) => (
          <div
            key={`${role.company}-${role.title}`}
            className="border-b border-border py-10 last:border-b-0"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-3">
              <div className="flex items-baseline gap-3">
                <h2 className="font-display text-h2 text-text-primary">{role.title}</h2>
                <span className="font-mono text-small text-accent">{role.company}</span>
              </div>
              <span className="font-mono text-small text-text-tertiary shrink-0">{role.period}</span>
            </div>
            {role.description && (
              <p className="text-body text-text-secondary max-w-prose">{role.description}</p>
            )}
            {role.tags && role.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {role.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-small text-text-tertiary border border-border px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

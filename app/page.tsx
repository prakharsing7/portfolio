import { allBlogs, allWorks } from 'contentlayer2/generated'
import Link from 'next/link'
import { ProjectCard } from '@/components/project-card'

const FEATURED_SLUGS   = ['empact', 'forecast', 'circles']
const FEATURED_NUMBERS = ['01', '02', '03']

type ExperienceRole = { title: string; company: string; period: string; description?: string; tags?: string[] }

const EXPERIENCE: ExperienceRole[] = [
  {
    title: "AI & Backend Engineer",
    company: "Electric Miles",
    period: "2026–present",
    description:
      "Led the internal rollout of Claude (Anthropic) across Electric Miles’ operations, automating high-friction workflows in the PHP/Symfony backend. First production AI integration at an EV infrastructure company.",
    tags: ["PHP", "Symfony", "Claude API", "TypeScript", "OCPI"],
  },
  {
    title: "Platform Onboarding Engineer",
    company: "Electric Miles",
    period: "2024–2026",
    description:
      "Integrated 30+ EV chargers into a live OCPP network. Owned full end-to-end test coverage of emPACT, Electric Miles’ flagship B2B platform for CPOs and fleet operators.",
    tags: ["OCPP", "PHP", "Symfony", "PostgreSQL", "E2E Testing"],
  },
  {
    title: "Intern",
    company: "Electric Miles",
    period: "2022–2024",
  },
  {
    title: "iOS Developer Intern",
    company: "Infosys",
    period: "2022",
    description:
      "Built and shipped iOS features using Swift and UIKit. Gained production experience with Apple’s design guidelines, Core Data, and REST API integration.",
    tags: ["Swift", "UIKit", "iOS", "REST"],
  },
]

export default function Home() {
  const featured = FEATURED_SLUGS
    .map((slug) => allWorks.find((w) => w.slug === slug))
    .filter(Boolean)

  const latestPosts = [...allBlogs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2)

  return (
    <>
      {/* Hero */}
      <section className="relative flex flex-col justify-center px-6 pt-20 pb-20 max-w-layout mx-auto min-h-[90vh]">
        <div className="max-w-content">
          <p className="font-mono text-small text-text-secondary mb-1">
            Platform Onboarding &amp; AI Engineer
          </p>
          <p className="font-mono text-small text-text-tertiary mb-10">
            Electric Miles · London
          </p>
          <h1 className="font-display text-display text-text-primary">PRAKHAR SINGH</h1>
          <p className="font-display text-h1 text-text-primary mt-8 max-w-prose">
            I build the software layer between clean energy hardware and the people who depend on it.
          </p>
          <p className="mt-6 text-body text-text-secondary max-w-prose">
            30+ EV chargers integrated. OCPP &amp; OCPI protocol specialist. Currently
            leading AI infrastructure at the intersection of energy and software.
          </p>
        </div>
        <div className="absolute bottom-12 left-6 flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-border" />
          <span className="font-mono text-small text-text-tertiary">scroll</span>
        </div>
        <div className="absolute bottom-12 right-6 flex gap-5">
          <a href="https://github.com/prakharsing7" target="_blank" rel="noopener noreferrer" className="font-mono text-small text-text-tertiary hover:text-text-primary transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/prakharsingh7" target="_blank" rel="noopener noreferrer" className="font-mono text-small text-text-tertiary hover:text-text-primary transition-colors">LinkedIn</a>
        </div>
      </section>

      {/* Experience */}
      <section className="px-6 py-20 max-w-layout mx-auto border-t-2 border-accent">
        <p className="font-mono text-small text-accent tracking-widest uppercase mb-10 font-semibold">Experience</p>
        {EXPERIENCE.map((role) => (
          <div key={`${role.company}-${role.title}`} className="border-b border-border py-8 last:border-b-0">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-2">
              <div className="flex items-baseline gap-3">
                <h3 className="font-display text-h3 text-text-primary">{role.title}</h3>
                <span className="font-mono text-small text-accent">{role.company}</span>
              </div>
              <span className="font-mono text-small text-text-tertiary shrink-0">{role.period}</span>
            </div>
            {role.description && (
              <p className="text-body text-text-secondary max-w-prose">{role.description}</p>
            )}
            {role.tags && role.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {role.tags?.map((tag) => (
                  <span key={tag} className="font-mono text-small text-text-tertiary border border-border px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Featured Work */}
      <section className="px-6 py-20 max-w-layout mx-auto border-t-2 border-accent">
        <p className="font-mono text-small text-accent tracking-widest uppercase mb-10 font-semibold">Selected Work</p>
        {featured.map((work, i) =>
          work ? (
            <ProjectCard
              key={work.slug}
              number={FEATURED_NUMBERS[i]}
              title={work.title}
              description={work.subtitle}
              year={work.year}
              stack={work.stack}
              href={work.url}
            />
          ) : null,
        )}
      </section>

      {/* About Strip */}
      <section className="px-6 py-20 max-w-layout mx-auto border-t-2 border-accent">
        <p className="text-body text-text-secondary max-w-prose mb-6">
          I started in ML research: cyclone intensity prediction from INSAT-3D satellite imagery,
          real-time object detection, topic modelling on news corpora. Then products: an iOS trip
          planning app in SwiftUI, a hospital management system, an open-source 3D slicer fork.
        </p>
        <p className="text-body text-text-secondary max-w-prose mb-10">
          Today I work at Electric Miles, where I integrated{' '}
          <span className="text-text-primary">30+ EV chargers across 15+ manufacturers</span>{' '}
          into a live OCPP network, then led the internal rollout of Claude across operations.
          The first production AI integration at an EV infrastructure company.
        </p>
        <Link href="/about" className="font-mono text-small text-text-secondary hover:text-accent transition-colors duration-200">
          Full story →
        </Link>
      </section>

      {/* Latest Writing */}
      {latestPosts.length > 0 && (
        <section className="px-6 py-20 max-w-layout mx-auto border-t-2 border-accent">
          <p className="font-mono text-small text-accent tracking-widest uppercase mb-8 font-semibold">Latest Writing</p>
          <div className="space-y-6">
            {latestPosts.map((post) => (
              <div key={post.slug} className="flex items-baseline gap-6">
                <span className="font-mono text-small text-text-tertiary shrink-0 w-20">
                  {new Date(post.date).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}
                </span>
                <Link href={post.url} className="font-display text-h3 text-text-primary hover:text-accent transition-colors duration-200">
                  {post.title}
                </Link>
              </div>
            ))}
          </div>
          <Link href="/blog" className="font-mono text-small text-text-secondary hover:text-accent transition-colors duration-200 mt-8 block">
            All writing →
          </Link>
        </section>
      )}

      {/* Contact */}
      <section className="px-6 py-32 max-w-layout mx-auto border-t-2 border-accent">
        <h2 className="font-display text-h1 text-text-primary mb-6">Let&rsquo;s talk.</h2>
        <a href="mailto:prakharsing7@gmail.com" className="font-mono text-h2 text-text-secondary hover:text-accent transition-colors duration-200 block mb-8">
          prakharsing7@gmail.com
        </a>
        <div className="flex gap-6">
          <a href="https://github.com/prakharsing7" target="_blank" rel="noopener noreferrer" className="font-mono text-small text-text-secondary hover:text-text-primary transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/prakharsingh7" target="_blank" rel="noopener noreferrer" className="font-mono text-small text-text-secondary hover:text-text-primary transition-colors">LinkedIn</a>
        </div>
      </section>
    </>
  )
}

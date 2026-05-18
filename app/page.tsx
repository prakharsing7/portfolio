import { allBlogs, allWorks } from 'contentlayer2/generated'
import Link from 'next/link'
import { ProjectCard } from '@/components/project-card'
import { CountUp } from '@/components/count-up'

const FEATURED_SLUGS   = ['empact', 'forecast', 'circles']
const FEATURED_NUMBERS = ['01', '02', '03']

const metrics = [
  { value: 30, suffix: '+', decimals: 0, label: 'Chargers\nintegrated', accent: true  },
  { value: 3,  suffix: '',  decimals: 0, label: 'Platforms\ndeployed',  accent: false },
  { value: 2,  suffix: '',  decimals: 0, label: 'Languages\nPHP / TS',  accent: false },
  { value: 5,  suffix: '+', decimals: 0, label: 'Years\nbuilding',      accent: false },
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
      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-20 max-w-layout mx-auto">
        <div className="max-w-content">
          <p className="font-mono text-small text-text-secondary uppercase tracking-widest mb-1">
            Platform Onboarding &amp; AI Engineer
          </p>
          <p className="font-mono text-small text-text-tertiary mb-10">
            Electric Miles · London
          </p>
          <h1 className="font-display text-display text-text-primary">PRAKHAR SINGH</h1>
          <p className="font-display text-h1 text-text-primary mt-8">
            I build the software layer between<br />
            clean energy hardware and the<br />
            people who depend on it.
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

      {/* Featured Work */}
      <section className="px-6 py-20 max-w-layout mx-auto">
        <p className="font-mono text-small text-text-tertiary tracking-widest uppercase mb-10">Selected Work</p>
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
      <section className="px-6 py-20 max-w-layout mx-auto border-t border-border">
        <p className="text-body text-text-secondary max-w-prose mb-12">
          I started as an ML researcher — cyclone prediction from satellite imagery,
          real-time object detection, topic modelling. Then built products: an iOS trip
          planning app, a hospital management system, an open-source 3D slicer fork.
          Today I work at Electric Miles, where I integrated 30+ EV chargers into a live
          OCPP network and led the internal Claude AI rollout.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {metrics.map((m) => (
            <div key={m.label}>
              <CountUp
                end={m.value}
                suffix={m.suffix}
                decimals={m.decimals}
                className={`font-display text-h1 ${m.accent ? 'text-accent' : 'text-text-primary'}`}
              />
              <p className="font-mono text-small text-text-secondary mt-1 whitespace-pre-line">{m.label}</p>
            </div>
          ))}
        </div>
        <Link href="/about" className="font-mono text-small text-text-secondary hover:text-text-primary transition-colors">
          Full story →
        </Link>
      </section>

      {/* Latest Writing */}
      {latestPosts.length > 0 && (
        <section className="px-6 py-20 max-w-layout mx-auto border-t border-border">
          <p className="font-mono text-small text-text-tertiary tracking-widest uppercase mb-8">Latest Writing</p>
          <div className="space-y-6">
            {latestPosts.map((post) => (
              <div key={post.slug} className="flex items-baseline gap-6">
                <span className="font-mono text-small text-text-tertiary shrink-0 w-20">
                  {new Date(post.date).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}
                </span>
                <Link href={post.url} className="font-display text-h3 text-text-primary hover:text-accent transition-colors">
                  {post.title}
                </Link>
              </div>
            ))}
          </div>
          <Link href="/blog" className="font-mono text-small text-text-secondary hover:text-text-primary transition-colors mt-8 block">
            All writing →
          </Link>
        </section>
      )}

      {/* Contact */}
      <section className="px-6 py-32 max-w-layout mx-auto border-t border-border">
        <h2 className="font-display text-h1 text-text-primary mb-6">Let&rsquo;s talk.</h2>
        <a href="mailto:prakharsing7@gmail.com" className="font-mono text-h2 text-text-secondary hover:text-accent transition-colors block mb-8">
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

import { allBlogs, allWorks } from 'contentlayer2/generated'
import Link from 'next/link'
import { ProjectCard } from '@/components/project-card'
import { EXPERIENCE } from '@/lib/experience'

const FEATURED_SLUGS = ['gridmind', 'forecast']
const FEATURED_NUMBERS = ['01', '02', '03']

const SNAPSHOT = [
  { label: 'Currently', lines: ['Backend Engineer', 'Electric Miles', 'Remote, London'] },
  { label: 'Building', lines: ['Energy infrastructure software'] },
  {
    label: 'Focused on',
    lines: ['OCPP · OCPI · PHP/Symfony', 'Next.js · TypeScript · AI integrations'],
  },
  {
    label: 'Open to',
    lines: [
      'Senior full-time or contract',
      'Energy tech · Climate · EV systems',
      'Remote or London',
    ],
  },
]

export default function Home() {
  const featured = FEATURED_SLUGS.map((slug) => allWorks.find((w) => w.slug === slug)).filter(
    Boolean,
  )

  const latestPosts = [...allBlogs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2)

  return (
    <>
      {/* Hero */}
      <section className="relative flex flex-col justify-center px-6 pt-32 pb-24 max-w-layout mx-auto min-h-[92vh]">
        <div className="max-w-content">
          <p className="font-mono text-small text-text-secondary mb-1">Backend Engineer</p>
          <p className="font-mono text-small text-text-tertiary mb-10">
            Electric Miles · Remote, London
          </p>
          <h1 className="font-display text-display text-text-primary">PRAKHAR SINGH</h1>
          <p className="font-display text-h1 text-text-primary mt-8 max-w-prose">
            I build the software layer between clean energy hardware and the people who depend on
            it.
          </p>
          <p className="mt-6 text-body text-text-secondary max-w-prose">
            30+ EV chargers integrated. OCPP &amp; OCPI protocol specialist. Currently leading AI
            infrastructure at the intersection of energy and software.
          </p>
        </div>
      </section>

      {/* About (asymmetric: prose + sticky snapshot) */}
      <section id="about" className="px-6 py-24 max-w-layout mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1 max-w-content space-y-14">
            <div className="space-y-5 text-body text-text-secondary">
              <p>
                I started in machine learning: not because it was fashionable, but because I was
                obsessed with what you could infer from data that had no obvious structure. At SRM
                Institute in Chennai, I built a cyclone intensity prediction system using infrared
                INSAT-3D satellite imagery. The hypothesis: convolutional nets applied to raw
                geoTIFF frames could yield faster, more granular predictions. It worked, and
                reinforced a way of thinking I still carry: physical systems as data problems.
              </p>
              <p>
                Around the same time: real-time object detection on the COCO dataset, BERTopic topic
                modelling on news corpora, YOLO-based social distance monitoring. Research rigour.
                Data-to-decision pipelines. Systems thinking.
              </p>
            </div>
            <div className="space-y-5 text-body text-text-secondary">
              <p>
                Then products. An iOS trip planning app (Circles), built in SwiftUI with MVVM
                architecture and a MongoDB backend. Ten-plus screens, collaborative editing,
                real-time sync. An iOS internship at Infosys. A hospital management system (zen-u).
                An open-source 3D slicer fork (slic3r).
              </p>
              <p>
                The pattern: full-stack capability, product ownership, cross-platform range. The
                discipline of shipping something complete. The distance between &ldquo;it
                works&rdquo; and &ldquo;it feels right&rdquo;, and learning to close it
                deliberately.
              </p>
            </div>
            <div className="space-y-5 text-body text-text-secondary">
              <p>
                Electric Miles. I joined as a Platform Onboarding Engineer and spent the first phase
                integrating EV chargers into a live OCPP network: 30+ chargers across 15+
                manufacturers. KEBA, Rolec, NexBlue, EnSmart, EN+, Vestel, Heliox, and others. Every
                manufacturer treats the OCPP standard differently. Custom status codes, non-standard
                field values, undocumented edge cases. You learn fast that a protocol spec and a
                real charger are two different things.
              </p>
              <p>
                Then: full end-to-end test ownership of emPACT, Electric Miles&rsquo; flagship B2B
                platform for CPOs and fleet operators. State machine coverage for every charger
                type. Payment flow edge cases. Load balancing scenarios.
              </p>
              <p>
                Now: Backend Engineer. I led the internal rollout of Claude (Anthropic&rsquo;s API)
                across Electric Miles&rsquo; operations, automating high-friction workflows in the
                PHP/Symfony backend. The first production AI integration at an EV infrastructure
                company. That&rsquo;s the work I find most interesting: the intersection where
                energy infrastructure meets AI systems.
              </p>
            </div>
          </div>

          <aside className="lg:w-64 shrink-0">
            <div className="lg:sticky lg:top-32 space-y-8 font-mono text-small">
              {SNAPSHOT.map(({ label, lines }) => (
                <div key={label}>
                  <p className="text-text-tertiary mb-3 tracking-widest uppercase">{label}</p>
                  <div className="border-t border-border pt-3 space-y-1">
                    {lines.map((line) => (
                      <p key={line} className="text-text-secondary">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="px-6 py-24 max-w-layout mx-auto">
        <p className="font-mono text-small text-text-tertiary tracking-widest uppercase mb-10">
          Experience
        </p>
        {EXPERIENCE.map((role) => (
          <div
            key={`${role.company}-${role.title}`}
            className="border-b border-border py-8 last:border-b-0"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-2">
              <div className="flex items-baseline gap-3">
                <h3 className="font-display text-h3 text-text-primary">{role.title}</h3>
                <span className="font-mono text-small text-accent">{role.company}</span>
              </div>
              <span className="font-mono text-small text-text-tertiary shrink-0">
                {role.period}
              </span>
            </div>
            {role.description && (
              <p className="text-body text-text-secondary max-w-prose">{role.description}</p>
            )}
            {role.tags && role.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {role.tags?.map((tag) => (
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
      </section>

      {/* Selected Work */}
      <section id="work" className="px-6 py-24 max-w-layout mx-auto">
        <p className="font-mono text-small text-text-tertiary tracking-widest uppercase mb-10">
          Selected Work
        </p>
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
        <Link
          href="/work"
          className="font-mono text-small text-text-secondary hover:text-accent transition-colors duration-200 mt-8 block"
        >
          All work →
        </Link>
      </section>

      {/* Latest Writing */}
      {latestPosts.length > 0 && (
        <section id="writing" className="px-6 py-24 max-w-layout mx-auto">
          <p className="font-mono text-small text-text-tertiary tracking-widest uppercase mb-8">
            Latest Writing
          </p>
          <div className="space-y-6">
            {latestPosts.map((post) => (
              <div key={post.slug} className="flex items-baseline gap-6">
                <span className="font-mono text-small text-text-tertiary shrink-0 w-20">
                  {new Date(post.date).toLocaleDateString('en-GB', {
                    month: 'short',
                    year: 'numeric',
                  })}
                </span>
                <Link
                  href={post.url}
                  className="font-display text-h3 text-text-primary hover:text-accent transition-colors duration-200"
                >
                  {post.title}
                </Link>
              </div>
            ))}
          </div>
          <Link
            href="/blog"
            className="font-mono text-small text-text-secondary hover:text-accent transition-colors duration-200 mt-8 block"
          >
            All writing →
          </Link>
        </section>
      )}

      {/* Contact */}
      <section id="contact" className="px-6 pt-24 pb-32 max-w-layout mx-auto">
        <h2 className="font-display text-h1 text-text-primary mb-6">Let&rsquo;s talk.</h2>
        <a
          href="mailto:prakharsing7@gmail.com"
          className="font-mono text-h2 text-text-secondary hover:text-accent transition-colors duration-200 block mb-8"
        >
          prakharsing7@gmail.com
        </a>
        <div className="flex gap-6">
          <a
            href="https://github.com/prakharsing7"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-small text-text-secondary hover:text-text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/prakharsingh10"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-small text-text-secondary hover:text-text-primary transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </>
  )
}

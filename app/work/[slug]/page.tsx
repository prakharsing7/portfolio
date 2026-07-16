import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allWorks } from 'contentlayer2/generated'
import { MDXContent } from '@/components/mdx-content'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return allWorks.map((w) => ({ slug: w.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const work = allWorks.find((w) => w.slug === params.slug)
  if (!work) return {}
  return {
    title: work.title,
    description: work.subtitle,
    openGraph: { title: `${work.title} · Prakhar Singh`, description: work.subtitle },
  }
}

export default function WorkPost({ params }: Props) {
  const work = allWorks.find((w) => w.slug === params.slug)
  if (!work) notFound()

  return (
    <article className="px-6 pt-32 pb-20 max-w-content mx-auto">
      <div className="mb-12">
        <p className="font-mono text-small text-text-tertiary mb-2">{work.year}</p>
        <h1 className="font-display text-h1 text-text-primary mb-3">{work.title}</h1>
        <p className="text-body text-text-secondary mb-8">{work.subtitle}</p>
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-small text-text-secondary border-r border-border pr-4">
            {work.role}
          </span>
          {work.stack.map((tag) => (
            <span
              key={tag}
              className="font-mono text-small text-text-tertiary border border-border px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="border-t border-border pt-12">
        <MDXContent code={work.body.code} />
      </div>
    </article>
  )
}

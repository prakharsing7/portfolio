import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allBlogs } from 'contentlayer2/generated'
import { MDXContent } from '@/components/mdx-content'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return allBlogs.map((b) => ({ slug: b.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = allBlogs.find((b) => b.slug === params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: `${post.title} · Prakhar Singh`, description: post.excerpt },
  }
}

export default function BlogPost({ params }: Props) {
  const post = allBlogs.find((b) => b.slug === params.slug)
  if (!post) notFound()

  return (
    <article className="px-6 pt-32 pb-20 max-w-content mx-auto">
      <div className="mb-12">
        <p className="font-mono text-small text-text-tertiary mb-4">
          {new Date(post.date).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </p>
        <h1 className="font-display text-h1 text-text-primary mb-4">{post.title}</h1>
        <p className="text-body text-text-secondary">{post.excerpt}</p>
      </div>
      <div className="border-t border-border pt-12">
        <MDXContent code={post.body.code} />
      </div>
    </article>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { allBlogs } from 'contentlayer2/generated'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Writing on EV infrastructure, OCPP integration, AI engineering, and building software for the energy transition.',
}

export default function Blog() {
  const posts = [...allBlogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return (
    <div className="px-6 pt-32 pb-20 max-w-layout mx-auto">
      <p className="font-mono text-small text-text-tertiary tracking-widest uppercase mb-12">
        Writing
      </p>
      {posts.length === 0 ? (
        <p className="font-mono text-small text-text-tertiary">No posts yet.</p>
      ) : (
        posts.map((post) => (
          <Link key={post.slug} href={post.url} className="group block py-8 border-b border-border">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
              <span className="font-mono text-small text-text-tertiary shrink-0 sm:w-24">
                {new Date(post.date).toLocaleDateString('en-GB', {
                  month: 'short',
                  year: 'numeric',
                })}
              </span>
              <div>
                <h2 className="font-display text-h3 text-text-primary group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-small text-text-secondary mt-1 max-w-prose">{post.excerpt}</p>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  )
}

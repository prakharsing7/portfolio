import type { Metadata } from 'next'

export function workMetadata(title: string, subtitle: string): Metadata {
  return {
    title,
    description: subtitle,
    openGraph: {
      title: `${title} · Prakhar Singh`,
      description: subtitle,
    },
  }
}

export function blogMetadata(title: string, excerpt: string): Metadata {
  return {
    title,
    description: excerpt,
    openGraph: {
      title: `${title} · Prakhar Singh`,
      description: excerpt,
    },
  }
}

'use client'
import { useMDXComponent } from 'next-contentlayer2/hooks'
import { mdxComponents } from '@/components/mdx-components'

export function MDXContent({ code }: { code: string }) {
  const MDXComponent = useMDXComponent(code)
  return <MDXComponent components={mdxComponents} />
}

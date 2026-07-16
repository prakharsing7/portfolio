import type { MDXComponents } from 'mdx/types'

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="font-display text-h1 text-text-primary mt-12 mb-6">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-display text-h2 text-text-primary mt-10 mb-4 border-b border-border pb-3">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-display text-h3 text-text-primary mt-8 mb-3">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-body text-text-secondary leading-relaxed mb-5 max-w-prose">{children}</p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-accent hover:opacity-80 transition-opacity underline underline-offset-2"
    >
      {children}
    </a>
  ),
  code: ({ children }) => (
    <code className="font-mono text-mono text-accent bg-code-bg px-1.5 py-0.5">{children}</code>
  ),
  pre: ({ children }) => (
    <pre className="bg-code-bg border border-border p-6 overflow-x-auto my-6 font-mono text-mono text-text-secondary">
      {children}
    </pre>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside text-body text-text-secondary mb-5 space-y-1">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside text-body text-text-secondary mb-5 space-y-1">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="text-body text-text-secondary">{children}</li>,
  hr: () => <hr className="border-border my-10" />,
  blockquote: ({ children }) => (
    <blockquote className="bg-surface px-5 py-3 italic text-text-secondary my-6">
      {children}
    </blockquote>
  ),
}

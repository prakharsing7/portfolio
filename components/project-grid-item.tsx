type ProjectGridItemProps = {
  title: string
  description: string
  year: string
  tags: string[]
  href?: string
}

function ItemContent({ title, description, year, tags }: Omit<ProjectGridItemProps, 'href'>) {
  return (
    <div className="py-6 border-b border-border">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-h3 text-text-primary">{title}</h3>
        <span className="font-mono text-small text-text-tertiary shrink-0">{year}</span>
      </div>
      <p className="mt-2 text-small text-text-secondary">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-small text-text-tertiary border border-border px-1.5 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export function ProjectGridItem({ title, description, year, tags, href }: ProjectGridItemProps) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:opacity-80 transition-opacity"
      >
        <ItemContent title={title} description={description} year={year} tags={tags} />
      </a>
    )
  }
  return <ItemContent title={title} description={description} year={year} tags={tags} />
}

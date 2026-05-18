import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'

const Work = defineDocumentType(() => ({
  name: 'Work',
  filePathPattern: 'work/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title:    { type: 'string',  required: true },
    subtitle: { type: 'string',  required: true },
    year:     { type: 'string',  required: true },
    role:     { type: 'string',  required: true },
    stack:    { type: 'list', of: { type: 'string' }, required: true },
    company:  { type: 'string' },
    featured: { type: 'boolean', default: false },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace('work/', ''),
    },
    url: {
      type: 'string',
      resolve: (doc) => `/work/${doc._raw.flattenedPath.replace('work/', '')}`,
    },
  },
}))

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'blog/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title:   { type: 'string', required: true },
    date:    { type: 'date',   required: true },
    excerpt: { type: 'string', required: true },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace('blog/', ''),
    },
    url: {
      type: 'string',
      resolve: (doc) => `/blog/${doc._raw.flattenedPath.replace('blog/', '')}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Work, Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  },
})

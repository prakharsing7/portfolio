import type { Metadata } from 'next'
import { allWorks } from 'contentlayer2/generated'
import { ProjectCard } from '@/components/project-card'
import { ProjectGridItem } from '@/components/project-grid-item'

export const metadata: Metadata = {
  title: 'Work',
  description: '30+ EV charger integrations, AI engineering, iOS development, and ML research.',
}

const FEATURED_SLUGS = ['empact', 'forecast', 'circles']
const FEATURED_NUMBERS = ['01', '02', '03']

const SECONDARY_PROJECTS = [
  {
    title: 'slic3r fork',
    description: 'Open-source 3D slicer fork with modified slicing algorithms and export pipeline.',
    year: '2023',
    tags: ['C++', 'OpenGL', 'Open Source'],
  },
  {
    title: 'Hepo-Hepo',
    description: 'Social mobile app with location-based features and real-time data.',
    year: '2022',
    tags: ['Mobile', 'Social'],
  },
  {
    title: 'Social Distance Detector',
    description: 'YOLO-based real-time social distance monitoring system using computer vision.',
    year: '2021',
    tags: ['Python', 'YOLO', 'OpenCV'],
  },
  {
    title: 'BERTopic-news',
    description: 'Topic modelling pipeline on news corpora using BERTopic for trend discovery.',
    year: '2022',
    tags: ['Python', 'NLP', 'BERTopic'],
  },
  {
    title: 'Real-Time Object Detection',
    description: 'TensorFlow object detection on COCO dataset achieving real-time inference.',
    year: '2022',
    tags: ['Python', 'TensorFlow', 'COCO'],
  },
  {
    title: 'zen-u',
    description:
      'Hospital management system with patient records, scheduling, and billing modules.',
    year: '2022',
    tags: ['Full-Stack', 'Healthcare'],
  },
]

export default function Work() {
  const featured = FEATURED_SLUGS.map((slug) => allWorks.find((w) => w.slug === slug)).filter(
    Boolean,
  )

  return (
    <div className="px-6 pt-32 pb-20 max-w-layout mx-auto">
      <p className="font-mono text-small text-text-tertiary tracking-widest uppercase mb-12">
        Work
      </p>

      <section className="mb-24">
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

      <section>
        <p className="font-mono text-small text-text-tertiary tracking-widest uppercase mb-8">
          Other Projects
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {SECONDARY_PROJECTS.map((p) => (
            <ProjectGridItem
              key={p.title}
              title={p.title}
              description={p.description}
              year={p.year}
              tags={p.tags}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

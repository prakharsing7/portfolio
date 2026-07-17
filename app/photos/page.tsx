import type { Metadata } from 'next'
import { PhotoGallery } from '@/components/photo-gallery'

export const metadata: Metadata = {
  title: 'Photos',
  description: 'Film photography by Prakhar Singh — 35mm, shot on a Nikon FM10.',
}

export default function Photos() {
  return (
    <>
      {/* warm "darkroom" wash + page-scoped grain (behind / above content) */}
      <div className="photos-warm-wash" aria-hidden="true" />
      <div className="photos-grain" aria-hidden="true" />

      <div className="relative z-[1] mx-auto max-w-layout px-6 pb-28 pt-32">
        <p className="mb-3 font-mono text-small uppercase tracking-widest text-text-tertiary">
          Photos
        </p>
        <p className="mb-14 max-w-content text-body text-text-secondary">
          All frames shot on film.
        </p>
        <PhotoGallery />
      </div>
    </>
  )
}

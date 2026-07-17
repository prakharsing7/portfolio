import type { Metadata } from 'next'
import { PHOTOS } from '@/lib/photos'
import { PhotoGrid } from '@/components/photo-grid'

export const metadata: Metadata = {
  title: 'Photos',
  description: 'A photography portfolio by Prakhar Singh.',
}

export default function Photos() {
  return (
    <div className="px-6 pt-32 pb-20 max-w-layout mx-auto">
      <p className="font-mono text-small text-text-tertiary tracking-widest uppercase mb-3">
        Photos
      </p>
      <p className="text-body text-text-secondary max-w-content mb-12">
        A running set of frames. Camera and settings noted under each.
      </p>
      <PhotoGrid photos={PHOTOS} />
    </div>
  )
}

'use client'
import { useState } from 'react'
import Image from 'next/image'
import { PhotoLightbox } from '@/components/photo-lightbox'
import type { Photo } from '@/lib/photos'

export function PhotoGrid({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState<number | null>(null)

  if (photos.length === 0) {
    return <p className="font-mono text-small text-text-tertiary">Coming soon.</p>
  }

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {photos.map((photo, i) => (
          <button
            key={photo.id}
            onClick={() => setIndex(i)}
            aria-label={`Open ${photo.alt}`}
            className="mb-4 block w-full break-inside-avoid text-left group"
          >
            <div
              className="relative w-full bg-surface overflow-hidden"
              style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-auto object-cover transition-opacity duration-300 group-hover:opacity-90"
              />
            </div>
            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-0.5 font-mono text-small text-text-tertiary">
              <span>{photo.roll}</span>
              <span>{photo.location}</span>
            </div>
          </button>
        ))}
      </div>

      <PhotoLightbox
        photos={photos}
        index={index}
        onClose={() => setIndex(null)}
        onNavigate={setIndex}
      />
    </>
  )
}

'use client'
import { useState } from 'react'
import { ROLLS, ALL_FRAMES } from '@/lib/photos'
import { PhotoRoll } from './photo-roll'
import { PhotoLightbox } from './photo-lightbox'

export function PhotoGallery() {
  const [index, setIndex] = useState<number | null>(null)

  // base offset of each roll into the flattened ALL_FRAMES list
  const offsets: number[] = []
  ROLLS.reduce((acc, roll, i) => {
    offsets[i] = acc
    return acc + roll.frames.length
  }, 0)

  return (
    <>
      {/* roll index — jump nav */}
      <nav aria-label="Rolls" className="mb-14 flex flex-wrap gap-2">
        {ROLLS.map((roll) => (
          <a
            key={roll.id}
            href={`#${roll.id}`}
            className="border border-border px-3 py-1 font-mono text-small uppercase tracking-wider text-text-tertiary transition-colors hover:border-[color:var(--film-amber)] hover:text-[color:var(--film-amber)]"
          >
            {roll.name} · {roll.location.split(',')[0]}
          </a>
        ))}
      </nav>

      <div className="space-y-24">
        {ROLLS.map((roll, i) => (
          <PhotoRoll key={roll.id} roll={roll} baseIndex={offsets[i]} onOpen={setIndex} />
        ))}
      </div>

      <PhotoLightbox
        frames={ALL_FRAMES}
        index={index}
        onClose={() => setIndex(null)}
        onNavigate={setIndex}
      />
    </>
  )
}

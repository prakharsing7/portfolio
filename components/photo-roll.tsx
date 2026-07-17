import Image from 'next/image'
import type { Roll } from '@/lib/photos'

type FrameButtonProps = {
  src: string
  alt: string
  width: number
  height: number
  num: string
  place: string
  priority?: boolean
  onOpen: () => void
  className?: string
}

function FrameButton({
  src,
  alt,
  width,
  height,
  num,
  place,
  priority,
  onOpen,
  className = '',
}: FrameButtonProps) {
  return (
    <button
      onClick={onOpen}
      aria-label={`Open frame ${num}: ${alt}`}
      className={`group relative block w-full overflow-hidden bg-black/30 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority={priority}
        className="h-auto w-full saturate-[.92] transition-[transform,filter] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-hover:saturate-100"
      />
      <span className="pointer-events-none absolute left-2 top-2 font-mono text-[11px] tracking-wider text-[color:var(--film-amber)] opacity-80 mix-blend-screen">
        {num}
      </span>
      <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/70 to-transparent px-3 pb-2 pt-10 font-mono text-small uppercase tracking-wider text-text-primary opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        {place}
      </span>
    </button>
  )
}

export function PhotoRoll({
  roll,
  baseIndex,
  onOpen,
}: {
  roll: Roll
  baseIndex: number
  onOpen: (index: number) => void
}) {
  const lead = roll.frames[0]
  const rest = roll.frames.slice(1)
  const leadLandscape = lead.width >= lead.height

  return (
    <section id={roll.id} className="scroll-mt-28">
      {/* header strip: display name + location (left), film data (right) */}
      <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-1">
        <div className="flex items-baseline gap-3">
          <h2 className="font-display text-h2 text-text-primary">{roll.name}</h2>
          <span className="font-mono text-small uppercase tracking-wider text-text-tertiary">
            {roll.location}
          </span>
        </div>
        <p className="font-mono text-small uppercase tracking-wider text-text-tertiary">
          {roll.process} · ISO {roll.iso} · {roll.date} · {roll.frames.length} frames
        </p>
      </div>
      <div className="sprocket mb-6 mt-4" aria-hidden="true" />

      {/* lead frame */}
      <div className={leadLandscape ? 'mb-1.5' : 'mb-1.5 flex justify-center'}>
        <FrameButton
          src={lead.src}
          alt={lead.alt}
          width={lead.width}
          height={lead.height}
          num="01"
          place={lead.city ?? roll.location}
          priority={baseIndex === 0}
          onOpen={() => onOpen(baseIndex)}
          className={leadLandscape ? 'w-full' : 'w-full max-w-[64%]'}
        />
      </div>

      {/* rest: tight contact-sheet masonry */}
      {rest.length > 0 && (
        <div className="gap-1.5 [column-gap:0.375rem] columns-2 md:columns-3">
          {rest.map((frame, i) => (
            <div key={frame.id} className="mb-1.5 break-inside-avoid">
              <FrameButton
                src={frame.src}
                alt={frame.alt}
                width={frame.width}
                height={frame.height}
                num={String(i + 2).padStart(2, '0')}
                place={frame.city ?? roll.location}
                onOpen={() => onOpen(baseIndex + i + 1)}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

'use client'
import { useEffect, useCallback, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ArrowLeft, ArrowRight } from 'lucide-react'
import { backdropVariants } from '@/lib/animations'
import type { FlatFrame } from '@/lib/photos'

type PhotoLightboxProps = {
  frames: FlatFrame[]
  index: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

export function PhotoLightbox({ frames, index, onClose, onNavigate }: PhotoLightboxProps) {
  const open = index !== null
  const frame = open ? frames[index as number] : null

  // Portal target only exists after mount (avoids SSR document access).
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const goPrev = useCallback(() => {
    if (index === null) return
    onNavigate(Math.max(0, index - 1))
  }, [index, onNavigate])

  const goNext = useCallback(() => {
    if (index === null) return
    onNavigate(Math.min(frames.length - 1, index + 1))
  }, [index, onNavigate, frames.length])

  // Body scroll lock while open.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  // Keyboard controls.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') goPrev()
      else if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose, goPrev, goNext])

  const meta = frame ? [frame.roll, frame.camera, frame.lens, `ISO ${frame.iso}`].join('  ·  ') : ''

  if (!mounted) return null

  // Portal to <body> so the modal's stacking context is a direct body child
  // and its z-index outranks the fixed nav (z-40), like the command palette.
  return createPortal(
    <AnimatePresence>
      {open && frame && (
        <motion.div
          className="fixed inset-0 z-[70] flex flex-col bg-[#0c0a08]/95 backdrop-blur-sm"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          role="dialog"
          aria-modal="true"
          aria-label={frame.alt}
          onClick={onClose}
        >
          {/* Top bar */}
          <div className="flex shrink-0 items-center justify-between px-6 py-5">
            <span className="font-mono text-small uppercase tracking-wider text-[color:var(--film-amber)]">
              {frame.roll} · {frame.frameLabel}
            </span>
            <button
              onClick={onClose}
              aria-label="Close"
              className="-m-2 p-2 text-text-secondary transition-colors hover:text-text-primary"
            >
              <X size={18} />
            </button>
          </div>

          {/* Image */}
          <div className="flex min-h-0 flex-1 items-center justify-center px-6">
            <Image
              src={frame.src}
              alt={frame.alt}
              width={frame.width}
              height={frame.height}
              sizes="92vw"
              quality={82}
              className="h-auto max-h-full w-auto max-w-full object-contain"
              priority
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Caption + metadata */}
          <div className="flex shrink-0 items-center justify-between gap-4 px-6 py-5">
            <div className="min-w-0">
              <p className="truncate font-mono text-small text-text-secondary">{meta}</p>
              <p className="truncate font-mono text-small uppercase tracking-wider text-text-tertiary">
                {frame.location} · {frame.date}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goPrev()
                }}
                disabled={index === 0}
                aria-label="Previous"
                className="p-2 text-text-secondary transition-colors hover:text-text-primary disabled:opacity-30"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goNext()
                }}
                disabled={index === frames.length - 1}
                aria-label="Next"
                className="p-2 text-text-secondary transition-colors hover:text-text-primary disabled:opacity-30"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}

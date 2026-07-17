'use client'
import { useEffect, useCallback } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ArrowLeft, ArrowRight } from 'lucide-react'
import { backdropVariants } from '@/lib/animations'
import type { Photo } from '@/lib/photos'

type PhotoLightboxProps = {
  photos: Photo[]
  index: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

export function PhotoLightbox({ photos, index, onClose, onNavigate }: PhotoLightboxProps) {
  const open = index !== null
  const photo = open ? photos[index as number] : null

  const goPrev = useCallback(() => {
    if (index === null) return
    onNavigate(Math.max(0, index - 1))
  }, [index, onNavigate])

  const goNext = useCallback(() => {
    if (index === null) return
    onNavigate(Math.min(photos.length - 1, index + 1))
  }, [index, onNavigate, photos.length])

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

  const metaLine = photo
    ? [photo.roll, photo.camera, photo.lens, `ISO ${photo.iso}`].join('  ·  ')
    : ''

  return (
    <AnimatePresence>
      {open && photo && (
        <motion.div
          className="fixed inset-0 z-[70] flex flex-col bg-bg/95"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          role="dialog"
          aria-modal="true"
          aria-label={photo.alt}
          onClick={onClose}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-5 shrink-0">
            <span className="font-mono text-small text-text-tertiary">
              {(index as number) + 1} / {photos.length}
            </span>
            <button
              onClick={onClose}
              aria-label="Close"
              className="text-text-secondary hover:text-text-primary transition-colors p-2 -m-2"
            >
              <X size={18} />
            </button>
          </div>

          {/* Image */}
          <div className="flex-1 min-h-0 flex items-center justify-center px-6">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="90vw"
              className="max-h-full max-w-full w-auto h-auto object-contain"
              priority
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Caption + EXIF */}
          <div className="flex items-center justify-between gap-4 px-6 py-5 shrink-0">
            <div className="min-w-0">
              <p className="font-mono text-small text-text-secondary truncate">{metaLine}</p>
              {(photo.location || photo.date) && (
                <p className="font-mono text-small text-text-tertiary truncate">
                  {[photo.location, photo.date].filter(Boolean).join('  ·  ')}
                </p>
              )}
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goPrev()
                }}
                disabled={index === 0}
                aria-label="Previous"
                className="text-text-secondary hover:text-text-primary disabled:opacity-30 transition-colors p-2"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goNext()
                }}
                disabled={index === photos.length - 1}
                aria-label="Next"
                className="text-text-secondary hover:text-text-primary disabled:opacity-30 transition-colors p-2"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

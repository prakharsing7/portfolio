export type PhotoExif = {
  camera?: string
  lens?: string
  focalLength?: string
  aperture?: string
  shutter?: string
  iso?: string
}

export type Photo = {
  id: string
  /** null renders a sized placeholder box; set to `/photos/<file>` for a real image. */
  src: string | null
  /** original pixel dimensions — drive the aspect-ratio box (prevents layout shift). */
  width: number
  height: number
  alt: string
  location?: string
  date?: string
  exif?: PhotoExif
}

// Placeholder set: varied aspect ratios exercise the masonry layout now.
// Replace each `src: null` with `/photos/<file>.jpg` (and update alt/exif) as real photos land.
export const PHOTOS: Photo[] = [
  {
    id: 'p1',
    src: null,
    width: 3000,
    height: 2000,
    alt: 'Placeholder — landscape',
    location: 'London, UK',
    date: '2026',
    exif: {
      camera: 'Fujifilm X-T5',
      lens: 'XF 23mm f/1.4',
      focalLength: '23mm',
      aperture: 'f/2.8',
      shutter: '1/500s',
      iso: '160',
    },
  },
  {
    id: 'p2',
    src: null,
    width: 2000,
    height: 3000,
    alt: 'Placeholder — portrait',
    location: 'London, UK',
    date: '2026',
    exif: {
      camera: 'Fujifilm X-T5',
      lens: 'XF 56mm f/1.2',
      focalLength: '56mm',
      aperture: 'f/1.6',
      shutter: '1/1000s',
      iso: '125',
    },
  },
  {
    id: 'p3',
    src: null,
    width: 2400,
    height: 2400,
    alt: 'Placeholder — square',
    location: 'Chennai, IN',
    date: '2025',
    exif: {
      camera: 'Fujifilm X-T5',
      lens: 'XF 33mm f/1.4',
      focalLength: '33mm',
      aperture: 'f/4',
      shutter: '1/250s',
      iso: '200',
    },
  },
  {
    id: 'p4',
    src: null,
    width: 3000,
    height: 1688,
    alt: 'Placeholder — wide',
    location: 'London, UK',
    date: '2025',
    exif: {
      camera: 'Fujifilm X-T5',
      lens: 'XF 10-24mm',
      focalLength: '10mm',
      aperture: 'f/8',
      shutter: '1/320s',
      iso: '160',
    },
  },
  {
    id: 'p5',
    src: null,
    width: 2000,
    height: 3000,
    alt: 'Placeholder — portrait',
    location: 'Chennai, IN',
    date: '2024',
    exif: {
      camera: 'Fujifilm X-T5',
      lens: 'XF 56mm f/1.2',
      focalLength: '56mm',
      aperture: 'f/2',
      shutter: '1/800s',
      iso: '125',
    },
  },
  {
    id: 'p6',
    src: null,
    width: 3000,
    height: 2000,
    alt: 'Placeholder — landscape',
    location: 'London, UK',
    date: '2024',
    exif: {
      camera: 'Fujifilm X-T5',
      lens: 'XF 23mm f/1.4',
      focalLength: '23mm',
      aperture: 'f/5.6',
      shutter: '1/640s',
      iso: '160',
    },
  },
]

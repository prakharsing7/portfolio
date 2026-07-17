export type Frame = {
  id: string
  src: string
  width: number
  height: number
  alt: string
  /** per-frame location; overrides the roll location (used for the Vietnam roll). */
  city?: string
}

export type Roll = {
  id: string
  /** film-stock display name */
  name: string
  /** short process descriptor, e.g. "Black & white" / "Colour" */
  process: string
  camera: string
  lens: string
  /** speed the roll was shot at */
  iso: string
  location: string
  date: string
  /** frames in display order — frames[0] is the roll's lead (hero) frame */
  frames: Frame[]
}

const CAMERA = 'Nikon FM10'
const LENS = 'Nikkor 35-70mm'

const f = (id: string, w: number, h: number, alt: string, city?: string): Frame => ({
  id,
  src: `/photos/${id}.jpg`,
  width: w,
  height: h,
  alt,
  ...(city ? { city } : {}),
})

export const ROLLS: Roll[] = [
  {
    id: 'ilford-xp2',
    name: 'Ilford XP2',
    process: 'Black & white',
    camera: CAMERA,
    lens: LENS,
    iso: '400',
    location: 'Mahabaleshwar, India',
    date: 'Sept 2025',
    frames: [
      f('ilford-xp2-01', 2400, 1584, 'Two figures embracing in an open landscape, Mahabaleshwar'),
      f('ilford-xp2-02', 2400, 1584, 'Light and shadow study, Mahabaleshwar'),
    ],
  },
  {
    id: 'lazy250-vietnam',
    name: 'Lazy 250',
    process: 'Colour',
    camera: CAMERA,
    lens: LENS,
    iso: '200',
    location: 'Vietnam',
    date: 'Dec 2025',
    frames: [
      f(
        'lazy250-vietnam-03',
        2400,
        2105,
        'Rowboats between limestone karsts, Ninh Binh',
        'Ninh Binh',
      ),
      f('lazy250-vietnam-01', 2105, 2400, 'Temple roofline against the sky, Hanoi', 'Hanoi'),
      f(
        'lazy250-vietnam-02',
        2400,
        1604,
        'Rice fields and karst hills from above, Ninh Binh',
        'Ninh Binh',
      ),
      f(
        'lazy250-vietnam-04',
        2400,
        2105,
        'Boats and passengers beneath karst peaks, Ninh Binh',
        'Ninh Binh',
      ),
      f(
        'lazy250-vietnam-06',
        2400,
        2105,
        'A wooden pier reaching into calm water, Phu Quoc',
        'Phu Quoc',
      ),
      f(
        'lazy250-vietnam-05',
        2400,
        2105,
        'Pastel colonial buildings by the water, Phu Quoc',
        'Phu Quoc',
      ),
    ],
  },
  {
    id: 'cpb400c-manali',
    name: 'CPB 400C',
    process: 'Colour',
    camera: CAMERA,
    lens: LENS,
    iso: '400',
    location: 'Manali, India',
    date: 'April 2026',
    frames: [
      f('cpb400c-manali-02', 1569, 2400, 'Double exposure of a face over trees, Manali'),
      f('cpb400c-manali-06', 1569, 2400, 'Silhouette double exposure, Manali'),
      f('cpb400c-manali-04', 2400, 1569, 'Manali valley and mountains'),
      f('cpb400c-manali-05', 2400, 1569, 'Tree line against the peaks, Manali'),
      f('cpb400c-manali-03', 1569, 2400, 'Blossoms and a balcony, Manali'),
      f('cpb400c-manali-01', 2400, 1569, 'Bare trees across the valley, Manali'),
      f('cpb400c-manali-07', 1569, 2400, 'Rooftops through the trees, Manali'),
      f('cpb400c-manali-08', 1569, 2400, 'Bare branches, Manali'),
    ],
  },
  {
    id: 'lazy250-dharamshala',
    name: 'Lazy 250',
    process: 'Colour',
    camera: CAMERA,
    lens: LENS,
    iso: '200',
    location: 'Dharamshala, India',
    date: 'Nov 2025',
    frames: [
      f('lazy250-dharamshala-02', 1599, 2400, 'Rainbow-painted steps, Dharamshala'),
      f('lazy250-dharamshala-04', 2400, 1599, 'A figure walking a forest path, Dharamshala'),
      f('lazy250-dharamshala-01', 2400, 1599, 'A green door in a brick wall, Dharamshala'),
      f('lazy250-dharamshala-03', 2400, 1599, 'Cherry blossoms over the hills, Dharamshala'),
      f('lazy250-dharamshala-06', 1599, 2400, 'Amphitheatre steps in the forest, Dharamshala'),
      f('lazy250-dharamshala-07', 2400, 1599, 'A town square with figures, Dharamshala'),
      f('lazy250-dharamshala-05', 2400, 1599, 'An alley of pipes and wires, Dharamshala'),
    ],
  },
  {
    id: 'lazy500-manali',
    name: 'Lazy 500',
    process: 'Colour',
    camera: CAMERA,
    lens: LENS,
    iso: '400',
    location: 'Manali, India',
    date: 'April 2026',
    frames: [
      f('lazy500-manali-11', 2400, 1600, 'A dog in the forest light, Manali'),
      f('lazy500-manali-06', 1600, 2400, 'A snowbound mountain trail, Manali'),
      f('lazy500-manali-03', 2400, 1600, 'A red pavilion reflected, Manali'),
      f('lazy500-manali-01', 1600, 2400, 'A mountain stream over rocks, Manali'),
      f('lazy500-manali-02', 1600, 2400, 'The stream through the trees, Manali'),
      f('lazy500-manali-10', 1600, 2400, 'A meltwater stream below the snow, Manali'),
      f('lazy500-manali-08', 2400, 1600, 'Snowfields under cloud, Manali'),
      f('lazy500-manali-09', 2400, 1600, 'A snow ridge, Manali'),
      f('lazy500-manali-05', 1600, 2400, 'A snowbound valley, Manali'),
      f('lazy500-manali-07', 1600, 2400, 'Snow-draped ridgeline, Manali'),
      f('lazy500-manali-12', 1600, 2400, 'Rock and mountain, Manali'),
      f('lazy500-manali-04', 1600, 2400, 'Mountainside, Manali'),
    ],
  },
]

/** A frame flattened with its roll's metadata + resolved location + contact-sheet label. */
export type FlatFrame = Frame & {
  rollId: string
  roll: string
  process: string
  camera: string
  lens: string
  iso: string
  location: string
  date: string
  /** contact-sheet label, e.g. "01 / 07" */
  frameLabel: string
}

export const ALL_FRAMES: FlatFrame[] = ROLLS.flatMap((r) =>
  r.frames.map((frame, i) => ({
    ...frame,
    rollId: r.id,
    roll: r.name,
    process: r.process,
    camera: r.camera,
    lens: r.lens,
    iso: r.iso,
    location: frame.city ?? r.location,
    date: r.date,
    frameLabel: `${String(i + 1).padStart(2, '0')} / ${String(r.frames.length).padStart(2, '0')}`,
  })),
)

/** Index of a frame id within ALL_FRAMES — for opening the lightbox at the right place. */
export const frameIndex = (id: string): number => ALL_FRAMES.findIndex((f) => f.id === id)

import { ImageResponse } from 'next/og'
import { allWorks } from 'contentlayer2/generated'

export const runtime = 'edge'
export const alt = 'Prakhar Singh — Work'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image({ params }: { params: { slug: string } }) {
  const work = allWorks.find((w) => w.slug === params.slug)

  return new ImageResponse(
    (
      <div
        style={{
          background: '#080808',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '64px',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', top: '64px', left: '64px', width: '4px', height: '48px', background: '#00E5A0' }} />
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '88px' }}>
          <div style={{ fontSize: '52px', fontWeight: 700, color: '#F0F0F0', lineHeight: 1.1, maxWidth: '900px' }}>
            {work?.title ?? 'Work'}
          </div>
          <div style={{ fontSize: '24px', color: '#707070', marginTop: '20px', maxWidth: '820px', lineHeight: 1.4 }}>
            {work?.subtitle}
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '64px', left: '64px', fontSize: '16px', color: '#3A3A3A', fontFamily: 'monospace' }}>
          Prakhar Singh
        </div>
      </div>
    ),
    { ...size },
  )
}

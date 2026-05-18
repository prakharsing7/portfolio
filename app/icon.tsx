import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0F1419',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'monospace',
            fontSize: '13px',
            fontWeight: 700,
            color: '#00E5A0',
            letterSpacing: '-0.5px',
          }}
        >
          PS
        </span>
      </div>
    ),
    { ...size },
  )
}

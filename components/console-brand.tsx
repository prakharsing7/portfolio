'use client'
import { useEffect } from 'react'

export function ConsoleBrand() {
  useEffect(() => {
    const badge = 'background:#00E5A0;color:#080808;font-family:monospace;font-weight:700;padding:4px 10px;border-radius:2px'
    const name  = 'background:#101010;color:#F0F0F0;font-family:monospace;padding:4px 10px;border:1px solid #1C1C1C'
    const dim   = 'color:#707070;font-family:monospace;font-size:11px'
    const link  = 'color:#00E5A0;font-family:monospace;font-size:11px'

    console.log('%c PRAKHAR SINGH %c AI & Platform Engineer', badge, name)
    console.log('%c Building software for the energy transition.', dim)
    console.log(' ')
    console.log('%c prakharsing7@gmail.com', link)
    console.log('%c /work  /blog  /uses  /api/now', dim)
    console.log(' ')
    console.log('%c Integrating the hardware that powers the transition —', dim)
    console.log('%c one OCPP charger at a time.', dim)
  }, [])

  return null
}

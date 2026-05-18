'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

type CountUpProps = {
  end: number
  suffix?: string
  decimals?: number
  className?: string
}

export function CountUp({ end, suffix = '', decimals = 0, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 800
    const start = performance.now()
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(parseFloat((eased * end).toFixed(decimals)))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isInView, end, decimals])

  return (
    <span ref={ref} className={className}>
      {count.toFixed(decimals)}{suffix}
    </span>
  )
}

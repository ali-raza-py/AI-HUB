import { useEffect, useRef, type ReactNode } from 'react'

interface CursorPixelFieldProps {
  children: ReactNode
  className?: string
}

export default function CursorPixelField({ children, className = '' }: CursorPixelFieldProps) {
  const fieldRef = useRef<HTMLDivElement>(null)
  const pixelRef = useRef<HTMLDivElement>(null)
  const echoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const field = fieldRef.current
    const pixel = pixelRef.current
    const echo = echoRef.current
    if (!field || !pixel || !echo) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame = 0
    let active = false
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0
    let velocityX = 0
    let velocityY = 0
    let previousX = 0
    let previousY = 0

    const updatePointer = (event: PointerEvent) => {
      const bounds = field.getBoundingClientRect()
      targetX = event.clientX - bounds.left
      targetY = event.clientY - bounds.top
      velocityX = targetX - previousX
      velocityY = targetY - previousY
      previousX = targetX
      previousY = targetY
      active = true
    }

    const animate = () => {
      currentX += (targetX - currentX) * (reducedMotion ? 1 : 0.11)
      currentY += (targetY - currentY) * (reducedMotion ? 1 : 0.11)
      velocityX *= 0.82
      velocityY *= 0.82
      const speed = Math.min(Math.hypot(velocityX, velocityY), 32)
      const rotation = velocityX * 0.7 - velocityY * 0.35
      const scale = 1 + speed * 0.012
      pixel.style.transform = `translate3d(${currentX - 14}px, ${currentY - 14}px, 0) rotate(${rotation}deg) scale(${scale})`
      echo.style.transform = `translate3d(${currentX * 0.32 - 5}px, ${currentY * 0.32 - 5}px, 0)`
      frame = requestAnimationFrame(animate)
    }

    const hidePointer = () => {
      active = false
      pixel.style.opacity = '0'
      echo.style.opacity = '0'
    }
    const showPointer = () => {
      if (!active) {
        pixel.style.opacity = '1'
        echo.style.opacity = '1'
      }
    }

    field.addEventListener('pointermove', updatePointer, { passive: true })
    field.addEventListener('pointerenter', showPointer)
    field.addEventListener('pointerleave', hidePointer)
    frame = requestAnimationFrame(animate)
    return () => {
      cancelAnimationFrame(frame)
      field.removeEventListener('pointermove', updatePointer)
      field.removeEventListener('pointerenter', showPointer)
      field.removeEventListener('pointerleave', hidePointer)
    }
  }, [])

  return <div ref={fieldRef} className={`cursor-pixel-field ${className}`}>
    <div ref={echoRef} className="cursor-pixel-echo" aria-hidden="true" />
    <div ref={pixelRef} className="cursor-pixel" aria-hidden="true" />
    {children}
  </div>
}
import { useEffect, useRef, type ReactNode } from 'react'

interface CursorPixelFieldProps {
  children: ReactNode
  className?: string
}

interface PointerState {
  targetX: number
  targetY: number
  x: number
  y: number
  velocityX: number
  velocityY: number
  previousX: number
  previousY: number
  active: boolean
}

export default function CursorPixelField({ children, className = '' }: CursorPixelFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext('2d', { alpha: true })
    if (!context) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const pointer: PointerState = { targetX: 0, targetY: 0, x: 0, y: 0, velocityX: 0, velocityY: 0, previousX: 0, previousY: 0, active: false }
    const pixelGap = 14
    const pixelSize = 4
    let width = 0
    let height = 0
    let columns = 0
    let rows = 0
    let frame = 0
    let startTime = performance.now()

    const draw = (elapsed: number) => {
      context.clearRect(0, 0, width, height)
      pointer.x += (pointer.targetX - pointer.x) * (reducedMotion ? 1 : 0.13)
      pointer.y += (pointer.targetY - pointer.y) * (reducedMotion ? 1 : 0.13)
      pointer.velocityX *= 0.86
      pointer.velocityY *= 0.86

      const speed = Math.min(Math.hypot(pointer.velocityX, pointer.velocityY), 42)
      const time = elapsed * 0.001
      const influenceRadius = Math.min(width, height) * 0.27 + speed * 4
      const movementStrength = 15 + speed * 0.35

      for (let row = 0; row < rows; row += 1) {
        const baseY = row * pixelGap + pixelGap / 2
        for (let column = 0; column < columns; column += 1) {
          const baseX = column * pixelGap + pixelGap / 2
          const deltaX = pointer.x - baseX
          const deltaY = pointer.y - baseY
          const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
          const proximity = pointer.active ? Math.max(0, 1 - distance / influenceRadius) : 0
          const wave = Math.sin(distance * 0.085 - time * 5.5) * proximity
          const directionX = distance > 0 ? deltaX / distance : 0
          const directionY = distance > 0 ? deltaY / distance : 0
          const displacement = proximity * proximity * movementStrength + wave * 5
          const drawX = baseX + directionX * displacement
          const drawY = baseY + directionY * displacement
          const scale = 1 + proximity * (0.7 + speed * 0.012)
          const size = pixelSize * scale
          const opacity = 0.12 + proximity * (0.58 + speed * 0.008) + Math.max(0, wave) * 0.12

          context.fillStyle = `rgba(245, 197, 66, ${Math.min(opacity, 0.95)})`
          context.fillRect(drawX - size / 2, drawY - size / 2, size, size)
        }
      }
    }

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * ratio
      canvas.height = height * ratio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      columns = Math.ceil(width / pixelGap) + 1
      rows = Math.ceil(height / pixelGap) + 1
      draw(0)
    }

    const updatePointer = (event: PointerEvent) => {
      pointer.targetX = event.clientX
      pointer.targetY = event.clientY
      pointer.velocityX = event.clientX - pointer.previousX
      pointer.velocityY = event.clientY - pointer.previousY
      pointer.previousX = event.clientX
      pointer.previousY = event.clientY
      pointer.active = true
    }

    const leaveWindow = () => {
      pointer.active = false
      pointer.velocityX = 0
      pointer.velocityY = 0
    }

    const animate = (timestamp: number) => {
      draw(timestamp - startTime)
      frame = requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener('resize', resize, { passive: true })
    window.addEventListener('pointermove', updatePointer, { passive: true })
    window.addEventListener('blur', leaveWindow)
    frame = reducedMotion ? 0 : requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', updatePointer)
      window.removeEventListener('blur', leaveWindow)
    }
  }, [])

  return <div className={`cursor-pixel-field ${className}`}>
    <canvas ref={canvasRef} className="pixel-matrix" aria-hidden="true" />
    {children}
  </div>
}
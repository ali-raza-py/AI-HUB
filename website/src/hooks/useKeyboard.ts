import { useEffect } from 'react'

export function useKeyboard(key: string, handler: (e: KeyboardEvent) => void, mod?: 'ctrl' | 'cmd') {
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return

      if (mod === 'ctrl' || mod === 'cmd') {
        if (!e.ctrlKey && !e.metaKey) return
        if (e.key.toLowerCase() === key.toLowerCase()) {
          e.preventDefault()
          handler(e)
        }
      } else if (e.key === key) {
        e.preventDefault()
        handler(e)
      }
    }
    window.addEventListener('keydown', listener)
    return () => window.removeEventListener('keydown', listener)
  }, [key, handler, mod])
}

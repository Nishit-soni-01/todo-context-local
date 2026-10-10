import { useEffect, useState } from 'react'

/**
 * useState that persists to localStorage.
 * Reads lazily on first render (no flash of empty state) and fails safely
 * if storage is unavailable or contains corrupt JSON.
 */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key)
      return stored ? JSON.parse(stored) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      /* storage full or blocked - app keeps working in memory */
    }
  }, [key, value])

  return [value, setValue]
}

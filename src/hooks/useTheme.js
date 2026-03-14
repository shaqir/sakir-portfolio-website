import { useState, useEffect, useCallback } from 'react'

/**
 * Manages dark/light theme state with localStorage persistence.
 * Sets `data-theme` attribute on `<html>` for CSS custom property switching.
 *
 * @returns {{ theme: 'dark' | 'light', toggleTheme: () => void }}
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark'
    }
    return 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggleTheme }
}

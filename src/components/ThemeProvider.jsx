import React, { createContext, useEffect, useState, useContext } from 'react'

const ThemeContext = createContext({ theme: 'dark', toggle: () => {} })
export const useTheme = () => useContext(ThemeContext)

export default function ThemeProvider({ children }) {
  // Initialize safely for SSR/build environments
  const [theme, setTheme] = useState('dark')

  // Load saved theme once on mount
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const saved = window.localStorage?.getItem('theme')
        if (saved === 'dark' || saved === 'light') setTheme(saved)
        else if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) setTheme('dark')
      }
    } catch {}
  }, [])

  useEffect(() => {
    try {
      if (typeof document !== 'undefined') {
        const root = document.documentElement
        if (theme === 'dark') root.classList.add('dark')
        else root.classList.remove('dark')
      }
      if (typeof window !== 'undefined') window.localStorage?.setItem('theme', theme)
    } catch {}
  }, [theme])

  const toggle = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

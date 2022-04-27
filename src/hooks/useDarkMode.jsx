import { useState, useEffect } from 'react'

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedMode = window.localStorage.getItem('theme')

    return storedMode || 'light'
  })

  useEffect(() => {
    darkMode === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }, [darkMode])

  const toggleDarkMode = () => {
    const newMode = darkMode === 'light' ? 'dark' : 'light'
    setDarkMode(newMode)
    window.localStorage.setItem('theme', newMode)
  }

  return { darkMode, toggleDarkMode }
}

export default useDarkMode

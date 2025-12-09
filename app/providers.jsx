"use client"

import { useEffect, useState } from "react"
import Header from "@/components/Header"

export default function Providers({ children }) {
  // Initial theme
  const getInitialTheme = () => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme")
      if (saved) return saved === "dark"

      return window.matchMedia("(prefers-color-scheme: dark)").matches
    }
    return false
  }

  const [isDark, setIsDark] = useState(getInitialTheme)

  // Apply theme class to <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  // Listen to system preference changes
  useEffect(() => {
    if (typeof window === "undefined") return

    const mql = window.matchMedia("(prefers-color-scheme: dark)")

    const handleChange = (e) => {
      const saved = localStorage.getItem("theme")
      if (!saved) setIsDark(e.matches) // Only change if user didn't set manually
    }

    // Modern browsers
    if (mql.addEventListener) {
      mql.addEventListener("change", handleChange)
    } else {
      mql.addListener(handleChange) // Fallback for older browsers
    }

    // Cleanup
    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener("change", handleChange)
      } else {
        mql.removeListener(handleChange)
      }
    }
  }, [])

  useEffect(()=>{
  const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

  if (darkModeQuery.matches) {
    console.log('Dark mode is enabled');

  } else {
    console.log('Light mode is enabled');


  }
})
  // Toggle theme manually
  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)


    // localStorage.setItem("theme", newTheme ? "dark" : "light")
  }

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      {children}
    </div>
  )
}

"use client"
import { Moon, Sun } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
export default function Header({ isDark, toggleTheme }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 backdrop-blur-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-slate-900 dark:text-white hover:opacity-80 transition-opacity"
          >
            <div className= "w-30 h-30 rounded-lg flex items-center justify-center text-white font-bold">

              <Image src="/logo.png" alt="" width={90} height={90} />
            </div>

          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-100 text-black dark:text-white dark:hover:bg-slate-800 transition-colors text-sm font-medium"
            >
              Home
            </Link>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

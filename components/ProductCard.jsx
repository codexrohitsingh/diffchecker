"use client"
import { ArrowRight } from "lucide-react"
import { createElement } from "react"
import Link from "next/link"

export default function ProductCard({ icon, title, description, features, route }) {
  return (
    <Link
      href={route}
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 hover:border-blue-400 dark:hover:border-blue-500 cursor-pointer transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-900/20 block"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 dark:from-blue-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="mb-4 inline-block p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
          {createElement(icon, { className: "w-6 h-6 text-blue-600 dark:text-blue-400" })}
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>

        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{description}</p>

        <div className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <div className="mt-1 w-1 h-1 rounded-full bg-blue-600 dark:bg-blue-400 flex-shrink-0" />
              <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
            </div>
          ))}
        </div>

        <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 group-hover:gap-3">
          Get Started
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </Link>
  )
}

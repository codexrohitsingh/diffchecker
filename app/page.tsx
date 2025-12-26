"use client"
import { FileText, GitCompare, Layers } from "lucide-react"
import ProductCard from "@/components/ProductCard"

export default function Home() {
  const products = [
    {
      id: "text-cleaner",
      icon: FileText,
      title: "Text Cleaner",
      description:
        "Remove extra blank lines and leading spaces from your text in one click.",
      features: [
        "Remove extra blank lines",
        "Remove leading spaces",
        "Live preview",
        "Copy to clipboard",
      ],
      route: "/text-cleaner",
    },
    {
      id: "text-compare",
      icon: GitCompare,
      title: "Clean & Compare",
      description:
        "Compare two texts side by side and highlight all differences instantly.",
      features: [
        "Line-by-line comparison",
        "Auto Clean both text",
        "Configurable cleaning options",
        "Highlight Differences",
      ],
      route: "/text-compare",
    },
{
  id: "dynamic-updater",
  icon: Layers,
  title: "Dynamic  Updater",
  description:
    "Replace dynamic placeholders in templates instantly using saved values, with built-in text cleaning and formatting controls.",
  features: [
    "Auto-replace dynamic placeholders with custom values",
    "Persistent dynamic settings saved in local storage",
    "Clean and normalize text formatting automatically",
    "Supports multiple dynamic fields like brand, region, audience, and language",
    "One-click apply, copy, and reset actions",
  ],
  route: "/dynamic-updater",
},

{
  id: "Counter",
  icon: Layers,
  title: "Character Counter",
  description:
    "A refined instrument for precise character, word, and readability measurement.",
  features: [
    "Accurate word and character counting",
    "Whitespace-aware character metrics",
    "Sentence and paragraph detection",
    "Estimated reading time analysis",
  ],
  route: "/counter",
}


  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Professional Text <span className="text-blue-600 dark:text-blue-400">Processing Tools</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Clean, compare, and analyze your texts with powerful tools designed for professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              icon={product.icon}
              title={product.title}
              description={product.description}
              features={product.features}
              route={product.route}
            />
          ))}
        </div>

        <div className="mt-10 pt-12 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center text-sm text-slate-600 dark:text-slate-400">
            <p>More tools coming soon. Start with any of our products above.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

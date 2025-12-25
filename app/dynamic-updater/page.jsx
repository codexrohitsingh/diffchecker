"use client"

import React, { useState, useEffect } from "react"
import { Copy, Check, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Page() {
  // -------------------------
  // THEME (DARK / LIGHT)
  // -------------------------
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light")
    setTheme(initialTheme)
    document.documentElement.classList.toggle("dark", initialTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark"
    setTheme(nextTheme)
    document.documentElement.classList.toggle("dark", nextTheme === "dark")
    localStorage.setItem("theme", nextTheme)
  }

  // -------------------------
  // TEXT INPUTS
  // -------------------------
  const [text1, setText1] = useState("")
  const [removeExtraLines, setRemoveExtraLines] = useState(true)
  const [removeInitialSpaces, setRemoveInitialSpaces] = useState(true)
  const [copied, setCopied] = useState(false)

  // ✅ applied output (only updates on Apply)
  const [appliedOutput, setAppliedOutput] = useState("")

  // -------------------------
  // ALLOWED DYNAMIC FIELDS
  // -------------------------
  const dynamicFields = [
    "Dynamic Discussion type",
    "Dynamic Brand Name",
    "Dynamic keyword language",
    "Dynamic language",
    "Dynamic script",
    "Dynamic media outlet type",
    "Dynamic content",
    "Dynamic Region",
    "Dynamic Audience",
    "Dynamic TV Caption Character",
    "Dynamic Headline Character",
    "Dynamic Descriptor Length",
    "Dynamic Hashtag Number",
    "Dynamic Keyword Number",
  ]

  // -------------------------
  // SETTINGS + LOCAL STORAGE
  // -------------------------
  const [settings, setSettings] = useState({})

  const normalizeKey = (k) =>
    String(k || "").trim().toLowerCase().replace(/\s+/g, " ")

  useEffect(() => {
    const saved = localStorage.getItem("dynamicSettings")
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        const normalized = Object.fromEntries(
          Object.entries(parsed).map(([k, v]) => [normalizeKey(k), v])
        )
        setSettings(normalized)
      } catch {}
    }
  }, [])

  const updateSetting = (key, value) => {
    const k = normalizeKey(key)
    const updated = { ...settings, [k]: value }
    setSettings(updated)
    localStorage.setItem("dynamicSettings", JSON.stringify(updated))
  }

  const handleClearSettings = () => {
    setSettings({})
    localStorage.removeItem("dynamicSettings")
  }

  // -------------------------
  // CLEAR FUNCTION (NEW)
  // -------------------------
  const handleClear = () => {
    setText1("")
    setAppliedOutput("")
  }

  // -------------------------
  // TEXT CLEANING
  // -------------------------
  const cleanText = (input) => {
    let result = input || ""

    if (removeExtraLines) {
      result = result
        .replace(/\n{2,}/g, "\n")
        .split("\n")
        .filter((line) => line.trim() !== "")
        .join("\n")
    }

    if (removeInitialSpaces) {
      result = result
        .split("\n")
        .map((line) => line.trimStart())
        .join("\n")
    }

    return result
  }

  // -------------------------
  // GENERATE OUTPUT (ON APPLY)
  // -------------------------
  const generateOutput = () => {
    const cleaned = cleanText(text1)

    const normalizedSettings = Object.fromEntries(
      Object.entries(settings || {}).map(([k, v]) => [normalizeKey(k), v])
    )

    const keyMapping = {
      "DISCUSSION TYPE": "dynamic discussion type",
      "BRAND NAME": "dynamic brand name",
      "KEYWORD LANGUAGE": "dynamic keyword language",
      "LANGUAGE": "dynamic language",
      "SCRIPT": "dynamic script",
      "MEDIA OUTLET TYPE": "dynamic media outlet type",
      "CONTENT": "dynamic content",
      "REGION": "dynamic region",
      "AUDIENCE": "dynamic audience",
      "TV CAPTION CHARACTER": "dynamic tv caption character",
      "HEADLINE CHARACTER": "dynamic headline character",
      "DESCRIPTOR LENGTH": "dynamic descriptor length",
      "HASHTAG NUMBER": "dynamic hashtag number",
      "KEYWORD NUMBER": "dynamic keyword number",
    }

    const regex =
      /<[^<>]*?>\s*\(\(?\s*DYNAMIC:\s*([^)]+?)\s*\)?\)/gi

    return cleaned.replace(regex, (fullMatch, dynKeyRaw) => {
      const mappedKey = keyMapping[dynKeyRaw.trim().toUpperCase()]
      if (!mappedKey) return fullMatch

      const value = normalizedSettings[normalizeKey(mappedKey)]
      return value && value.trim() !== "" ? value : fullMatch
    })
  }

  // -------------------------
  // COPY
  // -------------------------
  const handleCopy = async () => {
    await navigator.clipboard.writeText(appliedOutput)
    setCopied(true)
    setTimeout(() => setCopied(false), 1200)
  }

  // -------------------------
  // UI
  // -------------------------
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between mb-6">
          <Link href="/" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800">
            <ArrowLeft size={16} /> Back
          </Link>
        </div>

        <div className="mb-8 p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
          <h2 className="font-semibold mb-4">Dynamic Settings</h2>

          <button
            onClick={handleClearSettings}
            className="mb-4 px-4 py-2 bg-red-600 text-white rounded-lg"
          >
            Clear All Settings
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dynamicFields.map((field) => (
              <div key={field}>
                <label className="text-sm mb-1 block">{field}</label>
                <input
                  value={settings[normalizeKey(field)] || ""}
                  onChange={(e) => updateSetting(field, e.target.value)}
                  className="w-full p-2 rounded border bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-600"
                />
              </div>
            ))}
          </div>
        </div>

        <textarea
          value={text1}
          onChange={(e) => setText1(e.target.value)}
          placeholder="Paste template here"
          className="w-full h-72 p-4 font-mono rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700"
        />

        <div className="flex gap-3 mt-4">
          <button
            onClick={() => setAppliedOutput(generateOutput())}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg"
          >
            Apply
          </button>

          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Copied" : "Copy"}
          </button>

          <button
            onClick={handleClear}
            className="px-6 py-2 bg-red-600 text-white rounded-lg"
          >
            Clear
          </button>
        </div>

        {appliedOutput && (
          <div className="mt-8">
            <h2 className="font-semibold mb-2">Processed Output</h2>
            <pre className="p-4 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-auto text-sm">
              {appliedOutput}
            </pre>
          </div>
        )}
      </div>
    </main>
  )
}

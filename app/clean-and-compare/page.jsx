"use client"

import React, { useState, useEffect, useMemo } from "react"
import { Copy, Check, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Page() {
  // -------------------------
  // TEXT INPUTS
  // -------------------------
  const [text1, setText1] = useState("")
  const [removeExtraLines, setRemoveExtraLines] = useState(true)
  const [removeInitialSpaces, setRemoveInitialSpaces] = useState(true)
  const [copied, setCopied] = useState(false)

  // -------------------------
  // FIXED DYNAMIC FIELDS
  // -------------------------
  const dynamicFields = [
    "Dynamic Discussion type",
    "Dynamic keyword language",
    "Dynamic language",
    "Dynamic script",
    "Dynamic media outlet type",
    "Dynamic content",
    "Dynamic Region",
    "Dynamic Audience",
    "Dynamic Content Type",
    "Dynamic Entertainment show type",
    "Dynamic Style",
    "Dynamic TV Caption Character",
    "Dynamic Headline Character",
    "Dynamic Descriptor Length",
    "Dynamic Hashtag Number",
    "Dynamic Keyword Number",
    "Dynamic Duration Text",
    "Dynamic FP Target Duration",
    "Dynamic FP Max Duration",
    "FP Trigger",
    "Denoise By Default",
    "E",
  ]
// const keyMapping = {
//   "LANGUAGE": "dynamic language",
//   "MEDIA OUTLET TYPE": "dynamic media outlet type",
//   "BRAND NAME": "dynamic brand name",
//   "CONTENT": "dynamic content",
//   "REGION": "dynamic region",
//   "SCRIPT": "dynamic script",
//   "HEADLINE CHARACTER": "dynamic headline character",
//   "TV CAPTION CHARACTERS": "dynamic tv caption character",
//   "DESCRIPTOR LENGTH": "dynamic descriptor length",
//   "KEYWORD NUMBER": "dynamic keyword number",
//   "HASHTAG NUMBER": "dynamic hashtag number"
//   // add others as needed
// }

  // -------------------------
  // SETTINGS + LOCAL STORAGE
  // -------------------------
  const [settings, setSettings] = useState({})

const normalizeKey = (k) =>
  String(k || "").trim().toLowerCase().replace(/\s+/g, " ");


  useEffect(() => {
    const saved = localStorage.getItem("dynamicSettings")
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        // normalize keys on load so lookups are consistent
        const normalized = Object.fromEntries(
          Object.entries(parsed).map(([k, v]) => [normalizeKey(k), v])
        )
        setSettings(normalized)
      } catch (e) {
        console.warn("Failed to parse saved dynamicSettings", e)
      }
    }
  }, [])

  const updateSetting = (key, value) => {
    const k = normalizeKey(key)
    const updated = { ...settings, [k]: value }
    setSettings(updated)
    localStorage.setItem("dynamicSettings", JSON.stringify(updated))
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
  // FINAL OUTPUT (with dynamic replacement)
  // -------------------------
  // The regex below looks for something like:
  //  <Whatever> ((DYNAMIC: some key here))
  // It extracts the `some key here` part and does a normalized lookup into settings.
const finalOutput = useMemo(() => {
  const cleaned = cleanText(text1)

  // Build normalized settings map
  const normalizedSettings = Object.fromEntries(
    Object.entries(settings || {}).map(([k, v]) => [normalizeKey(k), v])
  )

  // Mapping template keys to settings keys
  const keyMapping = {
    "LANGUAGE": "dynamic language",
    "MEDIA OUTLET TYPE": "dynamic media outlet type",
    "BRAND NAME": "dynamic brand name",
    "CONTENT": "dynamic content",
    "REGION": "dynamic region",
    "SCRIPT": "dynamic script",
    "HEADLINE CHARACTER": "dynamic headline character",
    "TV CAPTION CHARACTERS": "dynamic tv caption character",
    "DESCRIPTOR LENGTH": "dynamic descriptor length",
    "KEYWORD NUMBER": "dynamic keyword number",
    "HASHTAG NUMBER": "dynamic hashtag number"
  }

  // Regex to capture optional <...> immediately before ((DYNAMIC: KEY))
  const regex = /<[^>]+>\s*\(\(\s*DYNAMIC:\s*([^)]+?)\s*\)\)/gi

  return cleaned.replace(regex, (_, dynKeyRaw) => {
    const mappedKey = keyMapping[dynKeyRaw.trim()] || dynKeyRaw
    const normalizedKey = normalizeKey(mappedKey)

    return normalizedSettings[normalizedKey] || ""
  })
}, [text1, settings, removeExtraLines, removeInitialSpaces])


  // -------------------------
  // COPY HANDLER
  // -------------------------
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(finalOutput)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (e) {
      console.error("Copy failed", e)
    }
  }
console.log("Text input:", text1)
console.log("Normalized settings:", settings)
console.log("Final output:", finalOutput)

  // -------------------------
  // UI RENDER
  // -------------------------
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* ============== SETTINGS PANEL ============== */}
        <div className="mb-10 p-4 bg-white dark:bg-slate-900 rounded-lg border dark:border-slate-700">
          <h2 className="text-lg font-semibold mb-4">Dynamic Settings</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dynamicFields.map((field) => (
              <div key={field} className="flex flex-col">
                <label className="text-sm text-slate-600 dark:text-slate-300 mb-1">
                  {field}
                </label>
                <input
                  type="text"
                  value={settings[normalizeKey(field)] || ""}
                  onChange={(e) => updateSetting(field, e.target.value)}
                  className="p-2 border rounded bg-slate-50 dark:bg-slate-800 dark:border-slate-700"
                />
              </div>
            ))}
          </div>
        </div>

        {/* OPTIONS */}
        <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-slate-200 dark:border-slate-800">
          <label className="flex items-center gap-3 cursor-pointer select-none">
            <div
              onClick={() => setRemoveExtraLines(!removeExtraLines)}
              className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                removeExtraLines ? "bg-blue-600" : "bg-slate-300 dark:bg-slate-700"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                  removeExtraLines ? "translate-x-5" : ""
                }`}
              />
            </div>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Remove extra blank lines
            </span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer select-none">
            <div
              onClick={() => setRemoveInitialSpaces(!removeInitialSpaces)}
              className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                removeInitialSpaces ? "bg-blue-600" : "bg-slate-300 dark:bg-slate-700"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                  removeInitialSpaces ? "translate-x-5" : ""
                }`}
              />
            </div>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Remove leading spaces
            </span>
          </label>
        </div>

        {/* TEMPLATE INPUT */}
        <div className="mb-6">
          <textarea
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            placeholder="Paste template with <Dynamic ...> fields..."
            className="w-full h-80 p-4 text-sm font-mono bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg resize-none"
          />
        </div>

        {/* ACTIONS */}
        <div className="flex gap-3">
          <button
            onClick={() => setText1(cleanText(text1))}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg"
          >
            Clean Text
          </button>

          <button
            onClick={handleCopy}
            disabled={!finalOutput}
            className="flex items-center gap-1.5 px-6 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed rounded-lg"
          >
            {copied ? <><Check className="w-4 h-4" /> Copied</> : <><Copy className="w-4 h-4" /> Copy Output</>}
          </button>
        </div>

        {/* OUTPUT */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold mb-2">Processed Output</h2>
          <pre className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-auto text-sm">
            {finalOutput}
          </pre>
        </div>
      </div>
    </main>
  )
}
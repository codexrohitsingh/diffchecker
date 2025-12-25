"use client"
import { useState, useRef, useEffect } from 'react'
import { Copy, Check, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function TextCleaner() {
  const [text, setText] = useState('')
  const [removeExtraLines, setRemoveExtraLines] = useState(true)
  const [removeInitialSpaces, setRemoveInitialSpaces] = useState(true)
  const [copied, setCopied] = useState(false)

  const textareaRef = useRef(null)
  const lineNumberRef = useRef(null)

  // Sync scroll of line numbers with textarea
  useEffect(() => {
    const handleScroll = () => {
      if (lineNumberRef.current && textareaRef.current) {
        lineNumberRef.current.scrollTop = textareaRef.current.scrollTop
      }
    }
    const textarea = textareaRef.current
    textarea.addEventListener('scroll', handleScroll)
    return () => textarea.removeEventListener('scroll', handleScroll)
  }, [])

  const cleanText = (input) => {
    let result = input

    if (removeExtraLines) {
      result = result
        .replace(/\n{2,}/g, '\n')
        .split('\n')
        .filter((line) => line.trim() !== '')
        .join('\n')
    }

    if (removeInitialSpaces) {
      result = result
        .split('\n')
        .map((line) => line.trimStart())
        .join('\n')
    }

    return result
  }

  const output = cleanText(text)
  // Trim once to avoid repeated work
const trimmed = output.trim()

// Words
const words = trimmed
  ? trimmed.split(/\s+/).filter(Boolean).length
  : 0

// Sentences (basic punctuation-based)
const sentences = trimmed
  ? trimmed.split(/[.!?]+/).filter(s => s.trim().length > 0).length
  : 0

// Characters
const charactersWithSpaces = output.length
const charactersWithoutSpaces = output.replace(/\s/g, '').length

// Paragraphs (non-empty lines)
const paragraphs = trimmed
  ? output.split(/\n+/).filter(p => p.trim() !== '').length
  : 0

// Reading time (average 200 words/min)
const readingTimeMinutes = words > 0 ? Math.ceil(words / 200) : 0

  const wordCount = output
  .trim()
  .split(/\s+/) // split by any whitespace
  .filter(word => word !== '').length


  const originalLines = text.split('\n').length
  const cleanedLines = output.split('\n').length
  const linesRemoved = originalLines - cleanedLines

  const originalSpaces = (text.match(/ /g) || []).length
  const cleanedSpaces = (output.match(/ /g) || []).length
  const spacesRemoved = originalSpaces - cleanedSpaces

  const outputLengthWithoutNumbers = output
    .split('\n')
    .map(line => line.replace(/^\d+\.\s/, ''))
    .join('\n')
    .length

  const handleCopy = () => {
    const textToCopy = output
      .split('\n')
      .map(line => line.replace(/^\d+\.\s/, ''))
      .join('\n')
    navigator.clipboard.writeText(textToCopy)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 py-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-sm transition-colors">
          <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-slate-200 dark:border-slate-800">
            
            {/* Toggle: Remove extra blank lines */}
            <label className="flex items-center gap-3 cursor-pointer select-none">
              <div
                onClick={() => setRemoveExtraLines(!removeExtraLines)}
                className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                  removeExtraLines ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-700'
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                    removeExtraLines ? 'translate-x-5' : ''
                  }`}
                />
              </div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Remove extra blank lines
              </span>
            </label>

            {/* Toggle: Remove leading spaces */}
            <label className="flex items-center gap-3 cursor-pointer select-none">
              <div
                onClick={() => setRemoveInitialSpaces(!removeInitialSpaces)}
                className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                  removeInitialSpaces ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-700'
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                    removeInitialSpaces ? 'translate-x-5' : ''
                  }`}
                />
              </div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Remove leading spaces
              </span>
            </label>
          </div>

          {/* Input and Output Boxes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Input Box */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block text-sm font-semibold text-slate-900 dark:text-white">Input</label>
                <span className="text-xs text-slate-500 dark:text-slate-400">{text.length} characters</span>
              </div>

              <textarea
                ref={textareaRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste or type your text here..."
                rows={16}
                className="w-full p-4 text-sm font-mono bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-0 focus:border-slate-300 dark:focus:border-slate-700 resize-y"
              />
            </div>

            {/* Output Box */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block text-sm font-semibold text-slate-900 dark:text-white">Output</label>
                <div className="flex items-center gap-3">
  <span className="text-xs text-slate-500 dark:text-slate-400">{outputLengthWithoutNumbers} characters</span>
  <span className="text-xs text-slate-500 dark:text-slate-400">{wordCount} words</span>
</div>

                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-500 dark:text-slate-400">{outputLengthWithoutNumbers} characters</span>
                </div>
              </div>
              
              <textarea
                value={output}
                readOnly
                rows={16}
                placeholder="Cleaned text will appear here..."
                className="w-full p-4 text-sm font-mono bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-0 focus:border-slate-300 dark:focus:border-slate-700 resize-y"
              />

             
            </div>
           
          </div>
            <div className='flex gap-3 items-center justify-center '>
                <button
                  onClick={handleCopy}
                  disabled={!output}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed rounded-lg transition-colors mt-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-5.5 h-5.5" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-5.5 h-5.5" />
                      Copy Text
                    </>
                  )}
                </button>

                <button
                  onClick={() => setText('')}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors mt-2"
                >
                  Clear
                </button>
              </div>

          {/* Cleanup Statistics */}
      <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

    <Stat label="Words" value={words} />
    <Stat label="Sentences" value={sentences} />
    <Stat label="Characters without spaces" value={charactersWithoutSpaces} />
    <Stat label="Characters with spaces" value={charactersWithSpaces} />
    <Stat label="Paragraphs" value={paragraphs} />
    <Stat label="Reading Time" value={`${readingTimeMinutes}m ${readingTimeMinutes > 0 ? '0s' : '0s'}`} />

  </div>
</div>

        </div>
      </div>
    </main>
  )
}
function Stat({ label, value }) {
  return (
    <div className="flex flex-col gap-1 border-b border-slate-200 dark:border-slate-800 pb-2">
      <span className="text-sm text-slate-600 dark:text-slate-400">
        {label}
      </span>
      <span className="text-2xl font-semibold text-emerald-600">
        {value}
      </span>
    </div>
  )
}

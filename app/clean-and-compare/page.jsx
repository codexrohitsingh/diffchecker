"use client"
import { useState, useRef, useEffect } from "react"
import { Copy, Check, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { diffWords } from "diff"

export default function Page() {
  const [text1, setText1] = useState("")
  const [text2, setText2] = useState("")
  const [removeExtraLines, setRemoveExtraLines] = useState(true)
  const [removeInitialSpaces, setRemoveInitialSpaces] = useState(true)
  const [copied, setCopied] = useState(false)

  const container1Ref = useRef(null)
  const container2Ref = useRef(null)
  const lineNumbers1Ref = useRef(null)
  const lineNumbers2Ref = useRef(null)

  const cleanText = (input) => {
    let result = input
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

  const cleanedText1 = cleanText(text1)
  const cleanedText2 = cleanText(text2)

  const lineNumbers = (text) =>
    text.split("\n").map((_, idx) => (
      <div key={idx} className="leading-5">
        {idx + 1}
      </div>
    ))

  const syncScroll = (containerRef, lineNumbersRef) => {
    if (containerRef.current && lineNumbersRef.current)
      lineNumbersRef.current.scrollTop = containerRef.current.scrollTop
  }

  useEffect(() => {
    const handleScroll1 = () => syncScroll(container1Ref, lineNumbers1Ref)
    const handleScroll2 = () => syncScroll(container2Ref, lineNumbers2Ref)
    const c1 = container1Ref.current
    const c2 = container2Ref.current
    if (c1) c1.addEventListener("scroll", handleScroll1)
    if (c2) c2.addEventListener("scroll", handleScroll2)
    return () => {
      if (c1) c1.removeEventListener("scroll", handleScroll1)
      if (c2) c2.removeEventListener("scroll", handleScroll2)
    }
  }, [])

  const renderDiffHTML = (diffArray) => {
    return diffArray
      .map((part) => {
        let style = ""
        if (part.added) style = "background-color: #a6f3a6;"
        else if (part.removed) style = "background-color: #f5a6a6;"
        const escaped = part.value
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
        return `<span style="${style}">${escaped}</span>`
      })
      .join("")
  }

  const handleCopy = () => {
    const textToCopy = cleanedText1 + "\n\n" + cleanedText2
    navigator.clipboard.writeText(textToCopy)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const handleCleanUpBoth = () => {
    setText1(cleanedText1)
    setText2(cleanedText2)
  }

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="relative">
            <div
              ref={lineNumbers1Ref}
              className="absolute left-0 top-0 bottom-0 w-10 bg-slate-100 dark:bg-slate-800 text-right pr-2 text-sm font-mono text-slate-500 dark:text-slate-400 select-none overflow-hidden"
            >
              {lineNumbers(cleanedText1)}
            </div>
            <textarea
              ref={container1Ref}
              value={text1}
              onChange={(e) => setText1(e.target.value)}
              placeholder="Paste first text here..."
              className="w-full h-80 p-4 pl-12 text-sm font-mono bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-0 focus:border-slate-300 dark:focus:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 resize-none"
            />
          </div>

          <div className="relative">
            <div
              ref={lineNumbers2Ref}
              className="absolute left-0 top-0 bottom-0 w-10 bg-slate-100 dark:bg-slate-800 text-right pr-2 text-sm font-mono text-slate-500 dark:text-slate-400 select-none overflow-hidden"
            >
              {lineNumbers(cleanedText2)}
            </div>
            <textarea
              ref={container2Ref}
              value={text2}
              onChange={(e) => setText2(e.target.value)}
              placeholder="Paste second text here..."
              className="w-full h-80 p-4 pl-12 text-sm font-mono bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-0 focus:border-slate-300 dark:focus:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 resize-none"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleCleanUpBoth}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg"
          >
            Clean Up Both
          </button>
          <button
            onClick={handleCopy}
            disabled={!cleanedText1 && !cleanedText2}
            className="flex items-center gap-1.5 px-6 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed rounded-lg"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" /> Copied
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" /> Copy Both
              </>
            )}
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <pre
            className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-auto text-sm"
            dangerouslySetInnerHTML={{ __html: renderDiffHTML(diffWords(cleanedText1, cleanedText1)) }}
          />
          <pre
            className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-auto text-sm"
            dangerouslySetInnerHTML={{ __html: renderDiffHTML(diffWords(cleanedText1, cleanedText2)) }}
          />
        </div>
      </div>
    </main>
  )
}

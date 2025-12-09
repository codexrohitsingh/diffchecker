"use client"
import { useState, useRef, useEffect } from 'react'
import { RotateCcw, ArrowLeft, ArrowRightLeft } from 'lucide-react'
import Link from 'next/link'
import { diffLines, diffWords } from 'diff'

// ----------------------
// Toggle Component
// ----------------------
function Toggle({ checked, onChange }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`relative w-12 h-6 rounded-full transition-colors ${
        checked ? 'bg-blue-600' : 'bg-slate-400'
      }`}
    >
      <span
        className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${
          checked ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
    </button>
  )
}

export default function TextCompare() {
  // Raw inputs for restoring from toggles
  const [rawText1, setRawText1] = useState('')
  const [rawText2, setRawText2] = useState('')
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [compared, setCompared] = useState(false)
  const [diffResult, setDiffResult] = useState(null)

  const [removeExtraLines1, setRemoveExtraLines1] = useState(false)
  const [removeSpaces1, setRemoveSpaces1] = useState(true)
  const [removeExtraLines2, setRemoveExtraLines2] = useState(false)
  const [removeSpaces2, setRemoveSpaces2] = useState(true)
const [mergeSelections, setMergeSelections] = useState([]);
const [activeLine, setActiveLine] = useState(null);


  // ----------------------
  // Clean text
  // ----------------------
const mergeChanges = () => {
  if (!diffResult?.aligned) return '';

  const stripHtml = text => (text || '').replace(/<[^>]*>/g, '');

  const mergedLines = diffResult.aligned.map((row, idx) => {
    const choice = mergeSelections[idx]; // "left" | "right" | "unchanged"

    let selectedHtml = '';

    if (choice === 'left' || choice === 'unchanged') {
      selectedHtml = row.left?.text || '';
    } else if (choice === 'right') {
      selectedHtml = row.right?.text || '';
    }

    return stripHtml(selectedHtml);
  });

  return mergedLines.join('\n');
};
const mergeSingleLine = (idx, source) => {
  setMergeSelections(prev => {
    const updated = [...prev];
    updated[idx] = source === "left" ? "left" : "right";
    return updated;
  });

  // Update text1 and text2 preview live
  setDiffResult(prev => {
    const updated = { ...prev };
    const row = updated.aligned[idx];
    if (source === "left") {
      row.right.text = row.left.text;
      row.right.type = row.left.type;
    } else {
      row.left.text = row.right.text;
      row.left.type = row.right.type;
    }
    return updated;
  });

  setActiveLine(null);
};




  const cleanText = (text, removeLines, removeSpaces) => {
    let result = text

    if (removeLines) {
      result = result
        .split('\n')
        .filter((line) => line.trim() !== '')
        .join('\n')
    }

    if (removeSpaces) {
      result = result
        .split('\n')
        .map((line) => line.replace(/^\s+/, ''))
        .join('\n')
    }

    return result
  }

  const handleText1Change = (value) => {
    setRawText1(value)
    const cleaned = cleanText(value, removeExtraLines1, removeSpaces1)
    setText1(cleaned)
  }

  const handleText2Change = (value) => {
    setRawText2(value)
    const cleaned = cleanText(value, removeExtraLines2, removeSpaces2)
    setText2(cleaned)
  }

  // ----------------------
  // Toggles
  // ----------------------
  const toggleRemoveExtraLines1 = (val) => {
    setRemoveExtraLines1(val)
    setText1(cleanText(rawText1, val, removeSpaces1))
  }

  const toggleRemoveSpaces1 = (val) => {
    setRemoveSpaces1(val)
    setText1(cleanText(rawText1, removeExtraLines1, val))
  }

  const toggleRemoveExtraLines2 = (val) => {
    setRemoveExtraLines2(val)
    setText2(cleanText(rawText2, val, removeSpaces2))
  }

  const toggleRemoveSpaces2 = (val) => {
    setRemoveSpaces2(val)
    setText2(cleanText(rawText2, removeExtraLines2, val))
  }

  // ----------------------
  // WORD-LEVEL HIGHLIGHTING
  // ----------------------
  const highlightWords = (oldText, newText) => {
    const diffs = diffWords(oldText, newText)

    return {
      left: diffs
        .map((part) =>
          part.removed
            ? `<span class="bg-red-300 dark:bg-red-700">${part.value}</span>`
            : !part.added
            ? part.value
            : ''
        )
        .join(''),

      right: diffs
        .map((part) =>
          part.added
            ? `<span class="bg-green-300 dark:bg-green-700">${part.value}</span>`
            : !part.removed
            ? part.value
            : ''
        )
        .join('')
    }
  }

  // ----------------------
  // Compare
  // ----------------------
  const normalizeInput = (text, removeLines, removeSpaces) => {
  // Clean according to toggles
   let cleaned = cleanText(text, removeLines, removeSpaces);

  // Remove trailing blank lines always
  cleaned = cleaned.replace(/\n+$/g, '');

  // Remove trailing space at the end of each line for comparison
  cleaned = cleaned
    .split('\n')
    .map((line) => line.replace(/\s+$/, '')) // <-- remove only trailing space
    .join('\n');

  return cleaned;
}

  const compareTexts = () => {
    
    if (!text1 || !text2) return

   const clean1 = normalizeInput(text1, removeExtraLines1, removeSpaces1);
const clean2 = normalizeInput(text2, removeExtraLines2, removeSpaces2);

const lineDiff = diffLines(clean1, clean2);

    const aligned = []

    lineDiff.forEach((segment) => {
      const lines = segment.value.split('\n')
      lines.forEach((line) => {
        const isEmpty = line === ''

        if (segment.removed) {
          if (!isEmpty) {
            const words = highlightWords(line, '')
            aligned.push({
              left: { text: words.left, type: 'removed' },
              right: { text: words.right, type: 'removed' }
            })
          }
        } else if (segment.added) {
          if (!isEmpty) {
            const words = highlightWords('', line)
            aligned.push({
              left: { text: words.left, type: 'added' },
              right: { text: words.right, type: 'added' }
            })
          }
        } else {
          if (!isEmpty) {
            const words = highlightWords(line, line)
            aligned.push({
              left: { text: words.left, type: 'unchanged' },
              right: { text: words.right, type: 'unchanged' }
            })
          }
        }
      })
    })

    setDiffResult({ aligned })
    setMergeSelections(aligned.map(row => 
  row.left.type === 'unchanged' ? 'unchanged' : 'left' // default to left for changes
));
    setCompared(true)
  }

  // ----------------------
  // Swap & Reset
  // ----------------------
  const swapTexts = () => {
    const tempRaw = rawText1
    setRawText1(rawText2)
    setRawText2(tempRaw)

    const temp = text1
    setText1(text2)
    setText2(temp)
    setCompared(false)
    setDiffResult(null)
  }

  const handleReset = () => {
    setRawText1('')
    setRawText2('')
    setText1('')
    setText2('')
    setDiffResult(null)
    setCompared(false)
  }

  // ----------------------
  // Count lines
  // ----------------------
  const countLines = (aligned, side, type) => {
    return aligned.filter((row) =>
      side === 'left' ? row.left.type === type : row.right.type === type
    ).length
  }

  // ----------------------
  // Render with HTML highlight
  // ----------------------
 const renderAlignedColumn = (aligned, side) => {
  const getGroupColor = (type) => {
    const leftHighlight = type === "removed" || type === "added_gap";
    const rightHighlight = type === "added" || type === "removed_gap";
    const highlight = side === "left" ? leftHighlight : rightHighlight;
    if (!highlight) return "none";
    return side === "left" ? "red" : "green";
  };

  let groups = [];
  let current = null;

  // Build groups
  aligned.forEach((row) => {
    const cell = side === "left" ? row.left : row.right;
    const color = getGroupColor(cell.type);

    if (!current || current.color !== color) {
      if (current) groups.push(current);
      current = { color, rows: [cell] };
    } else {
      current.rows.push(cell);
    }
  });

  if (current) groups.push(current);

  let lineCounter = 0;

  const groupClass = (color) => {
    if (color === "red")
      return "border border-red-400 bg-red-50 dark:border-red-700 dark:bg-red-900/30 rounded";
    if (color === "green")
      return "border border-green-500 bg-green-50 dark:border-green-700 dark:bg-green-900/30 rounded";
    return "";
  };

  return groups.map((group, gIdx) => (
    <div key={gIdx} className={group.color === "none" ? "" : `${groupClass(group.color)} my-1 py-0.5`}>
      {group.rows.map((cell, idx) => {
        lineCounter++; // index inside this column
        const globalIdx = lineCounter - 1; // index inside aligned[]

        return (
          <div key={`${gIdx}-${idx}`} className="flex items-center">
            
            {/* Line number */}
            <span className="inline-block min-w-[5ch] text-right pr-2 text-slate-400 dark:text-slate-500 select-none">
              {lineCounter}
            </span>

            {/* Highlighted text */}
          <span
  onClick={() => {
    if (cell.type !== "unchanged") setActiveLine(globalIdx);
  }}
  className={`
    text-slate-700 dark:text-slate-300 px-1 flex-1 cursor-pointer overflow-y-auto
    ${cell.type !== "unchanged" ? "hover:bg-yellow-200 dark:hover:bg-yellow-700" : ""}
  `}
  dangerouslySetInnerHTML={{ __html: cell.text || "" }}
/>
{activeLine === globalIdx && (
  <div className="ml-2 flex gap-2">
    <button
      onClick={() => mergeSingleLine(globalIdx, "left")}
      className="px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Merge from Text 1
    </button>
    <button
      onClick={() => mergeSingleLine(globalIdx, "right")}
      className="px-2 py-1 text-xs bg-green-600 text-white rounded hover:bg-green-700"
    >
      Merge from Text 2
    </button>
  </div>
)}


            {/* L/R merge buttons — only show for changed lines */}
           
          </div>
        );
      })}
    </div>
  ));
};


  // ----------------------
  // Input scrolling sync
  // ----------------------
  const container1Ref = useRef(null)
  const container2Ref = useRef(null)
  const lineNumbers1Ref = useRef(null)
  const lineNumbers2Ref = useRef(null)

  const lineNumbers = (text) =>
    text.split('\n').map((_, idx) => (
      <div key={idx} className="leading-5">
        {idx + 1}
      </div>
    ))

  const syncScroll = (containerRef, lineNumbersRef) => {
    if (containerRef.current && lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = containerRef.current.scrollTop
    }
  }

  useEffect(() => {
    const handleScroll1 = () => syncScroll(container1Ref, lineNumbers1Ref)
    const handleScroll2 = () => syncScroll(container2Ref, lineNumbers2Ref)

    const c1 = container1Ref.current
    const c2 = container2Ref.current

    if (c1) c1.addEventListener('scroll', handleScroll1)
    if (c2) c2.addEventListener('scroll', handleScroll2)

    return () => {
      if (c1) c1.removeEventListener('scroll', handleScroll1)
      if (c2) c2.removeEventListener('scroll', handleScroll2)
    }
  }, [])

  // ----------------------
  // UI
  // ----------------------
  return (
    <main className="min-h-screen  from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
{/* 
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
            Text Compare
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Compare two texts with professional diff highlighting
          </p>
        </div> */}

        {/* Cleaning Options */}
        <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-6 mb-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Cleaning Options
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <Toggle checked={removeExtraLines1} onChange={toggleRemoveExtraLines1} />
              <span className="text-sm text-slate-700 dark:text-slate-300">
                Remove extra lines (Text 1)
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <Toggle checked={removeSpaces1} onChange={toggleRemoveSpaces1} />
              <span className="text-sm text-slate-700 dark:text-slate-300">
                Remove spaces (Text 1)
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <Toggle checked={removeExtraLines2} onChange={toggleRemoveExtraLines2} />
              <span className="text-sm text-slate-700 dark:text-slate-300">
                Remove extra lines (Text 2)
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <Toggle checked={removeSpaces2} onChange={toggleRemoveSpaces2} />
              <span className="text-sm text-slate-700 dark:text-slate-300">
                Remove spaces (Text 2)
              </span>
            </label>
          </div>
        </div>

        {/* Text Inputs */}
        <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-sm mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            
            {/* Text 1 */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block text-sm font-semibold text-slate-900 dark:text-white">
                  Text 1
                </label>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {text1.length} characters
                </span>
              </div>

              <div className="relative">
                <div
                  ref={lineNumbers1Ref}
                  className="absolute left-0 top-0  bottom-0 w-10 bg-slate-100 dark:bg-slate-800 text-right pr-2 text-sm font-mono text-slate-500 dark:text-slate-400 select-none overflow-hidden pt-4"
                >
                  {lineNumbers(text1)}
                </div>

                <textarea
                  ref={container1Ref}
                  value={text1}
                  onChange={(e) => handleText1Change(e.target.value)}
                  placeholder="Paste first text here..."
                  className="w-full h-80 p-4 pl-12 text-sm font-mono bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-0 focus:border-slate-300 dark:focus:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 resize-none transition-colors"
                />
              </div>
            </div>

            {/* Text 2 */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block text-sm font-semibold text-slate-900 dark:text-white">
                  Text 2
                </label>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {text2.length} characters
                </span>
              </div>

              <div className="relative">
                <div
                  ref={lineNumbers2Ref}
                  className="absolute left-0 top-0 bottom-0 w-10 bg-slate-100 dark:bg-slate-800 text-right pr-2 text-sm font-mono text-slate-500 dark:text-slate-400 select-none overflow-hidden pt-4"
                >
                  {lineNumbers(text2)}
                </div>

                <textarea
                  ref={container2Ref}
                  value={text2}
                  onChange={(e) => handleText2Change(e.target.value)}
                  placeholder="Paste second text here..."
                  className="w-full h-80 p-4 pl-12 text-sm font-mono bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-0 focus:border-slate-300 dark:focus:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 resize-none transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={compareTexts}
              disabled={!text1 || !text2}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors shadow-sm"
            >
              Compare Texts
            </button>

            <button
              onClick={swapTexts}
              disabled={!text1 || !text2}
              className="flex items-center gap-2 px-6 py-2.5 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-slate-900 dark:text-slate-100 font-medium rounded-lg transition-colors"
            >
              <ArrowRightLeft className="w-4 h-4" />
              Swap
            </button>

            {compared && (
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-6 py-2.5 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 font-medium rounded-lg transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Comparison Results */}
        {compared && diffResult && (
          
          <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Comparison Results
            </h2>
  <button
    onClick={() => {
      const merged = mergeChanges();
      if (merged !== undefined) {
        alert('Merged Text:\n\n' + merged);
      }
    }}
    className="mt-4 px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
  >
    Merge Changes
  </button>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  Text 1
                </h3>
                <div className="bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg p-4 min-h-64 font-mono text-sm leading-relaxed break-words whitespace-pre-wrap">
                  {renderAlignedColumn(diffResult.aligned, 'left')}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  Text 2
                </h3>
                <div className="bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg p-4 min-h-64 font-mono text-sm leading-relaxed break-words whitespace-pre-wrap">
                  {renderAlignedColumn(diffResult.aligned, 'right')}
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                  Removed
                </p>
                <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                  {countLines(diffResult.aligned, 'left', 'removed')}
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                  Added
                </p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {countLines(diffResult.aligned, 'right', 'added')}
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                  Identical
                </p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {countLines(diffResult.aligned, 'left', 'unchanged')}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

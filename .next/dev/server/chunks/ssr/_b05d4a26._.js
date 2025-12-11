module.exports = [
"[project]/app/clean-and-compare/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client"
// import React, { useState, useEffect, useMemo } from "react"
// import { Copy, Check, ArrowLeft } from "lucide-react"
// import Link from "next/link"
// import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf"
// import mammoth from "mammoth"
// pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`
// export default function Page() {
//   // -------------------------
//   // TEXT INPUTS
//   // -------------------------
//   const [text1, setText1] = useState("")
//   const [removeExtraLines, setRemoveExtraLines] = useState(true)
//   const [removeInitialSpaces, setRemoveInitialSpaces] = useState(true)
//   const [copied, setCopied] = useState(false)
//   // -------------------------
//   // FIXED DYNAMIC FIELDS
//   // -------------------------
//   const dynamicFields = [
//     "Dynamic Discussion type",
//     "Dynamic keyword language",
//     "Dynamic language",
//     "Dynamic script",
//     "Dynamic media outlet type",
//     "Dynamic content",
//     "Dynamic Region",
//     "Dynamic Audience",
//     "Dynamic Content Type",
//     "Dynamic Entertainment show type",
//     "Dynamic Style",
//     "Dynamic TV Caption Character",
//     "Dynamic Headline Character",
//     "Dynamic Descriptor Length",
//     "Dynamic Hashtag Number",
//     "Dynamic Keyword Number",
//     "Dynamic Duration Text",
//     "Dynamic FP Target Duration",
//     "Dynamic FP Max Duration",
//     "FP Trigger",
//     "Denoise By Default",
//     "E",
//   ]
//   // -------------------------
//   // SETTINGS + LOCAL STORAGE
//   // -------------------------
//   const [settings, setSettings] = useState({})
//   const normalizeKey = (k) =>
//     String(k || "").trim().toLowerCase().replace(/\s+/g, " ")
//   useEffect(() => {
//     const saved = localStorage.getItem("dynamicSettings")
//     if (saved) {
//       try {
//         const parsed = JSON.parse(saved)
//         const normalized = Object.fromEntries(
//           Object.entries(parsed).map(([k, v]) => [normalizeKey(k), v])
//         )
//         setSettings(normalized)
//       } catch (e) {
//         console.warn("Failed to parse saved dynamicSettings", e)
//       }
//     }
//   }, [])
//   const updateSetting = (key, value) => {
//     const k = normalizeKey(key)
//     const updated = { ...settings, [k]: value }
//     setSettings(updated)
//     localStorage.setItem("dynamicSettings", JSON.stringify(updated))
//   }
//   // -------------------------
//   // FILE UPLOAD & EXTRACTION
//   // -------------------------
//   const handleFileUpload = async (e) => {
//     const file = e.target.files[0]
//     if (!file) return
//     let text = ""
//     if (file.type === "application/pdf") {
//       text = await extractPDFText(file)
//     } else if (file.name.endsWith(".docx")) {
//       text = await extractDocxText(file)
//     } else {
//       text = await file.text()
//     }
//     autoFillDynamicValues(text)
//   }
//   const extractPDFText = async (file) => {
//     const arrayBuffer = await file.arrayBuffer()
//     const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise
//     let extracted = ""
//     for (let i = 1; i <= pdf.numPages; i++) {
//       const page = await pdf.getPage(i)
//       const textContent = await page.getTextContent()
//       extracted += textContent.items.map((it) => it.str).join(" ") + "\n"
//     }
//     return extracted
//   }
//   const extractDocxText = async (file) => {
//     const arrayBuffer = await file.arrayBuffer()
//     const result = await mammoth.extractRawText({ arrayBuffer })
//     return result.value
//   }
//   const autoFillDynamicValues = (text) => {
//     const keyMapping = {
//       "LANGUAGE": "dynamic language",
//       "MEDIA OUTLET TYPE": "dynamic media outlet type",
//       "BRAND NAME": "dynamic brand name",
//       "CONTENT": "dynamic content",
//       "REGION": "dynamic region",
//       "SCRIPT": "dynamic script",
//       "HEADLINE CHARACTER": "dynamic headline character",
//       "TV CAPTION CHARACTERS": "dynamic tv caption character",
//       "DESCRIPTOR LENGTH": "dynamic descriptor length",
//       "KEYWORD NUMBER": "dynamic keyword number",
//       "HASHTAG NUMBER": "dynamic hashtag number",
//     }
//     const newSettings = { ...settings }
//     for (const [inputKey, settingKey] of Object.entries(keyMapping)) {
//       const regex = new RegExp(`${inputKey}\\s*[:=]\\s*(.+)`, "i")
//       const match = text.match(regex)
//       if (match) {
//         const value = match[1].trim()
//         newSettings[normalizeKey(settingKey)] = value
//       }
//     }
//     setSettings(newSettings)
//     localStorage.setItem("dynamicSettings", JSON.stringify(newSettings))
//   }
//   // -------------------------
//   // TEXT CLEANING
//   // -------------------------
//   const cleanText = (input) => {
//     let result = input || ""
//     if (removeExtraLines) {
//       result = result
//         .replace(/\n{2,}/g, "\n")
//         .split("\n")
//         .filter((line) => line.trim() !== "")
//         .join("\n")
//     }
//     if (removeInitialSpaces) {
//       result = result
//         .split("\n")
//         .map((line) => line.trimStart())
//         .join("\n")
//     }
//     return result
//   }
//   // -------------------------
//   // FINAL OUTPUT (with dynamic replacement)
//   // -------------------------
//   const finalOutput = useMemo(() => {
//     const cleaned = cleanText(text1)
//     const normalizedSettings = Object.fromEntries(
//       Object.entries(settings || {}).map(([k, v]) => [normalizeKey(k), v])
//     )
//     const keyMapping = {
//       "LANGUAGE": "dynamic language",
//       "MEDIA OUTLET TYPE": "dynamic media outlet type",
//       "BRAND NAME": "dynamic brand name",
//       "CONTENT": "dynamic content",
//       "REGION": "dynamic region",
//       "SCRIPT": "dynamic script",
//       "HEADLINE CHARACTER": "dynamic headline character",
//       "TV CAPTION CHARACTERS": "dynamic tv caption character",
//       "DESCRIPTOR LENGTH": "dynamic descriptor length",
//       "KEYWORD NUMBER": "dynamic keyword number",
//       "HASHTAG NUMBER": "dynamic hashtag number"
//     }
//     const regex = /<[^>]+>\s*\(\(\s*DYNAMIC:\s*([^)]+?)\s*\)\)/gi
//     return cleaned.replace(regex, (_, dynKeyRaw) => {
//       const mappedKey = keyMapping[dynKeyRaw.trim()] || dynKeyRaw
//       const normalizedKey = normalizeKey(mappedKey)
//       return normalizedSettings[normalizedKey] || ""
//     })
//   }, [text1, settings, removeExtraLines, removeInitialSpaces])
//   // -------------------------
//   // COPY HANDLER
//   // -------------------------
//   const handleCopy = async () => {
//     try {
//       await navigator.clipboard.writeText(finalOutput)
//       setCopied(true)
//       setTimeout(() => setCopied(false), 1500)
//     } catch (e) {
//       console.error("Copy failed", e)
//     }
//   }
//   // -------------------------
//   // UI RENDER
//   // -------------------------
//   return (
//     <main className="min-h-screen bg-gradient-to-br from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <Link
//           href="/"
//           className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
//         >
//           <ArrowLeft className="w-4 h-4" />
//           Back to Home
//         </Link>
//         {/* ============== FILE UPLOAD ============== */}
//         <div className="mb-6 p-4 bg-white dark:bg-slate-900 rounded-lg border dark:border-slate-700">
//           <label className="block mb-2 font-medium text-slate-700 dark:text-slate-300">
//             Upload file with dynamic values
//           </label>
//           <input
//             type="file"
//             accept=".pdf,.doc,.docx,.txt"
//             onChange={handleFileUpload}
//             className="p-2 border rounded bg-slate-50 dark:bg-slate-800 dark:border-slate-700"
//           />
//         </div>
//         {/* ============== SETTINGS PANEL ============== */}
//         <div className="mb-10 p-4 bg-white dark:bg-slate-900 rounded-lg border dark:border-slate-700">
//           <h2 className="text-lg font-semibold mb-4">Dynamic Settings</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {dynamicFields.map((field) => (
//               <div key={field} className="flex flex-col">
//                 <label className="text-sm text-slate-600 dark:text-slate-300 mb-1">
//                   {field}
//                 </label>
//                 <input
//                   type="text"
//                   value={settings[normalizeKey(field)] || ""}
//                   onChange={(e) => updateSetting(field, e.target.value)}
//                   className="p-2 border rounded bg-slate-50 dark:bg-slate-800 dark:border-slate-700"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* OPTIONS */}
//         <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-slate-200 dark:border-slate-800">
//           <label className="flex items-center gap-3 cursor-pointer select-none">
//             <div
//               onClick={() => setRemoveExtraLines(!removeExtraLines)}
//               className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
//                 removeExtraLines ? "bg-blue-600" : "bg-slate-300 dark:bg-slate-700"
//               }`}
//             >
//               <div
//                 className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
//                   removeExtraLines ? "translate-x-5" : ""
//                 }`}
//               />
//             </div>
//             <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
//               Remove extra blank lines
//             </span>
//           </label>
//           <label className="flex items-center gap-3 cursor-pointer select-none">
//             <div
//               onClick={() => setRemoveInitialSpaces(!removeInitialSpaces)}
//               className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
//                 removeInitialSpaces ? "bg-blue-600" : "bg-slate-300 dark:bg-slate-700"
//               }`}
//             >
//               <div
//                 className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
//                   removeInitialSpaces ? "translate-x-5" : ""
//                 }`}
//               />
//             </div>
//             <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
//               Remove leading spaces
//             </span>
//           </label>
//         </div>
//         {/* TEMPLATE INPUT */}
//         <div className="mb-6">
//           <textarea
//             value={text1}
//             onChange={(e) => setText1(e.target.value)}
//             placeholder="Paste template with <Dynamic ...> fields..."
//             className="w-full h-80 p-4 text-sm font-mono bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg resize-none"
//           />
//         </div>
//         {/* ACTIONS */}
//         <div className="flex gap-3">
//           <button
//             onClick={() => setText1(cleanText(text1))}
//             className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg"
//           >
//             Clean Text
//           </button>
//           <button
//             onClick={handleCopy}
//             disabled={!finalOutput}
//             className="flex items-center gap-1.5 px-6 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed rounded-lg"
//           >
//             {copied ? <><Check className="w-4 h-4" /> Copied</> : <><Copy className="w-4 h-4" /> Copy Output</>}
//           </button>
//         </div>
//         {/* OUTPUT */}
//         <div className="mt-10">
//           <h2 className="text-lg font-semibold mb-2">Processed Output</h2>
//           <pre className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-auto text-sm">
//             {finalOutput}
//           </pre>
//         </div>
//       </div>
//     </main>
//   )
// }
__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Page() {
    // -------------------------
    // TEXT INPUTS
    // -------------------------
    const [text1, setText1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [removeExtraLines, setRemoveExtraLines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [removeInitialSpaces, setRemoveInitialSpaces] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
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
        "E"
    ];
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
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const normalizeKey = (k)=>String(k || "").trim().toLowerCase().replace(/\s+/g, " ");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const saved = localStorage.getItem("dynamicSettings");
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                // normalize keys on load so lookups are consistent
                const normalized = Object.fromEntries(Object.entries(parsed).map(([k, v])=>[
                        normalizeKey(k),
                        v
                    ]));
                setSettings(normalized);
            } catch (e) {
                console.warn("Failed to parse saved dynamicSettings", e);
            }
        }
    }, []);
    const updateSetting = (key, value)=>{
        const k = normalizeKey(key);
        const updated = {
            ...settings,
            [k]: value
        };
        setSettings(updated);
        localStorage.setItem("dynamicSettings", JSON.stringify(updated));
    };
    // -------------------------
    // TEXT CLEANING
    // -------------------------
    const cleanText = (input)=>{
        let result = input || "";
        if (removeExtraLines) {
            result = result.replace(/\n{2,}/g, "\n").split("\n").filter((line)=>line.trim() !== "").join("\n");
        }
        if (removeInitialSpaces) {
            result = result.split("\n").map((line)=>line.trimStart()).join("\n");
        }
        return result;
    };
    // -------------------------
    // FINAL OUTPUT (with dynamic replacement)
    // -------------------------
    // The regex below looks for something like:
    //  <Whatever> ((DYNAMIC: some key here))
    // It extracts the `some key here` part and does a normalized lookup into settings.
    const finalOutput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const cleaned = cleanText(text1);
        // Build normalized settings map
        const normalizedSettings = Object.fromEntries(Object.entries(settings || {}).map(([k, v])=>[
                normalizeKey(k),
                v
            ]));
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
        };
        // Regex to capture optional <...> immediately before ((DYNAMIC: KEY))
        const regex = /<[^>]+>\s*\(\(\s*DYNAMIC:\s*([^)]+?)\s*\)\)/gi;
        return cleaned.replace(regex, (_, dynKeyRaw)=>{
            const mappedKey = keyMapping[dynKeyRaw.trim()] || dynKeyRaw;
            const normalizedKey = normalizeKey(mappedKey);
            return normalizedSettings[normalizedKey] || "";
        });
    }, [
        text1,
        settings,
        removeExtraLines,
        removeInitialSpaces
    ]);
    // -------------------------
    // COPY HANDLER
    // -------------------------
    const handleCopy = async ()=>{
        try {
            await navigator.clipboard.writeText(finalOutput);
            setCopied(true);
            setTimeout(()=>setCopied(false), 1500);
        } catch (e) {
            console.error("Copy failed", e);
        }
    };
    console.log("Text input:", text1);
    console.log("Normalized settings:", settings);
    console.log("Final output:", finalOutput);
    // -------------------------
    // UI RENDER
    // -------------------------
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gradient-to-br from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "inline-flex items-center gap-2 px-4 py-2 mb-6 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/app/clean-and-compare/page.jsx",
                            lineNumber: 521,
                            columnNumber: 11
                        }, this),
                        "Back to Home"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/clean-and-compare/page.jsx",
                    lineNumber: 517,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-10 p-4 bg-white dark:bg-slate-900 rounded-lg border dark:border-slate-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold mb-4",
                            children: "Dynamic Settings"
                        }, void 0, false, {
                            fileName: "[project]/app/clean-and-compare/page.jsx",
                            lineNumber: 527,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: dynamicFields.map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm text-slate-600 dark:text-slate-300 mb-1",
                                            children: field
                                        }, void 0, false, {
                                            fileName: "[project]/app/clean-and-compare/page.jsx",
                                            lineNumber: 532,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: settings[normalizeKey(field)] || "",
                                            onChange: (e)=>updateSetting(field, e.target.value),
                                            className: "p-2 border rounded bg-slate-50 dark:bg-slate-800 dark:border-slate-700"
                                        }, void 0, false, {
                                            fileName: "[project]/app/clean-and-compare/page.jsx",
                                            lineNumber: 535,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, field, true, {
                                    fileName: "[project]/app/clean-and-compare/page.jsx",
                                    lineNumber: 531,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/clean-and-compare/page.jsx",
                            lineNumber: 529,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/clean-and-compare/page.jsx",
                    lineNumber: 526,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-4 mb-8 pb-8 border-b border-slate-200 dark:border-slate-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex items-center gap-3 cursor-pointer select-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>setRemoveExtraLines(!removeExtraLines),
                                    className: `w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${removeExtraLines ? "bg-blue-600" : "bg-slate-300 dark:bg-slate-700"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${removeExtraLines ? "translate-x-5" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/clean-and-compare/page.jsx",
                                        lineNumber: 555,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/clean-and-compare/page.jsx",
                                    lineNumber: 549,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-slate-700 dark:text-slate-300",
                                    children: "Remove extra blank lines"
                                }, void 0, false, {
                                    fileName: "[project]/app/clean-and-compare/page.jsx",
                                    lineNumber: 561,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/clean-and-compare/page.jsx",
                            lineNumber: 548,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex items-center gap-3 cursor-pointer select-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>setRemoveInitialSpaces(!removeInitialSpaces),
                                    className: `w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${removeInitialSpaces ? "bg-blue-600" : "bg-slate-300 dark:bg-slate-700"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${removeInitialSpaces ? "translate-x-5" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/clean-and-compare/page.jsx",
                                        lineNumber: 573,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/clean-and-compare/page.jsx",
                                    lineNumber: 567,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-slate-700 dark:text-slate-300",
                                    children: "Remove leading spaces"
                                }, void 0, false, {
                                    fileName: "[project]/app/clean-and-compare/page.jsx",
                                    lineNumber: 579,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/clean-and-compare/page.jsx",
                            lineNumber: 566,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/clean-and-compare/page.jsx",
                    lineNumber: 547,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: text1,
                        onChange: (e)=>setText1(e.target.value),
                        placeholder: "Paste template with <Dynamic ...> fields...",
                        className: "w-full h-80 p-4 text-sm font-mono bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg resize-none"
                    }, void 0, false, {
                        fileName: "[project]/app/clean-and-compare/page.jsx",
                        lineNumber: 587,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/clean-and-compare/page.jsx",
                    lineNumber: 586,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setText1(cleanText(text1)),
                            className: "px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg",
                            children: "Clean Text"
                        }, void 0, false, {
                            fileName: "[project]/app/clean-and-compare/page.jsx",
                            lineNumber: 597,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleCopy,
                            disabled: !finalOutput,
                            className: "flex items-center gap-1.5 px-6 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed rounded-lg",
                            children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/clean-and-compare/page.jsx",
                                        lineNumber: 609,
                                        columnNumber: 25
                                    }, this),
                                    " Copied"
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/clean-and-compare/page.jsx",
                                        lineNumber: 609,
                                        columnNumber: 69
                                    }, this),
                                    " Copy Output"
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/app/clean-and-compare/page.jsx",
                            lineNumber: 604,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/clean-and-compare/page.jsx",
                    lineNumber: 596,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold mb-2",
                            children: "Processed Output"
                        }, void 0, false, {
                            fileName: "[project]/app/clean-and-compare/page.jsx",
                            lineNumber: 615,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "p-4 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-auto text-sm",
                            children: finalOutput
                        }, void 0, false, {
                            fileName: "[project]/app/clean-and-compare/page.jsx",
                            lineNumber: 616,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/clean-and-compare/page.jsx",
                    lineNumber: 614,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/clean-and-compare/page.jsx",
            lineNumber: 515,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/clean-and-compare/page.jsx",
        lineNumber: 514,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Copy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "rect",
        {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea"
        }
    ],
    [
        "path",
        {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf"
        }
    ]
];
const Copy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("copy", __iconNode);
;
 //# sourceMappingURL=copy.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Copy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Check
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }
    ]
];
const Check = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("check", __iconNode);
;
 //# sourceMappingURL=check.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Check",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowLeft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }
    ],
    [
        "path",
        {
            d: "M19 12H5",
            key: "x3x0zl"
        }
    ]
];
const ArrowLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("arrow-left", __iconNode);
;
 //# sourceMappingURL=arrow-left.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=_b05d4a26._.js.map
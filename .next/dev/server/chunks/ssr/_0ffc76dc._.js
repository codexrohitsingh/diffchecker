module.exports = [
"[project]/app/text-compare/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TextCompare
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right-left.js [app-ssr] (ecmascript) <export default as ArrowRightLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$diff$2f$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/diff/libesm/diff/line.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$diff$2f$word$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/diff/libesm/diff/word.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
// ----------------------
// Toggle Component
// ----------------------
function Toggle({ checked, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>onChange(!checked),
        className: `relative w-12 h-6 rounded-full transition-colors ${checked ? 'bg-blue-600' : 'bg-slate-400'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: `absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${checked ? 'translate-x-6' : 'translate-x-0'}`
        }, void 0, false, {
            fileName: "[project]/app/text-compare/page.jsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/text-compare/page.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
function TextCompare() {
    // Raw inputs for restoring from toggles
    const [rawText1, setRawText1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [rawText2, setRawText2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [text1, setText1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [text2, setText2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [compared, setCompared] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [diffResult, setDiffResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [removeExtraLines1, setRemoveExtraLines1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [removeSpaces1, setRemoveSpaces1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [removeExtraLines2, setRemoveExtraLines2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [removeSpaces2, setRemoveSpaces2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [mergeSelections, setMergeSelections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeLine, setActiveLine] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // ----------------------
    // Clean text
    // ----------------------
    const mergeChanges = ()=>{
        if (!diffResult?.aligned) return '';
        const stripHtml = (text)=>(text || '').replace(/<[^>]*>/g, '');
        const mergedLines = diffResult.aligned.map((row, idx)=>{
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
    const mergeSingleLine = (idx, source)=>{
        setMergeSelections((prev)=>{
            const updated = [
                ...prev
            ];
            updated[idx] = source === "left" ? "left" : "right";
            return updated;
        });
        // Update text1 and text2 preview live
        setDiffResult((prev)=>{
            const updated = {
                ...prev
            };
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
    const cleanText = (text, removeLines, removeSpaces)=>{
        let result = text;
        if (removeLines) {
            result = result.split('\n').filter((line)=>line.trim() !== '').join('\n');
        }
        if (removeSpaces) {
            result = result.split('\n').map((line)=>line.replace(/^\s+/, '')).join('\n');
        }
        return result;
    };
    const handleText1Change = (value)=>{
        setRawText1(value);
        const cleaned = cleanText(value, removeExtraLines1, removeSpaces1);
        setText1(cleaned);
    };
    console.log(setText1);
    const handleText2Change = (value)=>{
        setRawText2(value);
        const cleaned = cleanText(value, removeExtraLines2, removeSpaces2);
        setText2(cleaned);
    };
    console.log(setText2);
    // ----------------------
    // Toggles
    // ----------------------
    const toggleRemoveExtraLines1 = (val)=>{
        setRemoveExtraLines1(val);
        setText1(cleanText(rawText1, val, removeSpaces1));
    };
    const toggleRemoveSpaces1 = (val)=>{
        setRemoveSpaces1(val);
        setText1(cleanText(rawText1, removeExtraLines1, val));
    };
    const toggleRemoveExtraLines2 = (val)=>{
        setRemoveExtraLines2(val);
        setText2(cleanText(rawText2, val, removeSpaces2));
    };
    const toggleRemoveSpaces2 = (val)=>{
        setRemoveSpaces2(val);
        setText2(cleanText(rawText2, removeExtraLines2, val));
    };
    // Escape HTML so pasted code doesn't execute
    const escapeHtml = (str = "")=>str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    // ----------------------
    // WORD-LEVEL HIGHLIGHTING
    // ----------------------
    const highlightWords = (oldText, newText)=>{
        const diffs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$diff$2f$word$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["diffWords"])(oldText, newText);
        return {
            left: diffs.map((part)=>part.removed ? `<span class="bg-red-300 dark:bg-red-700">${escapeHtml(part.value)}</span>` : !part.added ? escapeHtml(part.value) : "").join(""),
            right: diffs.map((part)=>part.added ? `<span class="bg-green-300 dark:bg-green-700">${escapeHtml(part.value)}</span>` : !part.removed ? escapeHtml(part.value) : "").join("")
        };
    };
    // ----------------------
    // Compare
    // ----------------------
    const normalizeInput = (text, removeLines, removeSpaces)=>{
        let cleaned = cleanText(text, removeLines, removeSpaces);
        // Remove leading and trailing blank lines
        cleaned = cleaned.replace(/^\s*\n/, ''); // remove single leading blank
        cleaned = cleaned.replace(/^\s*\n+/, ''); // remove multiple leading blank lines
        cleaned = cleaned.replace(/\n+$/, ''); // trailing blank lines
        // Remove trailing space at the end of each line
        cleaned = cleaned.split('\n').map((line)=>line.replace(/\s+$/, '')).join('\n');
        return cleaned;
    };
    const compareTexts = ()=>{
        if (!text1 || !text2) return;
        const clean1 = normalizeInput(text1, removeExtraLines1, removeSpaces1);
        const clean2 = normalizeInput(text2, removeExtraLines2, removeSpaces2);
        const diffs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$diff$2f$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["diffLines"])(clean1, clean2);
        const aligned = [];
        let i = 0;
        while(i < diffs.length){
            const block = diffs[i];
            // ---- CASE 1: unchanged ----
            if (!block.added && !block.removed) {
                const lines = block.value.split('\n');
                if (lines[lines.length - 1] === "") lines.pop();
                lines.forEach((line)=>{
                    const words = highlightWords(line, line);
                    aligned.push({
                        left: {
                            text: words.left,
                            type: "unchanged"
                        },
                        right: {
                            text: words.right,
                            type: "unchanged"
                        }
                    });
                });
                i++;
                continue;
            }
            // ---- CASE 2: removed + added pair (modified line) ----
            if (block.removed && i + 1 < diffs.length && diffs[i + 1].added) {
                const removedLines = block.value.split("\n");
                const addedLines = diffs[i + 1].value.split("\n");
                if (removedLines[removedLines.length - 1] === "") removedLines.pop();
                if (addedLines[addedLines.length - 1] === "") addedLines.pop();
                const maxLen = Math.max(removedLines.length, addedLines.length);
                for(let j = 0; j < maxLen; j++){
                    const leftLine = removedLines[j] || "";
                    const rightLine = addedLines[j] || "";
                    const words = highlightWords(leftLine, rightLine);
                    aligned.push({
                        left: {
                            text: words.left,
                            type: "modified-left"
                        },
                        right: {
                            text: words.right,
                            type: "modified-right"
                        }
                    });
                }
                i += 2;
                continue;
            }
            // ---- CASE 3: only removed ----
            if (block.removed) {
                const lines = block.value.split("\n");
                if (lines[lines.length - 1] === "") lines.pop();
                lines.forEach((line)=>{
                    const words = highlightWords(line, "");
                    aligned.push({
                        left: {
                            text: words.left,
                            type: "removed"
                        },
                        right: {
                            text: "",
                            type: "gap"
                        }
                    });
                });
                i++;
                continue;
            }
            // ---- CASE 4: only added ----
            if (block.added) {
                const lines = block.value.split("\n");
                if (lines[lines.length - 1] === "") lines.pop();
                lines.forEach((line)=>{
                    const words = highlightWords("", line);
                    aligned.push({
                        left: {
                            text: "",
                            type: "gap"
                        },
                        right: {
                            text: words.right,
                            type: "added"
                        }
                    });
                });
                i++;
                continue;
            }
        }
        // Save results
        setDiffResult({
            aligned
        });
        setMergeSelections(aligned.map((row)=>row.left.type === "unchanged" ? "unchanged" : "left"));
        setCompared(true);
    };
    // ----------------------
    // Swap & Reset
    // ----------------------
    const swapTexts = ()=>{
        const tempRaw = rawText1;
        setRawText1(rawText2);
        setRawText2(tempRaw);
        const temp = text1;
        setText1(text2);
        setText2(temp);
        setCompared(false);
        setDiffResult(null);
    };
    const handleReset = ()=>{
        setRawText1('');
        setRawText2('');
        setText1('');
        setText2('');
        setDiffResult(null);
        setCompared(false);
    };
    // ----------------------
    // Count lines
    // ----------------------
    const countLines = (aligned, side, type)=>{
        return aligned.filter((row)=>side === 'left' ? row.left.type === type : row.right.type === type).length;
    };
    // ----------------------
    // Render with HTML highlight
    // ----------------------
    const renderAlignedColumn = (aligned, side)=>{
        const getGroupColor = (type)=>{
            const leftHighlight = type === "removed" || type === "added_gap";
            const rightHighlight = type === "added" || type === "removed_gap";
            const highlight = side === "left" ? leftHighlight : rightHighlight;
            if (!highlight) return "none";
            return side === "left" ? "red" : "green";
        };
        let groups = [];
        let current = null;
        // Build groups
        aligned.forEach((row)=>{
            const cell = side === "left" ? row.left : row.right;
            const color = getGroupColor(cell.type);
            if (!current || current.color !== color) {
                if (current) groups.push(current);
                current = {
                    color,
                    rows: [
                        cell
                    ]
                };
            } else {
                current.rows.push(cell);
            }
        });
        if (current) groups.push(current);
        let lineCounter = 0;
        const groupClass = (color)=>{
            if (color === "red") return "border border-red-400 bg-red-50 dark:border-red-700 dark:bg-red-900/30 rounded";
            if (color === "green") return "border border-green-500 bg-green-50 dark:border-green-700 dark:bg-green-900/30 rounded";
            return "";
        };
        return groups.map((group, gIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: group.color === "none" ? "" : `${groupClass(group.color)} my-1 py-0.5`,
                children: group.rows.map((cell, idx)=>{
                    lineCounter++; // index inside this column
                    const globalIdx = lineCounter - 1; // index inside aligned[]
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block min-w-[5ch] text-right pr-2 text-slate-400 dark:text-slate-500 select-none",
                                        children: lineCounter
                                    }, void 0, false, {
                                        fileName: "[project]/app/text-compare/page.jsx",
                                        lineNumber: 403,
                                        columnNumber: 5
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        onClick: ()=>{
                                            if (cell.type !== "unchanged") setActiveLine(globalIdx);
                                        },
                                        className: `
        text-slate-700 dark:text-slate-300 px-1 flex-1 cursor-pointer
        ${cell.type !== "unchanged" ? "hover:bg-yellow-200 dark:hover:bg-yellow-700" : ""}
      `,
                                        dangerouslySetInnerHTML: {
                                            __html: cell.text || ""
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/text-compare/page.jsx",
                                        lineNumber: 407,
                                        columnNumber: 5
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/text-compare/page.jsx",
                                lineNumber: 402,
                                columnNumber: 3
                            }, this),
                            activeLine === globalIdx && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 ml-[5ch] flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>mergeSingleLine(globalIdx, "left"),
                                        className: "px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700",
                                        children: "Merge from Text 1"
                                    }, void 0, false, {
                                        fileName: "[project]/app/text-compare/page.jsx",
                                        lineNumber: 422,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>mergeSingleLine(globalIdx, "right"),
                                        className: "px-2 py-1 text-xs bg-green-600 text-white rounded hover:bg-green-700",
                                        children: "Merge from Text 2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/text-compare/page.jsx",
                                        lineNumber: 429,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/text-compare/page.jsx",
                                lineNumber: 421,
                                columnNumber: 5
                            }, this)
                        ]
                    }, `${gIdx}-${idx}`, true, {
                        fileName: "[project]/app/text-compare/page.jsx",
                        lineNumber: 399,
                        columnNumber: 9
                    }, this);
                })
            }, gIdx, false, {
                fileName: "[project]/app/text-compare/page.jsx",
                lineNumber: 393,
                columnNumber: 5
            }, this));
    };
    // ----------------------
    // Input scrolling sync
    // ----------------------
    const container1Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const container2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lineNumbers1Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lineNumbers2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lineNumbers = (text)=>text.split('\n').map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "leading-5",
                children: idx + 1
            }, idx, false, {
                fileName: "[project]/app/text-compare/page.jsx",
                lineNumber: 457,
                columnNumber: 7
            }, this));
    const syncScroll = (containerRef, lineNumbersRef)=>{
        if (containerRef.current && lineNumbersRef.current) {
            lineNumbersRef.current.scrollTop = containerRef.current.scrollTop;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll1 = ()=>syncScroll(container1Ref, lineNumbers1Ref);
        const handleScroll2 = ()=>syncScroll(container2Ref, lineNumbers2Ref);
        const c1 = container1Ref.current;
        const c2 = container2Ref.current;
        if (c1) c1.addEventListener('scroll', handleScroll1);
        if (c2) c2.addEventListener('scroll', handleScroll2);
        return ()=>{
            if (c1) c1.removeEventListener('scroll', handleScroll1);
            if (c2) c2.removeEventListener('scroll', handleScroll2);
        };
    }, []);
    // ----------------------
    // UI
    // ----------------------
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen  from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 py-8",
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
                            fileName: "[project]/app/text-compare/page.jsx",
                            lineNumber: 495,
                            columnNumber: 11
                        }, this),
                        "Back to Home"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/text-compare/page.jsx",
                    lineNumber: 491,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-6 mb-6 shadow-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold text-slate-900 dark:text-white mb-4",
                            children: "Cleaning Options"
                        }, void 0, false, {
                            fileName: "[project]/app/text-compare/page.jsx",
                            lineNumber: 510,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center gap-3 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                            checked: removeExtraLines1,
                                            onChange: toggleRemoveExtraLines1
                                        }, void 0, false, {
                                            fileName: "[project]/app/text-compare/page.jsx",
                                            lineNumber: 516,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-slate-700 dark:text-slate-300",
                                            children: "Remove extra lines (Text 1)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/text-compare/page.jsx",
                                            lineNumber: 517,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/text-compare/page.jsx",
                                    lineNumber: 515,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center gap-3 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                            checked: removeSpaces1,
                                            onChange: toggleRemoveSpaces1
                                        }, void 0, false, {
                                            fileName: "[project]/app/text-compare/page.jsx",
                                            lineNumber: 523,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-slate-700 dark:text-slate-300",
                                            children: "Remove spaces (Text 1)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/text-compare/page.jsx",
                                            lineNumber: 524,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/text-compare/page.jsx",
                                    lineNumber: 522,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center gap-3 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                            checked: removeExtraLines2,
                                            onChange: toggleRemoveExtraLines2
                                        }, void 0, false, {
                                            fileName: "[project]/app/text-compare/page.jsx",
                                            lineNumber: 530,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-slate-700 dark:text-slate-300",
                                            children: "Remove extra lines (Text 2)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/text-compare/page.jsx",
                                            lineNumber: 531,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/text-compare/page.jsx",
                                    lineNumber: 529,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center gap-3 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                            checked: removeSpaces2,
                                            onChange: toggleRemoveSpaces2
                                        }, void 0, false, {
                                            fileName: "[project]/app/text-compare/page.jsx",
                                            lineNumber: 537,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-slate-700 dark:text-slate-300",
                                            children: "Remove spaces (Text 2)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/text-compare/page.jsx",
                                            lineNumber: 538,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/text-compare/page.jsx",
                                    lineNumber: 536,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/text-compare/page.jsx",
                            lineNumber: 514,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/text-compare/page.jsx",
                    lineNumber: 509,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-sm mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-slate-900 dark:text-white",
                                                    children: "Text 1"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/text-compare/page.jsx",
                                                    lineNumber: 552,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-slate-500 dark:text-slate-400",
                                                    children: [
                                                        text1.length,
                                                        " characters"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/text-compare/page.jsx",
                                                    lineNumber: 555,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/text-compare/page.jsx",
                                            lineNumber: 551,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    ref: lineNumbers1Ref,
                                                    className: "absolute left-0 top-0  bottom-0 w-10 bg-slate-100 dark:bg-slate-800 text-right pr-2 text-sm font-mono text-slate-500 dark:text-slate-400 select-none overflow-hidden pt-4",
                                                    children: lineNumbers(text1)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/text-compare/page.jsx",
                                                    lineNumber: 561,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    ref: container1Ref,
                                                    value: text1,
                                                    onChange: (e)=>handleText1Change(e.target.value),
                                                    placeholder: "Paste first text here...",
                                                    className: "w-full h-80 p-4 pl-12 text-sm font-mono bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-0 focus:border-slate-300 dark:focus:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 resize-none transition-colors"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/text-compare/page.jsx",
                                                    lineNumber: 568,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/text-compare/page.jsx",
                                            lineNumber: 560,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/text-compare/page.jsx",
                                    lineNumber: 550,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-slate-900 dark:text-white",
                                                    children: "Text 2"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/text-compare/page.jsx",
                                                    lineNumber: 581,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-slate-500 dark:text-slate-400",
                                                    children: [
                                                        text2.length,
                                                        " characters"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/text-compare/page.jsx",
                                                    lineNumber: 584,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/text-compare/page.jsx",
                                            lineNumber: 580,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    ref: lineNumbers2Ref,
                                                    className: "absolute left-0 top-0 bottom-0 w-10 bg-slate-100 dark:bg-slate-800 text-right pr-2 text-sm font-mono text-slate-500 dark:text-slate-400 select-none overflow-hidden pt-4",
                                                    children: lineNumbers(text2)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/text-compare/page.jsx",
                                                    lineNumber: 590,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    ref: container2Ref,
                                                    value: text2,
                                                    onChange: (e)=>handleText2Change(e.target.value),
                                                    placeholder: "Paste second text here...",
                                                    className: "w-full h-80 p-4 pl-12 text-sm font-mono bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-0 focus:border-slate-300 dark:focus:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 resize-none transition-colors"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/text-compare/page.jsx",
                                                    lineNumber: 597,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/text-compare/page.jsx",
                                            lineNumber: 589,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/text-compare/page.jsx",
                                    lineNumber: 579,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/text-compare/page.jsx",
                            lineNumber: 547,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 flex-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: compareTexts,
                                    disabled: !text1 || !text2,
                                    className: "px-6 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors shadow-sm",
                                    children: "Compare Texts"
                                }, void 0, false, {
                                    fileName: "[project]/app/text-compare/page.jsx",
                                    lineNumber: 610,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: swapTexts,
                                    disabled: !text1 || !text2,
                                    className: "flex items-center gap-2 px-6 py-2.5 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-slate-900 dark:text-slate-100 font-medium rounded-lg transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightLeft$3e$__["ArrowRightLeft"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/text-compare/page.jsx",
                                            lineNumber: 623,
                                            columnNumber: 15
                                        }, this),
                                        "Swap"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/text-compare/page.jsx",
                                    lineNumber: 618,
                                    columnNumber: 13
                                }, this),
                                compared && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleReset,
                                    className: "flex items-center gap-2 px-6 py-2.5 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 font-medium rounded-lg transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/text-compare/page.jsx",
                                            lineNumber: 632,
                                            columnNumber: 17
                                        }, this),
                                        "Reset"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/text-compare/page.jsx",
                                    lineNumber: 628,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/text-compare/page.jsx",
                            lineNumber: 609,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/text-compare/page.jsx",
                    lineNumber: 546,
                    columnNumber: 9
                }, this),
                compared && diffResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-slate-900 dark:text-white mb-6",
                            children: "Comparison Results"
                        }, void 0, false, {
                            fileName: "[project]/app/text-compare/page.jsx",
                            lineNumber: 643,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-slate-900 dark:text-white mb-3",
                                            children: "Text 1"
                                        }, void 0, false, {
                                            fileName: "[project]/app/text-compare/page.jsx",
                                            lineNumber: 659,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg p-4 min-h-64 font-mono text-sm leading-relaxed break-words whitespace-pre-wrap",
                                            children: renderAlignedColumn(diffResult.aligned, 'left')
                                        }, void 0, false, {
                                            fileName: "[project]/app/text-compare/page.jsx",
                                            lineNumber: 662,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/text-compare/page.jsx",
                                    lineNumber: 658,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-slate-900 dark:text-white mb-3",
                                            children: "Text 2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/text-compare/page.jsx",
                                            lineNumber: 668,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg p-4 min-h-64 font-mono text-sm leading-relaxed break-words whitespace-pre-wrap",
                                            children: renderAlignedColumn(diffResult.aligned, 'right')
                                        }, void 0, false, {
                                            fileName: "[project]/app/text-compare/page.jsx",
                                            lineNumber: 671,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/text-compare/page.jsx",
                                    lineNumber: 667,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/text-compare/page.jsx",
                            lineNumber: 657,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 grid grid-cols-3 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-50 dark:bg-slate-800 rounded-lg p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-medium text-slate-500 dark:text-slate-400 mb-1",
                                            children: "Removed"
                                        }, void 0, false, {
                                            fileName: "[project]/app/text-compare/page.jsx",
                                            lineNumber: 680,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-bold text-red-600 dark:text-red-400",
                                            children: countLines(diffResult.aligned, 'left', 'removed')
                                        }, void 0, false, {
                                            fileName: "[project]/app/text-compare/page.jsx",
                                            lineNumber: 683,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/text-compare/page.jsx",
                                    lineNumber: 679,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-50 dark:bg-slate-800 rounded-lg p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-medium text-slate-500 dark:text-slate-400 mb-1",
                                            children: "Added"
                                        }, void 0, false, {
                                            fileName: "[project]/app/text-compare/page.jsx",
                                            lineNumber: 689,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-bold text-green-600 dark:text-green-400",
                                            children: countLines(diffResult.aligned, 'right', 'added')
                                        }, void 0, false, {
                                            fileName: "[project]/app/text-compare/page.jsx",
                                            lineNumber: 692,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/text-compare/page.jsx",
                                    lineNumber: 688,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-50 dark:bg-slate-800 rounded-lg p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-medium text-slate-500 dark:text-slate-400 mb-1",
                                            children: "Identical"
                                        }, void 0, false, {
                                            fileName: "[project]/app/text-compare/page.jsx",
                                            lineNumber: 698,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-bold text-blue-600 dark:text-blue-400",
                                            children: countLines(diffResult.aligned, 'left', 'unchanged')
                                        }, void 0, false, {
                                            fileName: "[project]/app/text-compare/page.jsx",
                                            lineNumber: 701,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/text-compare/page.jsx",
                                    lineNumber: 697,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/text-compare/page.jsx",
                            lineNumber: 678,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/text-compare/page.jsx",
                    lineNumber: 642,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/text-compare/page.jsx",
            lineNumber: 489,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/text-compare/page.jsx",
        lineNumber: 488,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>RotateCcw
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
            key: "1357e3"
        }
    ],
    [
        "path",
        {
            d: "M3 3v5h5",
            key: "1xhq8a"
        }
    ]
];
const RotateCcw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("rotate-ccw", __iconNode);
;
 //# sourceMappingURL=rotate-ccw.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RotateCcw",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript)");
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
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-right-left.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>ArrowRightLeft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m16 3 4 4-4 4",
            key: "1x1c3m"
        }
    ],
    [
        "path",
        {
            d: "M20 7H4",
            key: "zbl0bi"
        }
    ],
    [
        "path",
        {
            d: "m8 21-4-4 4-4",
            key: "h9nckh"
        }
    ],
    [
        "path",
        {
            d: "M4 17h16",
            key: "g4d7ey"
        }
    ]
];
const ArrowRightLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("arrow-right-left", __iconNode);
;
 //# sourceMappingURL=arrow-right-left.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-right-left.js [app-ssr] (ecmascript) <export default as ArrowRightLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowRightLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right-left.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/diff/libesm/diff/base.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Diff
]);
class Diff {
    diff(oldStr, newStr, // Type below is not accurate/complete - see above for full possibilities - but it compiles
    options = {}) {
        let callback;
        if (typeof options === 'function') {
            callback = options;
            options = {};
        } else if ('callback' in options) {
            callback = options.callback;
        }
        // Allow subclasses to massage the input prior to running
        const oldString = this.castInput(oldStr, options);
        const newString = this.castInput(newStr, options);
        const oldTokens = this.removeEmpty(this.tokenize(oldString, options));
        const newTokens = this.removeEmpty(this.tokenize(newString, options));
        return this.diffWithOptionsObj(oldTokens, newTokens, options, callback);
    }
    diffWithOptionsObj(oldTokens, newTokens, options, callback) {
        var _a;
        const done = (value)=>{
            value = this.postProcess(value, options);
            if (callback) {
                setTimeout(function() {
                    callback(value);
                }, 0);
                return undefined;
            } else {
                return value;
            }
        };
        const newLen = newTokens.length, oldLen = oldTokens.length;
        let editLength = 1;
        let maxEditLength = newLen + oldLen;
        if (options.maxEditLength != null) {
            maxEditLength = Math.min(maxEditLength, options.maxEditLength);
        }
        const maxExecutionTime = (_a = options.timeout) !== null && _a !== void 0 ? _a : Infinity;
        const abortAfterTimestamp = Date.now() + maxExecutionTime;
        const bestPath = [
            {
                oldPos: -1,
                lastComponent: undefined
            }
        ];
        // Seed editLength = 0, i.e. the content starts with the same values
        let newPos = this.extractCommon(bestPath[0], newTokens, oldTokens, 0, options);
        if (bestPath[0].oldPos + 1 >= oldLen && newPos + 1 >= newLen) {
            // Identity per the equality and tokenizer
            return done(this.buildValues(bestPath[0].lastComponent, newTokens, oldTokens));
        }
        // Once we hit the right edge of the edit graph on some diagonal k, we can
        // definitely reach the end of the edit graph in no more than k edits, so
        // there's no point in considering any moves to diagonal k+1 any more (from
        // which we're guaranteed to need at least k+1 more edits).
        // Similarly, once we've reached the bottom of the edit graph, there's no
        // point considering moves to lower diagonals.
        // We record this fact by setting minDiagonalToConsider and
        // maxDiagonalToConsider to some finite value once we've hit the edge of
        // the edit graph.
        // This optimization is not faithful to the original algorithm presented in
        // Myers's paper, which instead pointlessly extends D-paths off the end of
        // the edit graph - see page 7 of Myers's paper which notes this point
        // explicitly and illustrates it with a diagram. This has major performance
        // implications for some common scenarios. For instance, to compute a diff
        // where the new text simply appends d characters on the end of the
        // original text of length n, the true Myers algorithm will take O(n+d^2)
        // time while this optimization needs only O(n+d) time.
        let minDiagonalToConsider = -Infinity, maxDiagonalToConsider = Infinity;
        // Main worker method. checks all permutations of a given edit length for acceptance.
        const execEditLength = ()=>{
            for(let diagonalPath = Math.max(minDiagonalToConsider, -editLength); diagonalPath <= Math.min(maxDiagonalToConsider, editLength); diagonalPath += 2){
                let basePath;
                const removePath = bestPath[diagonalPath - 1], addPath = bestPath[diagonalPath + 1];
                if (removePath) {
                    // No one else is going to attempt to use this value, clear it
                    // @ts-expect-error - perf optimisation. This type-violating value will never be read.
                    bestPath[diagonalPath - 1] = undefined;
                }
                let canAdd = false;
                if (addPath) {
                    // what newPos will be after we do an insertion:
                    const addPathNewPos = addPath.oldPos - diagonalPath;
                    canAdd = addPath && 0 <= addPathNewPos && addPathNewPos < newLen;
                }
                const canRemove = removePath && removePath.oldPos + 1 < oldLen;
                if (!canAdd && !canRemove) {
                    // If this path is a terminal then prune
                    // @ts-expect-error - perf optimisation. This type-violating value will never be read.
                    bestPath[diagonalPath] = undefined;
                    continue;
                }
                // Select the diagonal that we want to branch from. We select the prior
                // path whose position in the old string is the farthest from the origin
                // and does not pass the bounds of the diff graph
                if (!canRemove || canAdd && removePath.oldPos < addPath.oldPos) {
                    basePath = this.addToPath(addPath, true, false, 0, options);
                } else {
                    basePath = this.addToPath(removePath, false, true, 1, options);
                }
                newPos = this.extractCommon(basePath, newTokens, oldTokens, diagonalPath, options);
                if (basePath.oldPos + 1 >= oldLen && newPos + 1 >= newLen) {
                    // If we have hit the end of both strings, then we are done
                    return done(this.buildValues(basePath.lastComponent, newTokens, oldTokens)) || true;
                } else {
                    bestPath[diagonalPath] = basePath;
                    if (basePath.oldPos + 1 >= oldLen) {
                        maxDiagonalToConsider = Math.min(maxDiagonalToConsider, diagonalPath - 1);
                    }
                    if (newPos + 1 >= newLen) {
                        minDiagonalToConsider = Math.max(minDiagonalToConsider, diagonalPath + 1);
                    }
                }
            }
            editLength++;
        };
        // Performs the length of edit iteration. Is a bit fugly as this has to support the
        // sync and async mode which is never fun. Loops over execEditLength until a value
        // is produced, or until the edit length exceeds options.maxEditLength (if given),
        // in which case it will return undefined.
        if (callback) {
            (function exec() {
                setTimeout(function() {
                    if (editLength > maxEditLength || Date.now() > abortAfterTimestamp) {
                        return callback(undefined);
                    }
                    if (!execEditLength()) {
                        exec();
                    }
                }, 0);
            })();
        } else {
            while(editLength <= maxEditLength && Date.now() <= abortAfterTimestamp){
                const ret = execEditLength();
                if (ret) {
                    return ret;
                }
            }
        }
    }
    addToPath(path, added, removed, oldPosInc, options) {
        const last = path.lastComponent;
        if (last && !options.oneChangePerToken && last.added === added && last.removed === removed) {
            return {
                oldPos: path.oldPos + oldPosInc,
                lastComponent: {
                    count: last.count + 1,
                    added: added,
                    removed: removed,
                    previousComponent: last.previousComponent
                }
            };
        } else {
            return {
                oldPos: path.oldPos + oldPosInc,
                lastComponent: {
                    count: 1,
                    added: added,
                    removed: removed,
                    previousComponent: last
                }
            };
        }
    }
    extractCommon(basePath, newTokens, oldTokens, diagonalPath, options) {
        const newLen = newTokens.length, oldLen = oldTokens.length;
        let oldPos = basePath.oldPos, newPos = oldPos - diagonalPath, commonCount = 0;
        while(newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(oldTokens[oldPos + 1], newTokens[newPos + 1], options)){
            newPos++;
            oldPos++;
            commonCount++;
            if (options.oneChangePerToken) {
                basePath.lastComponent = {
                    count: 1,
                    previousComponent: basePath.lastComponent,
                    added: false,
                    removed: false
                };
            }
        }
        if (commonCount && !options.oneChangePerToken) {
            basePath.lastComponent = {
                count: commonCount,
                previousComponent: basePath.lastComponent,
                added: false,
                removed: false
            };
        }
        basePath.oldPos = oldPos;
        return newPos;
    }
    equals(left, right, options) {
        if (options.comparator) {
            return options.comparator(left, right);
        } else {
            return left === right || !!options.ignoreCase && left.toLowerCase() === right.toLowerCase();
        }
    }
    removeEmpty(array) {
        const ret = [];
        for(let i = 0; i < array.length; i++){
            if (array[i]) {
                ret.push(array[i]);
            }
        }
        return ret;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    castInput(value, options) {
        return value;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    tokenize(value, options) {
        return Array.from(value);
    }
    join(chars) {
        // Assumes ValueT is string, which is the case for most subclasses.
        // When it's false, e.g. in diffArrays, this method needs to be overridden (e.g. with a no-op)
        // Yes, the casts are verbose and ugly, because this pattern - of having the base class SORT OF
        // assume tokens and values are strings, but not completely - is weird and janky.
        return chars.join('');
    }
    postProcess(changeObjects, // eslint-disable-next-line @typescript-eslint/no-unused-vars
    options) {
        return changeObjects;
    }
    get useLongestToken() {
        return false;
    }
    buildValues(lastComponent, newTokens, oldTokens) {
        // First we convert our linked list of components in reverse order to an
        // array in the right order:
        const components = [];
        let nextComponent;
        while(lastComponent){
            components.push(lastComponent);
            nextComponent = lastComponent.previousComponent;
            delete lastComponent.previousComponent;
            lastComponent = nextComponent;
        }
        components.reverse();
        const componentLen = components.length;
        let componentPos = 0, newPos = 0, oldPos = 0;
        for(; componentPos < componentLen; componentPos++){
            const component = components[componentPos];
            if (!component.removed) {
                if (!component.added && this.useLongestToken) {
                    let value = newTokens.slice(newPos, newPos + component.count);
                    value = value.map(function(value, i) {
                        const oldValue = oldTokens[oldPos + i];
                        return oldValue.length > value.length ? oldValue : value;
                    });
                    component.value = this.join(value);
                } else {
                    component.value = this.join(newTokens.slice(newPos, newPos + component.count));
                }
                newPos += component.count;
                // Common case
                if (!component.added) {
                    oldPos += component.count;
                }
            } else {
                component.value = this.join(oldTokens.slice(oldPos, oldPos + component.count));
                oldPos += component.count;
            }
        }
        return components;
    }
}
}),
"[project]/node_modules/diff/libesm/util/params.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateOptions",
    ()=>generateOptions
]);
function generateOptions(options, defaults) {
    if (typeof options === 'function') {
        defaults.callback = options;
    } else if (options) {
        for(const name in options){
            /* istanbul ignore else */ if (Object.prototype.hasOwnProperty.call(options, name)) {
                defaults[name] = options[name];
            }
        }
    }
    return defaults;
}
}),
"[project]/node_modules/diff/libesm/diff/line.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "diffLines",
    ()=>diffLines,
    "diffTrimmedLines",
    ()=>diffTrimmedLines,
    "lineDiff",
    ()=>lineDiff,
    "tokenize",
    ()=>tokenize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$diff$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/diff/libesm/diff/base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$params$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/diff/libesm/util/params.js [app-ssr] (ecmascript)");
;
;
class LineDiff extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$diff$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    constructor(){
        super(...arguments);
        this.tokenize = tokenize;
    }
    equals(left, right, options) {
        // If we're ignoring whitespace, we need to normalise lines by stripping
        // whitespace before checking equality. (This has an annoying interaction
        // with newlineIsToken that requires special handling: if newlines get their
        // own token, then we DON'T want to trim the *newline* tokens down to empty
        // strings, since this would cause us to treat whitespace-only line content
        // as equal to a separator between lines, which would be weird and
        // inconsistent with the documented behavior of the options.)
        if (options.ignoreWhitespace) {
            if (!options.newlineIsToken || !left.includes('\n')) {
                left = left.trim();
            }
            if (!options.newlineIsToken || !right.includes('\n')) {
                right = right.trim();
            }
        } else if (options.ignoreNewlineAtEof && !options.newlineIsToken) {
            if (left.endsWith('\n')) {
                left = left.slice(0, -1);
            }
            if (right.endsWith('\n')) {
                right = right.slice(0, -1);
            }
        }
        return super.equals(left, right, options);
    }
}
const lineDiff = new LineDiff();
function diffLines(oldStr, newStr, options) {
    return lineDiff.diff(oldStr, newStr, options);
}
function diffTrimmedLines(oldStr, newStr, options) {
    options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$params$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateOptions"])(options, {
        ignoreWhitespace: true
    });
    return lineDiff.diff(oldStr, newStr, options);
}
function tokenize(value, options) {
    if (options.stripTrailingCr) {
        // remove one \r before \n to match GNU diff's --strip-trailing-cr behavior
        value = value.replace(/\r\n/g, '\n');
    }
    const retLines = [], linesAndNewlines = value.split(/(\n|\r\n)/);
    // Ignore the final empty token that occurs if the string ends with a new line
    if (!linesAndNewlines[linesAndNewlines.length - 1]) {
        linesAndNewlines.pop();
    }
    // Merge the content and line separators into single tokens
    for(let i = 0; i < linesAndNewlines.length; i++){
        const line = linesAndNewlines[i];
        if (i % 2 && !options.newlineIsToken) {
            retLines[retLines.length - 1] += line;
        } else {
            retLines.push(line);
        }
    }
    return retLines;
}
}),
"[project]/node_modules/diff/libesm/util/string.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasOnlyUnixLineEndings",
    ()=>hasOnlyUnixLineEndings,
    "hasOnlyWinLineEndings",
    ()=>hasOnlyWinLineEndings,
    "leadingWs",
    ()=>leadingWs,
    "longestCommonPrefix",
    ()=>longestCommonPrefix,
    "longestCommonSuffix",
    ()=>longestCommonSuffix,
    "maximumOverlap",
    ()=>maximumOverlap,
    "removePrefix",
    ()=>removePrefix,
    "removeSuffix",
    ()=>removeSuffix,
    "replacePrefix",
    ()=>replacePrefix,
    "replaceSuffix",
    ()=>replaceSuffix,
    "trailingWs",
    ()=>trailingWs
]);
function longestCommonPrefix(str1, str2) {
    let i;
    for(i = 0; i < str1.length && i < str2.length; i++){
        if (str1[i] != str2[i]) {
            return str1.slice(0, i);
        }
    }
    return str1.slice(0, i);
}
function longestCommonSuffix(str1, str2) {
    let i;
    // Unlike longestCommonPrefix, we need a special case to handle all scenarios
    // where we return the empty string since str1.slice(-0) will return the
    // entire string.
    if (!str1 || !str2 || str1[str1.length - 1] != str2[str2.length - 1]) {
        return '';
    }
    for(i = 0; i < str1.length && i < str2.length; i++){
        if (str1[str1.length - (i + 1)] != str2[str2.length - (i + 1)]) {
            return str1.slice(-i);
        }
    }
    return str1.slice(-i);
}
function replacePrefix(string, oldPrefix, newPrefix) {
    if (string.slice(0, oldPrefix.length) != oldPrefix) {
        throw Error(`string ${JSON.stringify(string)} doesn't start with prefix ${JSON.stringify(oldPrefix)}; this is a bug`);
    }
    return newPrefix + string.slice(oldPrefix.length);
}
function replaceSuffix(string, oldSuffix, newSuffix) {
    if (!oldSuffix) {
        return string + newSuffix;
    }
    if (string.slice(-oldSuffix.length) != oldSuffix) {
        throw Error(`string ${JSON.stringify(string)} doesn't end with suffix ${JSON.stringify(oldSuffix)}; this is a bug`);
    }
    return string.slice(0, -oldSuffix.length) + newSuffix;
}
function removePrefix(string, oldPrefix) {
    return replacePrefix(string, oldPrefix, '');
}
function removeSuffix(string, oldSuffix) {
    return replaceSuffix(string, oldSuffix, '');
}
function maximumOverlap(string1, string2) {
    return string2.slice(0, overlapCount(string1, string2));
}
// Nicked from https://stackoverflow.com/a/60422853/1709587
function overlapCount(a, b) {
    // Deal with cases where the strings differ in length
    let startA = 0;
    if (a.length > b.length) {
        startA = a.length - b.length;
    }
    let endB = b.length;
    if (a.length < b.length) {
        endB = a.length;
    }
    // Create a back-reference for each index
    //   that should be followed in case of a mismatch.
    //   We only need B to make these references:
    const map = Array(endB);
    let k = 0; // Index that lags behind j
    map[0] = 0;
    for(let j = 1; j < endB; j++){
        if (b[j] == b[k]) {
            map[j] = map[k]; // skip over the same character (optional optimisation)
        } else {
            map[j] = k;
        }
        while(k > 0 && b[j] != b[k]){
            k = map[k];
        }
        if (b[j] == b[k]) {
            k++;
        }
    }
    // Phase 2: use these references while iterating over A
    k = 0;
    for(let i = startA; i < a.length; i++){
        while(k > 0 && a[i] != b[k]){
            k = map[k];
        }
        if (a[i] == b[k]) {
            k++;
        }
    }
    return k;
}
function hasOnlyWinLineEndings(string) {
    return string.includes('\r\n') && !string.startsWith('\n') && !string.match(/[^\r]\n/);
}
function hasOnlyUnixLineEndings(string) {
    return !string.includes('\r\n') && string.includes('\n');
}
function trailingWs(string) {
    // Yes, this looks overcomplicated and dumb - why not replace the whole function with
    //     return string match(/\s*$/)[0]
    // you ask? Because:
    // 1. the trap described at https://markamery.com/blog/quadratic-time-regexes/ would mean doing
    //    this would cause this function to take O(n²) time in the worst case (specifically when
    //    there is a massive run of NON-TRAILING whitespace in `string`), and
    // 2. the fix proposed in the same blog post, of using a negative lookbehind, is incompatible
    //    with old Safari versions that we'd like to not break if possible (see
    //    https://github.com/kpdecker/jsdiff/pull/550)
    // It feels absurd to do this with an explicit loop instead of a regex, but I really can't see a
    // better way that doesn't result in broken behaviour.
    let i;
    for(i = string.length - 1; i >= 0; i--){
        if (!string[i].match(/\s/)) {
            break;
        }
    }
    return string.substring(i + 1);
}
function leadingWs(string) {
    // Thankfully the annoying considerations described in trailingWs don't apply here:
    const match = string.match(/^\s*/);
    return match ? match[0] : '';
}
}),
"[project]/node_modules/diff/libesm/diff/word.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "diffWords",
    ()=>diffWords,
    "diffWordsWithSpace",
    ()=>diffWordsWithSpace,
    "wordDiff",
    ()=>wordDiff,
    "wordsWithSpaceDiff",
    ()=>wordsWithSpaceDiff
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$diff$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/diff/libesm/diff/base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/diff/libesm/util/string.js [app-ssr] (ecmascript)");
;
;
// Based on https://en.wikipedia.org/wiki/Latin_script_in_Unicode
//
// Ranges and exceptions:
// Latin-1 Supplement, 0080–00FF
//  - U+00D7  × Multiplication sign
//  - U+00F7  ÷ Division sign
// Latin Extended-A, 0100–017F
// Latin Extended-B, 0180–024F
// IPA Extensions, 0250–02AF
// Spacing Modifier Letters, 02B0–02FF
//  - U+02C7  ˇ &#711;  Caron
//  - U+02D8  ˘ &#728;  Breve
//  - U+02D9  ˙ &#729;  Dot Above
//  - U+02DA  ˚ &#730;  Ring Above
//  - U+02DB  ˛ &#731;  Ogonek
//  - U+02DC  ˜ &#732;  Small Tilde
//  - U+02DD  ˝ &#733;  Double Acute Accent
// Latin Extended Additional, 1E00–1EFF
const extendedWordChars = 'a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}';
// Each token is one of the following:
// - A punctuation mark plus the surrounding whitespace
// - A word plus the surrounding whitespace
// - Pure whitespace (but only in the special case where this the entire text
//   is just whitespace)
//
// We have to include surrounding whitespace in the tokens because the two
// alternative approaches produce horribly broken results:
// * If we just discard the whitespace, we can't fully reproduce the original
//   text from the sequence of tokens and any attempt to render the diff will
//   get the whitespace wrong.
// * If we have separate tokens for whitespace, then in a typical text every
//   second token will be a single space character. But this often results in
//   the optimal diff between two texts being a perverse one that preserves
//   the spaces between words but deletes and reinserts actual common words.
//   See https://github.com/kpdecker/jsdiff/issues/160#issuecomment-1866099640
//   for an example.
//
// Keeping the surrounding whitespace of course has implications for .equals
// and .join, not just .tokenize.
// This regex does NOT fully implement the tokenization rules described above.
// Instead, it gives runs of whitespace their own "token". The tokenize method
// then handles stitching whitespace tokens onto adjacent word or punctuation
// tokens.
const tokenizeIncludingWhitespace = new RegExp(`[${extendedWordChars}]+|\\s+|[^${extendedWordChars}]`, 'ug');
class WordDiff extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$diff$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    equals(left, right, options) {
        if (options.ignoreCase) {
            left = left.toLowerCase();
            right = right.toLowerCase();
        }
        return left.trim() === right.trim();
    }
    tokenize(value, options = {}) {
        let parts;
        if (options.intlSegmenter) {
            const segmenter = options.intlSegmenter;
            if (segmenter.resolvedOptions().granularity != 'word') {
                throw new Error('The segmenter passed must have a granularity of "word"');
            }
            parts = Array.from(segmenter.segment(value), (segment)=>segment.segment);
        } else {
            parts = value.match(tokenizeIncludingWhitespace) || [];
        }
        const tokens = [];
        let prevPart = null;
        parts.forEach((part)=>{
            if (/\s/.test(part)) {
                if (prevPart == null) {
                    tokens.push(part);
                } else {
                    tokens.push(tokens.pop() + part);
                }
            } else if (prevPart != null && /\s/.test(prevPart)) {
                if (tokens[tokens.length - 1] == prevPart) {
                    tokens.push(tokens.pop() + part);
                } else {
                    tokens.push(prevPart + part);
                }
            } else {
                tokens.push(part);
            }
            prevPart = part;
        });
        return tokens;
    }
    join(tokens) {
        // Tokens being joined here will always have appeared consecutively in the
        // same text, so we can simply strip off the leading whitespace from all the
        // tokens except the first (and except any whitespace-only tokens - but such
        // a token will always be the first and only token anyway) and then join them
        // and the whitespace around words and punctuation will end up correct.
        return tokens.map((token, i)=>{
            if (i == 0) {
                return token;
            } else {
                return token.replace(/^\s+/, '');
            }
        }).join('');
    }
    postProcess(changes, options) {
        if (!changes || options.oneChangePerToken) {
            return changes;
        }
        let lastKeep = null;
        // Change objects representing any insertion or deletion since the last
        // "keep" change object. There can be at most one of each.
        let insertion = null;
        let deletion = null;
        changes.forEach((change)=>{
            if (change.added) {
                insertion = change;
            } else if (change.removed) {
                deletion = change;
            } else {
                if (insertion || deletion) {
                    dedupeWhitespaceInChangeObjects(lastKeep, deletion, insertion, change);
                }
                lastKeep = change;
                insertion = null;
                deletion = null;
            }
        });
        if (insertion || deletion) {
            dedupeWhitespaceInChangeObjects(lastKeep, deletion, insertion, null);
        }
        return changes;
    }
}
const wordDiff = new WordDiff();
function diffWords(oldStr, newStr, options) {
    // This option has never been documented and never will be (it's clearer to
    // just call `diffWordsWithSpace` directly if you need that behavior), but
    // has existed in jsdiff for a long time, so we retain support for it here
    // for the sake of backwards compatibility.
    if ((options === null || options === void 0 ? void 0 : options.ignoreWhitespace) != null && !options.ignoreWhitespace) {
        return diffWordsWithSpace(oldStr, newStr, options);
    }
    return wordDiff.diff(oldStr, newStr, options);
}
function dedupeWhitespaceInChangeObjects(startKeep, deletion, insertion, endKeep) {
    // Before returning, we tidy up the leading and trailing whitespace of the
    // change objects to eliminate cases where trailing whitespace in one object
    // is repeated as leading whitespace in the next.
    // Below are examples of the outcomes we want here to explain the code.
    // I=insert, K=keep, D=delete
    // 1. diffing 'foo bar baz' vs 'foo baz'
    //    Prior to cleanup, we have K:'foo ' D:' bar ' K:' baz'
    //    After cleanup, we want:   K:'foo ' D:'bar ' K:'baz'
    //
    // 2. Diffing 'foo bar baz' vs 'foo qux baz'
    //    Prior to cleanup, we have K:'foo ' D:' bar ' I:' qux ' K:' baz'
    //    After cleanup, we want K:'foo ' D:'bar' I:'qux' K:' baz'
    //
    // 3. Diffing 'foo\nbar baz' vs 'foo baz'
    //    Prior to cleanup, we have K:'foo ' D:'\nbar ' K:' baz'
    //    After cleanup, we want K'foo' D:'\nbar' K:' baz'
    //
    // 4. Diffing 'foo baz' vs 'foo\nbar baz'
    //    Prior to cleanup, we have K:'foo\n' I:'\nbar ' K:' baz'
    //    After cleanup, we ideally want K'foo' I:'\nbar' K:' baz'
    //    but don't actually manage this currently (the pre-cleanup change
    //    objects don't contain enough information to make it possible).
    //
    // 5. Diffing 'foo   bar baz' vs 'foo  baz'
    //    Prior to cleanup, we have K:'foo  ' D:'   bar ' K:'  baz'
    //    After cleanup, we want K:'foo  ' D:' bar ' K:'baz'
    //
    // Our handling is unavoidably imperfect in the case where there's a single
    // indel between keeps and the whitespace has changed. For instance, consider
    // diffing 'foo\tbar\nbaz' vs 'foo baz'. Unless we create an extra change
    // object to represent the insertion of the space character (which isn't even
    // a token), we have no way to avoid losing information about the texts'
    // original whitespace in the result we return. Still, we do our best to
    // output something that will look sensible if we e.g. print it with
    // insertions in green and deletions in red.
    // Between two "keep" change objects (or before the first or after the last
    // change object), we can have either:
    // * A "delete" followed by an "insert"
    // * Just an "insert"
    // * Just a "delete"
    // We handle the three cases separately.
    if (deletion && insertion) {
        const oldWsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["leadingWs"])(deletion.value);
        const oldWsSuffix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trailingWs"])(deletion.value);
        const newWsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["leadingWs"])(insertion.value);
        const newWsSuffix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trailingWs"])(insertion.value);
        if (startKeep) {
            const commonWsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["longestCommonPrefix"])(oldWsPrefix, newWsPrefix);
            startKeep.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replaceSuffix"])(startKeep.value, newWsPrefix, commonWsPrefix);
            deletion.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removePrefix"])(deletion.value, commonWsPrefix);
            insertion.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removePrefix"])(insertion.value, commonWsPrefix);
        }
        if (endKeep) {
            const commonWsSuffix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["longestCommonSuffix"])(oldWsSuffix, newWsSuffix);
            endKeep.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replacePrefix"])(endKeep.value, newWsSuffix, commonWsSuffix);
            deletion.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeSuffix"])(deletion.value, commonWsSuffix);
            insertion.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeSuffix"])(insertion.value, commonWsSuffix);
        }
    } else if (insertion) {
        // The whitespaces all reflect what was in the new text rather than
        // the old, so we essentially have no information about whitespace
        // insertion or deletion. We just want to dedupe the whitespace.
        // We do that by having each change object keep its trailing
        // whitespace and deleting duplicate leading whitespace where
        // present.
        if (startKeep) {
            const ws = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["leadingWs"])(insertion.value);
            insertion.value = insertion.value.substring(ws.length);
        }
        if (endKeep) {
            const ws = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["leadingWs"])(endKeep.value);
            endKeep.value = endKeep.value.substring(ws.length);
        }
    // otherwise we've got a deletion and no insertion
    } else if (startKeep && endKeep) {
        const newWsFull = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["leadingWs"])(endKeep.value), delWsStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["leadingWs"])(deletion.value), delWsEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trailingWs"])(deletion.value);
        // Any whitespace that comes straight after startKeep in both the old and
        // new texts, assign to startKeep and remove from the deletion.
        const newWsStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["longestCommonPrefix"])(newWsFull, delWsStart);
        deletion.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removePrefix"])(deletion.value, newWsStart);
        // Any whitespace that comes straight before endKeep in both the old and
        // new texts, and hasn't already been assigned to startKeep, assign to
        // endKeep and remove from the deletion.
        const newWsEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["longestCommonSuffix"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removePrefix"])(newWsFull, newWsStart), delWsEnd);
        deletion.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeSuffix"])(deletion.value, newWsEnd);
        endKeep.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replacePrefix"])(endKeep.value, newWsFull, newWsEnd);
        // If there's any whitespace from the new text that HASN'T already been
        // assigned, assign it to the start:
        startKeep.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replaceSuffix"])(startKeep.value, newWsFull, newWsFull.slice(0, newWsFull.length - newWsEnd.length));
    } else if (endKeep) {
        // We are at the start of the text. Preserve all the whitespace on
        // endKeep, and just remove whitespace from the end of deletion to the
        // extent that it overlaps with the start of endKeep.
        const endKeepWsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["leadingWs"])(endKeep.value);
        const deletionWsSuffix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trailingWs"])(deletion.value);
        const overlap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maximumOverlap"])(deletionWsSuffix, endKeepWsPrefix);
        deletion.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeSuffix"])(deletion.value, overlap);
    } else if (startKeep) {
        // We are at the END of the text. Preserve all the whitespace on
        // startKeep, and just remove whitespace from the start of deletion to
        // the extent that it overlaps with the end of startKeep.
        const startKeepWsSuffix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trailingWs"])(startKeep.value);
        const deletionWsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["leadingWs"])(deletion.value);
        const overlap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maximumOverlap"])(startKeepWsSuffix, deletionWsPrefix);
        deletion.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$util$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removePrefix"])(deletion.value, overlap);
    }
}
class WordsWithSpaceDiff extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$diff$2f$libesm$2f$diff$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    tokenize(value) {
        // Slightly different to the tokenizeIncludingWhitespace regex used above in
        // that this one treats each individual newline as a distinct tokens, rather
        // than merging them into other surrounding whitespace. This was requested
        // in https://github.com/kpdecker/jsdiff/issues/180 &
        //    https://github.com/kpdecker/jsdiff/issues/211
        const regex = new RegExp(`(\\r?\\n)|[${extendedWordChars}]+|[^\\S\\n\\r]+|[^${extendedWordChars}]`, 'ug');
        return value.match(regex) || [];
    }
}
const wordsWithSpaceDiff = new WordsWithSpaceDiff();
function diffWordsWithSpace(oldStr, newStr, options) {
    return wordsWithSpaceDiff.diff(oldStr, newStr, options);
}
}),
];

//# sourceMappingURL=_0ffc76dc._.js.map
"use client";

import { useState, useMemo } from "react";

export default function Page() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const trimmed = text.trim();

    const words = trimmed ? trimmed.split(/\s+/).filter(Boolean).length : 0;
    const sentences = trimmed
      ? trimmed.split(/[.!?]+/).filter(Boolean).length
      : 0;
    const charactersWithSpaces = text.length;
    const charactersWithoutSpaces = text.replace(/\s/g, "").length;
    const paragraphs = trimmed
      ? trimmed.split(/\n+/).filter(p => p.trim() !== "").length
      : 0;

    const readingTimeMinutes = words / 200;
    const readingTime =
      words === 0
        ? "0m 0s"
        : `${Math.floor(readingTimeMinutes)}m ${Math.round(
            (readingTimeMinutes % 1) * 60
          )}s`;

    return {
      words,
      sentences,
      charactersWithSpaces,
      charactersWithoutSpaces,
      paragraphs,
      readingTime,
    };
  }, [text]);

  return (
    <main className="min-h-screen bg-slate-50 p-4 font-sans text-slate-900 dark:bg-slate-900 dark:text-slate-100 sm:p-6 lg:p-8">
      <div className="   p-10 mx-auto max-w-4xl space-y-9 rounded-2xl
    border border-slate-200 bg-white
    shadow-sm
    dark:border-slate-700 dark:bg-slate-900
  ">
        {/* Text Area */}
        <textarea
          placeholder="Start writing here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="
            w-full min-h-[340px] resize-y rounded-xl border
            border-slate-200 bg-white p-4 text-base outline-none
            focus:ring-2 focus:ring-sky-400
            dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100
          "
        />

        {/* Stats Section */}
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
  <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
    Statistics
  </h3>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

    <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
      <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Words</p>
      <p className="text-2xl font-bold text-sky-500">{stats.words}</p>
    </div>

    <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
      <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Sentences</p>
      <p className="text-2xl font-bold text-orange-500">{stats.sentences}</p>
    </div>

    <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
      <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">
        Characters (no spaces)
      </p>
      <p className="text-2xl font-bold text-green-500">
        {stats.charactersWithoutSpaces}
      </p>
    </div>

    <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
      <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">
        Characters (with spaces)
      </p>
      <p className="text-2xl font-bold text-sky-500">
        {stats.charactersWithSpaces}
      </p>
    </div>

    <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
      <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Paragraphs</p>
      <p className="text-2xl font-bold text-orange-500">
        {stats.paragraphs}
      </p>
    </div>

    <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
      <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">
        Reading Time
      </p>
      <p className="text-2xl font-bold text-green-500">
        {stats.readingTime}
      </p>
    </div>

  </div>
</div>

              
      </div>
    </main>
  );
}

function Stat({
  label,
  value,
  color,
}: {
  label: string;
  value: string | number;
  color: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-slate-100 py-3 dark:border-slate-700">
      <span className="text-slate-600 dark:text-slate-300">{label}</span>
      <span className={`font-semibold ${color}`}>{value}</span>
    </div>
  );
}

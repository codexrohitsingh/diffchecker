"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
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
    <main className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6 lg:px-8 font-sans text-slate-900 dark:bg-slate-900 dark:text-slate-100">

      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 mb-4 rounded-lg px-3 py-2 text-sm
        text-slate-700 dark:text-slate-300
        hover:bg-slate-100 dark:hover:bg-slate-800 transition"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      {/* Card */}
      <div
        className="mx-auto max-w-7xl space-y-8 rounded-2xl border
        border-slate-200 bg-white p-4 sm:p-6 lg:p-10 shadow-sm
        dark:border-slate-700 dark:bg-slate-900"
      >

        {/* Text Area */}
        <textarea
          placeholder="Start writing here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="
            w-full resize-y rounded-xl border
            border-slate-200 bg-white p-4 text-base outline-none
            min-h-[200px] sm:min-h-[280px] lg:min-h-[340px]
            focus:ring-2 focus:ring-sky-400
            dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100
          "
        />

        {/* Stats */}
        <div className="border-t border-slate-200 pt-6 dark:border-slate-800">
          <h3 className="mb-4 text-sm font-semibold">Statistics</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <StatBox label="Words" value={stats.words} color="text-sky-500" />
            <StatBox label="Sentences" value={stats.sentences} color="text-orange-500" />
            <StatBox
              label="Characters (no spaces)"
              value={stats.charactersWithoutSpaces}
              color="text-green-500"
            />
            <StatBox
              label="Characters (with spaces)"
              value={stats.charactersWithSpaces}
              color="text-sky-500"
            />
            <StatBox label="Paragraphs" value={stats.paragraphs} color="text-orange-500" />
            <StatBox label="Latency" value={stats.readingTime} color="text-green-500" />
          </div>
        </div>
      </div>
    </main>
  );
}

function StatBox({
  label,
  value,
  color,
}: {
  label: string;
  value: string | number;
  color: string;
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-950">
      <p className="mb-1 text-xs text-slate-600 dark:text-slate-400">{label}</p>
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
    </div>
  );
}

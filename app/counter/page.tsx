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
    <main className="min-h-screen bg-slate-50 p-8 font-sans">
      {/* Header */}
      <h1 className="mb-6 text-3xl font-bold bg-gradient-to-r from-sky-400 via-orange-400 to-green-500 bg-clip-text text-transparent">
        Solvify Text Analyzer
      </h1>

      <div className="flex gap-8">
        {/* Text Area */}
        <textarea
          placeholder="Start writing here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-2/3 min-h-[340px] resize-y rounded-xl border border-slate-200 bg-white text-black  p-4 text-base outline-none focus:ring-2 focus:ring-sky-400"
        />

        {/* Stats Panel */}
        <div className="w-1/3 rounded-2xl bg-white p-6 shadow-lg">
          <h3 className="mb-4 text-lg font-semibold text-slate-800">
            Suggestions
          </h3>

          <Stat label="Words" value={stats.words} color="text-sky-500" />
          <Stat
            label="Sentences"
            value={stats.sentences}
            color="text-orange-500"
          />
          <Stat
            label="Characters without spaces"
            value={stats.charactersWithoutSpaces}
            color="text-green-500"
          />
          <Stat
            label="Characters with spaces"
            value={stats.charactersWithSpaces}
            color="text-sky-500"
          />
          <Stat
            label="Paragraphs"
            value={stats.paragraphs}
            color="text-orange-500"
          />
          <Stat
            label="Reading Time"
            value={stats.readingTime}
            color="text-green-500"
          />
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
    <div className="flex items-center justify-between border-b border-slate-100 py-3">
      <span className="text-slate-600">{label}</span>
      <span className={`font-semibold ${color}`}>{value}</span>
    </div>
  );
}

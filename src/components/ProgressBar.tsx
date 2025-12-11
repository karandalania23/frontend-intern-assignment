import React from "react";

interface ProgressBarProps {
  total: number;
  current: number;
}

export default function ProgressBar({ total, current }: ProgressBarProps) {
  return (
    <div 
      className="w-full max-w-2xl flex gap-2 mb-10"
      role="progressbar" 
      aria-valuenow={Math.round(((current + 1) / total) * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Quiz Progress"
    >
      {Array.from({ length: total }).map((_, idx) => (
        <div
          key={idx}
          className={`h-2 flex-1 rounded-full transition-all duration-300 ${
            idx <= current ? "bg-[#1e556e]" : "bg-slate-200"
          }`}
        />
      ))}
    </div>
  );
}
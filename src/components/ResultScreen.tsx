import React, { useState } from "react";
import { motion } from "framer-motion";

interface ResultScreenProps {
  score: number;
  total: number;
  onRetry: () => void;
}

function CountUp({ end }: { end: number }) {
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);

  return <>{count}</>;
}

export default function ResultScreen({ score, total, onRetry }: ResultScreenProps) {
  const percentage = Math.round((score / total) * 100);

  return (
    <motion.div
      key="result"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center h-full w-full py-20"
    >
      <div className="bg-white px-6 py-2 rounded-full shadow-sm mb-8">
        <span className="text-slate-600 font-medium">Keep Learning!</span>
      </div>

      <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1e556e] italic mb-6">
        Your Final score is
      </h2>

      <div className="relative mb-12">
        <div className="text-[120px] md:text-[140px] leading-none font-playfair font-bold text-[#1e556e]">
          <CountUp end={percentage} />%
        </div>
      </div>

      <button
        onClick={onRetry}
        className="bg-[#D9EFF9] hover:bg-[#c4e6f5] text-[#1e556e] px-12 py-4 rounded-xl font-bold text-lg transition-all shadow-sm hover:shadow-md"
      >
        Start Again
      </button>
    </motion.div>
  );
}
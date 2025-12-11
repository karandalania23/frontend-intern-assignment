import React from "react";
import { motion } from "framer-motion";

interface Question {
  id: number;
  question: string;
  options: string[];
}

interface QuestionCardProps {
  data: Question;
  selectedAnswer: string | null;
  onSelect: (option: string) => void;
}

export default function QuestionCard({ data, selectedAnswer, onSelect }: QuestionCardProps) {
  return (
    <div className="w-full max-w-2xl flex flex-col gap-4 flex-grow">
      
      <motion.div
        key={`q-${data.id}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-linear-to-r from-[#C6E9F7] to-[#E5F8FF] p-6 rounded-xl text-center mb-4 shadow-sm"
      >
        <h2 className="text-lg md:text-xl font-semibold text-[#1e556e]">
          {data.id}. {data.question}
        </h2>
      </motion.div>

      <div className="flex flex-col gap-3">
        {data.options.map((option) => {
          const isSelected = selectedAnswer === option;
          return (
            <button
              key={option}
              onClick={() => onSelect(option)}
              className={`w-full p-4 rounded-xl transition-all duration-200 font-medium
                ${
                  isSelected
                    
                    ? "bg-linear-to-r from-[#C6E9F7] to-[#E5F8FF] text-[#1e556e] ring-2 ring-[#CDECF8] shadow-md font-semibold"
                    : "bg-white border border-slate-100/50 text-slate-600 hover:bg-slate-50 shadow-sm hover:shadow-md"
                }
              `}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
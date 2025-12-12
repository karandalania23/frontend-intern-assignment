"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

import ProgressBar from "@/components/ProgressBar";
import QuestionCard from "@/components/QuestionCard";
import ResultScreen from "@/components/ResultScreen";
import DecorativePaw from "@/components/DecorativePaw";

const questions = [
  {
    id: 1,
    question: "What sound does a cat make?",
    options: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"],
    correctAnswer: "Meow-Meow",
  },
  {
    id: 2,
    question: "What would you probably find in your fridge?",
    options: ["Shoes", "Ice Cream", "Books"],
    correctAnswer: "Ice Cream",
  },
  {
    id: 3,
    question: "What color are bananas?",
    options: ["Blue", "Yellow", "Red"],
    correctAnswer: "Yellow",
  },
  {
    id: 4,
    question: "How many stars are in the sky?",
    options: ["Two", "Infinite", "One Hundred"],
    correctAnswer: "Infinite",
  },
];

export default function QuizApp() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(
    new Array(questions.length).fill(null)
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  const score = selectedAnswers.reduce((acc, answer, index) => {
    if (answer === questions[index].correctAnswer) return (acc as number) + 1;
    return acc;
  }, 0);

  const handleOptionSelect = (option: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = option;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers(new Array(questions.length).fill(null));
    setIsSubmitted(false);
  };

  return (
  <div className="min-h-screen w-full bg-[linear-gradient(to_bottom_right,#BECFEE,#71C6E2,#D9F4FA,#BECFEE)] flex items-center justify-center p-4 py-16">
    
    
    <div className="rounded-[40px] bg-white/40 p-6 backdrop-blur-sm w-full max-w-4xl shadow-2xl">
    <div className=" bg-[#f4fdff] backdrop-blur-md rounded-[30px] p-8 md:p-12 min-h-[600px] flex flex-col relative">
      {currentQuestionIndex === 0 && !isSubmitted && <DecorativePaw />}
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
      key="quiz-container"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full flex flex-col items-center grow"
      aria-live="polite"
    >
            <h1 className="font-(family-name:--font-dm-serif) text-4xl md:text-6xl font-normal mb-4 text-center bg-clip-text text-transparent bg-linear-to-r from-[#0F3D55] via-[#1e556e] to-[#4FA3C8] pb-1">
              Test Your Knowledge
            </h1>
            
            <p className="text-slate-500 mb-8 font-medium bg-white/50 px-4 py-1 rounded-full text-sm shadow-sm">
              Answer all questions to see your results
            </p>

            <ProgressBar total={questions.length} current={currentQuestionIndex} />

            <QuestionCard
              data={questions[currentQuestionIndex]}
              selectedAnswer={selectedAnswers[currentQuestionIndex]}
              onSelect={handleOptionSelect}
            />

            <div className="w-full max-w-2xl mt-8 flex justify-end gap-3">
              {currentQuestionIndex > 0 && (
                <button
                  onClick={handlePrev}
                  className="p-3 bg-[#CDECF8] hover:bg-[#bce3f5] px-6 text-[#1e556e] rounded-lg transition-colors"
                >
                  <ArrowLeft size={20} />
                </button>
              )}

              <button
                onClick={handleNext}
                disabled={!selectedAnswers[currentQuestionIndex]}
                className={`
                      flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all
                      ${
                        !selectedAnswers[currentQuestionIndex]
                          ? "bg-slate-200/50 text-slate-400 cursor-not-allowed"
                          : "bg-[#CDECF8] hover:bg-[#bce3f5] text-[#1e556e] shadow-sm"
                      }
                  `}
              >
                {currentQuestionIndex === questions.length - 1 ? (
                  "Submit"
                ) : (
                  <ArrowRight size={20} />
                )}
              </button>
            </div>
          </motion.div>
        ) : (
          <ResultScreen 
              score={score} 
              total={questions.length} 
              onRetry={restartQuiz} 
          />
        )}
      </AnimatePresence>
    </div>
    </div>
  </div>
);
}
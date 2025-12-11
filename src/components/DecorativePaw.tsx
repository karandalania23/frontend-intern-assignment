import React from "react";
import { motion } from "framer-motion";

export default function DecorativePaw() {
  return (
    <div className="fixed bottom-0 left-4 w-40 hidden md:block z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white px-4 py-2 rounded-xl rounded-bl-none border-2 border-slate-200 mb-4 text-center shadow-sm rotate-[-10deg] ml-8"
      >
        <span className="font-playfair text-slate-800 font-bold text-sm">
          Best of Luck!
        </span>
      </motion.div>

      <motion.img
        src="/paw.svg"
        alt="Cat Paw"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="w-full h-auto"
      />
    </div>
  );
}
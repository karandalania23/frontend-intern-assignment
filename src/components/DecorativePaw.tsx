import React from "react";
import { motion } from "framer-motion";

export default function DecorativePaw() {
  return (
    <div className="absolute bottom-0 left-0 hidden md:block z-10">
      
      <motion.img
        src="/bubble.png" 
        alt="Best of Luck"
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-28 -left-16 w-32 h-auto z-20"
      />

      <motion.img
        src="/paw.gif"
        alt="Cat Paw"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="w-32 h-auto relative left-4 "
      />
    </div>
  );
}
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const storySequence = [
  "Every legend has a beginning...",
  "Forged through lines of code...",
  "Battles fought, systems architected...",
  "This is the tale of the Grandmaster.",
  "Campaign Mode"
];

export default function StoryIntro({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (currentIndex < storySequence.length) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 3000); // 3 seconds per slide
      
      return () => clearTimeout(timer);
    } else {
      // Sequence finished
      const finishTimer = setTimeout(() => {
        setIsFinished(true);
        if (onComplete) onComplete();
      }, 1000);
      return () => clearTimeout(finishTimer);
    }
  }, [currentIndex, onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark-900 pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <AnimatePresence mode="wait">
            {currentIndex < storySequence.length && (
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="text-center px-6"
              >
                <h2 className={`font-display font-bold text-3xl md:text-5xl tracking-widest ${currentIndex === storySequence.length - 1 ? 'text-primary text-glow text-5xl md:text-7xl uppercase' : 'text-white'}`}>
                  {storySequence[currentIndex]}
                </h2>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

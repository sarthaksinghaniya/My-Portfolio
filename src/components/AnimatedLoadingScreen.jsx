"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useGameStore } from '../store/gameStore';

const loadingMessages = [
  "Loading Kingdom...",
  "Generating AI...",
  "Forging Python Arsenal...",
  "Preparing Legendary Engineer...",
  "Loading Projects...",
  "Entering Kingdom..."
];

export default function AnimatedLoadingScreen() {
  const isLoading = useGameStore((state) => state.isLoading);
  const setLoading = useGameStore((state) => state.setLoading);
  
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    // Simulate loading progress
    const duration = 4000; // 4 seconds total loading time
    const interval = 50;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = (currentStep / steps) * 100;
      setProgress(currentProgress);

      // Update message based on progress
      const msgIdx = Math.min(
        Math.floor((currentProgress / 100) * loadingMessages.length),
        loadingMessages.length - 1
      );
      setMessageIndex(msgIdx);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => setLoading(false), 500); // Small delay before hiding
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isLoading, setLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030613] text-white overflow-hidden"
        >
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '3s' }} />
          </div>

          <div className="relative z-10 flex flex-col items-center w-full max-w-md px-8">
            {/* Logo / Sigil */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-12 relative"
            >
              <div className="w-24 h-24 border-4 border-primary rotate-45 flex items-center justify-center shadow-[0_0_30px_rgba(247,201,72,0.5)] bg-dark-900">
                <span className="font-display font-bold text-4xl text-primary -rotate-45">S</span>
              </div>
              {/* Spinning rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 border border-dashed border-stone/40 rounded-full"
              />
            </motion.div>

            {/* Loading Bar Container */}
            <div className="w-full mb-6">
              <div className="h-2 w-full bg-dark-900 border border-stone/30 rounded-full overflow-hidden shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary/50 to-primary shadow-[0_0_15px_rgba(247,201,72,0.8)]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Loading Message */}
            <div className="h-8 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={messageIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="font-display text-primary tracking-widest text-sm uppercase drop-shadow-[0_0_5px_rgba(247,201,72,0.8)]"
                >
                  {loadingMessages[messageIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
            
            <div className="mt-2 text-[10px] text-stone tracking-[0.3em]">
              {Math.round(progress)}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

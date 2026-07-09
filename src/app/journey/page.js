"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import ExperienceSection from "../../components/ExperienceSection";
import StoryIntro from "../../components/StoryIntro";

export default function JourneyPage() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="fixed inset-0 w-full h-full object-cover z-[-3] opacity-40"
      >
        <source src="/images/kingdom.mp4" type="video/mp4" />
      </video>

      {/* Intro Animation Layer */}
      <AnimatePresence>
        {showIntro && <StoryIntro onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      {/* Main Content Layer */}
      <AnimatePresence>
        {!showIntro && (
          <motion.main 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative min-h-screen flex flex-col"
          >
            {/* Navigation Header */}
            <div className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center bg-gradient-to-b from-dark-900 to-transparent">
              <Link 
                href="/"
                className="flex items-center gap-2 text-stone hover:text-primary transition-colors font-display font-bold tracking-widest uppercase text-sm group"
              >
                <div className="w-10 h-10 rounded-full border border-stone group-hover:border-primary flex items-center justify-center bg-dark-900 transition-all shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_15px_rgba(247,201,72,0.4)]">
                  <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                </div>
                Return to Kingdom Map
              </Link>
            </div>

            <div className="pt-20">
              <ExperienceSection />
            </div>
            
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}

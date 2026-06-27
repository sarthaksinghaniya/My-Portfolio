"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { useGameStore } from "../store/gameStore";

const timeGradients = {
  night: "from-[#030613] via-[#08111D] to-[#111827]",
  dawn: "from-[#1a1c29] via-[#3a2e39] to-[#6b4c5a]",
  day: "from-[#4ca1af] via-[#89cff0] to-[#c4e0e5]",
  dusk: "from-[#2b1836] via-[#632948] to-[#9b4a46]"
};

export default function LivingBackground() {
  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);
  const timeOfDay = useGameStore((state) => state.timeOfDay);
  const setTimeOfDay = useGameStore((state) => state.setTimeOfDay);

  useEffect(() => {
    setMounted(true);
    
    // Auto cycle through time of day every 60 seconds
    const times = ['night', 'dawn', 'day', 'dusk'];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % times.length;
      setTimeOfDay(times[currentIndex]);
    }, 60000); // 60 seconds per phase
    
    return () => clearInterval(interval);
  }, [setTimeOfDay]);

  // Parallax effects
  const yBg1 = useTransform(scrollY, [0, 2000], [0, 200]);
  const yBg2 = useTransform(scrollY, [0, 2000], [0, -100]);
  const yBg3 = useTransform(scrollY, [0, 2000], [0, -300]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-dark-900 transition-colors duration-[10000ms]">
      
      {/* Deep Space / Sky Base Gradient */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-b ${timeGradients[timeOfDay]} transition-all duration-[10000ms]`} 
      />
      
      {/* Stars Layer (Only visible at night/dawn/dusk) */}
      <motion.div 
        style={{ y: yBg1 }}
        animate={{ opacity: timeOfDay === 'day' ? 0 : timeOfDay === 'night' ? 0.4 : 0.1 }}
        transition={{ duration: 10 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-repeat opacity-50" />
      </motion.div>

      {/* Floating Ambient Particles (Dust/Magic) */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.1,
              opacity: Math.random() * 0.5 + 0.1
            }}
            animate={{
              y: [null, Math.random() * -200 - 100],
              x: [null, Math.random() * 100 - 50],
              opacity: [null, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ width: 4, height: 4, filter: "blur(2px)" }}
          />
        ))}
      </div>

      {/* Distant Mountains (Parallax Layer 2) */}
      <motion.div 
        style={{ y: yBg2 }}
        className="absolute inset-x-0 bottom-0 h-1/2 opacity-20 pointer-events-none"
      >
        <svg viewBox="0 0 1440 320" className={`absolute bottom-0 w-full h-auto transition-colors duration-[10000ms] ${timeOfDay === 'day' ? 'text-[#1a365d]' : 'text-dark-700'}`} preserveAspectRatio="none">
          <path fill="currentColor" d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </motion.div>

      {/* Foreground Silhouettes (Parallax Layer 3) */}
      <motion.div 
        style={{ y: yBg3 }}
        className={`absolute inset-x-0 bottom-0 h-1/3 pointer-events-none transition-opacity duration-[10000ms] ${timeOfDay === 'day' ? 'opacity-80' : 'opacity-40'}`}
      >
        <svg viewBox="0 0 1440 320" className={`absolute bottom-0 w-full h-auto transition-colors duration-[10000ms] ${timeOfDay === 'day' ? 'text-[#0f172a]' : 'text-dark-900'}`} preserveAspectRatio="none">
          <path fill="currentColor" d="M0,192L60,170.7C120,149,240,107,360,112C480,117,600,171,720,186.7C840,203,960,181,1080,144C1200,107,1320,53,1380,26.7L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </motion.div>

      {/* Ambient Radial Fog/Glow */}
      <motion.div 
        animate={{ opacity: timeOfDay === 'day' ? 0 : 1 }}
        transition={{ duration: 10 }}
      >
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-royal/5 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '12s' }} />
      </motion.div>

    </div>
  );
}

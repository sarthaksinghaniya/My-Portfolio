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

  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    // Auto cycle through time of day every 60 seconds
    const times = ['night', 'dawn', 'day', 'dusk'];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % times.length;
      setTimeOfDay(times[currentIndex]);
    }, 60000); // 60 seconds per phase
    
    // Generate particles only on the client
    const generatedParticles = [...Array(20)].map(() => ({
      x: Math.random() * 100 + "vw",
      y: Math.random() * 100 + "vh",
      scale: Math.random() * 0.5 + 0.1,
      opacity: Math.random() * 0.5 + 0.1,
      targetX: (Math.random() * 10 - 5) + "vw",
      duration: Math.random() * 10 + 10
    }));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(generatedParticles);

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

      {/* Cinematic Kingdom Video Background */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover object-center mix-blend-screen"
        >
          <source src="/images/homescreen.mp4" type="video/mp4" />
        </video>
      </motion.div>
      
      {/* Stars Layer (Only visible at night/dawn/dusk) */}
      <motion.div 
        style={{ y: yBg1 }}
        animate={{ opacity: timeOfDay === 'day' ? 0 : timeOfDay === 'night' ? 0.4 : 0.1 }}
        transition={{ duration: 10 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-repeat opacity-50" />
      </motion.div>

      {/* Floating Ambient Particles (Dust/Magic) */}
      <div className="absolute inset-0 opacity-30 z-10 pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary"
            initial={{
              x: p.x,
              y: p.y,
              scale: p.scale,
              opacity: p.opacity
            }}
            animate={{
              y: [null, "-20vh"],
              x: [null, p.targetX],
              opacity: [null, 0]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ width: 4, height: 4, filter: "blur(2px)" }}
          />
        ))}
      </div>

      {/* Ambient Radial Fog/Glow */}
      <motion.div 
        animate={{ opacity: timeOfDay === 'day' ? 0 : 1 }}
        transition={{ duration: 10 }}
        className="z-10 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-royal/5 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '12s' }} />
      </motion.div>

    </div>
  );
}

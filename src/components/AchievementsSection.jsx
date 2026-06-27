"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FaTrophy, FaMedal, FaStar, FaCrown } from "react-icons/fa";
import TiltCard from "./TiltCard";

const achievements = [
  {
    id: 1,
    title: "Hackathon Winner",
    event: "Smart India Hackathon",
    icon: <FaCrown size={32} className="text-primary" />,
    color: "from-primary/20 to-primary/5",
    border: "border-primary",
    glow: "rgba(247, 201, 72, 0.8)",
  },
  {
    id: 2,
    title: "National Finalist",
    event: "Tech Innovators 2023",
    icon: <FaTrophy size={32} className="text-emerald-magic" />,
    color: "from-emerald-magic/20 to-emerald-magic/5",
    border: "border-emerald-magic",
    glow: "rgba(61, 220, 151, 0.8)",
  },
  {
    id: 3,
    title: "International Delegate",
    event: "Global AI Summit",
    icon: <FaStar size={32} className="text-blue-royal" />,
    color: "from-blue-royal/20 to-blue-royal/5",
    border: "border-blue-royal",
    glow: "rgba(79, 140, 255, 0.8)",
  },
  {
    id: 4,
    title: "Community Founder",
    event: "Tech Club Enigma",
    icon: <FaMedal size={32} className="text-purple-mystic" />,
    color: "from-purple-mystic/20 to-purple-mystic/5",
    border: "border-purple-mystic",
    glow: "rgba(124, 77, 255, 0.8)",
  }
];

function ParticleBurst({ color, isActive }) {
  if (!isActive) return null;
  
  return (
    <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30) * (Math.PI / 180);
        const radius = 100;
        return (
          <motion.div
            key={i}
            initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
            animate={{ 
              scale: [0, 1, 0],
              x: Math.cos(angle) * radius,
              y: Math.sin(angle) * radius,
              opacity: [1, 1, 0]
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute w-2 h-2 rounded-full"
            style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }}
          />
        );
      })}
    </div>
  );
}

function AchievementCard({ achievement, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (inView && !unlocked) {
      setTimeout(() => setUnlocked(true), index * 200 + 300); // Trigger burst after card flips
    }
  }, [inView, index, unlocked]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
      animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
      transition={{ delay: index * 0.2, type: "spring", stiffness: 100, damping: 10 }}
      className="relative group h-full"
    >
      <TiltCard intensity={15} className="h-full">
        {/* Particle Burst on Unlock */}
        <ParticleBurst color={achievement.glow} isActive={unlocked} />

        {/* Ambient Glow behind medal */}
        <div 
          className="absolute inset-0 rounded-full blur-2xl transition-colors duration-1000 z-0" 
          style={{ backgroundColor: unlocked ? achievement.glow.replace("0.8", "0.2") : "transparent" }}
        />

        {/* Medal Card */}
        <div className={`relative game-card bg-gradient-to-b ${achievement.color} border-2 ${achievement.border} p-6 text-center shadow-lg h-full flex flex-col items-center justify-center gap-4 overflow-visible z-10`} style={{ transform: "translateZ(10px)" }}>
          
          {/* Ribbon/Top */}
          <div className="absolute -top-3 w-16 h-3 bg-gradient-to-r from-stone/40 via-white/50 to-stone/40 border border-stone/50 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.5)]" style={{ transform: "translateZ(15px)" }} />
          
          {/* Icon Container */}
          <div className={`w-24 h-24 rounded-full border-4 ${achievement.border} bg-gradient-to-br from-dark-900 to-dark-800 flex items-center justify-center shadow-[inset_0_2px_10px_rgba(0,0,0,0.8),0_5px_15px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500`} style={{ transform: "translateZ(20px)" }}>
            {achievement.icon}
          </div>
          
          <div style={{ transform: "translateZ(25px)" }}>
            <h3 className="text-xl font-display font-bold text-white mb-1 leading-tight drop-shadow">{achievement.title}</h3>
            <p className="text-xs text-stone tracking-widest uppercase font-bold">{achievement.event}</p>
          </div>

          <div className={`mt-2 text-[10px] font-bold ${achievement.border.replace('border-', 'text-')} opacity-0 group-hover:opacity-100 transition-opacity tracking-widest`} style={{ transform: "translateZ(10px)" }}>
            UNLOCKED
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-24 min-h-screen flex items-center z-10 pointer-events-auto">
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4 text-glow">Vault of Trophies</h2>
          <p className="text-stone text-lg">Unlocked Achievements & Medals</p>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(247,201,72,0.8)] mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

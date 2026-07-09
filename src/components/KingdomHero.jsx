"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaDownload, FaCompass, FaCircle, FaStar, FaShieldAlt, FaBolt, FaMagic, FaCode, FaTrophy, FaMedal, FaUsers } from "react-icons/fa";
import MagneticElement from "./MagneticElement";
import TiltCard from "./TiltCard";
import { useGameStore } from "../store/gameStore";
import GithubWidget from "./GithubWidget";
import { profile, gameStats } from "../data/content";

const ICON_MAP = {
  FaCode: <FaCode />,
  FaTrophy: <FaTrophy />,
  FaMedal: <FaMedal />,
  FaUsers: <FaUsers />,
  FaBolt: <FaBolt size={14} />,
  FaMagic: <FaMagic size={14} />
};

function CountUp({ from, to, delay, suffix = "" }) {
  // Parse numeric part from 'to' if it's a string like '25+'
  const numericTo = typeof to === 'string' ? parseInt(to.replace(/[^0-9]/g, '')) || 0 : to;
  
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, numericTo, { duration: 2, delay: delay, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, count, numericTo, delay]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function KingdomHero() {
  const xp = useGameStore(state => state.xp);
  const level = useGameStore(state => state.level);
  const addXP = useGameStore(state => state.addXP);

  useEffect(() => {
    setTimeout(() => addXP(8450), 1000);
  }, [addXP]);

  const xpPercentage = (xp / 10000) * 100;

  return (
    <section id="profile" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden z-10 pointer-events-auto">
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Main Dashboard Panel */}
        <div className="game-card p-1 bg-gradient-to-br from-dark-800 to-dark-900 border-2 border-stone/30 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 relative bg-dark-900">
            
            {/* Left Column: Avatar & Level */}
            <div className="lg:col-span-4 p-8 flex flex-col items-center justify-center border-r border-b lg:border-b-0 border-stone/20 relative bg-gradient-to-b from-dark-800/50 to-dark-900">
              
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <FaCircle className="text-emerald-magic animate-pulse text-[10px]" />
                <span className="text-xs font-display font-bold text-stone tracking-widest uppercase">Online</span>
              </div>

              <TiltCard intensity={15}>
                <div className="w-56 h-56 relative flex items-center justify-center mb-8">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
                  <Image 
                    src="/images/avatar-frame.png" 
                    alt="Player Avatar Frame"
                    fill
                    className="object-cover rounded-full z-10 drop-shadow-[0_0_15px_rgba(247,201,72,0.5)]"
                  />
                </div>
              </TiltCard>

              <div className="text-center w-full">
                <h1 className="font-display text-3xl font-bold text-white mb-1 drop-shadow-md">{profile.name}</h1>
                <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4 drop-shadow-[0_0_5px_rgba(247,201,72,0.8)]">{gameStats.playerClass}</h2>
                
                {/* Level Bar */}
                <div className="bg-dark-900 border border-stone/40 rounded p-4 shadow-inner relative overflow-hidden">
                  <div className="absolute -left-4 -top-4 w-12 h-12 bg-primary/10 rounded-full blur-md" />
                  <div className="flex justify-between items-end mb-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-display font-bold text-stone">LEVEL</span>
                      <span className="text-3xl font-display font-bold text-white drop-shadow">{gameStats.level}</span>
                    </div>
                    <div className="text-xs font-bold text-primary tracking-widest">
                      <CountUp from={0} to={xp} delay={1} /> / 10,000 XP
                    </div>
                  </div>
                  <div className="h-2 w-full bg-dark-800 rounded-full overflow-hidden shadow-inner">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${xpPercentage}%` }}
                      transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary/50 to-primary shadow-[0_0_10px_rgba(247,201,72,0.8)]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Column: Stats & Mission */}
            <div className="lg:col-span-5 p-8 flex flex-col justify-between border-r border-stone/20 relative">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="text-[10px] text-stone font-bold uppercase tracking-widest mb-1">Guild</div>
                  <div className="flex items-center gap-2 text-purple-mystic font-display font-bold shadow-[0_0_10px_rgba(124,77,255,0.2)]">
                    <FaShieldAlt /> {gameStats.guild}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-stone font-bold uppercase tracking-widest mb-1">Class</div>
                  <div className="text-white font-bold tracking-wide">{gameStats.playerClass}</div>
                </div>
              </div>

              <div className="game-card p-5 mb-8 border border-primary/20 bg-dark-800/50">
                <div className="flex items-center gap-2 mb-3">
                  <FaStar className="text-primary animate-pulse" />
                  <h3 className="font-display font-bold text-primary tracking-widest text-sm uppercase">Active Mission</h3>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  &quot;{profile.objective}&quot;
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {gameStats.stats.map((stat, i) => {
                  const hasPlus = typeof stat.value === 'string' && stat.value.includes('+');
                  return (
                    <div key={stat.label} className="bg-dark-900 border border-stone/30 p-3 flex flex-col items-center justify-center rounded shadow-inner group">
                      <div className="text-2xl font-display font-bold text-white group-hover:text-primary transition-colors flex items-center gap-2">
                        <CountUp from={0} to={stat.value} delay={1.5 + (i * 0.1)} suffix={hasPlus ? '+' : ''} />
                      </div>
                      <div className="text-[9px] text-stone font-bold uppercase tracking-widest text-center mt-1 flex items-center gap-1">
                        {ICON_MAP[stat.icon]} {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Abilities & Actions */}
            <div className="lg:col-span-3 p-8 flex flex-col justify-between bg-dark-800/30">
              
              <div>
                <div className="text-[10px] text-stone font-bold uppercase tracking-widest mb-4">Special Abilities</div>
                <div className="space-y-3">
                  {gameStats.abilities.map((ability) => (
                    <div key={ability.id} className={`flex items-center gap-3 p-2 bg-dark-900 border border-${ability.color}/30 rounded group hover:border-${ability.color} transition-colors cursor-help`}>
                      <div className={`w-8 h-8 rounded bg-${ability.color}/10 flex items-center justify-center text-${ability.color}`}>
                        {ICON_MAP[ability.icon] || <FaBolt size={14} />}
                      </div>
                      <div>
                        <div className={`text-xs font-bold text-white group-hover:text-${ability.color} transition-colors`}>{ability.name}</div>
                        <div className="text-[9px] text-stone">{ability.type} &middot; {ability.effect}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 space-y-4">

                
                {profile.links.resume && (
                  <MagneticElement intensity={0.1} className="w-full">
                    <a 
                      href={profile.links.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-dark-900 border border-stone hover:border-primary text-stone hover:text-white rounded flex items-center justify-center gap-2 text-sm font-display font-bold tracking-widest transition-all"
                    >
                      <FaDownload /> VIEW RESUME
                    </a>
                  </MagneticElement>
                )}
              </div>

            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center max-w-sm mx-auto lg:max-w-none lg:mx-0 lg:ml-auto lg:w-96">
          <GithubWidget />
        </div>

      </div>
    </section>
  );
}

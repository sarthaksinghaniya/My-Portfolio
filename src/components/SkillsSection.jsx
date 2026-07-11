"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaKhanda, FaShieldAlt, FaBullseye, FaMagic, FaBolt, FaPython, FaFire, FaReact, FaCode, FaServer, FaBrain, FaDocker } from "react-icons/fa";
import TiltCard from "./TiltCard";
import MagneticElement from "./MagneticElement";
import { skills } from "../data/content";

const ICON_MAP = {
  FaPython: <FaPython size={32} />,
  FaFire: <FaFire size={32} />,
  FaReact: <FaReact size={32} />,
  FaCode: <FaCode size={32} />,
  FaServer: <FaServer size={32} />,
  FaBrain: <FaBrain size={32} />,
  FaDocker: <FaDocker size={32} />,
  FaBolt: <FaBolt size={32} />,
  FaKhanda: <FaKhanda size={32} />,
  FaShieldAlt: <FaShieldAlt size={32} />,
  FaBullseye: <FaBullseye size={32} />,
  FaMagic: <FaMagic size={32} />
};

export default function SkillsSection() {
  const [selectedItem, setSelectedItem] = useState(skills[0]);

  return (
    <section id="skills" className="relative py-24 min-h-screen z-10 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4 text-glow">The Arsenal</h2>
          <p className="text-stone text-lg">Inventory of Forged Skills</p>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(247,201,72,0.8)] mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Inventory Grid (7 cols) */}
          <div className="lg:col-span-7 bg-dark-900 border-2 border-stone/30 p-6 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] rounded">
            <h3 className="text-xl font-display font-bold text-stone mb-6 uppercase tracking-widest border-b border-stone/30 pb-2">Inventory Slots</h3>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              {skills.map((item) => {
                const bgClass = `bg-${item.color}/10`;
                const borderClass = `border-${item.color}`;
                const textClass = `text-${item.color}`;
                
                // Construct a fake glow based on color since we removed it from data to simplify
                let hexColor = "255,255,255";
                if (item.color === 'emerald-magic') hexColor = "61,220,151";
                if (item.color === 'blue-royal') hexColor = "79,140,255";
                if (item.color === 'red-500') hexColor = "239,68,68";
                if (item.color === 'stone') hexColor = "168,162,158";
                if (item.color === 'green-500') hexColor = "34,197,94";
                if (item.color === 'orange-500') hexColor = "249,115,22";
                if (item.color === 'blue-400') hexColor = "96,165,250";
                if (item.color === 'yellow-500') hexColor = "234,179,8";
                
                const itemGlow = `rgba(${hexColor},0.5)`;
                const itemGlowActive = `rgba(${hexColor},0.8)`;
                
                return (
                  <MagneticElement intensity={0.2} key={item.id}>
                    <div 
                      onClick={() => setSelectedItem(item)}
                      className={`aspect-square rounded border-2 cursor-pointer transition-all duration-300 flex items-center justify-center relative group
                        ${selectedItem.id === item.id 
                          ? `${bgClass} ${borderClass} shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] scale-105 z-10` 
                          : 'bg-dark-800 border-stone/30 hover:border-stone shadow-inner'
                        }`}
                      style={selectedItem.id === item.id ? { boxShadow: `inset 0 0 20px rgba(255,255,255,0.1), 0 0 15px ${itemGlowActive}` } : {}}
                    >
                      <div className={`transition-transform duration-300 ${selectedItem.id === item.id ? textClass : 'text-stone group-hover:text-white group-hover:scale-110'}`}>
                        {ICON_MAP[item.icon] || <FaCode size={32} />}
                      </div>
                      <div className="absolute bottom-1 right-1 text-[9px] font-bold text-white bg-dark-900/80 px-1 rounded shadow border border-stone/20">
                        Lv.MAX
                      </div>
                    </div>
                  </MagneticElement>
                );
              })}
              
              {/* Empty Slots */}
              {[...Array(Math.max(0, Math.max(15, Math.ceil(skills.length / 5) * 5) - skills.length))].map((_, i) => (
                <div key={`empty-${i}`} className="aspect-square rounded border border-stone/10 bg-dark-800/30 flex items-center justify-center shadow-inner pointer-events-none">
                  <div className="w-2 h-2 rounded-full bg-stone/5" />
                </div>
              ))}
            </div>
          </div>

          {/* Details Panel (5 cols) */}
          <div className="lg:col-span-5 h-[600px]">
            <AnimatePresence mode="wait">
              {selectedItem && (() => {
                const bgClass = `bg-${selectedItem.color}/10`;
                const borderClass = `border-${selectedItem.color}`;
                const textClass = `text-${selectedItem.color}`;
                
                let hexColor = "255,255,255";
                if (selectedItem.color === 'emerald-magic') hexColor = "61,220,151";
                if (selectedItem.color === 'blue-royal') hexColor = "79,140,255";
                if (selectedItem.color === 'red-500') hexColor = "239,68,68";
                if (selectedItem.color === 'stone') hexColor = "168,162,158";
                if (selectedItem.color === 'green-500') hexColor = "34,197,94";
                if (selectedItem.color === 'orange-500') hexColor = "249,115,22";
                if (selectedItem.color === 'blue-400') hexColor = "96,165,250";
                if (selectedItem.color === 'yellow-500') hexColor = "234,179,8";
                
                const itemGlow = `rgba(${hexColor},0.5)`;
                const itemGlowActive = `rgba(${hexColor},0.8)`;
                
                return (
                  <motion.div
                    key={selectedItem.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <TiltCard intensity={5} className="h-full">
                      <div className="game-card h-full bg-gradient-to-b from-dark-800 to-dark-900 border-2 flex flex-col relative overflow-hidden p-0" style={{ borderColor: itemGlowActive }}>
                        
                        <div className={`h-40 ${bgClass} border-b-2 ${borderClass} relative flex flex-col items-center justify-center`}>
                          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay" />
                          <div className={`w-20 h-20 rounded-full bg-dark-900 border-4 ${borderClass} flex items-center justify-center z-10`} style={{ transform: "translateZ(30px)", boxShadow: `0 0 30px ${itemGlow}` }}>
                            <div className={textClass}>{ICON_MAP[selectedItem.icon] || <FaCode size={32} />}</div>
                          </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                          <div className="flex justify-between items-start mb-4" style={{ transform: "translateZ(20px)" }}>
                            <div>
                              <h3 className={`text-2xl font-display font-bold drop-shadow ${textClass}`}>{selectedItem.name}</h3>
                              <div className="text-xs font-bold text-stone uppercase tracking-widest">{selectedItem.type} &middot; <span className={textClass}>{selectedItem.rarity}</span></div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-display font-bold text-white">Lvl MAX</div>
                            </div>
                          </div>

                          <div className="mb-6" style={{ transform: "translateZ(10px)" }}>
                            <div className="flex justify-between text-[10px] font-bold text-stone mb-1 tracking-widest uppercase">
                              <span>Experience</span>
                              <span>MAX</span>
                            </div>
                            <div className="h-1.5 w-full bg-dark-900 rounded-full overflow-hidden shadow-inner border border-stone/30">
                              <div className="h-full w-full" style={{ backgroundColor: `rgba(${hexColor},1)`, boxShadow: `0 0 10px ${itemGlow}` }} />
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-2 mb-6" style={{ transform: "translateZ(15px)" }}>
                            {Object.entries(selectedItem.stats || {}).map(([stat, val]) => (
                              <div key={stat} className="bg-dark-900 border border-stone/30 rounded p-2 text-center shadow-inner">
                                <div className="text-white font-bold">{val}</div>
                                <div className="text-[9px] text-stone uppercase tracking-widest">{stat}</div>
                              </div>
                            ))}
                          </div>

                          <div className="text-sm text-stone/90 leading-relaxed italic mb-6 border-l-2 pl-3" style={{ borderLeftColor: itemGlowActive, transform: "translateZ(20px)" }}>
                            &quot;{selectedItem.desc}&quot;
                          </div>

                          <div className="mt-auto" style={{ transform: "translateZ(10px)" }}>
                            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-3 border-b border-stone/30 pb-2">Active Projects</h4>
                            <div className="text-xs text-stone flex items-center gap-2 before:content-[''] before:w-1 before:h-1 before:bg-primary before:rounded-full">
                              Forged in {selectedItem.projects} Quests
                            </div>
                          </div>

                        </div>
                      </div>
                    </TiltCard>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaKhanda, FaShieldAlt, FaBullseye, FaMagic, FaBolt } from "react-icons/fa";
import TiltCard from "./TiltCard";
import MagneticElement from "./MagneticElement";

const inventory = [
  {
    id: "python",
    name: "Python Blade",
    icon: <FaKhanda size={32} />,
    type: "Weapon",
    rarity: "Legendary",
    level: 45,
    xp: "8,500 / 10,000",
    color: "text-blue-royal",
    bg: "bg-blue-royal/10",
    border: "border-blue-royal",
    glow: "rgba(79,140,255,0.5)",
    desc: "A versatile broadsword capable of slicing through complex data pipelines and AI models.",
    projects: ["AI Agent Framework", "Neural Search Engine"],
    stats: { damage: 95, speed: 70, magic: 85 }
  },
  {
    id: "react",
    name: "React Shield",
    icon: <FaShieldAlt size={32} />,
    type: "Armor",
    rarity: "Epic",
    level: 38,
    xp: "4,200 / 8,000",
    color: "text-emerald-magic",
    bg: "bg-emerald-magic/10",
    border: "border-emerald-magic",
    glow: "rgba(61,220,151,0.5)",
    desc: "A reactive energy shield that perfectly defends against state mutations and unhandled re-renders.",
    projects: ["Hackathon Matchmaker", "Neural Search Engine"],
    stats: { defense: 90, agility: 80, magic: 60 }
  },
  {
    id: "fastapi",
    name: "FastAPI Bow",
    icon: <FaBullseye size={32} />,
    type: "Weapon",
    rarity: "Rare",
    level: 30,
    xp: "2,100 / 5,000",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary",
    glow: "rgba(247,201,72,0.5)",
    desc: "A lightweight composite bow for rapid, high-performance API strikes at long range.",
    projects: ["Neural Search Engine"],
    stats: { damage: 75, speed: 95, range: 100 }
  },
  {
    id: "tensorflow",
    name: "TensorFlow Orb",
    icon: <FaMagic size={32} />,
    type: "Artifact",
    rarity: "Legendary",
    level: 42,
    xp: "7,100 / 10,000",
    color: "text-purple-mystic",
    bg: "bg-purple-mystic/10",
    border: "border-purple-mystic",
    glow: "rgba(124,77,255,0.5)",
    desc: "A heavy magical orb pulsating with neural pathways. Requires immense mana to wield.",
    projects: ["AI Agent Framework"],
    stats: { magic: 100, intelligence: 95, speed: 40 }
  },
  {
    id: "nextjs",
    name: "Next.js Hammer",
    icon: <FaBolt size={32} />,
    type: "Weapon",
    rarity: "Epic",
    level: 35,
    xp: "3,800 / 8,000",
    color: "text-stone",
    bg: "bg-stone/10",
    border: "border-stone",
    glow: "rgba(255,255,255,0.5)",
    desc: "A server-forged warhammer that crushes loading times and SEO penalties in a single blow.",
    projects: ["Portfolio Reborn", "AI Agent Framework"],
    stats: { damage: 85, impact: 95, speed: 60 }
  }
];

export default function SkillsSection() {
  const [selectedItem, setSelectedItem] = useState(inventory[0]);

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
              {inventory.map((item) => (
                <MagneticElement intensity={0.2} key={item.id}>
                  <div 
                    onClick={() => setSelectedItem(item)}
                    className={`aspect-square rounded border-2 cursor-pointer transition-all duration-300 flex items-center justify-center relative group
                      ${selectedItem.id === item.id 
                        ? `${item.bg} ${item.border} shadow-[inset_0_0_20px_rgba(255,255,255,0.1),0_0_15px_${item.glow.replace('0.5','0.8')}] scale-105 z-10` 
                        : 'bg-dark-800 border-stone/30 hover:border-stone shadow-inner'
                      }`}
                  >
                    <div className={`transition-transform duration-300 ${selectedItem.id === item.id ? item.color : 'text-stone group-hover:text-white group-hover:scale-110'}`}>
                      {item.icon}
                    </div>
                    {/* Level badge */}
                    <div className="absolute bottom-1 right-1 text-[9px] font-bold text-white bg-dark-900/80 px-1 rounded shadow border border-stone/20">
                      Lv.{item.level}
                    </div>
                  </div>
                </MagneticElement>
              ))}
              
              {/* Empty Slots */}
              {[...Array(10)].map((_, i) => (
                <div key={`empty-${i}`} className="aspect-square rounded border border-stone/10 bg-dark-800/30 flex items-center justify-center shadow-inner pointer-events-none">
                  <div className="w-2 h-2 rounded-full bg-stone/5" />
                </div>
              ))}
            </div>
          </div>

          {/* Details Panel (5 cols) */}
          <div className="lg:col-span-5 h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedItem.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <TiltCard intensity={5} className="h-full">
                  <div className="game-card h-full bg-gradient-to-b from-dark-800 to-dark-900 border-2 flex flex-col relative overflow-hidden p-0" style={{ borderColor: selectedItem.glow.replace('0.5', '0.8') }}>
                    
                    {/* Header Image/Gradient */}
                    <div className={`h-40 ${selectedItem.bg} border-b-2 ${selectedItem.border} relative flex flex-col items-center justify-center`}>
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay" />
                      <div className={`w-20 h-20 rounded-full bg-dark-900 border-4 ${selectedItem.border} flex items-center justify-center shadow-[0_0_30px_${selectedItem.glow}] z-10`} style={{ transform: "translateZ(30px)" }}>
                        <div className={selectedItem.color}>{selectedItem.icon}</div>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-4" style={{ transform: "translateZ(20px)" }}>
                        <div>
                          <h3 className={`text-2xl font-display font-bold drop-shadow ${selectedItem.color}`}>{selectedItem.name}</h3>
                          <div className="text-xs font-bold text-stone uppercase tracking-widest">{selectedItem.type} &middot; <span className={selectedItem.color}>{selectedItem.rarity}</span></div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-display font-bold text-white">Lvl {selectedItem.level}</div>
                        </div>
                      </div>

                      {/* XP Bar */}
                      <div className="mb-6" style={{ transform: "translateZ(10px)" }}>
                        <div className="flex justify-between text-[10px] font-bold text-stone mb-1 tracking-widest uppercase">
                          <span>Experience</span>
                          <span>{selectedItem.xp}</span>
                        </div>
                        <div className="h-1.5 w-full bg-dark-900 rounded-full overflow-hidden shadow-inner border border-stone/30">
                          <div className={`h-full ${selectedItem.bg.replace('/10', '')} w-[85%]`} style={{ backgroundColor: selectedItem.glow.replace('0.5', '1'), boxShadow: `0 0 10px ${selectedItem.glow}` }} />
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-2 mb-6" style={{ transform: "translateZ(15px)" }}>
                        {Object.entries(selectedItem.stats).map(([stat, val]) => (
                          <div key={stat} className="bg-dark-900 border border-stone/30 rounded p-2 text-center shadow-inner">
                            <div className="text-white font-bold">{val}</div>
                            <div className="text-[9px] text-stone uppercase tracking-widest">{stat}</div>
                          </div>
                        ))}
                      </div>

                      <div className="text-sm text-stone/90 leading-relaxed italic mb-6 border-l-2 pl-3" style={{ borderLeftColor: selectedItem.glow.replace('0.5','0.8'), transform: "translateZ(20px)" }}>
                        "{selectedItem.desc}"
                      </div>

                      <div className="mt-auto" style={{ transform: "translateZ(10px)" }}>
                        <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-3 border-b border-stone/30 pb-2">Equipped In Quests</h4>
                        <ul className="space-y-2">
                          {selectedItem.projects.map(proj => (
                            <li key={proj} className="text-xs text-stone flex items-center gap-2 before:content-[''] before:w-1 before:h-1 before:bg-primary before:rounded-full">
                              {proj}
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

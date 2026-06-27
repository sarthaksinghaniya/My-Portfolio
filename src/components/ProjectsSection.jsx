"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaBook, FaStar, FaBolt } from "react-icons/fa";
import TiltCard from "./TiltCard";
import MagneticElement from "./MagneticElement";

const battleCards = [
  {
    id: 1,
    title: "AI Agent Framework",
    status: "Active Deployment",
    rarity: "Legendary",
    difficulty: 95,
    impact: 100,
    performance: 98,
    description: "An autonomous agent workflow engine that reasons, plans, and writes code for complex software development tasks.",
    tech: ["Python", "LangChain", "Next.js", "Redis"],
    links: { github: "#", demo: "#", caseStudy: "#" },
    achievements: ["Hackathon Winner", "Open Source Pick"],
    gradient: "from-[#2A1B38] via-[#4C1D95] to-[#7C4DFF]",
    borderGlow: "rgba(124, 77, 255, 0.8)",
    textColor: "text-purple-mystic"
  },
  {
    id: 2,
    title: "Neural Search Engine",
    status: "In Progress",
    rarity: "Epic",
    difficulty: 85,
    impact: 90,
    performance: 95,
    description: "Semantic search engine utilizing vector embeddings to query documentation at lightning speed.",
    tech: ["FastAPI", "Pinecone", "React", "TensorFlow"],
    links: { github: "#" },
    achievements: ["Performance Optimization"],
    gradient: "from-[#0F3B2E] via-[#122C34] to-[#1E3A8A]",
    borderGlow: "rgba(61, 220, 151, 0.8)",
    textColor: "text-emerald-magic"
  },
  {
    id: 3,
    title: "Hackathon Matchmaker",
    status: "Completed",
    rarity: "Epic",
    difficulty: 75,
    impact: 85,
    performance: 90,
    description: "A platform matching developers based on complementary skills to build the ultimate hackathon squads.",
    tech: ["React", "Node.js", "MongoDB"],
    links: { github: "#", demo: "#" },
    achievements: ["1000+ Users"],
    gradient: "from-[#3B2A0C] via-[#2C1D34] to-[#4C1D95]",
    borderGlow: "rgba(247, 201, 72, 0.8)",
    textColor: "text-primary"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 min-h-screen flex items-center z-10 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4 text-glow">Battle Arena</h2>
          <p className="text-stone text-lg">Legendary Relics & Forged Projects</p>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(247,201,72,0.8)] mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {battleCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50, rotateY: 30 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 100, damping: 12 }}
              className="relative group h-full"
            >
              <TiltCard intensity={15} className="h-full">
                
                {/* Holographic Border Effect */}
                <div 
                  className={`absolute -inset-1 rounded-2xl bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0 blur-[2px] ${card.rarity === 'Legendary' ? 'animate-[spin_4s_linear_infinite]' : ''}`} 
                  style={{ background: `linear-gradient(45deg, transparent, ${card.borderGlow}, transparent)` }}
                />

                <div className="game-card flex flex-col h-full bg-dark-900 border-2 relative overflow-hidden rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.8)] z-10 p-0" style={{ borderColor: card.borderGlow.replace('0.8', '0.4') }}>
                  
                  {/* Artwork / Top Half */}
                  <div className={`h-64 relative bg-gradient-to-br ${card.gradient} flex flex-col justify-between p-4`} style={{ transform: "translateZ(10px)" }}>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
                    
                    {/* Header */}
                    <div className="flex justify-between items-start z-10" style={{ transform: "translateZ(20px)" }}>
                      <div className="bg-dark-900/80 backdrop-blur border border-white/20 px-3 py-1 rounded text-[10px] font-bold text-white tracking-widest uppercase shadow">
                        {card.status}
                      </div>
                      <div className={`flex items-center gap-1 ${card.textColor} drop-shadow-[0_0_5px_currentColor]`}>
                        {card.rarity === 'Legendary' ? <><FaStar /><FaStar /><FaStar /></> : <><FaStar /><FaStar /></>}
                      </div>
                    </div>

                    {/* Stats Grid Overlay */}
                    <div className="absolute inset-x-4 bottom-4 z-10 flex gap-2" style={{ transform: "translateZ(30px)" }}>
                      <div className="flex-1 bg-dark-900/90 backdrop-blur border border-stone/30 rounded p-2 text-center shadow-lg">
                        <div className="text-white font-display font-bold">{card.difficulty}</div>
                        <div className="text-[8px] text-stone uppercase tracking-widest">Difficulty</div>
                      </div>
                      <div className="flex-1 bg-dark-900/90 backdrop-blur border border-stone/30 rounded p-2 text-center shadow-lg">
                        <div className="text-white font-display font-bold">{card.impact}</div>
                        <div className="text-[8px] text-stone uppercase tracking-widest">Impact</div>
                      </div>
                      <div className="flex-1 bg-dark-900/90 backdrop-blur border border-stone/30 rounded p-2 text-center shadow-lg">
                        <div className="text-white font-display font-bold flex items-center justify-center gap-1"><FaBolt className="text-primary text-[10px]"/>{card.performance}</div>
                        <div className="text-[8px] text-stone uppercase tracking-widest">Perf.</div>
                      </div>
                    </div>
                  </div>

                  {/* Body / Bottom Half */}
                  <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-dark-800 to-dark-900 relative">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone/50 to-transparent" />

                    <h3 className={`text-2xl font-display font-bold mb-3 drop-shadow ${card.textColor}`} style={{ transform: "translateZ(25px)" }}>{card.title}</h3>
                    <p className="text-stone/90 text-sm mb-6 flex-grow leading-relaxed" style={{ transform: "translateZ(15px)" }}>{card.description}</p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6" style={{ transform: "translateZ(20px)" }}>
                      {card.tech.map(tech => (
                        <span key={tech} className="text-[10px] px-2 py-1 bg-dark-900 border border-stone/40 shadow-inner rounded text-stone group-hover:text-white transition-colors tracking-widest uppercase">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div className="mb-6 space-y-1" style={{ transform: "translateZ(15px)" }}>
                      {card.achievements.map((ach, i) => (
                        <div key={i} className="text-xs text-primary font-bold flex items-center gap-2">
                          <FaStar size={10} /> {ach}
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4 pt-4 border-t border-stone/30 mt-auto" style={{ transform: "translateZ(25px)" }}>
                      {card.links.github && (
                        <MagneticElement intensity={0.2} className="flex-1">
                          <a href={card.links.github} className="game-button w-full flex items-center justify-center text-xs py-2 gap-2">
                            <FaGithub size={14} /> REPOSITORY
                          </a>
                        </MagneticElement>
                      )}
                      {card.links.demo && (
                        <MagneticElement intensity={0.2} className="flex-1">
                          <a href={card.links.demo} className="game-button w-full flex items-center justify-center text-xs py-2 gap-2">
                            <FaExternalLinkAlt size={14} /> DEPLOY
                          </a>
                        </MagneticElement>
                      )}
                    </div>

                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

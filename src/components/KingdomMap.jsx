"use client";

import { motion } from "framer-motion";
import { FaChessRook, FaBrain, FaShieldAlt, FaTrophy, FaScroll, FaAward, FaPaperPlane } from "react-icons/fa";
import TiltCard from "./TiltCard";
import MagneticElement from "./MagneticElement";

const kingdomLocations = [
  { id: "about", name: "The Castle", icon: <FaChessRook size={40} />, desc: "Lore & Origin", color: "text-stone", glow: "rgba(62,71,88,0.5)" },
  { id: "skills", name: "AI Tower", icon: <FaBrain size={40} />, desc: "Weapons & Magic", color: "text-blue-royal", glow: "rgba(79,140,255,0.5)" },
  { id: "projects", name: "Battle Arena", icon: <FaShieldAlt size={40} />, desc: "Conquered Realms", color: "text-primary", glow: "rgba(247,201,72,0.5)" },
  { id: "achievements", name: "Hall of Fame", icon: <FaTrophy size={40} />, desc: "Unlocked Relics", color: "text-emerald-magic", glow: "rgba(61,220,151,0.5)" },
  { id: "journey", name: "Guild Hall", icon: <FaScroll size={40} />, desc: "Campaign Mode", color: "text-purple-mystic", glow: "rgba(124,77,255,0.5)" },
  { id: "certificates", name: "The Academy", icon: <FaAward size={40} />, desc: "Scrolls of Wisdom", color: "text-primary", glow: "rgba(247,201,72,0.5)" },
  { id: "contact", name: "Messenger Tower", icon: <FaPaperPlane size={40} />, desc: "Send a Raven", color: "text-stone", glow: "rgba(62,71,88,0.5)" }
];

export default function KingdomMap() {
  
  const handleTravel = (id) => {
    // In a full implementation, this could open a modal or use Next.js routing.
    // For now, we scroll smoothly to the section ID.
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="map" className="relative py-32 min-h-screen flex items-center z-10 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4 text-glow">Map of the Kingdom</h2>
          <p className="text-stone text-lg">Select a territory to explore</p>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(247,201,72,0.8)] mt-4" />
        </motion.div>

        {/* 2D Landscape Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10">
          {kingdomLocations.map((loc, index) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="h-full"
            >
              <TiltCard intensity={10} className="h-full">
                <MagneticElement intensity={0.1}>
                  <div 
                    onClick={() => handleTravel(loc.id)}
                    className="group cursor-pointer flex flex-col items-center justify-center h-48 md:h-56 bg-gradient-to-b from-dark-800 to-dark-900 border-2 border-stone/30 rounded-xl relative overflow-hidden transition-all duration-300 hover:border-primary/60 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8),0_5px_15px_rgba(0,0,0,0.5)]"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    {/* Background glow on hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl" 
                      style={{ backgroundColor: loc.color.replace('text-', 'bg-') }} 
                    />
                    
                    {/* Map Grid Pattern */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-20 mix-blend-overlay" />

                    <div className={`w-20 h-20 rounded-full bg-dark-900 border-2 border-stone/50 flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 shadow-inner z-10 ${loc.color}`} style={{ transform: "translateZ(20px)", boxShadow: `inset 0 0 10px rgba(0,0,0,0.8), 0 0 15px ${loc.glow}` }}>
                      {loc.icon}
                    </div>

                    <h3 className="font-display font-bold text-white text-lg tracking-wider group-hover:text-primary transition-colors z-10" style={{ transform: "translateZ(25px)" }}>{loc.name}</h3>
                    <p className="text-xs text-stone font-bold uppercase tracking-widest mt-1 z-10" style={{ transform: "translateZ(15px)" }}>{loc.desc}</p>
                    
                    <div className="absolute bottom-2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-primary font-bold tracking-widest z-10" style={{ transform: "translateZ(5px)" }}>
                      ENTER REGION
                    </div>
                  </div>
                </MagneticElement>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

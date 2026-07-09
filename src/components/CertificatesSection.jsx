"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import TiltCard from "./TiltCard";
import MagneticElement from "./MagneticElement";
import { certifications, proofLink } from "../data/content";

const categories = ["All", "AI", "Development", "Leadership", "Hackathons", "Internships"];

export default function CertificatesSection() {
  const [filter, setFilter] = useState("All");

  const filteredCerts = filter === "All" 
    ? certifications 
    : certifications.filter(c => c.category === filter);

  return (
    <section id="certificates" className="relative py-24 min-h-screen z-10 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4 text-glow">Hall of Records</h2>
          <p className="text-stone text-lg">Honors, Relics & Achievements</p>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(247,201,72,0.8)] mt-4" />
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <MagneticElement intensity={0.1} key={cat}>
              <button
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded text-xs font-bold tracking-widest uppercase transition-all duration-300 border-2
                  ${filter === cat 
                    ? 'bg-primary/10 border-primary text-primary shadow-[inset_0_0_10px_rgba(247,201,72,0.2),0_0_15px_rgba(247,201,72,0.4)]' 
                    : 'bg-dark-900 border-stone/30 text-stone hover:border-stone hover:text-white'
                  }`}
              >
                {cat}
              </button>
            </MagneticElement>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredCerts.map((cert) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                key={cert.id}
              >
                <TiltCard intensity={5} className="h-full">
                  <div className="game-card p-4 relative group h-full bg-dark-900 border border-stone/30 flex flex-col hover:border-primary/50 transition-colors duration-500">
                    
                    {/* Image / Placeholder Scroll */}
                    <div className="relative w-full aspect-video overflow-hidden rounded border border-stone/30 mb-4 bg-dark-800 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-tr from-dark-900 via-primary/5 to-dark-800" />
                      <div className="text-stone/50 font-display font-bold uppercase tracking-widest text-center px-4 z-10" style={{ transform: "translateZ(10px)" }}>
                        {cert.title}
                      </div>
                      
                      <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <div className="flex flex-col flex-grow">
                      <div className="text-[10px] text-primary font-bold uppercase tracking-widest mb-1">{cert.category}</div>
                      <h3 className="text-lg font-display font-bold text-white mb-2 leading-tight">{cert.title}</h3>
                      <div className="text-stone text-xs mt-auto flex items-center justify-between">
                        <span>Issued by</span>
                        <span className="font-bold text-white">{cert.issuer}</span>
                      </div>
                    </div>
                    
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All / Proof Link Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <MagneticElement intensity={0.2}>
            <a 
              href={proofLink}
              target="_blank"
              rel="noopener noreferrer"
              className="game-button flex items-center justify-center gap-3 w-64 md:w-80"
            >
              <span className="tracking-widest">UNLOCK MORE RELICS</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </MagneticElement>
        </motion.div>
      </div>
    </section>
  );
}

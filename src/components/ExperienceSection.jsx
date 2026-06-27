"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import TiltCard from "./TiltCard";

const campaignLevels = [
  {
    level: 1,
    title: "Content Writer",
    role: "The Beginning",
    description: "Started the journey by sharing knowledge and building a foundational understanding of tech concepts.",
    year: "2020",
    position: "left"
  },
  {
    level: 5,
    title: "Python Intern",
    role: "First Quest",
    description: "Entered the professional realm, scripting solutions and automating tasks to gain real-world experience.",
    year: "2021",
    position: "right"
  },
  {
    level: 10,
    title: "Founder",
    role: "Leadership",
    description: "Established a tech community, leading teams and building products from the ground up.",
    year: "2023",
    position: "left"
  },
  {
    level: 15,
    title: "AI Engineer",
    role: "Current Mastery",
    description: "Architecting intelligent systems and pioneering AI solutions for complex problems.",
    year: "Present",
    position: "right"
  }
];

export default function ExperienceSection() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate the connecting path drawing down
    if (lineRef.current && glowRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        }
      });
      
      tl.fromTo([lineRef.current, glowRef.current], 
        { height: "0%" },
        { height: "100%", ease: "none" }
      );
    }
  }, []);

  return (
    <section id="journey" className="relative py-24 min-h-screen z-10 pointer-events-auto">
      <div className="max-w-4xl mx-auto px-6 md:px-12 w-full" ref={containerRef}>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4 text-glow">Campaign Mode</h2>
          <p className="text-stone text-lg">The Journey of a Thousand Lines</p>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(247,201,72,0.8)] mt-4" />
        </motion.div>

        <div className="relative">
          {/* Background Path Line (Carved Stone) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-dark-900 border-x border-stone/30 -translate-x-1/2 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]" />
          
          {/* Animated Path Line (Magical Stream) */}
          <div 
            ref={glowRef}
            className="absolute left-1/2 top-0 w-8 bg-primary/20 blur-xl -translate-x-1/2 z-0 mix-blend-screen"
          />
          <div 
            ref={lineRef} 
            className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-white via-primary to-primary -translate-x-1/2 shadow-[0_0_15px_rgba(247,201,72,0.8)] z-0 rounded-full" 
          />

          <div className="space-y-24">
            {campaignLevels.map((campaign, index) => (
              <motion.div 
                key={campaign.level}
                initial={{ opacity: 0, x: campaign.position === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex items-center ${campaign.position === "left" ? "flex-row-reverse" : "flex-row"} w-full z-10`}
              >
                
                {/* Content Card */}
                <div className={`w-5/12 ${campaign.position === "left" ? "text-right pr-8" : "text-left pl-8"}`}>
                  <TiltCard intensity={5} className="inline-block w-full max-w-sm">
                    <div className="game-card p-6 relative bg-gradient-to-br from-dark-800 to-dark-900 group border border-stone/20">
                      <span className="absolute -top-3 -right-3 bg-dark-900 border-2 border-primary text-primary text-xs font-bold px-3 py-1 shadow-[0_0_15px_rgba(247,201,72,0.6)] z-10" style={{ transform: "translateZ(20px)" }}>
                        {campaign.year}
                      </span>
                      <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-primary transition-colors" style={{ transform: "translateZ(25px)" }}>{campaign.title}</h3>
                      <h4 className="text-primary font-bold tracking-widest text-sm uppercase mb-4" style={{ transform: "translateZ(15px)" }}>{campaign.role}</h4>
                      <p className="text-stone text-sm leading-relaxed" style={{ transform: "translateZ(10px)" }}>{campaign.description}</p>
                    </div>
                  </TiltCard>
                </div>

                {/* Level Node (Center) */}
                <div className="w-2/12 flex justify-center relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-dark-900 to-dark-800 border-2 border-primary flex items-center justify-center shadow-[inset_0_2px_5px_rgba(255,255,255,0.2),0_0_20px_rgba(247,201,72,0.6)] z-20 group hover:scale-110 transition-transform cursor-crosshair">
                    <span className="font-display font-bold text-white text-xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                      {campaign.level}
                    </span>
                    {/* Ripple effect */}
                    <div className="absolute inset-0 rounded-full border border-primary/50 animate-ping opacity-20" />
                  </div>
                </div>

                {/* Empty Space for the other side */}
                <div className="w-5/12" />
                
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

// Circular Progress Component
const StatRing = ({ label, percentage, colorClass }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Background Ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke="rgba(62, 71, 88, 0.3)" /* stone/30 */
            strokeWidth="8"
          />
          {/* Progress Ring */}
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            className={colorClass}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        <span className="font-display font-bold text-lg text-white">{percentage}%</span>
      </div>
      <span className="text-xs uppercase tracking-widest text-stone text-center font-semibold">{label}</span>
    </div>
  );
};

export default function KingdomSection() {
  return (
    <section id="kingdom" className="relative py-24 min-h-screen flex items-center bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4 text-glow">The Kingdom</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(247,201,72,0.8)]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Character Profile */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="game-card p-8 lg:col-span-1 flex flex-col gap-6"
          >
            <div className="border-b border-stone/50 pb-4">
              <h3 className="text-2xl font-display text-white mb-1">Character Profile</h3>
              <p className="text-primary font-bold tracking-wide">Rank: Grandmaster Architect</p>
            </div>
            
            <div className="space-y-4 text-stone text-sm leading-relaxed">
              <div>
                <strong className="text-white block mb-1">Mission:</strong>
                <p>To forge intelligent systems and scalable architectures that bridge the gap between human creativity and artificial intelligence.</p>
              </div>
              <div>
                <strong className="text-white block mb-1">Vision:</strong>
                <p>A connected digital realm where AI empowers every individual to achieve their maximum potential, built on the foundations of open-source and community.</p>
              </div>
              <div className="p-4 bg-dark-900 border border-primary/30 rounded-lg shadow-inner">
                <strong className="text-primary block mb-1 text-xs uppercase tracking-wider">Current Quest</strong>
                <p className="text-white font-medium">Building scalable AI agents for automated coding workflows.</p>
              </div>
            </div>
          </motion.div>

          {/* Stats & Attributes */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="game-card p-8 lg:col-span-2 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-display text-white mb-8 text-center border-b border-stone/50 pb-4">Attributes & Masteries</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6">
              <StatRing label="AI & ML" percentage={95} colorClass="stroke-purple-mystic" />
              <StatRing label="Backend" percentage={90} colorClass="stroke-blue-royal" />
              <StatRing label="Frontend" percentage={85} colorClass="stroke-emerald-magic" />
              <StatRing label="Leadership" percentage={88} colorClass="stroke-primary" />
              <StatRing label="Problem Solving" percentage={92} colorClass="stroke-white" />
              <StatRing label="Innovation" percentage={90} colorClass="stroke-primary" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

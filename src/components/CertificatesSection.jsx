"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { FaTimes, FaSearchPlus } from "react-icons/fa";

const categories = ["All", "Hackathons", "AI", "Internships", "Leadership", "Development"];

const certificates = [
  { id: 1, title: "Deep Learning Specialization", issuer: "Coursera", category: "AI", img: "https://via.placeholder.com/600x400/08111D/F7C948?text=Deep+Learning" },
  { id: 2, title: "Smart India Hackathon", issuer: "Govt of India", category: "Hackathons", img: "https://via.placeholder.com/600x400/08111D/F7C948?text=SIH+Winner" },
  { id: 3, title: "Python for Data Science", issuer: "IBM", category: "Development", img: "https://via.placeholder.com/600x400/08111D/F7C948?text=Python+DS" },
  { id: 4, title: "Software Engineering Intern", issuer: "Tech Corp", category: "Internships", img: "https://via.placeholder.com/600x400/08111D/F7C948?text=SWE+Intern" },
  { id: 5, title: "Community Lead", issuer: "GDSC", category: "Leadership", img: "https://via.placeholder.com/600x400/08111D/F7C948?text=GDSC+Lead" },
  { id: 6, title: "Advanced React Patterns", issuer: "Frontend Masters", category: "Development", img: "https://via.placeholder.com/600x400/08111D/F7C948?text=React+Pro" },
];

export default function CertificatesSection() {
  const [filter, setFilter] = useState("All");
  const [selectedCert, setSelectedCert] = useState(null);

  const filteredCerts = filter === "All" ? certificates : certificates.filter(c => c.category === filter);

  return (
    <section id="certificates" className="relative py-24 min-h-screen bg-dark-800/80">
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4 text-glow">The Hall of Records</h2>
          <p className="text-stone text-lg">Scrolls & Certifications</p>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(247,201,72,0.8)] mt-4" />
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 font-display text-sm uppercase tracking-wider rounded-md border transition-all duration-300 ${
                filter === cat 
                  ? "bg-primary text-dark-900 border-primary shadow-[0_0_15px_rgba(247,201,72,0.6)]" 
                  : "bg-dark-900 text-stone border-stone/50 hover:border-primary/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCerts.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="game-card p-2 cursor-pointer group"
                onClick={() => setSelectedCert(cert)}
              >
                <div className="relative h-48 w-full overflow-hidden rounded bg-dark-900 border border-stone/30">
                  {/* Using standard img for placeholder. Use next/image for real images */}
                  <img src={cert.img} alt={cert.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />
                  
                  <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <FaSearchPlus size={32} className="text-primary" />
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-display font-bold text-white mb-1 group-hover:text-primary transition-colors">{cert.title}</h3>
                  <p className="text-xs text-stone uppercase tracking-widest">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Modal / Popup Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/90 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="game-card p-2 max-w-4xl w-full relative"
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-dark-900 border-2 border-primary rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-dark-900 transition-colors z-10 shadow-[0_0_15px_rgba(247,201,72,0.8)]"
              >
                <FaTimes />
              </button>
              
              <div className="bg-dark-900 p-1 border border-stone/30 rounded">
                <img src={selectedCert.img} alt={selectedCert.title} className="w-full h-auto object-contain rounded" />
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-3xl font-display font-bold text-primary mb-2 text-glow">{selectedCert.title}</h3>
                <p className="text-stone uppercase tracking-widest">{selectedCert.issuer} &middot; {selectedCert.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

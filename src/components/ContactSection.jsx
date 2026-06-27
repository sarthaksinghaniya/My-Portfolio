"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactSection() {
  const [status, setStatus] = useState("idle"); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate sending
    setTimeout(() => {
      setStatus("success");
      
      // Reset after a while
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="relative py-24 min-h-screen flex items-center bg-dark-900 bg-[url('/bg-pattern.png')] bg-repeat">
      <div className="absolute inset-0 bg-dark-900/90 z-0" />
      
      <div className="max-w-3xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4 text-glow">Messenger Tower</h2>
          <p className="text-stone text-lg">Send a raven to the Grandmaster</p>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(247,201,72,0.8)] mt-4" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="game-card p-8 md:p-12 relative overflow-hidden"
        >
          {/* Status Overlay */}
          {status === "success" && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-dark-800/90 backdrop-blur z-20 flex flex-col items-center justify-center text-center p-8"
            >
              {/* Add Lottie here if needed. Using Framer Motion for now */}
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: -50, opacity: 1, x: [0, 20, -20, 0] }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="text-primary mb-4"
              >
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13" />
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                </svg>
              </motion.div>
              
              <h3 className="text-2xl font-display font-bold text-white mb-2">Messenger Sent!</h3>
              <p className="text-stone">Your raven is flying across the realm.</p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-display font-bold text-stone uppercase tracking-wider">Player Name</label>
              <input 
                type="text" 
                id="name" 
                required
                className="bg-dark-900 border border-stone/50 rounded p-3 text-white focus:outline-none focus:border-primary transition-colors shadow-inner"
                placeholder="Enter your name..."
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-display font-bold text-stone uppercase tracking-wider">Scroll Address (Email)</label>
              <input 
                type="email" 
                id="email" 
                required
                className="bg-dark-900 border border-stone/50 rounded p-3 text-white focus:outline-none focus:border-primary transition-colors shadow-inner"
                placeholder="Enter your email..."
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-display font-bold text-stone uppercase tracking-wider">Message</label>
              <textarea 
                id="message" 
                required
                rows={5}
                className="bg-dark-900 border border-stone/50 rounded p-3 text-white focus:outline-none focus:border-primary transition-colors shadow-inner resize-none"
                placeholder="Write your message here..."
              />
            </div>

            <button 
              type="submit" 
              disabled={status === "sending"}
              className="game-button mt-4 flex justify-center items-center gap-2 group disabled:opacity-50"
            >
              {status === "sending" ? "SUMMONING RAVEN..." : (
                <>
                  <FaPaperPlane className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  SEND MESSENGER
                </>
              )}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}

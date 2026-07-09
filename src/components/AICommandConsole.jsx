"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal, FaTimes, FaChevronRight, FaRobot } from 'react-icons/fa';
import { kb } from '../data/ai_knowledge';
import MagneticElement from './MagneticElement';

export default function AICommandConsole() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'system', text: 'AI_TWIN_INITIALIZED V2.0.0' },
    { role: 'bot', text: `Welcome to the Command Console. I am the AI construct of ${kb.profile.firstName}. Type "help" for a list of commands, or ask me about my profile.` }
  ]);
  const [input, setInput] = useState('');
  const listRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, open]);

  const send = (text) => {
    const msg = text.trim();
    if (!msg) return;
    
    setMessages(prev => [...prev, { role: 'user', text: msg }]);
    setInput('');
    
    const lower = msg.toLowerCase();
    let reply = "UNKNOWN_COMMAND. Type 'help' for available queries.";
    
    // Strict responses from kb
    if (/(help|commands)/.test(lower)) {
      reply = "AVAILABLE QUERIES:\n- profile\n- skills\n- projects\n- experience\n- contact\n- github\n- clear";
    } else if (/(clear)/.test(lower)) {
      setMessages([{ role: 'system', text: 'CONSOLE_CLEARED' }]);
      return;
    } else if (/(profile|who|about)/.test(lower)) {
      reply = `[PROFILE DATA]\nName: ${kb.profile.name}\nClass: ${kb.profile.title}\nBio: ${kb.profile.bio}\nLocation: ${kb.profile.location}\nStatus: ${kb.profile.availability}`;
    } else if (/(skills|stack|tech)/.test(lower)) {
      reply = `[SKILL INVENTORY]\nExpert: ${kb.skills.proficiency.expert.join(', ')}\nAdvanced: ${kb.skills.proficiency.advanced.join(', ')}\nSoft Skills: ${kb.skills.soft.leadership.join(', ')}`;
    } else if (/(projects|work)/.test(lower)) {
      const projs = kb.utils.getTopProjects(3).map(p => `- ${p.title}: ${p.technologies.join(', ')}`).join('\n');
      reply = `[TOP QUESTS]\n${projs}`;
    } else if (/(experience|job)/.test(lower)) {
      const exp = kb.experience[0];
      reply = `[CURRENT CAMPAIGN]\nRole: ${exp.role}\nGuild: ${exp.company}\nPeriod: ${exp.period}\nIntel: ${exp.description}`;
    } else if (/(contact|email|links)/.test(lower)) {
      const links = kb.utils.getAllLinks();
      reply = `[COMMUNICATION CHANNELS]\nEmail: ${links.email}\nLinkedIn: ${links.linkedin}\nGitHub: ${links.github}\nResume: ${links.resume}`;
    } else if (/(github)/.test(lower)) {
      reply = `[GITHUB UPLINK]\nInitiating connection to ${kb.contact.social.github}...`;
      setTimeout(() => window.open(kb.contact.social.github, '_blank', 'noopener'), 1000);
    } else {
      // Fallback AI processing simulation
      reply = `[AI_PROCESS] Analyzing query: "${msg}". Insufficient parameters to match knowledge base. Refer to 'help' for core commands.`;
    }
    
    // Simulate typing delay
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: reply }]);
    }, 400);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      send(input);
    }
  };

  const panel = (
    <motion.div
      key="console"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.95 }}
      transition={{ duration: 0.3, type: "spring", damping: 20 }}
      className="fixed bottom-24 right-4 md:right-6 z-[80] w-[calc(100vw-2rem)] md:w-[450px] bg-dark-900 border-2 border-primary shadow-[0_0_30px_rgba(247,201,72,0.3)] flex flex-col font-mono text-sm rounded-lg overflow-hidden"
      style={{ maxHeight: '60vh' }}
    >
      {/* Console Header */}
      <div className="bg-dark-800 border-b-2 border-primary p-3 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs">
          <FaTerminal className="animate-pulse" />
          <span>{kb.profile.firstName}_AI_CONSTRUCT</span>
        </div>
        <button 
          onClick={() => setOpen(false)}
          className="text-stone hover:text-white transition-colors"
        >
          <FaTimes />
        </button>
      </div>

      {/* Output Screen */}
      <div 
        ref={listRef} 
        className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#0a0a0a] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] relative h-64 md:h-80 custom-scrollbar"
      >
        <div className="absolute inset-0 bg-primary/5 pointer-events-none mix-blend-overlay" />
        
        {messages.map((m, i) => (
          <div key={i} className={`relative z-10 whitespace-pre-wrap ${m.role === 'user' ? 'text-white' : m.role === 'system' ? 'text-stone/70 italic text-xs' : 'text-primary'}`}>
            {m.role === 'user' ? (
              <div className="flex items-start gap-2">
                <FaChevronRight className="text-stone mt-1 text-[10px] shrink-0" />
                <span>{m.text}</span>
              </div>
            ) : m.role === 'system' ? (
              <div className="text-center w-full my-2">{m.text}</div>
            ) : (
              <div className="flex items-start gap-2">
                <FaRobot className="mt-1 text-[12px] shrink-0" />
                <span className="drop-shadow-[0_0_2px_rgba(247,201,72,0.8)]">{m.text}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="bg-dark-800 border-t-2 border-primary/50 p-3 flex items-center gap-2">
        <FaChevronRight className="text-primary text-xs" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="ENTER COMMAND..."
          className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-stone/50 font-mono text-sm uppercase tracking-wider"
          autoFocus
        />
        <button 
          onClick={() => send(input)}
          className="px-3 py-1 bg-primary/20 text-primary border border-primary/50 hover:bg-primary/40 transition-colors uppercase tracking-widest text-[10px] font-bold rounded"
        >
          EXECUTE
        </button>
      </div>
    </motion.div>
  );

  return (
    <>
      {/* HUD Trigger */}
      <MagneticElement intensity={0.2}>
        <button
          onClick={() => setOpen(!open)}
          className={`fixed bottom-6 right-6 z-[70] w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] ${open ? 'bg-primary border-white text-dark-900 shadow-[0_0_20px_rgba(247,201,72,0.8)]' : 'bg-dark-900 border-primary text-primary hover:bg-primary/10'}`}
        >
          <FaTerminal size={20} className={open ? '' : 'animate-pulse'} />
        </button>
      </MagneticElement>

      <AnimatePresence>{open && panel}</AnimatePresence>
    </>
  );
}

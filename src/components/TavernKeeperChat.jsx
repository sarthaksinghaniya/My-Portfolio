"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHatWizard, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { kb } from '../data/ai_knowledge';
import { gameStats } from '../data/content';

function getTavernKeeperResponse(input) {
  const lower = input.toLowerCase();
  
  if (lower.includes("skill") || lower.includes("stack") || lower.includes("tech") || lower.includes("know") || lower.includes("language")) {
    const topSkills = kb.utils.getPrimarySkills().join(", ");
    return {
      text: `Ah, you seek to know Sarthak's arsenal! His most potent spells include: ${topSkills}. He possesses mastery over ${kb.skills.technical.languages.length} languages and ${kb.skills.technical.ai_ml.length} AI/ML arcane arts.`,
      action: { type: 'scroll', target: 'skills' },
      suggestions: ["View his projects", "Where did he learn this?"]
    };
  }
  
  if (lower.includes("project") || lower.includes("portfolio") || lower.includes("relic") || lower.includes("build") || lower.includes("create")) {
    const projects = kb.utils.getTopProjects(3).map(p => `• ${p.title}: ${p.description}`).join('\n');
    return {
      text: `He has forged many legendary relics! Some of his most renowned creations include:\n\n${projects}\n\nYou can see them all in the Projects arena!`,
      action: { type: 'scroll', target: 'projects' },
      suggestions: ["Open GitHub", "Tell me about his experience"]
    };
  }
  
  if (lower.includes("github") || lower.includes("git")) {
    return {
      text: `Opening the great vault of his source code! Summoning GitHub...`,
      action: { type: 'open', url: kb.contact.social.github },
      suggestions: ["Open LinkedIn", "What are his skills?"]
    };
  }

  if (lower.includes("linkedin")) {
    return {
      text: `Opening the professional guild records... Summoning LinkedIn!`,
      action: { type: 'open', url: kb.contact.social.linkedin },
      suggestions: ["Open GitHub", "Send an email"]
    };
  }
  
  if (lower.includes("contact") || lower.includes("email") || lower.includes("hire") || lower.includes("reach") || lower.includes("social") || lower.includes("phone")) {
    return {
      text: `You wish to summon him? You can send a missive via email at ${kb.contact.email}, call his runestone at ${kb.contact.phone}, or find him at the Guild Halls of LinkedIn and GitHub!`,
      action: { type: 'scroll', target: 'contact' },
      suggestions: ["Open LinkedIn", "Open GitHub"]
    };
  }
  
  if (lower.includes("experience") || lower.includes("job") || lower.includes("intern") || lower.includes("work")) {
    const exp = kb.experience.slice(0, 3).map(e => `• ${e.role} at ${e.company}`).join('\n');
    return {
      text: `Sarthak has adventured far and wide! Currently, he is:\n\n${exp}`,
      action: { type: 'scroll', target: 'experience' },
      suggestions: ["Tell me about TechNeekX", "What are his projects?"]
    };
  }

  if (lower.includes("level") || lower.includes("class") || lower.includes("guild") || lower.includes("stat")) {
    return {
      text: `Sarthak is a Level ${gameStats.level} ${gameStats.playerClass}! He leads the ${gameStats.guild} and has participated in ${gameStats.stats.find(s => s.label === "Hackathons")?.value || "70+"} Hackathons!`,
      action: null,
      suggestions: ["Tell me about TechNeekX", "Any achievements?"]
    };
  }

  if (lower.includes("education") || lower.includes("college") || lower.includes("university") || lower.includes("degree") || lower.includes("study")) {
    const edu = kb.profile.name === 'Sarthak Singhaniya' ? "pursuing his B.Tech in CSE (Artificial Intelligence) at Babu Banarasi Das University (2024 - 2028)" : "studying ancient scrolls";
    return {
      text: `Sarthak is currently ${edu}. He is deeply focused on AI, Machine Learning, and System Design.`,
      action: null,
      suggestions: ["What are his certifications?", "What are his skills?"]
    };
  }

  if (lower.includes("hackathon") || lower.includes("compete") || lower.includes("win") || lower.includes("award") || lower.includes("achieve")) {
    const ach = kb.achievements.slice(0, 3).map(a => `• ${a.title}`).join('\n');
    return {
      text: `Sarthak is a fierce competitor in the arena! He has participated in over 70 hackathons.\nSome notable victories include:\n${ach}`,
      action: null, // Depending on if there's an achievements section
      suggestions: ["Open GitHub", "What are his projects?"]
    };
  }

  if (lower.includes("certif") || lower.includes("course") || lower.includes("learn")) {
    return {
      text: `He constantly sharpens his blade with new knowledge. He holds certifications from Google Cloud (Gen AI Studio), Kaggle (Engineering AI), and OpenAI (ChatGPT-4 for Developers), among others.`,
      action: null,
      suggestions: ["What is his education?", "View skills"]
    };
  }

  if (lower.includes("leetcode") || lower.includes("code") || lower.includes("profile") || lower.includes("cp") || lower.includes("problem")) {
    return {
      text: `Ah, the trials of logic! Sarthak has vanquished over 100+ LeetCode demons and solved 300+ challenges on Unstop.`,
      action: { type: 'open', url: kb.contact.social.leetcode },
      suggestions: ["Open GitHub", "View projects"]
    };
  }

  if (lower.includes("techneekx")) {
    return {
      text: `TechNeekX is a massive AI and developer community founded by Sarthak! He leads 100+ members, organizing codathons, workshops, and fostering innovation.`,
      action: null,
      suggestions: ["What is his experience?", "How to contact him?"]
    };
  }

  if (lower.includes("about") || lower.includes("who") || lower.includes("bio") || lower.includes("tell me")) {
    return {
      text: `Sarthak Singhaniya is an AI Engineer and Full-Stack Developer with a strong focus on Generative AI, LLM applications, and Agentic AI. He is the founder of TechNeekX, leading a massive developer community to foster innovation!`,
      action: { type: 'scroll', target: 'about' },
      suggestions: ["What are his skills?", "Show me his projects"]
    };
  }
  
  if (lower.includes("hello") || lower.includes("hi ") || lower.includes("hey") || lower.includes("greetings")) {
    return {
      text: "Greetings, traveler! Pull up a chair by the hearth. What tales of Sarthak's skills, hackathons, or projects would you like to hear today?",
      action: null,
      suggestions: ["What are his top skills?", "Open GitHub", "Tell me about him"]
    };
  }
  
  return {
    text: "Hmm, my ancient scrolls don't seem to have the exact answer to that query. But ask me about his skills, education, hackathons, projects, or how to contact him, and I shall gladly tell you!",
    action: null,
    suggestions: ["Tell me about him", "Show me his projects", "Open GitHub"]
  };
}

const DEFAULT_SUGGESTIONS = [
  "What are Sarthak's top AI skills?",
  "Tell me about his top projects.",
  "Open GitHub"
];

export default function TavernKeeperChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSuggestions, setCurrentSuggestions] = useState(DEFAULT_SUGGESTIONS);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, currentSuggestions]);

  const safeSend = (msgContent) => {
    const userMsg = { id: Date.now().toString(), role: 'user', content: msgContent };
    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);
    setCurrentSuggestions([]); // Hide suggestions while thinking

    // Simulate AI thinking delay
    setTimeout(() => {
      const response = getTavernKeeperResponse(msgContent);
      const aiMsg = { id: (Date.now() + 1).toString(), role: 'assistant', content: response.text };
      setMessages(prev => [...prev, aiMsg]);
      setIsLoading(false);
      setCurrentSuggestions(response.suggestions || []);

      // Execute Actions (Scroll or Open URL)
      if (response.action) {
        if (response.action.type === 'scroll') {
          const el = document.getElementById(response.action.target);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else if (response.action.type === 'open') {
          window.open(response.action.url, '_blank');
        }
      }
    }, 1000);
  };

  const handleSend = (e) => {
    if (e) e.preventDefault();
    if (!text.trim() || isLoading) return;
    safeSend(text);
    setText('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[calc(100vw-3rem)] sm:w-96 bg-dark-900 border-2 border-primary/50 shadow-[0_0_30px_rgba(247,201,72,0.3)] rounded-xl overflow-hidden flex flex-col h-[500px] max-h-[80vh]"
          >
            {/* Header */}
            <div className="bg-dark-800 border-b border-primary/30 p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50 text-primary">
                  <FaHatWizard size={20} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white leading-none">Tavern Keeper</h3>
                  <p className="text-xs text-primary/80 mt-1">Local Guide</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-stone hover:text-white transition-colors"
              >
                <FaTimes />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-dark-900 to-dark-800">
              {messages.length === 0 && (
                <div className="text-center text-stone/70 text-sm my-8 italic">
                  "Greetings, adventurer! Ask me anything about Sarthak's skills, quests, or lore. I can even guide you directly to his works!"
                </div>
              )}
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[85%] rounded-lg p-3 text-sm whitespace-pre-wrap ${
                      m.role === 'user' 
                        ? 'bg-primary/20 border border-primary/30 text-white rounded-br-none' 
                        : 'bg-dark-800 border border-stone/30 text-stone rounded-bl-none'
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-lg p-3 text-sm bg-dark-800 border border-stone/30 text-stone rounded-bl-none flex gap-1 items-center">
                    <span className="animate-bounce">.</span><span className="animate-bounce" style={{animationDelay: "0.2s"}}>.</span><span className="animate-bounce" style={{animationDelay: "0.4s"}}>.</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Dynamic Suggestions */}
            {currentSuggestions.length > 0 && !isLoading && (
              <div className="p-3 bg-dark-800 border-t border-primary/20 flex flex-wrap gap-2 justify-center">
                {currentSuggestions.map((sug, i) => (
                  <button 
                    key={i}
                    onClick={() => safeSend(sug)}
                    className="text-[10px] bg-dark-900 border border-primary/30 text-primary hover:bg-primary/10 px-2 py-1 rounded transition-colors"
                  >
                    {sug}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-3 bg-dark-800 border-t border-primary/30 flex gap-2">
              <input
                className="flex-1 bg-dark-900 border border-stone/30 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
                value={text}
                placeholder="Ask about Sarthak..."
                onChange={(e) => setText(e.target.value)}
              />
              <button 
                type="submit" 
                disabled={isLoading || !text.trim()}
                className="bg-primary/20 hover:bg-primary/30 border border-primary/50 text-primary w-10 flex items-center justify-center rounded transition-colors disabled:opacity-50"
              >
                <FaPaperPlane />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(247,201,72,0.4)] border-2 transition-all duration-300 ${
          isOpen ? 'bg-dark-800 border-primary text-primary scale-90' : 'bg-primary border-primary text-dark-900 hover:scale-110 hover:shadow-[0_0_30px_rgba(247,201,72,0.6)]'
        }`}
      >
        {isOpen ? <FaTimes size={20} /> : <FaHatWizard size={24} />}
      </button>
    </div>
  );
}

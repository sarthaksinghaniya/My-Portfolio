import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { kb } from '../data/ai_knowledge'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hey, I’m Sarthak’s AI twin 🤖 — I can guide you around!" },
    { role: 'bot', text: kb.bio || 'Ask about projects, stack, or achievements.' },
  ])
  const [input, setInput] = useState('')
  const listRef = useRef(null)

  const reduced = useMemo(() =>
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  , [])

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (!open) return
    const el = listRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, open])

  // External open: window.dispatchEvent(new CustomEvent('open-chat'))
  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('open-chat', handler)
    // Optional global helper
    window.openChat = () => setOpen(true)
    return () => {
      window.removeEventListener('open-chat', handler)
      delete window.openChat
    }
  }, [])

  const send = (text) => {
    const msg = text.trim()
    if (!msg) return
    setMessages(prev => [...prev, { role: 'user', text: msg }])
    setInput('')
    // Enhanced Scripted response
    const lower = msg.toLowerCase()
    let reply = "I can help with Projects, Skills, Experience, Certifications, Achievements, Coding Profiles, or provide any of Sarthak's links."
    
    if (/(project|work|build)/.test(lower)) {
      const top = (kb.projects || []).slice(0, 3).map(p => `• ${p.title} — ${p.summary?.split('.')[0] || ''}`).join('\n') || 'No projects listed yet.'
      reply = `${top}\n\nWant to jump to Projects section?`
    } else if (/(stack|tech|tools|skills)/.test(lower)) {
      const aiMl = (kb.skills?.technical?.ai_ml || []).slice(0,4).join(', ')
      const fullstack = (kb.skills?.technical?.fullstack || []).slice(0,4).join(', ')
      reply = `🤖 AI/ML: ${aiMl}\n💻 Full-Stack: ${fullstack}\n\nWant to see all Skills?`
    } else if (/(experience|intern|work exp|job)/.test(lower)) {
      const exp = (kb.experience || [])[0]
      reply = exp ? `🚀 ${exp.role} at ${exp.company} (${exp.period})\n\nKey responsibilities: ${exp.responsibilities?.slice(0,2).join('; ') || ''}` : 'Experience details coming soon.'
    } else if (/(cert|certificate|award)/.test(lower)) {
      const certs = (kb.certifications || []).slice(0,3).join('; ')
      reply = certs ? `🏆 Top certifications: ${certs}.` : 'Certifications coming soon.'
    } else if (/(achieve|milestone|honor|prize)/.test(lower)) {
      const ach = (kb.achievements || []).slice(0,2).join('; ')
      reply = ach ? `⭐ Highlights: ${ach}.` : 'Achievements coming soon.'
    } else if (/(coding|leetcode|kaggle|unstop)/.test(lower)) {
      reply = `🔗 Sarthak's Coding Profiles:\n• LeetCode: 59 problems solved, 31-day streak (${kb.contact?.social?.leetcode})\n• Kaggle: 32 datasets, 3 notebooks (${kb.contact?.social?.kaggle})\n• Unstop: 25+ hackathons participated (${kb.contact?.social?.unstop})\n\nWant to visit the Coding Profiles section?`
    } else if (/(resume|cv)/.test(lower)) {
      const url = kb.contact?.resume || '#'
      reply = url && url !== '#' ? `📄 Opening Sarthak's resume... ${url}` : 'Resume link not available.'
      if (url && url !== '#') setTimeout(() => window.open(url, '_blank', 'noopener'), 50)
    } else if (/(github)/.test(lower)) {
      const url = kb.contact?.social?.github || '#'
      reply = url && url !== '#' ? `💻 GitHub: ${url}\n\n📊 Real-time Stats:\n• 30 public repositories\n• 12 total stars across all repos\n• Top repos: HANU-AI (5⭐), ReviveLab (3⭐), Hospital-Pulse-AI (2⭐)` : 'GitHub link not available.'
      if (url && url !== '#') setTimeout(() => window.open(url, '_blank', 'noopener'), 50)
    } else if (/(linkedin)/.test(lower)) {
      const url = kb.contact?.social?.linkedin || '#'
      reply = url && url !== '#' ? `💼 LinkedIn: ${url}` : 'LinkedIn link not available.'
      if (url && url !== '#') setTimeout(() => window.open(url, '_blank', 'noopener'), 50)
    } else if (/(contact|email|phone)/.test(lower)) {
      reply = `📧 Email: ${kb.contact?.email || 'N/A'}\n📱 Phone: ${kb.contact?.phone || 'N/A'}\n\nWant to go to Contact section?`
    } else if (/(links|social|profile)/.test(lower)) {
      const links = kb.utils?.getAllLinks?.() || {}
      reply = `🔗 Sarthak's Links:\n• LinkedIn: ${links.linkedin}\n• GitHub: ${links.github}\n• Portfolio: ${links.portfolio}\n• LeetCode: ${links.leetcode}\n• Kaggle: ${links.kaggle}\n• Unstop: ${links.unstop}\n• Email: ${links.email}`
    } else if (/(about|bio|who)/.test(lower)) {
      reply = `${kb.profile?.bio || 'Sarthak is a passionate AI/ML Engineer and Full-Stack Developer with expertise in building innovative solutions.'}\n\n🎓 Currently pursuing B.Tech in CSE (AI) at BBD University\n🚀 Founder & AI/ML Engineer at TechNeekX\n💡 2+ years of experience in AI/ML and web development`
    } else if (/(hi|hello|hey)/.test(lower)) {
      reply = '👋 Hello! I\'m Sarthak\'s AI Twin! I can help you with:\n\n• Projects & GitHub Repositories\n• Skills & Technical Expertise\n• Experience & Background\n• Progress Insights & Real-time Metrics\n• Certifications & Achievements\n• Coding Profiles (LeetCode: 59 solved, Kaggle: 32 datasets)\n• Contact Information & Links\n\nFeel free to ask anything or use the quick chips below!'
    }
    setTimeout(() => setMessages(prev => [...prev, { role: 'bot', text: reply }]), 250)
  }

  const quick = [
    { label: 'Projects', onClick: () => { send('Show me projects'); setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 400) } },
    { label: 'GitHub', onClick: () => { send('github'); setTimeout(() => {
      document.getElementById('github-repos')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 400) } },
    { label: 'Skills', onClick: () => { send('What are the skills?'); setTimeout(() => {
      document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 400) } },
    { label: 'Experience', onClick: () => { send('Tell me about experience'); setTimeout(() => {
      document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 400) } },
    { label: 'Insights', onClick: () => { send('progress insights'); setTimeout(() => {
      document.getElementById('progress-insights')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 400) } },
    { label: 'Coding Profiles', onClick: () => { send('coding profiles'); setTimeout(() => {
      document.getElementById('coding-profiles')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 400) } },
    { label: 'Resume', onClick: () => { send('resume'); if (kb.contact?.resume) setTimeout(()=> window.open(kb.contact.resume, '_blank','noopener'), 300) } },
    { label: 'Contact', onClick: () => { send('contact info'); setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 400) } },
  ]

  const panel = (
    <motion.div
      key="panel"
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="glass fixed bottom-16 right-4 z-[80] w-[90vw] max-w-sm shadow-xl"
      role="dialog"
      aria-label="AI Assistant"
    >
      <div className="p-4 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">🤖</div>
          <div className="font-semibold">Sarthak’s AI Twin</div>
        </div>
        <button className="btn btn-ghost hover-glow-silver px-3 py-2" aria-label="Close chat" onClick={() => setOpen(false)}>✕</button>
      </div>
      <div ref={listRef} className="px-4 pt-3 pb-2 max-h-72 overflow-y-auto space-y-2">
        {messages.map((m, i) => (
          <div key={i} className={m.role === 'bot' ? 'text-slate-200' : 'text-sky-300'}>
            <div className={`inline-block px-3 py-2 rounded-lg ${m.role==='bot' ? 'bg-white/6 border border-white/10' : 'bg-sky-500/15 border border-sky-400/30'}`}>{m.text}</div>
          </div>
        ))}
      </div>
      <div className="px-4 pb-4 flex flex-wrap gap-2">
        {quick.map(q => (
          <button key={q.label} onClick={q.onClick} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm hover:bg-white/10 hover-glow-silver">{q.label}</button>
        ))}
      </div>
      <form className="p-3 border-t border-white/10 flex items-center gap-2" onSubmit={(e)=>{e.preventDefault(); send(input)}}>
        <input
          value={input}
          onChange={e=>setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 outline-none focus:ring-2 focus:ring-violet-500"
          aria-label="Type a message"
        />
        <button type="submit" className="btn btn-primary hover-glow-silver">Send</button>
      </form>
    </motion.div>
  )

  return (
    <>
      {/* Floating Action Button */}
      <button
        aria-label={open ? 'Close AI chat' : 'Open AI chat'}
        onClick={() => setOpen(v => !v)}
        className="fixed bottom-6 right-6 z-[70] w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 to-sky-500 text-white shadow-lg hover:brightness-110 hover-glow-silver flex items-center justify-center"
      >
        {open ? '✕' : '🤖'}
      </button>

      {/* Panel */}
      <AnimatePresence>{open && panel}</AnimatePresence>
    </>
  )
}

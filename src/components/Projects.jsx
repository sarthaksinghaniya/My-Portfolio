import React, { useEffect, useMemo, useState } from 'react'
import { projects } from '../data/content'
import { motion, AnimatePresence } from 'framer-motion'

export default function Projects() {
  const [open, setOpen] = useState(null)
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const allTags = Array.from(new Set(projects.flatMap(p => p.tech)))
  const [activeTags, setActiveTags] = useState([])

  const toggleTag = (t) => {
    setActiveTags(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t])
  }

  // Debounce the query to keep UI smooth
  useEffect(() => {
    const id = setTimeout(() => setDebouncedQuery(query), 220)
    return () => clearTimeout(id)
  }, [query])

  const tokens = useMemo(() => debouncedQuery.trim().toLowerCase().split(/\s+/).filter(Boolean), [debouncedQuery])

  const scored = useMemo(() => {
    const results = []
    for (const p of projects) {
      const matchesTags = activeTags.length === 0 || activeTags.every(t => p.tech.includes(t))
      if (!matchesTags) continue
      if (tokens.length === 0) {
        results.push({ project: p, score: 0 })
        continue
      }
      const title = p.title.toLowerCase()
      const desc = p.description.toLowerCase()
      const techs = p.tech.map(t => t.toLowerCase())
      let score = 0
      for (const tk of tokens) {
        if (title.includes(tk)) score += 3
        if (desc.includes(tk)) score += 1
        if (techs.some(t => t.includes(tk))) score += 2
      }
      if (score > 0) results.push({ project: p, score })
    }
    // If there is a query, sort by score; otherwise original order
    if (tokens.length > 0) results.sort((a, b) => b.score - a.score)
    else return projects.filter(p => activeTags.length === 0 || activeTags.every(t => p.tech.includes(t))).map(p => ({ project: p, score: 0 }))
    return results
  }, [projects, activeTags, tokens])

  const filtered = scored.map(s => s.project)

  // Highlight helper
  const Highlight = ({ text }) => {
    if (!tokens.length) return text
    try {
      const pattern = new RegExp(`(${tokens.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi')
      const parts = String(text).split(pattern)
      return parts.map((part, i) => (
        pattern.test(part) ? <mark key={i} className="bg-white/10 text-white rounded px-0.5">{part}</mark> : <span key={i}>{part}</span>
      ))
    } catch {
      return text
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }
  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
  }
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="h2">Projects</h2>
        <div className="mt-5 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <input
            value={query}
            onChange={e=>setQuery(e.target.value)}
            placeholder="Search by title, tech, description..."
            className="w-full md:max-w-md px-4 py-3 rounded-lg bg-white/5 border border-white/10 outline-none focus:ring-2 focus:ring-violet-500"
            aria-label="Search projects"
          />
          <div className="flex flex-wrap gap-2">
            {allTags.map(t => (
              <button key={t} onClick={()=>toggleTag(t)}
                className={`px-3 py-1 rounded-full border text-sm transition ${activeTags.includes(t) ? 'bg-violet-600/30 border-violet-500/50' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
                aria-pressed={activeTags.includes(t)}
              >{t}</button>
            ))}
            {activeTags.length > 0 && (
              <button onClick={()=>setActiveTags([])} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">Clear</button>
            )}
          </div>
        </div>
        <div className="mt-2 text-sm text-slate-400">{filtered.length} result{filtered.length===1?'':'s'}</div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((p, idx) => (
            <motion.div key={idx} variants={item} className="glass p-6 cursor-pointer hover:scale-[1.02] transition" onClick={() => setOpen(p)}>
              <h3 className="font-semibold"><Highlight text={p.title} /></h3>
              <p className="p mt-2"><Highlight text={p.description} /></p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span key={t} className="px-2 py-1 text-xs rounded bg-white/5 border border-white/10"><Highlight text={t} /></span>
                ))}
              </div>
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <div className="text-slate-400">No projects match your filters.</div>
          )}
        </motion.div>

        <AnimatePresence>
          {open && (
            <motion.div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-6" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setOpen(null)}>
              <motion.div className="glass max-w-lg w-full p-6" initial={{scale:0.95, y:10}} animate={{scale:1, y:0}} exit={{scale:0.95, y:10}} onClick={(e)=>e.stopPropagation()}>
                <h3 className="text-xl font-semibold">{open.title}</h3>
                <p className="p mt-2">{open.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {open.tech.map(t => (
                    <span key={t} className="px-2 py-1 text-xs rounded bg-white/5 border border-white/10">{t}</span>
                  ))}
                </div>
                <div className="mt-5 flex justify-end gap-2">
                  <a className="btn btn-primary" href={open.link} target="_blank" rel="noreferrer">Open Link</a>
                  <button className="btn btn-ghost" onClick={()=>setOpen(null)}>Close</button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

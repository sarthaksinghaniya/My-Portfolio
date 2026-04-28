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
    if (tokens.length > 0) results.sort((a, b) => b.score - a.score)
    else return projects.filter(p => activeTags.length === 0 || activeTags.every(t => p.tech.includes(t))).map(p => ({ project: p, score: 0 }))
    return results
  }, [activeTags, projects, tokens])

  const filtered = scored.map(s => s.project)

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
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-slate-400">More Builds</p>
            <h2 className="h2 mt-3">Project Archive</h2>
            <p className="mt-3 max-w-2xl text-slate-300">A wider set of deployed AI, web, and startup projects that show technical depth, product design, and system-level execution.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {activeTags.map(tag => (
              <button key={tag} onClick={() => toggleTag(tag)} className="rounded-full border border-violet-500/40 bg-violet-600/15 px-3 py-1 text-sm text-white">{tag}</button>
            ))}
            {activeTags.length > 0 && (
              <button onClick={() => setActiveTags([])} className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-sm text-slate-300">Clear filters</button>
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search by title, tech, description..."
            className="w-full md:max-w-md rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500/30"
            aria-label="Search projects"
          />
          <p className="text-sm text-slate-400">{filtered.length} project{filtered.length === 1 ? '' : 's'} shown</p>
        </div>

        <motion.div variants={container} initial="hidden" animate="show" className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, idx) => (
            <motion.button
              type="button"
              key={idx}
              variants={item}
              onClick={() => setOpen(p)}
              className="glass flex h-full flex-col items-start gap-4 rounded-[28px] p-6 text-left transition hover:-translate-y-1"
            >
              <div className="flex items-center justify-between w-full gap-3">
                <h3 className="text-xl font-semibold text-white"><Highlight text={p.title} /></h3>
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-400">More Build</span>
              </div>
              <p className="text-slate-300 line-clamp-3"><Highlight text={p.description} /></p>
              <div className="mt-auto flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">{t}</span>
                ))}
              </div>
            </motion.button>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full rounded-3xl border border-white/10 bg-slate-950/80 p-8 text-slate-400">No projects match your search or filters. Try different keywords or clear filters.</div>
          )}
        </motion.div>

        <AnimatePresence>
          {open && (
            <motion.div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(null)}>
              <motion.div className="glass max-w-3xl w-full p-6" initial={{ scale: 0.96, y: 12 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 12 }} onClick={(e) => e.stopPropagation()}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{open.title}</h3>
                    <p className="mt-2 text-slate-300">{open.description}</p>
                  </div>
                  <button className="btn btn-ghost" onClick={() => setOpen(null)}>Close</button>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {open.tech.map(t => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">{t}</span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {open.link && (
                    <a className="btn btn-primary" href={open.link} target="_blank" rel="noreferrer">Live Link</a>
                  )}
                  {open.github && (
                    <a className="btn btn-ghost" href={open.github} target="_blank" rel="noreferrer">View GitHub</a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

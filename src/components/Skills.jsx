import React from 'react'
import { skills } from '../data/content'
import { motion } from 'framer-motion'

const categoryInfo = {
  'AI/ML': {
    icon: '⚙️',
    color: '#22d3ee',
    glow: 'rgba(34,211,238,0.18)',
    description: 'Models, inference, and intelligent decision systems.'
  },
  'Full Stack': {
    icon: '🧩',
    color: '#c084fc',
    glow: 'rgba(192,132,252,0.18)',
    description: 'Interfaces, APIs, and scalable product foundations.'
  },
  'Data & Tools': {
    icon: '📊',
    color: '#2dd4bf',
    glow: 'rgba(45,212,191,0.18)',
    description: 'Analysis, visualization, versioning, and deployment workflows.'
  },
  'Cloud / Other': {
    icon: '☁️',
    color: '#60a5fa',
    glow: 'rgba(96,165,250,0.18)',
    description: 'Deployment, integration, and system-level thinking.'
  }
}

export default function Skills() {
  return (
    <section id="skills" className="section relative overflow-hidden">
      <div className="absolute -right-24 top-8 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute left-1/2 top-20 h-56 w-56 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),_transparent_40%)]" />

      <div className="container relative">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Core Skills</p>
            <h2 className="h2 mt-3">Technical strengths across AI, full-stack development, and product delivery.</h2>
            <p className="mt-4 max-w-2xl text-slate-300">A practical stack shaped through hackathons, production-style builds, and AI product experiments.</p>
          </div>

          <div className="mt-5 inline-flex flex-wrap items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 shadow-slate-950/20 backdrop-blur-md">
            <span>AI Systems</span>
            <span className="text-slate-500">•</span>
            <span>Full-Stack Products</span>
            <span className="text-slate-500">•</span>
            <span>Data Pipelines</span>
            <span className="text-slate-500">•</span>
            <span>Deployment</span>
          </div>
        </div>

        <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          {Object.entries(skills).map(([category, items], index) => {
            const info = categoryInfo[category]
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="group"
              >
                <div className="rounded-[32px] p-[1px] bg-gradient-to-br from-cyan-400/20 via-violet-500/15 to-sky-500/20 shadow-[0_0_20px_rgba(56,189,248,0.08)] transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.18)]">
                  <div className="glass rounded-[32px] border border-white/10 bg-slate-950/80 p-6 transition duration-300 group-hover:border-white/20">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span
                          className="grid h-14 w-14 place-items-center rounded-2xl text-2xl shadow-[0_0_20px_rgba(255,255,255,0.08)]"
                          style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: info.color, boxShadow: `0 0 24px ${info.glow}` }}
                        >
                          {info.icon}
                        </span>
                        <div>
                          <h3 className="text-xl font-semibold text-white">{category}</h3>
                          <p className="mt-2 max-w-sm text-sm text-slate-400">{info.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition duration-300 hover:bg-white/10 hover:text-white"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

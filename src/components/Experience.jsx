import React from 'react'
import { motion } from 'framer-motion'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Experience</p>
            <h2 className="h2 mt-3">Roles that combine AI engineering, product leadership, and founder execution.</h2>
          </div>
          <p className="max-w-xl text-slate-300">A curated timeline focused on leadership, internship impact, and community-building in AI and full-stack product delivery.</p>
        </div>
        <div className="mt-10 relative">
          <div className="pointer-events-none absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-sky-400/60 to-violet-500/60 md:block"></div>
          <div className="space-y-8">
            {experience.map((item, index) => (
              <motion.div
                key={item.role + index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative md:pl-12"
              >
                <span className="absolute left-0 top-3 block h-4 w-4 rounded-full bg-gradient-to-br from-sky-400 to-violet-500 shadow-lg shadow-sky-500/20"></span>
                <div className="glass border border-white/10 p-6 shadow-glass">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{item.company}</p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">{item.role}</h3>
                    </div>
                    <span className="rounded-full bg-slate-900/80 px-4 py-2 text-sm text-slate-300">{item.period}</span>
                  </div>
                  <ul className="mt-4 list-disc list-inside space-y-2 text-slate-300">
                    {item.points.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

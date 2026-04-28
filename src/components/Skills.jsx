import React from 'react'
import { skills } from '../data/content'
import { motion } from 'framer-motion'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Core Skills</p>
            <h2 className="h2 mt-3">Technical strengths across AI, full-stack development, and product delivery.</h2>
          </div>
          <p className="max-w-xl text-slate-300">Designed to be clear for recruiters, judges, and founders while remaining visually premium.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="glass rounded-[28px] border border-white/10 p-6"
            >
              <h3 className="text-lg font-semibold text-white">{category}</h3>
              <div className="mt-4 space-y-3 text-slate-300">
                {items.map((skill) => (
                  <div key={skill} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-400" aria-hidden="true"></span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

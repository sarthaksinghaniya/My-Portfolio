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
                    <svg className="mt-1 h-4 w-4 flex-shrink-0 text-sky-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.285 6.709a1 1 0 0 0-1.414-1.418l-9.192 9.2-3.833-3.834a1 1 0 0 0-1.415 1.414l4.54 4.54a1 1 0 0 0 1.414 0l9.9-9.902z" />
                    </svg>
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

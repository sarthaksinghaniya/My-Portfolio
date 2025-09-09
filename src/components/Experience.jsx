import React from 'react'
import { motion } from 'framer-motion'
import { experience } from '../data/content'

export default function Experience() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  }
  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
  }
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="h2">Experience</h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-6 grid gap-5"
        >
          {experience.map((e, i) => (
            <motion.div key={i} variants={item} className="glass p-6 md:p-7">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h3 className="font-semibold">{e.role}</h3>
                <span className="text-sm text-slate-400">{e.period}</span>
              </div>
              <ul className="mt-3 list-disc list-inside text-slate-300 space-y-1">
                {e.points.map((p, idx) => <li key={idx}>{p}</li>)}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

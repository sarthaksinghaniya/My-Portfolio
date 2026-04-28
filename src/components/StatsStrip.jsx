import React from 'react'
import { motion } from 'framer-motion'
import { liveProofs } from '../data/content'

export default function StatsStrip() {
  return (
    <section id="proofs" className="section">
      <div className="container">
        <div className="glass p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Live Proof</p>
              <h2 className="h2 mt-3">Real recognition, real momentum.</h2>
              <p className="p mt-4 max-w-2xl text-slate-300">A premium AI builder portfolio backed by verified hackathons, leadership impact, and a growing community of builders.</p>
            </div>
            <a
              href="https://drive.google.com/drive/folders/1CBeJ9os9s92ZQOpbHguHTmKQ0fOCLsYK?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary self-start"
            >View Certificates & Proofs</a>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {liveProofs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 shadow-glass"
              >
                <p className="text-sm text-slate-400">{item.label}</p>
                <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

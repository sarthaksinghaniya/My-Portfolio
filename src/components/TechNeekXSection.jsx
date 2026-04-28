import React from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/content'

export default function TechNeekXSection() {
  return (
    <section id="techneekx" className="section">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Founder-led Ecosystem</p>
            <h2 className="h2 mt-3">Founder of TechNeekX — Building India’s Emerging AI Builder Ecosystem</h2>
            <p className="p mt-4 text-slate-300">TechNeekX helps developers, innovators, and creators build real-world tech, win hackathons, and launch impactful products.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                '100+ Members',
                '4+ Events Completed',
                'InnVedX',
                'Kalpathon',
                'Vibe Designing',
                'Builder-first community'
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-3xl border border-white/10 bg-slate-950/80 p-5"
                >
                  <p className="text-sm text-slate-400">{item}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={profile.links.techneekx} target="_blank" rel="noreferrer" className="btn btn-primary">Visit TechNeekX</a>
              <a href={profile.links.techneekx} target="_blank" rel="noreferrer" className="btn btn-ghost">Join the Ecosystem</a>
              <a href="https://www.linkedin.com/company/techneekx/in" target="_blank" rel="noreferrer" className="btn btn-ghost">Collaborate</a>
            </div>
          </div>
          <div className="glass rounded-[28px] border border-white/10 bg-slate-950/80 p-8 shadow-glass">
            <p className="uppercase tracking-[0.4em] text-slate-400">Community Story</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Growing a founder-first AI community.</h3>
            <p className="mt-4 text-slate-300">As founder of TechNeekX, I lead product and partner strategy while helping builders move from idea to MVP to launch. The community combines technical mentorship, hackathon coaching, and outcome-driven execution.</p>
            <div className="mt-6 space-y-3 text-slate-300">
              <p>• Curated learning pathways for AI, full-stack, and product design.</p>
              <p>• Organized events with hands-on deliverables, startup pitches, and mentor office hours.</p>
              <p>• Built the ecosystem for 100+ members to co-build, showcase, and scale.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

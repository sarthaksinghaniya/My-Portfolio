import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { profile, liveProofs } from '../data/content'
import FloatingIcons from './FloatingIcons'

export default function Hero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(!!mq.matches)
    update()
    mq.addEventListener?.('change', update)
    return () => mq.removeEventListener?.('change', update)
  }, [])

  const raf = useRef(0)
  const lastEvent = useRef(null)

  useEffect(() => () => { if (raf.current) cancelAnimationFrame(raf.current) }, [])

  const onMouseMove = (e) => {
    if (reduced) return
    lastEvent.current = e
    if (raf.current) return
    raf.current = requestAnimationFrame(() => {
      const ev = lastEvent.current
      if (ev) {
        const rect = ev.currentTarget.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = (ev.clientX - cx) / rect.width
        const dy = (ev.clientY - cy) / rect.height
        setOffset({ x: dx * 14, y: dy * 14 })
      }
      raf.current = 0
    })
  }

  return (
    <section id="home" className="section min-h-screen flex items-center" onMouseMove={onMouseMove}>
      <div className="container relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.9fr] items-center">
        <motion.div
          style={{ x: reduced ? 0 : offset.x, y: reduced ? 0 : offset.y }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        >
          <p className="text-sm uppercase tracking-[0.4em] text-slate-400">AI Systems · Founder-led · Impact-first</p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="h1 mt-4 max-w-3xl text-white"
          >
            Building Real-World AI Systems That Solve Practical Problems
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.65 }}
            className="p mt-6 max-w-2xl text-slate-300"
          >
            I’m Sarthak Singhaniya — an AI/ML Engineer, Full-Stack Developer, and Founder of TechNeekX, building intelligent systems across healthcare, traffic intelligence, sustainability, and developer ecosystems.
          </motion.p>
          <motion.div
            className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.55 }}
          >
            {liveProofs.slice(0, 4).map((badge, index) => (
              <div key={badge.label} className="rounded-3xl border border-white/10 bg-slate-950/80 p-4 shadow-glass">
                <p className="text-sm text-slate-400">{badge.label}</p>
                <p className="mt-2 text-2xl font-semibold text-white">{badge.value}</p>
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.55 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#featured-projects" className="btn btn-primary">View Projects</a>
            <a href={profile.links.resume} className="btn btn-ghost">Download Resume</a>
            <a href={profile.links.github} className="btn btn-ghost" target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.links.linkedin} className="btn btn-ghost" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://drive.google.com/drive/folders/1CBeJ9os9s92ZQOpbHguHTmKQ0fOCLsYK?usp=sharing" className="btn btn-ghost" target="_blank" rel="noreferrer">View Certificates & Proofs</a>
          </motion.div>
        </motion.div>

        <div className="relative order-first lg:order-last">
          <FloatingIcons />
          <div className="glass rounded-[32px] border border-white/10 p-6 md:p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">About Sarthak</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">AI/ML Engineer building intelligent systems, and founder of TechNeekX.</h3>
            <p className="mt-4 text-slate-300">I merge product-first AI with scalable software to create systems that improve decision making, optimize operations, and grow builder communities.</p>
            <div className="mt-6 space-y-4 text-slate-300">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Focus areas</p>
                <p className="mt-2">Healthcare intelligence, traffic optimization, sustainability, and developer ecosystems.</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Approach</p>
                <p className="mt-2">Product-driven AI, explainable model design, polished full-stack experiences, and founder-led delivery.</p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a href={profile.links.techneekx} target="_blank" rel="noreferrer" className="btn btn-primary">View TechNeekX</a>
              <a href="https://drive.google.com/drive/folders/1CBeJ9os9s92ZQOpbHguHTmKQ0fOCLsYK?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-ghost">Proofs & Certificates</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

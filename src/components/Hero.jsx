import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/content'
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
        setOffset({ x: dx * 12, y: dy * 12 })
      }
      raf.current = 0
    })
  }
  return (
    <section id="home" className="section min-h-screen flex items-center" onMouseMove={onMouseMove}>
      <div className="container relative z-10 grid md:grid-cols-2 items-center gap-8">
        <motion.div
          style={{ x: reduced ? 0 : offset.x, y: reduced ? 0 : offset.y }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="h1 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-violet-500 to-emerald-400"
          >
            Hi, I’m {profile.name} 👋
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="p mt-5 text-lg"
          >
            Full-Stack Python & AI Developer | Data Visualizer | Content Creator
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-3 flex flex-wrap gap-2"
          >
            <a
              href={profile.links.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white text-sm hover:from-pink-600 hover:to-orange-600 transition shadow-lg hover:shadow-xl"
              aria-label="Open Instagram profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
              </svg>
              <span>Follow on Instagram</span>
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm hover:from-blue-700 hover:to-blue-800 transition shadow-lg hover:shadow-xl"
              aria-label="Open LinkedIn profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>Connect on LinkedIn</span>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projects" className="btn btn-primary">📂 Explore Projects</a>
            <a href="#contact" className="btn btn-ghost">✉️ Contact Me</a>
            <a
              href="/Resume%20ss.pdf"
              download="Sarthak_Singhaniya_Resume.pdf"
              className="btn btn-ghost"
              aria-label="Download Resume PDF"
            >
              📄 Resume 
            </a>
          </motion.div>
        </motion.div>
        <div className="relative">
          <FloatingIcons />
          <div className="glass p-6 md:p-8">
            <p className="p">{profile.objective}</p>
            <div className="mt-6">
              <h3 className="text-slate-400">Education</h3>
              {profile.education.map((e, i) => (
                <div key={i} className="mt-2">
                  <p className="font-semibold">{e.title}</p>
                  <p className="text-slate-400">{e.org} • {e.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

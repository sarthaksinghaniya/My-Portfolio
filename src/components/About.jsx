import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function About() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(!!mq.matches)
    update()
    mq.addEventListener?.('change', update)
    return () => mq.removeEventListener?.('change', update)
  }, [])

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="h2">About Me</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6 items-start">
          <p className="p max-w-3xl">
            Passionate about AI, full-stack development, and data visualization. Loves blending code with creativity, logic with empathy, and ambition with action.
          </p>
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="glass p-5 md:p-6"
            aria-live="polite"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl">🤖</div>
              <div>
                <p className="text-sm uppercase tracking-wide text-slate-400">AI-Powered Intro</p>
                <h3 className="font-semibold mt-1">Meet Sarthak’s AI Twin</h3>
              </div>
            </div>
            <div className="mt-3 space-y-2">
              <p className="p">Hey, I’m Sarthak’s AI twin, here to walk you through his portfolio.</p>
              <p className="p">Ask me about his projects, stack, or achievements—happy to help!</p>
            </div>
            <div className="mt-4 flex gap-2">
              <button
                className="btn btn-primary hover-glow-silver"
                aria-label="Go to Projects section"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              >
                Projects?
              </button>
              <button
                className="btn btn-ghost hover-glow-silver"
                aria-label="Go to Skills section"
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              >
                Skills?
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

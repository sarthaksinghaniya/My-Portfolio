import React from 'react'
import { motion } from 'framer-motion'
import { featuredProjects } from '../data/content'

export default function FeaturedProjects() {
  return (
    <section id="featured-projects" className="section">
      <div className="container">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Featured AI Builds</p>
            <h2 className="h2 mt-3">Projects built for practical impact.</h2>
          </div>
          <p className="max-w-xl text-slate-300">Four flagship AI systems demonstrating healthcare intelligence, traffic optimization, sustainable innovation, and predictive operations.</p>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="glass p-7 hover:-translate-y-1 transition-transform"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-violet-500/15 px-3 py-1 text-sm font-medium text-violet-200">Featured</span>
                <span className="text-sm text-slate-400">{project.category}</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-slate-300">{project.summary}</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-950/80 p-4 border border-white/10">
                  <p className="text-sm text-slate-400">Problem</p>
                  <p className="mt-2 text-white">{project.problem}</p>
                </div>
                <div className="rounded-2xl bg-slate-950/80 p-4 border border-white/10">
                  <p className="text-sm text-slate-400">Solution</p>
                  <p className="mt-2 text-white">{project.solution}</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">{tag}</span>
                ))}
              </div>
              <div className="mt-5 rounded-2xl bg-slate-900/80 p-4 border border-white/10">
                <p className="text-sm text-slate-400">Impact</p>
                <p className="mt-2 text-white">{project.impact}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {project.link && (
                  <a
                    className="btn btn-primary"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >Live Link</a>
                )}
                {project.github && (
                  <a className="btn btn-ghost" href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                )}
                {!project.link && !project.github && (
                  <span className="inline-flex items-center rounded-full bg-white/5 px-4 py-2 text-sm text-slate-300">Link available on request</span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

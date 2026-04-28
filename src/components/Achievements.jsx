import React from 'react'
import { achievementHighlights, achievements } from '../data/content'

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Achievements & Leadership</p>
            <h2 className="h2 mt-3">Verified results from hackathons, events, and national recognition.</h2>
          </div>
          <a
            href="https://drive.google.com/drive/folders/1CBeJ9os9s92ZQOpbHguHTmKQ0fOCLsYK?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >View Certificates & Proofs</a>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {achievementHighlights.map((item, index) => (
            <div key={item.title} className="glass rounded-[28px] border border-white/10 p-6 shadow-glass">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-slate-300">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 glass rounded-[28px] border border-white/10 p-6">
          <h3 className="text-xl font-semibold text-white">More verified milestones</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {achievements.slice(0, 8).map((item, index) => (
              <li key={index} className="rounded-2xl bg-slate-950/80 p-4 text-slate-300">{item}</li>
            ))}
          </ul>
          <details className="mt-5 rounded-3xl border border-white/10 bg-slate-900/80 p-4">
            <summary className="cursor-pointer text-slate-100">View all achievement notes</summary>
            <ul className="mt-4 space-y-2 text-slate-300">
              {achievements.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </section>
  )
}

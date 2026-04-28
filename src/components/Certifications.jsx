import React from 'react'
import { proofLink, topCertifications } from '../data/content'

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Certifications & Proof</p>
            <h2 className="h2 mt-3">Top certifications that back my AI product delivery.</h2>
          </div>
          <a href={proofLink} target="_blank" rel="noreferrer" className="btn btn-primary">View All Certificates & Proofs</a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {topCertifications.map((cert, index) => (
            <div key={cert} className="glass rounded-[28px] border border-white/10 p-6 shadow-glass">
              <p className="text-lg font-semibold text-white">{cert}</p>
              <p className="mt-3 text-slate-400">Verified certificate and proof repository available for recruiters and judges.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { certifications } from '../data/content'

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="h2">Certifications & Achievements</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {certifications.map((c, i) => (
            <div key={i} className="glass p-4">{c}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { achievements } from '../data/content'

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <h2 className="h2">Achievements & Leadership</h2>
        <ul className="mt-6 grid gap-4">
          {achievements.map((a, i) => (
            <li key={i} className="glass p-4">{a}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

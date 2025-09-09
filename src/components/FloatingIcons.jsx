import React from 'react'
import { motion } from 'framer-motion'

const items = [
  { emoji: '🐍', x: -20, y: -10 },
  { emoji: '🧠', x: 40, y: -20 },
  { emoji: '📊', x: -10, y: 30 },
]

export default function FloatingIcons(){
  return (
    <div className="absolute inset-0 -z-0 pointer-events-none">
      {items.map((it, i) => (
        <motion.div key={i} className="absolute text-3xl" style={{left:`${50+it.x}%`, top:`${30+it.y}%`}}
          animate={{ y: [0, -10, 0] }} transition={{ duration: 4 + i, repeat: Infinity }}>
          {it.emoji}
        </motion.div>
      ))}
    </div>
  )
}

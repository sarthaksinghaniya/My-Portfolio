import React from 'react'
import { skills } from '../data/content'
import { motion } from 'framer-motion'

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }
  const card = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  }
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="h2">Skills</h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {Object.entries(skills).map(([cat, items]) => (
            <motion.div key={cat} variants={card} className="glass p-6">
              <h3 className="font-semibold text-slate-100">{cat}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map(it => (
                  <motion.span
                    key={it}
                    whileHover={{ y: -2, rotate: -1, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm"
                  >
                    {it}
                  </motion.span>
                ))}
              </div>
              <div className="mt-4 h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-400 to-sky-500 w-[80%]"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Moving icons marquee below skills */}
        {(() => {
          const emojiMap = {
            'Python': '🐍', 'Flask': '🧪', 'Django': '🌿', 'FastAPI': '⚡', 'Streamlit': '📊',
            'Machine Learning': '🤖', 'NLP': '🗣️', 'Data Visualization': '📈', 'Excel Analytics': '📊',
            'HTML': '🌐', 'CSS': '🎨', 'JavaScript': '🟨', 'React': '⚛️', 'REST APIs': '🔗', 'MERN Stack (learning)': '🧩',
            'Git': '🔧', 'GitHub': '🐙', 'VS Code': '🧰', 'AWS (beginner)': '☁️',
            'Team Leadership': '👥', 'Content Writing': '✍️', 'Public Speaking': '🗣️', 'Collaboration': '🤝'
          }
          const allSkills = Object.values(skills).flat()
          const Badge = ({ label }) => (
            <span className="mx-3 my-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm whitespace-nowrap">
              <span>{emojiMap[label] || '🔹'}</span>
              <span>{label}</span>
            </span>
          )
          const Row = () => (
            <div className="flex items-center">
              {allSkills.map((s, i) => <Badge key={`${s}-${i}`} label={s} />)}
            </div>
          )
          return (
            <div className="relative mt-10 overflow-hidden">
              <motion.div
                className="flex w-max"
                aria-hidden="true"
                animate={{ x: ['0%', '-55%'] }}
                transition={{ duration: 45, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
              >
                <Row />
                {/* duplicate for seamless loop */}
                <Row />
              </motion.div>
            </div>
          )
        })()}
      </div>
    </section>
  )
}

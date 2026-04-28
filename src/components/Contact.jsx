import React, { useState } from 'react'
import { profile, proofLink } from '../data/content'

export default function Contact() {
  const [toast, setToast] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const openGmail = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const form = e.currentTarget
      const name = form.name.value.trim()
      const email = form.email.value.trim()
      const message = form.message.value.trim()

      if (!name || !email || !message) {
        setToast('Please fill in all fields')
        setTimeout(() => setToast(null), 3000)
        return
      }

      const subject = `Portfolio contact from ${name}`
      const body = `Name: ${name}\nEmail: ${email}\n\n${message}`
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      const newWindow = window.open(gmailUrl, '_blank')

      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        setToast('Opening email client... If nothing happens, try copying the email address.')
      } else {
        setToast('Opening Gmail...')
      }

      form.reset()
    } catch (error) {
      console.error('Error opening email client:', error)
      setToast('Error opening email. Please try again or use WhatsApp.')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setToast(null), 3500)
    }
  }

  const toWhatsApp = () => {
    const name = document.getElementById('name')?.value.trim() || 'Hello'
    const email = document.getElementById('email')?.value.trim() || ''
    const message = document.getElementById('message')?.value.trim() || ''
    const text = encodeURIComponent(`Hello Sarthak,%0A%0AThis is ${name}.%0AEmail: ${email}%0A%0A${message}`)
    const phoneDigits = (profile.phone || '').replace(/\D/g, '')
    const url = `https://wa.me/${phoneDigits}?text=${text}`
    window.open(url, '_blank')
  }

  return (
    <section id="contact" className="section">
      <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Let’s build together</p>
          <h2 className="h2 mt-3">Let’s build intelligent systems, collaborate on AI products, or grow builder ecosystems together.</h2>
          <p className="mt-4 max-w-2xl text-slate-300">I’m open to recruiter outreach, hackathon judging, startup partnerships, and TechNeekX collaborations.</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Email</p>
              <p className="mt-2 text-white">{profile.email}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Phone</p>
              <p className="mt-2 text-white">{profile.phone}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>Email Me</a>
            <a className="btn btn-ghost" href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn btn-ghost" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn btn-ghost" href={profile.links.resume} download>Download Resume</a>
            <a className="btn btn-ghost" href={proofLink} target="_blank" rel="noreferrer">View Certificates</a>
          </div>
        </div>

        <form className="glass rounded-[32px] border border-white/10 p-8 shadow-glass" onSubmit={openGmail}>
          <div className="space-y-4">
            <label className="sr-only" htmlFor="name">Your Name</label>
            <input id="name" name="name" required placeholder="Your Name" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-sky-500/40" />
            <label className="sr-only" htmlFor="email">Your Email</label>
            <input id="email" name="email" type="email" required placeholder="Your Email" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-sky-500/40" />
            <label className="sr-only" htmlFor="message">Message</label>
            <textarea id="message" name="message" required placeholder="Message" rows="5" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-sky-500/40"></textarea>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button type="submit" className={`btn btn-primary ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`} disabled={isSubmitting}>
              {isSubmitting ? 'Opening...' : 'Send Email'}
            </button>
            <button type="button" onClick={toWhatsApp} className="btn btn-ghost">Send via WhatsApp</button>
          </div>
        </form>
      </div>

      {toast && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="rounded-2xl border border-white/10 bg-slate-950/95 px-4 py-3 text-sm text-white shadow-glow-silver">
            {toast}
          </div>
        </div>
      )}
    </section>
  )
}

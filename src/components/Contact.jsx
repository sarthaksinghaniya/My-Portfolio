import React, { useState } from 'react'
import { profile } from '../data/content'

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
      
      // Format the email components
      const subject = `Portfolio contact from ${name}`
      const body = `Name: ${name}\nEmail: ${email}\n\n${message}`
      
      // Try to open Gmail compose window directly
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      
      // Open Gmail in a new tab
      const newWindow = window.open(gmailUrl, '_blank')
      
      // Fallback to mailto: if window.open is blocked
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        setToast('Opening email client... If nothing happens, try copying the email address.')
      } else {
        setToast('Opening Gmail...')
      }
      
      // Clear the form if email client opened successfully
      form.reset()
      
    } catch (error) {
      console.error('Error opening email client:', error)
      setToast('Error opening email. Please try again or use WhatsApp.')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setToast(null), 3500)
    }
  }

  const toWhatsApp = (e) => {
    e.preventDefault()
    const form = e.currentTarget.form || e.currentTarget.closest('form')
    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const message = form.message.value.trim()
    const text = encodeURIComponent(`Hello Sarthak,%0A%0AThis is ${name}.%0AEmail: ${email}%0A%0A${message}`)
    const phoneDigits = (profile.phone || '').replace(/\D/g, '') // e.g., 916387860126
    const url = `https://wa.me/${phoneDigits}?text=${text}`
    window.open(url, '_blank')
  }
  return (
    <section id="contact" className="section">
      <div className="container grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="h2">Contact</h2>
          <p className="p mt-2">I’m open to internships, freelance opportunities, and collaborations.</p>
          <div className="mt-4 space-y-2 text-slate-300">
            <p> {profile.email}</p>
            <p> {profile.phone}</p>
            <div className="flex gap-3 pt-2">
              <a className="btn btn-ghost" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn btn-ghost" href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn btn-ghost" href={profile.links.portfolio} target="_blank" rel="noreferrer">Portfolio</a>
              <a className="btn btn-ghost" href={profile.links.instagram} target="_blank" rel="noreferrer">Instagram</a>
              <a className="btn btn-primary" href="/sarthak.vcf" download>Save Contact</a>
            </div>
          </div>
        </div>
        <form className="glass p-6 grid gap-4" onSubmit={openGmail}>
          <label className="sr-only" htmlFor="name">Your Name</label>
          <input id="name" name="name" required placeholder="Your Name" className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 outline-none focus:ring-2 focus:ring-violet-500" />
          <label className="sr-only" htmlFor="email">Your Email</label>
          <input id="email" name="email" type="email" required placeholder="Your Email" className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 outline-none focus:ring-2 focus:ring-violet-500" />
          <label className="sr-only" htmlFor="message">Message</label>
          <textarea id="message" name="message" required placeholder="Message" rows="5" className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 outline-none focus:ring-2 focus:ring-violet-500"></textarea>
          <div className="flex flex-wrap gap-3">
            <button 
              type="submit" 
              className={`btn btn-primary ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Opening...' : 'Send Email'}
            </button>
            <button type="button" onClick={toWhatsApp} className="btn btn-ghost">Send via WhatsApp</button>
          </div>
        </form>
      </div>
      {toast && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="px-4 py-3 rounded-lg bg-slate-900/90 border border-white/10 shadow-lg text-sm">
            {toast}
          </div>
        </div>
      )}
    </section>
  )
}

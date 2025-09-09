import React from 'react'
import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400">
        <p>© 2025 Sarthak Singhaniya</p>
        <div className="flex items-center gap-5">
          <div className="flex gap-4">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <a
            href={profile.links.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-slate-400 hover:text-white"
            title="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

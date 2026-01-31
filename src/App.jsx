import React from 'react'
import ThemeProvider from './components/ThemeProvider'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import GitHubRepos from './components/GitHubRepos'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import ProgressInsights from './components/ProgressInsights'
import CodingProfiles from './components/CodingProfiles'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SectionReveal from './components/SectionReveal'
import ThreeBackground from './components/ThreeBackground'
import ChatWidget from './components/ChatWidget'

export default function App(){
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        <Navbar />
        {/* Global 3D background across the whole site */}
        <ThreeBackground />
        <main className="pt-16">
          <SectionReveal delay={0.00}><Hero /></SectionReveal>
          <SectionReveal delay={0.05}><About /></SectionReveal>
          <SectionReveal delay={0.10}><Skills /></SectionReveal>
          <SectionReveal delay={0.12}><Projects /></SectionReveal>
          <SectionReveal delay={0.14}><GitHubRepos /></SectionReveal>
          <SectionReveal delay={0.16}><Experience /></SectionReveal>
          <SectionReveal delay={0.18}><Certifications /></SectionReveal>
          <SectionReveal delay={0.20}><Achievements /></SectionReveal>
          <SectionReveal delay={0.22}><ProgressInsights /></SectionReveal>
          <SectionReveal delay={0.24}><CodingProfiles /></SectionReveal>
          <SectionReveal delay={0.26}><Contact /></SectionReveal>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </ThemeProvider>
  )
}

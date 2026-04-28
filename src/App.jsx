import React from 'react'
import ThemeProvider from './components/ThemeProvider'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsStrip from './components/StatsStrip'
import FeaturedProjects from './components/FeaturedProjects'
import About from './components/About'
import TechNeekXSection from './components/TechNeekXSection'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import GitHubRepos from './components/GitHubRepos'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SectionReveal from './components/SectionReveal'
import ThreeBackground from './components/ThreeBackground'
import ChatWidget from './components/ChatWidget'

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        <Navbar />
        <ThreeBackground />
        <main className="pt-16">
          <SectionReveal delay={0.00}><Hero /></SectionReveal>
          <SectionReveal delay={0.05}><StatsStrip /></SectionReveal>
          <SectionReveal delay={0.10}><FeaturedProjects /></SectionReveal>
          <SectionReveal delay={0.12}><About /></SectionReveal>
          <SectionReveal delay={0.14}><TechNeekXSection /></SectionReveal>
          <SectionReveal delay={0.16}><Experience /></SectionReveal>
          <SectionReveal delay={0.18}><Achievements /></SectionReveal>
          <SectionReveal delay={0.20}><Skills /></SectionReveal>
          <SectionReveal delay={0.22}><Certifications /></SectionReveal>
          <SectionReveal delay={0.24}><Projects /></SectionReveal>
          <SectionReveal delay={0.26}><GitHubRepos /></SectionReveal>
          <SectionReveal delay={0.28}><Contact /></SectionReveal>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </ThemeProvider>
  )
}

import dynamic from 'next/dynamic';
import KingdomHero from "../components/KingdomHero";

// Lazy load below-the-fold sections with smooth placeholders to prevent layout shift and keep anchor links working
const KingdomMap = dynamic(() => import("../components/KingdomMap"));
const KingdomSection = dynamic(() => import("../components/KingdomSection"), {
  loading: () => <section id="kingdom" className="min-h-screen bg-dark-900/10 animate-pulse" />
});
const SkillsSection = dynamic(() => import("../components/SkillsSection"), {
  loading: () => <section id="skills" className="min-h-screen bg-dark-900/10 animate-pulse" />
});
const ProjectsSection = dynamic(() => import("../components/ProjectsSection"), {
  loading: () => <section id="projects" className="min-h-screen bg-dark-900/10 animate-pulse" />
});
const AchievementsSection = dynamic(() => import("../components/AchievementsSection"), {
  loading: () => <section id="achievements" className="min-h-screen bg-dark-900/10 animate-pulse" />
});
const CertificatesSection = dynamic(() => import("../components/CertificatesSection"), {
  loading: () => <section className="min-h-[50vh] bg-dark-900/10 animate-pulse" />
});
const ContactSection = dynamic(() => import("../components/ContactSection"), {
  loading: () => <section id="contact" className="min-h-[80vh] bg-dark-900/10 animate-pulse" />
});
const Footer = dynamic(() => import("../components/Footer"));

// Heavy 3D component with no SSR
const GameOverlay = dynamic(() => import("../components/game3d/GameOverlay"));

export default function Home() {
  return (
    <>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="fixed inset-0 w-full h-full object-cover z-[-3] opacity-40"
      >
        <source src="/images/kingdom.mp4" type="video/mp4" />
      </video>
      <GameOverlay />
      
      <main className="relative flex flex-col items-center justify-start min-h-screen">
        <KingdomHero />
        <KingdomMap />
        <KingdomSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <CertificatesSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}

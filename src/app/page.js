import KingdomHero from "../components/KingdomHero";
import KingdomMap from "../components/KingdomMap";
import KingdomSection from "../components/KingdomSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import AchievementsSection from "../components/AchievementsSection";
import CertificatesSection from "../components/CertificatesSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import GameOverlay from "../components/game3d/GameOverlay";

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

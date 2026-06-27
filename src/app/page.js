import KingdomHero from "../components/KingdomHero";
import KingdomMap from "../components/KingdomMap";
import KingdomSection from "../components/KingdomSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import AchievementsSection from "../components/AchievementsSection";
import CertificatesSection from "../components/CertificatesSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-start min-h-screen">
      <KingdomHero />
      <KingdomMap />
      <KingdomSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <ExperienceSection />
      <CertificatesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

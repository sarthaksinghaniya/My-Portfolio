import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "../components/SmoothScrolling";
import Navigation from "../components/Navigation";
import LivingBackground from "../components/LivingBackground";
import AnimatedLoadingScreen from "../components/AnimatedLoadingScreen";
import PremiumCursor from "../components/PremiumCursor";
import AudioManager from "../components/AudioManager";
import AchievementManager from "../components/AchievementManager";
import AICommandConsole from "../components/AICommandConsole";
import BossFightTransition from "../components/BossFightTransition";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const metadata = {
  title: "Sarthak Singhaniya | AI Architect",
  description: "Enter the kingdom of Sarthak Singhaniya, AI Engineer & Tech Founder.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-dark-900 text-foreground overflow-x-hidden">
        <PremiumCursor />
        <AnimatedLoadingScreen />
        <AudioManager />
        <AchievementManager />
        <AICommandConsole />
        <BossFightTransition />
        <SmoothScrolling>
          <LivingBackground />
          <Navigation />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}

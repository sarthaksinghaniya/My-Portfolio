import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "../components/SmoothScrolling";
import Navigation from "../components/Navigation";
import LivingBackground from "../components/LivingBackground";
import AnimatedLoadingScreen from "../components/AnimatedLoadingScreen";
import PremiumCursor from "../components/PremiumCursor";
import dynamic from 'next/dynamic';

const AudioManager = dynamic(() => import("../components/AudioManager"));
const AICommandConsole = dynamic(() => import("../components/AICommandConsole"));
const TavernKeeperChat = dynamic(() => import("../components/TavernKeeperChat"));

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

import { profile } from "../data/content";

export const metadata = {
  title: `${profile.name} | AI Architect`,
  description: `Enter the kingdom of ${profile.name}, AI Engineer & Tech Founder.`,
  openGraph: {
    title: `${profile.name} | AI Architect`,
    description: `Enter the kingdom of ${profile.name}, AI Engineer & Tech Founder.`,
    url: profile.links.portfolio || "https://portfolio.local",
    siteName: profile.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | AI Architect`,
    description: `Enter the kingdom of ${profile.name}, AI Engineer & Tech Founder.`,
  }
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    url: profile.links.portfolio,
    sameAs: [
      profile.links.linkedin,
      profile.links.github
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-dark-900 text-foreground overflow-x-hidden">
        <PremiumCursor />
        <AnimatedLoadingScreen />
        <AudioManager />
        {/* <AchievementManager /> */}
        <AICommandConsole />
        <TavernKeeperChat />
        {/* <BossFightTransition /> */}
        <SmoothScrolling>
          <LivingBackground />
          <Navigation />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}

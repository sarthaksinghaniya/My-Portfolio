"use client";

import dynamic from "next/dynamic";
import { FaSpinner } from "react-icons/fa";

const GameCanvas = dynamic(() => import("./GameCanvas"), { 
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-dark-900/50 z-0 pointer-events-none">
      <FaSpinner className="text-primary text-2xl animate-spin mb-4" />
    </div>
  )
});

export default function GameOverlay() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <GameCanvas />
    </div>
  );
}

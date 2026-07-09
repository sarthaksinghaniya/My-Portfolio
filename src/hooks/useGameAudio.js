"use client";

import { useEffect, useRef, useCallback } from 'react';
import { useGameStore } from '../store/gameStore';

export function useGameAudio() {
  const isMuted = useGameStore(state => state.isMuted);
  
  // We use refs to hold audio instances so they aren't recreated on every render
  const hoverSound = useRef(null);
  const clickSound = useRef(null);
  const achievementSound = useRef(null);

  useEffect(() => {
    // Only instantiate Audio on the client side
    if (typeof window !== 'undefined') {
      hoverSound.current = new Audio('/sounds/hover.mp3');
      hoverSound.current.volume = 0.2;
      
      clickSound.current = new Audio('/sounds/click.mp3');
      clickSound.current.volume = 0.4;

      achievementSound.current = new Audio('/sounds/achievement.mp3');
      achievementSound.current.volume = 0.5;
    }
  }, []);

  const playHover = useCallback(() => {
    if (!isMuted && hoverSound.current) {
      hoverSound.current.currentTime = 0;
      hoverSound.current.play().catch(() => {});
    }
  }, [isMuted]);

  const playClick = useCallback(() => {
    if (!isMuted && clickSound.current) {
      clickSound.current.currentTime = 0;
      clickSound.current.play().catch(() => {});
    }
  }, [isMuted]);

  const playAchievement = useCallback(() => {
    if (!isMuted && achievementSound.current) {
      achievementSound.current.currentTime = 0;
      achievementSound.current.play().catch(() => {});
    }
  }, [isMuted]);

  return { playHover, playClick, playAchievement };
}

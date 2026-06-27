"use client";

import { useEffect, useRef } from 'react';
import { useGameStore } from '../store/gameStore';

export default function AudioManager() {
  const audioMuted = useGameStore((state) => state.audioMuted);
  const ambientAudioRef = useRef(null);

  useEffect(() => {
    // In a real application, replace this src with a valid ambient audio URL (like wind/nature sounds)
    // For now, we will create a silent placeholder Audio object
    ambientAudioRef.current = new Audio();
    ambientAudioRef.current.loop = true;
    ambientAudioRef.current.volume = 0.2; // Keep background noise low

    // A hack to play a synthetic "wind" noise using Web Audio API if needed,
    // but standard HTML5 audio with an mp3 is preferred for AAA feel.
  }, []);

  useEffect(() => {
    if (ambientAudioRef.current) {
      if (!audioMuted) {
        // Requires user interaction first, might fail if auto-played
        ambientAudioRef.current.play().catch(e => console.log("Audio play prevented by browser:", e));
      } else {
        ambientAudioRef.current.pause();
      }
    }
  }, [audioMuted]);

  // Expose a global method to play click sounds
  useEffect(() => {
    const playClickSound = () => {
      if (audioMuted) return;
      // Synthetic click sound for buttons
      try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(600, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.1);
      } catch (e) {
        console.log("Web audio api error", e);
      }
    };

    const handleClick = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.closest('button') ||
        e.target.closest('a')
      ) {
        playClickSound();
      }
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [audioMuted]);

  return null; // This component doesn't render anything visually
}

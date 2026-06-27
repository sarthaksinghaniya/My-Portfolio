"use client";

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useGameStore } from '../store/gameStore';

export default function PremiumCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const isLoading = useGameStore((state) => state.isLoading);

  // Springs for smooth following
  const cursorX = useSpring(0, { damping: 25, stiffness: 300, mass: 0.5 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 300, mass: 0.5 });
  
  const dotX = useSpring(0, { damping: 30, stiffness: 400, mass: 0.1 });
  const dotY = useSpring(0, { damping: 30, stiffness: 400, mass: 0.1 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Update spring values
      cursorX.set(e.clientX - 16); // Center the 32px ring
      cursorY.set(e.clientY - 16);
      
      dotX.set(e.clientX - 4); // Center the 8px dot
      dotY.set(e.clientY - 4);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Detect hover on interactive elements
    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.closest('.game-card') ||
        e.target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, dotX, dotY]);

  // Hide cursor on touch devices or during loading
  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0) || isLoading) {
    return null;
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        * { cursor: none !important; }
      `}} />
      
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{ x: cursorX, y: cursorY }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          borderWidth: isHovering ? '1px' : '2px',
          borderColor: isHovering ? 'rgba(247,201,72,0.8)' : 'rgba(255,255,255,0.3)',
          backgroundColor: isHovering ? 'rgba(247,201,72,0.1)' : 'transparent',
          boxShadow: isHovering ? '0 0 15px rgba(247,201,72,0.5)' : 'none'
        }}
        transition={{ type: "tween", duration: 0.15 }}
      />
      
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[10000] bg-primary"
        style={{ x: dotX, y: dotY }}
        animate={{
          scale: isClicking ? 0.5 : isHovering ? 0 : 1,
          boxShadow: '0 0 10px rgba(247,201,72,0.8)'
        }}
        transition={{ type: "tween", duration: 0.1 }}
      />
    </>
  );
}

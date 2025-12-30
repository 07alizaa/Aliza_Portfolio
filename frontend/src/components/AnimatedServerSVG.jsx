import React from 'react';

// Animated SVG for server/cloud/nodes with morphing hand-drawn frame
export const AnimatedServerSVG = () => (
  <svg
    viewBox="0 0 420 340"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-[340px] animate-float"
  >
    {/* Morphing hand-drawn frame */}
    <motion.path
      d="M30,60 Q20,170 60,300 Q210,340 370,300 Q410,170 390,60 Q210,10 30,60 Z"
      stroke="var(--theme-primary)"
      strokeWidth="6"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      className="stroke-premium"
      style={{ filter: 'drop-shadow(0 0 16px var(--theme-primary))' }}
    />
    {/* Server box */}
    <rect x="110" y="110" width="200" height="80" rx="18" fill="#fff" stroke="var(--theme-primary)" strokeWidth="4" className="shadow-lg" />
    {/* Cloud */}
    <ellipse cx="210" cy="220" rx="70" ry="30" fill="#fff" stroke="var(--theme-primary)" strokeWidth="3" />
    {/* Glowing nodes */}
    <circle cx="140" cy="220" r="8" fill="var(--theme-primary)" className="animate-glow" />
    <circle cx="210" cy="250" r="8" fill="var(--theme-primary)" className="animate-glow" />
    <circle cx="280" cy="220" r="8" fill="var(--theme-primary)" className="animate-glow" />
    {/* Connection lines */}
    <line x1="140" y1="220" x2="210" y2="250" stroke="var(--theme-primary)" strokeWidth="2" />
    <line x1="210" y1="250" x2="280" y2="220" stroke="var(--theme-primary)" strokeWidth="2" />
    <line x1="210" y1="190" x2="210" y2="250" stroke="var(--theme-primary)" strokeWidth="2" />
  </svg>
);

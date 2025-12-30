import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export const LivingDoodle = ({ type, className = "" }) => {
  const { currentMode } = useTheme();

  const variants = {
    breathe: {
      scale: [1, 1.05, 1],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    },
    float: {
      y: [0, -10, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const color = 'var(--theme-text)';
  const accentColor = 'var(--theme-primary)';

  const renderDoodle = () => {
    switch (type) {
      case 'server':
        return (
          <motion.svg width="100" height="120" viewBox="0 0 100 120" className={className} variants={variants.breathe} animate="breathe">
            {/* Watercolor shadow effect */}
            {currentMode === 'day' && <rect x="15" y="15" width="80" height="100" rx="5" fill="#FFE0B2" opacity="0.4" />}

            <rect x="10" y="10" width="80" height="100" rx="5" fill="none" stroke={color} strokeWidth="2.5" />
            <circle cx="30" cy="30" r="5" fill={accentColor}>
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="30" cy="50" r="5" fill={accentColor}>
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <rect x="50" y="25" width="30" height="4" rx="2" fill={color} opacity="0.2" />
            <rect x="50" y="45" width="30" height="4" rx="2" fill={color} opacity="0.2" />
            <path d="M20 80 Q50 95 80 80" fill="none" stroke={color} strokeWidth="2.5" strokeEnd="round" />
          </motion.svg>
        );
      case 'cloud':
        return (
          <motion.svg width="120" height="80" viewBox="0 0 120 80" className={className} variants={variants.float} animate="float">
            {currentMode === 'day' && <path d="M25 65 Q15 65 15 55 Q15 40 30 40 Q35 25 55 25 Q75 25 80 40 Q100 40 100 55 Q100 65 90 65 Z" fill="#E0F2F1" opacity="0.5" />}

            <path d="M20 60 Q10 60 10 50 Q10 35 25 35 Q30 20 50 20 Q70 20 75 35 Q95 35 95 50 Q95 60 85 60 Z"
              fill="none" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
            <text x="42" y="52" fontSize="12" fill={color} fontWeight="900" style={{ fontFamily: 'monospace' }}>AWS</text>
          </motion.svg>
        );
      case 'database':
        return (
          <motion.svg width="80" height="100" viewBox="0 0 80 100" className={className} variants={variants.breathe} animate="breathe">
            {currentMode === 'day' && <ellipse cx="45" cy="25" rx="30" ry="10" fill="#F3E5F5" opacity="0.5" />}

            <ellipse cx="40" cy="20" rx="30" ry="10" fill="none" stroke={color} strokeWidth="2.5" />
            <path d="M10 20 V80 Q40 95 70 80 V20" fill="none" stroke={color} strokeWidth="2.5" />
            <path d="M10 50 Q40 65 70 50" fill="none" stroke={color} strokeWidth="2" opacity="0.5" />
            <path d="M10 80 Q40 95 70 80" fill="none" stroke={color} strokeWidth="2" opacity="0.5" />
          </motion.svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`relative ${className} flex items-center justify-center`}>
      {renderDoodle()}
      {currentMode === 'night' && (
        <div className="absolute inset-0 blur-lg opacity-40 pointer-events-none" style={{ color }}>
          {renderDoodle()}
        </div>
      )}
    </div>
  );
};

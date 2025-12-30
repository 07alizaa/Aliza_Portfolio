import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Rocket, FolderCode, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { id: 'hero', icon: Home, label: 'Home' },
  { id: 'skills', icon: Rocket, label: 'Skills' },
  { id: 'projects', icon: FolderCode, label: 'Work' },
  { id: 'contact', icon: Mail, label: 'Connect' },
];

export const Navbar = () => {
  const { currentMode, toggleTheme, mood, updateMood, palettes } = useTheme();
  const [hovered, setHovered] = useState(null);
  const [showMoods, setShowMoods] = useState(false);

  const availableMoods = Object.keys(palettes[currentMode]);

  return (
    <nav className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-4">
      {/* Mood Selector Drawer */}
      <AnimatePresence>
        {showMoods && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="glass px-4 py-3 rounded-3xl flex gap-4 shadow-2xl mb-2 border border-white/20"
          >
            {availableMoods.map(m => (
              <motion.button
                key={m}
                onClick={() => updateMood(m)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-10 h-10 rounded-full border-2 transition-all shadow-inner ${mood === m ? 'border-white scale-110 shadow-lg' : 'border-transparent opacity-60'}`}
                style={{ backgroundColor: palettes[currentMode][m].primary }}
                title={m.charAt(0).toUpperCase() + m.slice(1) + " Mood"}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="glass px-8 py-5 rounded-full flex items-center gap-8 shadow-2xl border border-white/10 relative">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isHovered = hovered === item.id;

          return (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              className="relative group p-2"
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={26} style={{ color: 'var(--theme-primary)' }} />

              {isHovered && (
                <motion.div
                  layoutId="label"
                  className="absolute -top-14 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/20 whitespace-nowrap"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {item.label}
                </motion.div>
              )}
            </motion.a>
          );
        })}

        <div className="w-px h-8 bg-current opacity-20 mx-2" />

        <div className="flex gap-4">
          <motion.button
            onClick={() => setShowMoods(!showMoods)}
            className="p-2 rounded-full relative"
            whileHover={{ scale: 1.15 }}
            style={{ color: 'var(--theme-secondary)' }}
            title="Adjust Colors"
          >
            <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center text-lg shadow-sm">
              🎨
            </div>
          </motion.button>

          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full"
            whileHover={{ rotate: 180, scale: 1.15 }}
            transition={{ duration: 0.6, type: "spring" }}
            style={{ color: 'var(--theme-primary)' }}
            title="Toggle Day/Night"
          >
            {currentMode === 'day' ? <Sun size={26} /> : <Moon size={26} />}
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

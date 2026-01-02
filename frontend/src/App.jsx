import React, { useEffect, useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { ArtEngine } from './components/ArtEngine';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronUp, Palette } from 'lucide-react';


const PortfolioContent = () => {
  const { mood } = useTheme();
  return (
    <>
      {/* CustomCursor removed: using default cursor */}
      <div className="min-h-screen selection:bg-day-primary selection:text-white transition-colors duration-1000">
        <ArtEngine />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Skills />
          <Education />
          <Projects />
          <Contact />
        </main>
        <footer className="relative z-10 py-20 px-6 mt-24 overflow-hidden">
          {/* Background Accent Decorations */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
            <div className="absolute top-10 right-20 w-64 h-64 bg-accent blur-[100px] rounded-full" />
            <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent blur-[120px] rounded-full" />
          </div>

          <div className="max-w-6xl mx-auto w-full">
            {/* Header Section */}
            <div className="text-center mb-16">
              <div className="flex items-center gap-3 justify-center mb-5 opacity-60">
                <div className="w-12 h-[2px] bg-accent" />
                <div className="w-12 h-[2px] bg-accent" />
              </div>
              <h3 className="text-5xl lg:text-7xl font-black mb-4 tracking-tighter uppercase leading-tight">
                Let's <span className="text-accent">Connect</span>
              </h3>
              <p className="max-w-2xl mx-auto opacity-70 text-base leading-relaxed font-serif italic">
                Available for backend roles, technical consulting, and collaborative projects.
              </p>
            </div>

            {/* Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 border-b border-accent/20 pb-16">
              {/* About Column */}
              <div className="text-center md:text-left">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-6 text-accent">About</h4>
                <p className="opacity-70 leading-relaxed font-medium text-base">
                  A passionate software engineer focused on building robust backend systems and scalable architectures.
                </p>
              </div>

              {/* Navigation Column */}
              <div className="text-center">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-6 text-accent">Navigation</h4>
                <ul className="space-y-3 font-bold">
                  <li><a href="#hero" className="hover:text-accent transition-colors duration-300">Home</a></li>
                  <li><a href="#skills" className="hover:text-accent transition-colors duration-300">Skills</a></li>
                  <li><a href="#education" className="hover:text-accent transition-colors duration-300">Education</a></li>
                  <li><a href="#projects" className="hover:text-accent transition-colors duration-300">Projects</a></li>
                  <li><a href="#contact" className="hover:text-accent transition-colors duration-300">Contact</a></li>
                </ul>
              </div>

              {/* Social Column */}
              <div className="text-center md:text-right">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-6 text-accent">Connect</h4>
                <ul className="space-y-3 font-bold">
                  <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-accent transition-colors duration-300"><Github size={16} /> GitHub</a></li>
                  <li><a href="https://linkedin.com/in/aliza-simkhada-711265287" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-accent transition-colors duration-300"><Linkedin size={16} /> LinkedIn</a></li>
                  <li><a href="mailto:Simkhadaaliza080@gmail.com" className="inline-flex items-center gap-2 hover:text-accent transition-colors duration-300"><Mail size={16} /> Email</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center md:text-left">
                <div className="text-2xl font-black tracking-tighter mb-1">Aliza <span className="text-accent">Simkhada</span></div>
                <div className="text-[10px] font-black uppercase tracking-widest opacity-50">Crafted with Passion © 2026</div>
              </div>

              {/* Mood/Status Widget */}
              <div className="glass px-6 py-3 rounded-2xl flex items-center gap-4 border border-accent/20 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-70">
                    Mode: {mood.toUpperCase()}
                  </span>
                </div>
                <div className="w-px h-5 bg-accent/20" />
                <Palette size={14} className="text-accent" />
              </div>

              {/* Back to Top Button */}
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 rounded-2xl glass flex items-center justify-center border border-accent/20 group overflow-hidden hover:border-accent/50 transition-all duration-300"
              >
                <ChevronUp size={20} className="text-accent group-hover:-translate-y-1 transition-transform duration-300" />
              </motion.button>
            </div>
          </div>
        </footer>
        <div className="fixed inset-0 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,0.05)] z-20" />
      </div>
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}

export default App;

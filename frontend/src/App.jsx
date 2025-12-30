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
import { Github, Linkedin, Mail, Twitter, ChevronUp, Palette } from 'lucide-react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const handleMouseOver = (e) => {
      if (e.target.closest('button, a, .group')) setIsHovering(true);
      else setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-accent pointer-events-none z-[9999] hidden lg:block"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: isHovering ? 2 : 1,
        backgroundColor: isHovering ? 'rgba(var(--theme-primary-rgb), 0.1)' : 'transparent',
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.5 }}
    />
  );
};

const PortfolioContent = () => {
  const { mood } = useTheme();
  const [loading, setLoading] = useState(true);
  const [loadStep, setLoadStep] = useState(0);

  const loadingSteps = [
    "Compiling Assets...",
    "Initializing MERN Engine...",
    "Establishing Secure Handshake...",
    "Deploying Architecture...",
    "Experience Ready."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadStep(prev => {
        if (prev >= loadingSteps.length - 1) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return prev;
        }
        return prev + 1;
      });
    }, 400);
    return () => clearInterval(timer);
  }, [loadingSteps.length]);

  return (
    <AnimatePresence mode="wait">
      <CustomCursor />
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: 'blur(10px)',
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[100] bg-[#FFFCF7] dark:bg-[#0F0F1A] flex items-center justify-center flex-col p-10 font-mono"
        >
          <div className="max-w-md w-full">
            <div className="flex items-center gap-2 mb-8 opacity-40">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-[10px] ml-2 uppercase tracking-widest">aliza_simkhada_v1.0.terminal</span>
            </div>

            <div className="space-y-4">
              {loadingSteps.slice(0, loadStep + 1).map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`text-sm md:text-lg flex items-center gap-4 ${i === loadStep ? 'text-accent' : 'opacity-40'}`}
                >
                  <span className="text-accent/50">[{i}]</span>
                  <span className={i === loadStep ? 'font-bold' : ''}>{step}</span>
                  {i === loadStep && <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.6 }}>_</motion.span>}
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-12 h-1 bg-accent/10 rounded-full overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2 }}
            >
              <motion.div
                className="h-full bg-accent shadow-[0_0_15px_rgba(255,90,54,0.5)]"
                animate={{ width: `${((loadStep + 1) / loadingSteps.length) * 100}%` }}
              />
            </motion.div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="min-h-screen selection:bg-day-primary selection:text-white transition-colors duration-1000"
        >
          <ArtEngine />
          <Navbar />

          <main className="relative z-10">
            <Hero />
            <Skills />
            <Education />
            <Projects />
            <Contact />
          </main>

          <footer className="relative z-10 py-24 px-6 mt-32 overflow-hidden">
            {/* Background Splatter Decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
              <div className="absolute top-10 right-20 w-64 h-64 bg-accent blur-[100px] rounded-full" />
              <div className="absolute bottom-10 left-20 w-96 h-96 bg-accent blur-[150px] rounded-full" />
            </div>

            <div className="container mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20 border-b border-current/10 pb-20">
                <div className="lg:col-span-2">
                  <h3 className="text-4xl lg:text-6xl font-black mb-8 tracking-tighter">
                    Let's Build Something <span className="text-accent italic">Exceptional</span>.
                  </h3>
                  <p className="text-xl max-w-md opacity-60 leading-relaxed font-medium">
                    Available for senior backend roles, technical consulting, and architectural reviews.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 opacity-40">Navigation</h4>
                  <ul className="space-y-4 font-bold">
                    <li><a href="#hero" className="hover:text-accent transition-colors">Home</a></li>
                    <li><a href="#skills" className="hover:text-accent transition-colors">Skills</a></li>
                    <li><a href="#projects" className="hover:text-accent transition-colors">Work</a></li>
                    <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 opacity-40">Social Space</h4>
                  <ul className="space-y-4 font-bold">
                    <li><a href="#" className="flex items-center gap-2 hover:text-accent transition-colors"><Github size={16} /> GitHub</a></li>
                    <li><a href="#" className="flex items-center gap-2 hover:text-accent transition-colors"><Linkedin size={16} /> LinkedIn</a></li>
                    <li><a href="#" className="flex items-center gap-2 hover:text-accent transition-colors"><Twitter size={16} /> Twitter</a></li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="text-center md:text-left">
                  <div className="text-2xl font-black tracking-tighter mb-2">Aliza Simkhada</div>
                  <div className="text-[10px] font-black uppercase tracking-widest opacity-40">Architected with Passion © 2025</div>
                </div>

                {/* Mood/Status Widget */}
                <div className="glass px-8 py-4 rounded-3xl flex items-center gap-6 border border-white/20 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-70">
                      Current Mode: {mood.toUpperCase()}
                    </span>
                  </div>
                  <div className="w-px h-6 bg-current opacity-10" />
                  <Palette size={16} className="text-accent" />
                </div>

                <motion.button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  whileHover={{ y: -5 }}
                  className="w-16 h-16 rounded-2xl glass flex items-center justify-center border border-white/10 group overflow-hidden"
                >
                  <ChevronUp className="group-hover:-translate-y-1 transition-transform" />
                  <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-10" />
                </motion.button>
              </div>
            </div>
          </footer>

          <div className="fixed inset-0 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,0.05)] z-20" />
        </motion.div>
      )}
    </AnimatePresence>
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

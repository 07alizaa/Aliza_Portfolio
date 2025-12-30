import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronRight, BarChart3, ShoppingCart, Sword, CheckCircle2 } from 'lucide-react';

const projectData = [
  {
    id: 'salesdashboard',
    title: 'SalesDashboard',
    subtitle: 'MERN Stack Analytics',
    description: 'A comprehensive sales analytics dashboard with focus on secure data processing and real-time visualization.',
    keyFeatures: [
      'Secure JWT & Refresh Tokens',
      'Automated Excel Data Processing',
      'Real-time Chart.js Analytics',
      'Centralized API State Management'
    ],
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Redux'],
    icon: BarChart3,
    color: '#FF5A36',
    githubUrl: 'https://github.com/07alizaa',
    liveUrl: '#'
  },
  {
    id: 'grocerai',
    title: 'GrocerAI',
    subtitle: 'AI E-Commerce Ecosystem',
    description: 'Intelligent shopping platform featuring AI-powered meal planning and a live vendor analytics engine.',
    keyFeatures: [
      'OpenAI Meal Planner Integration',
      'AI Chatbot for smart search',
      'Live Vendor Analytics Dashboard',
      'Optimized Checkout & Auth flows'
    ],
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'OpenAI'],
    icon: ShoppingCart,
    color: '#3178C6',
    githubUrl: 'https://github.com/07alizaa',
    liveUrl: '#'
  },
  {
    id: 'devduel',
    title: 'DevDuel',
    subtitle: 'Vanilla JS Game Engine',
    description: 'Browser-based competitive game showcasing high-level ES6 patterns and modular architecture.',
    keyFeatures: [
      'Modular MVC Architecture',
      'Weighted Scoring Algorithm',
      'Dynamic Match Persistence',
      'High-Performance DOM Logic'
    ],
    tech: ['Vanilla JS', 'HTML5', 'CSS3', 'LocalStorage'],
    icon: Sword,
    color: '#339933',
    githubUrl: 'https://github.com/07alizaa',
    liveUrl: '#'
  }
];

const RoughBorder = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" preserveAspectRatio="none">
    <filter id="rough-edge">
      <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" />
    </filter>
    <rect
      x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)"
      rx="24" fill="none" stroke="currentColor" strokeWidth="2"
      filter="url(#rough-edge)" className="opacity-20"
    />
  </svg>
);

const CornerDoodle = ({ color }) => (
  <svg width="60" height="60" viewBox="0 0 60 60" className="absolute -top-2 -right-2 transform transition-transform group-hover:scale-125 group-hover:rotate-12 duration-500 opacity-40 group-hover:opacity-100">
    <path
      d="M10 10 Q30 5 50 10 Q55 30 50 50 Q30 55 10 50 Q5 30 10 10"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      className="drop-shadow-sm"
    />
    <circle cx="30" cy="30" r="3" fill={color} />
  </svg>
);

const PortfolioCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = project.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10, rotateZ: -1 }}
      className="group relative bg-[#FFFCF7]/80 dark:bg-[#0F0F1A]/80 p-10 rounded-[2.5rem] border border-transparent flex flex-col h-full overflow-visible"
    >
      <RoughBorder />
      <CornerDoodle color={project.color} />

      <div className="relative z-10 flex-1">
        <div className="flex justify-between items-start mb-8">
          <motion.div
            animate={{ scale: hovered ? 1.1 : 1, rotate: hovered ? 10 : 0 }}
            className="p-5 rounded-2xl bg-white/5 border-2 border-dashed border-accent/20 text-accent transition-all duration-500 shadow-sm"
          >
            <Icon size={32} />
          </motion.div>

          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.2, rotate: -10 }}
              href={project.githubUrl}
              target="_blank"
              className="p-3 glass rounded-xl text-current hover:text-accent transition-all"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 10 }}
              href={project.liveUrl}
              target="_blank"
              className="p-3 glass rounded-xl text-current hover:text-accent transition-all"
            >
              <ExternalLink size={20} />
            </motion.a>
          </div>
        </div>

        <div className="mb-6">
          <h3 className={`text-3xl font-black mb-1 font-serif transition-colors duration-500 uppercase tracking-tighter ${hovered ? 'text-accent' : 'text-current'}`}>
            {project.title}
          </h3>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
            {project.subtitle}
          </span>
        </div>

        <p className="text-sm opacity-60 leading-relaxed font-medium italic mb-8 border-l-2 border-accent/20 pl-4">
          {project.description}
        </p>

        <ul className="space-y-4 mb-10">
          {project.keyFeatures.map((f, i) => (
            <motion.li
              key={i}
              className="flex items-center gap-4 text-xs font-bold tracking-tight"
            >
              <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
              <span className="opacity-80">{f}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="relative z-10 pt-8 mt-auto border-t border-dashed border-current/10 flex flex-wrap gap-2 items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span
              key={t}
              className="text-[9px] px-4 py-1.5 font-black uppercase tracking-widest border border-current/10 rounded-full hover:border-accent hover:text-accent transition-all duration-300"
            >
              {t}
            </span>
          ))}
        </div>
        <motion.button
          animate={{ x: hovered ? 5 : 0 }}
          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] opacity-60 hover:opacity-100 group"
        >
          Blueprint <ChevronRight size={14} className="text-accent transition-transform group-hover:translate-x-1" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-5xl lg:text-8xl font-black mb-8 tracking-tighter uppercase leading-none">
              The <span className="text-accent italic">Studio</span> Work
            </h2>
            <p className="text-xl opacity-60 font-medium leading-relaxed italic border-l-4 border-accent pl-8">
              Where complex backend logic meets fluid digital aesthetics.
              Architecting systems with a <span className="italic text-accent">structured</span> but rigorous approach.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="text-9xl font-black opacity-[0.03] tracking-tighter select-none">PORTFOLIO</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {projectData.map(project => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Background Shapes */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};

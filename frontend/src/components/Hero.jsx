import React from 'react';
// --- RANDOM ARRAYS GENERATED AT MODULE SCOPE ---
const backgroundRandoms = Array.from({ length: 7 }, () => ({
  x: Math.random() * 80 + 10,
  y: Math.random() * 80 + 10,
  delay: Math.random() * 3
}));

const dotRandoms = Array.from({ length: 8 }, () => ({
  x: (Math.random() - 0.5) * 300,
  y: (Math.random() - 0.5) * 300,
  duration: 3 + Math.random() * 2
}));
import { motion } from 'framer-motion';
import { WatercolorText } from './ArtEngine';
import { Mail, Github, Linkedin, ChevronDown, Terminal, Zap, Code, Shield, Cpu, Database, Cloud } from 'lucide-react';
import { LivingDoodle } from './DoodleLife';

const DrippingText = ({ text, className = "" }) => {
  return (
    <span className={`dripping-text inline-block ${className}`}>
      {text}
    </span>
  );
};

const FloatingCodeSnippet = ({ children, x, y, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: `${x}vw`, y: `${y}vh` }}
    animate={{
      opacity: [0, 0.2, 0],
      y: [`${y}vh`, `${y - 12}vh`],
    }}
    transition={{ duration: 25, repeat: Infinity, delay, ease: "linear" }}
    className="absolute font-mono text-[10px] text-accent/40 pointer-events-none select-none whitespace-nowrap"
  >
    {children}
  </motion.div>
);

const EngineNode = ({ type, label, x, y, delay, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, type: "spring", stiffness: 100 }}
    className="absolute cursor-pointer group"
    style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
  >
    <div className="relative">
      <div className="p-4 rounded-3xl glass border border-accent/20 bg-white/40 dark:bg-black/20 shadow-xl group-hover:border-accent group-hover:shadow-[0_0_30px_rgba(255,90,54,0.3)] transition-all duration-500">
        <LivingDoodle type={type} className="w-16 h-16 md:w-20 md:h-20" />
      </div>

      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-accent text-white text-[9px] font-black px-3 py-1 rounded-full whitespace-nowrap tracking-widest uppercase">
        {label}
      </div>

      <div className="absolute -top-3 -right-3 p-2 bg-accent rounded-xl text-white shadow-lg group-hover:scale-125 transition-transform">
        {Icon && <Icon size={16} />}
      </div>
    </div>
  </motion.div>
);

const DataPipe = ({ d, delay }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
    <motion.path
      d={d}
      fill="none"
      stroke="var(--theme-primary)"
      strokeWidth="1.5"
      strokeDasharray="4 8"
      initial={{ strokeDashoffset: 100, opacity: 0 }}
      animate={{ strokeDashoffset: 0, opacity: 0.15 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear", delay }}
    />
  </svg>
);

export const Hero = () => {
  // Memoize codeSnippets so it doesn't change on every render
  // Memoize codeSnippets so it doesn't change on every render
  const codeSnippets = [
    "await db.connect();",
    "router.post('/auth')",
    "process.env.DB_URI",
    "res.send(200)",
    "SELECT * FROM users",
    "npm init -y",
    "git push origin main"
  ];

  // Use pre-generated random positions for code snippets
  const backgroundElements = codeSnippets.map((snippet, i) => ({
    snippet,
    x: backgroundRandoms[i].x,
    y: backgroundRandoms[i].y,
    delay: i * 3
  }));

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {backgroundElements.map((item, i) => (
          <FloatingCodeSnippet key={i} x={item.x} y={item.y} delay={item.delay}>
            {item.snippet}
          </FloatingCodeSnippet>
        ))}
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-center z-10 relative">
        <div className="lg:col-span-3 text-center lg:text-left pt-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 justify-center lg:justify-start mb-8 opacity-60">
              <div className="w-12 h-[2px] bg-accent" />
              <div className="flex items-center gap-2">
                <Terminal size={18} className="text-accent" />
                <span className="text-xs font-black tracking-[0.4em] uppercase">Full Stack Developer</span>
              </div>
            </div>

            <div className="mb-10 overflow-visible flex flex-col items-center lg:items-start leading-none">
              <WatercolorText
                text="ALIZA"
                className="text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-day-primary uppercase leading-[0.7] whitespace-nowrap"
              />
              <WatercolorText
                text="SIMKHADA"
                className="text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-accent uppercase leading-[0.7] whitespace-nowrap"
              />
            </div>

            <p className="text-xl md:text-2xl max-w-2xl mx-auto lg:mx-0 opacity-80 mb-14 leading-relaxed font-serif italic border-l-8 border-accent pl-10 py-2">
              "Building scalable <DrippingText text="MERN Architecture" className="text-accent" /> with a focus on high-performance backend logic.
              AWS certified and passionate about <span className="text-accent font-bold">Cloud Deployment</span>."
            </p>

            <div className="flex flex-wrap gap-8 justify-center lg:justify-start items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-12 py-6 rounded-2xl bg-accent text-white font-black shadow-[0_25px_50px_-15px_rgba(255,90,54,0.4)] flex items-center gap-4 text-xl tracking-widest uppercase transition-all"
              >
                Let's Build <Zap size={22} fill="currentColor" />
              </motion.button>

              <div className="flex gap-4">
                {[
                  { icon: Github, url: 'https://github.com/07alizaa' },
                  { icon: Linkedin, url: 'https://www.linkedin.com/in/aliza-simkhada-711265287/' }
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -10, scale: 1.1 }}
                    className="w-16 h-16 rounded-2xl glass flex items-center justify-center border-2 border-accent/20 transition-all shadow-xl"
                  >
                    <item.icon size={28} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-2 relative h-[500px] md:h-[650px] flex items-center justify-center mt-20 lg:mt-0">
          <div className="relative w-full h-full max-w-[450px]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-4 border-dashed border-accent/10 rounded-full"
            />
            <div className="absolute inset-4 border-2 border-current opacity-[0.03] rounded-full" />

            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 glass rounded-[3rem] border-4 border-accent bg-accent/5 flex items-center justify-center shadow-[0_0_60px_rgba(255,90,54,0.2)]">
                <div className="flex flex-col items-center gap-2">
                  <div className="relative">
                    <Cpu size={48} className="text-accent animate-pulse" />
                    <motion.div
                      animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-accent rounded-full blur-xl"
                    />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Core</span>
                </div>
              </div>
            </motion.div>

            <EngineNode icon={Shield} type="cloud" label="AWS Security" x={50} y={15} delay={0.2} />
            <EngineNode icon={Database} type="database" label="DB Clusters" x={85} y={50} delay={0.4} />
            <EngineNode icon={Zap} type="server" label="Express Engine" x={50} y={85} delay={0.6} />
            <EngineNode icon={Code} type="cloud" label="Cloud Infrastructure" x={15} y={50} delay={0.8} />

            <DataPipe d="M 225, 100 L 225, 250" delay={0} />
            <DataPipe d="M 225, 400 L 225, 550" delay={1} />
            <DataPipe d="M 325, 325 L 425, 325" delay={2} />
            <DataPipe d="M 125, 325 L 25, 325" delay={3} />

            {/* Generate randoms for floating dots only once at module scope */}
            {dotRandoms.map((rand, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 0.5, 0],
                  x: [0, rand.x],
                  y: [0, rand.y]
                }}
                transition={{ duration: rand.duration, repeat: Infinity, delay: i * 0.5 }}
                className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-accent rounded-full"
              />
            ))}
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30 z-10"
      >
        <ChevronDown size={40} className="text-accent" />
      </motion.div>
    </section>
  );
};

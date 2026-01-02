// Professional Skills Section - Two Column Layout
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiNodedotjs, SiMongodb, SiReact, SiExpress, SiTailwindcss, SiJavascript, 
  SiHtml5, SiCss3, SiMysql, SiFirebase, SiGithub, SiPostman, SiFigma, 
  SiPostgresql
} from 'react-icons/si';
import { FaAws, FaServer, FaKey, FaShieldAlt } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import { Code2, Database, Cloud, Palette, Wrench, Award } from 'lucide-react';

const skillCategories = [
  {
    category: 'Backend Core',
    icon: Code2,
    color: 'from-green-500 to-emerald-600',
    borderColor: 'border-green-500/30',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#000000' },
      { name: 'REST APIs', icon: FaServer, color: '#E10098' },
      { name: 'JWT Auth', icon: FaKey, color: '#FF6B6B' },
      { name: 'MVC', icon: FaShieldAlt, color: '#4ECDC4' },
    ],
  },
  {
    category: 'Databases',
    icon: Database,
    color: 'from-blue-500 to-cyan-600',
    borderColor: 'border-blue-500/30',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    ],
  },
  {
    category: 'Cloud & AWS',
    icon: Cloud,
    color: 'from-orange-500 to-red-600',
    borderColor: 'border-orange-500/30',
    skills: [
      { name: 'AWS Cloud', icon: FaAws, color: '#FF9900' },
      { name: 'EC2', icon: FaAws, color: '#232F3E' },
      { name: 'S3', icon: FaAws, color: '#FF9900' },
      { name: 'Lambda', icon: FaAws, color: '#FF9900' },
      { name: 'RDS', icon: FaAws, color: '#232F3E' },
    ],
  },
  {
    category: 'Frontend',
    icon: Palette,
    color: 'from-purple-500 to-pink-600',
    borderColor: 'border-purple-500/30',
    skills: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    ],
  },
  {
    category: 'Dev Tools',
    icon: Wrench,
    color: 'from-slate-500 to-gray-700',
    borderColor: 'border-slate-500/30',
    skills: [
      { name: 'Git/GitHub', icon: SiGithub, color: '#181717' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'VS Code', icon: VscCode, color: '#007ACC' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    ],
  },
];

const SkillBadge = ({ skill, index }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.03 }}
      className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass border border-white/10 hover:border-accent/50 transition-all duration-300 cursor-default group hover:shadow-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.span
        className="text-2xl transition-transform duration-300"
        style={{ color: hovered ? skill.color : 'currentColor' }}
        whileHover={{ scale: 1.2, rotate: 8 }}
      >
        <Icon />
      </motion.span>
      <span className="text-base font-bold group-hover:text-accent transition-colors whitespace-nowrap">
        {skill.name}
      </span>
    </motion.div>
  );
};

const CategoryCard = ({ category, index }) => {
  const CategoryIcon = category.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, type: "spring", stiffness: 80 }}
      className={`p-5 glass rounded-2xl border-2 ${category.borderColor} hover:shadow-2xl transition-all duration-300`}
    >
      {/* Header with Icon */}
      <div className="flex items-center gap-3 mb-4">
        <div className="relative">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} p-3 shadow-lg border-2 ${category.borderColor}`}>
            <CategoryIcon className="w-full h-full text-white" strokeWidth={2.5} />
          </div>
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
            className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-xl blur-md`}
          />
        </div>
        
        <div>
          <h3 className="text-lg font-black uppercase tracking-wide">
            {category.category}
          </h3>
          <div className={`w-10 h-1 bg-gradient-to-r ${category.color} rounded-full mt-1`} />
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2.5">
        {category.skills.map((skill, skillIndex) => (
          <SkillBadge key={skillIndex} skill={skill} index={skillIndex} />
        ))}
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden snap-start">
      <div className="max-w-6xl mx-auto w-full py-6 pb-0">
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block"
          >
            <div className="flex items-center gap-3 justify-center mb-5 opacity-60">
              <div className="w-12 h-[2px] bg-accent" />
              <div className="w-12 h-[2px] bg-accent" />
            </div>
          </motion.div>
          
          <h2 className="text-5xl lg:text-7xl font-black mb-3 tracking-tighter uppercase leading-tight">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <p className="max-w-2xl mx-auto opacity-70 text-base leading-relaxed font-serif italic">
            Technologies and tools I work with
          </p>
        </div>

        {/* Two Column Grid - No spacing between rows */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          {skillCategories.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} />
          ))}
        </div>

        {/* Professional Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8"
        >
          <div className="text-center mb-6">
            <div className="flex items-center gap-3 justify-center mb-4 opacity-60">
              <div className="w-12 h-[2px] bg-accent" />
              <span className="text-sm font-black tracking-[0.4em] uppercase flex items-center gap-2">
                <Award size={16} />
                Professional Credentials
              </span>
              <div className="w-12 h-[2px] bg-accent" />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="px-8 py-6 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 text-white text-center shadow-2xl border-4 border-orange-400/30">
                <FaAws size={40} className="mx-auto mb-2" />
                <div className="text-sm font-bold uppercase tracking-wider mb-1">AWS Certified</div>
                <div className="text-xs opacity-90 font-semibold">Solutions Architect</div>
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl blur-xl -z-10"
              />
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="px-8 py-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white text-center shadow-2xl border-4 border-blue-400/30">
                <SiNodedotjs size={40} className="mx-auto mb-2" />
                <div className="text-sm font-bold uppercase tracking-wider mb-1">Cisco Certified</div>
                <div className="text-xs opacity-90 font-semibold">CCNA Network</div>
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl blur-xl -z-10"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
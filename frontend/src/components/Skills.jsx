// Backend Artist Skills
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiNodedotjs, SiMongodb, SiReact, SiExpress, SiTailwindcss, SiJavascript, SiHtml5, SiCss3, SiMysql, SiFirebase, SiGithub, SiPostman, SiFigma, SiGraphql, SiPostgresql
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

const skillGroups = [
  {
    title: "Backend Core",
    items: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933', doodle: 'server' },
      { name: 'Express.js', icon: SiExpress, color: '#000000', doodle: 'code' },
      { name: 'REST APIs', icon: SiGraphql, color: '#E10098', doodle: 'code' },
    ]
  },
  {
    title: "Databases",
    items: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248', doodle: 'database' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', doodle: 'database' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1', doodle: 'database' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', doodle: 'database' },
    ]
  },
  {
    title: "Cloud & AWS",
    items: [
      { name: 'AWS Cloud', icon: FaAws, color: '#FF9900', doodle: 'cloud' },
      { name: 'EC2/S3', icon: FaAws, color: '#232F3E', doodle: 'cloud' },
      { name: 'Lambda/RDS', icon: FaAws, color: '#FF9900', doodle: 'server' },
    ]
  },
  {
    title: "Frontend Architecture",
    items: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB', doodle: 'code' },
      { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4', doodle: 'code' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', doodle: 'code' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26', doodle: 'code' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6', doodle: 'code' },
    ]
  },
  {
    title: "Dev Tools",
    items: [
      { name: 'Git/GitHub', icon: SiGithub, color: '#181717', doodle: 'code' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37', doodle: 'code' },
      { name: 'VS Code', icon: VscCode, color: '#007ACC', doodle: 'code' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E', doodle: 'code' },
    ]
  }
];

const SkillIconCard = ({ skill }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = skill.icon;
  return (
    <motion.div
      className="relative p-2 md:p-3 lg:p-4 rounded-xl glass flex flex-col items-center justify-center gap-2 group hover:shadow-xl transition-all duration-400 border border-white/10 min-h-[70px] md:min-h-[90px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6, scale: 1.07 }}
    >
      <div className="relative z-10 p-2 md:p-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-accent transition-colors flex items-center justify-center">
        <Icon
          size={22}
          style={{ color: hovered ? skill.color : 'var(--theme-text)' }}
          className="transition-all duration-400"
        />
      </div>
      <h4 className="font-semibold text-[10px] md:text-xs tracking-tight relative z-10 group-hover:text-accent transition-colors text-center uppercase">
        {skill.name}
      </h4>
    </motion.div>
  );
};

export const Skills = () => {
  // Flatten all skills for a single grid
  const allSkills = skillGroups.flatMap(g => g.items.map(skill => ({ ...skill, group: g.title })));
  return (
    <section id="skills" className="py-20 px-2 md:px-8 relative overflow-hidden flex items-center justify-center min-h-[70vh]">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-center uppercase">
          Technical Skillset & Certifications
        </h2>
        <p className="max-w-2xl mx-auto opacity-70 text-base md:text-lg font-medium text-center mb-10">
          Demonstrated expertise in modern web development, cloud, and professional tooling.
        </p>
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-5 lg:gap-6">
            {allSkills.map(skill => (
              <SkillIconCard key={skill.name + skill.group} skill={skill} />
            ))}
          </div>
        </div>
        {/* Certifications Highlight */}
        <div className="mt-16 md:mt-24 p-6 md:p-10 glass rounded-2xl md:rounded-[2.5rem] border border-accent/20 w-full max-w-3xl relative overflow-hidden group">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
            <div className="max-w-xl">
              <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight uppercase">Certifications</h3>
              <p className="opacity-80 leading-relaxed font-serif italic text-base md:text-lg">
                AWS Certified Solutions Architect – Associate (Amazon Web Services).<br/>
                Cisco Certified Network Associate (CCNA).
              </p>
            </div>
            <div className="flex gap-3 md:gap-6">
              <div className="glass p-4 md:p-6 rounded-2xl border border-accent/30 text-center group-hover:border-accent transition-colors">
                <FaAws size={32} className="text-accent mx-auto mb-1" />
                <div className="text-[10px] font-black uppercase tracking-widest">AWS CSAA</div>
              </div>
              <div className="glass p-4 md:p-6 rounded-2xl border border-white/10 text-center group-hover:border-accent transition-colors">
                <SiNodedotjs size={32} className="text-accent mx-auto mb-1" />
                <div className="text-[10px] font-black uppercase tracking-widest">Cisco CCNA</div>
              </div>
            </div>
          </div>
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-40 h-40 md:w-64 md:h-64 bg-accent/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none group-hover:bg-accent/10 transition-colors" />
        </div>
      </div>
    </section>
  );
};

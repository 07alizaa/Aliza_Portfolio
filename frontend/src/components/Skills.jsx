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
      className="relative p-6 rounded-[2rem] glass flex flex-col items-center justify-center gap-4 group hover:shadow-2xl transition-all duration-500 border border-white/5"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -10, scale: 1.05 }}
    >
      <div className="relative z-10 p-5 rounded-2xl bg-white/5 border border-white/10 group-hover:border-accent transition-colors">
        <Icon
          size={32}
          style={{ color: hovered ? skill.color : 'var(--theme-text)' }}
          className="transition-all duration-500"
        />
      </div>

      <h4 className="font-bold text-xs tracking-tight relative z-10 group-hover:text-accent transition-colors text-center uppercase">
        {skill.name}
      </h4>

    </motion.div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl lg:text-7xl font-black mb-6 tracking-tighter uppercase leading-none">
            The <span className="text-accent italic">Engine</span> Room
          </h2>
          <p className="max-w-2xl mx-auto opacity-60 text-lg font-medium italic">
            Certified expertise in backend architecture, database optimization, and cloud solutions.
          </p>
        </div>

        <div className="space-y-20">
          {skillGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <div className="flex items-center gap-4 mb-10 opacity-40">
                <span className="text-xs font-black uppercase tracking-[0.5em]">{group.title}</span>
                <div className="h-[1px] flex-1 bg-current" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {group.items.map(skill => (
                  <SkillIconCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Highlight */}
        <div className="mt-32 p-10 glass rounded-[3rem] border border-accent/20 relative overflow-hidden group">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <h3 className="text-3xl font-black mb-4 tracking-tighter uppercase">Certified Solutions Architect</h3>
              <p className="opacity-70 leading-relaxed font-serif italic text-lg">
                "AWS Certified Solutions Architect – Associate (Amazon Web Services).
                Validated expertise in designing distributed systems on AWS."
              </p>
            </div>
            <div className="flex gap-4">
              <div className="glass p-6 rounded-3xl border border-accent/30 text-center group-hover:border-accent transition-colors">
                <FaAws size={40} className="text-accent mx-auto mb-2" />
                <div className="text-[10px] font-black uppercase tracking-widest">AWS CSAA</div>
              </div>
              <div className="glass p-6 rounded-3xl border border-white/10 text-center group-hover:border-accent transition-colors">
                <SiNodedotjs size={40} className="text-accent mx-auto mb-2" />
                <div className="text-[10px] font-black uppercase tracking-widest">Cisco CCNA</div>
              </div>
            </div>
          </div>
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-accent/10 transition-colors" />
        </div>
      </div>
    </section>
  );
};

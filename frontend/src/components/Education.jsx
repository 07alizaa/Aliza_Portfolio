import React from 'react';
import { motion } from 'framer-motion';
import { Book, Award, GraduationCap } from 'lucide-react';

const educationItems = [
  {
    period: '2023 - 2026',
    institution: 'University of Bedfordshire',
    degree: 'Bachelor of Science in Software Engineering',
    description: 'Focusing on advanced backend systems, software architecture, and full-stack development methodologies.',
    icon: GraduationCap,
  },
  {
    period: '2019 - 2021',
    institution: 'Rehdon College',
    degree: 'Nepal Education Board',
    description: 'Completed Higher Secondary Education with a GPA of 3.53, establishing a strong foundation in science and technology.',
    icon: Book,
  }
];

export const Education = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  return (
    <section id="education" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden snap-start">
      <div className="max-w-6xl mx-auto w-full pt-2 pb-12">
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
            Academic <span className="text-accent">Journey</span>
          </h2>
          <p className="max-w-2xl mx-auto opacity-70 text-base leading-relaxed font-serif italic">
            The blueprints of my technical expertise, forged through rigorous study and architectural focus.
          </p>
        </div>

        <ol className={`relative border-l-4 transition-colors duration-300 ${activeIndex !== null ? 'border-accent' : 'border-accent/20'} max-w-4xl mx-auto pl-8 pr-2 space-y-8`}>
          {educationItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeIndex === index;
            return (
              <li
                key={index}
                className={`flex items-start gap-8 cursor-pointer transition-all duration-300 ${isActive ? 'scale-105' : ''}`}
                onClick={() => setActiveIndex(index)}
                tabIndex={0}
                onKeyPress={e => { if (e.key === 'Enter') setActiveIndex(index); }}
              >
                <span className={`flex-shrink-0 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mt-0.5 shadow-md border-2 ${isActive ? 'border-accent' : 'border-accent/20'} transition-colors duration-300`}>
                  <Icon size={36} />
                </span>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                    <div>
                      <span className="text-accent font-black text-base uppercase tracking-widest">{item.period}</span>
                      <h3 className="text-2xl lg:text-3xl font-black mt-1 tracking-tight">{item.institution}</h3>
                    </div>
                    <div className="px-5 py-1 rounded-2xl bg-accent/10 text-base font-bold uppercase tracking-widest text-accent/90 mt-2 sm:mt-0">
                      {item.degree}
                    </div>
                  </div>
                  <p className="text-lg lg:text-xl opacity-80 leading-relaxed font-medium mt-1">
                    {item.description.replace('Completed Higher Secondary Education with a GPA of 3.53, establishing a strong foundation in science and technology.', 'Achieved a GPA of 3.53, building a strong base in science and technology.').replace('Focusing on advanced backend systems, software architecture, and full-stack development methodologies.', 'Specializing in backend systems, software architecture, and full-stack methodologies.')}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>

  );
}

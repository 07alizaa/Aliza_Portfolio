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

  return (
    <section id="education" className="py-32 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-5xl lg:text-7xl font-black mb-6 tracking-tighter">
              Academic <span className="text-accent italic">Foundation</span>
            </h2>
            <p className="text-xl opacity-60 font-medium leading-relaxed">
              The blueprints of my technical expertise, forged through rigorous study and architectural focus.
            </p>
          </div>
          <div className="hidden lg:block">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="w-32 h-32 border-2 border-dashed border-accent opacity-20 rounded-full flex items-center justify-center"
            >
              <Award size={40} className="text-accent" />
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
          {educationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative flex flex-col md:flex-row gap-8 items-start glass p-10 rounded-[3rem] border border-white/5 hover:border-accent/30 transition-all duration-700"
              >
                <div className="w-20 h-20 rounded-3xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-xl">
                  <Icon size={32} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <span className="text-accent font-black tracking-widest text-sm uppercase">{item.period}</span>
                      <h3 className="text-3xl font-black mt-2 tracking-tight group-hover:text-accent transition-colors">{item.institution}</h3>
                    </div>
                    <div className="glass px-6 py-2 rounded-2xl text-xs font-bold opacity-60 uppercase tracking-widest bg-current/5">
                      {item.degree}
                    </div>
                  </div>
                  <p className="text-lg opacity-60 leading-relaxed font-medium italic">
                    "{item.description}"
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 top-0 left-0 w-full h-full opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-700">
                  <Icon size={150} className="absolute -right-10 -bottom-10" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

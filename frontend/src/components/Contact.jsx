import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Phone, Mail, Github, Linkedin, Zap, Globe } from 'lucide-react';
import axios from 'axios';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      await axios.post(`${apiUrl}/contact`, form);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">

          {/* Left: Contact Info & Action */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-8 opacity-60">
                <Globe size={16} className="text-accent" />
                <span className="text-xs font-black tracking-[0.4em] uppercase">Global Reach</span>
              </div>

              <h2 className="text-5xl lg:text-8xl font-black mb-8 tracking-tighter uppercase leading-none">
                Let's <span className="text-accent">Connect</span>
              </h2>
              <p className="text-xl opacity-60 mb-12 font-medium leading-relaxed italic border-l-4 border-accent pl-8">
                Currently seeking internships and entry-level roles to apply and expand my backend architecture skills.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Official Uplink', value: 'Simkhadaaliza080@gmail.com', href: 'mailto:Simkhadaaliza080@gmail.com' },
                  { icon: Phone, label: 'Direct Line', value: '+977-9844652060', href: 'tel:+9779844652060' },
                  { icon: Linkedin, label: 'Professional Network', value: 'Aliza Simkhada', href: 'https://www.linkedin.com/in/aliza-simkhada-711265287/' },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-6 glass p-6 rounded-[2rem] group border border-white/5 hover:border-accent/30 transition-all duration-500 shadow-xl"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-lg">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase opacity-40 font-black tracking-widest">{item.label}</span>
                      <p className="font-bold text-lg tracking-tight group-hover:text-accent transition-colors">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              className="mt-12 p-10 glass rounded-[3rem] relative overflow-hidden group cursor-pointer border border-accent/20"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between relative z-10">
                <div>
                  <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter text-accent">Technical Blueprint</h3>
                  <p className="opacity-60 text-sm font-medium italic">"Click to download my updated resume."</p>
                </div>
                <div className="p-5 bg-accent text-white rounded-2xl group-hover:rotate-12 transition-transform shadow-2xl">
                  <FileText size={28} />
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[60px] pointer-events-none group-hover:bg-accent/20 transition-colors" />
            </motion.div>
          </div>

          {/* Right: The Interactive Form */}
          <div className="relative">
            <div className="glass p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden h-full border border-white/10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] font-black tracking-[0.4em] uppercase opacity-60">Initializing Transmission...</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="group relative">
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b-2 border-current/10 py-4 outline-none focus:border-accent transition-colors text-lg font-bold placeholder:opacity-40"
                    placeholder="ALIZA WANTS TO KNOW YOUR NAME"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="group relative">
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b-2 border-current/10 py-4 outline-none focus:border-accent transition-colors text-lg font-bold placeholder:opacity-40"
                    placeholder="WHERE SHOULD THE REPLY GO?"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div className="group relative">
                  <textarea
                    rows="6"
                    required
                    className="w-full bg-transparent border-2 border-current/10 rounded-3xl p-6 outline-none focus:border-accent transition-all resize-none font-medium italic leading-relaxed"
                    placeholder="Share your vision or project details..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-6 rounded-[2rem] bg-accent text-white font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 shadow-[0_20px_40px_-15px_rgba(255,90,54,0.3)] disabled:opacity-50 text-lg"
                >
                  {status === 'sending' ? (
                    'Transmitting...'
                  ) : (
                    <>
                      EXECUTE UPLINK <Zap size={22} fill="currentColor" />
                    </>
                  )}
                </motion.button>
              </form>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 z-50 glass flex items-center justify-center flex-col text-center p-12"
                >
                  <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                    <Zap size={48} className="text-accent" />
                  </div>
                  <h3 className="text-3xl font-black mb-4 tracking-tighter uppercase">Transmission Successful!</h3>
                  <p className="text-lg opacity-70 font-medium italic">"I'll analyze your request and get back to you shortly."</p>
                  <button
                    onClick={() => setStatus(null)}
                    className="mt-10 font-black text-xs uppercase tracking-widest text-accent hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

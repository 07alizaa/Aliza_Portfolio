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
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden snap-start">
      <div className="max-w-6xl mx-auto w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">

          {/* Left: Contact Info & Action */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black mb-8 tracking-tighter uppercase leading-none">
                Contact <span className="text-accent">Me</span>
              </h2>
              <p className="text-base opacity-60 mb-8 font-medium leading-relaxed border-l-4 border-accent pl-6">
                Interested in working together or have a question? Reach out using the form or the details below.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: 'Simkhadaaliza080@gmail.com', href: 'mailto:Simkhadaaliza080@gmail.com' },
                  { icon: Phone, label: 'Phone', value: '+977-9844652060', href: 'tel:+9779844652060' },
                  { icon: Linkedin, label: 'LinkedIn', value: 'Aliza Simkhada', href: 'https://www.linkedin.com/in/aliza-simkhada-711265287/' },
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
                      <p className="font-bold text-base tracking-tight group-hover:text-accent transition-colors">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              className="mt-12 bg-white/80 dark:bg-[#18181b] border border-accent/30 rounded-2xl shadow-lg p-8 flex flex-col items-start gap-4"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center gap-4 mb-2">
                <FileText size={32} className="text-accent" />
                <div>
                  <h3 className="text-lg font-bold text-accent mb-1">Download Resume</h3>
                  <p className="text-sm opacity-70">Get my latest CV in PDF format.</p>
                </div>
              </div>
              <a
                href="/resume.pdf"
                download
                className="mt-2 px-6 py-3 bg-accent text-white rounded-xl font-bold uppercase tracking-wider shadow hover:bg-accent/90 transition-colors"
              >
                Download PDF
              </a>
            </motion.div>
          </div>

          {/* Right: The Interactive Form */}
          <div className="relative">
            <div className="glass border border-accent/30 rounded-2xl shadow-2xl p-10 flex flex-col gap-6">
              <h3 className="text-2xl font-black text-accent mb-2 tracking-tight uppercase" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>Send Me a Message</h3>
              <p className="text-sm opacity-70 mb-4 font-medium" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>Fill out the form below and I’ll get back to you by email as soon as possible.</p>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-sm font-bold mb-2 uppercase tracking-wide" htmlFor="name" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>Your Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full bg-transparent border-b-2 border-accent/20 py-3 px-2 outline-none focus:border-accent transition-colors text-sm font-medium placeholder:opacity-50"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 uppercase tracking-wide" htmlFor="email" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>Your Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full bg-transparent border-b-2 border-accent/20 py-3 px-2 outline-none focus:border-accent transition-colors text-sm font-medium placeholder:opacity-50"
                    placeholder="Enter your email address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 uppercase tracking-wide" htmlFor="message" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>Message</label>
                  <textarea
                    id="message"
                    rows="6"
                    required
                    className="w-full bg-transparent border-2 border-accent/20 rounded-xl p-4 outline-none focus:border-accent transition-all resize-none text-sm font-medium placeholder:opacity-50"
                    placeholder="Type your message here..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-4 rounded-xl bg-accent text-white font-black uppercase tracking-wider shadow hover:bg-accent/90 transition-colors disabled:opacity-60 text-base"
                  style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'success' && (
                  <div className="text-green-600 font-bold text-center mt-4">Thank you! Your message has been sent.</div>
                )}
                {status === 'error' && (
                  <div className="text-red-600 font-bold text-center mt-4">Something went wrong. Please try again.</div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

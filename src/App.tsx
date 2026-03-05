/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'motion/react';
import { ArrowRight, Instagram, Linkedin, Mail, MapPin, Sparkles, Star } from 'lucide-react';

const Marquee = ({ text, reverse = false }: { text: string; reverse?: boolean }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap py-4 border-y border-brand-dark/10 bg-brand-pink/5">
      <motion.div
        animate={{ x: reverse ? [0, -1000] : [-1000, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="inline-block"
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-4xl md:text-6xl font-serif italic mx-8 text-brand-pink/40 uppercase tracking-widest">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="mb-12 md:mb-20">
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-brand-orange font-medium uppercase tracking-[0.2em] text-xs mb-4"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-5xl md:text-8xl font-serif leading-tight"
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-brand-pink selection:text-white overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-pink z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-40 mix-blend-difference text-white">
        <div className="text-xl md:text-2xl font-serif italic tracking-tighter">DM.</div>
        <div className="hidden md:flex gap-10 text-xs uppercase tracking-widest font-medium">
          <a href="#about" className="hover:text-brand-pink transition-colors">About</a>
          <a href="#education" className="hover:text-brand-pink transition-colors">Education</a>
          <a href="#projects" className="hover:text-brand-pink transition-colors">Projects</a>
          <a href="#contact" className="hover:text-brand-pink transition-colors">Contact</a>
        </div>
        <button className="md:hidden">
          <Sparkles className="w-6 h-6" />
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop"
            alt="Background"
            className="w-full h-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-10 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="text-brand-orange font-medium uppercase tracking-[0.3em] text-sm mb-6 block">
              Digital Strategy & Creative Direction
            </span>
            <h1 className="text-7xl md:text-[12rem] font-serif leading-[0.85] mb-8 tracking-tighter">
              Diya <br />
              <span className="italic text-brand-pink ml-12 md:ml-24">Mangwani</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12"
          >
            <div className="flex items-center gap-3 text-brand-dark/60">
              <MapPin className="w-4 h-4" />
              <span className="text-xs uppercase tracking-widest">Mumbai, India</span>
            </div>
            <div className="w-px h-8 bg-brand-dark/20 hidden md:block" />
            <div className="flex items-center gap-3 text-brand-dark/60">
              <Star className="w-4 h-4" />
              <span className="text-xs uppercase tracking-widest">Jai Hind College</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-dark/30"
        >
          <ArrowRight className="w-6 h-6 rotate-90" />
        </motion.div>
      </section>

      <Marquee text="Digital Strategy • Creative Thinking • Brand Building •" />

      {/* About Section */}
      <section id="about" className="py-24 md:py-40 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[3/4] overflow-hidden rounded-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
              alt="Diya Mangwani"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-pink/10 mix-blend-multiply" />
          </motion.div>

          <div>
            <SectionTitle subtitle="The Vision" title="Crafting Digital Narratives" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-brand-dark/70 leading-relaxed mb-8"
            >
              Currently pursuing a Bachelors in Digital Strategy at Jai Hind College, I blend analytical thinking with a maximalist creative flair. My approach is inspired by the bold, unapologetic aesthetics of modern fashion and the precision of data-driven strategy.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              {['Strategy', 'Branding', 'Social Media', 'Content', 'Analytics'].map((skill) => (
                <span key={skill} className="px-6 py-2 border border-brand-dark/10 rounded-full text-xs uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="bg-brand-dark text-brand-paper py-24 md:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Academic Journey" title="Jai Hind College" />
          
          <div className="grid md:grid-cols-3 gap-12 mt-12">
            {[
              { year: '2023 - 2026', degree: 'Bachelors in Digital Strategy', detail: 'Focusing on the intersection of business, technology, and creative storytelling.' },
              { year: '2021 - 2023', degree: 'Higher Secondary Education', detail: 'Developed a strong foundation in commerce and marketing principles.' },
              { year: 'Honors', degree: 'Creative Excellence', detail: 'Recognized for innovative projects in brand strategy and digital marketing.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 border border-brand-paper/10 rounded-2xl hover:bg-brand-paper/5 transition-colors"
              >
                <span className="text-brand-pink font-serif italic text-xl mb-4 block">{item.year}</span>
                <h3 className="text-2xl font-serif mb-4">{item.degree}</h3>
                <p className="text-brand-paper/60 text-sm leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section id="projects" className="py-24 md:py-40 overflow-hidden">
        <div className="px-6 max-w-7xl mx-auto mb-16">
          <SectionTitle subtitle="Portfolio" title="Selected Works" />
        </div>

        <div className="horizontal-scroll px-6 md:px-20 gap-8 pb-10">
          {[
            { title: 'Neon Dreams', cat: 'Branding', img: 'https://images.unsplash.com/photo-1558478551-1a378f63ad28?q=80&w=2070&auto=format&fit=crop' },
            { title: 'Digital Pulse', cat: 'Strategy', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop' },
            { title: 'Vogue Strategy', cat: 'Editorial', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop' },
            { title: 'Social Aura', cat: 'Marketing', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop' },
          ].map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="w-[300px] md:w-[450px] group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <span className="text-white text-xs uppercase tracking-[0.3em]">View Case Study</span>
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-2">{project.title}</h3>
              <p className="text-xs uppercase tracking-widest text-brand-orange">{project.cat}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Marquee text="Let's Create Something Extraordinary •" reverse />

      {/* Contact Section */}
      <footer id="contact" className="py-24 md:py-40 px-6 bg-brand-paper">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-6xl md:text-[10rem] font-serif leading-none mb-12 tracking-tighter">
              Get in <span className="italic text-brand-pink">Touch</span>
            </h2>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 mb-20">
            <a href="mailto:diyamangwani7@gmail.com" className="group">
              <div className="flex items-center gap-4 text-xl font-serif">
                <div className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center group-hover:bg-brand-pink group-hover:border-brand-pink group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <span>Email Me</span>
              </div>
            </a>
            <a href="#" className="group">
              <div className="flex items-center gap-4 text-xl font-serif">
                <div className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center group-hover:bg-brand-pink group-hover:border-brand-pink group-hover:text-white transition-all">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span>LinkedIn</span>
              </div>
            </a>
            <a href="#" className="group">
              <div className="flex items-center gap-4 text-xl font-serif">
                <div className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center group-hover:bg-brand-pink group-hover:border-brand-pink group-hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </div>
                <span>Instagram</span>
              </div>
            </a>
          </div>

          <div className="pt-20 border-t border-brand-dark/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-xs uppercase tracking-widest text-brand-dark/40">
              © 2024 Diya Mangwani. All Rights Reserved.
            </p>
            <p className="text-xs uppercase tracking-widest text-brand-dark/40 italic font-serif">
              Designed with Passion & Strategy
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

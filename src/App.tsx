/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import profileImg from "./assets/mypic.jpg";
import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { AnimatePresence, motion, useScroll, useSpring, useInView } from 'motion/react';
import { Github, Linkedin, Mail, Moon, Sun, Download, ExternalLink, Code2, Cpu, Globe, Rocket, Trophy, Briefcase, User as UserIcon, Layers, ChevronRight, Sparkles, Command, ArrowUpRight } from 'lucide-react';

// --- Types ---
interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  impact: string[];
  link?: string;
  image: string;
}

interface Experience {
  company: string;
  role: string;
  period: string;
  type: string;
  points: string[];
}

interface Skill {
  name: string;
  level?: number;
}

interface SkillCategory {
  title: string;
  skills: string[];
  icon: ReactNode;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Research Assist",
    description: "AI Document Management platform for intelligent research document management with real-time summarization and citation extraction.",
    tech: ["Vue.js", "Go", "PostgreSQL", "LLaMA 3.1"],
    impact: [
      "Architected AI-driven platform with real-time synthesis",
      "Developed Chrome extension for web content capture",
      "Implemented scalable Go backend with vector search"
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 2,
    title: "Real-Time Collaborative Code Editor",
    description: "Collaborative code editor supporting real-time multi-user sessions with support for multiple programming languages.",
    tech: ["React", "Node.js", "Socket.IO", "Vercel"],
    impact: [
      "Built multi-user sessions using WebSockets",
      "Integrated instant code compilation support",
      "Optimized communication for minimal latency"
    ],
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 3,
    title: "Expense Tracker",
    description: "Full-stack financial tracking application with real-time expense analytics and tax computation tools.",
    tech: ["React", "Node.js", "Firebase"],
    impact: [
      "Developed real-time expense analytics",
      "Implemented secure Firebase Auth & Firestore",
      "Created EMI calculator and tax compute tools"
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200"
  }
];

const EXPERIENCE: Experience[] = [
  {
    company: "Manipal Dot Net Private Limited",
    role: "Member of Technical Staff (Dev)",
    period: "Dec 2025 – Present",
    type: "Full-time",
    points: [
      "Developing cross-platform mobile applications using React Native for production-grade app features",
      "Contributing to e-commerce website development using Magento and PHP, including custom module development",
      "Collaborating with the engineering team on full-stack tasks spanning both mobile and web platforms"
    ],
  },
  {
    company: "Influamarki",
    role: "UI/UX & Front-End Development",
    period: "Sep 2024 – Mar 2025",
    type: "Intern",
    points: [
      "Designed responsive, pixel-perfect user interfaces that improved user engagement",
      "Collaborated with cross-functional teams to maintain visual consistency and brand experience",
      "Gained hands-on experience in UI/UX design workflows and front-end engineering"
    ],
  }
];

const SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    icon: <Globe className="w-4 h-4" />,
    skills: ["C/C++", "JavaScript", "Python", "Java", "PHP"]
  },
  {
    title: "Frontend",
    icon: <Globe className="w-4 h-4" />,
    skills: ["React.js", "Vue.js", "React Native", "Tailwind"]
  },
  {
    title: "Backend",
    icon: <Cpu className="w-4 h-4" />,
    skills: ["Node.js", "Go", "Django", "Magento", "PHP"]
  },
  {
    title: "Cloud & AI",
    icon: <Sparkles className="w-4 h-4" />,
    skills: ["Firebase", "PostgreSQL", "LLaMA", "Gemini Pro"]
  }
];

const ACHIEVEMENTS = [
  { title: "2nd Runner Up", org: "EG AI Innovation Challenge", year: "2024" },
  { title: "First Runner Up", org: "Smart Nitte Hackathon", year: "2023" },
  { title: "Top Performer", org: "Internshala Web Development", year: "2023" },
];

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen selection:bg-zinc-800 selection:text-white dark:selection:bg-zinc-200 dark:selection:text-black">
      {/* Scroll Progress */}
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-zinc-900 dark:bg-white z-50 origin-left" style={{ scaleX }} />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-black/5 dark:border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-white flex items-center justify-center">
              <Command className="w-4 h-4 text-white dark:text-black" />
            </div>
            <span className="font-display font-bold tracking-tight">Rohan Das</span>
          </motion.div>
          
          <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            {['About', 'Skills', 'Works', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-black dark:hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              id="theme-toggle"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="relative w-14 h-8 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-1 flex items-center transition-all cursor-pointer group"
              aria-label="Toggle theme"
            >
              <div className="absolute inset-0 flex justify-between items-center px-2 text-zinc-400 dark:text-zinc-500">
                <Sun size={12} className="opacity-0 dark:opacity-100 transition-opacity" />
                <Moon size={12} className="opacity-100 dark:opacity-0 transition-opacity" />
              </div>
              <motion.div 
                animate={{ x: isDarkMode ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="relative z-10 w-6 h-6 rounded-full bg-white dark:bg-zinc-300 shadow-sm flex items-center justify-center border border-zinc-200 dark:border-white/20"
              >
                {isDarkMode ? (
                  <Moon size={12} className="text-zinc-900" />
                ) : (
                  <Sun size={12} className="text-zinc-600" />
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-40 px-6 max-w-6xl mx-auto space-y-48">
        {/* --- HERO --- */}
        <section id="hero" className="relative">
          <div className="flex flex-col md:flex-row items-end gap-12">
            <div className="flex-1 space-y-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Currently at Manipal Dot Net
                </div>
                <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9]">
                  Rohan <span className="text-zinc-400 dark:text-zinc-600">Das</span>
                </h1>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-zinc-500 max-w-xl font-medium leading-relaxed"
              >
                Software Engineering graduate with expertise in full-stack and mobile application development, distributed systems, and AI-assisted tools.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <a
  href="#works"
  className="px-8 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-bold text-sm hover:scale-[1.02] transition-all flex items-center gap-2"
>
  View Works <ChevronRight size={16} />
</a>
                <a
  href="#contact"
  className="px-8 py-4 rounded-full border border-zinc-200 dark:border-zinc-800 font-bold text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all"
>
  Contact Me
</a>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="w-full md:w-[400px] aspect-[4/5] rounded-[2.5rem] overflow-hidden group relative"
            >
              <img 
                src={profileImg} 
                alt="Rohan Das"
                className="w-full h-full object-cover transition-all duration-700 scale-110 group-hover:scale-100"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1200";
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div className="text-white">
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">Based in</div>
                  <div className="font-display font-bold text-xl">Udupi, India</div>
                </div>
                <div className="flex gap-4">
                  <SocialIcon href="https://github.com/rohhandas" icon={<Github size={18} />} />
                  <SocialIcon href="https://www.linkedin.com/in/rohan-dass" icon={<Linkedin size={18} />} />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- ABOUT BENTO --- */}
        <section id="about" className="space-y-12">
          <SectionTag text="About Me" />
          <div className="grid md:grid-cols-3 gap-6">
            <BentoCard className="md:col-span-2 space-y-6">
              <h3 className="text-2xl font-display font-bold">Summary</h3>
              <p className="text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
                Experienced in React Native app development, Magento/PHP-based web solutions, and scalable web application architecture. I have a proven ability to deliver across the full development lifecycle with a focus on clean architecture, real-time collaboration, and algorithm optimization.
              </p>
              <div className="flex gap-12 pt-4">
                <div className="space-y-1">
                  <div className="text-3xl font-display font-bold text-zinc-950 dark:text-white">BE</div>
                  <div className="text-[9px] uppercase font-bold tracking-widest text-zinc-500">Computer Science</div>
                </div>
              </div>
            </BentoCard>
            
            <BentoCard className="flex flex-col bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 overflow-hidden">
              <Trophy className="w-8 h-8 mb-6 opacity-30" />
              <h3 className="text-xl font-display font-bold mb-4">Achievements</h3>
              <div className="space-y-4">
                {ACHIEVEMENTS.map((ach, i) => (
                  <div key={i} className="space-y-0.5">
                    <div className="text-[10px] font-bold uppercase tracking-wider opacity-60">{ach.org}</div>
                    <div className="text-xs font-bold leading-tight">{ach.title}</div>
                  </div>
                ))}
              </div>
            </BentoCard>

            <BentoCard className="md:col-span-1 flex flex-col justify-between">
              <div className="space-y-4">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Current Tech</h4>
                <div className="flex flex-wrap gap-2 text-xs font-bold uppercase">
                  {['React','FastApi','React Native', 'Go','Python', 'LLaMA'].map(t => (
                    <span key={t} className="px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800">#{t}</span>
                  ))}
                </div>
              </div>
              <div className="pt-12 text-sm font-medium text-zinc-500">
                Always learning, <br /> Forever building.
              </div>
            </BentoCard>

            <BentoCard className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
               {SKILLS.map(cat => (
                 <div key={cat.title} className="space-y-3">
                   <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-600">
                     {cat.icon}
                     <span className="text-[10px] font-bold uppercase tracking-widest">{cat.title}</span>
                   </div>
                   <div className="space-y-1">
                     {cat.skills.map(s => (
                       <div key={s} className="text-xs font-bold text-zinc-900 dark:text-zinc-100">{s}</div>
                     ))}
                   </div>
                 </div>
               ))}
            </BentoCard>
          </div>
        </section>

        {/* --- PROJECTS --- */}
        <section id="works" className="space-y-12">
          <div className="flex justify-between items-end">
            <SectionTag text="Case Studies" />
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 italic">2023 - 2024</div>
          </div>
          
          <div className="grid gap-12">
            {PROJECTS.map((project, idx) => (
              <div key={project.id}>
                <ProjectBlock project={project} index={idx} />
              </div>
            ))}
          </div>
        </section>

        {/* --- EXPERIENCE --- */}
        <section id="experience" className="space-y-12">
          <SectionTag text="Timeline" />
          <div className="max-w-4xl space-y-16">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-8 relative">
                <div className="md:w-1/4">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">{exp.period}</div>
                  <div className="inline-block px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-[9px] font-bold uppercase tracking-widest text-zinc-500">
                    {exp.type}
                  </div>
                </div>
                <div className="md:w-3/4 space-y-4">
                  <h3 className="text-3xl font-display font-bold">{exp.role}</h3>
                  <div className="text-lg font-medium text-zinc-500">{exp.company}</div>
                  <ul className="grid gap-3">
                    {exp.points.map((p, i) => (
                      <li key={i} className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed flex gap-3">
                         <div className="mt-2 w-1 h-1 rounded-full bg-zinc-300 shrink-0" />
                         {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- CONTACT --- */}
        <section id="contact" className="py-24 border-t border-zinc-100 dark:border-zinc-900">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">
                Let's Make <br /> <span className="text-zinc-400 dark:text-zinc-600">Impact.</span>
              </h2>
              <p className="text-zinc-500 max-w-sm font-medium">
                Currently taking on select projects and full-stack opportunities.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <a href="mailto:rohhann.das@gmail.com" className="text-3xl md:text-5xl font-display font-bold hover:text-blue-500 transition-colors underline decoration-2 underline-offset-8">
                rohhann.das@gmail.com
              </a>
              <div className="flex gap-8 items-center pt-6 grayscale opacity-60">
                 <SocialLink href="https://github.com/rohhandas" label="GitHub" />
                 <SocialLink href="https://www.linkedin.com/in/rohan-dass" label="LinkedIn" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-black/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            Design + Code by Rohan Das
          </div>
          <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-300 dark:text-zinc-800">
            Est. 2024
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            Built with React & Motion
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- Components ---

function SectionTag({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-[1px] bg-zinc-200 dark:bg-zinc-800" />
      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-600 shrink-0">
        {text}
      </span>
    </div>
  );
}

function BentoCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`p-8 rounded-[2rem] border border-zinc-200 dark:border-zinc-800/50 ${className}`}
    >
      {children}
    </motion.div>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: ReactNode }) {
  return (
    <a href={href} target="_blank" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:scale-110 transition-transform">
      {icon}
    </a>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} target="_blank" className="text-xs font-bold uppercase tracking-widest hover:text-black dark:hover:text-white transition-colors relative group">
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-px bg-current group-hover:w-full transition-all duration-300" />
    </a>
  );
}

function ProjectBlock({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="group relative grid md:grid-cols-2 gap-12 items-center"
    >
      <div className={`space-y-8 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
        <div className="space-y-4">
          <div className="flex gap-3 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            {project.tech.map(t => <span key={t}>#{t}</span>)}
          </div>
          <h3 className="text-4xl md:text-6xl font-display font-bold leading-[0.95] tracking-tighter">
            {project.title}
          </h3>
          <p className="text-lg text-zinc-500 font-medium leading-relaxed max-w-md">
            {project.description}
          </p>
        </div>
        
        <div className="space-y-4">
          {project.impact.map((point, i) => (
             <div key={i} className="flex gap-3 items-center text-xs font-bold text-zinc-600 dark:text-zinc-300">
               <ArrowUpRight className="w-4 h-4 text-zinc-400" />
               {point}
             </div>
          ))}
        </div>

        <button className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest hover:gap-5 transition-all group/btn">
          View Case Study <ArrowUpRight className="group-hover/btn:rotate-45 transition-transform" />
        </button>
      </div>

      <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 group-hover:border-zinc-400 transition-colors">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-1000 grayscale hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-black/5" />
      </div>
    </motion.div>
  );
}


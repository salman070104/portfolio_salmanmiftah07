'use client';
import { useState, useEffect, memo } from "react";
import dynamic from "next/dynamic";
import { 
  Terminal, 
  Code2, 
  Layers, 
  Cpu, 
  Mail, 
  ExternalLink,
  Send,
  Sparkles,
  ArrowRight,
  Globe,
  CheckCircle2,
  Plus,
  Tag,
  Zap
} from "lucide-react";

// Load Lanyard dynamically with SSR disabled since it uses WebGL/Three.js
const Lanyard = dynamic(() => import("@/components/Lanyard"), {
  ssr: false,
});

// Load ScrollVelocity dynamically with SSR disabled
const ScrollVelocity = dynamic(() => import("@/components/ScrollVelocity"), {
  ssr: false,
});

// Isolated typing effect — own state means Home never re-renders on each keystroke
const TypingText = memo(function TypingText() {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Web Developer", "Creative Coder", "3D Web Architect"];

  useEffect(() => {
    const handleTyping = () => {
      const currentWordIndex = loopNum % words.length;
      const fullText = words[currentWordIndex];

      if (isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        setTypingSpeed(60);
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        setTypingSpeed(120);
      }

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(300);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopNum, typingSpeed]);

  return (
    <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#bef264] leading-tight flex items-center min-h-[1.2em]">
      <span>{displayedText}</span>
      <span className="w-[3px] md:w-[5px] h-[0.9em] bg-[#bef264] ml-1.5 animate-pulse inline-block"></span>
    </h2>
  );
});

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-white selection:text-black">


      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0c0d0e]">
        {/* Exact glowing lime grid background matching the screenshot */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(163,230,53,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(163,230,53,0.06)_1px,transparent_1px)] bg-[size:45px_45px] pointer-events-none"></div>
        
        {/* Soft glowing ambient spots */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-lime-500/[0.03] blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] rounded-full bg-lime-500/[0.04] blur-[150px] pointer-events-none"></div>

        {/* 3D Lanyard - absolute overlay anchored at top-0 so rope hangs from top edge */}
        <div className="absolute top-0 right-0 w-full lg:w-[50%] h-screen pointer-events-none z-20 select-none">
          <div className="w-full h-full pointer-events-auto cursor-grab active:cursor-grabbing">
            <Lanyard position={[0, 0, 20]} fov={20} />
          </div>
          {/* Instruction tooltip */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-neutral-900/60 backdrop-blur-md border border-neutral-800/80 px-4 py-1.5 rounded-full text-[10px] text-neutral-400 font-mono tracking-widest uppercase pointer-events-none animate-pulse whitespace-nowrap">
            Drag card to swing it
          </div>
        </div>

        <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Hero Content — takes 7 columns, right side is occupied by the absolute lanyard overlay */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            <div className="flex items-center space-x-3 text-sm font-semibold tracking-tight text-neutral-300">
              <span className="text-xl md:text-2xl font-bold">I'm Ready For Job</span>
              <span className="px-3.5 py-1 rounded bg-[#bef264] text-black font-black text-xs tracking-wider lowercase animate-pulse shadow-md shadow-lime-500/20">
                we~
              </span>
            </div>

            <div className="space-y-1">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
                I'm Salman Miftahur
              </h1>
              <TypingText />
            </div>

            <p className="text-neutral-400 text-sm md:text-base max-w-xl font-light leading-relaxed">
              I am from Indonesia, I have more than 5 years of work experience. I am currently working in a company as a full stack product designer/developer, analyzing systems, managing, and leading engineering teams to craft premium user interfaces and high-performance applications.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-neutral-200 transition-all duration-300 shadow-lg shadow-white/5"
              >
                Explore Projects
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-xl bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 text-neutral-300 font-semibold transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Empty spacer col for desktop — lanyard fills this space absolutely */}
          <div className="hidden lg:block lg:col-span-5" aria-hidden="true"></div>
        </div>
      </section>

      {/* Scroll Velocity Separator */}
      <div className="py-10 bg-neutral-950 border-y border-neutral-900/60 overflow-hidden select-none">
        <ScrollVelocity 
          texts={["Nusantara_Developer", "Nusantara_Developer"]} 
          velocity={60} 
          className="text-neutral-800 font-black uppercase tracking-tighter text-4xl md:text-7xl"
        />
      </div>

      {/* About Section */}
      <section id="about" className="py-24 border-t border-neutral-900 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="aspect-square w-full max-w-sm mx-auto rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 flex items-center justify-center p-8 relative">
                {/* Abstract geometric background inside profile card */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent"></div>
                <div className="text-center space-y-4 relative z-10">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-b from-neutral-800 to-neutral-950 border border-neutral-700 flex items-center justify-center mx-auto shadow-inner">
                    <Terminal className="w-10 h-10 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Salman Miftahur</h3>
                    <p className="text-sm text-neutral-500">Frontend & 3D Web Architect</p>
                  </div>
                  <div className="inline-flex space-x-2 justify-center">
                    <span className="px-2.5 py-0.5 rounded-full bg-neutral-950 border border-neutral-800 text-[10px] text-neutral-400">Jakarta, ID</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-neutral-950 border border-neutral-800 text-[10px] text-neutral-400">GMT+7</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Crafting interfaces that look like the future.
              </h2>
              <p className="text-neutral-400 leading-relaxed font-light">
                I am a passionate creative developer dedicated to building premium web portfolios and highly polished digital interfaces. Influenced by state-of-the-art interactive designs, I merge web logic with stunning 3D animation rigs to provide users with experiences they can touch, interact with, and remember.
              </p>
              <p className="text-neutral-400 leading-relaxed font-light">
                This project represents a fully functional modular Next.js application integrated with shadcn components, tailwind configurations, and the physics-based Three.js Lanyard component.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 border-t border-neutral-900 bg-neutral-950/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Core Competencies</h2>
            <p className="text-neutral-400 text-sm font-light">
              Technologies and tools I use to turn visual mockups into production-ready digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Skill Card 1 */}
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-900 hover:border-neutral-800 hover:bg-neutral-900/60 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center mb-6 group-hover:border-neutral-700 transition-colors">
                <Code2 className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Frontend</h3>
              <p className="text-neutral-500 text-sm font-light">React, Next.js (App Router), HTML5, JavaScript & TypeScript.</p>
            </div>

            {/* Skill Card 2 */}
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-900 hover:border-neutral-800 hover:bg-neutral-900/60 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center mb-6 group-hover:border-neutral-700 transition-colors">
                <Layers className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2">3D & Animation</h3>
              <p className="text-neutral-500 text-sm font-light">Three.js, React Three Fiber, Rapier Physics, GSAP, Framer Motion.</p>
            </div>

            {/* Skill Card 3 */}
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-900 hover:border-neutral-800 hover:bg-neutral-900/60 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center mb-6 group-hover:border-neutral-700 transition-colors">
                <Cpu className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Styling</h3>
              <p className="text-neutral-500 text-sm font-light">Tailwind CSS, PostCSS, Vanilla CSS, Custom Theme Design System.</p>
            </div>

            {/* Skill Card 4 */}
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-900 hover:border-neutral-800 hover:bg-neutral-900/60 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center mb-6 group-hover:border-neutral-700 transition-colors">
                <Terminal className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Workflow</h3>
              <p className="text-neutral-500 text-sm font-light">Git, npm/bun, jsrepo registry integration, Vercel deployments.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 border-t border-neutral-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
              <p className="text-neutral-400 text-sm font-light max-w-md">
                A selection of modern digital solutions designed and coded to deliver exceptional experiences.
              </p>
            </div>
            <div>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center space-x-2 text-sm text-neutral-400 hover:text-white transition-colors"
              >
                <span>View all code on GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Project 1 */}
            <div className="group rounded-3xl bg-neutral-900/30 border border-neutral-900 overflow-hidden hover:border-neutral-800 transition-all duration-300">
              <div className="aspect-video w-full bg-gradient-to-tr from-blue-900/20 to-neutral-900 border-b border-neutral-900 flex items-center justify-center relative overflow-hidden">
                {/* Visual mockup styling */}
                <div className="absolute inset-0 bg-[radial-gradient(#1e1e1e_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
                <div className="transform group-hover:scale-105 transition-transform duration-500 flex items-center justify-center p-8 bg-neutral-950/40 border border-neutral-800 rounded-2xl">
                  <Sparkles className="w-12 h-12 text-blue-500 animate-pulse" />
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-blue-950 border border-blue-900 text-blue-400">Next.js</span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-neutral-950 border border-neutral-800 text-neutral-400">Three.js</span>
                </div>
                <h3 className="font-bold text-xl group-hover:text-blue-400 transition-colors">3D Interactive Lanyard Portfolio</h3>
                <p className="text-neutral-500 text-sm font-light leading-relaxed">
                  Interactive physics-based portfolio website featuring an HTML-styled ID card rigged using custom Three.js canvas physics and rope joints.
                </p>
                <div className="flex items-center space-x-4 pt-2">
                  <a href="#" className="inline-flex items-center space-x-1.5 text-xs text-white hover:underline">
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a href="#" className="inline-flex items-center space-x-1.5 text-xs text-neutral-400 hover:text-white transition-colors">
                    <span>GitHub Code</span>
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group rounded-3xl bg-neutral-900/30 border border-neutral-900 overflow-hidden hover:border-neutral-800 transition-all duration-300">
              <div className="aspect-video w-full bg-gradient-to-tr from-indigo-900/20 to-neutral-900 border-b border-neutral-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#1e1e1e_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
                <div className="transform group-hover:scale-105 transition-transform duration-500 flex items-center justify-center p-8 bg-neutral-950/40 border border-neutral-800 rounded-2xl">
                  <Layers className="w-12 h-12 text-indigo-500 animate-pulse" />
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-indigo-950 border border-indigo-900 text-indigo-400">Tailwind CSS</span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-neutral-950 border border-neutral-800 text-neutral-400">TypeScript</span>
                </div>
                <h3 className="font-bold text-xl group-hover:text-indigo-400 transition-colors">Shadcn Custom Registries</h3>
                <p className="text-neutral-500 text-sm font-light leading-relaxed">
                  Advanced React component integration system utilizing customized config schemas and modular jsrepo packages for high component reusability.
                </p>
                <div className="flex items-center space-x-4 pt-2">
                  <a href="#" className="inline-flex items-center space-x-1.5 text-xs text-white hover:underline">
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a href="#" className="inline-flex items-center space-x-1.5 text-xs text-neutral-400 hover:text-white transition-colors">
                    <span>GitHub Code</span>
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section id="portfolio" className="py-24 border-t border-neutral-900 bg-neutral-950/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-400 text-xs font-semibold tracking-widest uppercase">
              <Globe className="w-3.5 h-3.5" /> Live Websites
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Website yang Sudah Dibuat</h2>
            <p className="text-neutral-400 text-sm font-light">
              Beberapa contoh website yang sudah berhasil dikerjakan dan live di internet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Website 1 — StarConnect */}
            <a
              href="https://starconnecttanjung.com/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl bg-neutral-900/40 border border-neutral-800/60 overflow-hidden hover:border-lime-500/40 hover:shadow-xl hover:shadow-lime-500/5 transition-all duration-300"
            >
              <div className="aspect-video w-full bg-gradient-to-br from-sky-900/30 to-neutral-950 border-b border-neutral-800/60 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.08),transparent_70%)]" />
                <div className="text-center space-y-2 z-10">
                  <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-8 h-8 text-sky-400" />
                  </div>
                  <p className="text-xs text-neutral-500 font-mono">starconnecttanjung.com</p>
                </div>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-sky-950 border border-sky-900 text-sky-400">Company Profile</span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-neutral-950 border border-neutral-800 text-neutral-400">Custom Domain</span>
                </div>
                <h3 className="font-bold text-lg group-hover:text-lime-400 transition-colors">StarConnect Tanjung</h3>
                <p className="text-neutral-500 text-sm font-light leading-relaxed">Website company profile dengan desain modern, responsif, dan kontak WhatsApp terintegrasi.</p>
                <div className="inline-flex items-center gap-1.5 text-xs text-lime-400 font-semibold mt-1">
                  <ExternalLink className="w-3.5 h-3.5" /> Lihat Website
                </div>
              </div>
            </a>

            {/* Website 2 — Blok M Studio Percetakan */}
            <a
              href="https://blokmstudiopercetakan.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl bg-neutral-900/40 border border-neutral-800/60 overflow-hidden hover:border-lime-500/40 hover:shadow-xl hover:shadow-lime-500/5 transition-all duration-300"
            >
              <div className="aspect-video w-full bg-gradient-to-br from-orange-900/30 to-neutral-950 border-b border-neutral-800/60 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.08),transparent_70%)]" />
                <div className="text-center space-y-2 z-10">
                  <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Layers className="w-8 h-8 text-orange-400" />
                  </div>
                  <p className="text-xs text-neutral-500 font-mono">blokmstudiopercetakan.vercel.app</p>
                </div>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-orange-950 border border-orange-900 text-orange-400">Percetakan</span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-neutral-950 border border-neutral-800 text-neutral-400">Landing Page</span>
                </div>
                <h3 className="font-bold text-lg group-hover:text-lime-400 transition-colors">Blok M Studio Percetakan</h3>
                <p className="text-neutral-500 text-sm font-light leading-relaxed">Website percetakan profesional dengan galeri produk, animasi modern, dan form pemesanan.</p>
                <div className="inline-flex items-center gap-1.5 text-xs text-lime-400 font-semibold mt-1">
                  <ExternalLink className="w-3.5 h-3.5" /> Lihat Website
                </div>
              </div>
            </a>

            {/* Website 3 — Blok M Studio */}
            <a
              href="https://blok-m-studio.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl bg-neutral-900/40 border border-neutral-800/60 overflow-hidden hover:border-lime-500/40 hover:shadow-xl hover:shadow-lime-500/5 transition-all duration-300"
            >
              <div className="aspect-video w-full bg-gradient-to-br from-violet-900/30 to-neutral-950 border-b border-neutral-800/60 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.08),transparent_70%)]" />
                <div className="text-center space-y-2 z-10">
                  <div className="w-16 h-16 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-8 h-8 text-violet-400" />
                  </div>
                  <p className="text-xs text-neutral-500 font-mono">blok-m-studio.vercel.app</p>
                </div>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-violet-950 border border-violet-900 text-violet-400">Studio</span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-neutral-950 border border-neutral-800 text-neutral-400">Premium UI</span>
                </div>
                <h3 className="font-bold text-lg group-hover:text-lime-400 transition-colors">Blok M Studio</h3>
                <p className="text-neutral-500 text-sm font-light leading-relaxed">Website studio kreatif dengan desain premium, dark mode, dan animasi scroll yang memukau.</p>
                <div className="inline-flex items-center gap-1.5 text-xs text-lime-400 font-semibold mt-1">
                  <ExternalLink className="w-3.5 h-3.5" /> Lihat Website
                </div>
              </div>
            </a>

            {/* Website 4 — Portfolio */}
            <a
              href="https://portfolio-two-beta-57.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl bg-neutral-900/40 border border-neutral-800/60 overflow-hidden hover:border-lime-500/40 hover:shadow-xl hover:shadow-lime-500/5 transition-all duration-300"
            >
              <div className="aspect-video w-full bg-gradient-to-br from-lime-900/30 to-neutral-950 border-b border-neutral-800/60 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(163,230,53,0.08),transparent_70%)]" />
                <div className="text-center space-y-2 z-10">
                  <div className="w-16 h-16 rounded-2xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Code2 className="w-8 h-8 text-lime-400" />
                  </div>
                  <p className="text-xs text-neutral-500 font-mono">portfolio-two-beta-57.vercel.app</p>
                </div>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-lime-950 border border-lime-900 text-lime-400">Portfolio</span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-neutral-950 border border-neutral-800 text-neutral-400">Next.js</span>
                </div>
                <h3 className="font-bold text-lg group-hover:text-lime-400 transition-colors">Portfolio Developer</h3>
                <p className="text-neutral-500 text-sm font-light leading-relaxed">Website portfolio interaktif dengan Lanyard 3D, animasi physics, dan desain dark mode premium.</p>
                <div className="inline-flex items-center gap-1.5 text-xs text-lime-400 font-semibold mt-1">
                  <ExternalLink className="w-3.5 h-3.5" /> Lihat Website
                </div>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 border-t border-neutral-900 bg-neutral-950 relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(163,230,53,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(163,230,53,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-400 text-xs font-semibold tracking-widest uppercase">
              <Tag className="w-3.5 h-3.5" /> Harga Jasa
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Daftar Harga Jasa Website</h2>
            <p className="text-neutral-400 text-sm font-light">
              Transparent pricing untuk semua jenis kebutuhan website Anda — dari landing page hingga sistem informasi penuh.
            </p>
          </div>

          {/* Pricing Tables Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">

            {/* Package 1 — Website Portfolio */}
            <div className="rounded-2xl bg-neutral-900/50 border border-neutral-800/80 overflow-hidden">
              <div className="px-6 py-4 bg-gradient-to-r from-blue-600/20 to-transparent border-b border-neutral-800/80 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-blue-400 font-semibold mb-0.5">Paket 1</div>
                  <h3 className="font-bold text-lg">Website Portfolio</h3>
                </div>
                <div className="text-right">
                  <div className="text-xs text-neutral-500 mb-0.5">Mulai dari</div>
                  <div className="text-xl font-black text-blue-400">Rp350.000</div>
                </div>
              </div>
              <div className="divide-y divide-neutral-800/50">
                {[
                  { label: "Responsive, modern UI, kontak WhatsApp, deploy Vercel", price: "Rp350.000", isBase: true },
                  { label: "+ Tambahan Animasi Premium — Smooth animation, transition modern", price: "+Rp250.000" },
                  { label: "+ Fitur 3D — 3D object / interactive background", price: "+Rp500.000 – Rp1.500.000" },
                  { label: "+ Custom Domain .com — Domain 1 tahun", price: "+Rp200.000" },
                  { label: "+ Admin Dashboard — CRUD project & artikel", price: "+Rp1.000.000" },
                  { label: "+ Blog / Artikel — SEO blog system", price: "+Rp750.000" },
                ].map((item, i) => (
                  <div key={i} className={`px-5 py-3 flex items-start justify-between gap-4 ${item.isBase ? "bg-blue-500/5" : "hover:bg-neutral-800/30 transition-colors"}`}>
                    <div className="flex items-start gap-2 flex-1">
                      {item.isBase ? <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" /> : <Plus className="w-4 h-4 text-neutral-600 mt-0.5 shrink-0" />}
                      <span className="text-sm text-neutral-300 font-light">{item.label}</span>
                    </div>
                    <span className={`text-sm font-semibold shrink-0 ${item.isBase ? "text-blue-400" : "text-lime-400"}`}>{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Package 2 — Landing Page UMKM */}
            <div className="rounded-2xl bg-neutral-900/50 border border-neutral-800/80 overflow-hidden">
              <div className="px-6 py-4 bg-gradient-to-r from-emerald-600/20 to-transparent border-b border-neutral-800/80 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-emerald-400 font-semibold mb-0.5">Paket 2</div>
                  <h3 className="font-bold text-lg">Landing Page UMKM</h3>
                </div>
                <div className="text-right">
                  <div className="text-xs text-neutral-500 mb-0.5">Mulai dari</div>
                  <div className="text-xl font-black text-emerald-400">Rp500.000</div>
                </div>
              </div>
              <div className="divide-y divide-neutral-800/50">
                {[
                  { label: "1 halaman, mobile friendly, WhatsApp", price: "Rp500.000", isBase: true },
                  { label: "+ Galeri Produk — Slider & gallery", price: "+Rp300.000" },
                  { label: "+ Animasi Modern — Scroll animation", price: "+Rp250.000" },
                  { label: "+ Google Maps — Integrasi maps lokasi usaha", price: "+Rp100.000" },
                  { label: "+ Form Pemesanan — Form order otomatis", price: "+Rp350.000" },
                  { label: "+ SEO Google — Optimasi pencarian Google", price: "+Rp500.000" },
                ].map((item, i) => (
                  <div key={i} className={`px-5 py-3 flex items-start justify-between gap-4 ${item.isBase ? "bg-emerald-500/5" : "hover:bg-neutral-800/30 transition-colors"}`}>
                    <div className="flex items-start gap-2 flex-1">
                      {item.isBase ? <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" /> : <Plus className="w-4 h-4 text-neutral-600 mt-0.5 shrink-0" />}
                      <span className="text-sm text-neutral-300 font-light">{item.label}</span>
                    </div>
                    <span className={`text-sm font-semibold shrink-0 ${item.isBase ? "text-emerald-400" : "text-lime-400"}`}>{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Package 3 — Company Profile */}
            <div className="rounded-2xl bg-neutral-900/50 border border-neutral-800/80 overflow-hidden">
              <div className="px-6 py-4 bg-gradient-to-r from-indigo-600/20 to-transparent border-b border-neutral-800/80 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-indigo-400 font-semibold mb-0.5">Paket 3</div>
                  <h3 className="font-bold text-lg">Company Profile</h3>
                </div>
                <div className="text-right">
                  <div className="text-xs text-neutral-500 mb-0.5">Mulai dari</div>
                  <div className="text-xl font-black text-indigo-400">Rp2.000.000</div>
                </div>
              </div>
              <div className="divide-y divide-neutral-800/50">
                {[
                  { label: "Multi halaman, profil usaha, galeri", price: "Rp2.000.000", isBase: true },
                  { label: "+ Admin Dashboard — Edit konten sendiri", price: "+Rp1.500.000" },
                  { label: "+ Multi Bahasa — Indonesia & English", price: "+Rp750.000" },
                  { label: "+ Sistem Artikel/Berita — News management", price: "+Rp1.000.000" },
                  { label: "+ Hosting Premium — Hosting cepat & stabil", price: "+Rp500.000/tahun" },
                ].map((item, i) => (
                  <div key={i} className={`px-5 py-3 flex items-start justify-between gap-4 ${item.isBase ? "bg-indigo-500/5" : "hover:bg-neutral-800/30 transition-colors"}`}>
                    <div className="flex items-start gap-2 flex-1">
                      {item.isBase ? <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" /> : <Plus className="w-4 h-4 text-neutral-600 mt-0.5 shrink-0" />}
                      <span className="text-sm text-neutral-300 font-light">{item.label}</span>
                    </div>
                    <span className={`text-sm font-semibold shrink-0 ${item.isBase ? "text-indigo-400" : "text-lime-400"}`}>{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Package 4 — Website Laravel System */}
            <div className="rounded-2xl bg-neutral-900/50 border border-neutral-800/80 overflow-hidden">
              <div className="px-6 py-4 bg-gradient-to-r from-rose-600/20 to-transparent border-b border-neutral-800/80 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-rose-400 font-semibold mb-0.5">Paket 4</div>
                  <h3 className="font-bold text-lg">Website Laravel System</h3>
                </div>
                <div className="text-right">
                  <div className="text-xs text-neutral-500 mb-0.5">Mulai dari</div>
                  <div className="text-xl font-black text-rose-400">Rp3.000.000</div>
                </div>
              </div>
              <div className="divide-y divide-neutral-800/50">
                {[
                  { label: "Login, register, database MySQL", price: "Rp3.000.000", isBase: true },
                  { label: "+ Role User — Admin, staff, user", price: "+Rp750.000" },
                  { label: "+ Export PDF/Excel — Laporan otomatis", price: "+Rp500.000" },
                  { label: "+ API Integration — Integrasi pihak ketiga", price: "+Rp1.000.000" },
                  { label: "+ Realtime Notification — Notifikasi realtime", price: "+Rp750.000" },
                ].map((item, i) => (
                  <div key={i} className={`px-5 py-3 flex items-start justify-between gap-4 ${item.isBase ? "bg-rose-500/5" : "hover:bg-neutral-800/30 transition-colors"}`}>
                    <div className="flex items-start gap-2 flex-1">
                      {item.isBase ? <CheckCircle2 className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" /> : <Plus className="w-4 h-4 text-neutral-600 mt-0.5 shrink-0" />}
                      <span className="text-sm text-neutral-300 font-light">{item.label}</span>
                    </div>
                    <span className={`text-sm font-semibold shrink-0 ${item.isBase ? "text-rose-400" : "text-lime-400"}`}>{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Package 5 — Payment Gateway */}
            <div className="rounded-2xl bg-neutral-900/50 border border-neutral-800/80 overflow-hidden">
              <div className="px-6 py-4 bg-gradient-to-r from-amber-600/20 to-transparent border-b border-neutral-800/80 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold mb-0.5">Paket 5</div>
                  <h3 className="font-bold text-lg">Sistem Payment Gateway</h3>
                </div>
                <div className="text-right">
                  <div className="text-xs text-neutral-500 mb-0.5">Mulai dari</div>
                  <div className="text-xl font-black text-amber-400">Rp2.000.000</div>
                </div>
              </div>
              <div className="divide-y divide-neutral-800/50">
                {[
                  { label: "Midtrans/Xendit/QRIS", price: "Rp2.000.000", isBase: true },
                  { label: "+ Virtual Account — BCA, BRI, Mandiri, dll", price: "+Rp500.000" },
                  { label: "+ E-Wallet — Dana, OVO, GoPay, ShopeePay", price: "+Rp500.000" },
                  { label: "+ Invoice Otomatis — Generate invoice", price: "+Rp750.000" },
                  { label: "+ Subscription System — Membership otomatis", price: "+Rp1.500.000" },
                ].map((item, i) => (
                  <div key={i} className={`px-5 py-3 flex items-start justify-between gap-4 ${item.isBase ? "bg-amber-500/5" : "hover:bg-neutral-800/30 transition-colors"}`}>
                    <div className="flex items-start gap-2 flex-1">
                      {item.isBase ? <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /> : <Plus className="w-4 h-4 text-neutral-600 mt-0.5 shrink-0" />}
                      <span className="text-sm text-neutral-300 font-light">{item.label}</span>
                    </div>
                    <span className={`text-sm font-semibold shrink-0 ${item.isBase ? "text-amber-400" : "text-lime-400"}`}>{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Package 6 — Sistem Informasi Custom */}
            <div className="rounded-2xl bg-neutral-900/50 border border-neutral-800/80 overflow-hidden">
              <div className="px-6 py-4 bg-gradient-to-r from-cyan-600/20 to-transparent border-b border-neutral-800/80 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-cyan-400 font-semibold mb-0.5">Paket 6</div>
                  <h3 className="font-bold text-lg">Sistem Informasi Custom</h3>
                </div>
                <div className="text-right">
                  <div className="text-xs text-neutral-500 mb-0.5">Mulai dari</div>
                  <div className="text-xl font-black text-cyan-400">Rp5.000.000</div>
                </div>
              </div>
              <div className="divide-y divide-neutral-800/50">
                {[
                  { label: "Dashboard, CRUD, database", price: "Rp5.000.000", isBase: true },
                  { label: "+ Absensi GPS & Selfie — Lokasi realtime & kamera", price: "+Rp2.000.000" },
                  { label: "+ Sistem PPOB — Pembayaran digital", price: "+Rp3.000.000" },
                  { label: "+ WiFi Billing System — Management pelanggan internet", price: "+Rp5.000.000" },
                  { label: "+ Mobile App Android — Versi aplikasi Android", price: "+Rp7.000.000" },
                ].map((item, i) => (
                  <div key={i} className={`px-5 py-3 flex items-start justify-between gap-4 ${item.isBase ? "bg-cyan-500/5" : "hover:bg-neutral-800/30 transition-colors"}`}>
                    <div className="flex items-start gap-2 flex-1">
                      {item.isBase ? <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" /> : <Plus className="w-4 h-4 text-neutral-600 mt-0.5 shrink-0" />}
                      <span className="text-sm text-neutral-300 font-light">{item.label}</span>
                    </div>
                    <span className={`text-sm font-semibold shrink-0 ${item.isBase ? "text-cyan-400" : "text-lime-400"}`}>{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Biaya Tambahan */}
          <div className="rounded-2xl bg-neutral-900/40 border border-neutral-800/80 overflow-hidden">
            <div className="px-6 py-4 bg-gradient-to-r from-lime-600/10 to-transparent border-b border-neutral-800/80 flex items-center gap-3">
              <Zap className="w-5 h-5 text-lime-400" />
              <h3 className="font-bold text-lg">Biaya Tambahan (Add-on)</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-neutral-800/50">
              {[
                { label: "Domain .com", price: "Rp150.000 – Rp250.000/tahun" },
                { label: "Hosting Premium", price: "Rp300.000 – Rp1.500.000/tahun" },
                { label: "Maintenance Bulanan", price: "Rp50.000 – Rp300.000" },
                { label: "Backup Database", price: "Rp100.000/bulan" },
                { label: "SEO Website", price: "Rp500.000 – Rp2.000.000" },
                { label: "PWA / Install ke HP", price: "Rp500.000" },
                { label: "Push Notification", price: "Rp500.000" },
                { label: "Dark Mode", price: "Rp250.000" },
                { label: "Fitur Chat WhatsApp Otomatis", price: "Rp200.000" },
              ].map((item, i) => (
                <div key={i} className="px-5 py-4 flex flex-col gap-1 hover:bg-neutral-800/30 transition-colors border-b border-neutral-800/40">
                  <span className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">{item.label}</span>
                  <span className="text-sm font-bold text-lime-400">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <p className="text-neutral-500 text-sm mb-4">Harga dapat disesuaikan dengan kebutuhan dan kompleksitas proyek Anda.</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-lime-500 text-black font-bold hover:bg-lime-400 transition-all duration-300 shadow-lg shadow-lime-500/20"
            >
              <Send className="w-4 h-4" />
              Konsultasi Gratis Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 border-t border-neutral-900 relative bg-neutral-950/20">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact info */}
            <div className="lg:col-span-5 flex flex-col justify-between py-2">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Let's build something epic together</h2>
                <p className="text-neutral-400 text-sm font-light leading-relaxed max-w-sm">
                  Whether you're looking to create an interactive 3D site, a custom application, or have questions about Ep.1 - reactbits integration, drop me a line!
                </p>
              </div>

              <div className="space-y-4 pt-8">
                <a href="mailto:salmanmiftahurrizki@gmail.com" className="inline-flex items-center space-x-3 group">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-neutral-700 transition-colors">
                    <Mail className="w-5 h-5 text-neutral-400" />
                  </div>
                  <span className="text-neutral-300 hover:text-white transition-colors text-sm">salmanmiftah07@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-7">
              <form className="p-8 rounded-3xl bg-neutral-900/40 border border-neutral-900 hover:border-neutral-800/80 transition-all duration-300 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-neutral-950 border border-neutral-850 px-4 py-3 rounded-xl focus:border-neutral-700 focus:ring-0 text-sm placeholder:text-neutral-600 outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full bg-neutral-950 border border-neutral-850 px-4 py-3 rounded-xl focus:border-neutral-700 focus:ring-0 text-sm placeholder:text-neutral-600 outline-none transition-colors"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell me about your project..." 
                    className="w-full bg-neutral-950 border border-neutral-850 px-4 py-3 rounded-xl focus:border-neutral-700 focus:ring-0 text-sm placeholder:text-neutral-600 outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  onClick={(e) => e.preventDefault()} 
                  className="w-full inline-flex items-center justify-center space-x-2 py-4 rounded-xl bg-white text-black font-semibold hover:bg-neutral-200 transition duration-300"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-neutral-900">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-neutral-500 text-xs font-light">
            &copy; {new Date().getFullYear()} Salman Miftahur Rizki. Built with Next.js, Tailwind & ReactBits Lanyard.
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:border-neutral-700 hover:text-white text-neutral-400 transition-all duration-300">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:border-neutral-700 hover:text-white text-neutral-400 transition-all duration-300">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:border-neutral-700 hover:text-white text-neutral-400 transition-all duration-300">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}

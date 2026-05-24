import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { ArrowUpRight } from 'lucide-react';
// import VerticalMarquee removed

export default function Hero() {

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    window.scrollTo({ top: window.innerWidth * 4, behavior: 'smooth' });
  };

  return (
    <section id="home" className="hs-panel section-wrapper bg-gradient-to-br from-[#4a0101] via-[#850404] to-[#1a0000] flex items-center shrink-0 overflow-hidden">
      
      {/* Top Left Specific Typing Animation matching new constraints */}
      <div className="absolute top-12 left-12 md:left-24 z-50 text-white font-body font-bold tracking-[0.2em] text-lg sm:text-xl uppercase blink-glow-text">
        <Typewriter
          options={{
            strings: ['</TUSHAR>'],
            autoStart: true,
            loop: true,
            delay: 120,
            deleteSpeed: 60,
            cursorClassName: 'text-white font-light',
          }}
        />
      </div>

      {/* Floating Stars */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${3 + Math.random() * 5}s alternate infinite ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 z-0 font-heading font-black text-white/[0.03] select-none scale-y-150 tracking-tighter" style={{ fontSize: '40vw', lineHeight: 0.8 }}>
        &lt;/&gt;
      </div>

      {/* VerticalMarquee removed for responsiveness */}

      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-20">
        <div className="w-8 h-8 rounded-full border border-white/20 flex flex-col items-center justify-center text-[9px] text-white/50 font-body">01</div>
        <div className="w-[1px] h-6 bg-white/20" />
        <span className="text-[10px] uppercase tracking-widest text-white/60 font-body" style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}>HOME</span>
        <div className="w-[1px] h-12 bg-white/20" />
      </div>

      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-12 z-20 hidden md:flex">
        <a href="https://github.com/tusharbuildsweb-star" target="_blank" rel="noreferrer" className="group text-[10px] uppercase tracking-[0.2em] text-white/60 hover:text-white font-body transition-colors" style={{ writingMode: 'vertical-rl' }}>GITHUB <span className="text-white/20 ml-2 group-hover:text-white">•</span></a>
        <a href="https://linkedin.com/in/tusharkb" target="_blank" rel="noreferrer" className="group text-[10px] uppercase tracking-[0.2em] text-white/60 hover:text-white font-body transition-colors" style={{ writingMode: 'vertical-rl' }}>LINKEDIN <span className="text-white/20 ml-2 group-hover:text-white">•</span></a>
        <a href="mailto:tusharkb2025@gmail.com" className="text-[10px] uppercase tracking-[0.2em] text-white/60 hover:text-white font-body transition-colors" style={{ writingMode: 'vertical-rl' }}>EMAIL</a>
      </div>

      <div className="w-full max-w-7xl mx-auto px-20 md:px-32 lg:px-44 z-10">
        <div className="reveal relative z-10">
          
          {/* Main Title Center remains K B Tushar while Top left does the active looping */}
          <h1 className="text-white font-heading font-black text-5xl sm:text-7xl md:text-[7rem] tracking-tighter mb-4" style={{ textShadow: '0 0 40px rgba(255,255,255,0.2)' }}>
            K B Tushar
          </h1>

          <h2 className="font-display font-semibold text-white tracking-[0.3em] text-sm sm:text-lg mb-8 uppercase">
            Full Stack Developer
          </h2>

          <div className="w-32 h-[1px] bg-white/20 mb-8" />

          <p className="font-body text-white/70 font-semibold tracking-[0.2em] text-[10px] sm:text-xs mb-14 uppercase">
            MERN STACK &nbsp;•&nbsp; JAVA &nbsp;•&nbsp; REALTIME APPLICATIONS
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <button onClick={handleScrollToProjects} className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white/90 transition-colors shadow-lg">
              View Work <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <a href="mailto:tusharkb2025@gmail.com" className="inline-flex items-center justify-center px-8 py-3.5 border border-white/30 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:border-white hover:bg-white/5 transition-colors">
              Contact Me
            </a>
            <a href="/Resume_KBTushar.pdf" target="_blank" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/30 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:border-white hover:bg-white/5 transition-colors">
              Resume <ArrowUpRight size={14} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

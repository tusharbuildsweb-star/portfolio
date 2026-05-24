import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section className="hs-panel section-wrapper bg-gradient-to-br from-[#d4af37] via-[#a67c00] to-[#604800] flex flex-col items-center justify-center text-center shrink-0">

      {/* Very faint light flares */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-white/20 blur-[120px] pointer-events-none rounded-full" />

      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-20">
        <div className="w-8 h-8 rounded-full border border-black/20 flex flex-col items-center justify-center text-[9px] text-black/50 font-body backdrop-blur-md">06</div>
        <div className="w-[1px] h-6 bg-black/20" />
        <span className="text-[10px] uppercase tracking-widest text-black/60 font-body" style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}>CONTACT</span>
        <div className="w-[1px] h-12 bg-black/20" />
      </div>

      <div className="reveal relative z-10 max-w-5xl px-6 flex flex-col items-center">
        <h2 className="font-heading font-black text-black text-4xl sm:text-6xl md:text-[5rem] tracking-tighter uppercase leading-[0.9] mb-12 mix-blend-overlay">
          LET'S BUILD<br/>SOMETHING AMAZING
        </h2>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 mb-16">
          <a href="mailto:tusharkb2025@gmail.com" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl">
            Email Me <ArrowUpRight size={14} />
          </a>
          <a href="https://linkedin.com/in/tusharkb" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-black/30 text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-black/5 transition-colors duration-300">
            LinkedIn
          </a>
          {/* Phone number removed as requested */}
        </div>

        {/* Resume Download section specifically requested */}
        <div className="reveal flex flex-col items-center gap-4">
          <span className="text-black/50 font-body uppercase tracking-[0.2em] text-[10px] font-bold">Download Full Specs</span>
          <a href="/Resume_KBTushar.pdf" download className="group flex items-center justify-center gap-3 text-sm font-heading font-black uppercase tracking-widest text-black border-b-2 border-black/30 pb-1 hover:border-black transition-colors">
            Get Resume File
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

      </div>

    </section>
  );
}

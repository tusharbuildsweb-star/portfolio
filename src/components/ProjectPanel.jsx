import { ArrowUpRight } from 'lucide-react';
// import VerticalMarquee removed

export default function Projects() {
  return (
    <>
      {/* PROJECT 1: RESERVE */}
      <section id="project-reserve" className="hs-panel section-wrapper bg-gradient-to-br from-[#0a2e12] via-[#10b981] to-[#042f15] flex items-center shrink-0">
        
        {/* Background Vertical Marquee (Bright Neon Green contrast against Dark Green) */}
        {/* VerticalMarquee removed for responsiveness */}

        <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-20">
          <div className="w-8 h-8 rounded-full border border-white/20 flex flex-col items-center justify-center text-[9px] text-white/50 font-body backdrop-blur-md">05</div>
          <div className="w-[1px] h-6 bg-white/20" />
          <span className="text-[10px] uppercase tracking-widest text-white/60 font-body" style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}>PROJECTS</span>
          <div className="w-[1px] h-12 bg-white/20" />
        </div>

        <div className="w-full h-full max-w-7xl mx-auto px-20 md:px-32 lg:px-44 flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
          <div className="reveal flex-1 z-10 text-left bg-black/10 p-8 rounded-2xl backdrop-blur-md border border-white/5">
            <h2 className="font-heading font-black text-white text-5xl tracking-tighter uppercase mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
              RESERVE
            </h2>
            <p className="font-body text-white/90 font-bold uppercase tracking-widest text-xs mb-8">
              Restaurant Reservation Platform
            </p>
            <p className="font-body text-white/80 text-sm leading-loose mb-10 max-w-md">
              A full-stack restaurant reservation platform enabling users to discover restaurants, reserve tables in real-time, manage bookings, and make secure payments. Designed with premium dark aesthetics and razor-sharp performance.
            </p>

            <div className="flex flex-wrap gap-2 mb-12">
              {['React', 'Node.js', 'MongoDB', 'Socket.io', 'Razorpay'].map(f => (
                <span key={f} className="text-[10px] font-bold text-white uppercase tracking-widest border border-white/30 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md hover:bg-white/10 transition-colors">
                  {f}
                </span>
              ))}
            </div>

            <a href="https://frontend-reserve-application.vercel.app/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
               Explore Reserve <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="reveal flex-1 w-full flex justify-end">
             <div className="relative w-full max-w-xl aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 shadow-[0_0_80px_rgba(16,185,129,0.5)] bg-black group">
                <div className="h-6 w-full bg-[#111] border-b border-white/10 flex items-center px-4 gap-1.5 shrink-0">
                   <div className="w-2 h-2 rounded-full bg-red-500/80" />
                   <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                   <div className="w-2 h-2 rounded-full bg-green-500/80" />
                 </div>
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80" alt="Reserve App" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 mix-blend-screen" />
             </div>
          </div>
        </div>
      </section>

      {/* PROJECT 2: NOTES APP */}
      <section id="project-notes" className="hs-panel section-wrapper bg-gradient-to-br from-[#1a1a1a] via-[#333333] to-[#0a0a0a] flex items-center shrink-0">
        
        {/* Background Vertical Marquee (Bright White contrast against Dark Grey) */}
        {/* VerticalMarquee removed for responsiveness */}

        <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-20">
          <div className="w-8 h-8 rounded-full border border-white/20 flex flex-col items-center justify-center text-[9px] text-white/50 font-body backdrop-blur-md">06</div>
          <div className="w-[1px] h-6 bg-white/20" />
          <span className="text-[10px] uppercase tracking-widest text-white/60 font-body" style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}>PROJECTS</span>
          <div className="w-[1px] h-12 bg-white/20" />
        </div>

        <div className="w-full h-full max-w-7xl mx-auto px-20 md:px-32 lg:px-44 flex flex-col lg:flex-row-reverse items-center justify-between gap-16 relative z-10">
          <div className="reveal flex-1 z-10 text-left bg-black/20 p-8 rounded-2xl backdrop-blur-md border border-white/10">
            <h2 className="font-heading font-black text-white text-5xl tracking-tighter uppercase mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              NOTES FLOW
            </h2>
            <p className="font-body text-white/90 font-bold uppercase tracking-widest text-xs mb-8">
              Notes Management Application
            </p>
            <p className="font-body text-white/80 text-sm leading-loose mb-10 max-w-md">
              A clean and modern productivity notes application with advanced note organization, tag management, and persistent local storage built directly inside a sleek dark workspace.
            </p>

            <div className="flex flex-wrap gap-2 mb-12">
              {['React', 'TailwindCSS', 'LocalStorage', 'Framer Motion'].map(f => (
                <span key={f} className="text-[10px] font-bold text-white uppercase tracking-widest border border-white/30 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors">
                  {f}
                </span>
              ))}
            </div>

            <a href="https://notesappsite.netlify.app/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
               Explore Notes App <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="reveal flex-1 w-full flex justify-start">
             <div className="relative w-full max-w-xl aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 shadow-[0_0_80px_rgba(255,255,255,0.15)] bg-[#0f0f0f] group">
                <div className="h-6 w-full bg-[#050505] border-b border-white/20 flex items-center px-4 gap-1.5 shrink-0">
                   <div className="w-2 h-2 rounded-full bg-red-500/80" />
                   <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                   <div className="w-2 h-2 rounded-full bg-green-500/80" />
                 </div>
                {/* Dark abstract placeholder mimicking the app layout */}
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80" alt="Notes App" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80 mix-blend-screen" />
             </div>
          </div>
        </div>
      </section>
    </>
  );
}

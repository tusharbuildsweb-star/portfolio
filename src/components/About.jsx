import { ArrowRight } from 'lucide-react';
// import VerticalMarquee removed

export default function About() {
  return (
    <section className="hs-panel section-wrapper bg-black flex items-center shrink-0">
      
      {/* Background Vertical Marquee (Bright White contrast against Black) */}
      {/* VerticalMarquee removed for responsiveness */}

      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-20">
        <div className="w-8 h-8 rounded-full border border-white/20 flex flex-col items-center justify-center text-[9px] text-white/50 font-body">02</div>
        <div className="w-[1px] h-6 bg-white/20" />
        <span className="text-[10px] uppercase tracking-widest text-white/60 font-body" style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}>ABOUT</span>
        <div className="w-[1px] h-12 bg-white/20" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-20 md:px-32 lg:px-44">
        <div className="grid lg:grid-cols-[1fr_2fr_1fr] gap-10 items-center relative z-10">
          
          <div className="reveal">
            <h2 className="font-heading font-black text-white text-2xl sm:text-3xl tracking-widest uppercase mb-6 lg:mb-0">ABOUT ME</h2>
          </div>

          <div className="reveal max-w-lg">
            <p className="font-body text-white/60 text-sm sm:text-base leading-loose drop-shadow-md">
              Motivated Full Stack Developer skilled in building scalable web applications using MERN stack and modern technologies. I build clean, efficient and user-focused digital experiences.
            </p>
          </div>

          <div className="reveal hidden lg:flex justify-end">
            <a href="#skills" className="group inline-flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-white/60 hover:text-white transition-colors">
              Explore 
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors bg-black/50 backdrop-blur-sm">
                <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

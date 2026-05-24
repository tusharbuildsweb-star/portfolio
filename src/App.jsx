import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { Rocket } from 'lucide-react';

import CustomCursor from './components/CustomCursor';
import HorizontalScroll from './components/HorizontalScroll';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const lenisRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  const scrollToStart = () => {
    if (lenisRef.current) {
      // Scroll seamlessly back to zero (the first page)
      lenisRef.current.scrollTo(0, { duration: 2, ease: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    }
  };

  return (
    <div className="relative w-full bg-black">
      <CustomCursor />
      
      {/* Global Rocket Scroller fixed overlay */}
      <div className={`fixed top-8 right-8 md:top-12 md:right-12 z-50 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
         <button 
           onClick={scrollToStart} 
           className="group flex flex-col items-center gap-2 cursor-none"
         >
           <div className="w-12 h-12 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center hover:border-white transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
             <Rocket size={18} className="text-white/60 group-hover:text-white group-hover:-translate-y-1 transition-transform duration-300" />
           </div>
           <span className="text-[9px] uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors font-body">Return</span>
         </button>
      </div>

      <div className={`transition-opacity duration-1000 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <HorizontalScroll />
      </div>
    </div>
  );
}
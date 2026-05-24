import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Hero from './Hero';
import About from './About';
import SolarSystem from './SolarSystem';
import Skills from './Skills';
import Projects from './ProjectPanel';
import Contact from './Contact';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    // Responsive: Only enable horizontal scroll on large screens
    if (window.innerWidth >= 1024) {
      const ctx = gsap.context(() => {
        const panels = gsap.utils.toArray('.hs-panel');
        const scrollTween = gsap.to(panels, {
          xPercent: -100 * (panels.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            end: () => '+=' + window.innerWidth * (panels.length - 1),
            invalidateOnRefresh: true,
          },
        });
        // Individual component reveals inside the horizontal scroll
        panels.forEach((panel) => {
          const reveals = panel.querySelectorAll('.reveal');
          if (reveals.length) {
            gsap.fromTo(reveals, 
              { x: 100, opacity: 0 }, 
              {
                x: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: panel,
                  containerAnimation: scrollTween,
                  start: 'left center',
                  toggleActions: 'play none none reverse',
                }
              }
            );
          }
        });
      }, containerRef);
      return () => ctx.revert();
    }
    // On mobile/tablet, reset transforms so content is visible
    else {
      const panels = document.querySelectorAll('.hs-panel');
      panels.forEach(panel => {
        panel.style.transform = 'none';
        panel.style.opacity = 1;
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="horizontal-section flex w-screen h-screen overflow-hidden">
      <Hero />
      <About />
      <SolarSystem />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

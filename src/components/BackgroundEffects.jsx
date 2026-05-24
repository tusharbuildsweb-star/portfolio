import { useState, useEffect } from 'react';

// Fewer particles, keeping it strictly to deep space stars.
const stars = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  size: 1 + Math.random() * 2,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: 15 + Math.random() * 20,
  delay: Math.random() * 10,
  opacity: 0.1 + Math.random() * 0.4,
}));

export default function BackgroundEffects() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let rafId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      // Extremely subtle parallax so as not to cause motion sickness
      targetX = (e.clientX - window.innerWidth / 2) * 0.005;
      targetY = (e.clientY - window.innerHeight / 2) * 0.005;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      setMouse({ x: currentX, y: currentY });
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen">
      
      {/* Dynamic Star Field responding to mouse deeply */}
      <div
        className="absolute inset-0 transition-transform duration-0 scale-105"
        style={{ transform: `translate(${mouse.x}px, ${mouse.y}px)` }}
      >
        {stars.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.left}%`,
              top: `${p.top}%`,
              opacity: p.opacity,
              animation: `pulse-soft ${p.duration}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Grid overlay but incredibly dim */}
      <div className="absolute inset-0 opacity-[0.015]"
           style={{
             backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
             backgroundSize: '100px 100px'
           }} 
      />

      {/* Cinematic noise texture */}
      <div className="noise-overlay" />
    </div>
  );
}

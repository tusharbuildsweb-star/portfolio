import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // Check for touch device
  useEffect(() => {
    const isTouchDevice =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(hover: none)').matches;
    setIsTouch(isTouchDevice);
  }, []);

  // Mouse movement tracking with GSAP
  useEffect(() => {
    if (isTouch) return;

    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    const handleMouseMove = (e) => {
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: 'power2.out',
        overwrite: 'auto',
      });
      gsap.to(outline, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.45,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isTouch]);

  // Event delegation for hover detection
  const handleMouseOver = useCallback((e) => {
    const interactive = e.target.closest('a, button, [data-cursor], input, textarea');
    if (interactive) setIsHovering(true);
  }, []);

  const handleMouseOut = useCallback((e) => {
    const interactive = e.target.closest('a, button, [data-cursor], input, textarea');
    if (interactive) setIsHovering(false);
  }, []);

  useEffect(() => {
    if (isTouch) return;
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseout', handleMouseOut, { passive: true });
    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isTouch, handleMouseOver, handleMouseOut]);

  if (isTouch) return null;

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot ${isHovering ? 'hovering' : ''}`}
      />
      <div
        ref={outlineRef}
        className={`cursor-outline ${isHovering ? 'hovering' : ''}`}
      />
    </>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }) {
  const [isLoading, setIsLoading] = useState(true);
  const name = 'TUSHAR KB';

  useEffect(() => {
    // Prevent scroll during loading
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = '';
      onComplete?.();
    }, 2800);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center"
        >
          {/* Name reveal */}
          <div className="flex overflow-hidden mb-6">
            {name.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: 120, opacity: 0, rotateX: 40 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.4 + i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white tracking-[0.15em] inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>

          {/* Subtitle */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs sm:text-sm uppercase tracking-[0.4em] text-[#555] mb-10 font-body"
          >
            Full Stack Developer
          </motion.span>

          {/* Progress line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.0, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-40 sm:w-56 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

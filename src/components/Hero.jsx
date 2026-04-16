import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0F19]"
    >
      {/* Background Gradient/Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C9A54C]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')] bg-repeat opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="flex flex-col items-start space-y-6 pt-20 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#C9A54C] animate-pulse" />
            <span className="text-xs font-medium tracking-wider text-gray-300 uppercase">Available for new opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight"
          >
            K B <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A54C] to-[#E5C77A]">Tushar</span>
            <br />
            <span className="text-3xl md:text-5xl text-gray-400 font-normal">MERN Stack Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed"
          >
            Engineering scalable digital experiences with clean architecture.
            Built real-time applications with modern technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a
              href="#projects"
              className="group flex items-center space-x-2 px-8 py-4 bg-[#C9A54C] text-[#0B0F19] font-semibold rounded hover:bg-[#E5C77A] transition-all duration-300 shadow-[0_0_20px_rgba(201,165,76,0.3)] hover:shadow-[0_0_30px_rgba(201,165,76,0.6)]"
            >
              <span>View Projects</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="/K.B.Tushar.pdf" target="_blank" rel="noreferrer"
              className="group flex items-center space-x-2 px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded hover:bg-white/5 transition-all duration-300"
            >
              <span>Download Resume</span>
              <Download size={20} className="text-gray-400 group-hover:text-white transition-colors" />
            </a>
          </motion.div>
        </div>

        {/* Visual Element (Abstract Representation) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="hidden md:flex justify-center items-center relative h-[500px]"
        >
          {/* Decorative rotating squares */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[400px] h-[400px] border border-white/5 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute w-[300px] h-[300px] border border-[#C9A54C]/20 rounded-full"
          />
          
          <div className="relative w-64 h-80 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm overflow-hidden flex flex-col justify-end p-6 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent flex-1" />
            
            {/* Tech Stack Floating Icons */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-6 w-12 h-12 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-center text-[#C9A54C] text-xl font-bold shadow-[0_0_15px_rgba(201,165,76,0.15)]"
            >
              M
            </motion.div>
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-24 right-8 w-14 h-14 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-center text-blue-400 text-xl font-bold shadow-[0_0_15px_rgba(96,165,250,0.15)]"
            >
              Re
            </motion.div>
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-28 left-10 w-10 h-10 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-center text-green-400 text-lg font-bold shadow-[0_0_15px_rgba(74,222,128,0.15)]"
            >
              N
            </motion.div>

            <div className="relative z-10 w-full h-1/3 bg-[#C9A54C]/10 border-t border-[#C9A54C]/30 flex flex-col justify-center items-center rounded-xl backdrop-blur-md">
              <span className="text-[#C9A54C] text-sm tracking-widest uppercase">System</span>
              <span className="text-white text-xs mt-1 font-mono">Status: Online</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-[#C9A54C] to-transparent"
        />
      </motion.div>
    </section>
  );
}

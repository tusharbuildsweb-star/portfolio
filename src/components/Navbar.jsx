import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0F19]/80 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold tracking-tighter text-white hover:text-[#C9A54C] transition-colors duration-300"
        >
          K B <span className="text-[#C9A54C]">Tushar</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wide text-gray-300 hover:text-[#C9A54C] transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#C9A54C] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#projects"
            className="px-5 py-2 text-sm font-medium border border-[#C9A54C] text-[#C9A54C] rounded hover:bg-[#C9A54C] hover:text-[#0B0F19] transition-all duration-300 shadow-[0_0_15px_rgba(201,165,76,0.3)] hover:shadow-[0_0_25px_rgba(201,165,76,0.5)]"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white pt-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0B0F19]/95 backdrop-blur-lg border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col items-center py-6 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-[#C9A54C] transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#projects"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-3 text-sm font-medium border border-[#C9A54C] text-[#C9A54C] rounded hover:bg-[#C9A54C] hover:text-[#0B0F19] transition-all duration-300"
              >
                Hire Me
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

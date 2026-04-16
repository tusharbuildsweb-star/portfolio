import { motion } from 'framer-motion';
import { Mail, Briefcase, Code2, FileText, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0A0D14] relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-3xl mb-24"
        >
          <div className="relative rounded-2xl bg-gradient-to-r from-[#111623] to-[#0B0F19] border border-[#C9A54C]/20 p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-[0_0_40px_rgba(201,165,76,0.05)]">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-48 h-48 bg-[#C9A54C]/10 blur-[60px] rounded-full pointer-events-none" />
            
            <div className="text-center md:text-left mb-8 md:mb-0 relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to build something great?</h3>
              <p className="text-gray-400">Download my resume to see my full professional background.</p>
            </div>
            
            <a href="/K.B.Tushar.pdf" target="_blank" rel="noreferrer" className="relative z-10 group flex items-center space-x-3 px-8 py-4 bg-[#0A0D14] text-[#C9A54C] font-semibold rounded border border-[#C9A54C]/30 hover:border-[#C9A54C] hover:bg-[#C9A54C]/5 transition-all duration-300 flex-shrink-0">
              <FileText size={20} />
              <span>Download Resume</span>
              <div className="absolute inset-0 bg-[#C9A54C]/10 opacity-0 group-hover:opacity-100 transition-opacity rounded blur" />
            </a>
          </div>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center w-full max-w-xl"
        >
          <h2 className="text-sm font-bold tracking-[0.2em] text-[#C9A54C] uppercase mb-8">Get In Touch</h2>
          
          <div className="flex justify-center flex-wrap gap-8">
            <a href="tel:+919150144482" className="group flex flex-col items-center space-y-3">
              <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:border-green-500/50 group-hover:bg-green-500/10 transition-all duration-300">
                <Phone size={24} />
              </div>
              <span className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">Call</span>
            </a>
            
            <a href="mailto:tusharkb2025@gmail.com" className="group flex flex-col items-center space-y-3">
              <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:border-[#C9A54C]/50 group-hover:bg-[#C9A54C]/10 transition-all duration-300">
                <Mail size={24} />
              </div>
              <span className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">Email</span>
            </a>
            
            <a href="https://linkedin.com/in/tushar-kb" target="_blank" rel="noreferrer" className="group flex flex-col items-center space-y-3">
              <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-300">
                <Briefcase size={24} />
              </div>
              <span className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">LinkedIn</span>
            </a>
            
            <a href="https://github.com/tusharbuildsweb-star" target="_blank" rel="noreferrer" className="group flex flex-col items-center space-y-3">
              <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:border-white/50 group-hover:bg-white/10 transition-all duration-300">
                <Code2 size={24} />
              </div>
              <span className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

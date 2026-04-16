import { motion } from 'framer-motion';
import { ExternalLink, Code2, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  const project = {
    title: 'RESERVE',
    subtitle: 'Restaurant Reservation Platform',
    description: 'A comprehensive full-stack solution for luxury dining establishments to manage bookings, optimize table turnover, and provide a seamless reservation experience for high-end clientele.',
    features: [
      'Real-time booking synchronization with Socket.io',
      'Seamless Razorpay payment gateway integration',
      'Dedicated role-based dashboards (Admin, Owner, User)'
    ],
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io', 'Tailwind CSS'],
    githubUrl: '#',
    liveUrl: '#'
  };

  return (
    <section id="projects" className="py-24 bg-[#0B0F19] relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 space-y-4"
        >
          <div className="flex items-center space-x-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Featured <span className="text-[#C9A54C]">Showcase</span>.
            </h2>
            <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-8" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group rounded-3xl bg-[#0A0D14] border border-white/5 overflow-hidden"
        >
          {/* Glassmorphism ambient glow */}
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-[#C9A54C]/5 to-transparent pointer-events-none" />
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#C9A54C]/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-[#C9A54C]/20 transition-all duration-700" />
          
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Visual Side (Mockup placeholder / Abstract representation) */}
            <div className="relative h-[300px] lg:h-auto bg-[#111623] border-r border-white/5 flex items-center justify-center overflow-hidden p-8">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')] bg-repeat opacity-50" />
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-sm aspect-[4/3] rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl flex flex-col overflow-hidden group-hover:border-[#C9A54C]/30"
              >
                {/* Browser bar */}
                <div className="h-8 border-b border-white/10 bg-white/5 flex items-center px-4 space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                </div>
                {/* Content mockup */}
                <div className="flex-1 p-6 flex flex-col items-center justify-center relative">
                  <div className="text-3xl font-serif text-[#C9A54C] tracking-widest mb-4">RESERVE</div>
                  <div className="w-3/4 h-2 bg-white/10 rounded-full mb-3" />
                  <div className="w-1/2 h-2 bg-white/10 rounded-full" />
                </div>
              </motion.div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-14 lg:p-16 flex flex-col justify-center relative z-10">
              <div className="inline-block px-3 py-1 border border-[#C9A54C]/30 bg-[#C9A54C]/10 text-[#C9A54C] text-xs font-semibold tracking-wider uppercase rounded mb-6">
                Flagship Project
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-xl text-gray-400 font-light mb-6">
                {project.subtitle}
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="space-y-4 mb-10 text-gray-400">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle2 size={18} className="text-[#C9A54C] mt-1 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                {project.techStack.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-1.5 text-xs font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-auto">
                <a href={project.liveUrl} className="group flex items-center space-x-2 px-6 py-3 bg-[#C9A54C] text-[#0B0F19] font-medium rounded hover:bg-[#E5C77A] transition-colors shadow-[0_0_15px_rgba(201,165,76,0.3)]">
                  <span>Live Demo</span>
                  <ExternalLink size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a href={project.githubUrl} className="group flex items-center space-x-2 px-6 py-3 bg-transparent text-white font-medium rounded border border-white/20 hover:border-white/50 transition-colors">
                  <Code2 size={18} />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

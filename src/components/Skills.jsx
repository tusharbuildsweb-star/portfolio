import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React.js', 'Vite', 'Tailwind CSS', 'Redux / Context', 'Framer Motion']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Authentication', 'WebSockets']
  },
  {
    title: 'Database',
    skills: ['MongoDB', 'Mongoose', 'Redis', 'Aggregation Pipelines']
  },
  {
    title: 'Tools & DevOps',
    skills: ['Git & GitHub', 'Postman', 'Vercel / Render', 'Payment Gateways']
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#0A0D14] relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Technical <span className="text-[#C9A54C]">Arsenal</span>.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A curated selection of technologies chosen for performance, scalability, and developer experience.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-2xl bg-[#0B0F19] border border-white/5 hover:border-[#C9A54C]/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A54C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <span className="w-8 h-px bg-[#C9A54C] mr-4 block transition-all duration-300 group-hover:w-12"></span>
                  {category.title}
                </h3>
                
                <ul className="space-y-4 flex-1">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center text-gray-400 text-sm tracking-wide">
                      <span className="text-[#C9A54C] mr-3 font-bold text-lg leading-none group-hover:animate-pulse">•</span>
                      <span className="group-hover:text-gray-200 transition-colors duration-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

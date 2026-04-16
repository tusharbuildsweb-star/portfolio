import { motion } from 'framer-motion';
import { Target, Lightbulb, Code2 } from 'lucide-react';

const highlights = [
  {
    icon: <Code2 size={24} className="text-[#C9A54C]" />,
    title: 'Full-Stack Expertise',
    description: 'Specialized in building end-to-end MERN stack applications with high-performance architectures.',
  },
  {
    icon: <Lightbulb size={24} className="text-[#C9A54C]" />,
    title: 'Problem-Solving',
    description: 'Driven by tackling complex challenges and architecting solutions that scale flawlessly.',
  },
  {
    icon: <Target size={24} className="text-[#C9A54C]" />,
    title: 'Real-World Focus',
    description: 'Transforming ideas into production-ready platforms that deliver tangible business value.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0B0F19] relative overflow-hidden">
      {/* Decorative background string/line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Crafting <span className="text-[#C9A54C]">Digital</span> Excellence.
              </h2>
              <div className="w-20 h-1 bg-[#C9A54C] rounded" />
            </div>
            
            <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed">
              <p>
                I am <strong className="text-white font-medium">K B Tushar</strong>, a passionate Web Developer with a strong foundation in the 
                MERN stack. My journey in software engineering is driven by a relentless pursuit of 
                quality and innovation.
              </p>
              <p>
                I believe that code is more than just instructions—it&apos;s a medium to create 
                seamless, beautiful, and highly functional digital experiences. Every project 
                I undertake is treated not just as code, but as a premium product.
              </p>
            </div>
          </motion.div>

          {/* Cards/Highlights Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="group p-6 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(201,165,76,0.1)] relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#C9A54C] scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
                <div className="flex items-start space-x-5">
                  <div className="p-3 rounded-lg bg-[#C9A54C]/10 ring-1 ring-[#C9A54C]/20">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// import VerticalMarquee removed

export default function Skills() {
  const externalSkills = [
    { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Express', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', inverted: true },
    { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Tailwind CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', inverted: true },
    { name: 'Socket.io', img: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg', inverted: true },
  ];

  return (
    <section id="skills" className="hs-panel section-wrapper bg-[#040C1D] flex items-center shrink-0">
      
      {/* Background Vertical Marquee (Bright Blue contrast against Navy) */}
      {/* VerticalMarquee removed for responsiveness */}

      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-20">
        <div className="w-8 h-8 rounded-full border border-white/20 flex flex-col items-center justify-center text-[9px] text-white/50 font-body">04</div>
        <div className="w-[1px] h-6 bg-white/20" />
        <span className="text-[10px] uppercase tracking-widest text-white/60 font-body" style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}>SKILLS</span>
        <div className="w-[1px] h-12 bg-white/20" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-20 md:px-32 lg:px-44 flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
        
        <div className="reveal shrink-0">
          <h2 className="font-heading font-black text-white tracking-widest uppercase text-xl sm:text-2xl drop-shadow-md">
            SKILLS
          </h2>
        </div>

        <div className="reveal flex-1 flex flex-wrap justify-center lg:justify-end gap-x-12 gap-y-12 drop-shadow-xl bg-black/10 p-4 rounded-3xl backdrop-blur-sm border border-white/5">
          {externalSkills.map((skill, i) => (
            <div key={skill.name} className="group flex flex-col items-center gap-6 animate-[float_4s_alternate_infinite]" style={{ animationDelay: `${i * 0.2}s` }}>
              <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-white/10 group-hover:-translate-y-3 group-hover:scale-110 transition-all duration-300 bg-[#050B14]/80">
                <img 
                  src={skill.img} 
                  alt={skill.name} 
                  className={`w-10 h-10 sm:w-16 sm:h-16 object-contain ${skill.inverted ? 'invert brightness-0 filter mix-blend-screen' : ''}`} 
                  style={{ filter: skill.inverted ? 'invert(1) brightness(2)' : 'drop-shadow(0 0 10px rgba(255,255,255,0.1))' }}
                />
              </div>
              <span className="text-white/80 font-body text-[10px] sm:text-xs uppercase tracking-widest font-semibold group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default function Experience() {
  return (
    <div className="hs-panel" id="experience">
      <div className="w-full max-w-4xl mx-auto px-8 sm:px-16 lg:px-24">
        {/* Panel indicator */}
        <span className="hs-reveal block text-xs uppercase tracking-[0.4em] text-white/20 font-body mb-8">
          03 / Experience
        </span>

        {/* Title */}
        <h2
          className="hs-reveal font-heading font-bold text-white tracking-[-0.03em] mb-14 leading-[1.05]"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
        >
          Experience
        </h2>

        {/* Timeline */}
        <div className="relative pl-8 sm:pl-12">
          {/* Timeline line */}
          <div className="hs-reveal absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/15 via-white/8 to-transparent" />

          {/* Timeline dot */}
          <div className="hs-reveal absolute left-0 top-2 w-2 h-2 -translate-x-[3.5px] rounded-full bg-white/40 ring-4 ring-white/5" />

          {/* Experience entry */}
          <div className="hs-reveal pb-12">
            <span className="block text-xs uppercase tracking-[0.3em] text-white/20 font-body mb-3">
              Internship
            </span>
            <h3 className="font-heading font-semibold text-xl sm:text-2xl text-white/80 mb-2 tracking-tight">
              Frontend Developer
            </h3>
            <p className="font-body text-sm text-white/30 mb-5">
              All India Translink Company
            </p>
            <p className="font-body text-sm text-white/25 leading-[1.8] max-w-lg">
              Contributed to building responsive frontend interfaces, collaborated with
              cross-functional teams, and gained hands-on experience with modern web
              development workflows and best practices.
            </p>
          </div>

          {/* Decorative floating elements */}
          <div
            className="hidden lg:block absolute -right-16 top-1/2 w-20 h-20 rounded-full border border-white/[0.04]"
            style={{ animation: 'float 8s ease-in-out infinite' }}
          />
          <div
            className="hidden lg:block absolute -right-8 top-1/4 w-3 h-3 rounded-full bg-white/[0.06]"
            style={{ animation: 'float 6s ease-in-out 2s infinite' }}
          />
        </div>
      </div>
    </div>
  );
}

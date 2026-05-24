export default function VerticalMarquee({ color, opacity }) {
  return (
    <div className={`absolute right-0 sm:right-6 md:right-12 top-[0%] bottom-[0%] w-24 md:w-48 z-0 pointer-events-none flex flex-col justify-start overflow-hidden ${opacity}`}>
      <div 
        className={`font-heading font-black tracking-tighter whitespace-nowrap leading-none select-none ${color}`}
        style={{ 
          fontSize: '15vh', 
          writingMode: 'vertical-rl', 
          animation: 'vertical-tray 25s ease-in-out infinite alternate',
          textShadow: '0 0 40px currentColor' // Adding a glow based on the specific color passed
        }}
      >
        FULL STACK DEVELOPER &nbsp;&nbsp;&nbsp; FULL STACK DEVELOPER &nbsp;&nbsp;&nbsp; FULL STACK DEVELOPER
       </div>
    </div>
  );
}

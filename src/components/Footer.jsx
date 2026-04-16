export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#05070B] py-8 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-bold tracking-tighter text-white">
            K B <span className="text-[#C9A54C]">Tushar</span>
          </span>
        </div>
        
        <p className="text-gray-500 text-sm">
          &copy; {currentYear} K B Tushar. All rights reserved.
        </p>
        
        <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-gray-500">
          <a href="#" className="hover:text-[#C9A54C] transition-colors">Privacy</a>
          <a href="#" className="hover:text-[#C9A54C] transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}

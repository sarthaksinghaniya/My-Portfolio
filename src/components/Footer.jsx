import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-dark-900 border-t-4 border-stone pt-16 pb-8 overflow-hidden">
      {/* Decorative Gate Elements */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-stone" style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }} />
      <div className="absolute top-0 right-0 w-16 h-16 bg-stone" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }} />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 flex flex-col items-center">
        
        <div className="mb-8 border-b-2 border-stone/30 pb-8 w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="font-display font-bold text-2xl text-primary text-glow mb-2">The Kingdom of Sarthak</h2>
            <p className="text-stone text-sm">Building the future, one line of code at a time.</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="w-12 h-12 bg-dark-800 border border-stone flex items-center justify-center rounded-lg text-white hover:border-primary hover:text-primary transition-all shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(247,201,72,0.4)] group">
              <FaGithub size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="w-12 h-12 bg-dark-800 border border-stone flex items-center justify-center rounded-lg text-white hover:border-primary hover:text-primary transition-all shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(247,201,72,0.4)] group">
              <FaLinkedin size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="w-12 h-12 bg-dark-800 border border-stone flex items-center justify-center rounded-lg text-white hover:border-primary hover:text-primary transition-all shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(247,201,72,0.4)] group">
              <FaGlobe size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="w-12 h-12 bg-dark-800 border border-stone flex items-center justify-center rounded-lg text-white hover:border-primary hover:text-primary transition-all shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(247,201,72,0.4)] group">
              <FaEnvelope size={24} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        <div className="text-stone text-xs font-display tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Sarthak Singhaniya. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

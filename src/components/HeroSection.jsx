import { ArrowDownRight, Github, Linkedin, MapPin } from "lucide-react";
import profileImg from "/projects/propil.jpg";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[100dvh] pt-24 md:pt-32 flex flex-col justify-end">
      <div className="max-w-[1400px] w-full mx-auto px-4 md:px-8 lg:px-12 flex flex-col h-full">
        
        <div className="border-x border-b border-white/10 flex-grow flex flex-col justify-end px-4 md:px-8 lg:px-12 pb-16">
          {/* Top Meta Data */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] md:text-xs font-mono text-white/40 uppercase tracking-widest border-b border-white/10 pb-8">
          <div className="flex flex-col gap-1">
            <span className="text-white/20">Role</span>
            <span className="text-white/80">Fullstack Developer</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-white/20">Location</span>
            <span className="text-white/80">Bandung, ID</span>
          </div>
          <div className="flex flex-col gap-1 hidden md:flex">
            <span className="text-white/20">Status</span>
            <span className="text-emerald-400">Available</span>
          </div>
          <div className="flex flex-col gap-1 items-end">
            <span className="text-white/20">Scroll</span>
            <span className="text-white/80">Explore</span>
          </div>
        </div>

        {/* Main Display + Photo */}
        <div className="flex flex-col lg:flex-row gap-12 lg:items-end justify-between mt-12 border-x border-b border-white/10 px-4 md:px-8 lg:px-12 pb-16">
          
          <div className="flex flex-col flex-1 z-10 pt-8 lg:pt-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md w-fit mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-medium text-white/70 tracking-wide uppercase">
                Available for fullstack opportunities
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6rem] font-black leading-[1.05] tracking-tighter text-white">
              Athalla Arli <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Abhinaya.
              </span>
            </h1>
            
            <p className="mt-6 text-white/60 text-base md:text-lg leading-relaxed font-light max-w-xl">
              Informatics graduate experienced in building robust backend features and APIs using Spring Boot and Node.js, seamlessly connected to highly polished frontend interfaces.
            </p>
            
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#projects" className="group flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full text-sm font-bold transition-colors hover:bg-emerald-400">
                View Work
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>
              
              <div className="flex gap-2">
                <a href="https://github.com/athallaarl66" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white/60 hover:text-emerald-400 hover:border-emerald-400/50 transition-all">
                  <Github className="w-4 h-4"/>
                </a>
                <a href="https://www.linkedin.com/in/athalla-arli-baa7b72b7/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white/60 hover:text-emerald-400 hover:border-emerald-400/50 transition-all">
                  <Linkedin className="w-4 h-4"/>
                </a>
              </div>
            </div>
          </div>

          {/* Photo Polaroid */}
          <div className="w-64 sm:w-80 lg:w-[340px] mx-auto lg:mx-0 flex-shrink-0 relative z-10 mt-12 lg:mt-0">
             {/* Decorative glow */}
             <div className="absolute inset-0 bg-emerald-500/20 blur-[80px] rounded-full translate-y-10 scale-90 -z-10" />
             
             <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl p-2 md:p-3 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative group">
                  <img 
                    src={profileImg} 
                    alt="Athalla Arli" 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[1.5rem] pointer-events-none" />
                </div>
                
                {/* Embedded Location Badge */}
                <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-2xl flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-medium text-white/90">Bandung, ID</span>
                </div>
             </div>
          </div>

        </div>

        </div>
      </div>
    </section>
  );
};

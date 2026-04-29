import { Mail, Linkedin, Github, Instagram } from "lucide-react";

export default function ContactContainer() {
  return (
    <section id="contact" className="relative">
      <div className="max-w-[1400px] w-full mx-auto px-4 md:px-8 lg:px-12">
        <div className="border-x border-white/10 min-h-[50vh] flex flex-col items-center justify-center text-center p-8 md:p-24 relative overflow-hidden bg-white/[0.01]">
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-emerald-500/10 blur-[100px] pointer-events-none" />

          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-emerald-400 shadow-inner">
            <Mail className="w-8 h-8" />
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-[5vw] font-black leading-none tracking-tighter text-white mb-6">
            Let's build something <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">together.</span>
          </h2>
          
          <p className="text-white/50 text-base md:text-lg font-light max-w-xl mx-auto mb-12">
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to connect, my inbox is always open.
          </p>

          <a 
            href="mailto:athallaarli@gmail.com"
            className="group relative px-8 py-4 bg-white text-black font-bold text-sm rounded-full overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(52,211,153,0.3)] hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start a Conversation
            </span>
          </a>

        </div>

        {/* Footer Links grid */}
        <div className="border-x border-t border-white/10 grid grid-cols-2 md:grid-cols-4">
          {[
            { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/athalla-arli-baa7b72b7/" },
            { name: "GitHub", icon: Github, url: "https://github.com/athallaarl66" },
            { name: "Email", icon: Mail, url: "mailto:athallaarli@gmail.com" },
            { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/athallaarl/" },
          ].map((link, i) => {
            const Icon = link.icon;
            return (
              <a 
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 border-r border-b md:border-b-0 border-white/10 last:border-r-0 flex flex-col items-center justify-center gap-3 hover:bg-white/[0.03] group transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-emerald-400/50 group-hover:text-emerald-400 transition-colors">
                  <Icon className="w-4 h-4 text-white/40 group-hover:text-emerald-400 transition-colors" />
                </div>
                <span className="text-xs font-mono text-white/50 uppercase tracking-widest group-hover:text-white transition-colors">
                  {link.name}
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  );
}

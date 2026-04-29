export const AboutSection = () => {
  return (
    <section id="about" className="relative">
      <div className="max-w-[1400px] w-full mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 border-x border-b border-white/10">
          
          {/* Left Heading Pane */}
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/10 p-8 md:p-12 flex flex-col justify-between bg-white/[0.01]">
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight">
              Engineering <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 font-bold">with purpose.</span>
            </h2>
            <div className="mt-12 lg:mt-0">
              <a
                href="/projects2/CV_IT_Athalla-Arli-Abhinaya_ENGLISH.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-mono uppercase tracking-widest text-emerald-400 hover:bg-emerald-400 hover:text-black transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Content Pane */}
          <div className="lg:col-span-8 p-8 md:p-12 lg:p-20">
            <div className="max-w-2xl space-y-8 text-white/60 text-base md:text-lg font-light leading-relaxed">
              <p>
                I'm an Informatics graduate from Telkom University (GPA 3.20/4.00) with a strong foundation in UI and frontend development, now actively transitioning into fullstack engineering. I have hands-on experience building backend features and robust APIs using Spring Boot and Node.js.
              </p>
              <p>
                Professionally, I worked as a Fullstack Developer Intern at <strong className="text-white font-medium">Firma Hukum Rantai Khatulistiwa</strong> in Jakarta, where I developed their corporate website and integrated online legal service features.
              </p>
              <p>
                Recently, I've been focused on developing practical systems. I built a Financial Management System implementing JWT authentication, recurring logic, and analytics, while deploying the containerized backend via Docker. My undergraduate thesis also taught me the value of empathy in software, applying <strong className="text-white font-medium">User-Centered Design</strong> to build a Sundanese script learning platform for high school students.
              </p>
            </div>

            {/* Glassmorphic Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-16 border-t border-white/10">
              <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-emerald-400/30 transition-colors">
                <p className="text-4xl font-bold text-white mb-2">3+</p>
                <p className="text-xs font-mono text-white/40 uppercase tracking-widest">Projects Shipped</p>
              </div>
              <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-emerald-400/30 transition-colors">
                <p className="text-4xl font-bold text-white mb-2">1</p>
                <p className="text-xs font-mono text-white/40 uppercase tracking-widest">Internship</p>
              </div>
              <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-emerald-400/30 transition-colors">
                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-2">2025</p>
                <p className="text-xs font-mono text-white/40 uppercase tracking-widest">Graduated</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

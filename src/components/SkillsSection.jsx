import { Code2, Settings } from "lucide-react"; // ikon kategori

const skills = [
  // Frontend
  {
    name: "HTML",
    level: 85,
    category: "programming",
    icon: "/icons/html.png",
  },
  {
    name: "CSS",
    level: 80,
    category: "programming",
    icon: "/icons/css.png",
  },
  {
    name: "JavaScript",
    level: 70,
    category: "programming",
    icon: "/icons/javascript.png",
  },
  {
    name: "TypeScript",
    level: 75,
    category: "programming",
    icon: "/icons/typesript.png",
  },
  {
    name: "React",
    level: 70,
    category: "programming",
    icon: "/icons/react.png",
  },
  {
    name: "Tailwind CSS",
    level: 70,
    category: "programming",
    icon: "/icons/tailwind.png",
  },
  {
    name: "Next.js",
    level: 80,
    category: "programming",
    icon: "/icons/next.png",
  },
  {
    name: "Laravel",
    level: 50,
    category: "programming",
    icon: "/icons/laravel.png",
  },
  {
    name: "Python",
    level: 80,
    category: "programming",
    icon: "/icons/py.png",
  },
  {
    name: "C++",
    level: 60,
    category: "programming",
    icon: "/icons/c++.png",
  },
  {
    name: "PHP",
    level: 60,
    category: "programming",
    icon: "/icons/php.png",
  },
  {
    name: "Node.js",
    level: 50,
    category: "programming",
    icon: "/icons/node.png",
  },

  // Tools
  { name: "Figma", level: 80, category: "tools", icon: "/icons/figma.png" },
  { name: "GitHub", level: 75, category: "tools", icon: "/icons/github.png" },
  { name: "Vite", level: 65, category: "tools", icon: "/icons/vite.png" },
  { name: "VS Code", level: 85, category: "tools", icon: "/icons/vscode.png" },
  {
    name: "Ms Office",
    level: 90,
    category: "tools",
    icon: "/icons/office.png",
  },
  { name: "Canva", level: 80, category: "tools", icon: "/icons/canva.png" },
  {
    name: "Adobe Photoshop",
    level: 60,
    category: "tools",
    icon: "/icons/ps.png",
  },
  {
    name: "Adobe Ilustrator",
    level: 70,
    category: "tools",
    icon: "/icons/ai.png",
  },
  {
    name: "Notion",
    level: 80,
    category: "tools",
    icon: "/icons/notion.png",
  },
];

// Mapping kategori → label & ikon lucide-react
const categoryMeta = {
  programming: { label: "Programming & Frameworks", icon: Code2 },
  tools: { label: "Tools & Workflow", icon: Settings },
};

export const SkillSection = () => {
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/24">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-gray-300 text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="space-y-16">
          {categories.map((category) => {
            const Icon = categoryMeta[category].icon;
            return (
              <div key={category}>
                {/* Judul kategori dengan ikon lucide-react */}
                <div className="flex items-center justify-center gap-3 mb-6 group">
                  <Icon className="w-8 h-8 text-primary group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500" />
                  <h3 className="text-2xl font-bold text-primary">
                    {categoryMeta[category].label}
                  </h3>
                </div>
                <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>

                {/* Skill grid */}
                <div className="text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, index) => (
                      <div
                        key={index}
                        className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                      >
                        <div className="flex items-center mb-2 gap-2">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-6 h-6"
                          />
                          <h4 className="text-lg font-semibold">
                            {skill.name}
                          </h4>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                          <div
                            className="bg-primary h-2.5 rounded-full transition-all duration-700"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <p className="mt-2 text-sm text-gray-300">
                          Level: {skill.level}%
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

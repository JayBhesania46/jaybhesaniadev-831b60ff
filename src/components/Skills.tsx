
import { motion } from "framer-motion";
import { Code, Database, Cloud, Github, Terminal } from "lucide-react";

const skillsData = [
  {
    category: "Languages",
    icon: <Code size={20} />,
    skills: ["Java", "JavaScript", "Python", "HTML", "CSS"],
  },
  {
    category: "Frameworks",
    icon: <Terminal size={20} />,
    skills: ["Spring Boot", "React", "Node.js", "Express"],
  },
  {
    category: "Databases",
    icon: <Database size={20} />,
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud size={20} />,
    skills: ["AWS", "Docker", "CI/CD"],
  },
  {
    category: "Tools",
    icon: <Github size={20} />,
    skills: ["Git", "Jira", "Postman", "VS Code"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-[#0F172A]"
    >
      <div className="container mx-auto px-6 lg:px-16 max-w-5xl text-[#E2E8F0]">
        <h2 className="text-3xl font-spaceGrotesk font-semibold mb-16 text-center reveal">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              className="bg-[#1E293B] p-6 rounded-lg shadow-lg border border-[#2D3748] reveal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-[#4F46E5]/20 rounded-lg text-[#4F46E5] mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-spaceGrotesk font-semibold">
                  {category.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-[#2D3748] text-[#94A3B8] rounded-md text-sm hover:bg-[#4F46E5]/20 hover:text-[#4F46E5] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


import { motion } from "framer-motion";

const skills = [
  "Java", "Python", "JavaScript",
  "HTML", "CSS", "React", "Node.js", "Spring Boot",
  "SQL", "MongoDB", "PostgreSQL", "MySQL",
  "AWS", "Docker",
  "Git", "Jira", "Agile", "SDLC",
];

const About = () => {
  const paragraph = `Results-driven Software Developer with 3 years of experience designing and implementing scalable software solutions. Passionate about solving complex problems, optimizing performance, and building impactful software products.`;

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-24 bg-[#f5f5f5]"
    >
      <div className="container mx-auto px-6 lg:px-16 max-w-4xl text-[#2B2B2B]">
        <h2 className="text-3xl font-spaceGrotesk font-semibold mb-6 text-[#2B2B2B]">
          About Me
        </h2>
        <p className="text-lg font-inter leading-relaxed mb-8">{paragraph}</p>
        <h3 className="mb-4 font-spaceGrotesk font-semibold text-xl text-[#2B2B2B]">Technical Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm font-mono font-semibold text-[#2B2B2B]">
          {skills.map((skill) => (
            <div key={skill} className="border border-[#2B2B2B] rounded px-3 py-1 text-center hover:bg-[#2B2B2B] hover:text-white transition-colors cursor-default select-none">
              {skill}
            </div>
          ))}
        </div>
        <hr className="border-[#d0d0d0] border mt-12" />
      </div>
    </motion.section>
  );
};

export default About;

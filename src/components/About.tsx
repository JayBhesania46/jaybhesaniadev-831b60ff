
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
      className="py-24 bg-[#0f0f0f]"
    >
      <div className="container mx-auto px-6 lg:px-16 max-w-4xl text-white">
        <h2 className="text-3xl font-spaceGrotesk font-semibold mb-6 text-green">
          About Me
        </h2>
        <p className="text-lg font-inter leading-relaxed mb-8">{paragraph}</p>
        <h3 className="mb-4 font-spaceGrotesk font-semibold text-xl text-green">Technical Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm font-mono font-semibold text-gray-300">
          {skills.map((skill) => (
            <div key={skill} className="border border-green rounded px-3 py-1 text-center hover:bg-green hover:text-black transition-colors cursor-default select-none">
              {skill}
            </div>
          ))}
        </div>
        <hr className="border-gray-700 border mt-12" />
      </div>
    </motion.section>
  );
};

export default About;

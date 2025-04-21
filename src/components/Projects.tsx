
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Receipt Processing API",
    tech: "Java, Spring Boot, DynamoDB, Docker",
    description:
      "Built RESTful API, handled 100+ req/sec, 95% accuracy in reward validation.",
    github: "https://github.com/JayBhesania46/receipt-api"
  },
  {
    title: "Apartment Scout",
    tech: "Node.js, MongoDB, Real-time Chat",
    description:
      "Searchable student housing app with real-time messaging.",
    github: "https://github.com/JayBhesania46/apartment-scout"
  },
  {
    title: "Baby Care App",
    tech: "React, Spring Boot, AWS, MySQL",
    description:
      "Dashboard for parents to track baby activities, secure role-based access.",
    github: "https://github.com/JayBhesania46/baby-care-app"
  },
  {
    title: "Search Engine Tool",
    tech: "HTML, JavaScript, Node.js",
    description:
      "Web crawler that counts keyword frequency and ranks results.",
    github: "https://github.com/JayBhesania46/search-engine"
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-[#1E293B]"
    >
      <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
        <h2 className="text-3xl font-spaceGrotesk font-semibold mb-12 text-[#E2E8F0] text-center reveal">
          Projects
        </h2>

        <motion.div
          className="grid gap-8 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          aria-label="My projects"
        >
          {projects.map((project, i) => (
            <motion.article
              key={i}
              className="bg-[#0F172A] rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-[#2D3748] group reveal"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              tabIndex={0}
              aria-label={`Project: ${project.title}`}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold font-spaceGrotesk text-[#E2E8F0] group-hover:text-[#4F46E5] transition-colors">
                    {project.title}
                  </h3>
                  
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub repository for ${project.title}`}
                      className="text-[#94A3B8] hover:text-[#4F46E5] transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
                
                <p className="text-[#06B6D4] text-sm mb-3 font-mono">{project.tech}</p>
                <p className="text-[#94A3B8] font-inter">{project.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

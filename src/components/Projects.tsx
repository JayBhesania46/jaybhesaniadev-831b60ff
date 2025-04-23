
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Receipt Processor",
    tech: "Java, Spring Boot, DynamoDB, Docker",
    description:
      "Built RESTful API, handled 100+ req/sec, 95% accuracy in reward validation.",
    github: "https://github.com/JayBhesania46/Receipt-Processor"
  },
  {
    title: "Baby Care Web App",
    tech: "React, Spring Boot, AWS, MySQL",
    description:
      "Dashboard for parents to track baby activities, secure role-based access.",
    github: "https://github.com/JayBhesania46/Baby_Care_Web_App"
  },
  {
    title: "Search Engine",
    tech: "HTML, JavaScript, Node.js",
    description:
      "Web crawler that counts keyword frequency and ranks results.",
    github: "https://github.com/JayBhesania46/Search_Engine"
  },
  {
    title: "Heart Stroke Analysis",
    tech: "Python, Machine Learning, Data Analysis",
    description:
      "Analysis and prediction model for heart stroke risk factors.",
    github: "https://github.com/JayBhesania46/Heart_Stroke_Analysis"
  },
  {
    title: "Apartment Scout",
    tech: "Node.js, MongoDB, Real-time Chat",
    description:
      "Searchable student housing app with real-time messaging.",
    github: "https://github.com/JayBhesania46/Apartment_Scout"
  },
  {
    title: "Micro Services",
    tech: "Java, Spring Boot, Docker, Kubernetes",
    description:
      "Scalable microservices architecture with service discovery and load balancing.",
    github: "https://github.com/JayBhesania46/Micro_Services"
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-gray-100"
    >
      <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
        <h2 className="text-3xl font-sans font-semibold mb-12 text-[#2B2B2B] text-center reveal">
          Projects
        </h2>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          aria-label="My projects"
        >
          {projects.map((project, i) => (
            <motion.article
              key={i}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-200 group reveal"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              tabIndex={0}
              aria-label={`Project: ${project.title}`}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold font-sans text-[#2B2B2B] group-hover:text-black group-hover:underline transition-colors"
                  >
                    {project.title}
                  </a>
                  
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub repository for ${project.title}`}
                      className="text-[#555555] hover:text-black transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
                
                <p className="text-gray-700 text-sm mb-3 font-mono">{project.tech}</p>
                <p className="text-[#555555] font-sans">{project.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

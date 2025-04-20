
import { motion } from "framer-motion";

const projects = [
  {
    title: "Receipt Processing API",
    description:
      "High-performance RESTful API supporting 100+ requests per second. Java, Spring Boot, Docker, DynamoDB.",
  },
  {
    title: "Apartment Scout",
    description:
      "Web app for international students to find verified accommodations. Node.js, MongoDB, Real-time Chat.",
  },
  {
    title: "Baby Care App",
    description:
      "Scrum-led development with role-based access and encryption protocols. React, Spring Boot, AWS, MySQL.",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-[#0f0f0f]"
    >
      <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
        <h2 className="text-3xl font-spaceGrotesk font-semibold mb-12 text-green text-center">
          Projects
        </h2>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          aria-label="My projects"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-gray-900 rounded-lg p-6 text-white shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              role="article"
              tabIndex={0}
              aria-label={`Project: ${project.title}`}
            >
              <h3 className="text-xl font-semibold mb-2 font-spaceGrotesk">{project.title}</h3>
              <p className="text-gray-300 font-inter">{project.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

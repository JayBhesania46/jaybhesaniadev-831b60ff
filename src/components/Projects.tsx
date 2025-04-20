
import { motion } from "framer-motion";

const projects = [
  {
    title: "Receipt Processing API",
    tech: "Java, Spring Boot, DynamoDB, Docker",
    description:
      "Built RESTful API, handled 100+ req/sec, 95% accuracy in reward validation.",
  },
  {
    title: "Apartment Scout",
    tech: "Node.js, MongoDB, Real-time Chat",
    description:
      "Searchable student housing app with real-time messaging.",
  },
  {
    title: "Baby Care App",
    tech: "React, Spring Boot, AWS, MySQL",
    description:
      "Dashboard for parents to track baby activities, secure role-based access.",
  },
  {
    title: "Search Engine Tool",
    tech: "HTML, JavaScript, Node.js",
    description:
      "Web crawler that counts keyword frequency and ranks results.",
  },
  {
    title: "Heart & Stroke Analysis",
    tech: "Python, ML",
    description:
      "Trained 8 models on Kaggle health dataset. SVM model reached 91% accuracy for stroke prediction.",
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
            <motion.article
              key={i}
              className="bg-gray-900 rounded-lg p-6 text-white shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              tabIndex={0}
              aria-label={`Project: ${project.title}`}
            >
              <h3 className="text-xl font-semibold mb-1 font-spaceGrotesk">{project.title}</h3>
              <p className="text-green text-sm mb-3 font-mono">{project.tech}</p>
              <p className="text-gray-300 font-inter">{project.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

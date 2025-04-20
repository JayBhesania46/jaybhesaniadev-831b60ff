
import { motion } from "framer-motion";

const About = () => {
  const paragraph = `I am Jay Bhesania, a passionate software developer specializing in backend development with expertise in Java, Spring Boot, Node.js, and AWS. I enjoy crafting scalable, efficient, and clean code to bring impactful digital solutions to life.`;

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
        <p className="text-lg font-inter leading-relaxed">{paragraph}</p>
        <hr className="border-gray-700 border mt-12" />
      </div>
    </motion.section>
  );
};

export default About;

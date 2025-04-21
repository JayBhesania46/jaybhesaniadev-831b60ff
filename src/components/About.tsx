
import { motion } from "framer-motion";

const About = () => {
  const paragraph = `Results-driven Software Developer with 3 years of experience designing and implementing scalable software solutions. Passionate about backend development, API design, and clean code practices. Skilled in building robust applications using Java, Spring Boot, Node.js, React, and AWS.`;

  return (
    <motion.section
      id="about"
      className="py-24 bg-[#1E293B] reveal"
    >
      <div className="container mx-auto px-6 lg:px-16 max-w-4xl text-[#E2E8F0]">
        <h2 className="text-3xl font-spaceGrotesk font-semibold mb-6">
          About Me
        </h2>
        <p className="text-lg font-inter leading-relaxed mb-8 text-[#94A3B8]">{paragraph}</p>
        
        <hr className="border-[#2D3748] border mt-12" />
      </div>
    </motion.section>
  );
};

export default About;

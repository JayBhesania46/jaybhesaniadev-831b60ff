
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#2B2B2B]"
        >
          <h2 className="text-3xl font-sans font-semibold mb-10 text-center">
            About Me
          </h2>
          
          <div className="space-y-6 text-lg text-center">
            <p className="flex items-center justify-center gap-2">
              <span className="text-xl">🚀</span> 
              Dynamic and results-oriented Software Developer with 3 years of experience and a Master's & Bachelor's degree in Computer Science.
            </p>
            
            <p className="flex items-center justify-center gap-2">
              <span className="text-xl">💡</span>
              Skilled in Agile methodologies, Java, Spring Boot, Node.js, React, Python, AWS & microservices architecture.
            </p>
            
            <p className="flex items-center justify-center gap-2">
              <span className="text-xl">🔧</span>
              Past work includes improving backend efficiency, optimizing scalability, and mentoring students.
            </p>
            
            <p className="flex items-center justify-center gap-2">
              <span className="text-xl">🎯</span>
              Passionate about building scalable applications and user-friendly web solutions.
            </p>
            
            <p className="flex items-center justify-center gap-2">
              <span className="text-xl">📫</span> 
              <a href="https://www.linkedin.com/in/bhesaniajay/" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-gray-700 hover:text-black hover:underline transition-colors">
                LinkedIn
              </a>
              <span className="mx-2">|</span>
              <a href="https://github.com/JayBhesania46"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-gray-700 hover:text-black hover:underline transition-colors">
                GitHub
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

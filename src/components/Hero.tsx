
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center bg-white text-black"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="text-5xl sm:text-7xl font-bold font-sans mb-6 hover:text-[#444444] transition-colors duration-300"
      >
        Jay Bhesania
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-lg sm:text-xl max-w-2xl text-gray-700 font-sans leading-relaxed mb-8"
      >
        Software engineer based in United States with skills in<br />
        Java | Spring Boot | JavaScript | React | Node.js | AWS | SQL
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="flex gap-6 justify-center"
      >
        <a
          href="mailto:work.jaybhesania@gmail.com"
          className="group flex items-center justify-center p-2 rounded-full bg-white text-black border border-black hover:bg-black hover:text-white transition-all duration-300"
          aria-label="Email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail size={20} />
          <span className="sr-only">Email</span>
        </a>

        <a
          href="https://github.com/JayBhesania46"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center p-2 rounded-full bg-white text-black border border-black hover:bg-black hover:text-white transition-all duration-300"
          aria-label="GitHub Profile"
        >
          <Github size={20} />
          <span className="sr-only">GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/bhesaniajay/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center p-2 rounded-full bg-white text-black border border-black hover:bg-black hover:text-white transition-all duration-300"
          aria-label="LinkedIn Profile"
        >
          <Linkedin size={20} />
          <span className="sr-only">LinkedIn</span>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

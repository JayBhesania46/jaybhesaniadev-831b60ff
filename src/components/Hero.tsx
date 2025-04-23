import { Github, Linkedin, Mail } from "lucide-react";
import { motion, Variants } from "framer-motion";

const name = "Jay Bhesania";

const containerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  hover: {
    color: "#444444",
    transition: { duration: 0.3 },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center bg-white text-black"
    >
      <motion.h1
        className="text-5xl sm:text-7xl font-bold font-sans mb-6 select-none flex justify-center flex-wrap"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        aria-label="Jay Bhesania"
      >
        {Array.from(name).map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={letterVariants}
            animate="visible"
            whileHover="hover"
            style={{ display: char === " " ? "inline-block" : undefined }}
            transition={{ delay: 0.2 + index * 0.07 }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="text-lg sm:text-xl max-w-2xl text-gray-700 font-sans leading-relaxed mb-8"
      >
        Software engineer based in United States with skills in<br />
        Java | Spring Boot | JavaScript | React | Node.js | AWS | SQL
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="flex gap-6 justify-center"
      >
        <a
          href="mailto:work.jaybhesania@gmail.com"
          className="group flex items-center justify-center p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-black hover:text-white transition-transform duration-300 hover:scale-110"
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
          className="group flex items-center justify-center p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-black hover:text-white transition-transform duration-300 hover:scale-110"
          aria-label="GitHub Profile"
        >
          <Github size={20} />
          <span className="sr-only">GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/bhesaniajay/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-black hover:text-white transition-transform duration-300 hover:scale-110"
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

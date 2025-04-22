
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center bg-white"
    >
      {/* Animated Name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-5xl sm:text-7xl font-bold font-spaceGrotesk mb-4">
          <span className="text-gradient">Jay Bhesania</span>
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-lg sm:text-xl text-[#555555] font-medium font-spaceGrotesk max-w-md mx-auto"
      >
        Software Developer • Java | Spring Boot | Node.js | AWS
      </motion.p>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="mt-10 flex gap-6 justify-center"
      >
        <a
          href="mailto:work.jaybhesania@gmail.com"
          className="group flex items-center gap-2 text-[#555555] hover:text-[#2B2B2B] transition-colors"
          aria-label="Email"
        >
          <span className="p-2 rounded-full bg-gray-100 group-hover:bg-[#4F46E5] group-hover:text-white transition-colors">
            <Mail size={20} />
          </span>
          <span className="hidden sm:inline">work.jaybhesania@gmail.com</span>
        </a>
        
        <a
          href="https://github.com/JayBhesania46"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-[#555555] hover:text-[#2B2B2B] transition-colors"
          aria-label="GitHub Profile"
        >
          <span className="p-2 rounded-full bg-gray-100 group-hover:bg-[#4F46E5] group-hover:text-white transition-colors">
            <Github size={20} />
          </span>
          <span className="hidden sm:inline">GitHub</span>
        </a>
        
        <a
          href="https://www.linkedin.com/in/bhesaniajay/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-[#555555] hover:text-[#2B2B2B] transition-colors"
          aria-label="LinkedIn Profile"
        >
          <span className="p-2 rounded-full bg-gray-100 group-hover:bg-[#4F46E5] group-hover:text-white transition-colors">
            <Linkedin size={20} />
          </span>
          <span className="hidden sm:inline">LinkedIn</span>
        </a>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-[#555555] text-sm mb-2">Scroll</span>
          <div className="w-[2px] h-10 bg-gradient-to-b from-[#4F46E5] to-[#06B6D4]"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;


import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const gradientText = "Jay Bhesania";

const Hero = () => {
  const letterVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, type: "spring", stiffness: 50 },
    }),
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center bg-white"
    >
      {/* Animated Name */}
      <h1
        aria-label="Jay Bhesania"
        className="text-5xl sm:text-7xl font-bold font-spaceGrotesk text-[#2B2B2B] mb-4"
      >
        {Array.from(gradientText).map((char, i) => (
          <motion.span key={i} custom={i} variants={letterVariants} initial="initial" animate="animate" className="inline-block">
            {char}
          </motion.span>
        ))}
      </h1>
      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: gradientText.length * 0.05 + 0.3, duration: 0.6 }}
        className="text-lg sm:text-xl text-[#555555] font-medium font-spaceGrotesk max-w-md mx-auto"
      >
        Backend Developer • Java | Spring Boot | Node.js | AWS
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: gradientText.length * 0.05 + 0.6, duration: 0.6 }}
        className="mt-10 flex gap-6 justify-center"
      >
        <a
          href="https://github.com/JayBhesania46"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-[#2B2B2B] px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-[#444444] focus:outline-none focus:ring-2 focus:ring-[#2B2B2B]"
          aria-label="GitHub Profile"
        >
          <Github className="mr-2" />
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/JayBhesania"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full border-2 border-[#2B2B2B] px-6 py-3 font-semibold text-[#2B2B2B] shadow-lg transition-colors hover:bg-[#2B2B2B] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#2B2B2B]"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="mr-2" />
          LinkedIn
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

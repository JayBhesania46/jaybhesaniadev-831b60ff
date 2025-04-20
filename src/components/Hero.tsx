
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
      className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center bg-[#0f0f0f]"
    >
      {/* Animated Gradient Name */}
      <h1
        aria-label="Jay Bhesania"
        className="text-5xl sm:text-7xl font-bold font-spaceGrotesk bg-gradient-to-r from-green to-green/70 bg-clip-text text-transparent animate-gradient-x mb-4"
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
        className="text-lg sm:text-xl text-gray-400 font-medium font-spaceGrotesk max-w-md mx-auto"
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
          href="https://github.com/JayBhesania"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-green px-6 py-3 font-semibold text-black shadow-lg transition-colors hover:bg-green/90 focus:outline-none focus:ring-2 focus:ring-green"
        >
          <Github className="mr-2" />
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/JayBhesania"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full border-2 border-green px-6 py-3 font-semibold text-green shadow-lg transition-colors hover:bg-green hover:text-black focus:outline-none focus:ring-2 focus:ring-green"
        >
          <Linkedin className="mr-2" />
          LinkedIn
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

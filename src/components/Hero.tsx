
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
        Software engineer based in United States with skills in
        <br />Java | Spring Boot | JavaScript | React | Node.js | AWS | SQL
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
          <span className="p-2 rounded-full bg-gray-100 group-hover:bg-[#4F46E5] group-hover:text-white transition-all duration-300 hover:scale-105">
            <Mail size={20} />
          </span>
          <span className="hidden sm:inline group-hover:underline">work.jaybhesania@gmail.com</span>
        </a>
        
        <a
          href="https://github.com/JayBhesania46"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-[#555555] hover:text-[#2B2B2B] transition-colors"
          aria-label="GitHub Profile"
        >
          <span className="p-2 rounded-full bg-gray-100 group-hover:bg-[#4F46E5] group-hover:text-white transition-all duration-300 hover:scale-105">
            <Github size={20} />
          </span>
          <span className="hidden sm:inline group-hover:underline">GitHub</span>
        </a>
        
        <a
          href="https://www.linkedin.com/in/bhesaniajay/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-[#555555] hover:text-[#2B2B2B] transition-colors"
          aria-label="LinkedIn Profile"
        >
          <span className="p-2 rounded-full bg-gray-100 group-hover:bg-[#4F46E5] group-hover:text-white transition-all duration-300 hover:scale-105">
            <Linkedin size={20} />
          </span>
          <span className="hidden sm:inline group-hover:underline">LinkedIn</span>
        </a>
      </motion.div>
      
      {/* About Me Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-16 max-w-3xl mx-auto text-left"
      >
        <h2 className="text-2xl font-bold font-spaceGrotesk mb-4 text-center">About Me</h2>
        
        <div className="space-y-4 text-[#555555]">
          <p>🚀 Dynamic and results-oriented Software Developer with 3 years of experience and a Master's & Bachelor's degree in Computer Science. With a Master's in Computer Science from Stevens Institute of Technology and a Bachelor's from Parul University, I have cultivated a strong technical foundation in software development, full-stack engineering, and scalable system design. My passion lies in leveraging cutting-edge technologies to solve complex challenges and drive innovation.</p>
          
          <p>💡 Skilled in Agile methodologies and experienced in using tools such as Jira and Git to drive project success. Proficient in Java, Python, JavaScript, Spring Boot, Node.js, React, SQL, AWS, and microservices architecture. As a Software Developer at MatCut Enterprise, I improved backend efficiency by 10% through optimized Node.js solutions and enhanced system scalability by implementing microservices architecture. At Zeronsec, I contributed to 30% faster load times by refining Java-based web application features.</p>
          
          <p>🔧 Served as a Graduate Teaching Assistant at Stevens Institute of Technology, where I mentor students in algorithm design and object-oriented principles, fostering collaborative learning. Passionate about building scalable applications and user-friendly web solutions, I thrive in dynamic environments that encourage innovation and problem-solving.</p>
          
          <p>🎓 Education: Master's in Computer Science from Stevens Institute of Technology and Bachelor's in Computer Science from Parul University.</p>
          
          <p>🌟 Passionate about building scalable applications and user-friendly web solutions. Actively seeking full-time opportunities in software development. My goal is to work in a fast-paced, innovative environment where I can apply my expertise in backend engineering, cloud technologies, and full-stack development to build high-performing, scalable applications.</p>
          
          <p>📫 Let's connect and explore how we can create impactful solutions together! 🚀</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

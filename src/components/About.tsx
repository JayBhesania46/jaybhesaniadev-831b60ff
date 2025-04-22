
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-24 bg-white reveal"
    >
      <div className="container mx-auto px-6 lg:px-16 max-w-4xl text-[#2B2B2B]">
        <h2 className="text-3xl font-spaceGrotesk font-semibold mb-8 text-center">
          About Me
        </h2>
        
        <div className="space-y-6 text-[#555555]">
          <p className="text-lg font-inter leading-relaxed">
            🚀 Dynamic and results-oriented Software Developer with 3 years of experience and a Master's & Bachelor's degree in Computer Science. With a Master's in Computer Science from Stevens Institute of Technology and a Bachelor's from Parul University, I have cultivated a strong technical foundation in software development, full-stack engineering, and scalable system design. My passion lies in leveraging cutting-edge technologies to solve complex challenges and drive innovation.
          </p>
          
          <p className="text-lg font-inter leading-relaxed">
            💡 Skilled in Agile methodologies and experienced in using tools such as Jira and Git to drive project success. Proficient in Java, Python, JavaScript, Spring Boot, Node.js, React, SQL, AWS, and microservices architecture. As a Software Developer at MatCut Enterprise, I improved backend efficiency by 10% through optimized Node.js solutions and enhanced system scalability by implementing microservices architecture. At Zeronsec, I contributed to 30% faster load times by refining Java-based web application features.
          </p>
          
          <p className="text-lg font-inter leading-relaxed">
            🔧 Served as a Graduate Teaching Assistant at Stevens Institute of Technology, where I mentor students in algorithm design and object-oriented principles, fostering collaborative learning. Passionate about building scalable applications and user-friendly web solutions, I thrive in dynamic environments that encourage innovation and problem-solving.
          </p>
          
          <p className="text-lg font-inter leading-relaxed">
            🎓 Education: Master's in Computer Science from Stevens Institute of Technology and Bachelor's in Computer Science from Parul University.
          </p>
          
          <p className="text-lg font-inter leading-relaxed">
            🌟 Passionate about building scalable applications and user-friendly web solutions. Actively seeking full-time opportunities in software development. My goal is to work in a fast-paced, innovative environment where I can apply my expertise in backend engineering, cloud technologies, and full-stack development to build high-performing, scalable applications.
          </p>
          
          <p className="text-lg font-inter leading-relaxed">
            📫 Let's connect and explore how we can create impactful solutions together! 🚀
          </p>
          
          <div className="flex justify-center gap-6 mt-8 pt-6 border-t border-gray-200">
            <a 
              href="https://www.linkedin.com/in/bhesaniajay/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-gray-200 transition-colors px-6 py-3 rounded-md flex items-center gap-2 text-[#2B2B2B] font-semibold"
            >
              <span>LinkedIn</span>
            </a>
            
            <a 
              href="https://github.com/JayBhesania46" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-gray-200 transition-colors px-6 py-3 rounded-md flex items-center gap-2 text-[#2B2B2B] font-semibold"
            >
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

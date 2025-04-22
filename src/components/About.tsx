
import { motion } from "framer-motion";

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
          <h2 className="text-3xl font-spaceGrotesk font-semibold mb-10 text-center">
            About Me
          </h2>
          
          <div className="space-y-5 text-lg">
            <p>🚀 Dynamic and results-oriented Software Developer with 3 years of experience and a Master's & Bachelor's degree in Computer Science. With a Master's in Computer Science from Stevens Institute of Technology and a Bachelor's from Parul University, I have cultivated a strong technical foundation in software development, full-stack engineering, and scalable system design. My passion lies in leveraging cutting-edge technologies to solve complex challenges and drive innovation.</p>
            
            <p>💡 Skilled in Agile methodologies and experienced in using tools such as Jira and Git to drive project success. Proficient in Java, Python, JavaScript, Spring Boot, Node.js, React, SQL, AWS, and microservices architecture. As a Software Developer at MatCut Enterprise, I improved backend efficiency by 10% through optimized Node.js solutions and enhanced system scalability by implementing microservices architecture. At Zeronsec, I contributed to 30% faster load times by refining Java-based web application features.</p>
            
            <p>🔧 Served as a Graduate Teaching Assistant at Stevens Institute of Technology, where I mentor students in algorithm design and object-oriented principles, fostering collaborative learning. Passionate about building scalable applications and user-friendly web solutions, I thrive in dynamic environments that encourage innovation and problem-solving.</p>
            
            <p>🎓 Education: Master's in Computer Science from Stevens Institute of Technology and Bachelor's in Computer Science from Parul University.</p>
            
            <p>🌟 Passionate about building scalable applications and user-friendly web solutions. Actively seeking full-time opportunities in software development. My goal is to work in a fast-paced, innovative environment where I can apply my expertise in backend engineering, cloud technologies, and full-stack development to build high-performing, scalable applications.</p>
            
            <p>📫 Let's connect and explore how we can create impactful solutions together! 🚀</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

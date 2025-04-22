
import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-16 max-w-3xl text-[#2B2B2B] text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-spaceGrotesk font-semibold reveal"
        >
          Let&apos;s Connect!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#555555] max-w-md mx-auto font-inter reveal"
        >
          Feel free to reach out via email or social links below. I&apos;m open to new opportunities and collaborations!
        </motion.p>

        <motion.div
          className="space-y-6 reveal"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          aria-label="Contact links"
        >
          <a
            href="mailto:work.jaybhesania@gmail.com"
            className="bg-gray-100 hover:bg-gray-200 transition-colors p-4 rounded-lg flex items-center justify-center gap-3 text-[#2B2B2B] font-inter font-semibold text-lg"
          >
            <Mail className="text-[#4F46E5]" />
            work.jaybhesania@gmail.com
          </a>
          
          <div className="flex gap-4">
            <a
              href="https://github.com/JayBhesania46"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gray-100 hover:bg-gray-200 transition-colors p-4 rounded-lg flex items-center justify-center gap-3 text-[#2B2B2B] font-inter font-semibold"
            >
              <Github className="text-[#4F46E5]" />
              GitHub
            </a>
            
            <a
              href="https://www.linkedin.com/in/bhesaniajay/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gray-100 hover:bg-gray-200 transition-colors p-4 rounded-lg flex items-center justify-center gap-3 text-[#2B2B2B] font-inter font-semibold"
            >
              <Linkedin className="text-[#4F46E5]" />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

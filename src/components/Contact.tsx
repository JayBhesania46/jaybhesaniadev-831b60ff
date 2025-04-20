
import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#0f0f0f]">
      <div className="container mx-auto px-6 lg:px-16 max-w-3xl text-white text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-spaceGrotesk font-semibold text-green"
        >
          Let's Work Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-md mx-auto font-inter"
        >
          Feel free to reach out via email or social links below. I'm open to new
          opportunities and collaborations!
        </motion.p>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          aria-label="Contact links"
        >
          <a
            href="mailto:work.jaybhesania@gmail.com"
            className="inline-block w-full text-green hover:underline font-inter font-semibold text-lg"
          >
            <Mail className="inline mr-2" />
            work.jaybhesania@gmail.com
          </a>
          <a
            href="https://github.com/JayBhesania"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-green hover:underline font-inter font-semibold text-lg"
          >
            <Github className="inline mr-2" />
            github.com/JayBhesania
          </a>
          <a
            href="https://linkedin.com/in/JayBhesania"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-green hover:underline font-inter font-semibold text-lg"
          >
            <Linkedin className="inline mr-2" />
            linkedin.com/in/JayBhesania
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

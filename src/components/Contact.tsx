
import { Mail, Linkedin, Github, Download } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#f5f5f5]">
      <div className="container mx-auto px-6 lg:px-16 max-w-3xl text-[#2B2B2B] text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-spaceGrotesk font-semibold text-[#2B2B2B]"
        >
          Let&apos;s Connect!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#555555] max-w-md mx-auto font-inter"
        >
          Feel free to reach out via email or social links below. I&apos;m open to new opportunities and collaborations!
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
            className="inline-block w-full text-[#2B2B2B] hover:underline font-inter font-semibold text-lg"
          >
            <Mail className="inline mr-2" />
            work.jaybhesania@gmail.com
          </a>
          <a
            href="https://github.com/JayBhesania46"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-[#2B2B2B] hover:underline font-inter font-semibold text-lg"
          >
            <Github className="inline mr-2" />
            github.com/JayBhesania46
          </a>
          <a
            href="https://linkedin.com/in/JayBhesania"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-[#2B2B2B] hover:underline font-inter font-semibold text-lg"
          >
            <Linkedin className="inline mr-2" />
            linkedin.com/in/JayBhesania
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-block w-full bg-[#2B2B2B] text-white font-semibold py-3 rounded-md mt-4 hover:bg-[#444444] transition"
            aria-label="Download Resume"
          >
            <Download className="inline mr-2 align-text-bottom" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

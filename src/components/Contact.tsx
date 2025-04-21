
import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#0F172A]">
      <div className="container mx-auto px-6 lg:px-16 max-w-3xl text-[#E2E8F0] text-center space-y-8">
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
          className="text-[#94A3B8] max-w-md mx-auto font-inter reveal"
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
            className="bg-[#1E293B] hover:bg-[#2D3748] transition-colors p-4 rounded-lg flex items-center justify-center gap-3 text-[#E2E8F0] font-inter font-semibold text-lg"
          >
            <Mail className="text-[#4F46E5]" />
            work.jaybhesania@gmail.com
          </a>
          
          <div className="flex gap-4">
            <a
              href="https://github.com/JayBhesania46"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#1E293B] hover:bg-[#2D3748] transition-colors p-4 rounded-lg flex items-center justify-center gap-3 text-[#E2E8F0] font-inter font-semibold"
            >
              <Github className="text-[#4F46E5]" />
              GitHub
            </a>
            
            <a
              href="https://linkedin.com/in/JayBhesania"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#1E293B] hover:bg-[#2D3748] transition-colors p-4 rounded-lg flex items-center justify-center gap-3 text-[#E2E8F0] font-inter font-semibold"
            >
              <Linkedin className="text-[#4F46E5]" />
              LinkedIn
            </a>
          </div>
        </motion.div>
        
        {/* Simple Contact Form */}
        <motion.form 
          className="mt-12 space-y-6 text-left reveal bg-[#1E293B] p-6 rounded-lg border border-[#2D3748]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#94A3B8] mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Your name" 
              className="w-full px-4 py-2 bg-[#2D3748] text-[#E2E8F0] border border-[#4B5563] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F46E5]" 
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#94A3B8] mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="your.email@example.com" 
              className="w-full px-4 py-2 bg-[#2D3748] text-[#E2E8F0] border border-[#4B5563] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F46E5]" 
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#94A3B8] mb-2">Message</label>
            <textarea 
              id="message" 
              rows={4} 
              placeholder="Your message" 
              className="w-full px-4 py-2 bg-[#2D3748] text-[#E2E8F0] border border-[#4B5563] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
            ></textarea>
          </div>
          
          <button 
            type="button" 
            className="w-full py-3 px-6 bg-gradient rounded-md font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
          <p className="text-xs text-center text-[#94A3B8]">(Note: This is a placeholder form - no backend connection)</p>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

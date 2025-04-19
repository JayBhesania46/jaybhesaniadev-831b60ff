
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <p className="font-mono text-green mb-4">04. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-lightest mb-6">Get In Touch</h2>
        
        <p className="max-w-xl mx-auto text-slate-light mb-12">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <a href="mailto:work.jaybhesania@gmail.com" className="contact-link">
            <Mail size={20} className="mr-2" />
            work.jaybhesania@gmail.com
          </a>
          
          <a href="https://linkedin.com/in/JayBhesania" target="_blank" rel="noopener noreferrer" className="contact-link">
            <Linkedin size={20} className="mr-2" />
            linkedin.com/in/JayBhesania
          </a>
          
          <a href="https://github.com/JayBhesania" target="_blank" rel="noopener noreferrer" className="contact-link">
            <Github size={20} className="mr-2" />
            github.com/JayBhesania
          </a>
        </div>
        
        <a 
          href="mailto:work.jaybhesania@gmail.com" 
          className="inline-block px-8 py-4 border-2 border-green text-green font-mono rounded hover:bg-green/10 transition-colors duration-300 text-lg"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;

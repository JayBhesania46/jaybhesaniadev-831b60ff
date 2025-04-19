
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center pt-16 pb-32"
    >
      <div className="container mx-auto px-6 lg:px-16">
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <p className="font-mono text-green mb-5">Hi, my name is</p>
        </div>
        
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-lightest mb-4">Jay Bhesania.</h1>
        </div>
        
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <h2 className="text-4xl md:text-6xl font-bold text-slate mb-8">I build things for the web.</h2>
        </div>
        
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <p className="text-slate max-w-2xl mb-12 text-lg">
            I'm a software developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on building scalable software solutions with Java, JavaScript, 
            and Python.
          </p>
        </div>
        
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <a 
            href="#projects" 
            className="inline-flex items-center px-6 py-4 border border-green text-green font-mono rounded hover:bg-green/10 transition-colors duration-300"
          >
            Check out my projects <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

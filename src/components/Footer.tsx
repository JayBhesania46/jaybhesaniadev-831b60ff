
const Footer = () => {
  return (
    <footer className="bg-white py-8 text-center text-[#2B2B2B] font-inter text-sm border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col items-center">
        <p className="mb-4 transition-opacity duration-300 hover:opacity-70">© Jay Bhesania, 2025</p>
        
        <div className="flex gap-6 mt-2">
          <a 
            href="https://github.com/JayBhesania46" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#555555] hover:text-black transition-colors duration-300"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/bhesaniajay/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#555555] hover:text-black transition-colors duration-300"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:work.jaybhesania@gmail.com" 
            className="text-[#555555] hover:text-black transition-colors duration-300"
            aria-label="Email"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

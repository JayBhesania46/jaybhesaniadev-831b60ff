
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const SocialLinks = () => {
  return (
    <>
      {/* Left side social links */}
      <div className="fixed bottom-0 left-10 hidden xl:block">
        <ul className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-gray-300">
          <li>
            <a 
              href="https://github.com/JayBhesania46" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#555555] hover:text-[#4F46E5] transform hover:-translate-y-1 transition-all duration-200"
            >
              <Github size={20} />
            </a>
          </li>
          <li>
            <a 
              href="https://www.linkedin.com/in/bhesaniajay/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#555555] hover:text-[#4F46E5] transform hover:-translate-y-1 transition-all duration-200"
            >
              <Linkedin size={20} />
            </a>
          </li>
          <li>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#555555] hover:text-[#4F46E5] transform hover:-translate-y-1 transition-all duration-200"
            >
              <Twitter size={20} />
            </a>
          </li>
        </ul>
      </div>
      
      {/* Right side email */}
      <div className="fixed bottom-0 right-10 hidden xl:block">
        <div className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-gray-300">
          <a 
            href="mailto:work.jaybhesania@gmail.com" 
            className="font-mono text-sm text-[#555555] hover:text-[#4F46E5] transform hover:-translate-y-1 transition-all duration-200 vertical-text"
            style={{ writingMode: 'vertical-rl' }}
          >
            work.jaybhesania@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};

export default SocialLinks;

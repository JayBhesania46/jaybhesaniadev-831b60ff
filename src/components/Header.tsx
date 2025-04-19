
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 1, name: "About", href: "#about" },
  { id: 2, name: "Experience", href: "#experience" },
  { id: 3, name: "Projects", href: "#projects" },
  { id: 4, name: "Contact", href: "#contact" }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-navy/90 backdrop-blur-md py-4 shadow-md' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 lg:px-16 flex justify-between items-center">
        <a href="#" className="text-green font-mono text-2xl font-bold">JB</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={item.href} 
                  className="nav-item"
                >
                  <span>0{item.id}.</span> {item.name}
                </a>
              </li>
            ))}
            <li>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-4 px-4 py-2 border border-green text-green font-mono rounded hover:bg-green/10 transition-colors duration-300"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-lighter" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-navy-light/95 z-40 flex items-center justify-center transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="text-center">
          <ul className="space-y-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={item.href} 
                  className="text-slate-lighter text-xl font-mono block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-green block text-sm mb-1">0{item.id}.</span> 
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-6 px-6 py-3 border border-green text-green font-mono rounded hover:bg-green/10 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

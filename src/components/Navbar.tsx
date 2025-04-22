
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      setScrolled(scrollY > 20);
      
      let current = "home";
      navItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop - 150; // offset for navbar height
          if (scrollY >= sectionTop) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActive(id);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-500 ${
      scrolled ? 'bg-white/90 shadow-md' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div
          className="text-[#2B2B2B] font-spaceGrotesk font-bold text-lg cursor-pointer transition-all duration-300 hover:opacity-80"
          onClick={() => handleNavClick("home")}
        >
          Jay Bhesania
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-[#555555] text-sm font-medium select-none items-center">
          {navItems.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <li key={id}>
                <button
                  onClick={() => handleNavClick(id)}
                  className={`relative py-2 px-3 rounded-md transition-all duration-300 ${
                    isActive ? "text-black" : "text-[#555555] hover:text-black"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-black rounded transition-all duration-300" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#2B2B2B] focus:outline-none focus:ring-2 focus:ring-black rounded transition-transform duration-300 hover:scale-110"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white/95 backdrop-blur-md text-[#555555] flex flex-col space-y-4 p-6 border-t border-gray-200 select-none">
          {navItems.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <li key={id}>
                <button
                  onClick={() => handleNavClick(id)}
                  className={`w-full text-left py-2 px-3 rounded-md transition-all duration-300 ${
                    isActive ? "text-black font-medium" : "hover:text-black hover:pl-4"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
};

export default Navbar;

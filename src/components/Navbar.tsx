
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
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
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/80 border-b border-[#e0e0e0]">
      <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div
          className="text-[#2B2B2B] font-spaceGrotesk font-bold text-lg cursor-pointer"
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
                  className={`relative py-2 px-3 rounded-md transition-colors duration-300 ${
                    isActive ? "text-[#2B2B2B]" : "hover:text-[#2B2B2B]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#2B2B2B] rounded" />
                  )}
                </button>
              </li>
            );
          })}
          {/* Theme Toggle Button */}
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#2B2B2B] focus:outline-none focus:ring-2 focus:ring-[#2B2B2B] rounded"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white/95 backdrop-blur-md text-[#555555] flex flex-col space-y-4 p-6 border-t border-[#e0e0e0] select-none">
          {navItems.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <li key={id}>
                <button
                  onClick={() => handleNavClick(id)}
                  className={`w-full text-left py-2 px-3 rounded-md transition-colors duration-300 ${
                    isActive ? "text-[#2B2B2B]" : "hover:text-[#2B2B2B]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </button>
              </li>
            );
          })}
          {/* Theme toggle for mobile below the navigation */}
          <li>
            <ThemeToggle />
          </li>
          {/* Download Resume button */}
          <li>
            <a
              href="/resume.pdf"
              download
              className="inline-block w-full text-center bg-[#2B2B2B] text-white font-semibold py-2 rounded-md hover:bg-[#444444] transition"
            >
              Download Resume
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;

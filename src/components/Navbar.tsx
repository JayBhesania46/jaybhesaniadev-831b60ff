
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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

  // Update active on scroll
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
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/60 border-b border-gray-800">
      <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="text-green font-spaceGrotesk font-bold text-lg cursor-pointer" onClick={() => handleNavClick("home")}>
          Jay Bhesania
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-gray-300 text-sm font-medium select-none">
          {navItems.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <li key={id}>
                <button
                  onClick={() => handleNavClick(id)}
                  className={`relative py-2 px-3 rounded-md transition-colors duration-300 ${
                    isActive ? "text-green" : "hover:text-green"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-green rounded" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-300 focus:outline-none focus:ring-2 focus:ring-green rounded"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-black/90 backdrop-blur-md text-gray-300 flex flex-col space-y-4 p-6 border-t border-gray-900 select-none">
          {navItems.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <li key={id}>
                <button
                  onClick={() => handleNavClick(id)}
                  className={`w-full text-left py-2 px-3 rounded-md transition-colors duration-300 ${
                    isActive ? "text-green" : "hover:text-green"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </button>
              </li>
            );
          })}
          {/* Download Resume button */}
          <li>
            <a
              href="/resume.pdf"
              download
              className="inline-block w-full text-center bg-green text-black font-semibold py-2 rounded-md hover:bg-green/90 transition"
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

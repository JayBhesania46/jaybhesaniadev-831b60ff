
import { useState } from 'react';

const navItems = [
  { id: 1, name: 'Home', href: '#home' },
  { id: 2, name: 'Skills', href: '#skills' },
  { id: 3, name: 'Education', href: '#education' },
  { id: 4, name: 'Work Experience', href: '#experience' },
  { id: 5, name: 'Projects', href: '#projects' },
  { id: 6, name: 'Contact', href: '#contact' },
];

const Header = () => {
  // State to track the active nav item
  const [active, setActive] = useState('Home');

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav
        aria-label="Main navigation"
        className="flex rounded-full bg-gray-600/30 backdrop-blur-md px-6 py-2 space-x-4 text-sm text-gray-300 font-medium select-none"
      >
        {navItems.map((item) => {
          const isActive = active === item.name;
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setActive(item.name)}
              className={`relative px-4 py-2 rounded-full cursor-pointer transition-colors duration-200
                ${
                  isActive
                    ? 'bg-gray-100 text-gray-900 shadow-lg shadow-gray-700/40'
                    : 'hover:text-gray-50 hover:bg-gray-500/40'
                }
              `}
              aria-current={isActive ? 'page' : undefined}
            >
              {item.name}
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;

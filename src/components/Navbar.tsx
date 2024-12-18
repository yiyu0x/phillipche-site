import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { toggleTheme, theme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/gear', label: 'Gear' },
    { path: '/gallery', label: 'Gallery' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/30 dark:bg-black/30">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Navigation Links */}
          <div className="flex items-center overflow-x-auto hide-scrollbar">
            <div className="flex space-x-4 sm:space-x-8">
              {navItems.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className="relative flex-shrink-0"
                >
                  <span className={`text-sm font-medium transition-colors whitespace-nowrap ${
                    isActive(path) 
                      ? 'text-black dark:text-white' 
                      : 'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white'
                  }`}>
                    {label}
                  </span>
                  {isActive(path) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-black dark:bg-white"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 ml-4 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex-shrink-0"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-100"
                initial={{ rotate: -45 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </motion.svg>
            ) : (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-700"
                initial={{ rotate: 45 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </motion.svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
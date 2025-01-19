import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { pathname } = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gear', path: '/gear' },
    // { name: 'Gallery', path: '/gallery' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Navigation Links */}
          <div className="flex items-center -ml-3 space-x-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors ${
                  pathname === link.path ? 'font-medium text-gray-900 dark:text-white' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
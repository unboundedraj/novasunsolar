import React, { useState, createContext, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Theme Context for global theme management
const ThemeContext = createContext();

// Custom hook to use theme context
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Theme Provider Component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    // Apply theme to document root
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCompanyDropdown = () => {
    setIsCompanyDropdownOpen(!isCompanyDropdownOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    setIsCompanyDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the dropdown
      if (isCompanyDropdownOpen && !event.target.closest('.company-dropdown-container')) {
        setIsCompanyDropdownOpen(false);
      }
    };

    // Add event listener to document
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      // Clean up event listeners
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isCompanyDropdownOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about' },
    { name: 'Why Solar?', path: '/why-solar' },
    { name: 'Financial Assistance', path: '/financial-assistance' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact us', path: '/contact' }
  ];

  const companyDropdownItems = [
    { name: 'Novasun Solar', path: '/company/novasun-solar' },
    { name: 'Our Workflow', path: '/company/our-workflow' },
    { name: 'Solar Module', path: '/company/solar-module' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-500 backdrop-blur-md ${
        theme === 'dark' 
          ? 'bg-gradient-to-r from-gray-900/95 via-[#2f4ecc]/90 to-gray-800/95 border-white/10 shadow-xl shadow-yellow-400/10' 
          : 'bg-gradient-to-r from-white/95 via-yellow-50/90 to-orange-50/95 border-orange-200/30 shadow-xl shadow-orange-300/20'
      } border-b`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0 flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              className="h-12 w-auto cursor-pointer rounded-lg shadow-lg"
              src={theme === 'light' ? '/assets/novasun-light.png' : '/assets/novasun-dark.jpg'}
              alt="Novasun Solar Logo"
              onClick={() => handleNavigation('/')}
              whileHover={{ 
                rotate: [0, -5, 5, 0],
                boxShadow: theme === 'dark' 
                  ? "0 10px 30px rgba(255, 215, 0, 0.3)" 
                  : "0 10px 30px rgba(255, 165, 0, 0.3)"
              }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-2">
            {/* Home, About us, Why Solar */}
            {navItems.slice(0, 3).map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  boxShadow: theme === 'dark' 
                    ? "0 5px 15px rgba(255, 215, 0, 0.2)" 
                    : "0 5px 15px rgba(255, 165, 0, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative overflow-hidden ${
                  theme === 'dark'
                    ? 'text-white hover:text-yellow-400 hover:bg-white/10'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-yellow-100/50'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <motion.div
                  className={`absolute inset-0 ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-r from-yellow-400/20 to-white/10' 
                      : 'bg-gradient-to-r from-yellow-200/50 to-orange-200/50'
                  } opacity-0`}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}

            {/* Company Dropdown */}
            <div className="relative company-dropdown-container">
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleCompanyDropdown();
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  boxShadow: theme === 'dark' 
                    ? "0 5px 15px rgba(255, 215, 0, 0.2)" 
                    : "0 5px 15px rgba(255, 165, 0, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative overflow-hidden ${
                  theme === 'dark'
                    ? 'text-white hover:text-yellow-400 hover:bg-white/10'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-yellow-100/50'
                }`}
              >
                <span className="relative z-10">Company</span>
                <motion.div
                  animate={{ rotate: isCompanyDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-1 relative z-10"
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.div>
                <motion.div
                  className={`absolute inset-0 ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-r from-yellow-400/20 to-white/10' 
                      : 'bg-gradient-to-r from-yellow-200/50 to-orange-200/50'
                  } opacity-0`}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <AnimatePresence>
                {isCompanyDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className={`absolute right-0 mt-2 w-56 rounded-2xl shadow-2xl z-50 overflow-hidden backdrop-blur-md ${
                      theme === 'dark'
                        ? 'bg-gradient-to-br from-[#2f4ecc]/95 to-gray-800/95 border border-white/20'
                        : 'bg-gradient-to-br from-white/95 to-yellow-50/95 border border-orange-200/50'
                    }`}
                  >
                    <div className="py-2">
                      {companyDropdownItems.map((item, index) => (
                        <motion.button
                          key={item.name}
                          onClick={() => handleNavigation(item.path)}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                          whileHover={{ 
                            x: 5,
                            backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 165, 0, 0.1)'
                          }}
                          className={`block w-full text-left px-4 py-3 text-sm transition-all duration-300 ${
                            theme === 'dark'
                              ? 'text-white hover:text-yellow-400'
                              : 'text-gray-700 hover:text-orange-600'
                          }`}
                        >
                          {item.name}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Remaining nav items */}
            {navItems.slice(3).map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 4) * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  boxShadow: theme === 'dark' 
                    ? "0 5px 15px rgba(255, 215, 0, 0.2)" 
                    : "0 5px 15px rgba(255, 165, 0, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative overflow-hidden ${
                  theme === 'dark'
                    ? 'text-white hover:text-yellow-400 hover:bg-white/10'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-yellow-100/50'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <motion.div
                  className={`absolute inset-0 ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-r from-yellow-400/20 to-white/10' 
                      : 'bg-gradient-to-r from-yellow-200/50 to-orange-200/50'
                  } opacity-0`}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ 
                scale: 1.1,
                rotate: 360,
                boxShadow: theme === 'dark' 
                  ? "0 0 20px rgba(255, 215, 0, 0.5)" 
                  : "0 0 20px rgba(255, 165, 0, 0.5)"
              }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-lg transition-all duration-300 ${
                theme === 'dark'
                  ? 'text-yellow-400 hover:bg-white/10 hover:text-yellow-300'
                  : 'text-orange-600 hover:bg-yellow-100/50 hover:text-orange-700'
              }`}
              aria-label="Toggle theme"
            >
              <motion.div
                animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                transition={{ duration: 0.5 }}
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-lg transition-all duration-300 ${
                theme === 'dark'
                  ? 'text-yellow-400 hover:bg-white/10'
                  : 'text-orange-600 hover:bg-yellow-100/50'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </motion.button>

            <motion.button
              onClick={toggleMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-lg transition-all duration-300 ${
                theme === 'dark'
                  ? 'text-white hover:bg-white/10 hover:text-yellow-400'
                  : 'text-gray-700 hover:bg-yellow-100/50 hover:text-orange-600'
              }`}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`lg:hidden backdrop-blur-md ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-[#2f4ecc]/95 to-gray-800/95' 
                  : 'bg-gradient-to-br from-yellow-50/95 to-orange-50/95'
              } border-t ${theme === 'dark' ? 'border-white/20' : 'border-orange-200/50'}`}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* Home, About us, Why Solar */}
                {navItems.slice(0, 3).map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavigation(item.path)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ x: 5, backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 165, 0, 0.1)' }}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                      theme === 'dark'
                        ? 'text-white hover:text-yellow-400'
                        : 'text-gray-700 hover:text-orange-600'
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}

                {/* Mobile Company Dropdown */}
                <div className="company-dropdown-container">
                  <motion.button
                    onClick={toggleCompanyDropdown}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                      theme === 'dark'
                        ? 'text-white hover:text-yellow-400 hover:bg-white/10'
                        : 'text-gray-700 hover:text-orange-600 hover:bg-yellow-100/50'
                    }`}
                  >
                    Company
                    <motion.div
                      animate={{ rotate: isCompanyDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </motion.button>
                  
                  <AnimatePresence>
                    {isCompanyDropdownOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pl-4 space-y-1 mt-2 overflow-hidden"
                      >
                        {companyDropdownItems.map((item, index) => (
                          <motion.button
                            key={item.name}
                            onClick={() => handleNavigation(item.path)}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                            whileHover={{ x: 5 }}
                            className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                              theme === 'dark'
                                ? 'text-gray-300 hover:text-yellow-400 hover:bg-white/5'
                                : 'text-gray-600 hover:text-orange-600 hover:bg-yellow-50'
                            }`}
                          >
                            {item.name}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Remaining nav items */}
                {navItems.slice(3).map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavigation(item.path)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index + 4) * 0.1, duration: 0.3 }}
                    whileHover={{ x: 5, backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 165, 0, 0.1)' }}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                      theme === 'dark'
                        ? 'text-white hover:text-yellow-400'
                        : 'text-gray-700 hover:text-orange-600'
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

// Export the theme utilities and Navbar component
export { useTheme, ThemeProvider };
export default Navbar;
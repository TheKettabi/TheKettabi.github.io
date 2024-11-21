import React, { useState } from 'react';
import { Menu, X, Moon, Sun, Languages } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState('EN');

  const menuItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setIsDark(!isDark);
  const cycleLanguage = () => {
    const langs = ['EN', 'FR', 'AR'];
    const currentIndex = langs.indexOf(language);
    setLanguage(langs[(currentIndex + 1) % langs.length]);
  };

  return (
    <header className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-blue-600 dark:text-blue-400">TB</a>
          
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} 
                 className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 
                           transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={cycleLanguage} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <Languages className="w-5 h-5" />
              <span className="ml-1">{language}</span>
            </button>
          </div>

          <button onClick={toggleMenu} className="md:hidden p-2">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg">
            <div className="flex flex-col space-y-4 px-6 py-4">
              {menuItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} 
                   className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                   onClick={() => setIsOpen(false)}>
                  {item}
                </a>
              ))}
              <div className="flex items-center space-x-4 py-2">
                <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <button onClick={cycleLanguage} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                  <Languages className="w-5 h-5" />
                  <span className="ml-1">{language}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
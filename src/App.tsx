import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set initial language based on browser preference
    const browserLang = navigator.language.split('-')[0];
    i18n.changeLanguage(browserLang);
  }, [i18n]);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
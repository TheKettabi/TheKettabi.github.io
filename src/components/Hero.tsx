import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import cvFile from '../assets/cv.pdf'; // Import the CV file
import profile from '../assets/profil.jpg';
const Hero = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/kettaabii',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/mohammed-amin-elkettabi-261677233/?originalSubdomain=ma',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:mohammedamin.elkettabi@gmail.com',
      label: 'Email'
    }
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Mohammed-Amin-ELKETTABI-cv.pdf'; // Set a default download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-primary dark:text-white mb-4">
              {t('hero.title')}
              <span className="block text-2xl lg:text-3xl text-blue-600 dark:text-blue-400 mt-2">
                {t('hero.subtitle')}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-cta text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                {t('hero.cta.contact')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <button
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-cta text-cta rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-200"
                onClick={handleDownloadCV}
              >
                <Download className="mr-2 w-5 h-5" />
                {t('hero.cta.download')}
              </button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  aria-label={link.label}
                >
                  <link.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <img
                  src={profile}
                  alt="Mohammed Amin EL KETTABI"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 px-6 py-2 rounded-full shadow-lg"
              >
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  Open For New Opportunities
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
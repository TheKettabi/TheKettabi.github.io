import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Users, Lightbulb, Clock } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const softSkills = [
    { icon: Users, name: t('about.softSkills.teamSpirit') },
    { icon: Lightbulb, name: t('about.softSkills.adaptability') },
    { icon: Clock, name: t('about.softSkills.timeManagement') }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">{t('about.title')}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Professional Summary */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <p className="text-lg leading-relaxed">{t('about.summary')}</p>
            </div>

            {/* Background */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{t('about.background.title')}</h3>
              <ul className="space-y-3">
                <li>{t('about.background.training')}</li>
                <li>{t('about.background.degree')}</li>
                <li>{t('about.background.bac')}</li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{t('about.softSkills.title')}</h3>
              <div className="space-y-4">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <skill.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
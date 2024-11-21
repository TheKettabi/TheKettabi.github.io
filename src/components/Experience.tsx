import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ShoppingBag } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Manager',
      company: 'Self-Employed',
      period: '0ct 2024-  Present',
      location: 'Marrakech',
      description: [
        'Management Of the Shop ',
        'Clients Relations ',
      ],
      icon: ShoppingBag
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
          
          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
              >
                <div className="flex items-start">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                    <exp.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      {exp.period} • {exp.location}
                    </p>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
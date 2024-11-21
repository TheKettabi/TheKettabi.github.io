import React from 'react';
import { motion } from 'framer-motion';
import {
  Server,
  Layout,
  Database,
  TestTube,
  CheckCircle
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming languages',
      icon: Server,
      skills: [
        'Java',
        'Spring Boot',
        'Microservices',
        'J2EE',
        'Docker',
        'Jenkins'
      ]
    },
    {
      title: 'Frontend Development',
      icon: Layout,
      skills: [
        'Angular',
        'HTML/CSS/JavaScript',
        'Bootstrap',
        'Responsive Design'
      ]
    },
    {
      title: 'Database & Tools',
      icon: Database,
      skills: [
        'MySQL',
        'Spring Data JPA',
        'Hibernate',
        ' QueryDSL',
        'Git/GitHub',
        'Trello/Jira',
        'StarUML',
        'StarUML',
        'Canva',
        'Figma',
        'WORDPRESS'
      ]
    },
    {
      title: 'Testing & Quality',
      icon: TestTube,
      skills: [
        'JUnit',
        'Mockito',
        'Postman',
        'Swagger',
        'SonarQube',
        'Qodana'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <category.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold dark:text-white">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
                    >
                      <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

import projetImage1 from "../assets/anon.jpg";
import projetImage2 from "../assets/construction.jpg";
import projetImage3 from "../assets/It.png";



const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Web Application Fantasy For Botola Pro',
      description: 'A Fantasy Football application dedicated to the Moroccan Botola league. Users can create teams, add players, view player statistics, and much more. The project is built with Spring Boot 3.3.3 for the backend and Angular 18 for the frontend.',
      image: projetImage1,
      technologies: ['Spring Boot', 'Angular 18', 'Spring WebFlux', ' Spring Batch', ' OAuth2' , Docker],
      category: 'fullstack',
      github: '#'
    },
    {
      title: 'Microservice-ConstructionXpert',
      description: 'A task, resource, and project management application based on a microservices architecture.',
      image: projetImage2,
      technologies: ['Spring Boot', 'Docker', 'MicroServices','Angular 18', 'ElasticSearch'],
      category: 'fullstack',
      github: 'https://github.com/kettaabii/microserviceProject-Part-5-'
    }


   
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              {['all', 'fullstack', 'game'].map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 text-sm font-medium ${
                    filter === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  } border border-gray-200 dark:border-gray-600 first:rounded-l-lg last:rounded-r-lg`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
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

export default Projects;
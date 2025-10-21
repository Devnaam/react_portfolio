// src/components/Project/Project.jsx
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "../../data/projectsData";

function Project() {
  const theme = useSelector((state) => state.themeChanger.value);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = projects.filter((p) => p.featured);
  const displayedProjects = showAll ? projects : featuredProjects;

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <div
      className={`${
        theme ? "text-white bg-black" : "text-black bg-white"
      } min-h-screen py-12 transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Projects That <span className="text-orange-500">Solve Real Problems</span>
          </h1>
          <p className={`text-lg md:text-xl ${theme ? "text-gray-400" : "text-gray-600"}`}>
            From idea to production - see how I build the core engine of modern web businesses
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                project={project}
                onClick={() => openModal(project)}
                theme={theme}
              />
            </motion.div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {projects.length > featuredProjects.length && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className={`${
                theme
                  ? "bg-gray-800 hover:bg-gray-700 text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-black"
              } px-8 py-3 rounded-md font-semibold transition-all duration-300`}
            >
              {showAll ? "Show Less Projects" : `View ${projects.length - featuredProjects.length} More Projects`}
            </button>
          </div>
        )}

        {/* CTA Section */}
        <motion.div
          className={`${
            theme ? "bg-gray-900" : "bg-gray-50"
          } rounded-lg p-8 md:p-12 text-center mt-16`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Your Project?
          </h2>
          <p className={`text-lg mb-6 ${theme ? "text-gray-400" : "text-gray-600"}`}>
            Let's turn your idea into a production-ready web application
          </p>
          <a href="/contact">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Your Free Quote →
            </button>
          </a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
        theme={theme}
      />
    </div>
  );
}

export default Project;

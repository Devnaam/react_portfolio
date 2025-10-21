// src/components/Project/ProjectCard.jsx
import React from "react";
import { motion } from "framer-motion";

function ProjectCard({ project, onClick, theme }) {
  return (
    <motion.div
      onClick={onClick}
      className={`${
        theme ? "bg-gray-900 hover:bg-gray-800" : "bg-gray-50 hover:bg-gray-100"
      } rounded-lg overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl`}
      whileHover={{ y: -10 }}
    >
      {/* Project Image */}
      {project.images && project.images[0] && (
        <div className="h-48 overflow-hidden">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      )}

      {/* Project Content */}
      <div className="p-6">
        {/* Category Badge */}
        <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">
          {project.category}
        </span>

        {/* Title */}
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>

        {/* Tagline */}
        <p className="text-orange-500 font-semibold mb-3">{project.tagline}</p>

        {/* Problem */}
        <p className={`text-sm mb-4 line-clamp-2 ${theme ? "text-gray-400" : "text-gray-600"}`}>
          {project.problem}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className={`text-xs px-2 py-1 rounded ${
                theme ? "bg-gray-800 text-gray-300" : "bg-gray-200 text-gray-700"
              }`}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span
              className={`text-xs px-2 py-1 rounded ${
                theme ? "bg-gray-800 text-gray-300" : "bg-gray-200 text-gray-700"
              }`}
            >
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* CTA Button */}
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md font-semibold transition-colors duration-300">
          View Full Case Study →
        </button>
      </div>
    </motion.div>
  );
}

export default ProjectCard;

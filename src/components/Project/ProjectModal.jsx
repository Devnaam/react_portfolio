import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import Slider from "react-slick";

import RentFairCaseStudy from "./CaseStudies/RentFairCaseStudy";
import SkillExchangeCaseStudy from "./CaseStudies/SkillExchangeCaseStudy";
import ResumeBuilderCaseStudy from "./CaseStudies/ResumeBuilderCaseStudy";
import FinanceAnalyzerCaseStudy from "./CaseStudies/FinanceAnalyzerCaseStudy";
import CollegeManagementCaseStudy from "./CaseStudies/CollegeManagementCaseStudy";

// Import case study components
import InventoryAICaseStudy from "./CaseStudies/InventoryAICaseStudy";
// import RentFairCaseStudy from "./CaseStudies/RentFairCaseStudy"; // Add when created

// Map component names to actual components
const caseStudyComponents = {
  InventoryAICaseStudy,
  RentFairCaseStudy,
  SkillExchangeCaseStudy,
  ResumeBuilderCaseStudy,
  FinanceAnalyzerCaseStudy,
  CollegeManagementCaseStudy,
};

function ProjectModal({ project, isOpen, onClose, theme }) {
  if (!isOpen || !project) return null;

  // Only show slider if there are multiple valid images
  const hasValidImages = project.images && project.images.length > 0 && project.images[0] !== "";
  const hasMultipleImages = hasValidImages && project.images.length > 1;

  const sliderSettings = {
    dots: true,
    infinite: hasMultipleImages,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: hasMultipleImages,
    adaptiveHeight: true,
  };

  // Get the case study component if it exists
  const CaseStudyComponent = project.caseStudyComponent 
    ? caseStudyComponents[project.caseStudyComponent] 
    : null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className={`fixed inset-4 md:inset-8 lg:top-[5%] lg:left-1/2 lg:transform lg:-translate-x-1/2 
              lg:w-[90%] lg:max-w-5xl lg:max-h-[90vh] 
              overflow-y-auto overflow-x-hidden ${
                theme ? "bg-gray-900 text-white" : "bg-white text-black"
              } rounded-lg shadow-2xl z-50`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 md:p-6 lg:p-8 max-w-full">
              {/* Close Button */}
              <button
                onClick={onClose}
                className={`fixed top-4 right-4 md:absolute p-2 rounded-full z-10 ${
                  theme ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-200 hover:bg-gray-300"
                } transition-colors duration-300`}
              >
                <FaTimes className="text-lg md:text-xl" />
              </button>

              {/* Project Header */}
              <div className="mb-6 pr-10">
                <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
                  {project.category}
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 mb-2 break-words">
                  {project.title}
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-orange-500 font-semibold mb-4 break-words">
                  {project.tagline}
                </p>

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-semibold transition-all duration-300 text-sm md:text-base"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 ${
                        theme
                          ? "bg-gray-800 hover:bg-gray-700"
                          : "bg-gray-200 hover:bg-gray-300"
                      } px-4 py-2 rounded-md font-semibold transition-all duration-300 text-sm md:text-base`}
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* Image Section */}
              {hasValidImages && (
                <div className="mb-8">
                  {hasMultipleImages ? (
                    <Slider {...sliderSettings}>
                      {project.images.map((img, index) => (
                        <div key={index}>
                          <img
                            src={img}
                            alt={`${project.title} screenshot ${index + 1}`}
                            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-lg"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        </div>
                      ))}
                    </Slider>
                  ) : (
                    <img
                      src={project.images[0]}
                      alt={`${project.title} screenshot`}
                      className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-lg"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  )}
                </div>
              )}

              {/* MAIN CONTENT - Use Case Study Component or Fallback */}
              {CaseStudyComponent ? (
                // Render styled case study component
                <CaseStudyComponent theme={theme} />
              ) : (
                // Fallback: Simple sections if no case study component exists
                <>
                  {/* Problem Section */}
                  <div className="mb-8">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
                      <span className="text-orange-500">🎯</span> The Challenge
                    </h3>
                    <p className={`text-base md:text-lg mb-4 break-words ${theme ? "text-gray-300" : "text-gray-700"}`}>
                      {project.problem}
                    </p>
                  </div>

                  {/* Solution Section */}
                  <div className="mb-8">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
                      <span className="text-orange-500">💡</span> My Solution
                    </h3>
                    <p className={`text-base md:text-lg mb-4 break-words ${theme ? "text-gray-300" : "text-gray-700"}`}>
                      {project.solution}
                    </p>
                  </div>

                  {/* Results Section */}
                  <div className="mb-8">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
                      <span className="text-orange-500">📈</span> Results & Impact
                    </h3>
                    <div className="space-y-3">
                      {project.results.map((result, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <svg
                            className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0 mt-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className={`text-base md:text-lg break-words ${theme ? "text-gray-300" : "text-gray-700"}`}>
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Technologies Section - Always Show */}
              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`${
                        theme ? "bg-gray-800 text-gray-300" : "bg-gray-200 text-gray-800"
                      } px-3 py-1 rounded-full text-xs md:text-sm font-semibold`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Section - Always Show */}
              <div className={`border-t ${theme ? "border-gray-800" : "border-gray-200"} pt-6`}>
                <h3 className="text-lg md:text-xl font-bold mb-2 break-words">
                  Need Something Similar?
                </h3>
                <p className={`mb-4 text-sm md:text-base break-words ${theme ? "text-gray-400" : "text-gray-600"}`}>
                  I can build a custom solution tailored to your business needs
                </p>
                <a href="/contact">
                  <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 text-sm md:text-base">
                    Let's Discuss Your Project →
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default ProjectModal;

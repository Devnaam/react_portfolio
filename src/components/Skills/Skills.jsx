// src/components/Skills/Skills.jsx
import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Skills() {
  const theme = useSelector((state) => state.themeChanger.value);

  const services = [
    {
      id: 1,
      icon: "🎨",
      title: "Fast, Interactive Interfaces",
      description: "Modern frontend that loads instantly and works flawlessly on every device",
      benefits: [
        "Responsive design that adapts to mobile, tablet, and desktop",
        "Lightning-fast page loads with optimized performance",
        "Smooth animations and user-friendly interactions"
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "Redux", "Framer Motion"],
      example: "Like RentFair's real-time property search with instant filtering"
    },
    {
      id: 2,
      icon: "⚙️",
      title: "Scalable Backend Systems",
      description: "Robust server architecture that handles growth from day one",
      benefits: [
        "RESTful APIs with secure authentication",
        "Database design optimized for performance",
        "File uploads, email systems, and background jobs"
      ],
      technologies: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma"],
      example: "Like Skill Exchange's user matching engine with 1000+ concurrent users"
    },
    {
      id: 3,
      icon: "🤖",
      title: "AI-Powered Features",
      description: "Intelligent automation that makes your product stand out",
      benefits: [
        "Natural language query processing",
        "Smart recommendations and pattern recognition",
        "Chatbots and conversational interfaces"
      ],
      technologies: ["Gemini API", "OpenAI", "Custom ML Models"],
      example: "Like Inventory AI that answers 'What are my top-selling products?' in plain English"
    },
    {
      id: 4,
      icon: "🗺️",
      title: "Real-Time Data & Maps",
      description: "Location-based features and live updates that engage users",
      benefits: [
        "Interactive maps with custom markers",
        "Real-time notifications and live data feeds",
        "Geolocation and proximity search"
      ],
      technologies: ["Mapbox", "WebSockets", "Real-time APIs"],
      example: "Like RentFair's 'Find PGs near me' with live availability status"
    },
    {
      id: 5,
      icon: "🔐",
      title: "Secure Authentication Systems",
      description: "User management that keeps data safe and login seamless",
      benefits: [
        "Email/password, OAuth, and magic link authentication",
        "Role-based access control (Admin, User, etc.)",
        "Session management and secure token handling"
      ],
      technologies: ["NextAuth.js", "JWT", "OAuth 2.0", "Bcrypt"],
      example: "Like Skill Exchange's multi-role system with teacher/student profiles"
    },
    {
      id: 6,
      icon: "🚀",
      title: "Deployment & DevOps",
      description: "From local development to live production with zero downtime",
      benefits: [
        "Automated CI/CD pipelines",
        "Cloud hosting on Vercel, Render, or AWS",
        "Version control and collaborative development"
      ],
      technologies: ["Git", "GitHub", "Vercel", "Render", "Docker"],
      example: "All my projects deployed with custom domains and SSL certificates"
    }
  ];

  return (
    <div
      className={`${
        theme ? "text-white bg-black" : "text-black bg-white"
      } min-h-screen py-12 transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Services & <span className="text-orange-500">Capabilities</span>
          </h1>
          <p className={`text-lg md:text-xl ${theme ? "text-gray-400" : "text-gray-600"}`}>
            Everything you need to build a production-ready web application
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`${
                theme ? "bg-gray-900" : "bg-gray-50"
              } rounded-lg p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="grid md:grid-cols-3 gap-6">
                {/* Left: Icon & Title */}
                <div className="md:col-span-1">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                  <p className={`${theme ? "text-gray-400" : "text-gray-600"}`}>
                    {service.description}
                  </p>
                </div>

                {/* Middle: Benefits */}
                <div className="md:col-span-1">
                  <h3 className="text-lg font-bold mb-3 text-orange-500">
                    What You Get:
                  </h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Example */}
                  <div className={`mt-4 p-3 rounded-md ${theme ? "bg-gray-800" : "bg-white"}`}>
                    <p className={`text-sm italic ${theme ? "text-gray-400" : "text-gray-600"}`}>
                      <span className="font-semibold text-orange-500">Real example:</span> {service.example}
                    </p>
                  </div>
                </div>

                {/* Right: Technologies */}
                <div className="md:col-span-1">
                  <h3 className="text-lg font-bold mb-3 text-orange-500">
                    Technologies:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`${
                          theme ? "bg-gray-800 text-gray-300" : "bg-gray-200 text-gray-800"
                        } px-3 py-1 rounded-full text-sm font-semibold`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Mini CTA */}
                  <div className="mt-6">
                    <Link to="/contact">
                      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md font-semibold transition-all duration-300">
                        Need This? Let's Talk →
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full-Stack Badge Section */}
        <motion.div
          className={`${
            theme ? "bg-gray-900" : "bg-gray-50"
          } rounded-lg p-8 md:p-12 text-center mt-16`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Full-Stack <span className="text-orange-500">Development</span>
          </h2>
          <p className={`text-lg mb-8 ${theme ? "text-gray-400" : "text-gray-600"}`}>
            I handle everything from database design to pixel-perfect UI, so you get a complete solution
          </p>

          {/* Visual Tech Stack */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-bold mb-2 text-orange-500">Frontend</h3>
              <p className={`text-sm ${theme ? "text-gray-400" : "text-gray-600"}`}>
                React, Next.js, Tailwind CSS
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-orange-500">Backend</h3>
              <p className={`text-sm ${theme ? "text-gray-400" : "text-gray-600"}`}>
                Node.js, Express, API Design
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-orange-500">Database</h3>
              <p className={`text-sm ${theme ? "text-gray-400" : "text-gray-600"}`}>
                PostgreSQL, MongoDB, Prisma
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-orange-500">Deployment</h3>
              <p className={`text-sm ${theme ? "text-gray-400" : "text-gray-600"}`}>
                Vercel, Render, Git/GitHub
              </p>
            </div>
          </div>
        </motion.div>

        {/* Design Tools Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className={`${theme ? "bg-gray-900" : "bg-gray-50"} rounded-lg p-6`}>
            <h3 className="text-xl font-bold mb-3">
              <span className="text-orange-500">Design</span> Tools
            </h3>
            <p className={`mb-4 ${theme ? "text-gray-400" : "text-gray-600"}`}>
              I can work with your designer or create clean, functional UIs from scratch
            </p>
            <div className="flex flex-wrap gap-2">
              <span className={`${theme ? "bg-gray-800" : "bg-gray-200"} px-3 py-1 rounded-full text-sm`}>
                Figma
              </span>
              <span className={`${theme ? "bg-gray-800" : "bg-gray-200"} px-3 py-1 rounded-full text-sm`}>
                Canva
              </span>
              <span className={`${theme ? "bg-gray-800" : "bg-gray-200"} px-3 py-1 rounded-full text-sm`}>
                Responsive Design
              </span>
            </div>
          </div>

          <div className={`${theme ? "bg-gray-900" : "bg-gray-50"} rounded-lg p-6`}>
            <h3 className="text-xl font-bold mb-3">
              <span className="text-orange-500">Development</span> Tools
            </h3>
            <p className={`mb-4 ${theme ? "text-gray-400" : "text-gray-600"}`}>
              Professional workflow with version control, testing, and documentation
            </p>
            <div className="flex flex-wrap gap-2">
              <span className={`${theme ? "bg-gray-800" : "bg-gray-200"} px-3 py-1 rounded-full text-sm`}>
                VS Code
              </span>
              <span className={`${theme ? "bg-gray-800" : "bg-gray-200"} px-3 py-1 rounded-full text-sm`}>
                Postman
              </span>
              <span className={`${theme ? "bg-gray-800" : "bg-gray-200"} px-3 py-1 rounded-full text-sm`}>
                npm/yarn
              </span>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="text-center py-12 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Not Sure What You Need?
          </h3>
          <p className={`mb-6 text-lg ${theme ? "text-gray-400" : "text-gray-600"}`}>
            Let's discuss your project and I'll recommend the right tech stack
          </p>
          <Link to="/contact">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Schedule Free Consultation →
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;

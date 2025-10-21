// src/components/Achievement/Achievement.jsx
import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Import images
import sih from "/assets/sih.jpg";
import acm from "/assets/acm.png";
import nasa_space_app from "/assets/NASA_spaceApp.jpg";
import hacktoberfest from "/assets/hacktoberfest.jpeg";

function Achievement() {
  const theme = useSelector((state) => state.themeChanger.value);

  const achievements = [
    {
      id: 1,
      title: "NASA Space Apps Challenge",
      subtitle: "Locard Award Winner",
      description: "Won local award at world's largest global hackathon for building an AI-assisted mapping platform in 72 hours. Competed against 1000+ teams globally.",
      impact: "Proved ability to deliver under tight deadlines with innovative solutions",
      image: nasa_space_app,
      date: "2024",
      category: "Global Competition"
    },
    {
      id: 2,
      title: "Smart India Hackathon 2023",
      subtitle: "National-Level Participant",
      description: "Worked with team on real-world problems, showcased innovative tech solutions, and gained national-level exposure through certificate recognition.",
      impact: "Experience in collaborative problem-solving at scale",
      image: sih,
      date: "2023",
      category: "National Hackathon"
    },
    {
      id: 3,
      title: "Agentic AI Hackathon",
      subtitle: "Guinness World Record Participant",
      description: "Built AI-powered financial assistant using Gemini 2.5 Pro and Vertex AI with 1,941+ developers. Integrated Fi Money's MCP Server for secure financial insights.",
      impact: "Expertise in cutting-edge AI integration and API development",
      image: "/assets/agenitc2.jpg",
      date: "2025",
      category: "AI Development"
    },
    {
      id: 4,
      title: "ACM Secretary Position",
      subtitle: "College Leadership Role",
      description: "Led ACM student chapter, coordinated tech events and workshops, managed communications, and promoted computer science activities within college.",
      impact: "Strong project management and team coordination skills",
      image: acm,
      date: "2024",
      category: "Leadership"
    },
    {
      id: 5,
      title: "Arduino Innovation Award",
      subtitle: "First Prize Winner",
      description: "Created water automation system that autonomously refills tanks and manages motors based on water levels. Demonstrated IoT and hardware integration skills.",
      impact: "Ability to build complete solutions from hardware to software",
      image: "/assets/ardunio1.jpg",
      date: "2023",
      category: "IoT Project"
    },
    {
      id: 6,
      title: "Open Source Contributions",
      subtitle: "Hacktoberfest Participant",
      description: "Active contributor to open-source projects, demonstrating code quality, collaboration, and commitment to the developer community.",
      impact: "Proven experience in professional code review processes",
      image: hacktoberfest,
      date: "2023-2024",
      category: "Open Source"
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
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Proven <span className="text-orange-500">Track Record</span>
          </h1>
          <p className={`text-lg md:text-xl ${theme ? "text-gray-400" : "text-gray-600"}`}>
            Awards, competitions, and recognitions that prove my capabilities
          </p>
        </motion.div>

        {/* Trust Stats */}
        <motion.div
          className={`${
            theme ? "bg-gray-900" : "bg-gray-50"
          } rounded-lg p-8 mb-12`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-500">6+</div>
              <div className={theme ? "text-gray-400" : "text-gray-600"}>
                Major Awards
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500">1000+</div>
              <div className={theme ? "text-gray-400" : "text-gray-600"}>
                Developers Competed
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500">NASA</div>
              <div className={theme ? "text-gray-400" : "text-gray-600"}>
                Global Recognition
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500">72hrs</div>
              <div className={theme ? "text-gray-400" : "text-gray-600"}>
                Fastest Delivery
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className={`${
                theme ? "bg-gray-900" : "bg-gray-50"
              } rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {achievement.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className={`text-sm mb-2 ${theme ? "text-gray-500" : "text-gray-500"}`}>
                  {achievement.date}
                </div>
                <h3 className="text-xl font-bold mb-1">{achievement.title}</h3>
                <p className="text-orange-500 font-semibold mb-3 text-sm">
                  {achievement.subtitle}
                </p>
                <p className={`text-sm mb-4 ${theme ? "text-gray-400" : "text-gray-600"}`}>
                  {achievement.description}
                </p>

                {/* Impact Badge */}
                <div className={`p-3 rounded-md ${theme ? "bg-gray-800" : "bg-white"}`}>
                  <p className="text-xs font-semibold text-orange-500 mb-1">
                    Why This Matters to You:
                  </p>
                  <p className={`text-xs ${theme ? "text-gray-400" : "text-gray-600"}`}>
                    {achievement.impact}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What This Means for Clients */}
        <motion.div
          className={`${
            theme ? "bg-gray-900" : "bg-gray-50"
          } rounded-lg p-8 md:p-12 mt-16`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            What This Means <span className="text-orange-500">For Your Project</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold mb-2">Fast Execution</h3>
              <p className={`text-sm ${theme ? "text-gray-400" : "text-gray-600"}`}>
                Hackathon experience means I deliver quality code under tight deadlines
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-bold mb-2">Proven Quality</h3>
              <p className={`text-sm ${theme ? "text-gray-400" : "text-gray-600"}`}>
                Award-winning projects demonstrate attention to detail and innovation
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-bold mb-2">Team Player</h3>
              <p className={`text-sm ${theme ? "text-gray-400" : "text-gray-600"}`}>
                Leadership roles prove I communicate well and collaborate effectively
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Work With an Award-Winning Developer →
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Achievement;

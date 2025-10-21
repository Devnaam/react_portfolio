// src/components/TrustBadges/TrustBadges.jsx
import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { FaTrophy, FaRocket, FaBolt, FaBriefcase } from "react-icons/fa";

function TrustBadges() {
  const theme = useSelector((state) => state.themeChanger.value);

  const badges = [
    {
      icon: <FaTrophy className="text-4xl md:text-5xl text-orange-500" />,
      title: "NASA Award Winner",
      subtitle: "Space Apps Challenge 2024",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <FaRocket className="text-4xl md:text-5xl text-blue-500" />,
      title: "10,000+",
      subtitle: "Resume downloads",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaBolt className="text-4xl md:text-5xl text-yellow-500" />,
      title: "1 Week",
      subtitle: "Average turnaround",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <FaBriefcase className="text-4xl md:text-5xl text-green-500" />,
      title: "15+ Projects",
      subtitle: "Production-ready",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className={`py-16 ${theme ? "bg-black" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="text-orange-500">Thousands</span>
          </h2>
          <p className={`text-lg ${theme ? "text-gray-400" : "text-gray-600"}`}>
            Proven track record of delivering quality projects on time
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${
                theme ? "bg-gray-900" : "bg-white"
              } rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="flex justify-center mb-4">
                {badge.icon}
              </div>
              <h3 className={`text-xl md:text-2xl font-bold mb-2 ${theme ? "text-white" : "text-black"}`}>
                {badge.title}
              </h3>
              <p className={`text-sm ${theme ? "text-gray-400" : "text-gray-600"}`}>
                {badge.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustBadges;

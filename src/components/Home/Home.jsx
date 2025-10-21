import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import me from "/assets/me.jpg";
import { motion } from "framer-motion";

function Home() {
  const theme = useSelector((state) => state.themeChanger.value);

  return (
    <div
      className={`${
        theme ? "text-white bg-black" : "text-black bg-white"
      } min-h-screen transition-colors duration-500`}
    >
      {/* Hero Section */}
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-between gap-12 py-12 lg:py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              I Build the Core Engine of Your{" "}
              <span className="text-orange-500">Web Business</span>
            </h1>
          </motion.div>

          <motion.p
            className={`text-lg lg:text-xl ${
              theme ? "text-gray-300" : "text-gray-700"
            }`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Full-stack developer specializing in data-driven platforms with
            complex features. From MVP to scale, I turn your business logic into
            clean, production-ready code.
          </motion.p>

          {/* Key Benefits */}
          <motion.div
            className="space-y-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <svg
                className="w-6 h-6 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className={theme ? "text-gray-300" : "text-gray-700"}>
                Modern tech stack: React, Next.js, PostgreSQL, AI integration
              </span>
            </div>
            <div className="flex items-center gap-3">
              <svg
                className="w-6 h-6 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className={theme ? "text-gray-300" : "text-gray-700"}>
                End-to-end development: Database design to deployment
              </span>
            </div>
            <div className="flex items-center gap-3">
              <svg
                className="w-6 h-6 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className={theme ? "text-gray-300" : "text-gray-700"}>
                Fast delivery: Clean code, documented, ready to scale
              </span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="flex gap-4 pt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link to="/contact">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Your Free Quote →
              </button>
            </Link>
            <Link to="/projects">
              <button
                className={`${
                  theme
                    ? "border-white text-white hover:bg-white hover:text-black"
                    : "border-black text-black hover:bg-black hover:text-white"
                } border-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300`}
              >
                View My Work
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <img
            src={me}
            alt="Devnaam Priyadershi"
            className="rounded-full w-72 h-72 lg:w-96 lg:h-96 object-cover shadow-2xl animate-scale border-4 border-orange-500"
          />
        </motion.div>
      </motion.div>

      {/* Trust Indicators Bar */}
      <motion.div
        className={`${
          theme ? "bg-gray-900" : "bg-gray-100"
        } rounded-lg p-8 mt-12`}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-orange-500">15+</div>
            <div className={theme ? "text-gray-400" : "text-gray-600"}>
              Production Apps Built
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-500">NASA</div>
            <div className={theme ? "text-gray-400" : "text-gray-600"}>
              Space Apps Winner
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-500">100%</div>
            <div className={theme ? "text-gray-400" : "text-gray-600"}>
              Client Satisfaction
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-500">24hrs</div>
            <div className={theme ? "text-gray-400" : "text-gray-600"}>
              Response Time
            </div>
          </div>
        </div>
      </motion.div>

      {/* What I Can Build For You Section */}
      <motion.div
        className="py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          What I Can Build <span className="text-orange-500">For You</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            className={`${
              theme ? "bg-gray-900" : "bg-gray-50"
            } p-6 rounded-lg hover:shadow-xl transition-shadow duration-300`}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-3">SaaS Platforms</h3>
            <p className={theme ? "text-gray-400" : "text-gray-600"}>
              Multi-user systems with authentication, real-time data, and secure
              payment integration. Like my Skill Exchange platform.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className={`${
              theme ? "bg-gray-900" : "bg-gray-50"
            } p-6 rounded-lg hover:shadow-xl transition-shadow duration-300`}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-3">AI-Powered Tools</h3>
            <p className={theme ? "text-gray-400" : "text-gray-600"}>
              Natural language interfaces, chatbots, and intelligent automation.
              Like my Inventory AI that processes complex queries.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className={`${
              theme ? "bg-gray-900" : "bg-gray-50"
            } p-6 rounded-lg hover:shadow-xl transition-shadow duration-300`}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3">Data-Driven Apps</h3>
            <p className={theme ? "text-gray-400" : "text-gray-600"}>
              Complex dashboards, analytics, and real-time mapping features. Like
              RentFair's location-based PG finder.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Final CTA */}
      <motion.div
        className="text-center py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <h3 className="text-2xl font-bold mb-4">
          Ready to Build Your Next Web Application?
        </h3>
        <p className={`mb-6 ${theme ? "text-gray-400" : "text-gray-600"}`}>
          Let's discuss your project and get started within 48 hours
        </p>
        <Link to="/contact">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Schedule Free Consultation
          </button>
        </Link>
      </motion.div>
    </div>
  );
}

export default Home;

// src/components/Footer/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useSelector } from "react-redux";

export default function Footer() {
  const theme = useSelector((state) => state.themeChanger.value);

  return (
    <footer
      className={`${
        theme ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Top Section: CTA */}
        <div className={`${theme ? "bg-black" : "bg-white"} rounded-lg p-8 mb-12 text-center`}>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your <span className="text-orange-500">Project?</span>
          </h3>
          <p className={`mb-6 ${theme ? "text-gray-400" : "text-gray-600"}`}>
            Get a free consultation and detailed proposal within 24 hours
          </p>
          <Link to="/contact">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Your Free Quote →
            </button>
          </Link>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: About */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Proups</h2>
            <p className={`${theme ? "text-gray-400" : "text-gray-600"} mb-4`}>
              Full-stack developer building the core engine of modern web businesses.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  theme ? "hover:text-orange-500" : "hover:text-orange-600"
                } transition-colors duration-300`}
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  theme ? "hover:text-orange-500" : "hover:text-orange-600"
                } transition-colors duration-300`}
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  theme ? "hover:text-orange-500" : "hover:text-orange-600"
                } transition-colors duration-300`}
              >
                <FaXTwitter className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className={`${
                    theme ? "text-gray-400 hover:text-orange-500" : "text-gray-600 hover:text-orange-600"
                  } transition-colors duration-300`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className={`${
                    theme ? "text-gray-400 hover:text-orange-500" : "text-gray-600 hover:text-orange-600"
                  } transition-colors duration-300`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/skills"
                  className={`${
                    theme ? "text-gray-400 hover:text-orange-500" : "text-gray-600 hover:text-orange-600"
                  } transition-colors duration-300`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/achievements"
                  className={`${
                    theme ? "text-gray-400 hover:text-orange-500" : "text-gray-600 hover:text-orange-600"
                  } transition-colors duration-300`}
                >
                  Achievements
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className={`${
                    theme ? "text-gray-400 hover:text-orange-500" : "text-gray-600 hover:text-orange-600"
                  } transition-colors duration-300`}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">What I Build</h3>
            <ul className={`space-y-2 ${theme ? "text-gray-400" : "text-gray-600"}`}>
              <li>SaaS Platforms</li>
              <li>AI-Powered Tools</li>
              <li>Data-Driven Apps</li>
              <li>E-commerce Solutions</li>
              <li>Custom Web Applications</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:your.email@example.com"
                  className={`flex items-center gap-2 ${
                    theme ? "text-gray-400 hover:text-orange-500" : "text-gray-600 hover:text-orange-600"
                  } transition-colors duration-300`}
                >
                  <FaEnvelope /> Email Me
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/YOUR_NUMBER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 ${
                    theme ? "text-gray-400 hover:text-orange-500" : "text-gray-600 hover:text-orange-600"
                  } transition-colors duration-300`}
                >
                  <FaWhatsapp /> WhatsApp
                </a>
              </li>
            </ul>
            <div className={`mt-4 p-3 rounded-md ${theme ? "bg-gray-800" : "bg-white"}`}>
              <p className="text-sm font-semibold text-orange-500">24-Hour Response</p>
              <p className={`text-xs ${theme ? "text-gray-400" : "text-gray-600"}`}>
                You'll hear back within 1 business day
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`border-t ${
            theme ? "border-gray-800" : "border-gray-300"
          } pt-6 flex flex-col md:flex-row justify-between items-center gap-4`}
        >
          <p className={`${theme ? "text-gray-400" : "text-gray-600"} text-sm`}>
            © {new Date().getFullYear()} Proups. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              to="/contact"
              className={`${
                theme ? "text-gray-400 hover:text-orange-500" : "text-gray-600 hover:text-orange-600"
              } transition-colors duration-300`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

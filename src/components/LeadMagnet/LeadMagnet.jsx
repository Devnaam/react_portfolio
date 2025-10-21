// src/components/LeadMagnet/LeadMagnet.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { FaDownload, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { enqueueSnackbar } from "notistack";

function LeadMagnet() {
  const theme = useSelector((state) => state.themeChanger.value);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      enqueueSnackbar("Please enter a valid email", { variant: "error" });
      return;
    }

    setLoading(true);

    // Send to your email collection service (e.g., Google Sheets API, EmailJS, etc.)
    try {
      // For now, we'll just simulate submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setSubmitted(true);
      enqueueSnackbar("Success! Check your email for the download link", { variant: "success" });
      
      // Track conversion in Google Analytics
      if (window.gtag) {
        window.gtag('event', 'lead_magnet_download', {
          'event_category': 'Lead Generation',
          'event_label': 'Checklist Download'
        });
      }
    } catch (error) {
      enqueueSnackbar("Something went wrong. Please try again!", { variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={`py-16 ${theme ? "bg-gray-900" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute transform rotate-12 -top-10 -right-10 w-40 h-40 bg-white rounded-full"></div>
            <div className="absolute transform -rotate-12 -bottom-10 -left-10 w-60 h-60 bg-white rounded-full"></div>
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Content */}
            <div className="text-white">
              <div className="inline-block bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                🎁 FREE RESOURCE
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Full-Stack Development Checklist
              </h2>
              <p className="text-lg mb-6 text-orange-50">
                My proven checklist for building production-ready web applications. Covers planning, development, testing, and deployment.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-white flex-shrink-0" />
                  <span className="text-orange-50">40+ actionable checkpoints</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-white flex-shrink-0" />
                  <span className="text-orange-50">Database design best practices</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-white flex-shrink-0" />
                  <span className="text-orange-50">Security & performance tips</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-white flex-shrink-0" />
                  <span className="text-orange-50">Deployment & monitoring guide</span>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className={`${theme ? "bg-gray-900" : "bg-white"} rounded-xl p-6 md:p-8 shadow-xl`}>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className={`text-xl font-bold mb-4 ${theme ? "text-white" : "text-black"}`}>
                    Download Your Free Copy
                  </h3>
                  
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${
                      theme
                        ? "bg-gray-800 border-gray-700 text-white"
                        : "bg-gray-50 border-gray-200 text-black"
                    } focus:outline-none focus:ring-2 focus:ring-orange-500`}
                  />
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        <FaDownload /> Download Free Checklist
                      </>
                    )}
                  </button>

                  <p className={`text-xs text-center ${theme ? "text-gray-400" : "text-gray-500"}`}>
                    No spam. Unsubscribe anytime. 🔒
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
                  <h3 className={`text-2xl font-bold mb-2 ${theme ? "text-white" : "text-black"}`}>
                    Success! 🎉
                  </h3>
                  <p className={`mb-6 ${theme ? "text-gray-300" : "text-gray-600"}`}>
                    Check your email for the download link. It should arrive within 5 minutes.
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                  >
                    Have a project in mind? Let's talk <FaArrowRight />
                  </a>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default LeadMagnet;

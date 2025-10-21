// src/components/ExitIntent/ExitIntent.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { FaTimes, FaRocket } from "react-icons/fa";
import { enqueueSnackbar } from "notistack";

function ExitIntent() {
  const theme = useSelector((state) => state.themeChanger.value);
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Only show on desktop (mobile users don't trigger mouse leave)
    if (window.innerWidth < 768) return;

    // Check if already shown in this session
    if (sessionStorage.getItem("exitIntentShown")) return;

    let timeout;

    const handleMouseLeave = (e) => {
      // Trigger only when mouse leaves from top (not sides/bottom)
      if (e.clientY <= 0) {
        // Small delay to avoid accidental triggers
        timeout = setTimeout(() => {
          setShow(true);
          sessionStorage.setItem("exitIntentShown", "true");
          
          // Track in Google Analytics
          if (window.gtag) {
            window.gtag('event', 'exit_intent_shown', {
              'event_category': 'Engagement',
              'event_label': 'Exit Intent Popup'
            });
          }
        }, 300);
      }
    };

    const handleMouseEnter = () => {
      clearTimeout(timeout);
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      enqueueSnackbar("Please enter a valid email", { variant: "error" });
      return;
    }

    setLoading(true);

    try {
      // Simulate submission (integrate with your email service)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      enqueueSnackbar("Success! We'll send your quote within 24 hours", { variant: "success" });
      
      // Track conversion
      if (window.gtag) {
        window.gtag('event', 'exit_intent_conversion', {
          'event_category': 'Lead Generation',
          'event_label': 'Free Estimate Request'
        });
      }

      setShow(false);
    } catch (error) {
      enqueueSnackbar("Something went wrong. Please try again!", { variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setShow(false);
    
    // Track close event
    if (window.gtag) {
      window.gtag('event', 'exit_intent_dismissed', {
        'event_category': 'Engagement',
        'event_label': 'Popup Closed'
      });
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className={`${
                theme ? "bg-gray-900" : "bg-white"
              } rounded-2xl max-w-lg w-full p-8 relative shadow-2xl`}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className={`absolute top-4 right-4 p-2 rounded-full ${
                  theme ? "hover:bg-gray-800" : "hover:bg-gray-100"
                } transition-colors`}
              >
                <FaTimes className={theme ? "text-gray-400" : "text-gray-600"} />
              </button>

              {/* Icon */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-4">
                  <FaRocket className="text-3xl text-white" />
                </div>
                <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${theme ? "text-white" : "text-black"}`}>
                  Wait! Before You Go...
                </h3>
                <p className={`text-base ${theme ? "text-gray-300" : "text-gray-600"}`}>
                  Get a <span className="text-orange-500 font-bold">free project estimate</span> within 24 hours
                </p>
              </div>

              {/* Benefits */}
              <div className={`mb-6 space-y-2 ${theme ? "text-gray-300" : "text-gray-700"}`}>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">No commitment required</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">Detailed breakdown of timeline & cost</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">Free consultation call included</span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
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
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Get Free Estimate →"}
                </button>
              </form>

              {/* No Thanks */}
              <button
                onClick={handleClose}
                className={`text-sm ${
                  theme ? "text-gray-400 hover:text-gray-300" : "text-gray-500 hover:text-gray-600"
                } mt-4 w-full transition-colors`}
              >
                No thanks, I'll browse more
              </button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default ExitIntent;

// src/components/Testimonials/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

function Testimonials() {
  const theme = useSelector((state) => state.themeChanger.value);

  const results = [
    {
      quote: "RentFair reduced our PG search time from 3 weeks to just 3 days. The location-based search is incredibly accurate!",
      author: "Anonymous Student",
      role: "2,000+ Students Using Platform",
      rating: 5,
      projectLink: "/projects"
    },
    {
      quote: "The Resume Builder helped me create an ATS-friendly resume in 10 minutes. Got my first interview call within a week!",
      author: "Job Seeker",
      role: "10,000+ Downloads",
      rating: 5,
      projectLink: "/projects"
    },
    {
      quote: "Our inventory management became 10x easier. Natural language queries save us hours every week. Highly recommend!",
      author: "Small Business Owner",
      role: "Using Inventory AI Assistant",
      rating: 5,
      projectLink: "/projects"
    }
  ];

  return (
    <section className={`py-16 ${theme ? "bg-gray-900" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What <span className="text-orange-500">Results</span> Say
          </h2>
          <p className={`text-lg ${theme ? "text-gray-400" : "text-gray-600"}`}>
            Real impact from real projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${
                theme ? "bg-gray-800" : "bg-gray-50"
              } rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              <FaQuoteLeft className="text-3xl text-orange-500 mb-4" />
              
              <p className={`text-base mb-6 leading-relaxed ${theme ? "text-gray-300" : "text-gray-700"}`}>
                "{result.quote}"
              </p>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(result.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>

              <div className={`border-t ${theme ? "border-gray-700" : "border-gray-200"} pt-4`}>
                <p className={`font-bold ${theme ? "text-white" : "text-black"}`}>
                  {result.author}
                </p>
                <p className={`text-sm ${theme ? "text-gray-400" : "text-gray-600"}`}>
                  {result.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

// src/components/Pricing/Pricing.jsx
import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { FaCheck, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Pricing() {
  const theme = useSelector((state) => state.themeChanger.value);

  const plans = [
    {
      name: "Small Project",
      price: "₹5,000 - ₹20,000",
      timeline: "1 week delivery",
      features: [
        "Landing pages",
        "Portfolio websites",
        "Simple web apps",
        "Responsive design",
        "Basic SEO",
        "2 weeks free support"
      ],
      popular: false
    },
    {
      name: "Medium Project",
      price: "₹20,000 - ₹50,000",
      timeline: "2-3 weeks delivery",
      features: [
        "Web applications",
        "Admin dashboards",
        "Database integration",
        "API development",
        "Advanced features",
        "1 month free support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹50,000 - ₹1,00,000+",
      timeline: "1+ month delivery",
      features: [
        "SaaS platforms",
        "AI tool integration",
        "Complex systems",
        "Scalable architecture",
        "Real-time features",
        "3 months free support"
      ],
      popular: false
    }
  ];

  return (
    <section className={`py-16 ${theme ? "bg-black" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Investment <span className="text-orange-500">Ranges</span>
          </h2>
          <p className={`text-lg mb-2 ${theme ? "text-gray-400" : "text-gray-600"}`}>
            Transparent pricing based on project complexity
          </p>
          <p className={`text-sm ${theme ? "text-gray-500" : "text-gray-500"}`}>
            All pricing is fully negotiable - let's discuss your specific needs!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${
                theme ? "bg-gray-900" : "bg-white"
              } rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                plan.popular ? "ring-2 ring-orange-500" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className={`text-2xl font-bold mb-2 ${theme ? "text-white" : "text-black"}`}>
                {plan.name}
              </h3>
              <p className="text-3xl font-bold text-orange-500 mb-2">
                {plan.price}
              </p>
              <p className={`text-sm mb-6 ${theme ? "text-gray-400" : "text-gray-600"}`}>
                ⚡ {plan.timeline}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className={`flex items-start gap-2 ${theme ? "text-gray-300" : "text-gray-700"}`}>
                    <FaCheck className="text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact">
                <button
                  className={`w-full py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? "bg-orange-500 hover:bg-orange-600 text-white"
                      : theme
                      ? "bg-gray-800 hover:bg-gray-700 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-black"
                  }`}
                >
                  Get Started <FaArrowRight />
                </button>
              </Link>
            </motion.div>
          ))}
        </div>

        <p className={`text-center text-sm ${theme ? "text-gray-500" : "text-gray-500"}`}>
          💬 Have a unique requirement? Let's discuss a custom package tailored to your needs.
        </p>
      </div>
    </section>
  );
}

export default Pricing;

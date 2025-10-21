// src/components/FAQ/FAQ.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function FAQ() {
  const theme = useSelector((state) => state.themeChanger.value);
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How quickly can you start my project?",
      answer: "I'm available immediately and can start within 24-48 hours of receiving the 50% advance payment. I prioritize clear communication and quick turnarounds."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes! I work with clients globally. Communication happens via email, WhatsApp, or video calls (Zoom/Google Meet). I'm flexible with time zones and provide regular updates."
    },
    {
      question: "What if I need changes after launch?",
      answer: "I offer 2 weeks of free bug fixes after delivery. For feature additions or modifications, we can discuss ongoing support packages or hourly rates."
    },
    {
      question: "Can I see your code before hiring?",
      answer: "Absolutely! All my projects are on GitHub (github.com/Devnaam), and you can view live demos in my portfolio. Check out RentFair, Resume Builder, and other production apps."
    },
    {
      question: "What's your communication style during projects?",
      answer: "I provide daily/weekly updates depending on project length, use GitHub for version control, and Notion for task tracking. You'll always know what's being worked on."
    },
    {
      question: "Do you sign NDAs or contracts?",
      answer: "Currently, I work on trust and flexibility (startup-friendly). However, I'm happy to sign NDAs if required. For large projects, we can draft a simple agreement together."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "Full-stack: React, Next.js, TypeScript, Node.js, PostgreSQL, MongoDB, Prisma, AI integration (Gemini API). I focus on modern, scalable tech stacks."
    },
    {
      question: "Can you integrate with my existing team?",
      answer: "Yes! I've worked with existing teams using Git workflows, code reviews, and collaborative tools like Slack/Discord. I adapt to your team's processes."
    }
  ];

  return (
    <section className={`py-16 ${theme ? "bg-gray-900" : "bg-white"}`}>
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>
          <p className={`text-lg ${theme ? "text-gray-400" : "text-gray-600"}`}>
            Everything you need to know about working together
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`${
                theme ? "bg-gray-800" : "bg-gray-50"
              } rounded-lg overflow-hidden`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full px-6 py-4 flex items-center justify-between text-left transition-colors ${
                  theme ? "hover:bg-gray-700" : "hover:bg-gray-100"
                }`}
              >
                <span className={`font-semibold text-base md:text-lg pr-4 ${theme ? "text-white" : "text-black"}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FaChevronUp className="text-orange-500 flex-shrink-0" />
                ) : (
                  <FaChevronDown className={`${theme ? "text-gray-400" : "text-gray-600"} flex-shrink-0`} />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className={`px-6 pb-4 ${theme ? "text-gray-300" : "text-gray-700"}`}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;

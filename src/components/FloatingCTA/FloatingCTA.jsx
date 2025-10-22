// src/components/FloatingChat/FloatingChat.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCommentDots, FaTimes, FaPaperPlane } from "react-icons/fa";
import { useSelector } from "react-redux";

function FloatingChat() {
  const theme = useSelector((state) => state.themeChanger.value);
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "👋 Hey! I'm Devnaam's AI assistant. I can help you with:\n\n• Project quotes & timelines\n• Technical capabilities\n• Past work examples\n• Scheduling a call\n\nWhat brings you here today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Auto-focus input when chat opens or after sending
  useEffect(() => {
    if (isOpen && !isLoading) {
      inputRef.current?.focus();
    }
  }, [isOpen, isLoading, messages]);

  // Show tooltip after 5 seconds if chat hasn't been opened
  useEffect(() => {
    const tooltipTimer = setTimeout(() => {
      if (!isOpen && !sessionStorage.getItem("chatTooltipShown")) {
        setShowTooltip(true);
        sessionStorage.setItem("chatTooltipShown", "true");
        
        // Hide tooltip after 10 seconds
        setTimeout(() => setShowTooltip(false), 10000);
      }
    }, 5000);

    return () => clearTimeout(tooltipTimer);
  }, [isOpen]);

  // Remove badge when chat is opened
  useEffect(() => {
    if (isOpen) {
      setShowBadge(false);
      setShowTooltip(false);
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": import.meta.env.VITE_GEMINI_API_KEY || "AIzaSyBtgRmkYVpxsCuSpYdYbHJATwAy82Yt1Ds"
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `You are Devnaam Priyadershi's portfolio AI assistant. Your mission: qualify leads, answer questions, and help visitors connect with Devnaam.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 ABOUT DEVNAAM PRIYADERSHI
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 PERSONAL INFO:
- Full Name: Raj Priyadershi Devnaam (Goes by Devnaam)
- Location: Chittoor, Andhra Pradesh, India (Also from Patna, Bihar originally)
- Education: Final Year B.Tech Data Science Student
- Graduation: 2026
- Email: devnaampriyadershi2003@gmail.com
- Phone: +91 6205791382
- LinkedIn: linkedin.com/in/devnaam-priyadershi-56a256282
- GitHub: github.com/Devnaam
- Portfolio: devnaam4s.vercel.app

💻 TECHNICAL SKILLS:
Frontend: React, Next.js, TypeScript, JavaScript, Tailwind CSS, Bootstrap, Framer Motion, Redux
Backend: Node.js, Express.js, Python, RESTful APIs, Backend Frameworks
Databases: PostgreSQL, Prisma ORM, MongoDB, Database Architecture
AI/ML: Gemini API, NumPy, Data Science, Machine Learning basics
Cloud & Tools: Git, GitHub, Vercel, AWS, Docker, Postman, Notion
Design: UI/UX Design, Figma, Canva

🏆 CERTIFICATIONS & AWARDS:
Professional Certifications (L&T EduTech):
- Full Stack Foundation – Core Java
- UI/UX Developer Course
- Backend Frameworks and API Development

Major Achievements:
- NASA Space Apps Challenge 2024 - Local Impact Award Winner (Oct 2024)
- Smart India Hackathon 2023 - Grand Finale Participant (Dec 2023)
- Arduino Water Automation System - First Prize Winner (Feb 2023)
- Participated in 5+ National Hackathons (Google, NASA, Flipkart)

🚀 MAJOR PROJECTS (Live & Production-Ready):

1. RentFair - Hyperlocal PG Discovery Platform
   Tech: Next.js, PostgreSQL, Prisma, Mapbox API, NextAuth.js
   Features: Location-based search, verified listings, real-time availability, direct owner contact
   Impact: 500+ verified listings across 3 cities, 70% faster search time, 2000+ registered students
   Live: rent-fair.vercel.app

2. Inventory AI Assistant - Natural Language Business Analytics
   Tech: React, Node.js, Gemini 2.0 Flash API, MongoDB, Chart.js
   Features: PDF/CSV parsing, natural language queries, smart categorization, visual dashboards
   Impact: 90% faster query resolution, supports 15+ bank statement formats
   Live: inventory-ai.vercel.app

3. Skill Exchange Platform - Hyperlocal Learning Marketplace
   Tech: Next.js, TypeScript, PostgreSQL, Prisma, Gemini API, Mapbox
   Features: AI-powered skill matching, real-time messaging, location-based discovery, interactive feed
   Impact: Connects local teachers with students, AI recommendations, built-in chat

4. Resume Builder - Free ATS-Friendly Tool
   Tech: React, Tailwind CSS, jsPDF, HTML2Canvas
   Features: Zero signup required, real-time preview, instant PDF download, mobile-optimized, ATS-compliant templates
   Impact: 10,000+ downloads, completely free, no watermarks
   Live: v0-resume-builder-ui-design.vercel.app

5. Finance Analyzer - AI-Powered Financial Insights
   Tech: React, TypeScript, Python, Gemini API, Chart.js, PDF parsing
   Features: Smart PDF/CSV parsing, natural language queries, interactive dashboards, multi-currency support
   Impact: Analyzes 6 months of transactions in 5 minutes, auto-categorization 95% accurate
   Live: finance-analyzer-ai.vercel.app

6. College Management System - Enterprise Education Platform
   Tech: MERN Stack (MongoDB, Express, React, Node.js), Socket.io, JWT, AWS S3
   Features: QR code attendance, grade management, real-time notifications, role-based dashboards
   Impact: 70% faster grade entry, attendance time reduced from 15 to 2 minutes per class

💼 BUSINESS & AVAILABILITY:
✅ Available for freelance projects NOW
✅ Completely free if paid to work on your project
✅ Graduating in 2026, focusing on freelance for next few years

SERVICES OFFERED:
✅ Full-stack web application development
✅ SaaS platform development
✅ AI tool integration (Gemini API, OpenAI)
✅ Database design & architecture
✅ API development & integration
✅ UI/UX design & implementation
✅ Existing team collaboration

PRICING & TIMELINE:
Website Development: ₹5,000 - ₹1,00,000 (completely based on requirements)
Timeline: Small (1 week), Medium (2-3 weeks), Large (1+ month)
Budget & Rates: Fully negotiable
Payment: 50% upfront, 50% on delivery
Support: Maintenance available if needed

CONTACT:
Primary: Email (devnaampriyadershi2003@gmail.com)
Alternative: Phone/WhatsApp (+91 6205791382)

🎯 YOUR ROLE:
1. Qualify leads by asking about project type, budget, timeline
2. Showcase relevant projects when discussing capabilities
3. Be friendly, concise (max 100 words), professional
4. Always end with a question
5. Direct high-value leads to email/phone contact

💬 USER'S QUESTION: ${userMessage}

Respond professionally, qualify the lead, and guide them toward the next step!`
                  }
                ]
              }
            ],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 250,
              topP: 0.95,
              topK: 40
            }
          })
        }
      );

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      const aiResponse = data.candidates[0].content.parts[0].text;

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: aiResponse }
      ]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I'm having trouble connecting right now. Please email me at devnaampriyadershi2003@gmail.com or fill the contact form! 📧"
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button Container with ALL Animations */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        {/* Tooltip Preview */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              className={`absolute bottom-full right-0 mb-4 ${
                theme ? "bg-gray-900" : "bg-white"
              } rounded-lg shadow-2xl p-4 min-w-[200px] border ${
                theme ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">👋</span>
                <div>
                  <p className={`font-bold text-sm ${theme ? "text-white" : "text-black"}`}>
                    Need help?
                  </p>
                  <p className={`text-xs ${theme ? "text-gray-400" : "text-gray-600"}`}>
                    Chat with AI assistant
                  </p>
                </div>
              </div>
              {/* Arrow */}
              <div
                className={`absolute -bottom-2 right-6 w-4 h-4 rotate-45 ${
                  theme ? "bg-gray-900 border-r border-b border-gray-700" : "bg-white border-r border-b border-gray-200"
                }`}
              ></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Floating Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-14 h-14 md:w-16 md:h-16
            rounded-full shadow-2xl flex items-center justify-center
            bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700
            text-white transition-all duration-300 overflow-visible`}
          
          // Bounce-in entrance
          initial={{ scale: 0, rotate: -180 }}
          animate={
            isOpen
              ? { scale: 1, rotate: 0 }
              : {
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }
          }
          transition={
            isOpen
              ? { type: "spring", stiffness: 200, damping: 15 }
              : {
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 8,
                  },
                  rotate: {
                    duration: 0.5,
                    repeat: Infinity,
                    repeatDelay: 10,
                  },
                }
          }
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Glow/Pulse Ring Effect */}
          {!isOpen && (
            <>
              <motion.div
                className="absolute inset-0 rounded-full bg-orange-500 opacity-75"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 0, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-orange-400 opacity-50"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
              />
            </>
          )}

          {/* Icon */}
          <div className="relative z-10">
            {isOpen ? (
              <FaTimes className="text-xl md:text-2xl" />
            ) : (
              <FaCommentDots className="text-xl md:text-2xl" />
            )}
          </div>

          {/* "New" Badge for First-Time Visitors */}
          <AnimatePresence>
            {showBadge && !isOpen && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg"
              >
                New!
              </motion.div>
            )}
          </AnimatePresence>

          {/* Notification Dot (Optional - shows unread count) */}
          {!isOpen && (
            <motion.div
              className="absolute -top-1 -left-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
          )}
        </motion.button>
      </div>

      {/* Chat Window - UNCHANGED */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            className={`fixed bottom-20 right-4 md:bottom-24 md:right-6 z-40
              w-[calc(100vw-2rem)] max-w-[400px] md:w-96
              h-[500px] md:h-[550px]
              ${theme ? "bg-gray-900" : "bg-white"}
              rounded-2xl shadow-2xl border ${theme ? "border-gray-800" : "border-gray-200"}
              flex flex-col overflow-hidden`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-2xl">
                🤖
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white">Devnaam's AI Assistant</h3>
                <p className="text-xs text-orange-100">Powered by Gemini 2.0 • Online 24/7</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm whitespace-pre-wrap ${
                      msg.role === "user"
                        ? "bg-orange-500 text-white rounded-br-none"
                        : theme
                        ? "bg-gray-800 text-gray-200 rounded-bl-none"
                        : "bg-gray-100 text-gray-800 rounded-bl-none"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className={`p-3 rounded-2xl ${theme ? "bg-gray-800" : "bg-gray-100"}`}>
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></span>
                      <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className={`p-3 border-t ${theme ? "border-gray-800" : "border-gray-200"}`}>
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask me anything..."
                  disabled={isLoading}
                  className={`flex-1 px-3 py-2 rounded-xl text-sm
                    ${
                      theme
                        ? "bg-gray-800 text-white border-gray-700"
                        : "bg-gray-50 text-black border-gray-200"
                    }
                    border focus:outline-none focus:ring-2 focus:ring-orange-500
                    disabled:opacity-50`}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 
                    text-white p-3 rounded-xl transition-colors disabled:cursor-not-allowed"
                >
                  <FaPaperPlane className="text-sm" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default FloatingChat;

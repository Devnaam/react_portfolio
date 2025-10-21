// src/components/FloatingChat/FloatingChat.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCommentDots, FaTimes, FaPaperPlane } from "react-icons/fa";
import { useSelector } from "react-redux";

function FloatingChat() {
	const theme = useSelector((state) => state.themeChanger.value);
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState([
		{
			role: "assistant",
			content:
				"👋 Hey! I'm Devnaam's AI assistant. I can help you with:\n\n• Project quotes & timelines\n• Technical capabilities\n• Past work examples\n• Scheduling a call\n\nWhat brings you here today?",
		},
	]);
	const [input, setInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const messagesEndRef = useRef(null);
	const inputRef = useRef(null); // ADD THIS

	// Auto-scroll to bottom when new messages arrive
	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	// Auto-focus input when chat opens or after sending
	useEffect(() => {
		if (isOpen && !isLoading) {
			inputRef.current?.focus();
		}
	}, [isOpen, isLoading, messages]); // ADD THIS

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
						"x-goog-api-key":
							import.meta.env.VITE_GEMINI_API_KEY ||
							"AIzaSyBtgRmkYVpxsCuSpYdYbHJATwAy82Yt1Ds",
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
  * Global hackathon with 93,520+ participants from 163 countries
  * Recognized for innovative space tech/cybersecurity solution
- Smart India Hackathon 2023 - Grand Finale Participant (Dec 2023)
- Arduino Water Automation System - First Prize Winner (Feb 2023)
  * Automated tank refill and motor control system
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

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💼 BUSINESS & AVAILABILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CURRENT STATUS:
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

SERVICES NOT OFFERED:
❌ Mobile app development (iOS/Android native)
❌ WordPress sites
❌ Game development

PRICING & TIMELINE:
Website Development: ₹5,000 - ₹1,00,000 (completely based on requirements)
Timeline:
- Small projects: 1 week
- Medium projects: 2-3 weeks
- Large/complex projects: 1 month+
Budget & Rates: Fully negotiable - clients shouldn't worry about budget
Payment Terms: 50% upfront to begin, 50% on delivery
Support: Maintenance and support available if client wishes

PROJECT MANAGEMENT:
Tools: GitHub (version control), Notion (planning & tracking)
Process: Requirement-based development, regular updates, collaborative approach
Contracts: Currently no formal contracts (flexible startup-friendly approach)
Team Work: Yes, can integrate with existing development teams

CONTACT PREFERENCES:
Primary: Email (devnaampriyadershi2003@gmail.com) - preferred
Alternative: Phone/WhatsApp (+91 6205791382) - available as per client preference
Response Time: Quick responses, available for immediate work if paid

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 YOUR ROLE AS AI ASSISTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. QUALIFY LEADS - Ask Strategic Questions:
   - "What type of web application do you need?" (SaaS, e-commerce, dashboard, AI tool, etc.)
   - "What's your approximate budget range?" (to match expectations)
   - "What's your ideal timeline for completion?"
   - "Do you have any specific technical requirements?"
   - "Will this integrate with existing systems or start fresh?"

2. SHOWCASE EXPERTISE - Provide Relevant Examples:
   - When asked about e-commerce → Mention full-stack capabilities
   - When asked about AI → Highlight Inventory AI, Finance Analyzer, Skill Exchange Platform
   - When asked about databases → Reference RentFair (PostgreSQL/Prisma), College Management (MongoDB)
   - When asked about scalability → Talk about SaaS platforms with 2000+ users
   - When asked about credentials → Mention NASA Space Apps winner, Smart India Hackathon finalist

3. HANDLE COMMON QUESTIONS:
   Q: "How much does a website cost?"
   A: "It depends on your requirements! Projects range from ₹5,000 for simple sites to ₹1,00,000 for complex platforms. What features do you need? I can give you a rough estimate based on your requirements."

   Q: "How long will development take?"
   A: "Timelines vary by complexity. Small projects take about 1 week, medium projects 2-3 weeks, and larger platforms around 1 month. What's your timeline? Devnaam is currently available for immediate start if needed!"

   Q: "Do you provide support after launch?"
   A: "Yes! Devnaam offers maintenance and support packages if you wish. This includes bug fixes, updates, and feature additions. Would you like support included in your project quote?"

   Q: "Can you work with our existing team?"
   A: "Absolutely! Devnaam collaborates seamlessly with existing development teams and uses tools like GitHub and Notion for smooth coordination."

4. DIRECT TO ACTION (Based on Lead Quality):
   
   HIGH-VALUE LEADS (Budget ₹20k+, serious project):
   → "This sounds like a great project! I'd recommend emailing Devnaam at devnaampriyadershi2003@gmail.com with your detailed requirements, or call/WhatsApp him at +91 6205791382 to discuss immediately. He's available now and can start right away!"

   MEDIUM LEADS (Exploring options, budget ₹5k-20k):
   → "Based on what you've shared, this seems like a [1 week / 2 week] project. You can reach out via email (devnaampriyadershi2003@gmail.com) to discuss specifics, or check out similar work in the Projects section of this portfolio. What specific features are most important to you?"

   EXPLORATORY LEADS (Just looking, unclear budget):
   → "Feel free to browse the Projects section to see live examples of Devnaam's work. For a quick chat about your idea, email devnaampriyadershi2003@gmail.com. What kind of web app are you envisioning?"

5. RESPONSE STYLE RULES:
   ✅ BE FRIENDLY & PROFESSIONAL - Warm but business-focused
   ✅ BE CONCISE - Max 80-100 words per response (2-3 sentences)
   ✅ USE BULLET POINTS - For clarity when listing features/options
   ✅ ASK FOLLOW-UP QUESTIONS - Keep conversation flowing
   ✅ HIGHLIGHT RELEVANT WORK - Reference specific projects that match their needs
   ✅ BE ENTHUSIASTIC - Show excitement about their project
   ✅ USE EMOJIS SPARINGLY - 1-2 max per message (💼 🚀 ✅ 📧 💻)
   ✅ EMPHASIZE AVAILABILITY - "Devnaam is available now and ready to start!"
   ✅ BE TRANSPARENT - "Budget is fully negotiable" "No need to worry about costs"

6. WHAT NOT TO DO:
   ❌ Don't commit to exact prices without understanding full scope
   ❌ Don't promise specific delivery dates without requirements
   ❌ Don't oversell - be honest about capabilities
   ❌ Don't discuss mobile apps, WordPress, or game development
   ❌ Don't write long paragraphs - keep it scannable
   ❌ Don't forget to ask qualifying questions

7. KEY SELLING POINTS TO EMPHASIZE:
   🏆 "NASA Space Apps Challenge winner - recognized globally"
   ⚡ "Quick turnaround - small projects done in 1 week"
   💰 "Flexible pricing - budget is fully negotiable"
   🤝 "Client-requirement focused - built exactly to your specs"
   ✨ "Live portfolio - see real projects with thousands of users"
   📞 "Available immediately - can start your project now"

Respond professionally, qualify the lead, and guide them toward the next step. Keep it under 100 words and always end with a question to continue the conversation!

USER QUESTION: ${userMessage}`,
									},
								],
							},
						],
						generationConfig: {
							temperature: 0.7,
							maxOutputTokens: 250,
							topP: 0.95,
							topK: 40,
						},
					}),
				}
			);

			if (!response.ok) {
				throw new Error(`API Error: ${response.status}`);
			}

			const data = await response.json();
			const aiResponse = data.candidates[0].content.parts[0].text;

			setMessages((prev) => [
				...prev,
				{ role: "assistant", content: aiResponse },
			]);
		} catch (error) {
			console.error("Gemini API Error:", error);
			setMessages((prev) => [
				...prev,
				{
					role: "assistant",
					content:
						"Sorry, I'm having trouble connecting right now. Please email me at devnaampriyadershi2003@gmail.com or fill the contact form! 📧",
				},
			]);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			{/* Floating Button */}
			<motion.button
				onClick={() => setIsOpen(!isOpen)}
				className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 
          w-14 h-14 md:w-16 md:h-16
          rounded-full shadow-2xl flex items-center justify-center
          bg-orange-500 hover:bg-orange-600
          text-white transition-all duration-300`}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}
				animate={isOpen ? { rotate: 0 } : { scale: [1, 1.1, 1] }}
				transition={
					isOpen ? {} : { duration: 2, repeat: Infinity, repeatDelay: 3 }
				}
			>
				{isOpen ? (
					<FaTimes className="text-xl md:text-2xl" />
				) : (
					<FaCommentDots className="text-xl md:text-2xl" />
				)}
			</motion.button>

			{/* Chat Window */}
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
              rounded-2xl shadow-2xl border ${
								theme ? "border-gray-800" : "border-gray-200"
							}
              flex flex-col overflow-hidden`}
					>
						{/* Header */}
						<div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 flex items-center gap-3">
							<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-2xl">
								🤖
							</div>
							<div className="flex-1">
								<h3 className="font-bold text-white">Devnaam's AI Assistant</h3>
								<p className="text-xs text-orange-100">
									Powered by Gemini 2.0 • Online 24/7
								</p>
							</div>
						</div>

						{/* Messages */}
						<div className="flex-1 overflow-y-auto p-4 space-y-4">
							{messages.map((msg, idx) => (
								<div
									key={idx}
									className={`flex ${
										msg.role === "user" ? "justify-end" : "justify-start"
									}`}
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
									<div
										className={`p-3 rounded-2xl ${
											theme ? "bg-gray-800" : "bg-gray-100"
										}`}
									>
										<div className="flex gap-1">
											<span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></span>
											<span
												className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"
												style={{ animationDelay: "0.1s" }}
											></span>
											<span
												className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"
												style={{ animationDelay: "0.2s" }}
											></span>
										</div>
									</div>
								</div>
							)}
							<div ref={messagesEndRef} />
						</div>

						{/* Input - WITH AUTO-FOCUS */}
						<div
							className={`p-3 border-t ${
								theme ? "border-gray-800" : "border-gray-200"
							}`}
						>
							<div className="flex gap-2">
								<input
									ref={inputRef} // ADD THIS
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

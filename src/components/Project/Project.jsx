import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const projects = [
	{
		id: 1,
		title: "RentFair",
		description: (
			<ul className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed tracking-wide list-disc list-inside space-y-2">
				<li>
					Built a full-stack web application to bring transparency and fairness
					to the rental housing market.
				</li>
				<li>
					Developed using <strong>Next.js</strong> and{" "}
					<strong>Tailwind CSS</strong> for a modern and responsive UI.
				</li>
				<li>
					Integrated <strong>AI-based pricing</strong> to recommend fair rental
					values in real-time.
				</li>
				<li>
					Empowered students and job seekers to find verified, broker-free
					accommodations.
				</li>
				<li>
					Eliminated hidden costs and scams with a scam-free, user-first
					approach.
				</li>
				<li>
					Implemented <strong>location-based search</strong> functionality for
					improved user experience.
				</li>
				<li>
					Designed for both desktop and mobile with fully responsive layout and
					UX-focused flow.
				</li>
			</ul>
		),
		tags: [
			"Next.js",
			"Tailwind CSS",
			"AI Pricing",
			"Real Estate",
			"Student Housing",
		],
		images: [
			"/assets/rentfair/rentfair1.png",
			"/assets/rentfair/RentFair2.png",

			"/assets/rentfair/RentFair3.png",
		],
		demoUrl: "https://rent-fair.vercel.app/",
		githubUrl: "https://github.com/Devnaam/RentFair",
	},
	{
		id: 2,
		title: "ResumeBuilder",
		description: (
			<ul className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed tracking-wide list-disc list-inside space-y-2">
				<li>
					Developed a dynamic <strong>AI-powered resume builder</strong> that
					provides intelligent content suggestions based on user skills and
					experience.
				</li>
				<li>
					Integrated <strong>professional templates</strong> and layout styles
					to cater to multiple industries and job roles.
				</li>
				<li>
					Implemented real-time customization options for <strong>fonts</strong>
					,<strong> colors</strong>, <strong>sections</strong>, and layout
					structure.
				</li>
				<li>
					Enabled <strong>multi-format resume exports</strong> including PDF,
					Word, and plain text for universal compatibility.
				</li>
				<li>
					Designed a clean and responsive UI with <strong>Tailwind CSS</strong>,
					focused on accessibility and ease of use.
				</li>
				<li>
					Used <strong>React</strong> for component-based architecture and
					smooth UI updates.
				</li>
			</ul>
		),
		tags: [
			"React",
			"Tailwind CSS",
			"AI Integration",
			"Resume Templates",
			"PDF Export",
			"User Personalization",
		],
		images: [
			"/assets/resumebuilder/resume1.png",
			"/assets/resumebuilder/resume2.png",
			"/assets/resumebuilder/resume3.png",
		],
		demoUrl: "https://resume-builder-ai.vercel.app/",
		githubUrl: "https://github.com/Devnaam/ResumeBuilder",
	},
	{
		id: 3,
		title: "FinanceAnalyzer",
		description: (
			<ul className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed tracking-wide list-disc list-inside space-y-2">
				<li>
					Built an advanced <strong>AI-powered financial analysis tool</strong>{" "}
					that combines both fundamental and technical insights.
				</li>
				<li>
					Enabled users to <strong>upload financial reports and charts</strong>{" "}
					to extract key metrics and visual patterns.
				</li>
				<li>
					Implemented smart recognition of chart patterns and financial
					indicators to generate actionable <strong>Buy/Hold/Sell</strong>{" "}
					recommendations.
				</li>
				<li>
					Developed a responsive and intuitive interface for seamless data
					uploads and result interpretation.
				</li>
				<li>
					Focused on <strong>investment decision support</strong> by presenting
					insights in a concise and strategic report format.
				</li>
				<li>
					Used <strong>React</strong> and <strong>Tailwind CSS</strong> for
					fast, clean UI rendering with AI integrations on the backend.
				</li>
			</ul>
		),
		tags: [
			"React",
			"Tailwind CSS",
			"AI Insight",
			"Financial Analysis",
			"Pattern Recognition",
			"Buy/Hold/Sell",
		],
		images: [
			"/assets/financeanalyzer/finance1.png",
			"/assets/financeanalyzer/finance2.png",
			"/assets/financeanalyzer/finance3.png",
		],
		demoUrl: "https://finance-analyzer-ai.vercel.app/",
		githubUrl: "https://github.com/Devnaam/FinanceAnalyzer",
	},
	{
		id: 4,
		title: "Pathfinder",
		description: (
			<ul className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed tracking-wide list-disc list-inside space-y-2">
				<li>
					Built a personalized <strong>career guidance platform</strong> using{" "}
					<strong>React</strong>, <strong>TypeScript</strong>, and{" "}
					<strong>Gemini API</strong> for AI-driven recommendations.
				</li>
				<li>
					Developed an <strong>interactive quiz engine</strong> to assess user
					interests, preferences, and existing skills.
				</li>
				<li>
					Generated <strong>tailored learning roadmaps</strong> with curated
					resources for over 50+ career paths and 100+ in-demand skills.
				</li>
				<li>
					Implemented category-wise skill tracks with{" "}
					<strong>progress indicators</strong> and role-based filters.
				</li>
				<li>
					Designed a responsive, modern UI with clean navigation to enhance
					usability and engagement.
				</li>
				<li>
					Empowered users with <strong>career insights</strong>, salary data,
					and growth projections through smart content delivery.
				</li>
			</ul>
		),
		tags: [
			"React",
			"TypeScript",
			"Gemini API",
			"AI-Powered Guidance",
			"Career Mapping",
			"Interactive Quiz",
		],
		images: [
			"/assets/pathfinder/pathfinder1.png",
			"/assets/pathfinder/pathfinder2.png",
			"/assets/pathfinder/pathfinder3.png",
		],
		demoUrl: "https://pathfinder-career.vercel.app/",
		githubUrl: "https://github.com/Devnaam/Pathfinder",
	},
	{
		id: 5,
		title: "TypingTrainer",
		description: (
			<ul className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed tracking-wide list-disc list-inside space-y-2">
				<li>
					Developed a responsive <strong>typing practice application</strong> to
					help users improve speed and accuracy through real-time exercises.
				</li>
				<li>
					Built using <strong>React</strong> and <strong>Tailwind CSS</strong>,
					with a clean UI and intuitive user experience.
				</li>
				<li>
					Implemented <strong>dynamic typing tests</strong> with instant
					feedback, accuracy calculation, and words-per-minute (WPM) tracking.
				</li>
				<li>
					Supports both <strong>beginner and advanced modes</strong>, with
					randomized word sequences for varied practice.
				</li>
				<li>
					Features a <strong>mistake highlighter</strong> and real-time word
					progression to help users identify and improve weak areas.
				</li>
				<li>
					Optimized for desktop and mobile devices with smooth performance and
					lightweight architecture.
				</li>
			</ul>
		),
		tags: [
			"React",
			"Tailwind CSS",
			"Typing Practice",
			"Performance Tracking",
			"Speed & Accuracy",
			"User-Centric Design",
		],
		images: [
			"/assets/typingtrainer/typing1.png",
			"/assets/typingtrainer/typing2.png",
			"/assets/typingtrainer/typing3.png",
		],
		demoUrl: "https://v0-typing-trainer-frontend.vercel.app/",
		githubUrl: "https://github.com/Devnaam/TypingTrainer",
	},
	{
		id: 6,
		title: "Dishcovery",
		description: (
			<ul className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed tracking-wide list-disc list-inside space-y-2">
				<li>
					Built <strong>Dishcovery</strong>, an AI-powered recipe finder that
					suggests meals based on ingredients users already have — promoting
					zero-waste cooking.
				</li>
				<li>
					Implemented <strong>ingredient-based recipe suggestions</strong> using
					the <strong>Gemini API</strong> to deliver personalized culinary
					results.
				</li>
				<li>
					Introduced a <strong>“Leftover Magic”</strong> feature to help users
					transform everyday leftovers into exciting, delicious meals.
				</li>
				<li>
					Developed a unique{" "}
					<strong>“Surprise Me” global cuisine explorer</strong> that introduces
					users to international recipes and diverse flavors.
				</li>
				<li>
					Enabled recipe saving and rating functionality for quick access to
					user favorites and repeat creations.
				</li>
				<li>
					Built with <strong>React</strong>, <strong>Tailwind CSS</strong>, and{" "}
					<strong>Context API</strong> for clean state management and responsive
					UI.
				</li>
				<li>
					Focused on <strong>user experience and sustainability</strong> by
					minimizing food waste and making smart cooking accessible to all.
				</li>
			</ul>
		),
		tags: [
			"React",
			"Tailwind CSS",
			"Gemini API",
			"AI Recipes",
			"Zero-Waste Cooking",
			"Food Sustainability",
		],
		images: [
			"/assets/dishcovery/dishcovery1.png",
			"/assets/dishcovery/dishcovery2.png",
			"/assets/dishcovery/dishcovery3.png",
		],
		demoUrl: "https://dishcovery-ai.vercel.app/",
		githubUrl: "https://github.com/Devnaam/Dishcovery",
	},
	{
		id: 7,
		title: "Market Mentor Money",
		description: (
			<ul className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed tracking-wide list-disc list-inside space-y-2">
				<li>
					Created a high-performance <strong>blog platform</strong> focused on
					stock market insights, chart analysis, and personal finance literacy.
				</li>
				<li>
					Designed a <strong>vibrant and modern UI</strong> with smooth
					animations, responsive layouts, and seamless UX across all devices.
				</li>
				<li>
					Implemented <strong>Markdown/CMS-based dynamic blogs</strong> with
					sticky Table of Contents, scroll tracking, and “Back to Top” features.
				</li>
				<li>
					Integrated <strong>social sharing</strong> (WhatsApp, LinkedIn,
					Facebook, Telegram) and related posts for reader engagement.
				</li>
				<li>
					Built a <strong>newsletter signup & contact form</strong> with email
					validation and custom styling.
				</li>
				<li>
					Used <strong>Supabase (PostgreSQL + Auth)</strong> for secure blog
					management and scalable backend storage.
				</li>
				<li>
					Optimized fully for <strong>SEO</strong> and performance with{" "}
					<strong>Vercel hosting</strong>, lazy loading, and responsive meta
					tags.
				</li>
			</ul>
		),
		tags: [
			"React",
			"TypeScript",
			"Tailwind CSS",
			"Supabase",
			"Blog Platform",
			"SEO Optimization",
			"Personal Finance",
		],
		images: [
			"/assets/marketmentor/marketmentor1.png",
			"/assets/marketmentor/marketmentor2.png",
			"/assets/marketmentor/marketmentor3.png",
		],
		demoUrl: "https://marketmentormoney.vercel.app/",
		githubUrl: "https://github.com/Devnaam/MarketMentorMoney",
	},
	{
	id: 8,
	title: "Bill Decoder",
	description: (
		<ul className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed tracking-wide list-disc list-inside space-y-2">
			<li>
				Created <strong>Bill Decoder</strong>, an AI-powered legal literacy platform that simplifies complex Indian parliamentary bills into plain, understandable language.
			</li>
			<li>
				Utilized <strong>Google Gemini API</strong> to break down legal jargon and provide contextual explanations for better comprehension.
			</li>
			<li>
				Developed a <strong>personalized dashboard</strong> with on-demand assistance for difficult words, definitions, and legal terms.
			</li>
			<li>
				Enabled <strong>multiple input options</strong>: upload PDFs, paste bill text, submit image scans, or provide bill links for AI-based processing.
			</li>
			<li>
				Implemented a <strong>Bill Discovery System</strong> with sections like “Recent Bills,” “Popular Bills,” and “Trending Bills” to improve civic engagement.
			</li>
			<li>
				Built a responsive and user-focused interface using <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>React Hook Form</strong> for seamless form handling.
			</li>
			<li>
				Used document parsing tools for <strong>PDF and image text extraction</strong>, enhancing accessibility for diverse content formats.
			</li>
		</ul>
	),
	tags: [
		"React",
		"Tailwind CSS",
		"Gemini API",
		"AI Simplification",
		"Legal Tech",
		"PDF & OCR Parsing",
		"Civic Engagement",
	],
	images: [
		"/assets/billdecoder/billdecoder1.png",
		"/assets/billdecoder/billdecoder2.png",
		"/assets/billdecoder/billdecoder3.png",
	],
	demoUrl: "https://bill-decoder-ai.vercel.app/",
	githubUrl: "https://github.com/Devnaam/BillDecoder",
}

];

const Project = () => {
	const theme = useSelector((state) => state.themeChanger.value);
	const [currentSlide, setCurrentSlide] = useState({});

	useEffect(() => {
		const intervals = projects.map((project) =>
			setInterval(() => {
				setCurrentSlide((prev) => {
					const current = prev[project.id] ?? 0;
					const nextIndex = (current + 1) % project.images.length;
					return { ...prev, [project.id]: nextIndex };
				});
			}, 3000)
		);
		return () => intervals.forEach(clearInterval);
	}, []);

	return (
		<div
			className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${
				theme ? "bg-[#1A1A1A]" : "bg-gray-100"
			}`}
		>
			<div className="max-w-5xl mx-auto">
				<motion.h1
					className="text-4xl font-bold text-gray-800 dark:text-gray-100 text-center mb-12"
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					My Projects
				</motion.h1>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project) => (
						<motion.div
							key={project.id}
							className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: project.id * 0.2 }}
						>
							<a
								href={project.demoUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								{/* here the code for image section has started */}
								<div className="relative w-full aspect-video overflow-hidden flex items-center justify-center">
									{project.images.map((img, i) => (
										<motion.img
											key={i}
											src={img}
											alt={`${project.title} ${i}`}
											className="transition-opacity duration-700 ease-in-out object-contain w-full h-full"
											style={{
												opacity: currentSlide[project.id] === i ? 1 : 0,
												position:
													currentSlide[project.id] === i
														? "relative"
														: "absolute",
											}}
										/>
									))}
								</div>
								{/* image section code ends here */}
							</a>
							<div className="p-6">
								<h2 className="text-3xl font-semibold text-black-800 dark:text-gray-100 mb-2">
									{project.title}
								</h2>
								<p className="text-gray-600 dark:text-gray-400 mb-4">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="px-2 py-1 bg-gray-100 dark:bg-indigo-900 text-green-800 dark:text-indigo-200 text-sm rounded-full"
										>
											{tag}
										</span>
									))}
								</div>
								<div className="flex flex-wrap gap-4 mb-4">
									{project.demoUrl && (
										<a
											href={project.demoUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="relative inline-flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
											aria-label={`View live demo of ${project.title}`}
										>
											<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent flex items-center">
												<svg
													className="w-5 h-5 mr-2"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
													/>
												</svg>
												Live Demo
											</span>
										</a>
									)}
									{project.githubUrl && (
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="relative inline-flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
											aria-label={`View GitHub repository for ${project.title}`}
										>
											<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent flex items-center">
												<svg
													className="w-5 h-5 mr-2"
													fill="currentColor"
													viewBox="0 0 24 24"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
												</svg>
												GitHub
											</span>
										</a>
									)}
								</div>
								<div className="mt-4">
									<button
										onClick={() => sharePost(project.title, project.demoUrl)}
										className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-full shadow-lg transition duration-300 ease-in-out group hover:animate-pulse-custom"
										aria-label={`Share ${project.title}`}
									>
										<svg
											className="w-5 h-5"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
											/>
										</svg>
										Share
									</button>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

const sharePost = (title, url) => {
	const shareData = {
		title: title,
		text: `Check out this project by Devnaam Priyaderhi: ${title}!`,
		url: url,
	};
	if (navigator.share) {
		navigator
			.share(shareData)
			.catch((err) => console.error("Share failed:", err));
	} else {
		navigator.clipboard
			.writeText(shareData.url)
			.then(() => {
				alert("Link copied to clipboard!");
			})
			.catch((err) => {
				console.error("Copy failed:", err);
				alert("Failed to copy link. Please copy manually: " + shareData.url);
			});
	}
};

export default Project;

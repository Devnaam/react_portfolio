import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const projects = [
	{
		id: 1,
		title: "BiteBlend",
		description:
			"Built a full-stack app with React, Node, and MongoDB. Integrated JWT for authentication, Cloudinary for images, and used Redux for state. Designed a responsive UI with Material UI and Tailwind. Added Gimeni AI for recipes, with pagination and search in history.",
		tags: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Redux"],
		image: "/assets/BiteBlend.jpeg",
		demoUrl: "https://recipefinder-frontend.onrender.commm/",
		githubUrl: "https://github.com/Devnaam/biteblend", // Replace with actual GitHub URL
	},
	{
		id: 2,
		title: "videoTube",
		description:
			"Built backend for a YouTube-like platform with Node.js and Express, handling video uploads, streaming, and user interactions. Used JWT for authentication, Cloudinary for video storage, and Multer for file handling. Designed a RESTful API for uploads, comments, and streaming, with MongoDB for data management.",
		tags: ["Node.js", "Express", "MongoDB", "REST API"],
		image: "/assets/videoTube.jpeg",
		demoUrl:
			"https://www.linkedin.com/posts/thecodecrusaderx_backenddevelopment-nodejs-expressjs-activity-7237829858423103488-D8ch?utm_source=share&utm_medium=member_desktoppppp",
		githubUrl: "https://github.com/Devnaam/videotube", // Replace with actual GitHub URL
	},
	{
		id: 3,
		title: "Book Heaven",
		description:
			"Created a full-stack book store application featuring a React frontend styled with Tailwind CSS and a Node.js backend using Express. The app allows users to store and manage book details in MongoDB. Focused on creating a clean and responsive UI that enhances user experience while ensuring efficient data handling on the server side.",
		tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
		image: "/assets/BookHeaven.jpeg",
		demoUrl: "https://book-storeiii-mu-flax.vercel.app/",
		githubUrl: "https://github.com/Devnaam/book-heaven", // Replace with actual GitHub URL
	},
	{
		id: 4,
		title: "weatherWise",
		description:
			"Developed a Weather App using HTML, CSS, and JavaScript that fetches real-time weather data from an external API and displays dynamic weather information. The app features a responsive UI, ensuring compatibility across different screen sizes and devices.",
		tags: ["HTML", "CSS", "JavaScript", "API"],
		image: "/assets/weatherWise.jpeg",
		demoUrl: "https://weather-uuuuapp-sigma-one-22.vercel.app/",
		githubUrl: "https://github.com/Devnaam/weatherwise", // Replace with actual GitHub URL
	},
	{
		id: 5,
		title: "Password-Pro",
		description:
			"Developed a Password Generator in React.js that allows users to generate secure passwords with customizable length and options for numbers and special characters. It includes a Copy feature for quick clipboard access, utilizing React hooks to manage state efficiently.",
		tags: ["React", "JavaScript", "Tailwind CSS"],
		image: "/assets/password-pro.jpeg",
		demoUrl: "https://learninguu-reactjs-hazel.vercel.app/",
		githubUrl: "https://github.com/Devnaam/password-pro", // Replace with actual GitHub URL
	},
	{
		id: 6,
		title: "Todo App",
		description:
			"Developed a Todo App using React and the Context API for state management. The app allows users to add, edit, and delete tasks with a clean and responsive user interface, efficiently handling global state without prop drilling.",
		tags: ["React", "Context API", "JavaScript"],
		image: "/assets/Todo.jpeg",
		demoUrl: "https://learninguuuu-reactjs-gnq2.vercel.app/",
		githubUrl: "https://github.com/Devnaam/todo-app", // Replace with actual GitHub URL
	},
];

const Project = () => {
	const theme = useSelector((state) => state.themeChanger.value);

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
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-48 object-cover"
								/>
							</a>
							<div className="p-6">
								<h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
									{project.title}
								</h2>
								<p className="text-gray-600 dark:text-gray-400 mb-4">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full"
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

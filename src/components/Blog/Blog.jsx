// src/components/Blog/Blog.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BlogPostCard from "./BlogPostCard";
import BlogContent from "./BlogContent";
import { blogPosts } from "../../data/blogData";



function Blog() {
	const theme = useSelector((state) => state.themeChanger.value);
	const [selectedPost, setSelectedPost] = useState(null);

	return (
		<div
			className={`min-h-screen ${
				theme ? "bg-black text-white" : "bg-white text-black"
			} transition-colors duration-500`}
		>
			<div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
				{/* Page Title */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					className="mb-8"
				>
					<h1 className="text-4xl md:text-5xl font-bold mb-3">
						Blog <span className="text-orange-500">Posts</span>
					</h1>
					<p className={`text-lg ${theme ? "text-gray-400" : "text-gray-600"}`}>
						Insights from building projects, winning hackathons, and growing as
						a developer
					</p>
				</motion.div>

				{/* Two Column Layout */}
				<div className="flex flex-col lg:flex-row gap-8">
					{/* LEFT SIDEBAR: Sticky Post List */}
					<motion.div
						className="w-full lg:w-1/3"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
					>
						<div className="lg:sticky lg:top-24 space-y-4">
							<h2 className="text-xl font-bold mb-4">
								All Posts ({blogPosts.length})
							</h2>

							{blogPosts.map((post) => (
								<BlogPostCard
									key={post.id}
									post={post}
									isSelected={selectedPost?.id === post.id}
									onClick={() => setSelectedPost(post)}
									theme={theme}
								/>
							))}
						</div>
					</motion.div>

					{/* RIGHT CONTENT: Scrollable Content Area */}
					<motion.div
						className="w-full lg:w-2/3"
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
					>
						<AnimatePresence mode="wait">
							<BlogContent post={selectedPost} theme={theme} />
						</AnimatePresence>
					</motion.div>
				</div>

				{/* Bottom CTA */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}
					className={`mt-16 p-8 md:p-12 rounded-lg text-center ${
						theme ? "bg-gray-900" : "bg-gray-100"
					}`}
				>
					<h2 className="text-3xl font-bold mb-4">
						Enjoyed <span className="text-orange-500">Reading?</span>
					</h2>
					<p
						className={`text-lg mb-6 ${
							theme ? "text-gray-400" : "text-gray-600"
						}`}
					>
						See how these experiences translate into real project delivery
					</p>
					<Link to="/projects">
						<button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
							View My Work →
						</button>
					</Link>
				</motion.div>
			</div>
		</div>
	);
}

export default Blog;

import React, { useState, useEffect } from "react";
import "../../App.css";
import { useSelector } from "react-redux";

// Array of titles for the typing animation
const titles = ["Full Stack Developer", "Data Analyst", "Data Scientist"];

export default function Home() {
	const theme = useSelector((state) => state.themeChanger.value);

	// State hooks for the typing animation
	const [titleIndex, setTitleIndex] = useState(0); // Index for which title to show
	const [text, setText] = useState(""); // The current text being displayed
	const [isDeleting, setIsDeleting] = useState(false); // To check if we are deleting text

	useEffect(() => {
		const currentTitle = titles[titleIndex];
		let timeout;

		// Logic to handle typing or deleting
		if (isDeleting) {
			// If deleting, remove one character
			timeout = setTimeout(() => {
				setText(currentTitle.substring(0, text.length - 1));
			}, 100); // Faster speed for deleting
		} else {
			// If typing, add one character
			timeout = setTimeout(() => {
				setText(currentTitle.substring(0, text.length + 1));
			}, 150);
		}

		// When the title is fully typed, pause, then start deleting
		if (!isDeleting && text === currentTitle) {
			clearTimeout(timeout); // clear the typing timeout
			timeout = setTimeout(() => setIsDeleting(true), 2000); // Wait 2s
		}

		// When the title is fully deleted, move to the next title
		else if (isDeleting && text === "") {
			setIsDeleting(false);
			setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
		}

		// Cleanup function to clear the timeout
		return () => clearTimeout(timeout);
	}, [text, isDeleting, titleIndex]);

	return (
		<section>
			{/* Main Hero Section */}
			<div
				className={`mt-10 mx-auto w-full max-w-7xl md:flex justify-around md:h-screen items-center ${
					theme ? "bg-[#1A1A1A]" : "bg-gray-100"
				} rounded-t-xl p-8`}
			>
				<div className="md:w-2/4">
					<h2
						className={`text-4xl font-bold sm:text-5xl m-3 mt-10 ${
							theme ? "text-white" : "text-black"
						}`}
					>
						Hello!👋
						<span className="sm:hidden">
							<br />
						</span>
						<span
							className={` sm:block text-xl mt-5 ${
								theme ? "text-white" : "text-black"
							}`}
						>
							I am Devnaam
						</span>
						<span className="sm:hidden">
							<br />
						</span>
						{/* MODIFIED SPAN FOR ANIMATED TEXT */}
						<span
							className={`sm:block text-xl mt-5 h-7 ${
								// Set a fixed height (h-7) to prevent layout shifts
								theme ? "text-white" : "text-black"
							}`}
						>
							{text}
							<span className="animate-blink">|</span> {/* Blinking cursor */}
						</span>
					</h2>
					<p className={`mt-10 ${theme ? "text-white" : "text-black"}`}>
						Computer Science student passionate about IoT, Cyber Security, and
						Blockchain Development. I thrive in Full-Stack Web Development,
						turning complex ideas into clean, scalable solutions. With a focus
						on clarity and performance, I deliver efficient, high-quality code
						that bridges innovation with real-world impact. Always learning.
						Always building.
					</p>
					<button
						className={`text-center md:text-[30px] font-bold m-10 ${
							theme
								? "bg-white hover:bg-green-900 hover:text-white transition duration-300 ease-in-out"
								: "hover:bg-green-900 hover:text-white transition duration-300 ease-in-out bg-black text-white"
						} rounded-2xl px-8 p-2`}
						onClick={() => window.open("./assets/Resume copy.pdf")}
					>
						Click me!
					</button>
				</div>
				<div>
					<center>
						<img
							src="/assets/me.jpg"
							alt="Devnaam's profile" // Added alt text for accessibility
							className="mt-4 h-[200px] w-[200px] rounded-full object-cover md:w-[400px] md:h-[400px] md:hover:h-[450px] md:hover:w-[450px] transition-all duration-300 ease-in-out animate-scale shadow-2xl"
						/>
					</center>
				</div>
			</div>

			{/* About Me Section */}
			<div
				className={`mx-auto w-full max-w-7xl mb-10 mt-0 p-6 rounded-b-xl ${
					theme ? "bg-[#1A1A1A]" : "bg-gray-100"
				} shadow-lg`}
			>
				<h3
					className={`text-3xl font-bold mb-6 text-center ${
						theme ? "text-white" : "text-black"
					}`}
				>
					{/* about Me */}
				</h3>
				{/* u can start the fresh code for about me from here  */}
			</div>
		</section>
	);
}

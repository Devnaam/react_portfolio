import React from "react";
// import { useEffect, useState } from "react";
import "../../App.css";
import { useSelector } from "react-redux";

export default function Home() {
	const theme = useSelector((state) => state.themeChanger.value);
	console.log(theme);

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
						<span
							className={`sm:block text-xl mt-5 ${
								theme ? "text-white" : "text-black"
							}`}
						>
							Full Stack Developer | Data Analyst
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

import React, { useState, useEffect } from "react";
import MultiActionAreaCard from "../Card";

import sih from "/assets/sih.jpg";
import coding_club from "/assets/acm.png";
import nasa_space_app from "/assets/NASA_spaceApp.jpg";
import arduino1 from "/assets/ardunio1.jpg";
import arduino2 from "/assets/ardunio2.jpg";
import acm2 from "/assets/acm.png";
import agengic1 from "/assets/agenitc2.jpg";
import agengic2 from "/assets/agenitc3.jpg";
import agengic3 from "/assets/agenitc3.jpg";
import agengic4 from "/assets/agenitc2.jpg";
import agengic5 from "/assets/agenitc5.webp";

import { useSelector } from "react-redux";

function Achievement() {
	const theme = useSelector((state) => state.themeChanger.value);
	const acmImages = [arduino1, arduino2];
	const agengicImages = [agengic1, agengic2, agengic3, agengic4, agengic5];
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % agengicImages.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div
			className={`flex justify-between flex-wrap m-4 gap-4 mt-10 mb-10 ${
				theme ? "bg-[#1A1A1A]" : "bg-gray-100 "
			} rounded-xl md:p-10 `}
		>
			{/* Original Cards */}
			<div>
				<a
					href="https://www.linkedin.com/in/raj-priyadershi-56a256282/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<MultiActionAreaCard
						img={nasa_space_app}
						name={"🏆NASA Space Apps Challenge – Locard Award Winner."}
						dis={
							"Awarded for outstanding innovation and problem-solving at the world’s largest global hackathon hosted by NASA. Recognized for creating a solution aligned with space technology, cybersecurity, or digital integrity themes (Locard award focus), demonstrating excellence in creativity, collaboration, and technical implementation."
						}
					/>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/posts/raj-priyadershi-56a256282_sih2023-finalist-techinnovation-activity-7151097673238896641-mpHi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAES8eKIB56CEzDTkLN7Y1Ae7xnyh4ugwZbY"
					target="_blank"
					rel="noopener noreferrer"
				>
					<MultiActionAreaCard
						img={sih}
						name={"Smart India Hackathon 2023"}
						dis={
							"! Worked with my team on real-world problems, showcased innovative tech solutions, gained national-level exposure, and earned a certificate—truly a proud and enriching experience!"
						}
					/>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/raj-priyadershi-56a256282/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<MultiActionAreaCard
						img={coding_club}
						name={
							"Secretary” at ACM (Association for Computing Machinery), SVCET(A)"
						}
						dis={
							"Coordinated events and workshops, managed communications, and led a team of students to promote computer science and engineering activities within the college."
						}
					/>
				</a>
			</div>

			{/* NEW ACM Carousel Card */}

			<div className="w-full sm:w-[320px] mx-auto bg-white dark:bg-[#1A1A1A] rounded-xl shadow-md overflow-hidden">
				<div className="relative w-full overflow-hidden h-72">
					<div
						className="flex transition-transform duration-700 ease-in-out"
						style={{ transform: `translateX(-${index * 100}%)` }}
					>
						{acmImages.map((image, i) => (
							<div
								key={i}
								className="w-full flex justify-center items-center shrink-0"
							>
								<img
									src={image}
									alt={`Arduino Project ${i}`}
									className="h-72 object-contain"
								/>
							</div>
						))}
					</div>
				</div>

				<div className="p-4">
					<h3 className="text-xl font-bold text-black dark:text-white">
						Arduino Water Automation Winner — Mar 2023
					</h3>
					<p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
						Awarded the first prize for creating an Arduino-based water
						automation system that autonomously refills tanks and manages motors
						based on water levels.
					</p>
					<a
						href="https://www.linkedin.com/in/raj-priyadershi-56a256282/"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block mt-4 text-blue-500 dark:text-blue-400 font-semibold hover:underline"
					>
						SHARE
					</a>
				</div>
			</div>

			{/* {agenitc ai card starts here } */}
			<div className="w-full sm:w-[320px] mx-auto bg-white dark:bg-[#1A1A1A] rounded-xl shadow-md overflow-hidden">
				<div className="relative w-full overflow-hidden h-72">
					<div
						className="flex transition-transform duration-700 ease-in-out"
						style={{ transform: `translateX(-${index * 100}%)` }}
					>
						{agengicImages.map((image, i) => (
							<div
								key={i}
								className="w-full flex justify-center items-center shrink-0"
							>
								<img
									src={image}
									alt={`Arduino Project ${i}`}
									className="h-72 object-contain"
								/>
							</div>
						))}
					</div>
				</div>

				<div className="p-4">
					<h3 className="text-xl font-bold text-black dark:text-white">
						Agentic AI Day 2025 Hackathon — Jul 2025
					</h3>
					<p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
						Participated in the Guinness World Record-breaking Agentic AI
						Hackathon organized by Google Cloud India, Hack2skill, and GDG
						Bangalore, with 1,941+ developers and 700+ teams. Built an
						AI-powered financial assistant using Fi Money’s MCP Server, Gemini
						2.5 Pro, and Vertex AI to provide secure, personalised financial
						insights through natural language conversations and scenario
						simulations.
					</p>
					<a
						href="https://github.com/YOUR_GITHUB_REPO"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block mt-4 text-blue-500 dark:text-blue-400 font-semibold hover:underline"
					>
						VIEW PROJECT
					</a>
				</div>
			</div>

			{/* {AGENTIC AI CARD ENDS HERE } */}
		</div>
	);
}

export default Achievement;

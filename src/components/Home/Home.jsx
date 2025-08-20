import React, { useState, useEffect, useRef } from "react";
import "../../App.css";
import { useSelector } from "react-redux";

// Array of titles for the typing animation
const titles = ["Full Stack Developer", "Data Analyst", "Data Scientist"];

export default function Home() {
	const theme = useSelector((state) => state.themeChanger.value);
	const canvasRef = useRef(null);
	const animationRef = useRef(null);
	const particlesRef = useRef([]);
	const mouseRef = useRef({ x: 0, y: 0 });

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

	// Particle class
	class Particle {
		constructor(canvas) {
			this.canvas = canvas;
			this.x = Math.random() * canvas.width;
			this.y = Math.random() * canvas.height;
			this.vx = (Math.random() - 0.5) * 2;
			this.vy = (Math.random() - 0.5) * 2;
			this.radius = Math.random() * 3 + 1;
			this.opacity = Math.random() * 0.5 + 0.3;
			this.originalVx = this.vx;
			this.originalVy = this.vy;
		}

		update(mouse) {
			// Mouse attraction effect
			const dx = mouse.x - this.x;
			const dy = mouse.y - this.y;
			const distance = Math.sqrt(dx * dx + dy * dy);
			
			if (distance < 100) {
				const force = (100 - distance) / 100;
				this.vx += (dx / distance) * force * 0.03;
				this.vy += (dy / distance) * force * 0.03;
			} else {
				// Return to original velocity gradually
				this.vx += (this.originalVx - this.vx) * 0.01;
				this.vy += (this.originalVy - this.vy) * 0.01;
			}

			// Update position
			this.x += this.vx;
			this.y += this.vy;

			// Bounce off edges
			if (this.x < 0 || this.x > this.canvas.width) {
				this.vx *= -1;
				this.originalVx *= -1;
			}
			if (this.y < 0 || this.y > this.canvas.height) {
				this.vy *= -1;
				this.originalVy *= -1;
			}

			// Keep particles within bounds
			this.x = Math.max(0, Math.min(this.canvas.width, this.x));
			this.y = Math.max(0, Math.min(this.canvas.height, this.y));
		}

		draw(ctx, theme) {
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
			ctx.fillStyle = theme 
				? `rgba(255, 255, 255, ${this.opacity})` 
				: `rgba(0, 0, 0, ${this.opacity})`;
			ctx.fill();
		}
	}

	// Initialize particles and animation
	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		resizeCanvas();
		window.addEventListener('resize', resizeCanvas);

		// Create particles
		particlesRef.current = [];
		for (let i = 0; i < 50; i++) {
			particlesRef.current.push(new Particle(canvas));
		}

		// Mouse move handler
		const handleMouseMove = (e) => {
			mouseRef.current.x = e.clientX;
			mouseRef.current.y = e.clientY;
		};

		window.addEventListener('mousemove', handleMouseMove);

		// Animation loop
		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			
			particlesRef.current.forEach(particle => {
				particle.update(mouseRef.current);
				particle.draw(ctx, theme);
			});

			// Draw connections between nearby particles
			for (let i = 0; i < particlesRef.current.length; i++) {
				for (let j = i + 1; j < particlesRef.current.length; j++) {
					const dx = particlesRef.current[i].x - particlesRef.current[j].x;
					const dy = particlesRef.current[i].y - particlesRef.current[j].y;
					const distance = Math.sqrt(dx * dx + dy * dy);

					if (distance < 100) {
						ctx.beginPath();
						ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
						ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
						ctx.strokeStyle = theme 
							? `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})` 
							: `rgba(0, 0, 0, ${0.1 * (1 - distance / 100)})`;
						ctx.stroke();
					}
				}
			}

			animationRef.current = requestAnimationFrame(animate);
		};

		animate();

		return () => {
			window.removeEventListener('resize', resizeCanvas);
			window.removeEventListener('mousemove', handleMouseMove);
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
		};
	}, [theme]);

	return (
		<section className="relative">
			{/* Interactive Background Canvas */}
			<canvas
				ref={canvasRef}
				className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
				style={{ zIndex: 0 }}
			/>
			
			{/* Main Hero Section */}
			<div
				className={`relative z-10 mt-10 mx-auto w-full max-w-7xl md:flex justify-around md:h-screen items-center ${
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

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Sample blog post data
const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    {
      id: 1,
      title: '🚀 From Idea to Impact: Winning the Locard Award at NASA Space Apps Challenge',
      preview: 'How my team and I built a secure, AI-assisted mapping platform in 72 hours to win the Locard Award at NASA’s global hackathon.',
      tag: 'Tech',
      image: 'https://images.unsplash.com/photo-1516841273335-e39b37888115', // Space-themed image
      content: `
        <div class="space-y-6">
  <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
    ⏱️ 72 hours. 🌍 One global stage. 🚀 Limitless ideas. And in the midst of chaos and caffeine—we built something that earned recognition from <span class="font-semibold text-indigo-600 dark:text-indigo-400">NASA</span>.
  </p>

  <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
    Hi, I’m <strong>Devnaam Priyaderhi</strong>, a B.Tech 3rd-year Data Science student from Sri Venkateshwara College of Engineering and Technology, Chittoor. Here’s the story of how my team and I developed a tech solution that won the <span class="font-semibold text-indigo-600 dark:text-indigo-400">Locard Award</span> at the <span class="font-semibold text-indigo-600 dark:text-indigo-400">NASA Space Apps Challenge</span>—the world’s biggest global hackathon.
  </p>

  <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8">🌌 What is the NASA Space Apps Challenge?</h2>
  <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
    The NASA International Space Apps Challenge is not just a hackathon—it’s a global innovation movement. Each year, participants from over 150 countries come together for 48–72 hours to solve real-world problems using NASA’s open data. I discovered it through LinkedIn, and something about the energy and scale immediately pulled me in.
  </p>

  <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8">🏆 What is the Locard Award?</h2>
  <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
    Among several global awards, the <strong>Locard Award</strong> stands out—it’s given to the solution that best represents cybersecurity, digital integrity, and trust in space tech. Winning this meant our solution didn’t just work—it was secure, scalable, and ready for mission-critical applications.
  </p>

  <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8">💡 The Problem We Tackled</h2>
  <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
    We focused on a very real challenge: <span class="italic">“How can we protect the integrity of satellite and mapping data in high-risk areas?”</span> In an era where this data powers military ops, disaster management, and navigation systems—security is non-negotiable.
  </p>

  <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8">🛠️ Our Solution</h2>
  <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
    We created a secure, AI-assisted web platform that maps sensitive zones using QGIS and detects real-time anomalies in satellite-fed data. My contributions included:
  </p>
  <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
    <li>Analyzing & visualizing satellite data using QGIS</li>
    <li>Full-stack development of the web application</li>
    <li>Deploying and optimizing for cross-platform accessibility</li>
  </ul>
  <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
    Key features:
  </p>
  <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
    <li>ML-powered anomaly detection in geospatial inputs</li>
    <li>Secure data pipelines and encryption</li>
    <li>Interactive UI/UX for real-time data visualization</li>
  </ul>

  <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8">⚡ The Experience: From Code to Chaos</h2>
  <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
    What made this unforgettable wasn’t just the tech—it was the momentum. Ideas flying, keyboards clacking, builds breaking and fixing—nonstop adrenaline!
  </p>
  <blockquote class="border-l-4 border-indigo-500 dark:border-indigo-400 pl-4 italic text-gray-600 dark:text-gray-400">
    “Everyone was rushing, typing, deploying, debugging like a storm—and yet there was this electric energy that made me push beyond what I thought were my limits.”
  </blockquote>
  <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
    That pressure turned into purpose—and ultimately, clarity.
  </p>

  <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8">🎉 The Moment of Victory</h2>
  <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
    When they announced our name as the <strong>Locard Award Winners</strong>, we went silent for a moment. Then—we celebrated. The judges applauded our focus on cybersecurity, usability, and real-world relevance. That moment changed everything for me.
  </p>

  <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8">🎓 What I Gained</h2>
  <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
    These 72 hours taught me more than a semester’s worth of lectures:
  </p>
  <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
    <li>Problem-solving under pressure</li>
    <li>Effective teamwork & communication</li>
    <li>Hands-on skills with QGIS, APIs, GitHub, cloud deployments</li>
  </ul>
  <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
    Most importantly, it taught me that no idea is too small when backed with intent and execution.
  </p>

  <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8">💬 A Message to Aspiring Innovators</h2>
  <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
    Whether you're a beginner or a pro—just start. Don’t wait for perfect timing or skills. The world needs your ideas. Here’s what helped me:
  </p>
  <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
    <li>Prioritize collaboration over competition</li>
    <li>Keep your idea user-friendly and impactful</li>
    <li>Don’t just learn—build</li>
  </ul>
  <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
    And finally—apply. Trust me, the first step is where the magic begins.
  </p>

  <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8">🙏 Thank You, NASA & My Mentors</h2>
  <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
    I’m beyond grateful to NASA, the Space Apps organizing team, mentors, and judges who believed in us. This win fueled my passion for space tech, cybersecurity, and AI—and I’m only getting started.
  </p>

  <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8">🔗 Let’s Connect!</h2>
  <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
    Inspired? Curious? Want to collaborate? Let’s chat:
  </p>
  <div class="flex flex-wrap gap-4">
  <a href="https://www.linkedin.com/in/raj-priyadershi-56a256282/" class="relative inline-flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800" aria-label="Connect on LinkedIn">
    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent flex items-center">
      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.02-3.06-1.865-3.06-1.866 0-2.152 1.458-2.152 2.966v5.698h-3v-11h2.879v1.508h.041c.401-.761 1.379-1.558 2.837-1.558 3.036 0 3.6 2.001 3.6 4.604v6.446z"/>
      </svg>
      LinkedIn
    </span>
  </a>
  <a href="https://github.com/Devnaam" class="relative inline-flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800" aria-label="View GitHub Profile">
    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent flex items-center">
      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
      GitHub
    </span>
  </a>
  <a href="https://devnaam4s.vercel.app/" class="relative inline-flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800" aria-label="Visit Portfolio">
    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent flex items-center">
      <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
      </svg>
      Portfolio
    </span>
  </a>
  <a href="mailto:workwithdevnaam@gmail.com" class="relative inline-flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800" aria-label="Send Email">
    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent flex items-center">
      <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
      Email
    </span>
  </a>
</div>

  <blockquote class="border-l-4 border-indigo-500 dark:border-indigo-400 pl-4 italic text-gray-600 dark:text-gray-400 mt-6">
    “Innovation doesn’t require perfection—it requires purpose, passion, and a problem worth solving.” — Devnaam Priyaderhi
  </blockquote>

  <p class="text-gray-600 dark:text-gray-400 leading-relaxed mt-6">
    Planning to join the next NASA Space Apps Challenge? Let me know—I’d love to cheer you on or help however I can!
  </p>
</div>

      `
    },
    {
        id: 2,
        title: '📊 Why Do We Need Skills More Than a Degree Nowadays?',
        preview: 'Sharing my journey as a student, I explore why skills outweigh degrees in today’s tech and freelancing world.',
        tag: 'Life',
        image: 'https://images.unsplash.com/photo-1516321310764-8d8a6f3b7e6e',
        content: `
        <div class="space-y-6">
  <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
    🎓 A degree can open the door. But in today’s fast-moving world, it’s the *skills* that get you the seat at the table—and help you stay there.
  </p>

  <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
    Hi, I’m <strong>Devnaam Priyaderhi</strong>, a B.Tech 3rd-year Data Science student from Sri Venkateshwara College of Engineering and Technology, Chittoor. And here’s why I believe *skills now matter more than degrees*—not just in tech, but across every industry.
  </p>

  <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8">📉 The Problem with Relying Solely on Degrees</h2>
  <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
    Degrees often follow outdated curriculums, while industries evolve rapidly. Many graduates step out with theoretical knowledge but lack practical application. Meanwhile, companies today want professionals who can <strong>build, adapt, and contribute from Day 1</strong>.
  </p>

  <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8">🧠 Why Skills Matter More</h2>
  <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
    <li>Skills are proof you can solve real-world problems.</li>
    <li>They show initiative, passion, and continuous learning.</li>
    <li>With tech evolving so fast, adaptability is everything.</li>
  </ul>
  <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
    From coding and design to communication and analysis—skills give you the edge that no paper certificate can.
  </p>

  <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8">💼 What Companies Actually Look For</h2>
  <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
    Today’s recruiters check your <span class="italic">GitHub</span> before your resume. They want to see:
  </p>
  <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
    <li>Hands-on projects</li>
    <li>Hackathon experience</li>
    <li>Internships, freelancing, open-source contributions</li>
    <li>Your ability to <strong>communicate, collaborate</strong>, and keep learning</li>
  </ul>

  <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8">⚙️ Skills You Should Start With</h2>
  <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
    Depending on your interest, here are some in-demand skills to explore:
  </p>
  <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
    <li><strong>Tech:</strong> Python, JavaScript, SQL, Data Analysis, Cloud Computing</li>
    <li><strong>Creative:</strong> UI/UX Design, Video Editing, Content Writing</li>
    <li><strong>Core:</strong> Communication, Public Speaking, Problem Solving</li>
  </ul>

  <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8">📈 My Personal Take</h2>
  <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
    I started with theory too, but it was only when I built projects, joined hackathons, and shared work publicly that opportunities began to show up. The degree gives you structure. The *skills* give you wings.
  </p>

  <blockquote class="border-l-4 border-indigo-500 dark:border-indigo-400 pl-4 italic text-gray-600 dark:text-gray-400">
    “The world doesn’t hire degrees—it hires doers.” — Devnaam Priyaderhi
  </blockquote>

  <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8">🚀 The Way Forward</h2>
  <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
    Combine your degree with side projects. Volunteer. Learn online. Intern. Share on LinkedIn. Build a portfolio. Focus on learning something new every day—even if it's just 1%.
  </p>

  <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8">💬 Let’s Talk!</h2>
  <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
    Want help getting started with skill-building or projects? I’d love to connect:
  </p>
  <div class="flex flex-wrap gap-4">
  <a href="https://www.linkedin.com/in/raj-priyadershi-56a256282/" class="relative inline-flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800" aria-label="Connect on LinkedIn">
    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent flex items-center">
      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.02-3.06-1.865-3.06-1.866 0-2.152 1.458-2.152 2.966v5.698h-3v-11h2.879v1.508h.041c.401-.761 1.379-1.558 2.837-1.558 3.036 0 3.6 2.001 3.6 4.604v6.446z"/>
      </svg>
      LinkedIn
    </span>
  </a>
  <a href="https://github.com/Devnaam" class="relative inline-flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800" aria-label="View GitHub Profile">
    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent flex items-center">
      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
      GitHub
    </span>
  </a>
  <a href="https://devnaam4s.vercel.app/" class="relative inline-flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800" aria-label="Visit Portfolio">
    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent flex items-center">
      <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
      </svg>
      Portfolio
    </span>
  </a>
  <a href="mailto:workwithdevnaam@gmail.com" class="relative inline-flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800" aria-label="Send Email">
    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent flex items-center">
      <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
      Email
    </span>
  </a>
</div>

  <p class="text-gray-600 dark:text-gray-400 leading-relaxed mt-6">
    Ready to build? Let your journey begin today—not after your final semester.
  </p>
</div>

        `,
      },
    {
      id: 3,
      title: 'My Latest Project Journey',
      preview: 'A deep dive into my newest project and lessons learned.',
      tag: 'Projects',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      content:
        'This project was a challenging yet rewarding experience. In this post, I share the creative process, technical hurdles, and key takeaways for developers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  // Framer Motion variants
  const cardVariants = {
    rest: { y: 0, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' },
    hover: {
      y: -5,
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
      transition: { duration: 0.3 },
    },
  };

  const previewVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } },
  };

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 font-sans flex flex-col lg:flex-row transition-colors duration-300">
      {/* Left Side: Blog List */}
      <div className="lg:w-1/3 w-full bg-white dark:bg-gray-800 lg:sticky lg:top-0 lg:h-screen overflow-y-auto p-6 border-r border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Blog Posts</h1>
        <div className="space-y-4">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              className={`p-4 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 ${
                selectedPost?.id === post.id
                  ? 'bg-indigo-100 dark:bg-indigo-900'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              onClick={() => setSelectedPost(post)}
            >
              <span className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-200 text-xs font-semibold px-2 py-1 rounded mb-2">
                {post.tag}
              </span>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{post.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{post.preview}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Side: Preview Pane */}
      <div className="lg:w-2/3 w-full p-6 lg:p-10">
        <AnimatePresence mode="wait">
          {selectedPost ? (
            <motion.div
              key={selectedPost.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8"
              variants={previewVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-64 md:h-80 object-cover rounded-lg mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              />
              <motion.span
                className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-200 text-xs font-semibold px-2 py-1 rounded mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {selectedPost.tag}
              </motion.span>
              <motion.h1
                className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {selectedPost.title}
              </motion.h1>
              <motion.div
                className="text-gray-600 dark:text-gray-400 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                variants={contentVariants}
                initial="initial"
                animate="animate"
              />
            </motion.div>
          ) : (
            <motion.div
              key="placeholder"
              className="flex items-center justify-center h-full"
              variants={previewVariants}
              initial="initial"
              animate="animate"
            >
              <p className="text-gray-500 dark:text-gray-400 text-lg">Select a post to read</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Blog;
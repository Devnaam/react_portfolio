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
  <ul class="list-none text-gray-600 dark:text-gray-400 space-y-2">
    <li>
      <a href="[Your LinkedIn URL]" class="text-indigo-600 dark:text-indigo-400 hover:underline">LinkedIn</a>
    </li>
    <li>
      <a href="[Your GitHub URL]" class="text-indigo-600 dark:text-indigo-400 hover:underline">GitHub</a>
    </li>
    <li>
      <a href="[Your Portfolio URL]" class="text-indigo-600 dark:text-indigo-400 hover:underline">Portfolio</a>
    </li>
    <li>
      <a href="mailto:workwithdevnaam@gmail.com" class="text-indigo-600 dark:text-indigo-400 hover:underline">Email: workwithdevnaam@gmail.com</a>
    </li>
  </ul>

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
      title: '📊 Why You Should Start Blogging as a Developer',
      preview: 'Sharing your journey helps others and boosts your brand.',
      tag: 'Life',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      content:
        'Blogging as a developer is a powerful way to share knowledge, connect with others, and grow your personal brand. This post explores practical tips for getting started, from choosing topics to building an audience. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
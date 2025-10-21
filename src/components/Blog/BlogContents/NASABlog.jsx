// src/components/Blog/BlogContents/NASABlog.jsx
import React from "react";

function NASABlog({ theme }) {
  return (
    <div className="space-y-6">
      {/* Opening */}
      <p className={`text-lg leading-relaxed ${theme ? "text-gray-300" : "text-gray-700"}`}>
        ⏱️ 72 hours. 🌍 One global stage. 🚀 Limitless ideas. And in the midst of chaos and caffeine—we built something that earned recognition from NASA.
      </p>

      <p className={`text-lg leading-relaxed ${theme ? "text-gray-300" : "text-gray-700"}`}>
        Hi, I'm <span className="font-bold text-orange-500">Devnaam Priyaderhi</span>, a B.Tech 3rd-year Data Science student from Sri Venkateshwara College of Engineering and Technology, Chittoor. Here's the story of how my team and I developed a tech solution that won the Locard Award at the NASA Space Apps Challenge—the world's biggest global hackathon.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4">
        What is the NASA Space Apps Challenge?
      </h2>
      
      <p className={`text-lg leading-relaxed ${theme ? "text-gray-300" : "text-gray-700"}`}>
        The NASA International Space Apps Challenge is not just a hackathon—it's a global innovation movement. Each year, participants from over 150 countries come together for 48–72 hours to solve real-world problems using NASA's open data. I discovered it through LinkedIn, and something about the energy and scale immediately pulled me in.
      </p>

      <p className={`text-lg leading-relaxed ${theme ? "text-gray-300" : "text-gray-700"}`}>
        Among several global awards, the <span className="font-bold text-orange-500">Locard Award</span> stands out—it's given to the solution that best represents cybersecurity, digital integrity, and trust in space tech. Winning this meant our solution didn't just work—it was secure, scalable, and ready for mission-critical applications.
      </p>

      {/* Section 2 */}
      <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4">
        The Challenge We Solved
      </h2>
      
      <p className={`text-lg leading-relaxed ${theme ? "text-gray-300" : "text-gray-700"}`}>
        We focused on a very real challenge: <span className="italic">"How can we protect the integrity of satellite and mapping data in high-risk areas?"</span>
      </p>

      <p className={`text-lg leading-relaxed ${theme ? "text-gray-300" : "text-gray-700"}`}>
        In an era where this data powers military ops, disaster management, and navigation systems—security is non-negotiable.
      </p>

      {/* Section 3 */}
      <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4">
        What We Built
      </h2>
      
      <p className={`text-lg leading-relaxed ${theme ? "text-gray-300" : "text-gray-700"}`}>
        We created a secure, AI-assisted web platform that maps sensitive zones using QGIS and detects real-time anomalies in satellite-fed data.
      </p>

      <div className={`${theme ? "bg-gray-800" : "bg-orange-50"} border-l-4 border-orange-500 p-4 my-6`}>
        <p className={`font-semibold mb-2 ${theme ? "text-white" : "text-gray-900"}`}>
          My Contributions:
        </p>
        <ul className={`space-y-2 ${theme ? "text-gray-300" : "text-gray-700"}`}>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 font-bold">•</span>
            <span>Full-stack architecture design and implementation</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 font-bold">•</span>
            <span>Authentication and role-based access control</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 font-bold">•</span>
            <span>AI anomaly detection integration</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 font-bold">•</span>
            <span>Secure API endpoint deployment</span>
          </li>
        </ul>
      </div>

      <div className={`${theme ? "bg-gray-800" : "bg-gray-100"} rounded-lg p-6 my-6`}>
        <p className={`font-semibold mb-3 text-orange-500`}>
          Key Features:
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          <div className={`flex items-center gap-2 ${theme ? "text-gray-300" : "text-gray-700"}`}>
            <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Real-time satellite data mapping
          </div>
          <div className={`flex items-center gap-2 ${theme ? "text-gray-300" : "text-gray-700"}`}>
            <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Cybersecurity-focused integrity checks
          </div>
          <div className={`flex items-center gap-2 ${theme ? "text-gray-300" : "text-gray-700"}`}>
            <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            AI-powered anomaly detection
          </div>
          <div className={`flex items-center gap-2 ${theme ? "text-gray-300" : "text-gray-700"}`}>
            <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Scalable architecture for mission-critical use
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4">
        The 72-Hour Sprint
      </h2>
      
      <p className={`text-lg leading-relaxed ${theme ? "text-gray-300" : "text-gray-700"}`}>
        What made this unforgettable wasn't just the tech—it was the momentum. Ideas flying, keyboards clacking, builds breaking and fixing—nonstop adrenaline!
      </p>

      <blockquote className={`border-l-4 border-orange-500 pl-4 py-2 my-6 italic text-lg ${theme ? "text-gray-400" : "text-gray-600"}`}>
        "Everyone was rushing, typing, deploying, debugging like a storm—and yet there was this electric energy that made me push beyond what I thought were my limits."
      </blockquote>

      <p className={`text-lg leading-relaxed ${theme ? "text-gray-300" : "text-gray-700"}`}>
        That pressure turned into purpose—and ultimately, clarity.
      </p>

      {/* Section 5 */}
      <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4">
        The Winning Moment
      </h2>
      
      <p className={`text-lg leading-relaxed ${theme ? "text-gray-300" : "text-gray-700"}`}>
        When they announced our name as the <span className="font-bold text-orange-500">Locard Award Winners</span>, we went silent for a moment. Then—we celebrated. The judges applauded our focus on cybersecurity, usability, and real-world relevance. That moment changed everything for me.
      </p>

      {/* Section 6 */}
      <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4">
        What I Learned
      </h2>
      
      <p className={`text-lg leading-relaxed mb-4 ${theme ? "text-gray-300" : "text-gray-700"}`}>
        These 72 hours taught me more than a semester's worth of lectures:
      </p>

      <div className="space-y-4">
        <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-4 rounded-lg`}>
          <h3 className="font-bold text-lg mb-2 text-orange-500">1. Speed Without Sacrificing Quality</h3>
          <p className={theme ? "text-gray-300" : "text-gray-700"}>
            Build production-ready solutions under tight deadlines without compromising security or architecture.
          </p>
        </div>

        <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-4 rounded-lg`}>
          <h3 className="font-bold text-lg mb-2 text-orange-500">2. Complex Systems, Simple Solutions</h3>
          <p className={theme ? "text-gray-300" : "text-gray-700"}>
            Break down big problems into manageable components that scale.
          </p>
        </div>

        <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-4 rounded-lg`}>
          <h3 className="font-bold text-lg mb-2 text-orange-500">3. Team Collaboration Under Pressure</h3>
          <p className={theme ? "text-gray-300" : "text-gray-700"}>
            Clear communication prevents costly mistakes and keeps everyone aligned.
          </p>
        </div>

        <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-4 rounded-lg`}>
          <h3 className="font-bold text-lg mb-2 text-orange-500">4. Real-World Impact Thinking</h3>
          <p className={theme ? "text-gray-300" : "text-gray-700"}>
            Every feature needs a "why" before the "how." Users care about outcomes, not just technologies.
          </p>
        </div>
      </div>

      <p className={`text-lg leading-relaxed mt-4 ${theme ? "text-gray-300" : "text-gray-700"}`}>
        Most importantly, it taught me that <span className="font-bold text-orange-500">no idea is too small when backed with intent and execution</span>.
      </p>

      {/* Section 7 */}
      <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4">
        My Advice for Future Participants
      </h2>
      
      <p className={`text-lg leading-relaxed ${theme ? "text-gray-300" : "text-gray-700"}`}>
        Whether you're a beginner or a pro—just start. Don't wait for perfect timing or skills. The world needs your ideas.
      </p>

      <div className={`${theme ? "bg-orange-900 bg-opacity-20" : "bg-orange-50"} border border-orange-500 rounded-lg p-6 my-6`}>
        <p className="font-semibold text-orange-500 mb-3">Here's what helped me:</p>
        <ul className={`space-y-2 ${theme ? "text-gray-300" : "text-gray-700"}`}>
          <li>✅ Form diverse teams (design + dev + domain expertise)</li>
          <li>✅ Start with the problem, not the tech</li>
          <li>✅ Build MVPs that work, then iterate</li>
          <li>✅ Document as you build</li>
          <li>✅ Present with clarity and confidence</li>
        </ul>
      </div>

      {/* Closing */}
      <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4">
        Closing Thoughts
      </h2>
      
      <p className={`text-lg leading-relaxed ${theme ? "text-gray-300" : "text-gray-700"}`}>
        I'm beyond grateful to NASA, the Space Apps organizing team, mentors, and judges who believed in us. This win fueled my passion for space tech, cybersecurity, and AI—and I'm only getting started.
      </p>

      <blockquote className={`border-l-4 border-orange-500 pl-4 py-2 my-6 italic text-lg font-semibold ${theme ? "text-orange-400" : "text-orange-600"}`}>
        "Innovation doesn't require perfection—it requires purpose, passion, and a problem worth solving." 
        <span className="block mt-2 text-base not-italic">— Devnaam Priyaderhi</span>
      </blockquote>

      <p className={`text-lg leading-relaxed ${theme ? "text-gray-300" : "text-gray-700"}`}>
        Planning to join the next NASA Space Apps Challenge? Let me know—I'd love to cheer you on or help however I can!
      </p>
    </div>
  );
}

export default NASABlog;

// src/components/Project/CaseStudies/SkillExchangeCaseStudy.jsx
import React from "react";

function SkillExchangeCaseStudy({ theme }) {
  return (
    <div className="space-y-8">
      {/* Problem Section */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="text-orange-500">🎯</span> The Challenge
        </h3>
        
        <p className={`text-base md:text-lg mb-6 leading-relaxed ${theme ? "text-gray-300" : "text-gray-700"}`}>
          People want to learn skills locally but have no way to find teachers or students nearby. Existing platforms are global and impersonal, lacking location-based matching.
        </p>

        <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-6 rounded-lg space-y-4`}>
          <p className={`text-base leading-relaxed ${theme ? "text-gray-300" : "text-gray-700"}`}>
            The current learning marketplace has critical gaps:
          </p>

          <ul className={`space-y-3 ${theme ? "text-gray-300" : "text-gray-700"}`}>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold flex-shrink-0">•</span>
              <span>No way to find guitar teachers within 5km of your home</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold flex-shrink-0">•</span>
              <span>Students can't showcase their skills to attract local learners</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold flex-shrink-0">•</span>
              <span>No real-time messaging for quick coordination</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold flex-shrink-0">•</span>
              <span>Trust issues - no verification or review system</span>
            </li>
          </ul>

          <div className={`${theme ? "bg-gray-900" : "bg-white"} p-4 rounded border-l-4 border-orange-500 mt-4`}>
            <p className={`text-sm italic ${theme ? "text-gray-400" : "text-gray-600"}`}>
              Result: People waste time on generic platforms or settle for low-quality teachers from random Facebook posts.
            </p>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="text-orange-500">💡</span> My Solution
        </h3>

        <p className={`text-base md:text-lg mb-6 leading-relaxed ${theme ? "text-gray-300" : "text-gray-700"}`}>
          Built a hyperlocal skill-sharing marketplace where users can teach what they know and learn what they want—all within their neighborhood. Features AI-powered matching, real-time chat, and location-based discovery.
        </p>

        <div className="space-y-6">
          {/* Key Features */}
          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-6 rounded-lg`}>
            <h4 className="text-lg font-bold text-orange-500 mb-4">Platform Features</h4>
            
            <div className="space-y-4">
              <div className={`${theme ? "bg-gray-900" : "bg-white"} p-4 rounded-lg`}>
                <p className="font-semibold mb-2 text-orange-500">📍 Location-Based Discovery</p>
                <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
                  Find teachers and students within your preferred radius (1km-50km). Integrated Mapbox for precise location matching.
                </p>
              </div>

              <div className={`${theme ? "bg-gray-900" : "bg-white"} p-4 rounded-lg`}>
                <p className="font-semibold mb-2 text-orange-500">🤖 AI-Powered Matching</p>
                <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
                  Gemini 2.0 Flash API suggests the best skill matches based on user profiles, location, and availability. "Looking for Python tutors? Here are 3 verified experts near you."
                </p>
              </div>

              <div className={`${theme ? "bg-gray-900" : "bg-white"} p-4 rounded-lg`}>
                <p className="font-semibold mb-2 text-orange-500">💬 Real-Time Messaging</p>
                <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
                  Built-in chat system for instant communication. Discuss timings, rates, and details without sharing phone numbers upfront.
                </p>
              </div>

              <div className={`${theme ? "bg-gray-900" : "bg-white"} p-4 rounded-lg`}>
                <p className="font-semibold mb-2 text-orange-500">📊 Interactive Feed</p>
                <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
                  Users post what they're teaching/learning with images and videos. Engagement through likes, comments, and shares builds community.
                </p>
              </div>

              <div className={`${theme ? "bg-gray-900" : "bg-white"} p-4 rounded-lg`}>
                <p className="font-semibold mb-2 text-orange-500">✅ Profile Verification</p>
                <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
                  Email and phone verification. Teachers can upload certificates/portfolios. Students see "Verified Teacher" badges.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Stack */}
          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-6 rounded-lg`}>
            <h4 className="text-lg font-bold text-orange-500 mb-3">Technical Implementation</h4>
            <ul className={`space-y-3 text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
              <li className="flex items-start gap-3">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span>Next.js with TypeScript for type-safe, scalable codebase</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span>PostgreSQL + Prisma for complex relational data (users, posts, messages, matches)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span>NextAuth.js for secure authentication with OAuth support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span>Gemini 2.0 Flash API for AI-powered skill matching and recommendations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span>Mapbox API for location-based search with distance calculations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span>Real-time messaging with WebSocket connections</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Challenges Section */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="text-orange-500">⚡</span> Challenges & Solutions
        </h3>
        
        <div className="space-y-4">
          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-5 rounded-lg`}>
            <h4 className="font-bold text-orange-500 mb-2">AI Matching Accuracy</h4>
            <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
              Initially, AI suggested irrelevant matches (e.g., advanced coding teachers for beginners). Fixed by adding skill level filters and training the AI with user feedback data.
            </p>
          </div>

          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-5 rounded-lg`}>
            <h4 className="font-bold text-orange-500 mb-2">Real-Time Chat Performance</h4>
            <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
              WebSocket connections dropped during high traffic. Implemented connection pooling and message queuing to handle 1000+ concurrent chats.
            </p>
          </div>

          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-5 rounded-lg`}>
            <h4 className="font-bold text-orange-500 mb-2">Location Privacy</h4>
            <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
              Users worried about exact address exposure. Added "fuzzy location" feature showing only approximate area until both parties agree to share details.
            </p>
          </div>

          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-5 rounded-lg`}>
            <h4 className="font-bold text-orange-500 mb-2">Feed Content Moderation</h4>
            <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
              Spam posts started appearing. Integrated AI-based content filtering and added user reporting system with automated flagging.
            </p>
          </div>
        </div>
      </div>

      {/* Results & Impact */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="text-orange-500">📈</span> Results & Impact
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-6 rounded-lg`}>
            <h4 className="font-bold text-lg mb-3 text-orange-500">For Learners</h4>
            <ul className={`space-y-2 text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
              <li className="flex items-start gap-2">
                <span className="text-green-500">→</span>
                <span>Find local teachers 10x faster than Facebook groups</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">→</span>
                <span>AI recommendations save hours of manual searching</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">→</span>
                <span>Verified profiles reduce risk of fake teachers</span>
              </li>
            </ul>
          </div>

          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-6 rounded-lg`}>
            <h4 className="font-bold text-lg mb-3 text-orange-500">For Teachers</h4>
            <ul className={`space-y-2 text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
              <li className="flex items-start gap-2">
                <span className="text-green-500">→</span>
                <span>Reach 50+ potential students per week passively</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">→</span>
                <span>Built-in messaging eliminates phone number sharing until trust is built</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">→</span>
                <span>Portfolio showcase attracts serious learners</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lessons Learned */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="text-orange-500">📚</span> Lessons Learned
        </h3>
        <ul className={`space-y-3 ${theme ? "text-gray-300" : "text-gray-700"}`}>
          <li className="flex items-start gap-3 text-sm md:text-base">
            <span className="text-orange-500 font-bold flex-shrink-0">•</span>
            <span>Location-based features require privacy controls from day one</span>
          </li>
          <li className="flex items-start gap-3 text-sm md:text-base">
            <span className="text-orange-500 font-bold flex-shrink-0">•</span>
            <span>AI recommendations improve 3x faster when you collect user feedback</span>
          </li>
          <li className="flex items-start gap-3 text-sm md:text-base">
            <span className="text-orange-500 font-bold flex-shrink-0">•</span>
            <span>Real-time chat is a must-have for marketplaces—users expect instant responses</span>
          </li>
          <li className="flex items-start gap-3 text-sm md:text-base">
            <span className="text-orange-500 font-bold flex-shrink-0">•</span>
            <span>Community features (feed, likes, comments) increase user retention by 40%</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SkillExchangeCaseStudy;

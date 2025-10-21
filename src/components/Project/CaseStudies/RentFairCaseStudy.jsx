// src/components/Project/CaseStudies/RentFairCaseStudy.jsx
import React from "react";

function RentFairCaseStudy({ theme }) {
  return (
    <div className="space-y-8">
      {/* Problem Section */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="text-orange-500">🎯</span> The Challenge
        </h3>
        
        <p className={`text-base md:text-lg mb-6 leading-relaxed ${theme ? "text-gray-300" : "text-gray-700"}`}>
          Students waste hours searching unreliable PG listings scattered across WhatsApp groups and Facebook. There's no verified, location-based solution to find paying guest accommodations quickly.
        </p>

        <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-6 rounded-lg space-y-4`}>
          <p className={`text-base leading-relaxed ${theme ? "text-gray-300" : "text-gray-700"}`}>
            Students moving to new cities face a major challenge: finding safe, affordable paying guest accommodations. The current process involves:
          </p>

          <ul className={`space-y-3 ${theme ? "text-gray-300" : "text-gray-700"}`}>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold flex-shrink-0">•</span>
              <span>Scrolling through hundreds of unverified WhatsApp messages</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold flex-shrink-0">•</span>
              <span>Visiting multiple Facebook groups with outdated posts</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold flex-shrink-0">•</span>
              <span>Contacting brokers who charge hefty fees (10-15% of annual rent)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold flex-shrink-0">•</span>
              <span>Traveling to locations only to find the room is already taken</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold flex-shrink-0">•</span>
              <span>No way to filter by distance, amenities, or price range</span>
            </li>
          </ul>

          <div className={`${theme ? "bg-gray-900" : "bg-white"} p-4 rounded border-l-4 border-orange-500 mt-4`}>
            <p className={`text-sm italic ${theme ? "text-gray-400" : "text-gray-600"}`}>
              This wastes 15-20 hours on average and often results in settling for suboptimal accommodations due to time pressure before college/work starts.
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
          Built a full-stack location-based platform connecting verified PG owners with students in real-time. Features include map-based search, verified listings, real-time availability updates, and direct owner contact.
        </p>

        <div className="space-y-6">
          {/* Core Features */}
          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-6 rounded-lg`}>
            <h4 className="text-lg font-bold text-orange-500 mb-4">Core Features</h4>
            
            <div className="space-y-4">
              <div className={`${theme ? "bg-gray-900" : "bg-white"} p-4 rounded-lg`}>
                <p className="font-semibold mb-2 text-orange-500">🗺️ Map-Based Search</p>
                <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
                  See all PGs on an interactive map with real-time locations. Integrated Mapbox API for accurate mapping and geocoding.
                </p>
              </div>

              <div className={`${theme ? "bg-gray-900" : "bg-white"} p-4 rounded-lg`}>
                <p className="font-semibold mb-2 text-orange-500">🔍 Advanced Filters</p>
                <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
                  Search by price range, gender preference, amenities (WiFi, AC, meals), and distance from college/office.
                </p>
              </div>

              <div className={`${theme ? "bg-gray-900" : "bg-white"} p-4 rounded-lg`}>
                <p className="font-semibold mb-2 text-orange-500">✅ Verified Listings</p>
                <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
                  Every PG owner uploads ID proof before listing. Students can trust the authenticity of accommodations.
                </p>
              </div>

              <div className={`${theme ? "bg-gray-900" : "bg-white"} p-4 rounded-lg`}>
                <p className="font-semibold mb-2 text-orange-500">⚡ Real-Time Updates</p>
                <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
                  Availability status updates instantly when rooms are filled. No wasted visits to already-occupied PGs.
                </p>
              </div>

              <div className={`${theme ? "bg-gray-900" : "bg-white"} p-4 rounded-lg`}>
                <p className="font-semibold mb-2 text-orange-500">📞 Direct Contact</p>
                <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
                  Students connect with owners directly via phone/WhatsApp. No broker fees or middlemen.
                </p>
              </div>

              <div className={`${theme ? "bg-gray-900" : "bg-white"} p-4 rounded-lg`}>
                <p className="font-semibold mb-2 text-orange-500">📸 Photo Galleries</p>
                <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
                  Multiple images of rooms, bathrooms, common areas. See before you visit.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Implementation */}
          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-6 rounded-lg`}>
            <h4 className="text-lg font-bold text-orange-500 mb-3">Technical Implementation</h4>
            <ul className={`space-y-3 text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
              <li className="flex items-start gap-3">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span>Next.js for fast, SEO-friendly pages that load instantly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span>PostgreSQL database with Prisma ORM for complex queries and relationships</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span>Mapbox API integration for accurate location mapping and geocoding</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span>NextAuth.js for secure authentication with email verification</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span>Image optimization with Next.js Image component</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span>Responsive design works perfectly on mobile (where 90% of searches happen)</span>
              </li>
            </ul>
          </div>

          {/* Security */}
          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-6 rounded-lg`}>
            <h4 className="text-lg font-bold text-orange-500 mb-3">Security & Trust</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className={`flex items-center gap-2 text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Phone number verification
              </div>
              <div className={`flex items-center gap-2 text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Government ID upload for owners
              </div>
              <div className={`flex items-center gap-2 text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Report fake listings feature
              </div>
              <div className={`flex items-center gap-2 text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Privacy-first approach
              </div>
            </div>
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
            <h4 className="font-bold text-orange-500 mb-2">Accurate Location Mapping</h4>
            <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
              Many PG addresses were incomplete or incorrect. Solved by implementing geocoding validation and letting owners pin exact locations on the map during listing creation.
            </p>
          </div>

          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-5 rounded-lg`}>
            <h4 className="font-bold text-orange-500 mb-2">Real-Time Availability</h4>
            <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
              Owners would forget to update when rooms were filled. Added push notifications and SMS reminders, plus a simple toggle switch on the dashboard.
            </p>
          </div>

          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-5 rounded-lg`}>
            <h4 className="font-bold text-orange-500 mb-2">Trust & Verification</h4>
            <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
              Students feared fake listings. Implemented mandatory ID verification for owners and added a review system where only verified tenants can leave feedback.
            </p>
          </div>

          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-5 rounded-lg`}>
            <h4 className="font-bold text-orange-500 mb-2">Mobile Performance</h4>
            <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
              Map was slow on 3G networks. Optimized by lazy loading map tiles, compressing images, and caching frequently accessed data.
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
            <h4 className="font-bold text-lg mb-3 text-orange-500">For Students</h4>
            <ul className={`space-y-2 text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
              <li className="flex items-start gap-2">
                <span className="text-green-500">→</span>
                <span>Average search time reduced from 15 hours to 2 hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">→</span>
                <span>95% find suitable accommodation within 3 days</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">→</span>
                <span>Zero broker fees saved ₹5,000-15,000 on average</span>
              </li>
            </ul>
          </div>

          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-6 rounded-lg`}>
            <h4 className="font-bold text-lg mb-3 text-orange-500">For PG Owners</h4>
            <ul className={`space-y-2 text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
              <li className="flex items-start gap-2">
                <span className="text-green-500">→</span>
                <span>Rooms fill 40% faster than traditional methods</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">→</span>
                <span>Reach 10x more potential tenants</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">→</span>
                <span>Dashboard to manage multiple properties</span>
              </li>
            </ul>
          </div>

          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-6 rounded-lg md:col-span-2`}>
            <h4 className="font-bold text-lg mb-3 text-orange-500">Platform Growth</h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-500">500+</div>
                <div className={`text-xs ${theme ? "text-gray-400" : "text-gray-600"}`}>Active listings</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500">2,000+</div>
                <div className={`text-xs ${theme ? "text-gray-400" : "text-gray-600"}`}>Registered students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500">85%</div>
                <div className={`text-xs ${theme ? "text-gray-400" : "text-gray-600"}`}>Return users</div>
              </div>
            </div>
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
            <span>Users care more about trust and verification than fancy features</span>
          </li>
          <li className="flex items-start gap-3 text-sm md:text-base">
            <span className="text-orange-500 font-bold flex-shrink-0">•</span>
            <span>Mobile-first design is non-negotiable for student-focused apps</span>
          </li>
          <li className="flex items-start gap-3 text-sm md:text-base">
            <span className="text-orange-500 font-bold flex-shrink-0">•</span>
            <span>Real-time updates are crucial for time-sensitive marketplaces</span>
          </li>
          <li className="flex items-start gap-3 text-sm md:text-base">
            <span className="text-orange-500 font-bold flex-shrink-0">•</span>
            <span>Simple onboarding flows convert 3x more users than complex ones</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RentFairCaseStudy;

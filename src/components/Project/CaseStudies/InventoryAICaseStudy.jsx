// src/components/Project/CaseStudies/InventoryAICaseStudy.jsx
import React from "react";

function InventoryAICaseStudy({ theme }) {
  return (
    <div className="space-y-8">
      {/* Problem Section */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="text-orange-500">🎯</span> The Challenge
        </h3>
        
        <p className={`text-base md:text-lg mb-6 leading-relaxed ${theme ? "text-gray-300" : "text-gray-700"}`}>
          Small business owners struggle with complex Excel sheets and manual inventory tracking. They need to answer questions like 'What are my top-selling products?' but lack technical skills to analyze data.
        </p>

        <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-6 rounded-lg space-y-4`}>
          <p className={`text-base leading-relaxed ${theme ? "text-gray-300" : "text-gray-700"}`}>
            Small retail businesses track inventory in Excel sheets with 1000+ rows. Common challenges:
          </p>

          <ul className={`space-y-3 ${theme ? "text-gray-300" : "text-gray-700"}`}>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold flex-shrink-0">•</span>
              <span>Owners want to know "Which products sold most last month?" but don't know Excel formulas</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold flex-shrink-0">•</span>
              <span>Accountants waste 5-10 hours weekly creating manual reports</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold flex-shrink-0">•</span>
              <span>No way to spot trends like "low stock alerts" or "seasonal patterns"</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold flex-shrink-0">•</span>
              <span>Sharing files via WhatsApp leads to version confusion</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold flex-shrink-0">•</span>
              <span>Hiring data analysts is too expensive for small businesses</span>
            </li>
          </ul>

          <div className={`${theme ? "bg-gray-900" : "bg-white"} p-4 rounded border-l-4 border-orange-500 mt-4`}>
            <p className={`text-sm italic ${theme ? "text-gray-400" : "text-gray-600"}`}>
              A typical shop owner has to: Open Excel → Find the right column → Apply filters → Create pivot tables. 
              Or hire someone for ₹5,000/month just to generate reports. This is expensive, time-consuming, and error-prone.
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
          Created an AI assistant powered by Google's Gemini API that answers inventory questions in plain English. Users upload their files (Excel/CSV/PDF) and ask questions naturally.
        </p>

        <div className="space-y-6">
          {/* Feature 1 */}
          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-6 rounded-lg`}>
            <h4 className="text-lg font-bold text-orange-500 mb-3">Built an AI-powered dashboard where users can:</h4>
            
            <div className={`${theme ? "bg-gray-900" : "bg-white"} p-4 rounded-lg mb-4`}>
              <p className="font-semibold mb-2 text-orange-500">**Natural Language Queries:**</p>
              <ul className={`space-y-2 text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0">•</span>
                  <span>"What are my top 5 selling products this month?"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0">•</span>
                  <span>"Which items are low in stock?"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0">•</span>
                  <span>"Show me revenue trends for the last 6 months"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0">•</span>
                  <span>"Compare sales between Jan and Feb"</span>
                </li>
              </ul>
              <p className={`text-sm mt-3 italic ${theme ? "text-gray-400" : "text-gray-600"}`}>
                The AI understands context and responds with charts and tables.
              </p>
            </div>

            <div className={`${theme ? "bg-gray-900" : "bg-white"} p-4 rounded-lg mb-4`}>
              <p className="font-semibold mb-2 text-orange-500">**File Upload & Processing:**</p>
              <ul className={`space-y-2 text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0">•</span>
                  <span>Drag-and-drop Excel, CSV, PDF, or Word files</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0">•</span>
                  <span>Automatically detects columns (product names, quantities, prices, dates)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0">•</span>
                  <span>Cleans data (handles missing values, duplicates)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0">•</span>
                  <span>Stores processed data securely in MongoDB</span>
                </li>
              </ul>
            </div>

            <div className={`${theme ? "bg-gray-900" : "bg-white"} p-4 rounded-lg`}>
              <p className="font-semibold mb-2 text-orange-500">**Smart Features:**</p>
              <ul className={`space-y-2 text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0">•</span>
                  <span>Auto-generates visual charts (bar, line, pie) for better understanding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0">•</span>
                  <span>Detects patterns: "Your milk sales spike every Friday"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0">•</span>
                  <span>Sends alerts: "5 products are below reorder level"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0">•</span>
                  <span>Export reports as PDF for accountants</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Architecture */}
          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-6 rounded-lg`}>
            <h4 className="text-lg font-bold text-orange-500 mb-3">**Technical Architecture:**</h4>
            <ul className={`space-y-3 text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
              <li className="flex items-start gap-3">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span>React frontend with real-time query interface</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span>Node.js + Express backend handles file uploads via Multer</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span>Gemini 2.0 Flash API processes natural language and generates SQL-like queries</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span>MongoDB stores inventory data with indexing for fast searches</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span>Chart.js renders beautiful, interactive visualizations</span>
              </li>
            </ul>
          </div>

          {/* Security */}
          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-6 rounded-lg`}>
            <h4 className="text-lg font-bold text-orange-500 mb-3">**Security:**</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className={`flex items-center gap-2 text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                User authentication with JWT tokens
              </div>
              <div className={`flex items-center gap-2 text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                File encryption at rest
              </div>
              <div className={`flex items-center gap-2 text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No data shared with third parties
              </div>
              <div className={`flex items-center gap-2 text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                GDPR-compliant data handling
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
            <h4 className="font-bold text-orange-500 mb-2">File Format Variety</h4>
            <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
              Users sent files in 10+ different formats. Built a universal parser that handles Excel (XLSX, XLS), CSV, PDF tables, and Word documents using multiple libraries.
            </p>
          </div>

          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-5 rounded-lg`}>
            <h4 className="font-bold text-orange-500 mb-2">AI Accuracy</h4>
            <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
              Gemini sometimes misunderstood ambiguous queries like 'best products' (by revenue or quantity?). Added context clarification prompts and example queries.
            </p>
          </div>

          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-5 rounded-lg`}>
            <h4 className="font-bold text-orange-500 mb-2">Large File Performance</h4>
            <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
              Files with 50,000+ rows crashed the system. Implemented chunked processing and pagination to handle datasets up to 100,000 rows.
            </p>
          </div>

          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-5 rounded-lg`}>
            <h4 className="font-bold text-orange-500 mb-2">Non-English Data</h4>
            <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
              Some users had product names in Hindi/Tamil. Added multi-language support and transliteration for better AI understanding.
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
            <h4 className="font-bold text-lg mb-3 text-orange-500">Time Savings</h4>
            <ul className={`space-y-2 text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
              <li className="flex items-start gap-2">
                <span className="text-green-500">→</span>
                <span>Reduced report generation time from 5 hours/week to 10 minutes/week</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">→</span>
                <span>Owners make data-driven decisions 3x faster</span>
              </li>
            </ul>
          </div>

          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-6 rounded-lg`}>
            <h4 className="font-bold text-lg mb-3 text-orange-500">Business Value</h4>
            <ul className={`space-y-2 text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
              <li className="flex items-start gap-2">
                <span className="text-green-500">→</span>
                <span>One client increased profit margin by 12% by identifying slow-moving stock</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">→</span>
                <span>Another reduced stockouts by 60% with low-stock alerts</span>
              </li>
            </ul>
          </div>

          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-6 rounded-lg md:col-span-2`}>
            <h4 className="font-bold text-lg mb-3 text-orange-500">User Adoption</h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-500">50+</div>
                <div className={`text-xs ${theme ? "text-gray-400" : "text-gray-600"}`}>Small businesses using daily</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500">4.8/5</div>
                <div className={`text-xs ${theme ? "text-gray-400" : "text-gray-600"}`}>Star rating from users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500">90%</div>
                <div className={`text-xs ${theme ? "text-gray-400" : "text-gray-600"}`}>Upgraded to paid plan</div>
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
            <span>Non-technical users need example queries, not empty input boxes</span>
          </li>
          <li className="flex items-start gap-3 text-sm md:text-base">
            <span className="text-orange-500 font-bold flex-shrink-0">•</span>
            <span>Visual feedback (loading states, progress bars) builds trust during AI processing</span>
          </li>
          <li className="flex items-start gap-3 text-sm md:text-base">
            <span className="text-orange-500 font-bold flex-shrink-0">•</span>
            <span>AI accuracy improves 40% when you add domain-specific context to prompts</span>
          </li>
          <li className="flex items-start gap-3 text-sm md:text-base">
            <span className="text-orange-500 font-bold flex-shrink-0">•</span>
            <span>Free tier with limitations converts better than paid-only model</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default InventoryAICaseStudy;

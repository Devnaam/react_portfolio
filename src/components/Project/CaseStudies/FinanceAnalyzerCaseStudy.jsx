// src/components/Project/CaseStudies/FinanceAnalyzerCaseStudy.jsx
import React from "react";

function FinanceAnalyzerCaseStudy({ theme }) {
  return (
    <div className="space-y-8">
      {/* Problem Section */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="text-orange-500">🎯</span> The Challenge
        </h3>
        
        <p className={`text-base md:text-lg mb-6 leading-relaxed ${theme ? "text-gray-300" : "text-gray-700"}`}>
          Individuals and small businesses struggle to analyze spending patterns and track financial health. Existing tools are either too complex or lack actionable insights.
        </p>

        <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-6 rounded-lg space-y-4`}>
          <p className={`text-base leading-relaxed ${theme ? "text-gray-300" : "text-gray-700"}`}>
            Current financial tracking tools fail users because:
          </p>

          <ul className={`space-y-3 ${theme ? "text-gray-300" : "text-gray-700"}`}>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold flex-shrink-0">•</span>
              <span>Manual data entry is time-consuming and error-prone</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold flex-shrink-0">•</span>
              <span>Bank statements arrive as PDFs—hard to analyze without manual copying</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold flex-shrink-0">•</span>
              <span>No way to ask "Where did my money go this month?"</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold flex-shrink-0">•</span>
              <span>Charts are static—can't drill down into specific categories</span>
            </li>
          </ul>

          <div className={`${theme ? "bg-gray-900" : "bg-white"} p-4 rounded border-l-4 border-orange-500 mt-4`}>
            <p className={`text-sm italic ${theme ? "text-gray-400" : "text-gray-600"}`}>
              Result: People overspend without realizing it, miss savings opportunities, and make financial decisions based on gut feeling rather than data.
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
          Built an intelligent finance analyzer that extracts data from bank statements (PDF/CSV) and provides interactive insights with visual dashboards. Users can ask questions in plain English and get instant answers.
        </p>

        <div className="space-y-6">
          {/* Key Features */}
          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-6 rounded-lg`}>
            <h4 className="text-lg font-bold text-orange-500 mb-4">Smart Features</h4>
            
            <div className="space-y-4">
              <div className={`${theme ? "bg-gray-900" : "bg-white"} p-4 rounded-lg`}>
                <p className="font-semibold mb-2 text-orange-500">📄 Smart PDF Parsing</p>
                <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
                  Upload bank statements in PDF or CSV format. AI automatically extracts transactions with date, amount, category, and merchant.
                </p>
              </div>

              <div className={`${theme ? "bg-gray-900" : "bg-white"} p-4 rounded-lg`}>
                <p className="font-semibold mb-2 text-orange-500">🤖 Natural Language Queries</p>
                <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
                  Ask questions like: "How much did I spend on food last month?" or "Show me my highest expenses." Get instant answers with charts.
                </p>
              </div>

              <div className={`${theme ? "bg-gray-900" : "bg-white"} p-4 rounded-lg`}>
                <p className="font-semibold mb-2 text-orange-500">📊 Interactive Dashboards</p>
                <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
                  Visual breakdown of spending by category, monthly trends, income vs expenses, and savings rate. Click any chart to drill deeper.
                </p>
              </div>

              <div className={`${theme ? "bg-gray-900" : "bg-white"} p-4 rounded-lg`}>
                <p className="font-semibold mb-2 text-orange-500">🎯 Smart Categorization</p>
                <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
                  AI automatically categorizes transactions (Food, Transport, Shopping, Bills, etc.). Edit categories if needed—system learns from corrections.
                </p>
              </div>

              <div className={`${theme ? "bg-gray-900" : "bg-white"} p-4 rounded-lg`}>
                <p className="font-semibold mb-2 text-orange-500">💡 Actionable Insights</p>
                <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
                  Get recommendations: "You spent 40% more on dining out this month" or "Your grocery spending is below average—good job!"
                </p>
              </div>
            </div>
          </div>

          {/* Technical Implementation */}
          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-6 rounded-lg`}>
            <h4 className="text-lg font-bold text-orange-500 mb-3">Technical Stack</h4>
            <ul className={`space-y-3 text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
              <li className="flex items-start gap-3">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span>React with TypeScript for type-safe financial calculations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span>Python backend with pdf-parse library for extracting transaction data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span>Gemini API for natural language processing and smart categorization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span>Chart.js + Recharts for interactive data visualizations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span>MongoDB for storing transaction history and user preferences</span>
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
            <h4 className="font-bold text-orange-500 mb-2">PDF Format Variability</h4>
            <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
              Every bank uses different PDF formats. Built a flexible parser that adapts to 15+ bank statement formats using pattern matching and AI-assisted extraction.
            </p>
          </div>

          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-5 rounded-lg`}>
            <h4 className="font-bold text-orange-500 mb-2">Transaction Categorization Accuracy</h4>
            <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
              AI initially miscategorized "Uber" as shopping instead of transport. Added merchant database and user feedback loop to improve accuracy to 95%.
            </p>
          </div>

          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-5 rounded-lg`}>
            <h4 className="font-bold text-orange-500 mb-2">Data Privacy Concerns</h4>
            <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
              Users worried about uploading bank statements. Implemented end-to-end encryption, auto-delete after 30 days, and optional local-only processing mode.
            </p>
          </div>

          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-5 rounded-lg`}>
            <h4 className="font-bold text-orange-500 mb-2">Multi-Currency Support</h4>
            <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
              International users had statements in different currencies. Added real-time currency conversion API and multi-currency dashboard views.
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
            <h4 className="font-bold text-lg mb-3 text-orange-500">User Benefits</h4>
            <ul className={`space-y-2 text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
              <li className="flex items-start gap-2">
                <span className="text-green-500">→</span>
                <span>Analyze 6 months of transactions in under 5 minutes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">→</span>
                <span>Identify overspending patterns that save users 10-20% monthly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">→</span>
                <span>Natural language queries eliminate need for Excel skills</span>
              </li>
            </ul>
          </div>

          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-6 rounded-lg`}>
            <h4 className="font-bold text-lg mb-3 text-orange-500">Business Value</h4>
            <ul className={`space-y-2 text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
              <li className="flex items-start gap-2">
                <span className="text-green-500">→</span>
                <span>Small business owners track expenses without hiring accountants</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">→</span>
                <span>Visual reports make financial discussions with partners easier</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">→</span>
                <span>Tax preparation simplified with category-wise expense breakdowns</span>
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
            <span>Financial apps must prioritize data privacy to gain user trust</span>
          </li>
          <li className="flex items-start gap-3 text-sm md:text-base">
            <span className="text-orange-500 font-bold flex-shrink-0">•</span>
            <span>Visual insights drive behavior change better than numbers alone</span>
          </li>
          <li className="flex items-start gap-3 text-sm md:text-base">
            <span className="text-orange-500 font-bold flex-shrink-0">•</span>
            <span>AI categorization needs user feedback loop to improve accuracy</span>
          </li>
          <li className="flex items-start gap-3 text-sm md:text-base">
            <span className="text-orange-500 font-bold flex-shrink-0">•</span>
            <span>Support for multiple bank formats is critical for adoption</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FinanceAnalyzerCaseStudy;

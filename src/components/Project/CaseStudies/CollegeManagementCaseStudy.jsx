// src/components/Project/CaseStudies/CollegeManagementCaseStudy.jsx
import React from "react";

function CollegeManagementCaseStudy({ theme }) {
  return (
    <div className="space-y-8">
      {/* Problem Section */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="text-orange-500">🎯</span> The Challenge
        </h3>
        
        <p className={`text-base md:text-lg mb-6 leading-relaxed ${theme ? "text-gray-300" : "text-gray-700"}`}>
          Educational institutions struggle with scattered systems for attendance, grades, assignments, and communication. Students, teachers, and admins lack a unified platform.
        </p>

        <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-6 rounded-lg space-y-4`}>
          <p className={`text-base leading-relaxed ${theme ? "text-gray-300" : "text-gray-700"}`}>
            Current college management suffers from:
          </p>

          <ul className={`space-y-3 ${theme ? "text-gray-300" : "text-gray-700"}`}>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold flex-shrink-0">•</span>
              <span>Manual attendance tracking wastes 10-15 minutes per class</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold flex-shrink-0">•</span>
              <span>No central place for assignment submissions—emails get lost</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold flex-shrink-0">•</span>
              <span>Students check multiple platforms for grades, schedules, and announcements</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold flex-shrink-0">•</span>
              <span>Parents have no visibility into student performance</span>
            </li>
          </ul>

          <div className={`${theme ? "bg-gray-900" : "bg-white"} p-4 rounded border-l-4 border-orange-500 mt-4`}>
            <p className={`text-sm italic ${theme ? "text-gray-400" : "text-gray-600"}`}>
              Result: Teachers spend more time on admin tasks than teaching. Students miss deadlines. Admins struggle with data-driven decision making.
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
          Built a comprehensive college management system with role-based dashboards for students, teachers, and admins. Includes attendance tracking, grade management, assignment submission, and real-time notifications.
        </p>

        <div className="space-y-6">
          {/* Key Features by Role */}
          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-6 rounded-lg`}>
            <h4 className="text-lg font-bold text-orange-500 mb-4">Features by User Role</h4>
            
            <div className="space-y-4">
              {/* Student Features */}
              <div className={`${theme ? "bg-gray-900" : "bg-white"} p-4 rounded-lg`}>
                <p className="font-semibold mb-3 text-orange-500">👨‍🎓 Student Dashboard</p>
                <ul className={`space-y-2 text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">→</span>
                    <span>View attendance records with visual percentages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">→</span>
                    <span>Submit assignments with file uploads and deadline tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">→</span>
                    <span>Check grades with semester-wise GPA calculations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">→</span>
                    <span>Access class schedules and exam timetables</span>
                  </li>
                </ul>
              </div>

              {/* Teacher Features */}
              <div className={`${theme ? "bg-gray-900" : "bg-white"} p-4 rounded-lg`}>
                <p className="font-semibold mb-3 text-orange-500">👩‍🏫 Teacher Dashboard</p>
                <ul className={`space-y-2 text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">→</span>
                    <span>Digital attendance marking with QR code scanning option</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">→</span>
                    <span>Create and grade assignments with rubrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">→</span>
                    <span>Bulk grade entry with CSV upload support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">→</span>
                    <span>Send announcements to specific classes or all students</span>
                  </li>
                </ul>
              </div>

              {/* Admin Features */}
              <div className={`${theme ? "bg-gray-900" : "bg-white"} p-4 rounded-lg`}>
                <p className="font-semibold mb-3 text-orange-500">🏫 Admin Dashboard</p>
                <ul className={`space-y-2 text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">→</span>
                    <span>Manage users (students, teachers, staff) with role assignments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">→</span>
                    <span>Generate reports: attendance trends, grade distributions, performance analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">→</span>
                    <span>Create class schedules and manage timetables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">→</span>
                    <span>System-wide announcements with email notifications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Implementation */}
          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-6 rounded-lg`}>
            <h4 className="text-lg font-bold text-orange-500 mb-3">Technical Architecture</h4>
            <ul className={`space-y-3 text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
              <li className="flex items-start gap-3">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span>MERN stack (MongoDB, Express, React, Node.js) for scalability</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span>Role-based access control (RBAC) with JWT authentication</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span>Real-time notifications using Socket.io</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span>QR code generation for attendance with mobile scanning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span>AWS S3 for secure file storage (assignments, documents)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span>Automated email notifications using Nodemailer</span>
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
            <h4 className="font-bold text-orange-500 mb-2">Role-Based Permission Complexity</h4>
            <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
              Different users needed different access levels. Built a flexible RBAC system with granular permissions (e.g., teacher can grade own classes but not others).
            </p>
          </div>

          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-5 rounded-lg`}>
            <h4 className="font-bold text-orange-500 mb-2">Concurrent Attendance Marking</h4>
            <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
              Multiple students scanning QR codes simultaneously caused database conflicts. Implemented queue system and optimistic locking to handle 100+ concurrent scans.
            </p>
          </div>

          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-5 rounded-lg`}>
            <h4 className="font-bold text-orange-500 mb-2">Data Migration from Legacy Systems</h4>
            <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
              Colleges had existing student records in Excel. Created CSV import tool with data validation and duplicate detection to migrate 10,000+ records seamlessly.
            </p>
          </div>

          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-5 rounded-lg`}>
            <h4 className="font-bold text-orange-500 mb-2">Mobile Optimization</h4>
            <p className={`text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
              Teachers wanted to mark attendance from phones. Built mobile-first UI with QR scanner and offline mode for low-connectivity areas.
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
                <span>Attendance marking reduced from 15 minutes to 2 minutes per class</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">→</span>
                <span>Grade entry 70% faster with bulk upload feature</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">→</span>
                <span>Admin report generation from hours to seconds</span>
              </li>
            </ul>
          </div>

          <div className={`${theme ? "bg-gray-800" : "bg-gray-50"} p-6 rounded-lg`}>
            <h4 className="font-bold text-lg mb-3 text-orange-500">Improved Outcomes</h4>
            <ul className={`space-y-2 text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
              <li className="flex items-start gap-2">
                <span className="text-green-500">→</span>
                <span>Student engagement increased with real-time grade visibility</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">→</span>
                <span>Assignment submission rate improved by 30% with deadline reminders</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">→</span>
                <span>Data-driven decisions enabled by analytics dashboards</span>
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
            <span>Role-based systems require careful planning of permissions hierarchy</span>
          </li>
          <li className="flex items-start gap-3 text-sm md:text-base">
            <span className="text-orange-500 font-bold flex-shrink-0">•</span>
            <span>Mobile-first design is critical for teacher adoption</span>
          </li>
          <li className="flex items-start gap-3 text-sm md:text-base">
            <span className="text-orange-500 font-bold flex-shrink-0">•</span>
            <span>Data migration tools are as important as the main features</span>
          </li>
          <li className="flex items-start gap-3 text-sm md:text-base">
            <span className="text-orange-500 font-bold flex-shrink-0">•</span>
            <span>Real-time notifications significantly improve user engagement</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CollegeManagementCaseStudy;

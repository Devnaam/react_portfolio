// src/components/Blog/BlogContent.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NASABlog from "./BlogContents/NASABlog";
import SkillsBlog from "./BlogContents/SkillsBlog";
import ManagementBlog from "./BlogContents/ManagementBlog";

// Map component names to actual components
const contentComponents = {
  NASABlog,
  SkillsBlog,
  ManagementBlog
};

function BlogContent({ post, theme }) {
  if (!post) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`p-12 md:p-16 rounded-lg text-center ${
          theme ? "bg-gray-900" : "bg-gray-100"
        }`}
      >
        <div className="text-6xl mb-6">📖</div>
        <h3 className="text-2xl font-bold mb-4">Select a post to read</h3>
        <p className={theme ? "text-gray-400" : "text-gray-600"}>
          Choose from the list on the left to start reading
        </p>
      </motion.div>
    );
  }

  // Get the content component
  const ContentComponent = contentComponents[post.contentComponent];

  return (
    <motion.div
      key={post.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={`p-6 md:p-8 rounded-lg ${
        theme ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      {/* Post Header */}
      <div className="mb-6">
        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {post.tag}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
          {post.title}
        </h2>
        <p className={`text-base ${theme ? "text-gray-400" : "text-gray-600"}`}>
          {post.preview}
        </p>
      </div>

      {/* Post Content - Render Component */}
      <div className="mb-8">
        {ContentComponent && <ContentComponent theme={theme} />}
      </div>

      {/* CTA Section */}
      <div
        className={`border-t ${
          theme ? "border-gray-800" : "border-gray-300"
        } pt-6 mt-8`}
      >
        <div
          className={`p-6 rounded-lg text-center ${
            theme ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-3">
            Interested in <span className="text-orange-500">Working Together?</span>
          </h3>
          <p
            className={`mb-6 ${
              theme ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Let's discuss how I can help with your project
          </p>
          <Link to="/contact">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get in Touch →
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default BlogContent;

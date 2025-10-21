// src/components/Blog/BlogPostCard.jsx
import React from "react";
import { motion } from "framer-motion";

function BlogPostCard({ post, isSelected, onClick, theme }) {
  return (
    <motion.div
      onClick={onClick}
      className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
        isSelected
          ? "bg-orange-500 text-white shadow-lg"
          : theme
          ? "bg-gray-900 hover:bg-gray-800"
          : "bg-gray-100 hover:bg-gray-200"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span
        className={`inline-block text-xs px-2 py-1 rounded-full mb-2 ${
          isSelected
            ? "bg-white text-orange-500"
            : "bg-orange-500 text-white"
        }`}
      >
        {post.tag}
      </span>
      
      <h3 className="font-bold text-base mb-2 line-clamp-2">
        {post.title}
      </h3>
      
      <p
        className={`text-sm line-clamp-2 ${
          isSelected
            ? "text-white text-opacity-90"
            : theme
            ? "text-gray-400"
            : "text-gray-600"
        }`}
      >
        {post.preview}
      </p>
    </motion.div>
  );
}

export default BlogPostCard;

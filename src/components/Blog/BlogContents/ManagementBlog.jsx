import React from "react";

function ManagementBlog({ theme }) {
  return (
    <div className={`text-lg ${theme ? "text-gray-300" : "text-gray-700"}`}>
      <p>Management blog content coming soon...</p>
    </div>
  );
}

export default ManagementBlog;

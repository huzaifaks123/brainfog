import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ title, excerpt, link = "#" }) => {
  return (
    <div className="bg-backgroundLight rounded-md p-lg shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md flex flex-col">
      <h3 className="font-title text-2xl text-textDark mb-sm">
        {title}
      </h3>
      <p className="text-sm text-textMedium mb-md flex-grow">
        {excerpt}
      </p>
      <Link
        to={link}
        className="text-hero-accent-orange font-bold transition-colors duration-300 hover:text-hero-accent-purple mt-auto inline-block"
        onClick={(e) => { if (link === "#") e.preventDefault(); }}
      >
        {/* Read More <span aria-hidden="true">→</span> */}
      </Link>
    </div>
  );
};

export default BlogCard;
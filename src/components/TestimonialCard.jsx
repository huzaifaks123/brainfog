import React from 'react';

const TestimonialCard = ({ author, title, quote }) => {
  return (
    <div className="min-w-full bg-testimonial-card-bg p-xl rounded-lg shadow-lg">
      <h4 className="font-title text-xl mb-xs text-hero-text">
        {author}
      </h4>
      <p className="text-sm text-gray-400 mb-md italic">
        {title}
      </p>
      <blockquote className="text-base sm:text-lg leading-relaxed text-gray-200 italic relative pl-lg">
        <span className="absolute left-0 top-[-5px] text-4xl text-hero-accent-orange font-[Georgia,serif]">
          “
        </span>
        {quote}
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
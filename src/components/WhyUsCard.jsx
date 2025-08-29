import React from 'react';

const WhyUsCard = ({ title, children, accentColor = 'border-hero-accent-orange' }) => {
  return (
    <div
      className={`
        why-us-card p-lg bg-backgroundLight rounded-md shadow-sm transition-all duration-300 ease-in-out
        md:hover:-translate-y-1 md:hover:shadow-md
        border-l-4 ${accentColor}
      `}
    >
      <h3 className="font-title text-xl text-textDark mb-sm">{title}</h3>
      <p className="text-sm text-textMedium">{children}</p>
    </div>
  );
};

export default WhyUsCard;

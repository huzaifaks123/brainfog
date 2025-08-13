import React from 'react';

const PortfolioCard = ({ title, description, category, link = "#", projectIcon }) => {
  // Emojis used as placeholders for project types.
  const iconMap = {
    web: "🌐",
    app: "📱",
    branding: "💡",
  };
  const displayIcon = projectIcon || iconMap[category] || "🖼️";

  return (
    <div className="bg-backgroundLight rounded-md overflow-hidden shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
      <div className="w-full h-[220px] bg-purple-100 flex items-center justify-center text-5xl text-hero-accent-purple" aria-label={`${category} project placeholder`}>
        {displayIcon}
      </div>
      <div className="p-md">
        <h3 className="font-title text-2xl text-textDark mb-sm">
          {title}
        </h3>
        <p className="text-sm text-textMedium mb-md">
          {description}
        </p>
        <a
          href={link}
          className="text-hero-accent-orange font-bold transition-colors duration-300 hover:text-hero-accent-purple"
          onClick={(e) => { if (link === "#") e.preventDefault(); }} // Prevent jump for placeholder links
        >
          View Case Study
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
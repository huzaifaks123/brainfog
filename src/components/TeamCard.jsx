import React from 'react';

const TeamCard = ({ name, role, bio, icon = "👤" }) => {
  return (
    <div className="bg-backgroundMediumLight rounded-md p-lg text-center shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md bg-white">
      <div 
        className="w-[150px] h-[150px] rounded-full bg-green-100 mx-auto mb-md flex items-center justify-center text-6xl text-service-5"
        aria-label={`${name} placeholder image`}
      >
        {icon}
      </div>
      <h3 className="font-title text-xl text-textDark mb-xs">
        {name}
      </h3>
      <p className="text-sm text-hero-accent-purple mb-sm font-medium">
        {role}
      </p>
      <p className="text-xs text-textMedium">
        {bio}
      </p>
    </div>
  );
};

export default TeamCard;
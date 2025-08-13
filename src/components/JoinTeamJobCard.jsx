import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';

const JoinTeamJobCard = ({ title, location, description, applyLink = "/contact", skills }) => {
  return (
    <div className="flex-1 bg-joinTeam-box-bg items-center text-joinTeam-box-text p-sm h-full w-full rounded-md relative">
      <div className='rounded-md p-md h-full flex flex-col justify-between'>
        <h3 className="font-title text-2xl sm:text-2xl mb-xs">
          {title}
        </h3>
        <p className="text-lg mb-xs opacity-85">
          {location}
        </p>
        <p className="text-sm mb-xs opacity-90">
          {description}
        </p>
        <h3>Must have skills</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm opacity-90 mb-lg">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        {/* <a
        href="mailto:info@brainfog.com"
        className="bg-backgroundLight text-joinTeam-box-bg py-3 px-lg rounded-pill font-bold inline-flex items-center gap-xs transition-all duration-300 hover:bg-gray-100 hover:-translate-y-0.5"
      >
        Apply Now <span className="text-lg"><MdOutlineArrowOutward className="font-bold" /></span>
      </a> */}
      </div>
    </div>
  );
};

export default JoinTeamJobCard;
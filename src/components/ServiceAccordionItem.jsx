import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

const ServiceAccordionItem = ({ title, children, icon, headerColor, contentBgColor, contentTextColor = 'text-textLight', isActive, onClick }) => {
  // Emojis used as placeholders. Replace icon with actual image or SVG component if desired.
  const IconPlaceholder = () => (
    <div className={`flex-shrink-0 w-1/3 md:w-1/4 bg-white/10 p-md rounded-sm text-center min-h-[120px] flex items-center justify-center text-4xl leading-none ${contentBgColor === 'bg-service-2' ? 'bg-black/5' : ''} opacity-70`}
         style={{color: 'currentColor'}} // Inherits color from parent
         aria-hidden="true">
      {icon}
    </div>
  );

  return (
    <div className="mb-md border border-borderLight rounded-md overflow-hidden bg-backgroundLight shadow-sm">
      <div
        className={`p-md lg:px-lg py-md cursor-pointer flex justify-between items-center font-title text-xl font-bold transition-colors duration-300 hover:bg-gray-100 ${headerColor} ${isActive ? 'bg-gray-100' : ''}`}
        onClick={onClick}
        role="button"
        aria-expanded={isActive}
      >
        <span>{title}</span>
        <span className={`text-lg transition-transform duration-300 text-[2rem] ${isActive ? 'transform rotate-180' : ''}`}>
          {isActive ? <MdKeyboardArrowDown /> : <MdKeyboardArrowDown />
}
        </span>
      </div>    
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${contentBgColor} ${contentTextColor}`}
        style={{ maxHeight: isActive ? '500px' : '0px' }} // Adjust maxHeight if content is larger
      >
        <div className={`p-lg ${isActive ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-col md:flex-row gap-lg items-center">
                <div className="flex-grow accordion-text">
                    {children}
                </div>
                {/* <IconPlaceholder /> */}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAccordionItem;
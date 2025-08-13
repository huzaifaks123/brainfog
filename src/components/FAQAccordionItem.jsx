import { MdKeyboardArrowDown } from 'react-icons/md';

const FAQAccordionItem = ({ question, answer, isActive, onClick }) => {
  return (
    <div className="rounded-xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden rouded-lg shadow-md">
      <button
        className={`
          w-full cursor-pointer flex justify-between items-center font-title text-xl font-bold 
          p-md lg:px-lg py-md transition-colors duration-300 hover:bg-gray-100 text-service-4
        `}
        onClick={onClick}
        aria-expanded={isActive}
      >
        <span className='text-start text-[1rem] text-gray-800'>{question}</span>
        <span
          className={`text-[2rem] transition-transform text-gray-800 duration-300 ${
            isActive ? 'rotate-180' : ''
          }`}
        >
          <MdKeyboardArrowDown />
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isActive ? 'max-h-40' : 'max-h-0'
        }`}
      >
        <div
          className={`px-md pb-md text-gray-600 transition-opacity duration-300 ${
            isActive ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordionItem;

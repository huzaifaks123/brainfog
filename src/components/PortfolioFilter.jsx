// components/PortfolioFilter.js
import React from 'react';
import Ticker from './Ticker';

const PortfolioFilter = ({ filters, activeFilter, onFilterChange, tickerItems }) => {
  const filteredItems = tickerItems.filter(item =>
    activeFilter === 'all' ? true : item.value === activeFilter
  );

  return (
    <div className="text-center mb-6">
      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-4">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            aria-pressed={activeFilter === filter.value}
            className={`
              px-4 py-2 rounded-full border text-sm font-medium transition
              ${activeFilter === filter.value
                ? 'bg-black text-white'
                : 'border-gray-300 text-gray-700 hover:bg-black hover:text-white'}
            `}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Ticker below buttons */}
      <Ticker items={filteredItems} />
    </div>
  );
};

export default PortfolioFilter;

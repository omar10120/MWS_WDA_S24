import React from 'react';

const TopCitiesSales = ({ cities }) => {
  return (
    <div className="w-80 mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-semibold text-gray-800 mb-4">Top 5 Cities For Highest Sales</h2>
      <div className="flex flex-col gap-3">
        {cities.map((city, index) => (
          <div key={index} className="flex justify-between items-center p-3 bg-white rounded-md hover:bg-gray-100 transition-colors">
            <span className="font-semibold text-gray-800">{city.name}</span>
            <span className="text-blue-500 font-semibold">{city.sales.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCitiesSales;

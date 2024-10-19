// src/components/ProgressBar.jsx
import React from 'react';
import { LocationMarkerIcon } from '@heroicons/react/solid';

const ProgressBar = ({ currentStep, totalSteps }) => {
  return (
    <div className="w-full mt-8 px-8 pb-8">
      <div className="relative">
        <div className="absolute top-2 left-0 w-full h-1 bg-gray-200">
          <div
            className="absolute top-0 left-0 h-1 bg-orange-500 transition-all duration-300"
            style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div key={index} className="relative">
              <LocationMarkerIcon
                className={`w-5 h-5 ${
                  index < currentStep ? 'text-orange-500' : 'text-gray-300'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
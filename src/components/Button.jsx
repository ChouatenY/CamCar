// src/components/Button.jsx
import React from 'react';

const Button = ({ children, onClick, color = 'orange', type = 'button', className = '' }) => {
  const baseClasses = "px-4 py-2 rounded-md font-semibold text-white transition-colors duration-200";
  const colorClasses = {
    orange: "bg-orange-500 hover:bg-orange-600",
    white: "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${colorClasses[color]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
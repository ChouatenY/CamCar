// src/components/Navbar.jsx
import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-gray-500 p-4 shadow-md">
      <div className="container mx-auto">
        <img src={logo} alt="CamCar Logo" className="h-8" />
      </div>
    </nav>
  );
};

export default Navbar;
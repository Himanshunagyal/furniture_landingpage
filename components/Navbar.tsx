// components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <>
      {/* Main Top Navigation Bar */}
      <header className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center px-8 py-6 text-white">
        {/* Logo and Tagline */}
        <div className="flex items-center space-x-4">
          {/* Placeholder for your logo - replace with your actual logo */}
          <div className="text-orange-500 text-4xl font-bold">◆</div>
          
          <div>
            <h1 className="text-3xl font-semibold tracking-wide">LUXE GENESIS</h1>
            <p className="text-sm font-light opacity-90">Epitome of Luxury</p>
          </div>
        </div>

        {/* Primary Navigation Links */}
        <nav className="hidden lg:flex space-x-8 text-sm font-medium uppercase tracking-wider">
          <a href="#" className="hover:text-orange-400 transition">Home</a>
          <a href="#" className="hover:text-orange-400 transition">Products</a>
          <a href="#" className="hover:text-orange-400 transition">Gallery</a>
          <a href="#" className="hover:text-orange-400 transition">Services</a>
          <a href="#" className="hover:text-orange-400 transition">Career</a>
          <a href="#" className="hover:text-orange-400 transition">News</a>
          <a href="#" className="hover:text-orange-400 transition">About Us</a>
          <a href="#" className="hover:text-orange-400 transition">Contact Us</a>
        </nav>

        {/* Search Icon */}
        <div className="text-2xl cursor-pointer hover:text-orange-400 transition">
          🔍
        </div>
      </header>

      {/* Secondary Category Navigation (appears below the main navbar) */}
      <nav className="absolute top-28 left-0 right-0 z-20 flex justify-center">
        
      </nav>
    </>
  );
};

export default Navbar;
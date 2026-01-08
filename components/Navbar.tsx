// components/Navbar.tsx
import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <>
      {/* Main Top Navigation Bar */}
      <header className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center px-8 py-6 text-white">
        {/* Logo and Tagline */}
        <Link href="/" className="flex items-center space-x-4 hover:opacity-90 transition">
          {/* Logo Image - Replace src with your actual logo URL later */}
          <div className="relative w-12 h-12"> {/* Adjust size as needed */}
            <Image
              src="/image.png"
              alt="Urbancraft Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          <div>
            <h1 className="text-3xl font-semibold tracking-wide">URBANCRAFT</h1>
            <p className="text-sm font-light opacity-90">Crafted with Purpose</p>
          </div>
        </Link>

        {/* Primary Navigation Links */}
        <nav className="hidden lg:flex space-x-8 text-sm font-medium uppercase tracking-wider">
          <Link href="/" className="hover:text-orange-400 transition">Home</Link>
          <Link href="/products" className="hover:text-orange-400 transition">Products</Link>
          <Link href="/gallery" className="hover:text-orange-400 transition">Gallery</Link>
          <Link href="/services" className="hover:text-orange-400 transition">Services</Link>
          <Link href="/career" className="hover:text-orange-400 transition">Career</Link>
          <Link href="/news" className="hover:text-orange-400 transition">News</Link>
          <Link href="/about" className="hover:text-orange-400 transition">About Us</Link>
          <Link href="/contact" className="hover:text-orange-400 transition">Contact Us</Link>
        </nav>
      </header>

      {/* Secondary Category Navigation (appears below the main navbar) */}
      <nav className="absolute top-28 left-0 right-0 z-20 flex justify-center">
        
      </nav>
    </>
  );
};

export default Navbar;
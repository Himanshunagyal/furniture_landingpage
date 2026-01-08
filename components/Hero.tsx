'use client'

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80",
      title: "Luxury Living Redefined",
      subtitle: "Curated Collections",
      description: "Transform your space with our exquisite furniture pieces designed for modern elegance"
    },
    {
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=80",
      title: "Contemporary Comfort",
      subtitle: "Premium Design",
      description: "Experience the perfect blend of sophistication and functionality in every piece"
    },
    {
      image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1920&q=80",
      title: "Timeless Elegance",
      subtitle: "Crafted Excellence",
      description: "Discover furniture that speaks to your style and elevates your living experience"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
        <Navbar />
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            {/* Animated Content */}
            <div
              key={currentSlide}
              className="animate-fadeIn"
            >
              <p className="text-amber-400 text-sm md:text-base font-light tracking-[0.3em] uppercase mb-4">
                {slides[currentSlide].subtitle}
              </p>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight">
                {slides[currentSlide].title}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl font-light leading-relaxed">
                {slides[currentSlide].description}
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-amber-600 text-white font-medium tracking-wide uppercase hover:bg-amber-700 transition-all duration-300 transform hover:scale-105">
                  Explore Collection
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-medium tracking-wide uppercase hover:bg-white hover:text-black transition-all duration-300">
                  Visit Showroom
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 h-1 bg-amber-500'
                : 'w-8 h-1 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 right-12 hidden lg:flex flex-col items-center gap-3 text-white/80">
        <span className="text-xs tracking-widest uppercase rotate-180 writing-mode-vertical">
          Scroll
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-white/80 to-transparent animate-pulse" />
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .writing-mode-vertical {
          writing-mode: vertical-rl;
        }
      `}</style>
    </div>
  );
};

export default Hero;
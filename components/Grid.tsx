'use client';

import React from 'react';

const CollectionsGrid: React.FC = () => {
  const collections = [
    {
      id: 1,
      title: 'SOFAS',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
      size: 'large',
      href: '/collections/sofas'
    },
    {
      id: 2,
      title: 'RECLINERS',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
      size: 'medium',
      href: '/collections/recliners'
    },
    {
      id: 3,
      title: 'DINING',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80',
      size: 'medium',
      href: '/collections/dining'
    },
    {
      id: 4,
      title: 'KITCHENS',
      image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80',
      size: 'wide',
      href: '/collections/kitchens'
    },
    
  ];

  const getGridClass = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'wide':
        return 'md:col-span-2';
      case 'medium':
      default:
        return 'md:col-span-1';
    }
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Explore Our Collections
          </h2>
          
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
          {collections.map((collection) => (
            <a
              key={collection.id}
              href={collection.href}
              className={`group relative overflow-hidden rounded-sm ${getGridClass(collection.size)}`}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500" />
              </div>

              {/* Text Content */}
              <div className="absolute inset-0 flex items-end p-8">
                <div className="relative">
                  <h3 className="text-white text-2xl md:text-3xl font-light tracking-wider">
                    {collection.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-white mt-3 transform origin-left transition-all duration-500 group-hover:w-20" />
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 transition-colors duration-500 pointer-events-none" />
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button className="px-10 py-4 border-2 border-gray-900 text-gray-900 font-medium tracking-wider uppercase hover:bg-gray-900 hover:text-white transition-all duration-300">
            View All Collections
          </button>
        </div>
      </div>
    </section>
  );
};

export default CollectionsGrid;
// components/EditorialSection.tsx
import React from 'react';
import Image from 'next/image';

const editorials = [
  {
    id: 1,
    category: 'TRENDS',
    title: 'Designed to Linger: Armchairs for Winter',
    description: 'Explore cozy and inviting armchair designs perfect for the colder months, combining comfort with elegant winter aesthetics.',
    author: 'Social Trends Editorial',
    imageUrl: 'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    readTime: '5 min read',
    tags: ['Armchairs', 'Winter', 'Comfort']
  },
  {
    id: 2,
    category: 'COLLECTIONS',
    title: 'Simply Sofas: The Inheritance Collection',
    description: 'Discover our latest and largest collection of fine furniture, where heritage craftsmanship meets contemporary design.',
    author: 'Design Studio',
    imageUrl: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    readTime: '7 min read',
    tags: ['Sofas', 'Collection', 'Heritage']
  },
  {
    id: 3,
    category: 'INSPIRATION',
    title: 'Minimalist Spaces for Modern Living',
    description: 'How to create serene, clutter-free environments that promote wellbeing and sophisticated simplicity.',
    author: 'Interior Voices',
    imageUrl: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    readTime: '6 min read',
    tags: ['Minimalism', 'Modern', 'Wellbeing']
  },
  {
    id: 4,
    category: 'MATERIALS',
    title: 'Sustainable Woods: The Future of Furniture',
    description: 'Examining eco-friendly materials and responsible sourcing in contemporary furniture design.',
    author: 'Eco Design Journal',
    imageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    readTime: '8 min read',
    tags: ['Sustainable', 'Wood', 'Eco-friendly']
  },
];

const EditorialSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2 mb-3">
             
              <div className="w-12 h-px bg-gray-300"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 max-w-2xl">
              Follow us for new ideas, trends, opinions, and voices in the world of furniture and design.
            </h2>
          </div>
          <button className="px-6 py-3 text-sm font-medium text-gray-700 border border-gray-400 rounded-full hover:bg-gray-50 transition flex items-center gap-2">
            View all articles
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {editorials.map((article) => (
            <article 
              key={article.id} 
              className="group cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative w-full h-64 md:h-72 overflow-hidden rounded-lg mb-4">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-800 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                  <div className="flex gap-1">
                    {article.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="text-xs text-gray-400">#{tag}</span>
                    ))}
                  </div>
                </div>
                
                <h3 className="text-xl font-medium text-gray-900 group-hover:text-gray-700 transition">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 line-clamp-2">
                  {article.description}
                </p>
                
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-800">{article.author}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Featured Section - Similar to your image */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-2/3">
              <div className="relative w-full h-80 lg:h-96 overflow-hidden rounded-lg">
                <Image
                  src="https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Featured editorial"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <span className="text-white/90 text-sm font-medium">FEATURED STORY</span>
                  <h3 className="text-2xl lg:text-3xl font-medium text-white mt-2">
                    The Art of Winter Comfort: Curating Your Sanctuary
                  </h3>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3 space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Latest in Editorial</h4>
                <p className="text-gray-600">
                  Dive deeper into design philosophy, material innovation, and the stories behind great furniture.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition">
                  <div className="w-16 h-16 bg-gray-200 rounded-md flex-shrink-0"></div>
                  <div>
                    <h5 className="font-medium text-gray-900">Color Trends 2024</h5>
                    <p className="text-sm text-gray-500">4 min read</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition">
                  <div className="w-16 h-16 bg-gray-200 rounded-md flex-shrink-0"></div>
                  <div>
                    <h5 className="font-medium text-gray-900">Artisanal Techniques</h5>
                    <p className="text-sm text-gray-500">6 min read</p>
                  </div>
                </div>
              </div>
              
              <button className="w-full py-3 text-center text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                Browse all insights
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;
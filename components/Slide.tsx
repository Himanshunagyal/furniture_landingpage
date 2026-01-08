// components/Slide.tsx

'use client'

// // components/RoomSlider.tsx
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';

// const rooms = [
//   {
//     name: 'Bedroom',
//     imageUrl: 'http://www.craftedbeds.co.uk/cdn/shop/articles/c6229643564835.57f4204983b16.jpg?v=1654414798',
//   },
//   {
//     name: 'Home office',
//     imageUrl: 'https://www.davidsonlondon.com/wp-content/uploads/2022/10/Magazine_Meta_HowToStyleYourHomeOffice_DavidsonLondon-960x504.jpg',
//   },
//   {
//     name: 'Living room',
//     imageUrl: 'https://cdn-ilcppdj.nitrocdn.com/ajLnipnymYdjxWenIkEoebaAtBeuDuAW/assets/images/optimized/rev-2242a01/germaniaconstruction.com/wp-content/uploads/2022/11/park-city-custom-home-builder-great-room.jpg',
//   },
//   {
//     name: 'Kitchen',
//     imageUrl: 'https://planner5d.com/blog/content/images/2022/11/luxury-kitchen-ideas.jpg',
//   },
//   {
//     name: 'Dining',
//     imageUrl: 'https://www.bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2022/06/dining-room-20-boca-do-lobo-1-1400x875.jpg',
//   },
//   {
//     name: 'Bathroom',
//     imageUrl: 'https://cdn.decorilla.com/online-decorating/wp-content/uploads/2024/06/Bright-and-airy-luxury-master-bathroom-ideas-by-Decorilla-1024x574.jpeg?width=900',
//   },
// ];

// const Slide: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-slide every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % rooms.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const goToSlide = (index: number) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Heading + Button */}
//         <div className="flex justify-between items-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
//             Inspiration for every room
//           </h2>
//           <button className="px-6 py-3 text-sm font-medium text-gray-700 border border-gray-400 rounded-full hover:bg-gray-100 transition">
//             See all rooms
//           </button>
//         </div>

//         {/* Slider */}
//         <div className="relative overflow-hidden">
//           <div
//             className="flex transition-transform duration-700 ease-in-out"
//             style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//           >
//             {rooms.map((room) => (
//               <div key={room.name} className="w-full flex-shrink-0">
//                 <div className="px-4">
//                   <div className="group cursor-pointer">
//                     {/* Image */}
//                     <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-lg shadow-lg">
//                       <Image
//                         src={room.imageUrl}
//                         alt={room.name}
//                         fill
//                         className="object-cover group-hover:scale-105 transition-transform duration-500"
//                       />
//                     </div>

//                     {/* Room Name */}
//                     <div className="mt-6 text-center">
//                       <p className="text-xl font-medium text-gray-800">
//                         {room.name}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Dots Indicator */}
//         <div className="flex justify-center space-x-2 mt-8">
//           {rooms.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-2 h-2 rounded-full transition ${
//                 index === currentIndex
//                   ? 'bg-gray-800 w-8'
//                   : 'bg-gray-400 hover:bg-gray-600'
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>

//         {/* Bottom line */}
//         <div className="mt-12 border-t border-gray-300"></div>
//       </div>
//     </section>
//   );
// };

// export default Slide;


// components/RoomSlider.tsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const rooms = [
  {
    name: 'Bedroom',
    imageUrl: 'https://media.architecturaldigest.com/photos/67bcc8747dfc89b75d51a6ab/16:9/w_2048,h_1152,c_limit/Kishani%20Perera_Point%20Dume%20Project_Photographer%20Anthony%20Barcelo.jpg',
  },
  {
    name: 'Home office',
    imageUrl: 'https://images.pexels.com/photos/20451400/pexels-photo-20451400.jpeg?cs=srgb&dl=pexels-ansar-muhammad-380085065-20451400.jpg&fm=jpg',
  },
  {
    name: 'Living room',
    imageUrl: 'https://images.pexels.com/photos/20451400/pexels-photo-20451400.jpeg?cs=srgb&dl=pexels-ansar-muhammad-380085065-20451400.jpg&fm=jpg',
  },
  {
    name: 'Kitchen',
    imageUrl: 'https://media.architecturaldigest.com/photos/67bcc8747dfc89b75d51a6ab/16:9/w_2048,h_1152,c_limit/Kishani%20Perera_Point%20Dume%20Project_Photographer%20Anthony%20Barcelo.jpg',
  },
  ,
];

const RoomSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rooms.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
            Inspiration for every room
          </h2>
          <button className="px-6 py-3 text-sm font-medium text-gray-700 border border-gray-400 rounded-full hover:bg-gray-100 transition">
            See all rooms
          </button>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {rooms.map((room) => (
              <div key={room.name} className="w-full flex-shrink-0">
                <div className="px-4">
                  <div className="group cursor-pointer">
                    <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src={room.imageUrl}
                        alt={room.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="mt-6 text-center">
                      <p className="text-xl font-medium text-gray-800">{room.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {rooms.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition ${
                index === currentIndex ? 'bg-gray-800 w-8' : 'bg-gray-400 hover:bg-gray-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-12 border-t border-gray-300"></div>
      </div>
    </section>
  );
};

export default RoomSlider;
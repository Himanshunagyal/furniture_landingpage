// components/AboutUsPage.tsx

'use client'

// import React from 'react';
// import Navbar from '@/components/Navbar';

// const About: React.FC = () => {
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const form = e.target as HTMLFormElement;
//     const formData = new FormData(form);
//     const data = Object.fromEntries(formData);
    
//     // In a real implementation, this would connect to a backend
//     const mailtoLink = `mailto:contact@urbancraft.com?subject=${encodeURIComponent(data.subject as string)}&body=${encodeURIComponent(data.message as string + '\n\nFrom: ' + data.name + ' (' + data.email + ')')}`;
//     window.location.href = mailtoLink;
    
//     // Reset form after submission
//     form.reset();
//     alert('Thank you for your message! Your email client will open to send us your inquiry.');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
//       <Navbar />
      
//       {/* Main Content */}
//       <main className="pt-40 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
//         {/* Hero Section */}
//         <section className="mb-20 text-center">
//           <h1 className="text-5xl md:text-7xl font-bold mb-6">
//             <span className="text-orange-500">ABOUT</span> URBANCRAFT
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
//             Where premium craftsmanship meets modern elegance in furniture design
//           </p>
//         </section>

//         {/* Mission & Story Section */}
//         <section className="mb-20 grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-4xl font-bold mb-6">Our Story</h2>
//             <p className="text-gray-300 mb-4 text-lg leading-relaxed">
//               Founded with a vision to transform living spaces, UrbanCraft emerged from a simple 
//               idea: luxury furniture should be accessible, sustainable, and designed for modern life.
//             </p>
//             <p className="text-gray-300 mb-4 text-lg leading-relaxed">
//               What began as a small workshop has grown into a respected online destination for 
//               premium furniture, delivering exquisite pieces to thousands of satisfied clients 
//               worldwide.
//             </p>
//             <p className="text-gray-300 text-lg leading-relaxed">
//               We combine traditional craftsmanship with innovative design, creating furniture that 
//               not only looks stunning but stands the test of time.
//             </p>
//           </div>
//           <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl">
//             <h3 className="text-3xl font-bold mb-6 text-orange-400">Our Mission</h3>
//             <p className="text-gray-300 mb-6 text-lg">
//               To redefine luxury living by creating furniture pieces that embody elegance, 
//               functionality, and timeless design—making premium quality accessible through 
//               our online platform.
//             </p>
//             <div className="grid grid-cols-2 gap-4 mt-8">
//               <div className="text-center p-4 bg-gray-900 rounded-lg">
//                 <div className="text-3xl font-bold text-orange-400">5K+</div>
//                 <div className="text-gray-400">Happy Clients</div>
//               </div>
//               <div className="text-center p-4 bg-gray-900 rounded-lg">
//                 <div className="text-3xl font-bold text-orange-400">50+</div>
//                 <div className="text-gray-400">Countries Served</div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Values Section */}
//         <section className="mb-20">
//           <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition duration-300">
//               <div className="text-orange-400 text-3xl mb-4">◆</div>
//               <h3 className="text-2xl font-bold mb-4">Craftsmanship</h3>
//               <p className="text-gray-300">
//                 Every piece is meticulously crafted by skilled artisans using premium materials 
//                 and time-honored techniques.
//               </p>
//             </div>
//             <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition duration-300">
//               <div className="text-orange-400 text-3xl mb-4">◇</div>
//               <h3 className="text-2xl font-bold mb-4">Sustainability</h3>
//               <p className="text-gray-300">
//                 We source ethically and prioritize eco-friendly materials, ensuring our furniture 
//                 is beautiful inside and out.
//               </p>
//             </div>
//             <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition duration-300">
//               <div className="text-orange-400 text-3xl mb-4">◈</div>
//               <h3 className="text-2xl font-bold mb-4">Innovation</h3>
//               <p className="text-gray-300">
//                 Blending traditional methods with modern design to create pieces that are both 
//                 timeless and contemporary.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Email Contact Section */}
//         <section className="mb-20">
//           <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12">
//             <h2 className="text-4xl font-bold mb-8 text-center">Get In Touch</h2>
//             <p className="text-center text-gray-300 mb-10 text-lg max-w-2xl mx-auto">
//               Have questions about our products or need design advice? Reach out to our team—we're 
//               here to help you create your perfect space.
//             </p>
            
//             <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="name" className="block mb-2 text-gray-300">Your Name</label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     required
//                     className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                     placeholder="John Doe"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block mb-2 text-gray-300">Email Address</label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     required
//                     className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                     placeholder="john@example.com"
//                   />
//                 </div>
//               </div>
              
//               <div>
//                 <label htmlFor="subject" className="block mb-2 text-gray-300">Subject</label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   required
//                   className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                   placeholder="How can we help you?"
//                 />
//               </div>
              
//               <div>
//                 <label htmlFor="message" className="block mb-2 text-gray-300">Your Message</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={5}
//                   required
//                   className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                   placeholder="Tell us about your project or ask any questions..."
//                 />
//               </div>
              
//               <div className="text-center">
//                 <button
//                   type="submit"
//                   className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition duration-300 transform hover:scale-105"
//                 >
//                   Send Message
//                 </button>
//                 <p className="text-gray-400 mt-4">
//                   Or email us directly at: 
//                   <a href="mailto:contact@urbancraft.com" className="text-orange-400 ml-2 hover:underline">
//                     contact@urbancraft.com
//                   </a>
//                 </p>
//               </div>
//             </form>
//           </div>
//         </section>

//         {/* Team/Process Section */}
//         <section className="text-center">
//           <h2 className="text-4xl font-bold mb-6">The UrbanCraft Experience</h2>
//           <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
//             From our digital showroom to your doorstep, we ensure a seamless experience with 
//             white-glove delivery, easy assembly, and dedicated customer support.
//           </p>
          
//           <div className="inline-flex items-center space-x-2 text-orange-400 text-lg">
//             <span>Explore our collections</span>
//             <span className="text-2xl">→</span>
//             <a href="#" className="hover:underline">Living Room</a>
//             <span>•</span>
//             <a href="#" className="hover:underline">Bedroom</a>
//             <span>•</span>
//             <a href="#" className="hover:underline">Dining</a>
//             <span>•</span>
//             <a href="#" className="hover:underline">Office</a>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="border-t border-gray-800 py-8 px-8">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
//           <div className="mb-6 md:mb-0">
//             <h2 className="text-3xl font-bold">URBANCRAFT</h2>
//             <p className="text-gray-400">Certified with Purpose</p>
//           </div>
          
//           <div className="text-center md:text-right">
//             <p className="text-gray-400">© {new Date().getFullYear()} UrbanCraft. All rights reserved.</p>
//             <p className="text-gray-500 text-sm mt-2">
//               Premium furniture for modern living | Worldwide delivery
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default About;


// components/AboutUs.tsx
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutUs: React.FC = () => {
  return (
    <>
    <Navbar />
      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.shopify.com/s/files/1/2151/8119/files/Casa_Design_Living_Furniture_Boston_Showroom_1024x1024.png?v=1711992074')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-8 max-w-4xl">
          <h1 className="text-6xl font-bold tracking-wide mb-6">About Urbancraft</h1>
          <p className="text-2xl font-light opacity-90">Crafted with Purpose – Elevating Spaces with Timeless Elegance</p>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-20 px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Founded with a passion for blending modern design with exceptional craftsmanship, Urbancraft has been redefining luxury living since our inception. We specialize in premium furniture that combines contemporary aesthetics with lasting quality.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As a primarily online furniture brand, we bring exquisite pieces directly to your doorstep. Our curated collections – from plush sofas and elegant recliners to sophisticated dining sets and modular kitchens – are designed to transform any space into a haven of comfort and style.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We take pride in delivering quality premium products to countless satisfied clients across the country, ensuring every piece is crafted with purpose and delivered with care.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://storage.googleapis.com/bucket-cms-ad/Aventura_Showroom_01_63bcb317ac/Aventura_Showroom_01_63bcb317ac.jpg" alt="Luxury furniture showroom interior" className="rounded-lg shadow-lg object-cover h-64 w-full" />
            <img src="https://naurelle.com/wp-content/uploads/2025/05/Mask-group-21.webp" alt="Modern luxury furniture display" className="rounded-lg shadow-lg object-cover h-64 w-full mt-8" />
            <img src="https://lawrance.com/wp-content/uploads/2025/07/luxury-furniture-showroom-1024x682.jpg" alt="Elegant furniture arrangement" className="rounded-lg shadow-lg object-cover h-64 w-full" />
            <img src="https://i.ytimg.com/vi/vQz82N1PIPo/maxresdefault.jpg" alt="Skilled craftsman at work" className="rounded-lg shadow-lg object-cover h-64 w-full mt-8" />
          </div>
        </div>
      </section>

      {/* Our Values / Why Choose Us */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-gray-900 mb-12">Why Choose Urbancraft?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8">
              <div className="text-orange-500 text-5xl mb-6">◆</div>
              <h3 className="text-2xl font-semibold mb-4">Premium Craftsmanship</h3>
              <p className="text-gray-700">Every piece is meticulously crafted using high-quality materials for durability and elegance that stands the test of time.</p>
            </div>
            <div className="p-8">
              <div className="text-orange-500 text-5xl mb-6">◆</div>
              <h3 className="text-2xl font-semibold mb-4">Seamless Online Experience</h3>
              <p className="text-gray-700">Shop from the comfort of your home with detailed visuals, easy navigation, and reliable pan-India delivery.</p>
            </div>
            <div className="p-8">
              <div className="text-orange-500 text-5xl mb-6">◆</div>
              <h3 className="text-2xl font-semibold mb-4">Customer Delight</h3>
              <p className="text-gray-700">Thousands of happy clients trust us for transforming their spaces with furniture that exceeds expectations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Focus with Images */}
      <section className="py-20 px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 gap-8">
            <img src="https://thumbs.dreamstime.com/b/happy-customer-man-unpacking-delivery-parcel-opening-cardboard-box-receiving-purchase-gift-home-young-sitting-apartment-sofa-417808419.jpg" alt="Happy customer unboxing furniture" className="rounded-lg shadow-lg" />
            <img src="https://media.istockphoto.com/id/1330959502/photo/woman-customer-opening-cardboard-box-parcel.jpg?s=612x612&w=0&k=20&c=a0s7y4wRpTNqhsEbulP-EqL7iV0dvWh1VYYbgAuvpPw=" alt="Satisfied client receiving delivery" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">Committed to Your Satisfaction</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Urbancraft, our customers are at the heart of everything we do. We've proudly delivered premium furniture to homes nationwide, earning trust through quality, transparency, and exceptional service.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're furnishing a new home or refreshing your space, we're here to make the process effortless and enjoyable.
            </p>
          </div>
        </div>
      </section>

      {/* Contact / Newsletter Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-gray-900 mb-8">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-12">
            Have questions or need assistance? We'd love to hear from you. Send us an email, and our team will respond promptly.
          </p>
          <div className="bg-gray-50 p-12 rounded-lg shadow-lg">
            <form action="https://formspree.io/f/your-form-id" method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" name="name" placeholder="Your Name" required className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500" />
              <input type="email" name="email" placeholder="Your Email" required className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500" />
              <input type="text" name="subject" placeholder="Subject" className="md:col-span-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500" />
              <textarea name="message" rows={6} placeholder="Your Message" required className="md:col-span-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"></textarea>
              <button type="submit" className="md:col-span-2 bg-orange-500 text-white py-4 px-8 rounded-lg font-semibold uppercase tracking-wider hover:bg-orange-600 transition">
                Send Message
              </button>
            </form>
            <p className="mt-6 text-gray-600">Or email us directly at: <a href="mailto:info@urbancraft.com" className="text-orange-500 hover:underline">info@urbancraft.com</a></p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
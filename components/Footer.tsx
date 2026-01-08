'use client';

import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const collections = [
    { name: 'Sofas', href: '/collections/sofas' },
    { name: 'Dining', href: '/collections/dining' },
    { name: 'Recliners', href: '/collections/recliners' },
    { name: 'Kitchens', href: '/collections/kitchens' },
    { name: 'Wardrobes', href: '/collections/wardrobes' },
    { name: 'Bedrooms', href: '/collections/bedrooms' },
    { name: 'Outdoor', href: '/collections/outdoor' },
    { name: 'Accents', href: '/collections/accents' },
  ];

  const company = [
    { name: 'Showrooms', href: '/showrooms' },
    { name: 'Brands', href: '/brands' },
    { name: 'About Us', href: '/about' },
    { name: 'Innovation', href: '/innovation' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const usefulLinks = [
    { name: 'Downloads', href: '/downloads' },
    { name: 'Product Care', href: '/product-care' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Use', href: '/terms' },
    { name: 'Premium Range', href: '/premium-range' },
    { name: 'Luxury Range', href: '/luxury-range' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  ];

  return (
    <footer className="bg-gray-200 text-gray-800">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Collections Column */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6">
              Collections
            </h3>
            <ul className="space-y-3">
              {collections.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-amber-600 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-amber-600 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links Column */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6">
              Useful Links
            </h3>
            <ul className="space-y-3">
              {usefulLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-amber-600 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-xl font-light mb-4">Join our mailing list.</h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Stay on top of the latest in the world of home interiors.
            </p>
            <button className="w-full px-6 py-3 border border-gray-800 text-gray-800 font-medium tracking-wider uppercase hover:bg-gray-800 hover:text-white transition-all duration-300">
              Subscribe
            </button>

            {/* Social Media */}
            <div className="mt-8">
              <p className="text-sm font-medium mb-4">Follow us on</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-amber-600 hover:border-amber-600 hover:text-white transition-all duration-300"
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © COPYRIGHT {new Date().getFullYear()}{' '}
            <span className="font-medium">LUXE GENESIS</span>
            <sup className="text-xs">®</sup> is a registered, protected trademark.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
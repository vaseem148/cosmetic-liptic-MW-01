import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: 'All Lipsticks', href: '#collection' },
      { name: 'Matte Collection', href: '#shades' },
      { name: 'Glossy Shades', href: '#signature' },
      { name: 'Best Sellers', href: '#bestsellers' },
    ],
    support: [
      { name: 'Shipping Policy', href: '#' },
      { name: 'Returns & Exchanges', href: '#' },
      { name: 'FAQs', href: '#' },
      { name: 'Track Order', href: '#' },
    ],
    company: [
      { name: 'Our Story', href: '#story' },
      { name: 'Beauty Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ]
  };

  return (
    <footer className="bg-pink-50 border-t border-pink-100 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="text-xl font-serif tracking-tighter text-pink-600">
              VELVETGLOW
              <span className="text-[10px] tracking-widest block -mt-1 text-pink-400">
                LIPSTICK
              </span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Premium lipstick brand crafted for confidence and elegance. 
              Discover rich pigments, long-lasting matte finish and shades for every mood.
            </p>

            <div className="flex space-x-5 text-gray-400">
              <a href="#" className="hover:text-pink-600 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-pink-600 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-pink-600 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-6">Shop</h3>
            <ul className="space-y-4">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-500 hover:text-pink-600 text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-6">Support</h3>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-500 hover:text-pink-600 text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-6">Join Our List</h3>
            <p className="text-gray-500 text-sm mb-4">
              Get beauty tips & exclusive lipstick offers.
            </p>

            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white border border-pink-200 px-4 py-2 text-sm focus:outline-none focus:border-pink-400"
              />

              <button className="bg-pink-600 text-white text-xs font-bold uppercase tracking-widest py-3 hover:bg-pink-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-pink-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-widest text-gray-400 font-medium">
          
          <p>© {currentYear} VELVETGLOW LIPSTICK. All rights reserved.</p>

          <div className="flex space-x-6">
            <span className="flex items-center gap-1">
              <MapPin size={10} /> Chennai, India
            </span>

            <span className="flex items-center gap-1">
              <Mail size={10} /> hello@velvetglow.com
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold">Book My Show</h2>
          <p className="mt-2 text-gray-400">
            Explore the beauty of India with our handpicked tour packages and travel solutions.
          </p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><Link to="/" className="text-gray-400 hover:text-yellow-400">Home</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-yellow-400">About Us</Link></li>
            <li><Link to="/packages" className="text-gray-400 hover:text-yellow-400">Tour Packages</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-yellow-400">Contact Us</Link></li>
          </ul>
        </div>
        
        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p className="mt-2 text-gray-400">📍 Location: New Delhi, India</p>
          <p className="text-gray-400">📞 Phone: +91 730*****85</p>
          <p className="text-gray-400">📧 Email: info@bookmyshowindia.in</p>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="text-center mt-6 border-t border-gray-700 pt-4 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Book My Tours India. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;

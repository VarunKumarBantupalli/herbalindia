import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-start via-green-mid to-green-end text-white py-12 mt-auto">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:justify-between mb-12">
          {/* Logo and Description */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-3xl font-bold mb-2 text-light-green">Herbal India</h1>
            <p className="text-gray-300">
              Discover the power of nature with our collection of herbal plants. Learn about their benefits, uses, and how they can enhance your well-being.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:flex-row md:space-x-8 mb-8 md:mb-0">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-semibold mb-4 text-light-green">Quick Links</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-light-green transition duration-300">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-light-green transition duration-300">About Us</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-light-green transition duration-300">Contact</Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-300 hover:text-light-green transition duration-300">Privacy Policy</Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-semibold mb-4 text-light-green">Contact Us</h2>
              <p className="text-gray-300 mb-2">Email: contact@herbalindia.com</p>
              <p className="text-gray-300">Phone: +1 (123) 456-7890</p>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-light-green">Newsletter Signup</h2>
              <form>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 mb-2 rounded-l-full border border-gray-300 text-black"
                />
                <button
                  type="submit"
                  className="w-full bg-olive-green hover:bg-forest-green text-white py-2 px-4 rounded-r-full"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition duration-300">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition duration-300">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400">
          <p>&copy; 2024 Herbal India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

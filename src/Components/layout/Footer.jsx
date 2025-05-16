import React from 'react';

import { FaHome, FaInfoCircle, FaServer, FaProjectDiagram } from 'react-icons/fa';
import { MdPrivacyTip, MdOutlinePolicy, MdCookie } from 'react-icons/md';
import { RiContactsBookLine } from 'react-icons/ri';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Hot Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                Hot Links
              </span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <ul className="space-y-2">
                  <li className="flex items-center hover:text-purple-400 transition-colors">
                    <FaHome className="mr-2" />
                    <Link to="/">Home</Link>
                  </li>
                  <li className="flex items-center hover:text-purple-400 transition-colors">
                    <FaInfoCircle className="mr-2" />
                    <Link to="/about">About</Link>
                  </li>
                  <li className="flex items-center hover:text-purple-400 transition-colors">
                    <FaServer className="mr-2" />
                    <Link to="/services">Services</Link>
                  </li>
                  <li className="flex items-center hover:text-purple-400 transition-colors">
                    <FaProjectDiagram className="mr-2" />
                    <Link to="/projects">Projects</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li className="flex items-center hover:text-purple-400 transition-colors">
                    <RiContactsBookLine className="mr-2" />
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li className="flex items-center hover:text-purple-400 transition-colors">
                    <MdPrivacyTip className="mr-2" />
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li className="flex items-center hover:text-purple-400 transition-colors">
                    <MdOutlinePolicy className="mr-2" />
                    <Link to="/terms">Terms and Condition</Link>
                  </li>
                  <li className="flex items-center hover:text-purple-400 transition-colors">
                    <MdCookie className="mr-2" />
                    <Link to="/cookie-policy">Cookie Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Middle Column - Description */}
          <div className="flex flex-col justify-between">
            <p className="text-gray-300 mb-4">
              Crafting responsive, high-performance websites with clean code and a user-focused approach. 
              Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              <Link to="https://github.com" className="text-gray-400 hover:text-white transition-colors">
                <FiGithub size={20} />
              </Link>
              <Link to="https://twitter.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FiTwitter size={20} />
              </Link>
              <Link to="https://linkedin.com" className="text-gray-400 hover:text-blue-600 transition-colors">
                <FiLinkedin size={20} />
              </Link>
              <Link to="mailto:contact@example.com" className="text-gray-400 hover:text-red-400 transition-colors">
                <HiOutlineMail size={20} />
              </Link>
            </div>
          </div>

          {/* Right Column - Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-md focus:outline-none text-gray-900 w-full"
              />
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-r-md hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            Copyright © 2025 Khennycool. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Built with <span className="text-red-500 mx-1">❤</span> by Khennycool
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
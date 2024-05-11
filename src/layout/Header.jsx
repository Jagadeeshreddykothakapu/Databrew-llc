import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


export default function Index() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 5) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const routeChange = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header
      className={`py-5 fixed top-0 left-0 right-0 z-[1000] transition-all ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
      style={{ transition: 'background-color 0.3s ease-in-out' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-2">
              <img
                src={`${process.env.PUBLIC_URL}/logo.png`}
                alt="DataBrew Logo"
                className="w-full h-full object-cover"
              />
            </div>
          
            <h3 className="font-bold text-3xl font-poppins text-slate-800">
              <Link to="/">DataBrew</Link>
            </h3>
          </div>
          <nav className="hidden lg:block">
            <ul className="flex space-x-6">
            <motion.li whileHover={{ scale: 1.1 }}>
                <Link
                  to="/"
                  onClick={routeChange}
                  className="font-poppins font-medium text-blue uppercase hover:text-pink transition-colors duration-300"
                >
                  Home
                </Link>
                </motion.li>
              <li>
                <Link
                  to="/about"
                  onClick={routeChange}
                  className="font-poppins font-medium text-blue uppercase hover:text-pink transition-colors duration-300"
                >
                  Why we're unique
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={routeChange}
                  className="font-poppins font-medium text-blue uppercase hover:text-pink transition-colors duration-300"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  onClick={routeChange}
                  className="font-poppins font-medium text-blue uppercase hover:text-pink transition-colors duration-300"
                >
                  Partnerships
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  onClick={routeChange}
                  className="font-poppins font-medium text-blue uppercase hover:text-pink transition-colors duration-300"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={routeChange}
                  className="font-poppins font-medium text-blue uppercase hover:text-pink transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="lg:hidden">
            <button className="text-blue hover:text-pink transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
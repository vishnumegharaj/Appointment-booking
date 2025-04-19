import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, User, ChevronDown } from 'lucide-react'; // Make sure you have lucide-react installed
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = true; // Replace with actual authentication logic

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Logo />
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `inline-flex items-center px-1 pt-1 text-md font-medium border-b-2 border-transparent transition duration-150 ease-in-out ${isActive
                    ? 'text-gray-900 border-teal-500'
                    : 'text-gray-500 hover:border-teal-500 hover:text-teal-700'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/doctors"
                className={({ isActive }) =>
                  `inline-flex items-center px-1 pt-1 text-md font-medium border-b-2 border-transparent transition duration-150 ease-in-out ${isActive
                    ? 'text-gray-900 border-teal-500'
                    : 'text-gray-500 hover:border-teal-500 hover:text-teal-700'
                  }`
                }
              >
                Find Doctors
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `inline-flex items-center px-1 pt-1 text-md font-medium border-b-2 border-transparent transition duration-150 ease-in-out ${isActive
                    ? 'text-gray-900 border-teal-500'
                    : 'text-gray-500 hover:border-teal-500 hover:text-teal-700'
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `inline-flex items-center px-1 pt-1 text-md font-medium border-b-2 border-transparent transition duration-150 ease-in-out ${isActive
                    ? 'text-gray-900 border-teal-500'
                    : 'text-gray-500 hover:border-teal-500 hover:text-teal-700'
                  }`
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            {isLoggedIn ? (
              <div className="relative ml-3">
                <div className="group">
                  <button className="flex items-center text-md font-medium text-gray-700 hover:text-teal-700 focus:outline-none transition duration-150 ease-in-out">
                    <User className="h-5 w-5 mr-1" />
                    <span>My Account</span>
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                    <Link
                      to="/my-profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/my-appointments"
                      className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                    >
                      My Appointments
                    </Link>
                    <button className="w-full text-left block px-4 py-2 text-md text-gray-700 hover:bg-gray-100">
                      Sign out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-md font-medium text-gray-700 hover:text-teal-700"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-md font-medium rounded-md text-white bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 shadow-sm"
                >
                  Create account
                </Link>
              </div>
            )}
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile view for options */}
      <div className="relative">
        <div
          className={`absolute top-full left-0 right-0 z-50 bg-white shadow-xl rounded-b-xl overflow-hidden transition-all duration-300 ease-in-out transform 
      ${isOpen ? "max-h-[500px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"}`}
        >
          <div className="pt-4 pb-4 px-5 space-y-2">
            <Link to="/" className="block py-2 px-3 rounded-lg text-base font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-all">
              Home
            </Link>
            <Link to="/doctors" className="block py-2 px-3 rounded-lg text-base font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-all">
              Find Doctors
            </Link>
            <Link to="/about" className="block py-2 px-3 rounded-lg text-base font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-all">
              About
            </Link>
            <Link to="/contact" className="block py-2 px-3 rounded-lg text-base font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-all">
              Contact
            </Link>
          </div>

          <div className="border-t border-gray-200 px-5 pt-4 pb-5 space-y-3">
            {isLoggedIn ? (
              <>
                <Link to="/my-profile" className="block py-2 px-3 rounded-lg text-base font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-all">
                  Profile
                </Link>
                <Link to="/my-appointments" className="block py-2 px-3 rounded-lg text-base font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-all">
                  My Appointments
                </Link>
                <button className="w-full text-left py-2 px-3 rounded-lg text-base font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all">
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block py-2 px-3 rounded-lg text-base font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-all">
                  Log in
                </Link>
                <Link to="/signup" className="block w-full text-center px-4 py-2 rounded-lg text-base font-semibold text-white bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 transition-all">
                  Create account
                </Link>
              </>
            )}
          </div>
        </div>
      </div>


    </nav>
  );
};

export default Navbar;

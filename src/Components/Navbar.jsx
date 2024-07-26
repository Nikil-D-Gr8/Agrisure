import React, { useState, useEffect, useRef } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Config/firebaseConfig';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // New state for the popup

  const navigate = useNavigate();
  const popupRef = useRef(null); // Ref for the popup

  const [name, setName] = useState();
  const [dp, setDp] = useState();

  useEffect(() => {
    const displayData = auth.onAuthStateChanged((user) => {
      if (user) {
        setName(user.displayName);
        setDp(user.photoURL);
      } else {
        navigate('/');
      }
    });

    return () => displayData();
  }, [navigate]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-gradient-to-r from-blue-300 via-blue-700 to-blue-800 shadow-md py-4 fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Image Frame */}
        <div className="flex items-center pl-5">
          <img
            src={dp} // Replace with your image path
            alt="Logo"
            className="w-12 h-12 rounded-full border-2 border-green-500"
          />
          <h1 className="text-xl font-bold ml-4">Hey, {name}</h1>
        </div>

        {/* Premium Subscription Button */}
        <button
          onClick={() => setIsPopupOpen(true)} // Open popup on button click
          className="bg-green-500 text-white py-2 px-4 rounded-lg flex items-center hover:bg-green-600 transition duration-300 ease-in-out"
        >
          <FontAwesomeIcon icon={faCrown} className="animate-pulse w-6 h-6 mr-2 text-yellow-400" />
          Premium Subscription
        </button>

        {/* Menu Bar */}
        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center p-2 text-white rounded-full transition duration-300 ease-in-out"
          >
            {isMenuOpen ? (
              <XIcon className="w-10 h-10 text-black-800" />
            ) : (
              <MenuIcon className="w-10 h-10 text-black-800" />
            )}
          </button>

          {/* Dropdown Menu */}
          <div
            className={`absolute top-12 right-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform ${
              isMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
          >
            <ul>
              <li>
                <p>Profile</p>
              </li>
              <li>
                <p>Settings</p>
              </li>
              <li>
                <p>Logout</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div
            ref={popupRef}
            className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-1/2 lg:w-1/3"
          >
            <h2 className="text-2xl font-bold mb-4">Premium Subscription</h2>
            <p className="text-lg mb-4">Choose your plan:</p>
            <div className="space-y-4">
              <div className="p-4 border border-gray-300 rounded-lg bg-gray-50">
                <h3 className="text-xl font-semibold mb-2">Free Plan</h3>
                <p className="text-gray-700 mb-2">1 Year Free Plan</p>
                <p className="text-green-600 font-bold text-lg">Free</p>
              </div>
              <div className="p-4 border border-gray-300 rounded-lg bg-gray-50">
                <h3 className="text-xl font-semibold mb-2">Pro Plan</h3>
                <p className="text-gray-700 mb-2">1500 for Renewal</p>
                <p className="text-red-600 font-bold text-lg">1500</p>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsPopupOpen(false)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

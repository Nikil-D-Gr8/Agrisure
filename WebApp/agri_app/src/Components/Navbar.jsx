import React, { useState,useEffect } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline'; // Heroicons for menu icons
import { useNavigate } from 'react-router-dom'
import { auth } from '../Config/firebaseConfig';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate()

  const [name , setName] = useState()
  const [dp , setDp] = useState()


  useEffect(()=> {

    const displayData = auth.onAuthStateChanged(user => {

      if (user) {
        setName(user.displayName )
        setDp(user.photoURL)
      }
      else{
        navigate("/")
      }

    } )

    return () => displayData()


  },[navigate] )

  return (
    <nav className="bg-white shadow-md py-4 fixed  top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Image Frame */}
        <div className="flex items-center">
          <img
            src={dp} // Replace with your image path
            alt="Logo"
            className="w-12 h-12 rounded-full border-2 border-green-500"
          />
          <h1 className="text-xl font-bold ml-4 " >Hey, {name}</h1>
        </div>

        {/* Dashboard Text */}
        <div className="text-3xl font-bold text-black">Dashboard</div>

        {/* Menu Bar */}
        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center p-2   rounded-full transition duration-300 ease-in-out"
          >
            {isMenuOpen ? (
              <XIcon className="w-10 h-10 text-black-800" />
            ) : (
              <MenuIcon className="w-10 h-10 text-black-800" />
            )}
          </button>

          {/* Dropdown Menu */}
          <div
            className={`absolute top-12 right-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
          >
            <ul>
              <li>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React, { useState } from 'react';
import google from '../assets/google.png';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../Config/firebaseConfig';
// import './styles.css'; // Make sure to include this file for additional custom styles

function Signin() {
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        setRedirect(true);
      })
      .catch((error) => {
        console.error("Sign-in error: ", error);
      });
  };

  // Redirect after state update
  if (redirect) {
    navigate("/main");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-yellow-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full transition-transform transform hover:scale-105 hover:shadow-2xl">
        <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">Sign-In</h1>
        <div className="flex flex-col items-center">
          <button
            onClick={handleClick}
            className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <img src={google} alt="Google logo" className="w-8 h-8 mr-2" />
            <span>Continue with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signin;

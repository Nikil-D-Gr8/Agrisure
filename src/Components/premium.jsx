import React, { useState } from 'react';

function Premium() {
  const [showPopup, setShowPopup] = useState(true); // Initialize to true to show the popup on load

  const handleClose = () => setShowPopup(false);

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-100">
      {showPopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-1/2 lg:w-1/3">
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
                onClick={handleClose}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Main Page Content */}
      <div className="text-center p-8">
        <h1 className="text-3xl font-bold">Welcome to the Premium Page</h1>
        <p className="mt-4 text-lg">Please choose a subscription plan.</p>
      </div>
    </div>
  );
}

export default Premium;

// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // For navigation to home page or other routes

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="text-xl text-gray-700 mt-4">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="mt-6 inline-block text-blue-500 hover:text-blue-700">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

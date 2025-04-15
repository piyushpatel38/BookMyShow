import React from "react";
import { useNavigate } from "react-router-dom";

const Library = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-6"><br /><br /><br /><br />
      <h1 className="text-3xl font-bold mb-6 text-center">
        Welcome to the Library Management System
      </h1>
      <p className="text-center mb-6 text-gray-600">
        Manage your library effortlessly with features for books, students, and borrowing records.
      </p>

      {/* Statistics Section */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded shadow text-center">
          <h2 className="text-xl font-bold">Total Books</h2>
          <p className="text-2xl font-semibold">120</p>
          <button
            onClick={() => navigate("/books")}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            View Books
          </button>
        </div>
        <div className="bg-green-100 p-4 rounded shadow text-center">
          <h2 className="text-xl font-bold">Total Students</h2>
          <p className="text-2xl font-semibold">50</p>
          <button
            onClick={() => navigate("/students")}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
          >
            View Students
          </button>
        </div>
        <div className="bg-yellow-100 p-4 rounded shadow text-center">
          <h2 className="text-xl font-bold">Books Borrowed</h2>
          <p className="text-2xl font-semibold">30</p>
          <button
            onClick={() => navigate("/borrow-return")}
            className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded"
          >
            Manage Borrow/Return
          </button>
        </div>
      </div>

      {/* Quick Access Buttons */}
      <div className="mt-10 flex justify-center space-x-4">
        <button
          onClick={() => navigate("/books")}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Go to Books
        </button>
        <button
          onClick={() => navigate("/students")}
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
        >
          Go to Students
        </button>
        <button
          onClick={() => navigate("/borrow-return")}
          className="bg-yellow-600 text-white px-6 py-3 rounded hover:bg-yellow-700"
        >
          Go to Borrow/Return
        </button>
      </div>
    </div>
  );
};

export default Library;

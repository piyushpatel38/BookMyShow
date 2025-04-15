import React, { useState, useEffect } from "react";
import axios from "axios";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/books");
        setBooks(response.data);
        setFilteredBooks(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch books. Please try again later.");
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredBooks(
      books.filter(
        (book) =>
          book.title.toLowerCase().includes(term) ||
          book.author.toLowerCase().includes(term)
      )
    );
  };

  return (
    <div className="container mx-auto p-6">
      <br />
      <br />
      <br />
      <br />
      <h1 className="text-2xl font-bold mb-4">Books</h1>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by title or author..."
          className="w-full px-4 py-2 border rounded"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-blue-500 rounded-full"></div>
          <p>Loading books...</p>
        </div>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Author</th>
              <th className="border border-gray-300 px-4 py-2">ISBN</th>
              <th className="border border-gray-300 px-4 py-2">Available</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book) => (
              <tr key={book._id}>
                <td className="border border-gray-300 px-4 py-2">{book.title}</td>
                <td className="border border-gray-300 px-4 py-2">{book.author}</td>
                <td className="border border-gray-300 px-4 py-2">{book.isbn}</td>
                <td
                  className={`border border-gray-300 px-4 py-2 ${
                    book.available ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {book.available ? "Yes" : "No"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Books;

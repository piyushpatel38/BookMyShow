import React, { useState } from "react";

const BorrowReturn = () => {
  const [bookId, setBookId] = useState("");
  const [studentId, setStudentId] = useState("");
  const [actionType, setActionType] = useState("borrow"); // borrow or return
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!bookId || !studentId) {
      setMessage("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(`/api/books/${actionType}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bookId, studentId }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(`Success: ${data.message}`);
      } else {
        const error = await response.json();
        setMessage(`Error: ${error.message || "Failed to process request."}`);
      }
    } catch (err) {
      setMessage("Error: Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <br />
      <br />
      <br />
      <br />
      <h1 className="text-2xl font-bold mb-4">Borrow/Return Books</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Action</label>
          <select
            className="w-full px-4 py-2 border rounded"
            value={actionType}
            onChange={(e) => setActionType(e.target.value)}
          >
            <option value="borrow">Borrow</option>
            <option value="return">Return</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Book ID</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded"
            placeholder="Enter Book ID"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Student ID</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded"
            placeholder="Enter Student ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Processing..." : "Submit"}
        </button>
      </form>
      {message && (
        <p
          className={`mt-4 text-sm ${
            message.startsWith("Success") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default BorrowReturn;

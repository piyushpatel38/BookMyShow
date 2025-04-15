import React, { useState, useEffect } from "react";
import axios from "axios";

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await axios.get("http://localhost:5000/api/students");
      setStudents(response.data);
    };
    fetchStudents();
  }, []);

  return (
    <div className="container mx-auto p-6"><br /><br /><br /><br />
      <h1 className="text-2xl font-bold mb-4">Students</h1>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Books Borrowed</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td className="border border-gray-300 px-4 py-2">{student.name}</td>
              <td className="border border-gray-300 px-4 py-2">{student.email}</td>
              <td className="border border-gray-300 px-4 py-2">{student.borrowedBooks.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;

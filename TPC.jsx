import React from "react";

const TrainingPlacementCell = () => {
  return (
    <section className="py-16 bg-gray-100">
      <br /><br /><br />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">Training & Placement Cell</h2>
          <p className="text-lg text-gray-600 mt-4">
            The Training and Placement Cell (TPC) of Rajkiya Engineering College Banda is dedicated to preparing students for the
            competitive job market and fostering industry-academic collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Training Section */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Training</h3>
            <p className="text-gray-600">
              We offer training programs that equip students with the necessary skills and knowledge in various fields such as
              software development, hardware design, communication, and more.
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Workshops on Soft Skills & Communication</li>
              <li>Technical Workshops & Hands-on Training</li>
              <li>Industry Visits & Guest Lectures</li>
            </ul>
          </div>

          {/* Placement Section */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Placement</h3>
            <p className="text-gray-600">
              Our placement cell helps students secure internships and jobs with leading companies through campus recruitment
              drives and various placement activities.
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Pre-placement Training & Mock Interviews</li>
              <li>Campus Recruitment Drives</li>
              <li>Job Placement Assistance</li>
            </ul>
          </div>

          {/* Facilities Section */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Facilities</h3>
            <p className="text-gray-600">
              The TPC provides state-of-the-art facilities for students, including dedicated rooms for interviews, group
              discussions, and a well-equipped training center.
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Interview Rooms</li>
              <li>Group Discussion Rooms</li>
              <li>High-speed Internet & Computers</li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h3>
          <p className="text-lg text-gray-600">
            For more details or inquiries, feel free to contact the Training and Placement Cell.
          </p>
          <p className="text-gray-600 mt-4">
            <strong>Email:</strong> director@recbanda.ac.in
          </p>
          <p className="text-gray-600">
            <strong>Phone:</strong> +915191254301
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrainingPlacementCell;

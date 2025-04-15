import React from "react";

const MechanicalDepartment = () => {
  return (
    <section className="py-16 bg-gray-100"><br /><br /><br />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Department of Mechanical Engineering
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Known as the backbone of engineering, the Mechanical Engineering Department of REC, Banda is equipped with state-of-the-art facilities and experienced faculty to shape the technocrats of tomorrow.
          </p>
        </div>

        {/* About the Department */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            About the Department
          </h2>
          <p className="text-gray-600">
            The Mechanical Engineering Department of REC Banda is a hub for innovation and excellence. With highly qualified faculty, many of whom hail from prestigious institutions like IITs and NITs, the department offers a robust foundation in Mechanical Engineering. Our facilities and curriculum cater to both academic and practical learning, ensuring that students are ready to contribute to the nation's economy and growth.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Vision</h2>
          <p className="text-gray-600">
            To be recognized as a pioneering department of Mechanical Engineering education in Uttar Pradesh, providing valuable resources for industry and society by 2030.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-12 text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mission</h2>
          <ul className="text-gray-600 list-disc list-inside text-left">
            <li>
              Develop skills in students by providing them knowledge to excel in Mechanical Engineering professions and higher studies.
            </li>
            <li>Introduce students to cutting-edge technologies.</li>
            <li>
              Foster practicing engineers who investigate, design, and innovate with a commitment to society and the environment.
            </li>
            <li>Provide ethical and value-based education through societal activities.</li>
          </ul>
        </div>

        {/* Program Educational Objectives */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-12 text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Program Educational Objectives
          </h2>
          <ul className="text-gray-600 list-disc list-inside">
            <li>
              Possess core knowledge of the discipline to succeed in their
              careers.
            </li>
            <li>
              Be practicing engineers capable of working in multidiscipline and multitasking environments.
            </li>
            <li>
              Be thorough professionals with ethical values, teamwork skills, and sensitivity to societal and environmental needs.
            </li>
          </ul>
        </div>

        {/* Program Specific Outcomes */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-12 text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Program Specific Outcomes
          </h2>
          <ul className="text-gray-600 list-disc list-inside">
            <li>
              Model and analyze components or processes related to thermal and
              mechanical systems.
            </li>
            <li>
              Apply mechanical engineering principles to solve problems related
              to society and the environment.
            </li>
          </ul>
        </div>

        {/* Labs and Workshops */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Laboratories and Workshops
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Workshops */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Workshops
              </h3>
              <ul className="text-gray-600 list-disc list-inside text-left">
                <li>Welding Shop</li>
                <li>Carpentry Shop</li>
                <li>Fitting Shop</li>
                <li>Sheet Metal Shop</li>
                <li>Smithy & Foundry Shop</li>
              </ul>
            </div>

            {/* Laboratories */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Laboratories
              </h3>
              <ul className="text-gray-600 list-disc list-inside text-left">
                <li>Engineering Mechanics Lab</li>
                <li>Computer-Aided Engineering Graphics Lab</li>
                <li>Material Testing Lab</li>
                <li>Heat & Mass Transfer Lab</li>
                <li>Theory of Machines Lab</li>
                <li>CAD/CAM Lab</li>
                <li>Automobile & IC Engines Lab</li>
                <li>Thermodynamics Lab</li>
                <li>Machine Design Lab</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MechanicalDepartment;

import React from "react";

const ElectricalDepartment = () => {
  return (
    <section className="py-16 bg-gray-100"><br /><br /><br />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">Department of Electrical Engineering</h2>
          <p className="text-lg text-gray-600 mt-4">
            The Department of Electrical Engineering at Rajkiya Engineering College Banda focuses on empowering students with quality education, advanced skills, and ethical values to meet industry and societal needs.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Vision</h3>
          <p className="text-gray-600">
            ‘Impart quality education to create technocrats and entrepreneurs to meet dynamic needs of industry expectations.’
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mission</h3>
          <ul className="text-gray-600 list-disc list-inside">
            <li>
              Deliver quality education in emerging fields of Electrical Engineering to empower students to meet industry standards.
            </li>
            <li>
              Stay updated with the latest developments through seminars, expert lectures, workshops, industrial visits, and industrial training.
            </li>
            <li>Promote ethical and value education addressing societal needs.</li>
          </ul>
        </div>

        {/* Program Educational Objectives */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Program Educational Objectives</h3>
          <ul className="text-gray-600 list-disc list-inside">
            <li>
              Possess the required skill set and modern tools to excel and sustain in a chosen career in Electrical Engineering.
            </li>
            <li>Demonstrate research abilities to pursue higher studies.</li>
            <li>Take up entrepreneurship for the benefit of society.</li>
          </ul>
        </div>

        {/* Program Specific Outcomes */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Program Specific Outcomes</h3>
          <ul className="text-gray-600 list-disc list-inside">
            <li>
              Analyze and implement power systems, electrical machines, and control systems.
            </li>
            <li>
              Demonstrate the ability to use software and hardware tools essential for the Electrical Engineering profession.
            </li>
          </ul>
        </div>

        {/* Additional Features */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Additional Opportunities</h3>
          <p className="text-gray-600 mb-4">
            Students gain exposure to real-world applications of electrical engineering through:
          </p>
          <ul className="text-gray-600 list-disc list-inside">
            <li>Industrial visits and hands-on training sessions.</li>
            <li>Participation in expert lectures, seminars, and workshops.</li>
            <li>Opportunities to work on interdisciplinary projects and entrepreneurial initiatives.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ElectricalDepartment;

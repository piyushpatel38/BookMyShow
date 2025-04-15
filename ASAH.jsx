import React from "react";

const AppliedScienceDepartment = () => {
  return (
    <section className="py-16 bg-gray-100"><br /><br /><br />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Department of Applied Science & Humanities
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Building the foundation of engineering education through Applied
            Sciences and Humanities.
          </p>
        </div>

        {/* About the Department */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            About the Department
          </h2>
          <p className="text-gray-600">
            The Department of Applied Sciences and Humanities at REC Banda
            imparts education in core subjects such as Chemistry, English,
            Mathematics, Physics, and Environmental Studies as part of the
            B.Tech program. With 7 highly qualified faculty members, the
            department aims to build a solid foundation for students, ensuring
            their readiness for the core engineering disciplines.
          </p>
        </div>

        {/* Objective */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Objective
          </h2>
          <p className="text-gray-600">
            A strong foundation is the basis for success. The Department of
            Applied Sciences prepares first-year B.Tech students in Physics,
            Chemistry, Mathematics, and Communication Skills, focusing on
            practical and applied approaches to build a strong knowledge base.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Vision</h2>
          <p className="text-gray-600">
            To apply our unique values to undergraduate programs in technology,
            service, and applied science, preparing individuals to thrive and
            contribute to an ever-changing global society.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-12 text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mission</h2>
          <ul className="text-gray-600 list-disc list-inside">
            <li>
              Student-centered teaching emphasizing innovative, engaging, and
              challenging coursework.
            </li>
            <li>Promoting project-based learning and practical team interactions.</li>
            <li>
              Creating knowledge and tools in intellectual areas at the
              interfaces of engineering and core areas of Applied Sciences and
              Humanities.
            </li>
          </ul>
        </div>

        {/* Laboratories */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Laboratories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Physics Laboratory */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Physics Laboratory
              </h3>
              <p className="text-gray-600">
                The Physics Lab is well-equipped for B.Tech students, focusing
                on experiments related to optics, electricity, magnetism, modern
                physics, and solid-state physics. Students perform at least 12
                out of 15 experiments per semester as per the UPTU curriculum.
              </p>
            </div>

            {/* Chemistry Laboratory */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Chemistry Laboratory
              </h3>
              <p className="text-gray-600">
                The Chemistry Lab allows students to explore organic and
                inorganic chemistry concepts. Students perform at least 8 out of
                10 experiments per semester as part of the UPTU curriculum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppliedScienceDepartment;

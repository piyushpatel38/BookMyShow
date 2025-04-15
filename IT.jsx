import React from "react";

const ITDepartment = () => {
  return (
    <section className="py-16 bg-gray-100"><br /><br /><br />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">Department of Information Technology</h2>
          <p className="text-lg text-gray-600 mt-4">
            The Department of Information Technology at Rajkiya Engineering College Banda offers an undergraduate program focused on providing comprehensive knowledge of IT applications with a blend of technical skills.
          </p>
        </div>

        {/* About the Department */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">About the Department</h3>
          <p className="text-gray-600 mb-4">
            The Department offers B.Tech in Information Technology with a yearly intake of 60 students. The course is designed to provide a comprehensive understanding of Information Technology, emphasizing practical skills and recent technological developments. Teaching methods include role-play, case studies, project work, seminars, and industry visits.
          </p>
          <p className="text-gray-600">
            The department aims to develop practical, application-oriented minds by focusing on “learning by doing.” It strives to provide a solid foundation in IT, preparing students for a successful career or higher studies.
          </p>
        </div>

        {/* Vision and Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Vision</h3>
            <p className="text-gray-600">
              To establish a center of educational excellence in Information Technology and produce competent engineers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mission</h3>
            <ul className="text-gray-600 list-disc list-inside">
              <li>State-of-the-art computational facilities for the teaching-learning process.</li>
              <li>Qualified and committed faculty focused on quality teaching.</li>
              <li>Ethical and value-based education addressing societal needs.</li>
            </ul>
          </div>
        </div>

        {/* Program Educational Objectives */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Program Educational Objectives</h3>
          <ul className="text-gray-600 list-disc list-inside">
            <li>Possess the necessary skills and knowledge to excel in the field of Information Technology.</li>
            <li>Pursue higher studies and demonstrate research abilities.</li>
            <li>Take up entrepreneurship to benefit society.</li>
          </ul>
        </div>

        {/* Program Specific Outcomes */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Program Specific Outcomes</h3>
          <ul className="text-gray-600 list-disc list-inside">
            <li>Apply software engineering practices to deliver quality IT solutions.</li>
            <li>Use critical thinking, modern programming languages, and platforms to solve complex IT problems.</li>
          </ul>
        </div>

        {/* Laboratories Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Laboratories</h3>
          <p className="text-lg text-gray-600 mb-8">
            The department has state-of-the-art laboratories that help students gain hands-on experience in various aspects of Information Technology.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Computer Centre</h4>
              <p className="text-gray-600">
                The Computer Centre provides practical exposure to students with over 90 HP I3 systems. The lab is fully networked and offers high-speed internet.
              </p>
              <ul className="text-gray-600 list-disc list-inside mt-4">
                <li>Software: Visual Basic, Turbo C, JDK</li>
                <li>Computer Spec: I3 Processor, 4 GB RAM, 1 TB Hard Disk</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Computer Lab 2 (Innovation Lab)</h4>
              <p className="text-gray-600">
                This lab focuses on contemporary technologies like PHP. It is air-conditioned and equipped with a server and 30 computers.
              </p>
              <ul className="text-gray-600 list-disc list-inside mt-4">
                <li>Software: .NET Framework, PHP, SQL Server</li>
                <li>Computer Spec: i3 Processor, 4 GB RAM, 1 TB Hard Disk</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Project Laboratory</h4>
              <p className="text-gray-600">
                A dedicated lab for project work, equipped with 30 machines and smart board for presentations.
              </p>
              <ul className="text-gray-600 list-disc list-inside mt-4">
                <li>Software: Visual Studio, SQL Server, NetBeans</li>
                <li>Computer Spec: i3 Processor, 4 GB RAM, 1 TB Hard Disk</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Infrastructure */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Additional Infrastructure</h3>
          <p className="text-gray-600 mb-4">
            The department also provides:
          </p>
          <ul className="text-gray-600 list-disc list-inside">
            <li>BSNL Exchange for broadband internet connectivity</li>
            <li>Powerful servers maintained in a dedicated server room</li>
            <li>Online UPS and battery backup to ensure uninterrupted learning</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ITDepartment;

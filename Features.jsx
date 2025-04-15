import React from "react";

const Departments = () => {
  // Department details
  const departments = [
    {
      id: 1,
      name: "Information Technology",
      description:
        "The Information Technology department focuses on providing quality education in computer science, programming, and emerging technologies like Artificial Intelligence, Data Science, and Cloud Computing.",
      link: "/ITDepartment",
    },
    {
      id: 2,
      name: "Electrical Engineering",
      description:
        "The Electrical Engineering department is committed to providing students with a solid foundation in electrical systems, electronics, control systems, and power generation and distribution.",
      link: "/Electrical",
    },
    {
      id: 3,
      name: "Mechanical Engineering",
      description:
        "The Mechanical Engineering department emphasizes hands-on learning and offers courses in thermodynamics, mechanics, materials science, and robotics, preparing students for a variety of industries.",
      link: "/Mechanical",
    },
    {
      id: 4,
      name: "Applied Science and Humanities",
      description:
        "The Applied Science and Humanities department provides a foundation in physics, chemistry, mathematics, and the humanities, ensuring well-rounded education for engineering students.",
      link: "/AppliedScienceandHumanities",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Our Departments
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {departments.map((dept) => (
          <div
            key={dept.id}
            className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-blue-500 hover:bg-gray-100 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-4">{dept.name}</h3>
            <p className="text-gray-700 mb-4">{dept.description}</p>
            <a
              href={dept.link}
              className="text-blue-500 font-semibold hover:underline"
            >
              Learn more &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;

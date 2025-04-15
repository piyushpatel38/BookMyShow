import React from "react";

const CollegeUpdates = () => {
  // Sample data for notices and news
  const notices = [
    {
      id: 1,
      title: "Mid-Term Exam Schedule Announced",
      date: "22nd November 2024",
      description: "Check the mid-term exam schedule on the official portal.",
    },
    {
      id: 2,
      title: "Holiday Notice for Diwali",
      date: "10th November 2024",
      description: "The college will remain closed from 11th to 15th November.",
    },
    {
      id: 3,
      title: "Scholarship Applications Open",
      date: "1st November 2024",
      description: "Eligible students can apply for scholarships by 30th November.",
    },
  ];

  const news = [
    {
      id: 1,
      title: "Annual Tech Fest 2024",
      date: "15th October 2024",
      description:
        "The Annual Tech Fest will be held on 25th December 2024. Register now!",
    },
    {
      id: 2,
      title: "REC Banda Alumni Meet",
      date: "1st September 2024",
      description:
        "The Alumni Meet was a grand success with over 500 participants.",
    },
    {
      id: 3,
      title: "Workshop on AI & ML",
      date: "25th August 2024",
      description:
        "A workshop on Artificial Intelligence and Machine Learning was conducted by industry experts.",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
        College Updates
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Notices Section */}
        <div className="bg-white shadow-md rounded-lg p-6 border-t-4 border-indigo-500">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Notice & Announcements
          </h3>
          <ul className="space-y-4">
            {notices.map((notice) => (
              <li key={notice.id} className="border-b pb-4">
                <h4 className="text-lg font-medium text-indigo-600">
                  {notice.title}
                </h4>
                <p className="text-sm text-gray-500">{notice.date}</p>
                <p className="text-gray-700">{notice.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* News Section */}
        <div className="bg-white shadow-md rounded-lg p-6 border-t-4 border-yellow-500">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            News & Events
          </h3>
          <ul className="space-y-4">
            {news.map((item) => (
              <li key={item.id} className="border-b pb-4">
                <h4 className="text-lg font-medium text-yellow-600">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500">{item.date}</p>
                <p className="text-gray-700">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CollegeUpdates;

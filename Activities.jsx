import React from "react";

const RecentActivities = () => {
  // Sample data for recent activities
  const activities = [
    {
      id: 1,
      title: "Cleanliness Drive by NSS",
      date: "20th November 2024",
      description:
        "The NSS unit organized a cleanliness drive on campus, actively involving over 200 students.",
    },
    {
      id: 2,
      title: "Web Development Workshop",
      date: "18th November 2024",
      description:
        "A hands-on workshop on modern web development technologies, including React and Tailwind CSS.",
    },
    {
      id: 3,
      title: "Sports Week Inauguration",
      date: "15th November 2024",
      description:
        "The Sports Week was inaugurated with great enthusiasm, featuring cricket, football, and athletics events.",
    },
    {
      id: 4,
      title: "Blood Donation Camp",
      date: "10th November 2024",
      description:
        "A blood donation camp was organized in collaboration with local hospitals, collecting over 150 units of blood.",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-8">
        Recent Activities
      </h2>
      <div className="bg-white shadow-md rounded-lg p-6 border-t-4 border-green-500">
        <ul className="space-y-4">
          {activities.map((activity) => (
            <li
              key={activity.id}
              className="border-b pb-4 last:border-b-0 flex items-start space-x-4"
            >
              <div className="flex-shrink-0">
                <span className="inline-block w-10 h-10 bg-green-600 text-white text-lg font-bold flex items-center justify-center rounded-full">
                  {activity.id}
                </span>
              </div>
              <div>
                <h4 className="text-lg font-medium text-green-600">
                  {activity.title}
                </h4>
                <p className="text-sm text-gray-500">{activity.date}</p>
                <p className="text-gray-700">{activity.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentActivities;

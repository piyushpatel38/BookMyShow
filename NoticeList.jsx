// src/components/NoticeList.js
import React from "react";
import NoticeCard from "./NoticeCard";

const notices = [
  { id: 1, title: "Exam Schedule", description: "Final exams start next week.", date: "2024-12-01" },
  { id: 2, title: "Cultural Fest", description: "Annual cultural fest is on Friday.", date: "2024-12-05" },
  { id: 3, title: "Holiday Notice", description: "College closed on 26th November.", date: "2024-11-26" },
];

const NoticeList = () => {
  return (
    <div className="container mx-auto p-4"><br /><br /><br /><br />
      <h1 className="text-2xl font-bold mb-4">Latest Notices</h1>
      {notices.map((notice) => (
        <NoticeCard
          key={notice.id}
          title={notice.title}
          description={notice.description}
          date={notice.date}
        />
      ))}
    </div>
  );
};

export default NoticeList;

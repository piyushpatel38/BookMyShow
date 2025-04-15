// src/components/NoticeCard.js
const NoticeCard = ({ title, description, date }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">{title}</h2>
          <span className="text-gray-500 text-sm">{date}</span>
        </div>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
    );
  };
  
  export default NoticeCard;
  
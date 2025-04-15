import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      name: "Piyush Kumar patel",
      location: "New York, USA",
      feedback:
        "Booking my tour through Book My Show was an amazing experience! The service was seamless, and I loved how well-organized everything was. Highly recommend!",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Roshni Singh",
      location: "London, UK",
      feedback:
        "I had the best time on my India tour, thanks to Book My Show! The itinerary was perfectly planned, and the staff was very friendly and helpful.",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      name: "Piyush Singh",
      location: "Mumbai, India",
      feedback:
        "I booked a Rajasthan tour with Book My Show, and it exceeded my expectations. The local guides were excellent, and the whole experience was unforgettable.",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      name: "Deepanshu",
      location: "Sydney, Australia",
      feedback:
        "An incredible journey with Book My Show! The travel arrangements were perfect, and I felt safe and comfortable throughout the entire trip. Will definitely use them again.",
      image:"https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        name: "Ram ",
        location: "India",
        feedback:
          "An incredible journey with Book My Show! The travel arrangements were perfect, and I felt safe and comfortable throughout the entire trip. Will definitely use them again.",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
      },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg"> <br />
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">What Our Customers Say</h1>

        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex items-start space-x-6 bg-gray-100 p-6 rounded-lg shadow-md">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-lg font-medium text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
                <p className="mt-4 text-gray-700">{testimonial.feedback}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <p className="text-center text-gray-600">
            Want to share your experience? <a href="mailto:support@bookmyshow.com" className="text-blue-600">Email us</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

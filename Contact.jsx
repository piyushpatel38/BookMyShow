import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST", // ✅ fixed
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setResponseMsg(data.message);
      console.log("Submitted:", formData); // ✅ logs correct data before reset
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMsg("Error sending message. Please try again.");
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto py-12 px-6">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-blue-600">Contact Us</h1>
        <p className="text-lg text-gray-600 mt-4">
          Have any questions? We're here to help! Get in touch with us for travel bookings, queries, or assistance.
        </p>
      </section>

      <section className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-blue-600">Our Office</h2>
          <p>📍 New Delhi, India</p>
          <p>📞 +91 730*****85</p>
          <p>📧 info@bookmyshowindia.in</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-blue-600 text-center">Send a Message</h2>
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 h-32"
              required
            ></textarea>
            <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
              Send Message
            </button>
          </form>
          {responseMsg && <p className="mt-4 text-center text-green-600">{responseMsg}</p>}
        </div>
      </section>

      <section className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-blue-600">Find Us on the Map</h2>
        <iframe
          className="w-full h-80 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14024.984305858052!2d77.2090211!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjIiTiA3N8KwMTInMjIuNiJF!5e0!3m2!1sen!2sin!4v1610974822336"
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}

export default Contact;

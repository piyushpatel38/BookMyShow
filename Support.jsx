import React from "react";
import { Link } from "react-router-dom";

function Support() {
    return (
      <div className="max-w-screen-xl mx-auto py-12 px-6">
        {/* Support Header */}
        <section className="text-center"> <br />
          <h1 className="text-4xl font-bold text-blue-600">Support Center</h1>
          <p className="text-lg text-gray-600 mt-4">
            Need help? Our support team is here for you 24/7. Reach out to us for assistance.
          </p>
        </section>
        
        {/* Support Options */}
        <section className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-600">📧 Email Support</h2>
            <p className="text-gray-700 mt-2">Reach us at</p>
            <p className="font-semibold text-gray-800">support@bookmyshowindia.in</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-600">📞 Phone Support</h2>
            <p className="text-gray-700 mt-2">Call us at</p>
            <p className="font-semibold text-gray-800">+91 7302778405</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-600">💬 Live Chat</h2>
            <p className="text-gray-700 mt-2">Chat with our support team for instant help.</p>
            <button className="mt-3 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
              Start Chat
            </button>
          </div>
        </section>
        
        {/* FAQs */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-blue-600 text-center">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">How can I book a tour?</h3>
              <p className="text-gray-600 mt-2">You can book a tour through our website or by contacting our support team.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">What payment methods do you accept?</h3>
              <p className="text-gray-600 mt-2">We accept credit/debit cards, UPI, and net banking.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Can I cancel or reschedule my booking?</h3>
              <p className="text-gray-600 mt-2">Yes, cancellations and rescheduling are possible under our policy. Contact support for more details.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Support;
  
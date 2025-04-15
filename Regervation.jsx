import React from 'react';
import { Link } from 'react-router-dom';

function ReservationPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">  <br />
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Reservation Policy</h1>

        <p className="text-lg text-gray-700 mb-6">Please review our reservation policy to understand the terms and conditions associated with booking your tour packages.</p>

        <div className="space-y-6">
          {/* Reservation Process */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">1. Reservation Process</h2>
            <p className="text-gray-600">
              To book a tour package, you must complete the reservation form with all necessary details, including the desired dates, number of travelers, and contact information.
            </p>
            <p className="text-gray-600">
              Once we receive your reservation, we will send you a confirmation email with all the details. A booking reference number will be provided in the email.
            </p>
          </div>

          {/* Payment Terms */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">2. Payment Terms</h2>
            <p className="text-gray-600">
              A deposit is required to confirm your booking. The balance payment must be made at least 30 days before the scheduled departure date.
            </p>
            <p className="text-gray-600">
              Payments can be made using credit/debit cards, UPI, net banking, or digital wallets. For more details, please refer to our <Link to="/payment-options" className="text-blue-600">Payment Options</Link> page.
            </p>
          </div>

          {/* Cancellation Policy */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">3. Cancellation Policy</h2>
            <p className="text-gray-600">
              Cancellations made 30 days or more before the scheduled departure date will be refunded 75% of the total payment.
            </p>
            <p className="text-gray-600">
              Cancellations made 15-29 days before the departure date will be refunded 50% of the total payment.
            </p>
            <p className="text-gray-600">
              Cancellations made within 14 days of the departure date will not be eligible for a refund.
            </p>
          </div>

          {/* Modifications to Reservation */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">4. Modifications to Reservation</h2>
            <p className="text-gray-600">
              You can modify your reservation, subject to availability and additional charges, at least 14 days before the scheduled departure date.
            </p>
            <p className="text-gray-600">
              Any modifications requested after this period will be subject to the cancellation policy.
            </p>
          </div>

          {/* Responsibility */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">5. Responsibility</h2>
            <p className="text-gray-600">
              We are responsible for organizing the tour packages and providing the services as described in the tour details. However, we are not liable for any delays, cancellations, or damages caused by natural events, accidents, or circumstances beyond our control.
            </p>
            <p className="text-gray-600">
              By making a reservation, you acknowledge and accept these terms and conditions.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">6. Contact Information</h2>
            <p className="text-gray-600">
              If you have any questions or concerns about your reservation, please contact our support team at:
            </p>
            <p className="text-gray-600">
              <a href="mailto:support@bookmyshow.com" className="text-blue-600">support@bookmyshow.com</a>
            </p>
            <p className="text-gray-600">
              Or call us at: <a href="tel:+917302778405" className="text-blue-600">+91 7302778405</a>
            </p>
          </div>
        </div>

        <div className="mt-8">
          <Link
            to="/"
            className="block text-center text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md"
          >
            Go Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ReservationPolicy;

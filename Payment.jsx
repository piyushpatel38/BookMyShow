import React from 'react';
import { Link } from 'react-router-dom';

function PaymentOptions() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg"> <br />
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Payment Options</h1>

        <p className="text-xl text-gray-700 mb-6">We offer multiple payment options for your convenience:</p>

        <div className="space-y-6">
          {/* Credit/Debit Card */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Visa_2021_logo.svg/1024px-Visa_2021_logo.svg.png"
                alt="Visa"
                className="w-6 h-6"
              />
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-800">Credit/Debit Card</h2>
              <p className="text-gray-600">Pay using Visa, MasterCard, American Express, and other major cards.</p>
            </div>
          </div>

          {/* UPI */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a2/UPI_Logo_2020.svg"
                alt="UPI"
                className="w-6 h-6"
              />
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-800">UPI (Unified Payments Interface)</h2>
              <p className="text-gray-600">Pay directly from your bank account using UPI apps like Google Pay, PhonePe, Paytm, etc.</p>
            </div>
          </div>

          {/* Net Banking */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7e/NetBanking_Logo.png"
                alt="Net Banking"
                className="w-6 h-6"
              />
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-800">Net Banking</h2>
              <p className="text-gray-600">Pay directly from your bank account using net banking services of your bank.</p>
            </div>
          </div>

          {/* Wallets */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/48/Paytm_logo.svg"
                alt="Paytm"
                className="w-6 h-6"
              />
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-800">Digital Wallets</h2>
              <p className="text-gray-600">Pay via Paytm, PhonePe, FreeCharge, or other popular wallet services.</p>
            </div>
          </div>

          {/* Cash on Delivery */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Cash_on_delivery_logo.svg/1024px-Cash_on_delivery_logo.svg.png"
                alt="Cash on Delivery"
                className="w-6 h-6"
              />
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-800">Cash on Delivery (COD)</h2>
              <p className="text-gray-600">Opt for cash payment when your tour package is delivered or upon arrival.</p>
            </div>
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

export default PaymentOptions;

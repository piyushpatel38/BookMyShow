function TermsAndConditions() {
    return (
      <div className="max-w-screen-xl mx-auto py-12 px-6">
        {/* Header */}
        <section className="text-center">  <br />
          <h1 className="text-4xl font-bold text-blue-600">Terms and Conditions</h1>
          <p className="text-lg text-gray-600 mt-4">
            Please read these terms and conditions carefully before using our services.
          </p>
        </section>
        
        {/* Terms and Conditions Content */}
        <section className="mt-8 space-y-6 text-gray-700">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">1. Introduction</h2>
            <p className="mt-2">By accessing our website and using our services, you agree to abide by these terms and conditions.</p>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">2. Booking and Payments</h2>
            <p className="mt-2">All bookings must be made in advance, and full payment is required to confirm your reservation.</p>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">3. Cancellation and Refund Policy</h2>
            <p className="mt-2">Cancellations made within 48 hours of departure are non-refundable. Refunds will be processed within 7 business days.</p>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">4. User Responsibilities</h2>
            <p className="mt-2">Users must provide accurate information and comply with all applicable laws while using our services.</p>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">5. Limitation of Liability</h2>
            <p className="mt-2">Book My Tours India is not responsible for any losses, damages, or delays beyond our control.</p>
          </div>
        </section>
        
        {/* Contact for More Info */}
        <section className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-blue-600">Need More Information?</h2>
          <p className="text-lg text-gray-600 mt-2">If you have any questions regarding our terms and conditions, feel free to contact us.</p>
          <a href="mailto:support@bookmytoursindia.in" className="mt-4 inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
            Contact Support
          </a>
        </section>
      </div>
    );
  }
  
  export default TermsAndConditions;
  
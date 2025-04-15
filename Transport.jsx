function Transport() {
    return (
      <div className="max-w-screen-xl mx-auto py-12 px-6">
        {/* Transport Header */}
        <section className="text-center">https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
          <h1 className="text-4xl font-bold text-blue-600">Transport Services</h1>
          <p className="text-lg text-gray-600 mt-4">
            Explore our reliable and comfortable transport options for your travel needs.
          </p>
        </section>
        
        {/* Transport Options */}
        <section className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-blue-600">🚗 Private Car Rentals</h2>
          <p className="text-gray-700 mt-2">Hire a private car with a professional driver for a hassle-free journey.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-600">🚌 Bus Services</h2>
            <p className="text-gray-700 mt-2">Book comfortable and affordable bus transport for group travel.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-600">🚆 Train Bookings</h2>
            <p className="text-gray-700 mt-2">We assist with train reservations to make your travel seamless.</p>
          </div>
        </section>
        
        {/* Booking Section */}
        <section className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-blue-600">Book Your Transport</h2>
          <p className="text-lg text-gray-600 mt-2">Choose the best transport option and book with us today.</p>
          <a href="/contact" className="mt-4 inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
            Contact Us for Booking
          </a>
        </section>
      </div>
    );
  }
  
  export default Transport;
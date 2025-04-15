function ExplorePackages() {
    return (
      <div className="max-w-screen-xl mx-auto py-12 px-6">
        {/* Header */}
        <section className="text-center"> <br />
          <h1 className="text-4xl font-bold text-blue-600">Explore Our Travel Packages</h1>
          <p className="text-lg text-gray-600 mt-4">
            Discover exciting travel packages tailored for your perfect getaway.
          </p>
        </section>
        
        {/* Packages List */}
        <section className="mt-12 grid md:grid-cols-3 gap-8">
          {/* Package 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-blue-600">🏰 Heritage Tour</h2>
            <p className="text-gray-700 mt-2">Explore historical monuments and cultural sites across India.</p>
            <p className="text-blue-600 font-bold mt-2">Starting from ₹15,000</p>
            <a href="/contact" className="mt-4 inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
              Book Now
            </a>
          </div>
  
          {/* Package 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-blue-600">🏖️ Beach Getaway</h2>
            <p className="text-gray-700 mt-2">Relax and unwind at the most beautiful beaches in India.</p>
            <p className="text-blue-600 font-bold mt-2">Starting from ₹12,000</p>
            <a href="/contact" className="mt-4 inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
              Book Now
            </a>
          </div>
  
          {/* Package 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-blue-600">🏔️ Adventure Trek</h2>
            <p className="text-gray-700 mt-2">Experience thrilling trekking adventures in the Himalayas.</p>
            <p className="text-blue-600 font-bold mt-2">Starting from ₹18,000</p>
            <a href="/contact" className="mt-4 inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
              Book Now
            </a>
          </div>
        </section>
      </div>
    );
  }
  
  export default ExplorePackages;
  
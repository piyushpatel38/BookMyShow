

function About() {
    
    return (
        
      <div className="max-w-screen-xl mx-auto py-12 px-6">
        <br />
<br />
<br />

        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold text-blue-600">About Book My Tours India</h1>
          <p className="text-lg text-gray-600 mt-4">
            Your trusted travel partner for exploring the diverse beauty of India. We specialize in curating 
            unforgettable travel experiences tailored to every kind of traveler.
          </p>
        </section>
        
        {/* Our Story */}
        <section className="mt-12 text-center bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-blue-600">Our Story</h2>
          <p className="text-lg text-gray-700 mt-4">
            Founded with a passion for travel, Book My Tours India aims to bring people closer to the rich 
            heritage, culture, and breathtaking landscapes of India. From vibrant cities to serene countryside, we make it possible.
          </p>
        </section>
        
        {/* Why Choose Us */}
        <section className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-blue-600">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-6">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-bold">🌍 Personalized Experiences</h3>
              <p className="text-gray-600 mt-2">We craft trips based on your preferences to make your journey unique.</p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-bold">💼 Expert Guides</h3>
              <p className="text-gray-600 mt-2">Our experienced travel experts ensure you get the best experience.</p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-bold">📍 Hassle-Free Travel</h3>
              <p className="text-gray-600 mt-2">We take care of all your travel needs, from booking to accommodation.</p>
            </div>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="mt-12 text-center bg-blue-600 text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-lg mt-4">Have questions? Reach out to us anytime.</p>
          <p className="text-lg font-semibold mt-2">📞 Phone: +91 730*****85</p>
          <p className="text-lg font-semibold">📧 Email: info@bookmyshowindia.in</p>
        </section>
      </div>
    );
  }
  
  export default About;
  
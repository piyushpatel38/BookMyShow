import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    {
      name: "India Tour Packages",
      path: "#",
      subItems: [
        { name: "Golden Triangle Tours", path: "/GoldenTriangleTours" },
        { name: "Delhi Tour Packages", path: "/DelhiTourPackages" },
        { name: "Agra Tour Packages", path: "/AgraTourPackages" },
        { name: "Rajasthan Tour Packages", path: "/RajasthanTourPackages" },
        { name: "Himachal Pradesh Tours", path: "/HimachalPradeshTours" },
      ],
    },
    {
      name: "Transport",
      path: '/Transport'
    },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/Contact" },
    {
      name: "Support",
      path: "#",
      subItems: [
        { name: "FAQs", path: "/Support" },
        { name: "Reservation Policy", path: "/ReservationPolicy" },
        { name: "Terms & Conditions", path: "/TAC" },
        { name: "Payment Options", path: "/Payment" },
      ],
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="flex items-center justify-between w-full px-8 py-4 max-w-screen-xl mx-auto">
        <div className="flex items-center">
          <img
            className="w-20"
            src="https://shoponarista.com/images/app/220823044656am-bookmyshow-logo-31BC3C7354-seeklogo.com-modified.png" // Replace with actual logo URL
            alt="Book My Tours India"
          />
          <div className="ml-3">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              Book My Show
            </Link>
            <p className="text-sm text-gray-500">
              {/* Optional tagline */}
            </p>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <div key={index} className="relative">
              <Link
                to={item.path}
                className="text-gray-800 hover:text-blue-600 font-medium"
                onClick={() => item.subItems && toggleDropdown(index)}
              >
                {item.name}
              </Link>
              {item.subItems && activeDropdown === index && (
                <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg">
                  {item.subItems.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.path}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="ml-4">
            <a href="tel:+91730*****85" className="text-gray-800">
              +91730*****85
            </a>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          {navItems.map((item, index) => (
            <div key={index} className="border-b">
              <Link
                to={item.path}
                className="block px-4 py-2 text-gray-800"
                onClick={() => {
                  setIsOpen(false);
                  item.subItems && toggleDropdown(index);
                }}
              >
                {item.name}
              </Link>
              {item.subItems && activeDropdown === index && (
                <div className="bg-gray-50">
                  {item.subItems.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.path}
                      className="block px-6 py-2 text-gray-800"
                      onClick={() => setIsOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="px-4 py-2 border-t">
            <a href="tel:+91730*****85" className="text-gray-800 block">
              +91 730*****85
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

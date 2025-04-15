import React from "react";
import Slider from "react-slick"; // Import Slider from react-slick
import "slick-carousel/slick/slick.css"; // Import slick styles
import "slick-carousel/slick/slick-theme.css"; // Import slick theme
import "./CustomSlider.css"; // Custom styles for the slider

const CustomSlider = () => {
  // Slider settings
  const settings = {
    dots: true, // Show dots below the slider
    infinite: true, // Infinite loop
    speed: 600, // Transition speed
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable auto-scroll
    autoplaySpeed: 4000, // Auto-scroll interval in ms
    arrows: true, // Show navigation arrows
    pauseOnHover: true, // Pause autoplay on hover
  };

  return (
    <div className="custom-slider-container">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="slider-slide">
          <img
            src="https://recbanda.ac.in/wp-content/uploads/2016/02/DSC_0845.jpg"
            alt="Campus View"
            className="slider-image"
          />
        </div>
        {/* Slide 2 */}
        <div className="slider-slide">
          <img
            src="https://recbanda.ac.in/wp-content/uploads/2016/02/DSC_0841.jpg"
            alt="Event"
            className="slider-image"
          />
        </div>
        {/* Slide 3 */}
        <div className="slider-slide">
          <img
            src="https://recbanda.ac.in/wp-content/uploads/2018/10/pace4.jpeg"
            alt="Students"
            className="slider-image"
          />
        </div>
        {/* Slide 4 */}
        <div className="slider-slide">
          <img
            src="https://recbanda.ac.in/wp-content/uploads/2018/04/IMG-20180328-WA0016_1522250932150.jpg"
            alt="Campus Event"
            className="slider-image"
          />
        </div>
      </Slider>
    </div>
  );
};

export default CustomSlider;

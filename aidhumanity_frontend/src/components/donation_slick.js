import React, { useState } from "react";
import Slider from "react-slick";
import Donation_card from './menu_options/components/donation_card';

function Donation_slick() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBeforeChange = (current, next) => {
    setCurrentSlide(next);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [    
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          infinite: true,
          className: "myCustomCarousel",
        }
      }
    ],
    beforeChange: handleBeforeChange,
    afterChange: handleBeforeChange,
    customPaging: () => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
        }}
      ></div>
    ),
  };

  const completedWidth = ((currentSlide + 1) / 3) * 100;
  const remainingWidth = 100 - completedWidth;

  const completedStyle = {
    height: "5px",
    backgroundColor: "#444445",
    transition: "width 0.3s ease-in-out",
    width: `${completedWidth}%`
  };

  const remainingStyle = {
    height: "5px",
    transition: "width 0.3s ease-in-out",
    width: `${remainingWidth}%`
  };

  const progressBarStyle = {
    height: "5px",
    backgroundColor: "lightgray"
  };

  return (
    <div className="slick donation">
      <Slider {...settings}>
        <Donation_card/>
        <Donation_card/>
        <Donation_card/>
        <Donation_card/>
        <Donation_card/>
        <Donation_card/>
        <Donation_card/>
      </Slider>
      <div style={progressBarStyle}>
        <div style={completedStyle}></div>
        <div style={remainingStyle}></div>
      </div>
    </div>
  );
}

export default Donation_slick;

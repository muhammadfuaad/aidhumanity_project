import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Achievement from "./generic/components/achievement";

function Achievements_slick() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      showThumbs: false,
      responsive: [       
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            infinite: true,
            className: "myCustomCarousel",
          }
        }
      ]
    };
    return (
      <div className="slick achievements">
        <Slider {...settings}>
          <div>
            <Achievement/>
          </div>
          <div>
            <Achievement/>
          </div>
          <div>
            <Achievement/>
          </div>
          <div>
            <Achievement/>
          </div>
          <div>
            <Achievement/>
          </div>
          <div>
            <Achievement/>
          </div>
        </Slider>
      </div>
    );
  }
export default Achievements_slick;
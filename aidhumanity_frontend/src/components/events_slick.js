import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Event from "./generic/components/event";
function Events_slick() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      showThumbs: false,
      arrows: false,
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
      ]
    };
    return (
      <div className="slick events flex flex-col relative">     
        <Slider {...settings}>
          <Event/>
          <Event/>
          <Event/>
          <Event/>
          <Event/>
          <Event/>
          <Event/>
          <Event/>
          <Event/>
          <Event/>
          <Event/>
          <Event/>
          <Event/>
          <Event/>
        </Slider>
        <button className="sm:absolute sm:-bottom-10 sm:right-0 px-10 py-6 text-[1.4rem] font-semibold text-primary-dark bg-transparent outline
        outline-spanish-gray rounded-xl self-center sm:self-auto mt-24 sm:mt-0">View All</button>
      </div>
    );
  }
export default Events_slick;
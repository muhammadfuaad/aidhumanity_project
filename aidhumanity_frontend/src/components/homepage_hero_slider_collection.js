import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Homepage_hero_slider from './homepage/components/homepage_hero_slider';
import Hero_card from './homepage/components/hero_card';
function Homepage_hero_slider_collection() {    
  return (
    <div className='homepage-hero'>
      <div className="hidden sm:flex gap-10 absolute bottom-[17rem] right-40 z-10">
        <Hero_card title="Pakistan Floods"/>
        <Hero_card title="Support an orphan child"/>
      </div>
      <Carousel
        showStatus={false}
        className="relative"
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              className={`${
                hasPrev ? 'absolute' : 'hidden'
              } top-[50%] left-0 justify-center items-center cursor-pointer z-20 hidden sm:flex`}
              onClick={clickHandler}
            >
              <div className="bg-white rounded-r-full px-4 py-2">
                <img src="./icons/arrow-left-gray.svg"></img>
              </div>
            </div>
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <div
              className={`${
                hasNext ? 'absolute' : 'hidden'
              } top-[50%] right-0 justify-center items-center cursor-pointer z-20 hidden sm:flex`}
              onClick={clickHandler}
            >
              <div className="bg-white rounded-l-full px-4 py-2">
                <img src="./icons/arrow-right-gray.svg"></img>
              </div>
            </div>
          );
        }}
      >
        <div>
          <Homepage_hero_slider
          title= "Build a water well"
          content= "1 in 3 people around the world do not have access to clean drinking water. Women and children often walk for miles each day to collect water to drink, denying them the opportunity to go to school, to work and to thrive."
          category= "Water for all"/>
        </div>
        <div>
          <Homepage_hero_slider
          title= "Yemen Emergency"
          content= "1 in 3 people around the world do not have access to clean drinking water. Women and children often walk for miles each day to collect water to drink, denying them the opportunity to go to school, to work and to thrive."
          category= "Water for all"
          />
        </div>
        <div>
          <Homepage_hero_slider
          title= "Rohingya Appeal"
          content= "1 in 3 people around the world do not have access to clean drinking water. Women and children often walk for miles each day to collect water to drink, denying them the opportunity to go to school, to work and to thrive."
          category= "Water for all"
          />
        </div>
      </Carousel>
    </div>
  );
}
export default Homepage_hero_slider_collection;

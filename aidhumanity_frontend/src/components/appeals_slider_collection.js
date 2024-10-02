import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Homepage_hero_slider from './homepage/components/homepage_hero_slider';
import Hero_card from './homepage/components/hero_card';
import Appeal_card from './generic/components/appeal_card';

function Appeals_slider_collection() {    
  return (
    <div className='relative'>
      <button className="px-10 py-6 text-[1.4rem] font-semibold text-primary-dark bg-transparent outline
          outline-spanish-gray rounded-xl self-center sm:self-auto absolute bottom-10 right-0">View All</button>
      <Carousel
        slidesToShow={3}
        showStatus={false}
        showArrows={false}
        className="relative"
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              className={`${
                hasPrev ? 'absolute' : 'hidden'
              } top-[50%] left-0 flex justify-center items-center cursor-pointer z-20`}
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
              } top-[50%] right-0 flex justify-center items-center cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <div className="bg-white rounded-l-full px-4 py-2">
                <img src="./icons/arrow-right-gray.svg"></img>
              </div>
            </div>
          );
        }}
      >
          <div className='w-full'><Appeal_card/></div>
          <div className='w-full'><Appeal_card/></div>
          <div className='w-full'><Appeal_card/></div>
      </Carousel>
    </div>
  );
}
export default Appeals_slider_collection;

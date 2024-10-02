import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import Slider from './homepage/components/slider';
import Hero_1 from "../assets/images/hero.png";
import Hero_2 from "../assets/images/heart-hands-bg.png";
import Hero_3 from "../assets/images/blog-hero-1.png";


function Homepage_slider() {
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      title: "Build a water well", 
      content: "1 in 3 people around the world do not have access to clean drinking water. Women and children often walk for miles each day to collect water to drink, denying them the opportunity to go to school, to work and to thrive.", 
      category: "Water for all",
      img: "Hero_1"
    },
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      title: "Water Hand Pumps", 
      content: "More than 1,500 people killed and 2 million homes partially or completely destroyed following the Yemen Floods of 2022.", 
      category: "Disaster And Emergency Appeals",
      img: "Hero_2"
    },
    {
      url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
      title: "Sponsor an Orphan", 
      content: "Feed a Child campaign provides hot, nutritious meals in schools. We ensure that children are nourished, helping boost attention and energy, and tackling hunger", 
      category: "Water for all",
      img: "Hero_3"
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='homepage-slider max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group' style={{ backgroundImage: `url(${Hero_1})`}}>
      <Slider style={{ backgroundImage: `url(${slides[currentIndex].url})`}} 
      content={slides[currentIndex].content} 
      title={slides[currentIndex].title} 
      category={slides[currentIndex].category}/>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <div className='bg-platinum rounded-r-full w-32 h-24 flex justify-center items-center' onClick={prevSlide} size={30}>
          <img src="./icons/arrow-left-gray.svg"></img>
        </div>
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <div className='bg-platinum rounded-l-full w-32 h-24 flex justify-center items-center' onClick={nextSlide} size={30}>
          <img src="./icons/arrow-right-gray.svg"></img>
        </div>
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage_slider;
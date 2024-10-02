import React from "react";
import Appeal_card from './generic/components/appeal_card';

function Appeals_carousel() {
  let box = document.querySelector(".appeals-carousel");
  const showNext=() => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  }
  const showPrevious=() => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  }
  return (
    <div className="relative">
      <button className="absolute left-0 top-[50%] bg-primary text-white p-8 rounde-3xl z-10" onClick={showNext}>Previous</button>
      <button className="absolute right-0 top-[50%] bg-primary text-white p-8 rounde-3xl z-10" onClick={showPrevious}>Next</button>
      <div>
        <div className="appeals-carousel flex gap-8 overflow-x-hidden">
          <div className="w-[45rem]">1<Appeal_card/></div>
          <div className="w-[45rem]"><Appeal_card/></div>
          <div className="w-[45rem]"><Appeal_card/></div>
          <div className="w-[45rem]"><Appeal_card/></div>
          <div className="w-[45rem]"><Appeal_card/></div>
          <div className="w-[45rem]"><Appeal_card/></div>
          <div className="w-[45rem]">7<Appeal_card/></div>
        </div>
      </div>
    </div>
  );
}
export default Appeals_carousel;
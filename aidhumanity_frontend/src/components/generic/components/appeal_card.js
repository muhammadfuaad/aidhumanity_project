import React from "react";
import User from "../../icons/user-circle-black.svg";
import water_hand_pumps from "../../icons/water-hand-pumps.png"
import Circular_progress_bar from "../../dashboard/circular_progress_bar";
import Circular_progress_bar_3 from "../../dashboard/circular_progress_bar_3";

function Appeal_card(props) {
  const [display, setDisplay] = React.useState(false);
  return (
    <div className="w-full bg-white shadow-md rounded-3xl relative">
      <div className="rounded-xl  bg-black bg-opacity-50 px-8 py-4 absolute top-4 right-4">
        <p className="text-[1.4rem] font-medium tracking-[-0.21px] text-platinum">Water For All</p>
      </div>
      <img src={water_hand_pumps}></img>
      <div className="px-8">
        <div className="py-12 border-b-2 border-platinum">
          <p className="text-[2.2rem] font-bold tracking-[-0.55px] text-black mb-8">Water Hands Pumps</p>
          <p className="text-[1.6rem] font-normal tracking-[-0.4px] leading-[2.4rem] text-body">Every single day, women around the world have to walk miles to collect water for their household. Installing a hand pump brings this basic human right closer to home.</p>
          <div className="flex gap-4 items-center mt-12">
            <div className="w-1/5">
              <Circular_progress_bar_3 percentage="50" fontSize="2" />
            </div>
            <div className="flex flex-col w-4/5 text-[1.1rem] font-semibold tracking-[-0.17px]">
              <div className="flex justify-between mb-1">
                <p className="text-primary">Raised: £243</p>
                <p className="text-green">Goal: £870</p>
              </div>
              <div className="flex justify-between relative">
                {display ? 
                <div className="rounded-3xl bg-white p-12 absolute -top-48 left-48 whitespace-nowrap">
                  <p className="text-[1.3rem] font-normal tracking-[-0.33px] text-body leading-[1.8rem]">This appeal is Sadaka Jaraiya applicable.</p>
                </div> : null}
                <div className="text-body flex gap-2 items-center">
                  <span className="font-medium">by</span><img src={User}></img><span> 12 supporters</span>
                </div>
                <div className="bg-amber rounded-full w-9 h-9 flex justify-center items-center" onClick={()=>setDisplay(current => !current)}>
                  <p className="text-[1rem] font-bold text-black">Z</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center py-10">
          <p className="text-[1.2rem] font-semibold tracking-[-0.18px] text-primary-dark">Read More</p>
          <button className="px-12 h-20 py-6 uppercase text-[1.4rem] font-semibold text-white bg-primary rounded-xl">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
}
export default Appeal_card;
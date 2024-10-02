import React from "react";
import Appeals_options from "../../homepage/components/appeals_options";
import Zakat_options from "../../homepage/components/zakat_options";
import Emergency_options from "../../homepage/components/emergency_options";
import Login from '../../menu_options/pages/login';
import Heart from "../../homepage/components/heart"
import Donate_now from './../../menu_options/pages/donate_now';
import Quick_donate from "../../menu_options/pages/quick_donate";

function Generic_header_1() {
  const [appealsOptions, setAppealsOptions] = React.useState(false)
  const [zakatOptions, setZakatOptions] = React.useState(false)
  const [emergencyOptions, setEmergencyOptions] = React.useState(false)
  const [donate, setDonate] = React.useState(false)
  const [quickDonate, setQuickDonate] = React.useState(false)

  return (
    <div className="">
      <div className="flex justify-between px-48 text-[1.4rem] font-medium tracking-[-0.21px] text-[#999] py-4 border-b border-platinum">
        <a href="#" className="flex gap-2">
          <p>En</p>
          <img src="./icons/drop-down.svg" className="w-4"></img>
        </a>

        <div className="flex gap-4">
          <a href="#">Latest News</a>
          <a href="#">Zakat Calculator</a>
        </div>

        <div className="flex gap-16">
          <a href="#" className="flex gap-4 relative">
            <div className="bg-platinum h-6 w-[1px] absolute -right-8"></div>
            <img src="./icons/phone-volume.svg"></img>
            <p className="font-bold text-primary">0330 057 9957</p>
          </a>
          <a href="#">Contact Us</a>
        </div>
      </div>

      <div className="px-48">
        <div className="flex justify-between py-8 relative">
          { appealsOptions ? <div className="absolute top-[100%] z-10 w-full"><Appeals_options/></div> : null }
          { zakatOptions ? <div className="absolute top-[100%] z-10 w-full"><Zakat_options/></div> : null }
          { emergencyOptions ? <div className="absolute top-[100%] z-10 w-full"><Emergency_options/></div> : null }
          { donate ? <div className="absolute top-[120%] left-[30%] z-10 w-full"><Donate_now/></div> : null }
          { quickDonate ? <div className="absolute top-[120%] left-[30%] z-10 w-full"><Quick_donate/></div> : null }


          <div className="flex justify-between w-[65%]">
            <div className="relative">
              <img src="./icons/primary-horizontal-logo.png" className="w-[23rem]"></img>
              <div className="bg-platinum h-20 w-[1px] absolute top-0 -right-24"></div>
            </div>
            <ul className="w-[65%] flex justify-between items-center text-[1.8rem] font-semibold tracking-[-0.27px] text-black
                ">
              <li><a href="#" className="whitespace-nowrap">Our Story</a></li>
              <li className="group">
                <a href="#" className="whitespace-nowrap" onClick={()=>setAppealsOptions(current=> !current)}>Appeals</a>
              </li>
              <li><a href="#" className="whitespace-nowrap" onClick={()=>setEmergencyOptions(current=> !current)}>Emergency</a></li>
              <li><a href="#" className="whitespace-nowrap" onClick={()=>setZakatOptions(current=> !current)}>Zakat</a></li>
              <li><a href="#" className="whitespace-nowrap">Get Involved</a></li>
            </ul>
          </div>
          <div className="flex gap-2 justify-between items-center">
            <a href="#">
              <div className="flex gap-4 items-center mr-4 group relative">
                <div className="hidden group-hover:block absolute top-8 left-[-25rem] z-10"><Login/></div>
                <img src="./icons/user-circle-black.svg" className="w-8"></img>
                <p className="text-[1.4rem] font-semibold tracking-[-0.21px] text-black whitespace-nowrap">My Account</p>
              </div>
            </a>
            <a href="#" className="mr-6">
              <div className="w-8" onClick={()=>setQuickDonate(current=> !current)}><Heart/></div>
            </a>
            <button className="px-10 py-4 uppercase text-[1.4rem] font-semibold text-primary-medium bg-transparent outline
              outline-primary rounded-xl" onClick={()=>setDonate(current=> !current)}>Donate now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Generic_header_1;
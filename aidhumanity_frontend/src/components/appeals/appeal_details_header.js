import React from "react";
import Appeals_options from "../homepage/components/appeals_options";
import Login from "../menu_options/pages/login";
import Heart from "../homepage/components/heart";
import Heart_white from "./heart_white";
function Appeal_details_header() {
  return (
    <div className="">
      

      <div className="flex justify-between px-48 py-8 bg-primary-dark">
        <div className="flex justify-between w-[65%]">
          <div>
            <img src="./icons/logo-horizontal-white.svg" className="w-[23rem]"></img>
            <div className="bg-white h-20 w-[1px] absolute top-0 -right-24"></div>
          </div>
          <ul className="w-[65%] flex justify-between items-center text-[1.8rem] font-semibold tracking-[-0.27px] text-white
              relative">
            <div className="h-16 w-px absolute -left-20 bg-white opacity-25"></div>
            <li><a href="#" className="whitespace-nowrap">Our Story</a></li>
            <li className="group">
              <a href="#" className="whitespace-nowrap">Appeals</a>
              <div className="hidden group-hover:block"><Appeals_options/></div>
            </li>
            <li><a href="#" className="whitespace-nowrap">Emergency</a></li>
            <li><a href="#" className="whitespace-nowrap">Zakat</a></li>
            <li><a href="#" className="whitespace-nowrap">Get Involved</a></li>
          </ul>
        </div>

        <div className="flex gap-2 justify-between items-center">
          <a href="#">
            <div className="flex gap-4 items-center mr-4 group relative">
              <div className="hidden group-hover:block absolute top-8 left-[-25rem] z-10"><Login/></div>
              <img src="./icons/user-circle-white.svg" className="w-8"></img>
              <p className="text-[1.4rem] font-semibold tracking-[-0.21px] text-white whitespace-nowrap">My Account</p>
            </div>
          </a>
          <a href="#" className="mr-6">
            <div className="w-8"><Heart_white/></div>
          </a>
          <button className="px-10 py-4 uppercase text-[1.4rem] font-semibold text-primary-medium bg-transparent outline
            outline-primary rounded-xl">Donate now</button>
        </div>
      </div>
    </div>
  );
}

export default Appeal_details_header;
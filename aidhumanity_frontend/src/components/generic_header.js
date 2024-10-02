import React from "react";
import Phone from "./icons/phone-volume.svg";
import Dropdown from "./icons/drop-down.svg";
import User from "./icons/user-circle.svg";
import Logo from "./icons/horizontal-logo.svg";
import Heart from "./icons/heart.svg";
import Appeals_options from "./homepage/components/appeals_options";
import Login from './menu_options/pages/login';

function Generic_header() {
  return (
    <div className="">
      <div className="flex justify-between text-[1.4rem] font-medium tracking-[-0.21px] text-[#999] py-4 px-64 border-b border-platinum">
        <a href="#" className="flex gap-2">
          <p>En</p>
          <img src={Dropdown} className="w-4"></img>
        </a>

        <div className="flex gap-4">
          <a href="#">Latest News</a>
          <a href="#">Zakat Calculator</a>
        </div>

        <div className="flex gap-16">
          <a href="#" className="flex gap-4 relative">
            <div className="bg-platinum h-6 w-[1px] absolute -right-8"></div>
            <img src={Phone}></img>
            <p className="font-bold text-primary">0330 057 9957</p>
          </a>
          <a href="#">Contact Us</a>
        </div>
      </div>

      <div className="flex justify-between px-64 py-8">
        <div className="flex gap-24">
          <img src={Logo}></img>
          <ul className="flex justify-between gap-24 items-center text-[1.8rem] font-semibold tracking-[-0.27px] text-black
              ">
            <li><a href="#">Our Story</a></li>
            <li className="group">
              <a href="#">Appeals</a>
              <div className="hidden group-hover:block"><Appeals_options/></div>
            </li>
            <li><a href="#">Emergency</a></li>
            <li><a href="#">Zakat</a></li>
            <li><a href="#">Get Involved</a></li>
          </ul>
        </div>

        <div className="flex gap-8 items-center">
          <a href="#">
            <div className="flex gap-4 items-center mr-4 group relative">
              <div className="hidden group-hover:block absolute top-8 left-[-25rem] z-10"><Login/></div>
              <img src="./icons/user-circle-black.svg" className="w-8"></img>
              <p className="text-[1.4rem] font-semibold tracking-[-0.21px] text-black whitespace-nowrap">My Account</p>
            </div>
          </a>
          <a href="#">
            <div><img src="./icons/heart.svg" className="w-8 h-12"></img></div>
          </a>
          <button className="w-full py-6 uppercase text-[1.4rem] font-semibold text-primary bg-transparent outline
            outline-primary rounded-xl">Donate now</button>
        </div>
      </div>
    </div>
  );
}

export default Generic_header;
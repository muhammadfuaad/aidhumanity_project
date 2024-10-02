import React from "react";
import Dropdown from "../../icons/drop-down.svg";
import User from "../../icons/user-circle-black.svg";
import Logo from "../../icons/logo-without-text.svg";
import Heart from "./heart";
import Appeals_options from "./appeals_options";
import Login from '../../menu_options/pages/login';

function Home_page_header() {
  return (
    <div className="">
      <div className="flex justify-between px-64 py-8">
        <div className="flex gap-24">
          <img src={Logo} className="w-16"></img>
          <ul className="flex justify-between gap-24 items-center text-[1.8rem] font-semibold tracking-[-0.27px] text-black
              relative">
            <div className="bg-platinum h-16 w-[1px] absolute -left-12"></div>
            <li><a href="#" className="whitespace-nowrap">Our Story</a></li>
            <li className="group">
              <a href="#">Appeals</a>
              <div className="hidden group-hover:block"><Appeals_options/></div>
            </li>
            <li><a href="#" className="whitespace-nowrap">Emergency</a></li>
            <li><a href="#" className="whitespace-nowrap">Zakat</a></li>
            <li><a href="#" className="whitespace-nowrap">Get Involved</a></li>
          </ul>
        </div>
        

        <div className="flex gap-8 items-center">
          <div className="flex gap-16 items-center text-[1.4rem] font-medium tracking-[-0.21px] text-spanish-gray">
            <a href="#" className="whitespace-nowrap">Zakat Calculator</a>      
            <a href="#" className="flex gap-2 mr-4 relative">
              <div className="bg-platinum h-8 w-[1px] absolute -left-8"></div>
              <p>En</p>
              <img src={Dropdown} className="w-4"></img>
            </a>
          </div>
          <a href="#">
            <div className="flex gap-4 items-center mr-4 group relative">
              <div className="hidden group-hover:block absolute top-8 left-[-25rem] z-10"><Login/></div>
              <img src={User} className="w-8"></img>
              <p className="text-[1.4rem] font-semibold tracking-[-0.21px] text-black whitespace-nowrap">My Account</p>
            </div>
          </a>
          <a href="#">
            <Heart/>
            
          </a>
          <button className="w-full py-6 uppercase text-[1.4rem] font-semibold text-primary bg-transparent outline
            outline-primary rounded-xl">Donate now</button>
        </div>
      </div>
    </div>
  );
}

export default Home_page_header;
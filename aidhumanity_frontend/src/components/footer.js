import React from "react";
import Facebook from "./icons/facebook.png"
import Twitter from "./icons/twitter.png"
import Instagram from "./icons/instagram.png"
import Linkedin from "./icons/linkedin.png"
import Paypal from "./icons/paypal.png"
import Visa from "./icons/visa.png"
import Mastercard from "./icons/mastercard.png"
import Stripe from "./icons/stripe.png"
import Regular from "./icons/regulator.svg"
import Percent from "./icons/100percent.svg"
import Footer_logo from "./icons/footer-logo.svg"
import Phone from "./icons/phone-volume.svg"
import arrow_right from "./icons/arrow-right-white.svg"

function Footer() {
  return (
    <footer className="bg-primary-dark p-5 px-48 pt-16 relative overflow-hidden">
      <img src="./icons/footer-background-logo.svg" className="absolute right-0 top-0 z-10"></img>

      <div className="">
        <p className="text-[1.2rem] font-normal tracking-[0.06px] text-white leading-[1.5rem] mb-4 opacity-50">Aid Humanity is a UK registered charity 1184639.</p>
        <div className="flex gap-12">
          {/* First col */}
          <div className="flex flex-col basis-[40%]">
            <div className="w-3/4">
              <div className="flex my-8">
                <img src={Footer_logo} className= "w-[12rem]" alt= "footer logo" />
                <div className="ml-12 flex flex-col gap-4">
                  <div className="flex space-x-2 items-center">
                    <img src={Phone} className= "w-[17px] h-[1.6rem] mr-1" alt= "phone icon" />
                    <div><p className="text-[1.8rem] font-bold tracking-[-0.27px] text-primary leading-[2rem]">0330 057 9957</p></div>
                  </div>
                  <div><p className="text-[1.8rem] font-semibold tracking-[-0.27px] text-amber leading-[2.6rem]">info@aidhumanity.co.uk</p></div>
                  <div className="flex gap-12 items-center">
                    <a href="#"><img src={Facebook} className= "w-[0.9rem] h-[1.6rem]" alt= "facebook icon" /></a>
                    <a href="#"><img src={Twitter} className= "w-[2rem] h-[1.7rem]" alt= "twitter icon" /></a>
                    <a href="#"><img src={Instagram} className= "w-[2.5rem] h-[2.5rem]" alt= "instagram icon" /></a>
                    <a href="#"><img src={Linkedin} className= "w-[1.8rem] h-[1.7rem]" alt= "linkedin icon" /></a>
                  </div>
                </div>
              </div>
              <p className="text-[1.6rem] font-normal tracking-[-0.24px] text-[#8892ac] leading-[2.6rem]">Aid Humanity is proud to be a non-profit organization that passes 100% of our donations to charitable causes around the world.</p>
            </div>
            <div className="flex items-center mt-32">
              <span className="text-[1.2rem] font-normal tracking-[0.06px] text-white leading-[1.5rem] mr-2">Registered with</span>
              <img src={Regular} className= "w-[12rem] h-[3.6rem] mix-blend-luminosity" alt= "regulator icon" />
            </div>
          </div>
    
          {/* Second column */}
          <div className="flex flex-col basis-[20%]">
            <span className="text-[1.4rem] font-semibold tracking-[-0.21px] text-white leading-[1.6rem] mb-8">ABOUT US</span>
            <ul className="text-[1.6rem] font-medium tracking-[-0.24px] text-[#8892ac] leading-[3rem]">
              <li><a href="#" className="hover:underline">Our Story</a></li>
              <li><a href="#" className="hover:underline">Marketing</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Zakat</a></li>
              <li><a href="#" className="hover:underline">Get Involved</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Donate</a></li>
              <li><a href="#" className="hover:underline">How it works</a></li>
              <li><a href="#" className="hover:underline">Become a Fundraiser</a></li>
            </ul>
          </div>
    
          {/* Third column */}
          <div className="flex flex-col basis-[20%]">
            <span className="text-[1.4rem] font-semibold tracking-[-0.21px] text-white leading-[1.6rem] mb-8">APPEALS</span>
            <ul className="text-[1.6rem] font-medium tracking-[-0.24px] text-[#8892ac] leading-[3rem]">
              <li><a href="#" className="hover:underline">Build a Mosque</a></li>
              <li><a href="#" className="hover:underline">Disaster & Emergency</a></li>
              <li><a href="#" className="hover:underline">Appeals</a></li>
              <li><a href="#" className="hover:underline">Water For All</a></li>
              <li><a href="#" className="hover:underline">Sponsor an Orphan</a></li>
              <li><a href="#" className="hover:underline">Hunger Appeal</a></li>
            </ul>
          </div>
    
          {/* Fourth colmn */}
          <div className="flex flex-col">
            <span className="text-[1.4rem] font-semibold tracking-[-0.21px] text-white leading-[1.6rem] mb-8">NEWSLETTER</span>
            <span className="text-[1.8rem] font-bold tracking-[-0.45px] text-white leading-[2.8rem] w-3/4">Subscribe to the free newsletter and stay up-to date</span>
              
                <div className="flex gap-2 flex-wrap mt-8 items-center w-full">
                  <input type="text"  className="h-full w-[70%] rounded-xl px-6 py-4 focus:outline-none text-[1.2rem] font-normal tracking-[0px] text-[#999]" placeholder="Your email"></input>
                  <button className="cursor-pointer w-[45px] h-16 ml-3 bg-primary text-white rounded-xl flex justify-center items-center">
                    <img src={arrow_right}/>
                  </button>
                </div>
            <div className="flex items-center text-white font-semibold mt-56">
              <span className="text-[1.8rem] tracking-[-0.9px] mr-4">we transfer</span>
              <img src={Percent} className= "w-[11rem] h-[4rem]" alt= "100percent" />
              <span className="text-[1.2rem] tracking-[-0.6px] ml-1">of your donation</span>
            </div>
          </div>
        </div>
    
        <ul className="flex justify-center space-x-6 text-white opacity-50 mt-24 mb-6 text-[1.2rem] font-normal tracking-[-.06px]">
          <li><a href="#" className="">Terms & Conditions</a></li>
          <li><a href="#" className="">Privacy Policy</a></li>
          <li><a href="#" className="">Donation Policy</a></li>
          <li><a href="#" className="">Refund Policy</a></li>
        </ul>
        <hr className="my-3 bg-white opacity-25 h-[0.15rem]"></hr>
    
        <div className="flex justify-between items-center my-12">
          <p className="text-white opacity-50 text-[1.2rem] font-normal tracking-[-.06px]">
            <span>&copy; 2022 </span>
            <span className="font-semibold"> Aid Humanity. </span>
            <span> All rights reserved.</span>
          </p>
          <div className="flex justify-between items-center basis-[25%]">
            <a href="#"><img src={Visa} className="w-[4.3rem] h-[1.4rem] mix-blend-luminosity" alt="visa logo" /></a>
            <a href="#"><img src={Mastercard} className="w-[2.9rem] h-[1.8rem] mix-blend-luminosity" alt="mastercard logo" /></a>
            <a href="#"><img src={Paypal} className="w-[8.7rem] h-[2.1rem] mix-blend-luminosity" alt="paypal logo" /></a>
            <a href="#"><img src={Stripe} className="w-[5.3rem] h-[2.2rem] mix-blend-luminosity" alt="stripe logo" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
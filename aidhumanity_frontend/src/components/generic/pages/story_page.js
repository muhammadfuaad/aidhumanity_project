import Page_header from "../components/page_header";
import Mother_daughter from "../images/mother-daughter.png";
import Orange from "../images/orange-1.png";
import Logo from "../images/logo-without-text.svg";
import Yellow_ring_large from "../images/yellow-ring-large.png"
import Yellow_ring_small from "../images/yellow-ring-small.png"
import Blue_circle from "../images/blue-circle.png"
import Footer from "../../footer";
import Home_page_header_mobile from './../../homepage/components/home_page_header_mobile';
import Percentage_vertical from "../../percentage_vertical"
import Appeal_card from "../components/appeal_card";
import Footer_mobile from '../../footer_mobile';
import Generic_header_1 from './../components/generic_header_1';

function Story_page() {
  return (
    <section>
      <div className="hidden sm:block">< Generic_header_1 /></div>
      <div className="sm:hidden block">< Home_page_header_mobile /></div>
      <Page_header heading="Our Story" icon="hidden" />
      <div className="flex flex-col relative overflow-hidden">
        <img src={Yellow_ring_small} className="hidden sm:block absolute w-36 h-36 top-[90rem] left-4"></img>       
        <img src={Blue_circle} className="hidden sm:block absolute w-16 h-16 top-[140rem] left-[30rem]"></img>

        <div className="flex flex-col px-8 sm:pl-48 sm:pr-0 relative">
          <img src={Yellow_ring_large} className="hidden sm:block absolute w-[30rem] h-[30rem] -bottom-20 right-8"></img>
          <p className="text-[1.6rem] font-normal tracking-[-0.24px] text-[#999] my-16 hidden sm:block">Home / Our Story</p>
          <div className="flex flex-col sm:flex-row sm:gap-48">
            <div className="w-full sm:w-1/2 flex flex-col">
              <p className="generic-heading mt-16 sm:mt-0 mb-12 sm:mb-16">Our Story</p>
              <p className="generic-subheading mb-8 sm:mb-12">About Us</p>
              <p className="generic-body mb-8 sm:mb-36">Aid Humanity is proud to be a non-profit organisation that passes 100% of our donations to charitable causes around the world.</p>
              <div className="hidden sm:block relative">
                <img src={Mother_daughter}></img>
                <img src={Logo} className="absolute w-[30rem] h-[40rem] -top-40 right-8 sm:-right-60 z-10"></img>
              </div>
            </div>

            <div className="w-full sm:w-1/2 sm:flex flex-col">
              <div className="relative">
                <div className="absolute top-8 left-8"><Percentage_vertical/></div>
                <img src={Orange} className="rounded-l-3xl "></img>
              </div>
              <p className="generic-subheading mb-6 mt-[3.5rem] sm:mb-12 sm:mt-24">A Pillar to consider</p>
              <p className="generic-body mb-24 sm:mb-36 sm:pr-40">One of the 5 pillars of Islam is Charity (zakah), and our goal is to help muslims look for resources to help those in need. We believe that charity works best when the complexity and friction is removed, so we’ve created a simple platform that allows you to connect with, launch, and promote good causes to people all over the world. Exactly what you want to hear when it’s time to make a difference by bringing the charitable tenants of Islam together to solve global issues.</p>
              <div className="sm:hidden relative">
                <img src={Mother_daughter}></img>
                <img src={Logo} className="absolute w-60 sm:w-[30rem] -top-20 sm:-top-40 right-8 sm:-right-60 z-10"></img>
              </div>
            </div>
          </div>

          <div className="self-center sm:w-1/2">
            <p className="generic-subheading mb-6 mt-[3.5rem] sm:mb-12 sm:mt-24">Our Promise</p>
            <div className="generic-body mb-12 sm:mb-36 flex flex-col gap-8 sm:gap-12">
              <p>We take pride in our non-profit philosophy and promise to never take a penny of donations towards our running costs. We started to make a difference, we’re committed to making a difference, and with you by our side, we know we can seriously make a difference in communities all over the world. This is our promise to you, and we will always keep it.
              </p>
              <p> When it’s time to change the world one little action at a time, nothing less will do.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col px-8 sm:px-48 bg-[#f9f9f9]">
          <p className="self-center generic-subheading my-20">Recent Appeals</p>

          <div className="flex gap-12">
            <Appeal_card />
            <Appeal_card />
            <Appeal_card />
          </div> 
          <div className='flex my-20 self-end'>
            <button className="px-10 py-6 self-end text-[1.4rem] font-semibold text-primary-dark bg-transparent outline
              outline-spanish-gray rounded-xl">View All</button>
          </div>   
        </div>
      </div>
      <div className="hidden sm:block">< Footer /></div>
      <div className="sm:hidden">< Footer_mobile /></div>
    </section>
  );
}
export default Story_page;
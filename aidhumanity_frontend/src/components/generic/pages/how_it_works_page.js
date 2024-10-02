import Page_header from "../components/page_header";
import Page_sidebar from "../components/page_sidebar";
import Assistance from "../components/assistance";
import Steps from '../components/steps';
import {Refine_message} from "../images/refine-message.svg"
import Steps_list from "../components/steps_list";
import Role from './../components/role';
import Layout_page from "./layout_page";

function How_it_works_page() {
  return (
    <Layout_page 
      banner_heading="How it works"
      heading="How it works"
      assistance="hidden"
      navigator=<p className="text-[1.6rem] font-normal tracking-[-0.24px] text-[#999] my-16">Home / How it works</p>
      content=
      <div className="flex flex-col">
        <p className="generic-body mb-16 sm:mb-48">We’ve build Aid Humnity to be as simple and straightforward as possible. Here’s the simplest way to make a difference with just a few clicks…</p>
        <Steps_list />
        <p className="text-[2.2rem] font-normal tracking-[-0.55px] text-body my-28">It’s the simple, straightforward, and transparent way to bring people together to make the world a better place. Just what you want to hear when it’s time to devote your time and energy to a good cause that really means something to you.</p>
        <div className="mb-32">
          <p className="generic-subheading mb-8">Want to do even more?</p>
          <p className="generic-body">To help incentivise kind-hearted people to do even more, we’ve proud to be able to offfer the chance to make referrals and earn rewards. It’s our way of making sure every good deed is noticed the right way.</p>
        </div>
        <div className="mb-32">
          <p className="generic-subheading mb-8">What can you do with us?</p>
          <p className="generic-body">With Aid Humanity, you have the choice to help in a variety of different ways so that chrity work always fits seamlessly into your everyday life:</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-16 mb-20">
          < Role title="Donator" description="You’re the core of what we do, giving funds to help those in need." number="01."/>
          < Role title="Campaigner" description="You have a vision and you want to see it come to life." number="02."/>
          < Role title="Super Admin" description="You’ll be one of three directors who see regular updates." number="03."/>
        </div>
        <button className="mb-8 self-center px-12 h-20 py-6 uppercase text-[1.4rem] font-semibold text-white bg-primary rounded-xl">
          Create An Account Now
        </button>
        <p className="self-center text-[1.8rem] font-bold tracking-[-0.45px] text-black">Why wait?</p>
      </div>
    />
      
  );
}
export default How_it_works_page;
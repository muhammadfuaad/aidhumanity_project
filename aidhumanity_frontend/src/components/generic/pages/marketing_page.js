import Marketing_steps_list from "../components/marketing_steps_list";
import Layout_page from './layout_page';

function Marketing_page() {
  return (
    < Layout_page
      banner_heading="Marketing"
      icon=""
      assistance="hidden"
      heading="Marketing"
      navigator=<p className="text-[1.6rem] font-normal tracking-[-0.24px] text-[#999] my-16">Home / <span className="text-body">Help Center</span> / Donation Policy</p>
         
      content=
      <div className="flex flex-col">
        <p className="text-[3rem] font-bold tracking-[-0.75px] text-black mb-8">Marketing your campaign</p>
        <p className="text-[2.2rem] font-normal tracking-[-0.55px] text-body leading-[3rem] mb-48">We want your campaign to be a sucess from the moment you launch it, which is why we’ve created a simple, straightforward process that covers everything. All you have to do is follow it step by step and watch as the world helps you change things for the better:</p>
        <Marketing_steps_list />
        <p className="text-[2.2rem] font-normal tracking-[-0.55px] text-body mt-20 mb-12 sm:my-28">These quick steps will get your campaign up and running before you know it. From there, it’s over to you to innovate and create so that your ideas never run out of steam. We know you can do this, and the more passion you have, the more you’ll raise.</p>
        <button className="mb-8 self-center w-full sm:w-auto px-12 h-20 py-6 uppercase text-[1.4rem] font-semibold text-white bg-primary rounded-xl">
          Start Fundraising Now
        </button>
        <p className="self-center text-[1.8rem] font-bold tracking-[-0.45px] text-black">Why wait a moment longer?</p>
      </div>
    />      
  );
}
export default Marketing_page;
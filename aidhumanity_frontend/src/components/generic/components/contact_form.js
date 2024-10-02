import Toggle from './../../dashboard/toggle';
import Bar from "../../icons/blue-bar.svg";
function Contact_form() {
  return (
  <div className="flex flex-col relative rounded-3xl bg-white p-12 shadow-md">
    <img src={Bar} className="absolute top-0 left-0"></img>
    <p className="text-[3rem] font-bold tracking-[-0.75px] text-black mb-12">Contact Form</p>
    <div className="flex flex-col gap-6">
      <div className="relative">
        <input type="text" id="full-name" className="focus:outline-primary focus:bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
        <label for="full-name" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray  top-2 left-4">Full Name*</label>   
      </div>

      <div className="relative">
        <input type="text" id="email" className="focus:outline-primary focus:bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
        <label for="email" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray  top-2 left-4">Email*</label>   
      </div>

      <div className="relative">
        <input type="text" id="email" className="focus:outline-primary focus:bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
        <label for="email" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray  top-2 left-4">Phone*</label>   
      </div>

      <div className="relative">
        <input type="text" id="email" className="focus:outline-primary focus:bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
        <label for="email" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray  top-2 left-4">Subject*</label>   
      </div>

      <div className="relative">
        <textarea rows="8" id="email" className="focus:outline-primary focus:bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
        <label for="email" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray  top-2 left-4">Message*</label>   
      </div>   
    </div>
    <p className="self-end text-[1.4rem] font-medium tracking-[-0.35px] text-[#333333] mt-4">9/999</p>
    
    <div className="flex space-x-2 mt-4 mb-10">
      < Toggle />
      <p className="text-[1.4rem] font-medium tracking-[0px] text-[#333333]">I agree to <span className="font-semibold text-primary">Terms & Conditions </span>
      and <span className="font-semibold text-primary">Privacy Policy</span></p>
    </div>
    <button className="w-full h-20 py-6 uppercase text-[1.4rem] font-semibold text-white bg-primary rounded-xl">
      Submit
    </button> 
  </div>
  );
}
export default Contact_form;
import Mobile_header from "./mobile_header";
import Header_1 from "./header_1"
import Amount from "./amount";
import React from "react"
import Input_dropdown from "./input_dropdown";

function Donation_form(props) {
  return (
    <div className="min-h-screen sm:min-h-0 relative overflow-hidden sm:w-[60rem] sm:rounded-3xl sm:border sm:border-black">
      <div className="block sm:hidden">
        < Mobile_header title={props.title} display_logout="hidden"/>
      </div>
      <div className="sm:block hidden">
        < Header_1 title={props.title}/>
      </div>
        <div className="flex flex-col">
          {props.content}

          <div className="flex flex-col bg-[#fafafa] sm:bg-white px-6 pb-10 rounded-b-3xl min-h-screen sm:min-h-fit">
            <p className="text-[2.6rem] font-bold tracking-[-0.65px] leading-[3rem] text-black sm:text-[3.6rem] sm:tracking-[-0.54px] sm:leading-[4rem] self-center my-12">Donation Amount</p>
            < Amount />
            <Input_dropdown/>
            <button className="w-full h-20 py-6 uppercase text-[1.4rem] font-semibold text-black bg-green rounded-xl">
              Continue
            </button>
          </div>
        </div>
    </div>
  );
}
export default Donation_form;
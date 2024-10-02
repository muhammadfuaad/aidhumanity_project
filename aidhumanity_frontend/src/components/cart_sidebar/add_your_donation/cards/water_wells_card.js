import {ReactComponent as Drop_down} from "../../../../icons/drop-down.svg";
import {ReactComponent as Plus} from "./plus.svg";

function Water_wells_card() {
  return (
    <div className="bg-white rounded-3xl p-8 flex flex-col gap-8 relative"> 
      <img src="./icons/footer-background-logo.svg" className="absolute top-[90%] right-1"></img>

      <button className="w-full py-4 capitalize text-[1.2rem] font-semibold text-white bg-green rounded-xl">
        Single<br></br> Payment
      </button>
      <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="w-full text-[1.3rem] font-medium text-gray
        tracking-[0px] px-4 py-5 inline-flex justify-between items-center border-light rounded-xl" type="button">
        <span className="text-[1.3rem] font-medium tracking-[0px] text-gray">Uganda</span>
        <img src="./icons/drop-down.svg" alt="dropdown"></img>
      </button>
      

      <div className="flex flex-col gap-4">
        <p className="text-[1.4rem] font-bold tracking-[-0.35px] text-black">Name on Plaque</p>
        <p className="text-[1.1rem] font-normal tracking-[-0.28px] text-body">Please provide the name(s) exactly as you’d like it to appear on the plaque.</p>
       
      </div>
      <div className="flex flex-col gap-2">
        <div className="relative group">
          <input type="text" id="name" className="focus:outline-none focus:bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
          <label for="name" className="focus:hidden absolute text-[1.3rem] font-medium tracking-[0px] text-gray  top-7 left-4">Name on Plaque</label>
        </div>
        <p className="text-[1rem] font-normal tracking-[-0.25px] text-spanish-gray">27 characters left</p>
      </div>

      <div className="flex flex-col gap-2">
        <button className="w-full px-6 py-4 uppercase text-[1.4rem] font-semibold text-primary-dark bg-transparent outline 
          outline-primary-dark rounded-xl flex space-x-4">
          < Plus stroke="#102558" />
          <span>Add Water Well</span>
        </button>
        <p className="text-[1rem] font-normal tracking-[-0.25px] text-spanish-gray">Max 5 water wells</p>
      </div>
      

      
        <button className="w-full h-20 py-6 uppercase text-[1.4rem] font-semibold text-black bg-green rounded-xl">
          Add Donation
        </button>
    </div>
  )
} 
 
export default Water_wells_card;
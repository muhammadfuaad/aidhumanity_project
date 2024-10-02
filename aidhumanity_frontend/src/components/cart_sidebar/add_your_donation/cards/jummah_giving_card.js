import {ReactComponent as Drop_down} from "../../../../icons/drop-down.svg";
import Cause from "./cause";
import Amount from "./amount";

function Jummah_giving_card() {
  return (
    <div className="bg-white rounded-3xl p-8 flex flex-col gap-10 relative"> 
      <img src="./icons/footer-background-logo.svg" className="absolute -bottom-[35rem] right-1"></img>
       
      <button className="w-full py-4 capitalize text-[1.2rem] font-semibold text-white bg-green rounded-xl">
        Recurring<br></br> Payments
      </button>

      <div className="flex flex-col gap-4">
        <p className="text-[1.4rem] font-bold tracking-[-0.35px] text-black">Choose your Cause</p>
        <div className="flex flex-col space-y-4">
          < Cause label="Most Needy" img="most-needy" />
          < Cause label="Quran" img="quran" />
          < Cause label="Food" img="food"/>
          < Cause label="Water Well" img="water-well"/>
          < Cause label="Sadaqah" img="zakat"/>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <p className="text-[1.4rem] font-bold tracking-[-0.35px] text-black">Amount</p>
        < Amount />
        <div className="relative">
          <input type="number" id="" className="focus:outline-none focus:bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
          <label for="" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray top-2 left-4">Number of Fridays</label>   
        </div>
        <button className="w-full h-20 py-6 uppercase text-[1.4rem] font-semibold text-black bg-green rounded-xl">
          Add Donation
        </button>
      </div>
    </div>
  )
} 
 
export default Jummah_giving_card;
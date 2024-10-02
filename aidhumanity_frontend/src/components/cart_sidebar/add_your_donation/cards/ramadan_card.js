import {ReactComponent as Drop_down} from "../../../../icons/drop-down.svg";
import Radio from "../../../dashboard/radio";
import Cause from "./cause";
import Ways from "./ways";
import Amount from "./amount";
import Left_label_input from "./left_label_input";

function Ramadan_card() {
  return (
    <div className="bg-white rounded-3xl p-8 flex flex-col gap-10 relative">  
      <img src="./icons/footer-background-logo.svg" className="absolute -bottom-[35rem] right-1"></img>
      <button className="w-full py-4 capitalize text-[1.2rem] font-semibold text-white bg-green rounded-xl">
        Recurring<br></br> Payments
      </button>

      <div className="flex flex-col gap-4">
        <p className="text-[1.4rem] font-bold tracking-[-0.35px] text-black">Choose your Cause</p>
        <p className="text-[1.1rem] font-normal tracking-[-0.28px] text-body">Aid humanity supports hundreds of projects around the world and your donation on this month will be needed in those most neediest of places</p>
        <div className="flex flex-col space-y-4">
          < Cause label="Most Needy" img="most-needy" />
          < Cause label="Zakat" img="zakat"/>
          < Cause label="Food" img="food"/>
          < Cause label="Sadaqah" img="sadaqah"/>
          < Cause label="Water Well" img="water-well"/>
          < Cause label="Masjid Builds" img="mosque"/>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-[1.4rem] font-bold tracking-[-0.35px] text-black">Choose how you want to give</p>
        <div className="flex flex-col space-y-4">
          < Ways label="Daily 30 nights" />
          < Ways label="Last 10 days"/>
          < Ways label="Blessed odd days"/>
          < Ways label="One Payment on the 27th Night"/>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <p className="text-[1.4rem] font-bold tracking-[-0.35px] text-black">Amount</p>
        < Amount />
        <Left_label_input/>
        <button className="w-full h-20 py-6 uppercase text-[1.4rem] font-semibold text-black bg-green rounded-xl">
          Add Donation
        </button>
      </div>
    </div>
  )
} 
 
export default Ramadan_card;
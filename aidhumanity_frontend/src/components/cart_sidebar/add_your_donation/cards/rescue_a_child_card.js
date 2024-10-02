import {ReactComponent as Drop_down} from "../../../../icons/drop-down.svg";
import Check from "./check";
import Left_label_input from './left_label_input';

function Rescue_a_child_card() {
  return (
    <div className="bg-white rounded-3xl p-8 flex flex-col space-y-4 relative">
      <img src="./icons/footer-background-logo.svg" className="absolute -bottom-[35rem] right-1"></img>
      <div className="flex space-x-4">   
        <button className="w-1/2 py-4 capitalize text-[1.2rem] font-semibold text-[#bdbdbd] bg-transparent outline outline-[1px]
           outline-[#bdbdbd] rounded-xl">
          Single<br></br> Payment
        </button>
        <button className="w-1/2 py-4 capitalize text-[1.2rem] font-semibold text-white bg-green rounded-xl">
          Regular<br></br> Payment
        </button>
      </div>   

      <div className="flex flex-col">
          <div className="flex">
            <div className="w-1/2"><Check amount="25" title="Rescue a Child"/></div>
            <div className="w-1/2"><Check amount="360" title="Sponsor a Child for One Year"/></div>
          </div>
          <div className="flex">
            <div className="w-1/2"><Check amount="100" title="Rescue 4 Street Children"/></div>
            <div className="w-1/2"><Check amount="300" title="Rescue 12 Street Children"/></div>
          </div>
          <div className="flex">
            <div className="w-1/2"><Check amount="1000" title="Help Running our Shelter"/></div>
            <div className="w-1/2"><Check amount="360" title="Sponsor a Child for One Year"/></div>
          </div>
      </div>
      <Left_label_input/>

      <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="w-full text-[1.3rem] font-medium text-gray
          tracking-[0px] px-4 py-5 inline-flex justify-between items-center border-light rounded-xl" type="button">
        <span className="">Donation</span>
        < Drop_down stroke="#444445" />
      </button>

      <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="w-full text-[1.3rem] font-medium text-gray
          tracking-[0px] px-4 py-5 inline-flex justify-between items-center border-light rounded-xl" type="button">
        <span className="text-[1.3rem] font-medium tracking-[0px] text-gray">Where Most Needed</span>
        < Drop_down stroke="#444445" />
      </button>

      <button className="w-full py-6 uppercase text-[1.3rem] font-semibold text-black bg-green rounded-xl mt-4">
        Add Donation
      </button>
    </div>
  )
} 
 
export default Rescue_a_child_card;
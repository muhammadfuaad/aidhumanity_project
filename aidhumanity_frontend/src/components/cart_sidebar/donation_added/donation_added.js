import Donation_type_card from "./donation_type_card";
function Donation_added() {
  return (
      <div className="w-[80%] sm:w-[25%] min-w-[33rem] h-full bg-[#f5f6f7] overflow-hidden border-l-[1rem] border-primary">
        <div className="p-8 flex justify-between border-b border-black">
          <div className="flex gap-2 items-center">
            <img src="./icons/green-plus.svg"></img>

            <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-primary-dark">Donation added</p>
          </div>
          <img src="./icons/black-cross-circle-hollow.svg"></img>
        </div>
        <div className="p-8 flex flex-col">
          <p className="text-[1.6rem] font-semibold tracking-[-0.4px] text-body mb-16">You are donating to <span className="text-red">3 causes</span></p>
          <div className="flex flex-col gap-12">
            < Donation_type_card label="Monthly" title="Sponsor a child for one year" category="MOST NEEDED, DONATION" amount="360" />
            < Donation_type_card label="Monthly" title=<div>Water Solutions<br></br> (Sadaqah Jariyah)</div> category="MOST NEEDED, DONATION" amount="15" />
            < Donation_type_card label="Monthly" title="Water Tankers" category="MOST NEEDED, DONATION" amount="5" />
            
          </div>
          <div className="px-10 pt-10 pb-8 bg-white rounded-3xl flex flex-col border-2 border-primary mt-6">
            <div className="flex justify-between items-center mb-8">
              <p className="text-[1.4rem] font-semibold tracking-[0px] text-[#181818] uppercase">Donations</p>
              <p className="text-[1.8rem] font-bold tracking-[-0.27px] text-[#181818]">£380.00</p>
            </div>
            <button className="w-full h-20 py-6 uppercase text-[1.4rem] font-semibold text-white bg-green rounded-xl mb-4">
              Add Donation
            </button>
            <button className="w-full h-20 py-6 uppercase text-[1.4rem] font-semibold text-white bg-primary rounded-xl">
              Checkout
            </button>

          </div>
          
          <img src="./icons/blue-logo-without-text.svg" className="mt-6 self-center"></img>


        </div>
      </div>
  )
}
export default Donation_added;
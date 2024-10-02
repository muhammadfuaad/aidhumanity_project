import Circular_progress_bar from "./circular_progress_bar";
function Fundraising() {
  return (
    <div className="bg-white rounded-3xl p-8">
      <p className="portal-subheading mb-8">Active pages</p>
      <div className="flex space-x-4 items-start bg-primary-light px-10 py-8 rounded-xl mb-8">
        <img src="./icons/blue-info-circle.svg"></img>
        <p className="text-[1.2rem] font-bold tracking-[-0.3px] text-primary">Raising money for a charity? Your donations are being sent to them automatically.</p>
      </div>
      <div className="flex sm:flex-row items-center justify-between gap-4">
          <div className="flex relative self-start sm:self-auto">
            <img src="./images/pakistan-floods.png" className="w-32 h-32 rounded-xl"></img>
            <div className="bg-amber rounded-full w-8 h-8 absolute -right-4 top-[40%] flex justify-center items-center">
              <p className="text-[1rem] font-bold text-black">Z</p>
            </div>
          </div>
          <div className="flex flex-col gap-8 sm:gap-0 sm:flex-row sm:justify-between items-center w-1/2 sm:w-full">
            <div className="flex flex-col ml-2">
              <p className="text-[1.2rem] font-bold text-black mt-4 mb-2">Pakistan Floods</p>
              <p className="text-[0.8rem] font-medium tracking-[-0.2px] text-[#bdbdbd] mb-4">Disaster & Emergency Appeals</p>
            
              <div className="flex gap-8 relative text-[1.1rem] font-bold tracking-[-0.17px] text-spanish-gray">
                <button className="">Edit</button>
                <button className="relative">View
                  <div className="absolute top-1 -left-4 w-[1px] h-4 bg-bd"></div>
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[1.1rem] font-semibold tracking-[-0.17px] text-primary">Raised: £156<span className="text-green">/£634</span></p>
              <p className="flex space-x-2 text-[1.1rem] font-medium tracking-[-0.17px] text-spanish-gray">
                <span>by</span>
                <img src="./icons/user-circle.svg" className="w-5 brightness-50"></img>
                <span>117</span><span className="font-semibold">supporters</span>
              </p>
            </div>
          </div>
   
          <div className="flex self-end sm:self-auto w-[5.5rem] mt-28 sm:mt-0">
            <Circular_progress_bar />
          </div>
      </div>      
    </div>
  );
}
export default Fundraising;
  
import Progress_bar from "./progress_bar";
import Mobile_header from "../menu_options/components/mobile_header";
function Badge_bronze() {
  return (
    <div className="h-screen sm:h-fit w-full sm:w-[32rem] sm:rounded-3xl">
      <div className="sm:hidden">
        < Mobile_header title="Donation" display_logout="hidden"/>
      </div>
        <div className="bg-light-gray sm:rounded-t-3xl flex flex-col p-8 relative">
          <div className="absolute -bottom-20 right-12 z-10">
            <img src="./icons/badge-bronze.svg"></img>
            <p className="text-[0.9rem] font-semibold tracking-[-0.23px] text-black uppercase mt-2 text-center">Bronze</p>
          </div>
          <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-black mb-1">Ron Hill</p>
          <p className="text-[1.1rem] font-normal tracking-[-0.28px] text-black">Great Britain</p>
        </div>
        <div className="p-12 bg-fa sm:bg-white sm:rounded-b-3xl relative overflow-hidden h-full">
          <img src="./icons/footer-background-logo.svg" className="absolute bottom-12 -right-64 sm:hidden"></img>
          <div className="flex flex-col">
            <p className="text-[0.9rem] font-medium tracking-[0px] text-[#bdbdbd] uppercase">Amount</p>
            <p className="text-[2rem] font-semibold tracking-[-0.5px] text-primary mb-2">£231.50</p>
            <p className="text-[0.9rem] font-medium tracking-[0px] text-[#bdbdbd] uppercase mb-2">For Appeal</p>  
            <div className="flex justify-between">
              <p className="text-[1.2rem] font-bold tracking-[-0.3px] text-black">Water Hands Pumps Uganda</p>
              <div className="bg-amber rounded-full w-8 h-8 flex justify-center items-center">
                <p className="text-[1rem] font-[800] text-black">Z</p>
              </div>
            </div>
            <p className="text-[0.8rem] font-medium tracking-[-0.2px] text-[#bdbdbd] mb-2">Water for All</p>
            < Progress_bar progress='10' option="1" />
            <div className="flex space-x-2 items-center mt-8">
              <img src="./icons/calendar-clock-black.svg"></img>
              <p className="text-[1.1rem] font-medium tracking-[-0.28px] text-black">Tue 12 Dec, 08:15</p>
            </div>
          </div> 
        </div>
    </div>
  );
}
export default Badge_bronze;
import Mobile_header from "../components/mobile_header";
import Radio_component from "../components/radio_component";
import Appeal_title_block from "../components/appeal_title_block";
import Mosque from "../../icons/mosque.svg";
import Water_drop from "../../icons/water-drop.svg";
import Hunger_appeal from "../../icons/hunger-appeal.svg";
import Emergency from "../../icons/emergency.svg";
import Sponsor_orphan from "../../icons/sponsor-orphan.svg";
function Filters() {
  return (
    <div className="bg-[#f5f6f7] min-h-screen relative overflow-hidden">
      <button className="self-start fixed left-0 sm:static bottom-0 w-full sm:w-fit sm:px-20 py-8 sm:py-6 
            uppercase text-[1.4rem] font-semibold text-white bg-green sm:rounded-xl">Apply</button>
      <div className="">
        < Mobile_header title="Filters" display_logout="hidden"/>
      </div>
      <div className="flex flex-col px-6 pb-32">
        <div className="flex flex-col gap-8 mt-20">
          <Radio_component label="All" />
          <Radio_component label="Zakat" />
          <Radio_component label="Sadaqah" />
          <Radio_component label="Sadaqah Jariyah" />
          <Radio_component label="Our fundraiser" />
        </div>
        <div className="py-6 flex flex-col gap-8 mt-20">
          <div className="w-full px-8 py-8 text-[1.6rem] font-bold text-black bg-white outline
            outline-primary rounded-xl">All</div>
            <Appeal_title_block img={Mosque} label="Build a Mosque" />
            <Appeal_title_block img={Emergency} label="Disaster & Emergency Appeals" />
            <Appeal_title_block img={Water_drop} label="Water for all" />
            <Appeal_title_block img={Sponsor_orphan} label="Sponsor an Orphan" />
            <Appeal_title_block img={Hunger_appeal} label="Hunger Appeal" />
        
        </div>
        <button className="w-full py-6 uppercase text-[1.4rem] font-semibold text-spanish-gray bg-transparent outline
              outline-spanish-gray rounded-xl">Reset Filters</button>
      </div>

    </div>
  );
}
export default Filters;
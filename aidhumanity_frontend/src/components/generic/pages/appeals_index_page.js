import Toggle from "../../dashboard/toggle";
import Generic_header from "../../generic_header";
import Footer from "../../footer";
import Home_page_header_mobile from "../../homepage/components/home_page_header_mobile";
import Footer_mobile from "../../footer_mobile";
import Radio_component from "../components/radio_component";
import Appeal_title from "../components/appeal_title";
import Mosque from "../../icons/mosque.svg";
import Water_drop from "../../icons/water-drop.svg";
import Hunger_appeal from "../../icons/hunger-appeal.svg";
import Emergency from "../../icons/emergency.svg";
import Sponsor_orphan from "../../icons/sponsor-orphan.svg";
import Appeals_list from "../components/appeals_list";

function Appeals_index_page() {
  return (
    <section className="overflow-hidden">
      <div className="hidden sm:block">< Generic_header /></div>
      <div className="sm:hidden block">< Home_page_header_mobile /></div>
      <div className="flex flex-col px-8 sm:px-64 bg-[#f9f9f9]">
        <p className="hidden sm:block text-[1.6rem] font-normal tracking-[-0.24px] text-[#999] my-16">Home / Appeals</p>
        <div className="flex justify-between">
          <p className="text-[3.6rem] font-bold tracking-[-0.54px] text-black mt-9 sm:mt-0 sm:mb-12">Appeals</p>
          <div className="hidden sm:flex gap-4 items-center">
            <Radio_component label="All" />
            <Radio_component label="Zakat" />
            <Radio_component label="Sadaqah" />
            <Radio_component label="Sadaqah Jariyah" />
            <Radio_component label="Our fundraiser" />
          </div>
        </div>

        <div className="hidden sm:flex justify-between gap-4 pb-16 border-b-2 border-platinum">
          <a href="#" className="rounded-2xl bg-off-white hover:bg-white hover:border-2 hover:border-primary p-8 flex items-center">
            <p className="text-[1.6rem] font-bold tracking-[-0.4px] text-black">All</p>
          </a>
          <Appeal_title img={Mosque} label="Build a Mosque" />
          <Appeal_title img={Emergency} label="Disaster & Emergency Appeals" />
          <Appeal_title img={Water_drop} label="Water for all" />
          <Appeal_title img={Sponsor_orphan} label="Sponsor an Orphan" />
          <Appeal_title img={Hunger_appeal} label="Hunger Appeal" />
        </div>   

        <div className="mt-16">
          <Appeals_list />  
        </div>  
        <button className="px-12 py-6 self-center my-16 sm:mt-24 sm:mb-32 text-[1.4rem] font-semibold text-primary-dark bg-transparent outline
            outline-spanish-gray rounded-xl">Load More</button>   
      </div>
      <div className="hidden sm:block">< Footer /></div>
      <div className="sm:hidden">< Footer_mobile /></div>
    </section>
  );
}
export default Appeals_index_page;
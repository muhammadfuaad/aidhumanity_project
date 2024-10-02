import Category from "../../category";
import Radio_1 from "../components/radio_1";
import Donation_form from "../components/donation_form";

function Quick_donate() {
  return (
    <Donation_form
      title="Quick Donate"
      content=
      <div className="flex flex-col px-6 py-10 bg-[#f5f6f7] text-[1.4rem] font-medium tracking-[-0.22px] text-black">
        <div className="flex gap-16 sm:justify-between px-8">
          <div className="flex flex-col sm:flex-row sm:gap-4 items-center">
            <div className="sm:order-2">< Category category="Z" /></div>
            <div className="sm:order-3 h-16 sm:h-fit text-center mt-2 sm:mt-0"><p>Sadaqah</p></div>
            < Radio_1 />
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-4 items-center">
            <div className="sm:order-2">< Category category="Z" /></div>
            <div className="sm:order-3 h-16 sm:h-fit text-center mt-2 sm:mt-0"><p>Sadaqah Jariyah</p></div>
            < Radio_1 />
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-4 items-center">
            <div className="sm:order-2">< Category category="Z" /></div>
            <div className="sm:order-3 h-16 sm:h-fit text-center mt-2 sm:mt-0"><p>Sadaqah</p></div>
            < Radio_1 />
          </div>
        </div>
      </div>
    />
  );
}
export default Quick_donate;
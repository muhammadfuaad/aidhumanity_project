import Quick_ways from "./quick_ways";
import Icon_1 from "../../icons/donate.svg"
import Icon_2 from "../../icons/campaign.svg"
import Icon_3 from "../../icons/administrate.svg"

function Alone() {
  return (
    <div className="flex flex-col px-8 sm:px-48 pb-20 sm:py-24">
      <p className="generic-subheading mb-8 mt-16 sm:mt-0">We can’t do this alone</p>
      <p className="generic-body mb-12">Making a difference means coming together to do something bigger and bolder than anyone thought possible.
        To make it happen, we need you to join us and make a commitment to changing the world.
      </p>
      <p className="generic-body mb-20 sm:mb-4">Here’s <span className="font-semibold">3 quick ways</span> you can do it:</p>
      <div className="flex flex-col sm:flex-row gap-8 mb-20 sm:mb-28">
        <div className="w-full sm:w-1/3"><Quick_ways number="1" title="Donate" description="your hard-earned money to a campaign that connects with your goals" img={Icon_1}/></div>
        <div className="w-full sm:w-1/3"><Quick_ways number="2" title="Campaign" description="and devote yourself to a cause that will make the world a better place" img={Icon_2}/></div>
        <div className="w-full sm:w-1/3"><Quick_ways number="3" title="Administrate" description="to ensure everything runs smoothly from beginning to end" img={Icon_3}/></div>
      </div>
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 items-center">
        <p className="text-[2rem] font-semibold tracking-[-0.5px] text-primary">When you’re ready, everything starts with a click…</p>
        <button className="self-start sm:self-center px-20 py-6 uppercase text-[1.4rem] font-semibold text-primary-medium bg-transparent outline
            outline-primary rounded-xl">Register Now</button>
      </div>
    </div>
  );
}
export default Alone;
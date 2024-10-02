import donation_1 from "../../icons/donation-1.png"
import donation_2 from "../../icons/donation-2.png"
import donation_3 from "../../icons/donation-3.png"
import orange from "../../icons/orange-1.png"
import Giving_ways from "./giving_ways"

function Ways() {
  return (
    <div className="flex flex-col sm:flex-row py-16 sm:py-24">
      <div className="sm:w-[60%] gap-10 sm:space-y-8 flex flex-col px-8 sm:pl-48 bg-white">
        <div className="flex flex-col sm:w-[60%] space-y-4">
          <p className="generic-subheading mb-2 sm:mb-0">Ways to give</p>
          <p className="generic-body">Crowd funding lets people play a more important role in their charity.
          Start building your network of giving today.</p>

        </div>
        <div className="flex flex-col gap-6 sm:pr-44">
          <Giving_ways number="01" img ="./icons/donation-1.png" dimensions="w-36 h-28" title="You could make a quick one off donation" description="For those last minute donors or when your unsure of how much to give"/>
          <Giving_ways number="02" img ="./icons/donation-2.png" dimensions="w-40 h-40" title="Subscription donation" description="Making a donation on every Friday or come Ramadan for that continuous support"/>
          <Giving_ways number="03" img ="./icons/donation-3.png" dimensions="w-[8.4rem] h-[10.6rem]" title="Project Backed donation" description="This is great when you back a project that’s close to your heart and receive updates"/>

          
        </div>
      </div>

      <div className="basis-[40%] flex flex-col mt-12 sm:mt-0 pl-8 sm:pl-0">
        <img src={orange} className="rounded-l-3xl"></img>
        <div className="flex flex-col pr-8 sm:pr-48">
          <p className="text-primary text-[36px] font-bold tracking-[-0.54px] mt-16 mb-8">Don’t wait for the world to improve.</p>
          <p className="text-body text-[22px] font-normal tracking-[-0.55px] mb-12 sm:mb-8">Drive meaningful change.</p>
          <button className="w-full sm:w-fit px-20 self-start py-6 uppercase text-[1.4rem] font-semibold text-primary-medium bg-transparent outline
              outline-primary rounded-xl">
            Register now
          </button>
        </div>
      </div>
    </div>
  );
}
export default Ways;
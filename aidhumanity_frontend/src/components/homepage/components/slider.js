import Percentage_vertical from "../../percentage_vertical";
import decorators from "../../icons/decorators.png";
import {ReactComponent as Arrow} from "../../icons/arrow-right-props.svg"
import hero from "../../icons/hero.png"
import Hero_card from './hero_card';


function Slider() {
  return (
    <div className="hero flex flex-col px-8 sm:px-80 py-48 sm:py-20 h-[60vh] sm:h-[70vh] relative">
      <img src={decorators} className="absolute right-0 bottom-40 hidden sm:block"></img>
      <div className="hidden sm:flex gap-10 absolute bottom-20 right-56">
        <Hero_card title="Pakistan Floods"/>
        <Hero_card title="Support an orphan child"/>
      </div>
      <div className="absolute top-80 right-[30rem] hidden sm:block"><Percentage_vertical/></div>
      <button className="opacity-[75%] mt-8 sm:mt-40 mb-6 self-start px-8 py-3 text-[1.4rem] font-semibold text-white bg-transparent outline outline-white rounded-xl">Water for all</button>

      <div className="sm:w-[65%]">
        <p className="text-white text-[5rem] font-bold tracking-[-0.75px] mb-12 sm:mb-6">Build<br></br> a water well</p>
        <p className="opacity-[75%] text-[2.2rem] font-normal tracking-[-0.55px] text-white leading-[3.2rem] mb-28 sm:mb-40 sm:w-3/4 hidden sm:block">1 in 3 people around the world do not have access to clean drinking water. Women and children often walk for miles each day to collect water to drink, denying them the opportunity to go to school, to work and to thrive.</p>
      </div>

      <div className="flex gap-12 items-center">
      <button className='p-8 uppercase text-[1.4rem] font-semibold text-white bg-primary rounded-xl 
              flex space-x-4 justify-center items-center'>
        
        <span>Donate Now</span>
        <Arrow stroke="#fff"/>
      </button>
      <p className="text-amber">from <span className="font-bold">£ 140</span></p>
      </div>
    </div>
  );
}
export default Slider;
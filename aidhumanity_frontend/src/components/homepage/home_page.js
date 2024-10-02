import Home_page_header from "./components/home_page_header";
import kid from "../icons/kid.png"
import Footer from "../footer";
import Appeal_card from "../generic/components/appeal_card";
import Logo from "../icons/logo-without-text.svg"
import quotes from "../icons/double-quotes-yellow.svg"
import News from "./components/news";
import Ways from "./components/ways";
import Achievement from './../generic/components/achievement';
import Testimonial from './../generic/components/testimonial';
import Event from './../generic/components/event';
import Contact from "./components/contact";
import Helped from "./components/helped";
import Slider from "./components/slider";
import Alone from "./components/alone";
import Passionate from "./components/passionate";
import Home_page_header_mobile from './components/home_page_header_mobile';
import Faq from './components/faq';
import Circular_progress_bar from './../dashboard/circular_progress_bar';
import Footer_mobile from "../footer_mobile";
import Generic_header_1 from "../generic/components/generic_header_1";
import Scroller from "../scroller";
import Homepage_hero_slider_collection from "../homepage_hero_slider_collection";
import Appeals_slider_collection from './../appeals_slider_collection';
import Appeals_slick from "../appeals_slick";
import Achievements_slick from './../achievements_slick';
import General_slick from "../general_slick";
import Events_slick from './../events_slick';
// import Homepage_slick from './../homepage_slick';

function Home_page() {
  return (
    <section className="overflow-hidden">
      <div className="hidden sm:block">< Generic_header_1 /></div>
      <div className="sm:hidden block">< Home_page_header_mobile /></div>
      <Homepage_slick/>
      <div className="flex flex-col px-8 sm:px-48 bg-[#f9f9f9] mb-[-35rem] sm:mb-[-27rem] pb-40">
        <p className="self-center text-center sm:self-start generic-subheading mt-16 sm:mt-36 mb-16 sm:mb-28">Appeals <span className="font-medium">that need your backing</span></p>
        <General_slick card=<Appeal_card/> number_of_elements={3}/> 
        <button className="self-center sm:hidden mt-20 px-10 py-6 text-[1.4rem] font-semibold text-primary-dark bg-transparent outline
        outline-spanish-gray rounded-xl sm:self-auto">View All</button>        
      </div>
      <div className="bg-f5 h-[30rem] sm:h-[25rem]"></div>
      <section className="flex flex-col sm:flex-row bg-amber px-8 sm:px-48 py-12">
        <p className="px-8 sm:px-0 text-center sm:text-start basis-[25%] text-primary-dark text-[2.4rem] sm:text-[26px] font-semibold tracking-[-0.6px] sm:tracking-[-0.65px] leading-[2.8rem] sm:leading-[30px] ">What if one action could change the world?</p>
        <div className="flex basis-[25%] items-center space-x-4 px-16 my-8">
          <div className="flex justify-center items-center bg-primary-dark rounded-[100%] relative h-20 w-28 sm:px-0 ">
            <img src={Logo} className=""></img>
          </div>
          <p className="text-body text-[1.6rem] font-medium tracking-[-0.24px] leading-[20px]">Aid Humanity helps you make it happen…</p>
        </div>
        <p className="flex basis-[50%] items-center justify-center text-primary-dark text-[2rem] sm:text-[2.4rem] font-semibold tracking-[-0.5px] sm:tracking-[-0.6px] leading-[2.8rem] px-10 sm:px-10 text-center">Give Back - Deliver Better - Drive Change</p>
      </section>
      <Helped/>
      <Passionate/>
      <div className="flex flex-col gap-16 sm:gap-24 px-8 sm:px-48 pt-24 pb-32 bg-[#f1f1f1]">
        <p className="self-center generic-subheading text-center sm:text-start">Our Achievements<span className="font-semibold"> with your help and more …</span></p>
        <Achievements_slick/>
      </div>     
      <section>
        <div className="flex flex-col sm:flex-row items-center px-8 py-16 space-y-2 bg-primary sm:px-48">
          <p className="text-white text-[1.8rem] font-semibold tracking-[-0.45px] leading-[28px] basis-[70%]">Faithful believers are to each other as the bricks of a wall, supporting and reinforcing each other.<br></br>So saying, the Prophet Muhammad clasped his hands by interlocking his fingers.</p>
          <div className="basis-[30%] flex space-x-6 items-end justify-end ">
            <p className="text-off-white text-[1.6rem] font-medium tracking-[-0.24px] leading-[20px] whitespace-nowrap mb-4">Prophet Muhammed (Al-Bukhari)</p>
            <img src={quotes}></img>
          </div>
        </div>
      </section>
      <Alone/>
      <div className="flex flex-col px-8 sm:px-48 py-24 bg-[#f1f1f1]">
        <p className="self-center generic-subheading text-center sm:text-start mb-12 sm:mb-24">Here’s what our community has to say</p>
        <div className="flex flex-col sm:flex-row gap-12">
          <div className="w-full sm:flex-1 h-[25rem]"><Testimonial name="Andrew" age="9" feedback="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna." img={kid}/></div>
          <div className="w-full sm:flex-1 h-[25rem]"><Testimonial name="Sumayia" age="12" feedback="Suspendisse quis nulla cursus, elementum eros quis, consequat tortor. Nullam sed ex vel mi dignissim molestie id at est. Integer feugiat gravida purus, vel ultrices mauris." img={kid}/></div>
          <div className="w-full sm:flex-1 h-[25rem]"><Testimonial name="Zakya" age="13" feedback="Donec non justo diam. Fusce egestas diam sit amet turpis condimentum, vel imperdiet lectus aliquam. Nunc malesuada enim viverra eros laoreet, eget tincidunt erat aliquet." img={kid}/></div>
        </div>
      </div>

      <div className="flex flex-col px-8 sm:px-48 py-24 sm:pt-24 sm:pb-32 bg-white">
        <p className="self-center generic-subheading mb-16 sm:mb-24">Upcoming Events</p>
        <Events_slick/>
      </div>
      <News/>
      <Ways/>
      <Faq/>
      <Contact/>
      <div className="hidden sm:block">< Footer /></div>
      <div className="sm:hidden">< Footer_mobile /></div>
    </section>
  );
}
export default Home_page;
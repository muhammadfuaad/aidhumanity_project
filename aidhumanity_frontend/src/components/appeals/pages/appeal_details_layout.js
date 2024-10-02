import Appeal_status_2 from '../appeal_status_2';
import Fixed_navigator_1 from '../../fixed_navigator_1';
import Appeal_description_2 from "../appeal_description_2"
import Arrow from "../../icons/arrow-left-white.svg"
import Appeal_details_header_mobile from '../appeal_details_header_mobile';
import Footer from "../../footer";
import Footer_mobile from '../../footer_mobile';
import Appeal_details_header from '../appeal_details_header';
import Recent_donors_list from '../recent_donors_list';

function Appeal_details_layout(props) {
  return (
    <div>
      <div className="flex flex-col bg-[#f5f6f7] min-h-screen relative overflow-hidden">
        <img src="./icons/footer-background-logo.svg" className='hidden sm:flex absolute top-[75rem] right-[-25rem]'></img>
        <div className='sm:hidden'>
          <Appeal_details_header_mobile/>
        </div>
        <div className='hidden sm:block'>< Appeal_details_header /></div>
        <div className='bg-primary-dark h-[26rem] sm:h-80'>
          <div className="flex justify-between w-full mt-10 sm:mt-20 px-8 sm:pl-56 sm:pr-48">
            <p className="hidden sm:flex text-[1.2rem] font-medium tracking-[-0.3px] text-[#e0f7ff]">Home / Appeals / Water for all / Water Hands Pumps</p>
            <div className="flex space-x-4 items-center">
              <img src={Arrow} className="w-8 h-4"></img>
              <p className="uppercase text-[1.2rem] font-bold tracking-[-0.18px] text-[#e0f7ff]">Back to All</p>
            </div>
          </div>
        </div>
        <div className='-mt-80 sm:-mt-40 flex flex-col'>
          <div className='flex flex-col gap-8 px-8 sm:gap-12 sm:flex-row sm:px-56 pb-28 sm:pb-48'>
              <div className='flex flex-col gap-8 sm:px-0 sm:w-[70%] sm:order-1'>
                <div className='sm:hidden'><Appeal_status_2/></div>
                < Appeal_description_2 />
              </div>
            <div className='sm:px-0 sm:w-[30%] sm:order-2 flex flex-col gap-8 relative'>
              <div className='hidden sm:flex'>< Appeal_status_2 /></div>
              {props.fundraiser_details}
              <div className="flex flex-col gap-8">
                {props.fundraisers_content}
                <Recent_donors_list/>
              </div>     
            </div>         
          </div>
          
          {props.donators_content}
        </div>
      
        < Fixed_navigator_1 />
      
      </div>
      <div className="hidden sm:block">< Footer /></div>
      <div className="sm:hidden">< Footer_mobile /></div>
    </div>
  )
}
export default Appeal_details_layout;
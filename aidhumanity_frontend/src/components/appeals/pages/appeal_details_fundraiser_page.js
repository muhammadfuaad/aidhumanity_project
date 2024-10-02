import Appeal_status_2 from '../appeal_status_2';
import Fixed_navigator_1 from '../../fixed_navigator_1';
import Appeal_description_2 from "../appeal_description_2"
import Arrow from "../../icons/arrow-left-white.svg"
import Recent_donors from '../recent_donors';
import Appeal_details_header_mobile from '../appeal_details_header_mobile';
import Footer from "../../footer";
import Footer_mobile from '../../footer_mobile';
import Appeal_details_header from './../appeal_details_header';
import Appeal_card from '../../generic/components/appeal_card';
import Scroller from '../../scroller';
import Fundraiser from "../../icons/fundraiser-hand.svg"
import Fundraisers from './../fundraisers';
import Appeal_details_donator_page from './appeal_details_donator_page';
import Fundraisers_list from './../fundraisers_list';
import Appeal_details_layout from './appeal_details_layout';

function Appeal_details_fundraiser_page(props) {
  return (
    <Appeal_details_layout
      fundraisers_content=
      <div className='flex flex-col gap-8'>
        <div className="p-8 rounded-3xl border border-primary bg-primary-light">
          <div className="flex gap-8">
            <img src={Fundraiser}></img>
            <div className="flex flex-col gap-2">
              <p className="text-[1.6rem] font-bold tracking-[-0.4px] text-black">Be a Fundraiser</p>
              <p className="text-[1.3rem] font-normal tracking-[-0.33px] text-body">Create your own appeal page for “Water for All” and help support this cause.</p>
            </div>       
          </div>
          <button className="mt-8 w-full h-20 py-6 uppercase text-[1.4rem] font-semibold text-black bg-primary rounded-xl">
            Start Fundraising
          </button>
        </div>
        <Fundraisers_list/>
      </div>
    />
  )
}
export default Appeal_details_fundraiser_page;
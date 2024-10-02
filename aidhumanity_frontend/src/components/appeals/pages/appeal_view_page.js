import Appeal_layout from "../appeal_layout";
import Appeal_donations from "../appeal_donations";
import Dashboard_header_mobile from "../../dashboard/dashboard_header_mobile";
import Fixed_navigator from "../../fixed_navigator";
import Appeal_desktop_header from '../appeal_desktop_header';
import Appeal_view from './../appeal_view';

function Appeal_donations_page() {
  return (
    <div className="flex flex-col bg-[#f5f6f7] min-h-screen pb-40">
      <div className="sm:hidden">< Dashboard_header_mobile /></div>
      <div className="hidden sm:block">< Appeal_desktop_header /></div>
      <div className='px-6 flex flex-col items-center'>
        <div className="flex flex-col sm:min-w-[73rem] sm:w-[65%]">
          <Appeal_view />
        </div>  
      </div>
      < Fixed_navigator />
    </div>
  )
}
export default Appeal_donations_page;
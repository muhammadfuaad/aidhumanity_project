import { ReactComponent as Calendar_clock} from "../../icons/calendar-clock.svg"
import { ReactComponent as Drop_down} from "../../icons/drop-down.svg"
import Dashboard_header_mobile from "../dashboard/dashboard_header_mobile";
import Fixed_navigator from "../fixed_navigator";
import Appeal_desktop_header from './appeal_desktop_header';
function Appeal_layout(props) {
  return (
    <div className="flex flex-col bg-[#f5f6f7] min-h-screen pb-40">
      <div className="sm:hidden">< Dashboard_header_mobile /></div>
      <div className="hidden sm:block">< Appeal_desktop_header /></div>
      <div className='px-6 flex flex-col items-center'>
        <div className="flex flex-col sm:min-w-[73rem] sm:w-[65%]">
          <p className='appeals-heading sm:ml-12 my-20'>{props.title}</p>
          <div>{props.appeal_page}</div>
        </div>  
      </div>
      < Fixed_navigator />
    </div>
  )
}
export default Appeal_layout;
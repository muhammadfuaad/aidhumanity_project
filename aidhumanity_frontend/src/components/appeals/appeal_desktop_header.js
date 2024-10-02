import { ReactComponent as User_circle} from "../../icons/user-circle.svg"
import { ReactComponent as Plus} from "../../icons/plus.svg"

function Appeal_desktop_header() {
  return (
    <div className="flex justify-between items-center bg-white pl-56 pr-48 py-8">
      <div className="flex items-center">
        <img src="/icons/dashboard-sidebar-logo.svg" className="mr-8"></img>
        <img src="/icons/dashboard-sidebar-toggler.svg" className="mr-12"></img>
        <button className="flex space-x-4 items-center bg-primary-dark rounded-2xl py-4 px-6 h-fit">
          < Plus stroke="#fff" className="w-4 mb-1"/>
          <span className="text-[1.4rem] font-semibold text-white uppercase">New Appeal</span>
        </button>
      </div>

      <div>
        <div className="flex space-x-8 items-center">
          <a className="flex space-x-2 items-center">
            <span className="text-[1.4rem] font-medium tracking-[-0.21px] text-spanish-gray">En</span>
            <img src="./icons/drop-down.svg"></img>
          </a>
          <a>< User_circle stroke="#444445"/></a>
        </div>
      </div>

    </div>
  )
}
export default Appeal_desktop_header;
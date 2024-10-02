import Badge_bronze from "./dashboard/badge_bronze";
import React from "react";
function Dashboard_table_desktop() {
  const [visibility, setVisibility]= React.useState(false)

  return (
    <table className="w-full bg-white">
      <tr className="text-[0.9rem] font-medium tracking-[0px] text-[#bdbdbd] uppercase">
        <th width="" className="text-left py-4 border-bottom-light pl-4">Name</th>
        <th width="" className="text-left py-4 border-bottom-light">Country</th>
        <th width="" className="text-left py-4 border-bottom-light">Date</th>
        <th width="" className="text-left py-4 border-bottom-light">Amount</th>
        <th width="" className="text-left py-4 border-bottom-light pr-2"></th>
      </tr>
      <tr className="text-[1.1rem] tracking-[-0.28px]">
        <td className="flex space-x-2 items-center py-2 border-bottom-light pl-4">
          <img src="./icons/user-circle.svg" className="w-6"></img>
          <span className="font-semibold text-primary-dark">Ron Hill</span>
        </td>
        <td className="py-2 border-bottom-light"><span className="font-normal text-black">Great Britain</span></td>
        <td className="flex space-x-2 items-center py-2 border-bottom-light">
          <img src="./icons/calendar-clock.svg" className="brightness-0 w-6"></img>
          <span className="font-medium text-black">Tue 12 Dec, 08:15</span>
        </td>
        <td className="py-2 border-bottom-light"><span className="font-semibold text-primary">£231.50</span></td>
        <td className="py-2 border-bottom-light pr-2" onClick={()=>setVisibility(current => !current)}><img src="./icons/eye.svg"></img></td>
        {visibility ? <div className="absolute bottom-60 z-50"><Badge_bronze/></div> : null}
      </tr>

      <tr className="text-[1.1rem] tracking-[-0.28px]">
        <td className="flex space-x-2 items-center py-2 border-bottom-light pl-4">
          <img src="./icons/user-circle.svg" className="w-6"></img>
          <span className="font-semibold text-primary-dark">Ron Hill</span>
        </td>
        <td className="py-2 border-bottom-light"><span className="font-normal text-black">Great Britain</span></td>
        <td className="flex space-x-2 items-center py-2 border-bottom-light">
          <img src="./icons/calendar-clock.svg" className="brightness-0 w-6"></img>
          <span className="font-medium text-black">Tue 12 Dec, 08:15</span>
        </td>
        <td className="py-2 border-bottom-light"><span className="font-semibold text-primary">£231.50</span></td>
        <td className="py-2 border-bottom-light pr-2"><img src="./icons/eye.svg"></img></td>
      </tr>

      <tr className="text-[1.1rem] tracking-[-0.28px]">
        <td className="flex space-x-2 items-center py-2 border-bottom-light pl-4">
          <img src="./icons/user-circle.svg" className="w-6"></img>
          <span className="font-semibold text-primary-dark">Ron Hill</span>
        </td>
        <td className="py-2 border-bottom-light"><span className="font-normal text-black">Great Britain</span></td>
        <td className="flex space-x-2 items-center py-2 border-bottom-light">
          <img src="./icons/calendar-clock.svg" className="brightness-0 w-6"></img>
          <span className="font-medium text-black">Tue 12 Dec, 08:15</span>
        </td>
        <td className="py-2 border-bottom-light"><span className="font-semibold text-primary">£231.50</span></td>
        <td className="py-2 border-bottom-light pr-2"><img src="./icons/eye.svg"></img></td>
      </tr>

      <tr className="text-[1.1rem] tracking-[-0.28px]">
        <td className="flex space-x-2 items-center py-2 pl-4">
          <img src="./icons/user-circle.svg" className="w-6"></img>
          <span className="font-semibold text-primary-dark">Ron Hill</span>
        </td>
        <td className="py-2"><span className="font-normal text-black">Great Britain</span></td>
        <td className="flex space-x-2 items-center py-2">
          <img src="./icons/calendar-clock.svg" className="brightness-0 w-6"></img>
          <span className="font-medium text-black">Tue 12 Dec, 08:15</span>
        </td>
        <td className="py-2"><span className="font-semibold text-primary">£231.50</span></td>
        <td className="py-2 pr-2"><img src="./icons/eye.svg"></img></td>
      </tr>
    </table>
  );
}
export default Dashboard_table_desktop;
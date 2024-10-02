import {ReactComponent as User_circle} from "../../icons/user-circle.svg";
import email from "../icons/email.svg";
import Pump from "../icons/water-hand-pumps-1.png"

function Appeal_description_2() {
  return (
    <div className="flex flex-col bg-white rounded-3xl">
      <div className="py-8 px-8">
        <p className="text-[1.2rem] font-medium tracking-[-0.3px] text-[#bdbdbd] mb-1">Water for All</p>
        <div className="flex justify-between">
          <p className="text-[2.6rem] font-bold tracking-[-0.65px] text-black leading-[3rem] sm:text-[3.6rem] sm:tracking-[-0.54px] sm:leading-[4rem] mb-6 sm:mb-4">Water Hand Pumps</p>
          <div className="bg-amber rounded-full w-12 h-12 hidden sm:flex justify-center items-center">
            <p className="text-[1.6rem] font-bold text-black">Z</p>
          </div>
        </div>  
        <div className="flex space-x-2 items-center">
          <p className="text-[1.1rem] font-normal tracking-[-0.28px] text-body">fundraised by</p>
          < User_circle stroke="#102558" />
          <p className="text-[1.1rem] font-semibold tracking-[-0.28px] text-primary-dark">Ron Hill</p>
        </div>
      </div>
      

        <div className="w-full"><img src={Pump} className="w-full"></img></div>
      <div className="p-8 border-bottom-light">
        <p className="text-[1.6rem] font-bold tracking-[-0.4px] text-black leading-[2rem] sm:text-[1.8rem] sm:tracking-[-0.45px] sm:leading-[2.4rem] mb-8 sm:mt-4">Story</p>
        <div className="text-[1.3rem] font-normal tracking-[-0.33px] text-body flex flex-col">
          <p className="mb-8 sm:mb-0">
            1 in every 3 people around the world do not have clean water to drink. Millions are forced
            to drink dirty, unsafe water that could kill them, and is spreading deadly diseases among
            vulnerable communities. Women and children are forced to walk miles each day on dangerous
            terrain to fetch clean water, when they should be at home, at school, thriving and content.
            In 2016, UNICEF estimated that 200 million hours a day are spent by women and girls around
            the world just collecting water.
          </p>
          <p className="text-[1rem] font-medium tracking-[-0.15px] text-primary-dark self-center">Read More</p>
          <button className="sm:hidden mt-12 w-full py-6 uppercase text-[1.4rem] font-semibold text-primary bg-transparent outline
            outline-primary rounded-xl">Start Fundraising Now</button>
        </div>
      </div>

      <div className="p-8 border-bottom-light">
        <p className="card-heading mb-8">About</p>
        <div className="text-[1.3rem] font-normal tracking-[-0.33px] text-body">
          <p className="mb-8 sm:mb-0">
            1 in every 3 people around the world do not have clean water to drink. Millions are forced
            to drink dirty, unsafe water that could kill them, and is spreading deadly diseases among
            vulnerable communities. Women and children are forced to walk miles each day on dangerous
            terrain to fetch clean water, when they should be at home, at school, thriving and content.
            In 2016, UNICEF estimated that 200 million hours a day are spent by women and girls around
            the world just collecting water.
          </p>
          <p>
            A water donation is one of the greatest things you can do
            with your charity this Ramadan.
          </p>
        </div>
      </div>

      <div className="p-8 border-bottom-light">
        <p className="card-heading mb-8">Summary</p>
        <table className="w-full hidden">
          <tr className="text-[1.4rem] font-normal tracking-[-0.35px] text-black">
            <th className="w-1/4 text-start pb-2">Total raised</th>
            <th className="w-1/4 text-start pb-2">Direct donations</th>
            <th className="w-1/4 text-start pb-2">Donations via Fundraisers</th>
            <th className="w-1/4 text-start pb-2">Offline donations</th>
          </tr>
          <tr className="text-[1.8rem] font-semibold tracking-[-0.45px] text-black">
            <td>£4.342</td>
            <td>£1.034</td>
            <td>£1.034</td>
            <td>£1.034</td>
          </tr>
        </table>

        <div className="rounded-3xl border border-platinum p-8 w-full">
          <div className="flex flex-col sm:flex-row sm:gap-4 sm:justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-[1.4rem] font-normal tracking-[-0.35px] text-black leading-[2.4rem]">Total raised</p>
              <p className="text-[2.4rem] font-semibold tracking-[-0.6px] text-black leading-[2.4rem] flex items-center gap-2">£4.342<span className="text-[1.6rem]"> + £523 Gift Ad</span></p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[1.4rem] font-normal tracking-[-0.35px] text-black leading-[2.4rem]">Total raised</p>
              <p className="text-[1.8rem] font-semibold tracking-[-0.45px] text-black leading-[2.2rem]">£4.342</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[1.4rem] font-normal tracking-[-0.35px] text-black leading-[2.4rem]">Total raised</p>
              <p className="text-[1.8rem] font-semibold tracking-[-0.45px] text-black leading-[2.2rem]">£4.342</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[1.4rem] font-normal tracking-[-0.35px] text-black leading-[2.4rem]">Total raised</p>
              <p className="text-[1.8rem] font-semibold tracking-[-0.45px] text-black leading-[2.2rem]">£4.342</p>
            </div>
          </div>
          <p className="text-[1rem] font-medium tracking-[-0.15px] text-[#bdbdbd] mt-6">* Charities pay a small fee for our service. <span className="font-semibold text-primary">Find out how much its is and what we do for it.</span></p>
        </div>        
      </div>

      <div className="px-8 pt-8 pb-12 sm:pb-20 border-bottom-light">
        <p className="card-heading mb-8">Share</p>
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
          <button className='w-full py-6 uppercase text-[1.4rem] font-semibold text-white bg-primary-medium rounded-xl
                flex space-x-4 justify-center'>
            <img src="./icons/facebook.svg"></img>
            <span>Share on Facebook</span>
          </button>
          <button className='w-full py-6 uppercase text-[1.4rem] font-semibold text-white bg-primary rounded-xl
            flex space-x-4 justify-center'>
            <img src="./icons/twitter-white.svg"></img>
            <span>Share</span>
          </button>
          <button className="w-full py-6 uppercase text-[1.4rem] font-semibold text-spanish-gray bg-transparent outline
                outline-spanish-gray rounded-xl flex justify-center items-center space-x-4">
            <img src={email}></img>
            <span>Share</span>
          </button>
        </div>

      </div>
    </div>
  )
}
export default Appeal_description_2;